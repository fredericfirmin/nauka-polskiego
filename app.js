const STORAGE_KEY = "nauka_polskiego_cards_v8";
const LEGACY_STORAGE_KEY = "nauka_polskiego_cards_v7";

// État global de l'application
let cards = [];
let currentCategory = "all";
let currentDirection = "mixed"; // "pl-fr", "fr-pl", "mixed"
let algorithmMode = "adaptive"; // "adaptive" (priorité erreurs), "mistakes-only", "random"
let autoAudio = false;

// État Quiz / Session
let currentQuizCard = null;
let currentQuizDirection = "pl-fr";
let currentQuizOptions = [];
let quizAnswered = false;
let quizScore = 0;
let quizTotal = 0;
let quizStreak = 0;

// État Flashcard
let flashcardIndex = 0;
let flashcardList = [];
let isFlipped = false;

// État Écriture
let typingCard = null;
let typingDirection = "fr-pl";
let typingScore = 0;
let typingTotal = 0;
let typingStreak = 0;

// État Jeu des Cas (Przypadki)
let currentCaseFilter = "all";
let currentCaseTypeFilter = "all"; // "all", "noun", "adjective", "plural"
let currentCaseChallenge = null;
let caseScore = 0;
let caseTotal = 0;
let caseStreak = 0;
let caseAnswered = false;

// État Module Possessifs & Démonstratifs
let currentPossLevelFilter = "all"; // "all", 1, 2
let currentPossCategoryFilter = "all"; // "all", "1st", "2nd", "3rd-invariable", "reflexive", "demonstrative"
let currentPossChallenge = null;
let possScore = 0;
let possTotal = 0;
let possStreak = 0;
let possAnswered = false;

// Audio en cours
let currentAudioElement = null;

// Initialisation au chargement du DOM
document.addEventListener("DOMContentLoaded", () => {
  loadCards();
  initSettings();
  initTabs();
  initQuiz();
  initFlashcards();
  initTyping();
  initCases();
  initPossessives();
  renderCardsTable();
  setupSpecialKeys();
  setupKeyboardShortcuts();
  updateMasteryCounters();
  updateStatsCounters();
  updateQuizStatsCounters();
  updateTypingStatsCounters();
  updateCaseStatsCounters();
  updatePossStatsCounters();
  updatePossCounts();
  registerServiceWorker();
});

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("./sw.js?v=21")
        .then((reg) => {
          console.log("PWA Service Worker actif :", reg.scope);
          // Forcer la recherche de mise à jour à chaque ouverture (vital sur iOS PWA)
          reg.update();
        })
        .catch((err) => {
          console.warn("Service Worker :", err);
        });

      // Si un nouveau Service Worker s'active, recharger automatiquement pour appliquer les styles
      let refreshing = false;
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        if (!refreshing) {
          refreshing = true;
          window.location.reload();
        }
      });
    });
  }
}

// ==========================================
// GESTION DES DONNÉES & LOCALSTORAGE
// ==========================================

function loadCards() {
  let saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    // Parcourt les versions antérieures pour garantir la conservation des cartes ajoutées manuellement
    for (let v = 20; v >= 1; v--) {
      const candidate = localStorage.getItem(`nauka_polskiego_cards_v${v}`);
      if (candidate) {
        saved = candidate;
        break;
      }
    }
    if (!saved) {
      saved = localStorage.getItem("nauka_polskiego_cards");
    }
  }

  if (saved) {
    try {
      cards = JSON.parse(saved);
      // Synchroniser avec les nouvelles définitions officielles tout en préservant les cartes personnalisées
      synchronizeWithDefaultCards();
    } catch (e) {
      console.error("Erreur lecture localStorage, restauration", e);
      cards = [...INITIAL_CARDS];
    }
  } else {
    cards = [...INITIAL_CARDS];
    saveCards();
  }
  updateCategoryDropdowns();
}

/**
 * Assure que les métadonnées de genre et les réponses acceptées du set initial
 * sont bien intégrées même si l'utilisateur avait une sauvegarde locale précédente.
 * Ajoute également toutes les cartes nouvelles introduites dans INITIAL_CARDS.
 */
function synchronizeWithDefaultCards() {
  const defaultMap = new Map(INITIAL_CARDS.map(c => [c.id, c]));
  const existingIds = new Set(cards.map(c => c.id));

  cards = cards.map(c => {
    if (defaultMap.has(c.id)) {
      const def = defaultMap.get(c.id);
      const sc = c.successCount || 0;
      const mc = c.mistakeCount || 0;
      const lvl = (c.level || 0) === 0 && sc > 0 ? Math.min(5, Math.max(1, sc - mc)) : (c.level || 0);
      return {
        ...def,
        successCount: sc,
        mistakeCount: mc,
        level: lvl,
        consecutive: c.consecutive || (mc === 0 ? sc : 0),
        lastReviewed: c.lastReviewed || null
      };
    }
    const sc = c.successCount || 0;
    const mc = c.mistakeCount || 0;
    const lvl = (c.level || 0) === 0 && sc > 0 ? Math.min(5, Math.max(1, sc - mc)) : (c.level || 0);
    return {
      ...c,
      successCount: sc,
      mistakeCount: mc,
      level: lvl,
      consecutive: c.consecutive || (mc === 0 ? sc : 0),
      lastReviewed: c.lastReviewed || null
    };
  });

  // Ajouter les cartes manquantes du set par défaut (ex: nombres, jours, mois...)
  INITIAL_CARDS.forEach(def => {
    if (!existingIds.has(def.id)) {
      cards.push({
        ...def,
        successCount: 0,
        mistakeCount: 0,
        level: 0,
        consecutive: 0,
        lastReviewed: null
      });
    }
  });

  saveCards();
}

function saveCards() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
  updateStatsCounters();
  updateMasteryCounters();
}

function resetToDefaultCards() {
  if (confirm("Voulez-vous vraiment réinitialiser toutes les cartes au set initial ? Vos ajouts personnalisés seront remplacés.")) {
    cards = [...INITIAL_CARDS];
    saveCards();
    updateCategoryDropdowns();
    renderCardsTable();
    startNewQuizQuestion();
    initFlashcards();
    startNewTypingQuestion();
    alert("Les données ont été réinitialisées au set initial.");
  }
}

function exportCardsToJson() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(cards, null, 2));
  const downloadAnchor = document.createElement("a");
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `cartes_polonais_${new Date().toISOString().slice(0, 10)}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

function importCardsFromJson(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const imported = JSON.parse(e.target.result);
      if (Array.isArray(imported) && imported.length > 0 && imported[0].pl && imported[0].fr) {
        cards = imported;
        saveCards();
        updateCategoryDropdowns();
        renderCardsTable();
        startNewQuizQuestion();
        initFlashcards();
        alert(`${cards.length} cartes importées avec succès !`);
      } else {
        alert("Le format du fichier JSON n'est pas valide (doit être un tableau d'objets avec au minimum 'pl' et 'fr').");
      }
    } catch (err) {
      alert("Erreur lors de la lecture du fichier JSON : " + err.message);
    }
  };
  reader.readAsText(file);
  event.target.value = "";
}

// ==========================================
// NAVIGATION PAR ONGLETS & RÉGLAGES
// ==========================================

function initTabs() {
  const tabButtons = document.querySelectorAll(".tab-btn");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetTab = btn.getAttribute("data-tab");
      
      tabButtons.forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".tab-content").forEach(content => content.classList.remove("active"));
      
      btn.classList.add("active");
      const targetElement = document.getElementById(targetTab);
      if (targetElement) {
        targetElement.classList.add("active");
      }

      // Masquer / afficher la barre de réglages et raccourcis de vocabulaire selon l'onglet
      const vocabControls = document.getElementById("vocab-controls-section");
      const vocabQuickModes = document.getElementById("vocab-quick-modes-section");
      const isVocabMode = (targetTab === "quiz-tab" || targetTab === "flashcard-tab" || targetTab === "typing-tab");

      if (vocabControls) {
        vocabControls.style.display = isVocabMode ? "" : "none";
      }
      if (vocabQuickModes) {
        vocabQuickModes.style.display = isVocabMode ? "" : "none";
      }

      if (targetTab === "quiz-tab") {
        if (!currentQuizCard) startNewQuizQuestion();
      } else if (targetTab === "flashcard-tab") {
        initFlashcards();
      } else if (targetTab === "typing-tab") {
        startNewTypingQuestion();
      } else if (targetTab === "cases-tab") {
        if (!currentCaseChallenge) startNewCaseQuestion();
      } else if (targetTab === "possessives-tab") {
        if (!currentPossChallenge) startNewPossQuestion();
      } else if (targetTab === "manager-tab") {
        renderCardsTable();
      }
    });
  });
}

function initSettings() {
  const dirSelect = document.getElementById("direction-select");
  const catSelect = document.getElementById("category-select");
  const algoSelect = document.getElementById("algorithm-select");
  const autoAudioCheckbox = document.getElementById("auto-audio-toggle");

  if (dirSelect) {
    dirSelect.addEventListener("change", (e) => {
      currentDirection = e.target.value;
      startNewQuizQuestion();
      initFlashcards();
    });
  }

  if (catSelect) {
    catSelect.addEventListener("change", (e) => {
      currentCategory = e.target.value;
      updateQuickExercisePills();
      startNewQuizQuestion();
      initFlashcards();
      startNewTypingQuestion();
    });
  }

  if (algoSelect) {
    algoSelect.addEventListener("change", (e) => {
      algorithmMode = e.target.value;
      updateAlgorithmButtons();
      startNewQuizQuestion();
      initFlashcards();
      startNewTypingQuestion();
    });
  }

  if (autoAudioCheckbox) {
    autoAudioCheckbox.addEventListener("change", (e) => {
      autoAudio = e.target.checked;
    });
  }
}

// ==========================================
// MOTEUR DE RÉPÉTITION ESPACÉE & ANALYSE DES ERREURS
// ==========================================

function recordCardResult(cardId, isSuccess) {
  const card = cards.find(c => c.id === cardId);
  if (!card) return;

  if (isSuccess) {
    card.successCount = (card.successCount || 0) + 1;
    card.consecutive = (card.consecutive || 0) + 1;
    // Progression de niveau après réussite
    card.level = Math.min(5, (card.level || 0) + 1);
  } else {
    card.mistakeCount = (card.mistakeCount || 0) + 1;
    card.consecutive = 0;
    // Régression de niveau après erreur
    card.level = Math.max(0, (card.level || 0) - 1);
  }

  card.lastReviewed = Date.now();
  saveCards();
  updateMasteryCounters();
}

function getCardMasteryInfo(card) {
  if (!card) return { status: "new", label: "⚪ Nouveau", class: "mastery-new", level: 0 };
  const sc = card.successCount || 0;
  const mc = card.mistakeCount || 0;
  const lvl = card.level || 0;

  // 1. Carte jamais révisée
  if (sc === 0 && mc === 0) {
    return { status: "new", label: "⚪ Nouveau", class: "mastery-new", level: 0 };
  }

  // 2. Erreurs avérées nécessitant une révision prioritaire
  // Une carte n'est "À revoir" QUE si elle a au moins 1 erreur non résolue !
  if (mc > 0 && (mc > sc || mc >= 2 || (card.consecutive === 0))) {
    return { status: "review", label: `🔴 À revoir (${mc} err.)`, class: "mastery-poor", level: lvl };
  }

  // 3. Carte bien maîtrisée (niveau élevé et peu/pas d'erreurs)
  if (lvl >= 3 && sc >= 3 && (mc === 0 || card.consecutive >= 3)) {
    return { status: "mastered", label: `🟢 Maîtrisé (${lvl}/5)`, class: "mastery-good", level: lvl };
  }

  // 4. En cours d'apprentissage (0 erreur ou erreurs déjà surmontées par de nouvelles réussites)
  return { status: "learning", label: `🟡 En cours (${lvl}/5)`, class: "mastery-medium", level: lvl };
}

/**
 * Tirage pondéré adaptatif :
 * Plus un mot a d'erreurs ou un niveau faible, plus sa probabilité d'apparaître augmente !
 */
function getWeightedRandomCard(activeDeck) {
  if (!activeDeck || activeDeck.length === 0) return null;

  if (algorithmMode === "random") {
    return activeDeck[Math.floor(Math.random() * activeDeck.length)];
  }

  if (algorithmMode === "mistakes-only") {
    const mistakeCards = activeDeck.filter(c => (c.mistakeCount || 0) > 0);
    if (mistakeCards.length > 0) {
      return mistakeCards[Math.floor(Math.random() * mistakeCards.length)];
    }
    // Si aucune erreur enregistrée dans cette catégorie, tirer dans tout le deck
    return activeDeck[Math.floor(Math.random() * activeDeck.length)];
  }

  // Mode "adaptive" (par défaut) : calcul des poids
  // Formule de fréquence adaptative :
  // Poids de base = 10
  // + (erreurs * 6)  -> augmente fortement la fréquence des mots ratés
  // - (succès * 2)   -> réduit la fréquence des mots sus
  // - (niveau * 2)   -> réduit encore la fréquence des mots consolidés
  const weights = activeDeck.map(c => {
    const sc = c.successCount || 0;
    const mc = c.mistakeCount || 0;
    const lvl = c.level || 0;
    const rawWeight = 10 + (mc * 6) - (sc * 2) - (lvl * 2);
    return Math.max(1, rawWeight);
  });

  const totalWeight = weights.reduce((sum, w) => sum + w, 0);
  let randomVal = Math.random() * totalWeight;

  for (let i = 0; i < activeDeck.length; i++) {
    randomVal -= weights[i];
    if (randomVal <= 0) {
      return activeDeck[i];
    }
  }

  return activeDeck[activeDeck.length - 1];
}

function updateMasteryCounters() {
  let mastered = 0;
  let learning = 0;
  let review = 0;
  let mistakesTotal = 0;

  cards.forEach(c => {
    const info = getCardMasteryInfo(c);
    if (info.status === "mastered") mastered++;
    else if (info.status === "learning") learning++;
    else if (info.status === "review") review++;

    if ((c.mistakeCount || 0) > 0) mistakesTotal++;
  });

  const elMastered = document.getElementById("stat-mastered");
  const elLearning = document.getElementById("stat-learning");
  const elReview = document.getElementById("stat-review");
  const elBtnMistakes = document.getElementById("btn-quick-mistakes-count");

  if (elMastered) elMastered.innerText = mastered;
  if (elLearning) elLearning.innerText = learning;
  if (elReview) elReview.innerText = review;
  if (elBtnMistakes) elBtnMistakes.innerText = mistakesTotal;
}

function setAlgorithmMode(mode) {
  algorithmMode = mode;
  const algoSelect = document.getElementById("algorithm-select");
  if (algoSelect) {
    algoSelect.value = mode;
  }
  updateAlgorithmButtons();
  startNewQuizQuestion();
  initFlashcards();
  startNewTypingQuestion();
}

function updateAlgorithmButtons() {
  const btnMistakes = document.getElementById("btn-quick-mistakes");
  if (btnMistakes) {
    if (algorithmMode === "mistakes-only") {
      btnMistakes.classList.add("active");
    } else {
      btnMistakes.classList.remove("active");
    }
  }
}

function resetMasteryStats() {
  if (confirm("Voulez-vous réinitialiser l'historique de vos réussites et erreurs ? Vos cartes de vocabulaire seront conservées.")) {
    cards.forEach(c => {
      c.successCount = 0;
      c.mistakeCount = 0;
      c.level = 0;
      c.consecutive = 0;
      c.lastReviewed = null;
    });
    saveCards();
    updateMasteryCounters();
    renderCardsTable();
    startNewQuizQuestion();
    initFlashcards();
    alert("Historique des statistiques d'erreurs remis à zéro.");
  }
}

function updateCategoryDropdowns() {
  const categories = Array.from(new Set(cards.map(c => c.category || "Général"))).sort();
  const catSelect = document.getElementById("category-select");
  const formCatSelect = document.getElementById("card-category-input");

  const timeAndNumbersCards = cards.filter(c => 
    ["Nombres", "Jours de la semaine", "Saisons", "Mois de l'année"].includes(c.category)
  );

  if (catSelect) {
    const currentVal = catSelect.value;
    catSelect.innerHTML = `
      <option value="all">🌟 Toutes les catégories (${cards.length})</option>
      <option value="time-and-numbers" style="font-weight:700; color:#dc2626;">🎯 EXERCICE : Nombres, Jours, Mois & Saisons (${timeAndNumbersCards.length})</option>
      <optgroup label="Par thème individuel">
    `;

    categories.forEach(cat => {
      const count = cards.filter(c => c.category === cat).length;
      catSelect.innerHTML += `<option value="${cat}">${cat} (${count})</option>`;
    });

    catSelect.innerHTML += `</optgroup>`;

    if (categories.includes(currentVal) || currentVal === "all" || currentVal === "time-and-numbers") {
      catSelect.value = currentVal;
    }
    updateQuickExercisePills();
  }

  if (formCatSelect) {
    formCatSelect.innerHTML = "";
    categories.forEach(cat => {
      formCatSelect.innerHTML += `<option value="${cat}">${cat}</option>`;
    });
    formCatSelect.innerHTML += `<option value="Autre">+ Nouvelle catégorie...</option>`;
  }
}

function getFilteredCards() {
  if (currentCategory === "all") {
    return cards;
  }
  if (currentCategory === "time-and-numbers") {
    const specialCategories = ["Nombres", "Jours de la semaine", "Saisons", "Mois de l'année"];
    return cards.filter(c => specialCategories.includes(c.category));
  }
  return cards.filter(c => c.category === currentCategory);
}

function setQuickExercise(mode) {
  currentCategory = mode;
  const catSelect = document.getElementById("category-select");
  if (catSelect) {
    catSelect.value = mode;
  }
  updateQuickExercisePills();
  startNewQuizQuestion();
  initFlashcards();
  startNewTypingQuestion();
}

function updateQuickExercisePills() {
  const btnTimeNumbers = document.getElementById("btn-quick-time-numbers");
  const btnAll = document.getElementById("btn-quick-all");
  if (btnTimeNumbers && btnAll) {
    if (currentCategory === "time-and-numbers") {
      btnTimeNumbers.classList.add("active");
      btnAll.classList.remove("active");
    } else if (currentCategory === "all") {
      btnAll.classList.add("active");
      btnTimeNumbers.classList.remove("active");
    } else {
      btnTimeNumbers.classList.remove("active");
      btnAll.classList.remove("active");
    }
  }
}

// ==========================================
// DISTRACTEURS & CHOIX MULTIPLES
// ==========================================

function getDistractorsForCard(targetCard, targetLang) {
  const correctText = targetLang === "fr" ? targetCard.fr : targetCard.pl;
  const manualList = targetLang === "fr" ? (targetCard.distractorsFr || []) : (targetCard.distractorsPl || []);

  const distractors = [];

  manualList.forEach(item => {
    const trimmed = item.trim();
    if (trimmed && trimmed.toLowerCase() !== correctText.toLowerCase() && !distractors.includes(trimmed)) {
      distractors.push(trimmed);
    }
  });

  if (distractors.length >= 3) {
    return distractors.slice(0, 3);
  }

  // Chercher dans la même catégorie
  const sameCatCards = cards.filter(c => c.id !== targetCard.id && c.category === targetCard.category);
  shuffleArray(sameCatCards);

  for (const c of sameCatCards) {
    const cand = (targetLang === "fr" ? c.fr : c.pl).trim();
    if (cand && cand.toLowerCase() !== correctText.toLowerCase() && !distractors.includes(cand)) {
      distractors.push(cand);
      if (distractors.length >= 3) break;
    }
  }

  if (distractors.length >= 3) {
    return distractors.slice(0, 3);
  }

  // Compléter avec d'autres cartes
  const otherCards = cards.filter(c => c.id !== targetCard.id);
  shuffleArray(otherCards);

  for (const c of otherCards) {
    const cand = (targetLang === "fr" ? c.fr : c.pl).trim();
    if (cand && cand.toLowerCase() !== correctText.toLowerCase() && !distractors.includes(cand)) {
      distractors.push(cand);
      if (distractors.length >= 3) break;
    }
  }

  while (distractors.length < 3) {
    distractors.push(`Option ${distractors.length + 1}`);
  }

  return distractors.slice(0, 3);
}

// ==========================================
// MODE QUIZ (QCM AVEC 4 RÉPONSES)
// ==========================================

function initQuiz() {
  const nextBtn = document.getElementById("quiz-next-btn");
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      startNewQuizQuestion();
    });
  }

  const audioBtn = document.getElementById("quiz-audio-btn");
  if (audioBtn) {
    audioBtn.addEventListener("click", () => {
      if (currentQuizCard) {
        speakPolish(currentQuizCard.pl);
      }
    });
  }

  startNewQuizQuestion();
}

function startNewQuizQuestion() {
  const activeDeck = getFilteredCards();
  if (activeDeck.length === 0) {
    document.getElementById("quiz-question-text").innerText = "Aucune carte disponible dans cette catégorie.";
    document.getElementById("quiz-options-container").innerHTML = "";
    return;
  }

  quizAnswered = false;
  document.getElementById("quiz-feedback").style.display = "none";
  document.getElementById("quiz-next-btn").style.display = "none";

  // Tirage adaptatif pondéré (priorité aux cartes difficiles et erreurs)
  currentQuizCard = getWeightedRandomCard(activeDeck) || activeDeck[0];

  if (currentDirection === "mixed") {
    currentQuizDirection = Math.random() > 0.5 ? "pl-fr" : "fr-pl";
  } else {
    currentQuizDirection = currentDirection;
  }

  const isPlToFr = currentQuizDirection === "pl-fr";
  const questionText = isPlToFr ? currentQuizCard.pl : currentQuizCard.fr;
  const correctAnswer = isPlToFr ? currentQuizCard.fr : currentQuizCard.pl;
  const targetLang = isPlToFr ? "fr" : "pl";

  document.getElementById("quiz-category-tag").innerText = currentQuizCard.category || "Général";
  document.getElementById("quiz-question-text").innerText = questionText;
  
  // Badge de maîtrise de la carte
  const masteryBadge = document.getElementById("quiz-card-mastery");
  if (masteryBadge) {
    const info = getCardMasteryInfo(currentQuizCard);
    masteryBadge.className = `badge-mastery ${info.class}`;
    masteryBadge.innerText = info.label;
  }

  // Précision des genres (uniquement si la question est déjà en polonais pour ne pas spoiler la réponse)
  const genderEl = document.getElementById("quiz-gender-info");
  if (genderEl) {
    if (isPlToFr && currentQuizCard.genderNotes) {
      genderEl.innerText = `💡 ${currentQuizCard.genderNotes}`;
      genderEl.style.display = "block";
    } else {
      genderEl.style.display = "none";
    }
  }

  const dirLabel = document.getElementById("quiz-direction-label");
  if (dirLabel) {
    dirLabel.innerHTML = isPlToFr 
      ? `🇵🇱 Polonais &rarr; 🇫🇷 Devinez la traduction en français` 
      : `🇫🇷 Français &rarr; 🇵🇱 Devinez la traduction en polonais`;
  }

  // Gestion Audio
  const audioBtn = document.getElementById("quiz-audio-btn");
  if (audioBtn) {
    if (isPlToFr) {
      audioBtn.style.display = "inline-flex";
      if (autoAudio) {
        speakPolish(currentQuizCard.pl);
      }
    } else {
      audioBtn.style.display = "none";
    }
  }

  const distractors = getDistractorsForCard(currentQuizCard, targetLang);
  const options = [correctAnswer, ...distractors];
  shuffleArray(options);
  currentQuizOptions = options;

  renderQuizOptions(options, correctAnswer);
}

function renderQuizOptions(options, correctAnswer) {
  const container = document.getElementById("quiz-options-container");
  container.innerHTML = "";

  const letters = ["A", "B", "C", "D"];

  options.forEach((optText, index) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.setAttribute("data-option", optText);
    btn.setAttribute("data-index", index + 1);

    btn.innerHTML = `
      <span class="option-letter">${letters[index] || index + 1}</span>
      <span class="option-label">${optText}</span>
    `;

    btn.addEventListener("click", () => handleQuizOptionClick(btn, optText, correctAnswer));
    container.appendChild(btn);
  });
}

function handleQuizOptionClick(selectedBtn, selectedText, correctAnswer) {
  if (quizAnswered) return;
  quizAnswered = true;

  quizTotal++;
  const isCorrect = (selectedText.trim().toLowerCase() === correctAnswer.trim().toLowerCase());
  const allOptionBtns = document.querySelectorAll(".option-btn");

  // Enregistrer le résultat dans le profil de la carte
  recordCardResult(currentQuizCard.id, isCorrect);

  allOptionBtns.forEach(btn => {
    btn.disabled = true;
    const btnText = btn.getAttribute("data-option");
    if (btnText.trim().toLowerCase() === correctAnswer.trim().toLowerCase()) {
      btn.classList.add("correct");
    }
  });

  const feedbackBox = document.getElementById("quiz-feedback");
  const feedbackMsg = document.getElementById("quiz-feedback-msg");
  const nextBtn = document.getElementById("quiz-next-btn");

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    selectedBtn.classList.add("pulse-correct");
    quizScore++;
    quizStreak++;
    feedbackMsg.innerHTML = `<span style="color: var(--success); font-weight:700;">✅ Excellent ! Dobrze !</span>`;
    if (currentQuizDirection === "fr-pl") {
      speakPolish(correctAnswer);
    }
  } else {
    selectedBtn.classList.add("wrong");
    quizStreak = 0;
    feedbackMsg.innerHTML = `<span style="color: var(--danger); font-weight:700;">❌ Incorrect.</span> La bonne réponse était : <strong>${correctAnswer}</strong>`;
    if (currentQuizDirection === "fr-pl") {
      speakPolish(correctAnswer);
    } else {
      speakPolish(currentQuizCard.pl);
    }
  }

  feedbackBox.style.display = "flex";
  nextBtn.style.display = "inline-flex";
  nextBtn.focus();

  updateQuizStatsCounters();
}

function updateQuizStatsCounters() {
  const scoreEl = document.getElementById("quiz-score-val");
  const streakEl = document.getElementById("quiz-streak-val");

  if (scoreEl) scoreEl.innerText = `${quizScore} / ${quizTotal}`;
  if (streakEl) streakEl.innerText = `${quizStreak} 🔥`;
}

function resetQuizSessionScore() {
  quizScore = 0;
  quizTotal = 0;
  quizStreak = 0;
  updateQuizStatsCounters();
}

function updateStatsCounters() {
  const totalCardsEl = document.getElementById("stat-total-cards");
  const totalCardsMobEl = document.getElementById("stat-total-cards-mob");
  if (totalCardsEl) totalCardsEl.innerText = cards.length;
  if (totalCardsMobEl) totalCardsMobEl.innerText = cards.length;
}

function resetSessionScore() {
  resetQuizSessionScore();
  resetTypingSessionScore();
  resetCaseSessionScore();
  resetPossSessionScore();
}

// ==========================================
// MODE FLASHCARD (3D FLIP)
// ==========================================

function initFlashcards() {
  const deck = getFilteredCards();

  if (algorithmMode === "mistakes-only") {
    const mistakeCards = deck.filter(c => (c.mistakeCount || 0) > 0 || (c.level || 0) < 3);
    flashcardList = mistakeCards.length > 0 ? [...mistakeCards] : [...deck];
  } else if (algorithmMode === "adaptive") {
    flashcardList = [...deck];
    // Trier la pile en mettant d'abord les cartes à fort besoin de révision (plus d'erreurs)
    flashcardList.sort((a, b) => {
      const wa = (a.mistakeCount || 0) * 4 - (a.successCount || 0) * 2;
      const wb = (b.mistakeCount || 0) * 4 - (b.successCount || 0) * 2;
      return (wb - wa) + (Math.random() * 2 - 1);
    });
  } else {
    flashcardList = [...deck];
    shuffleArray(flashcardList);
  }

  flashcardIndex = 0;
  isFlipped = false;

  const cardElement = document.getElementById("flashcard-3d");
  if (cardElement) {
    cardElement.onclick = () => flipFlashcard();
  }

  const knewBtn = document.getElementById("fc-knew-btn");
  const againBtn = document.getElementById("fc-again-btn");
  const flipBtn = document.getElementById("fc-flip-btn");

  if (knewBtn) {
    knewBtn.onclick = () => {
      const current = flashcardList[flashcardIndex];
      if (current) {
        recordCardResult(current.id, true);
      }
      flashcardIndex = (flashcardIndex + 1) % Math.max(1, flashcardList.length);
      renderFlashcard();
    };
  }

  if (againBtn) {
    againBtn.onclick = () => {
      const current = flashcardList[flashcardIndex];
      if (current) {
        recordCardResult(current.id, false);
      }
      if (flashcardList.length > 2) {
        const [curr] = flashcardList.splice(flashcardIndex, 1);
        flashcardList.splice(Math.min(flashcardIndex + 3, flashcardList.length), 0, curr);
      }
      renderFlashcard();
    };
  }

  if (flipBtn) {
    flipBtn.onclick = () => flipFlashcard();
  }

  const audioBtnFront = document.getElementById("fc-audio-btn-front");
  const audioBtnBack = document.getElementById("fc-audio-btn-back");

  if (audioBtnFront) {
    audioBtnFront.onclick = (e) => {
      e.stopPropagation();
      const current = flashcardList[flashcardIndex];
      if (current) speakPolish(current.pl);
    };
  }

  if (audioBtnBack) {
    audioBtnBack.onclick = (e) => {
      e.stopPropagation();
      const current = flashcardList[flashcardIndex];
      if (current) speakPolish(current.pl);
    };
  }

  renderFlashcard();
}

function flipFlashcard() {
  const cardElement = document.getElementById("flashcard-3d");
  if (!cardElement) return;
  isFlipped = !isFlipped;
  if (isFlipped) {
    cardElement.classList.add("flipped");
    const current = flashcardList[flashcardIndex];
    if (current && (currentDirection === "fr-pl")) {
      speakPolish(current.pl);
    }
  } else {
    cardElement.classList.remove("flipped");
  }
}

function renderFlashcard() {
  const cardElement = document.getElementById("flashcard-3d");
  if (!cardElement) return;

  // Si la carte était retournée, on la remet immédiatement sur sa face avant SANS animation
  // afin que la réponse de la nouvelle carte ne soit jamais visible pendant la rotation inverse
  if (isFlipped || cardElement.classList.contains("flipped")) {
    cardElement.style.transition = "none";
    cardElement.classList.remove("flipped");
    isFlipped = false;
    void cardElement.offsetWidth;
    requestAnimationFrame(() => {
      cardElement.style.transition = "";
    });
  } else {
    isFlipped = false;
    cardElement.classList.remove("flipped");
  }

  if (flashcardList.length === 0) {
    document.getElementById("fc-front-text").innerText = "Aucune carte disponible.";
    document.getElementById("fc-back-text").innerText = "";
    return;
  }

  const current = flashcardList[flashcardIndex];
  const isPlFront = (currentDirection === "pl-fr" || currentDirection === "mixed");

  document.getElementById("fc-front-category").innerText = current.category || "Général";
  document.getElementById("fc-back-category").innerText = current.category || "Général";

  // Badge de maîtrise sur la flashcard
  const fcMasteryEl = document.getElementById("fc-card-mastery");
  if (fcMasteryEl) {
    const info = getCardMasteryInfo(current);
    fcMasteryEl.className = `badge-mastery ${info.class}`;
    fcMasteryEl.innerText = info.label;
  }

  document.getElementById("fc-counter").innerText = `${flashcardIndex + 1} / ${flashcardList.length}`;

  const frontText = isPlFront ? current.pl : current.fr;
  const backText = isPlFront ? current.fr : current.pl;

  document.getElementById("fc-front-text").innerText = frontText;
  document.getElementById("fc-back-text").innerText = backText;

  document.getElementById("fc-front-lang").innerText = isPlFront ? "🇵🇱 POLONAIS" : "🇫🇷 FRANÇAIS";
  document.getElementById("fc-back-lang").innerText = isPlFront ? "🇫🇷 FRANÇAIS" : "🇵🇱 POLONAIS";
  document.getElementById("fc-back-lang").innerText = isPlFront ? "🇫🇷 FRANÇAIS" : "🇵🇱 POLONAIS";

  // Affichage des genres sur la flashcard (uniquement sur la face polonaise pour ne pas spoiler)
  const frontGender = document.getElementById("fc-front-gender");
  const backGender = document.getElementById("fc-back-gender");

  if (frontGender) {
    if (isPlFront && current.genderNotes) {
      frontGender.innerText = `💡 ${current.genderNotes}`;
      frontGender.style.display = "block";
    } else {
      frontGender.style.display = "none";
    }
  }

  if (backGender) {
    if (!isPlFront && current.genderNotes) {
      backGender.innerText = `💡 ${current.genderNotes}`;
      backGender.style.display = "block";
    } else {
      backGender.style.display = "none";
    }
  }

  // Audio boutons
  const frontAudio = document.getElementById("fc-audio-btn-front");
  const backAudio = document.getElementById("fc-audio-btn-back");
  if (frontAudio) frontAudio.style.display = isPlFront ? "inline-flex" : "none";
  if (backAudio) backAudio.style.display = isPlFront ? "none" : "inline-flex";

  if (isPlFront && autoAudio) {
    speakPolish(current.pl);
  }
}

// ==========================================
// MODE ÉCRITURE (ORTHOGRAPHE, GENRES & TOLÉRANCE)
// ==========================================

function initTyping() {
  const submitBtn = document.getElementById("typing-submit-btn");
  const nextBtn = document.getElementById("typing-next-btn");
  const inputEl = document.getElementById("typing-input");

  if (submitBtn) submitBtn.onclick = checkTypingAnswer;
  if (nextBtn) nextBtn.onclick = startNewTypingQuestion;
  if (inputEl) {
    inputEl.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        if (document.getElementById("typing-next-btn").style.display !== "none") {
          startNewTypingQuestion();
        } else {
          checkTypingAnswer();
        }
      }
    });
  }
}

function startNewTypingQuestion() {
  const activeDeck = getFilteredCards();
  if (activeDeck.length === 0) return;

  // Tirage adaptatif pondéré (priorité aux erreurs et révisions)
  typingCard = getWeightedRandomCard(activeDeck) || activeDeck[0];

  document.getElementById("typing-prompt").innerText = typingCard.fr;
  document.getElementById("typing-category").innerText = typingCard.category || "Général";

  // Badge de maîtrise de la carte
  const masteryBadge = document.getElementById("typing-card-mastery");
  if (masteryBadge) {
    const info = getCardMasteryInfo(typingCard);
    masteryBadge.className = `badge-mastery ${info.class}`;
    masteryBadge.innerText = info.label;
  }

  const genderHint = document.getElementById("typing-gender-hint");
  if (genderHint) {
    if (typingCard.genderNotes) {
      genderHint.innerHTML = `💡 Vous pouvez saisir au masculin, féminin ou neutre`;
      genderHint.style.display = "block";
    } else {
      genderHint.style.display = "none";
    }
  }

  const inputEl = document.getElementById("typing-input");
  inputEl.value = "";
  inputEl.disabled = false;
  inputEl.focus();

  document.getElementById("typing-feedback").style.display = "none";
  document.getElementById("typing-next-btn").style.display = "none";
  document.getElementById("typing-submit-btn").style.display = "inline-flex";
}

/**
 * Normalisation ultra-tolérante :
 * - Retire TOUTE ponctuation (point final, virgule, ?, !, apostrophes, tirets...)
 * - Retire les espaces multiples ou superflus
 * - Convertit en minuscules
 */
function normalizeText(str) {
  return (str || "")
    .toLowerCase()
    .trim()
    .replace(/[.,/#!$%^&*;:{}=\-_`~()?'"«»„”…—–]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Retire les signes diacritiques polonais pour tolérer la frappe
 * sans clavier polonais ou avec substitution courante (ź/ż/z, ł/l, etc.).
 */
function stripPolishDiacritics(str) {
  if (!str) return "";
  return str
    .replace(/[ąĄ]/g, "a")
    .replace(/[ćĆ]/g, "c")
    .replace(/[ęĘ]/g, "e")
    .replace(/[łŁ]/g, "l")
    .replace(/[ńŃ]/g, "n")
    .replace(/[óÓ]/g, "o")
    .replace(/[śŚ]/g, "s")
    .replace(/[źŹżŻ]/g, "z")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

/**
 * Distance de Damerau-Levenshtein
 * Prend en compte l'inversion de 2 lettres adjacentes (ex: "stopni" vs "spotni" = distance 1)
 */
function damerauLevenshtein(a, b) {
  const m = a.length, n = b.length;
  const d = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) d[i][0] = i;
  for (let j = 0; j <= n; j++) d[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      d[i][j] = Math.min(
        d[i - 1][j] + 1,       // suppression
        d[i][j - 1] + 1,       // insertion
        d[i - 1][j - 1] + cost // substitution
      );
      // Transposition de 2 caractères adjacents
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
      }
    }
  }
  return d[m][n];
}

function checkTypingAnswer() {
  if (!typingCard) return;

  const inputEl = document.getElementById("typing-input");
  const rawInput = inputEl.value;
  const normalizedUser = normalizeText(rawInput);

  if (!normalizedUser) {
    alert("Veuillez saisir une réponse avant de valider.");
    return;
  }

  // Liste de toutes les réponses valides pour cette carte (tous genres m/f/n confondus)
  const candidateAnswers = [
    typingCard.pl,
    ...(typingCard.acceptedPl || [])
  ];

  // 1. Vérification exacte (sans ponctuation)
  let bestMatch = null;
  let isExactMatch = false;

  for (const cand of candidateAnswers) {
    if (normalizeText(cand) === normalizedUser) {
      isExactMatch = true;
      bestMatch = cand;
      break;
    }
  }

  // 2. Vérification avec diacritiques polonais normalisés (ex: źle -> złe, taksowka -> taksówka, etc.)
  let isDiacriticMatch = false;
  let diacriticMatchCandidate = null;

  if (!isExactMatch) {
    const strippedUser = stripPolishDiacritics(normalizedUser);
    for (const cand of candidateAnswers) {
      const strippedCand = stripPolishDiacritics(normalizeText(cand));
      if (strippedCand === strippedUser) {
        isDiacriticMatch = true;
        diacriticMatchCandidate = cand;
        break;
      }
    }
  }

  // 3. Si pas d'égalité stricte ni diacritique, vérification par distance Levenshtein
  let bestDistance = Infinity;
  let closestAnswer = typingCard.pl;

  if (!isExactMatch && !isDiacriticMatch) {
    for (const cand of candidateAnswers) {
      const normCand = normalizeText(cand);
      const dist = damerauLevenshtein(normalizedUser, normCand);
      if (dist < bestDistance) {
        bestDistance = dist;
        closestAnswer = cand;
      }
    }
  } else if (isDiacriticMatch) {
    closestAnswer = diacriticMatchCandidate;
  }

  // Seuil de tolérance Levenshtein :
  // - Chaîne courte (moins de 4 caractères) : distance max 0
  // - Mot moyen (4 à 8 caractères) : distance max 1 (ex: spotni vs stopni)
  // - Phrase longue (9 caractères et +) : distance max 2
  const candLength = normalizeText(closestAnswer).length;
  const maxAllowedDistance = candLength < 4 ? 0 : (candLength < 9 ? 1 : 2);

  const isLevenshteinMatch = !isExactMatch && !isDiacriticMatch && (bestDistance <= maxAllowedDistance);
  const feedbackBox = document.getElementById("typing-feedback");

  typingTotal++;

  if (isExactMatch) {
    recordCardResult(typingCard.id, true);
    typingScore++;
    typingStreak++;
    feedbackBox.innerHTML = `
      <div style="color: var(--success); font-weight:700; font-size:1.15rem; margin-bottom:0.35rem;">
        ✅ Parfait ! Bardzo dobrze !
      </div>
      <div style="font-size:1.1rem; font-weight:600;">"${bestMatch}"</div>
      ${typingCard.genderNotes ? `<div style="font-size:0.85rem; color:var(--text-muted); margin-top:0.35rem;">💡 ${typingCard.genderNotes}</div>` : ""}
    `;
    speakPolish(bestMatch);
  } else if (isDiacriticMatch) {
    recordCardResult(typingCard.id, true);
    typingScore++;
    typingStreak++;
    feedbackBox.innerHTML = `
      <div style="color: var(--success); font-weight:700; font-size:1.15rem; margin-bottom:0.35rem;">
        ✅ Bonne réponse acceptée ! (Attention aux accents polonais)
      </div>
      <div>La graphie polonaise exacte est : <strong style="color:var(--primary); font-size:1.1rem;">${closestAnswer}</strong></div>
      <div style="font-size:0.85rem; color:var(--text-muted); margin-top:0.3rem;">Votre saisie : <em>${rawInput}</em></div>
      ${typingCard.genderNotes ? `<div style="font-size:0.85rem; color:var(--text-muted); margin-top:0.35rem;">💡 ${typingCard.genderNotes}</div>` : ""}
    `;
    speakPolish(closestAnswer);
  } else if (isLevenshteinMatch) {
    recordCardResult(typingCard.id, true);
    typingScore++;
    typingStreak++;
    feedbackBox.innerHTML = `
      <div style="color: var(--success); font-weight:700; font-size:1.15rem; margin-bottom:0.35rem;">
        ✅ Bonne réponse acceptée ! (Petite coquille détectée)
      </div>
      <div>La graphie exacte est : <strong style="color:var(--primary);">${closestAnswer}</strong></div>
      <div style="font-size:0.85rem; color:var(--text-muted); margin-top:0.3rem;">Votre saisie : <em>${rawInput}</em></div>
      ${typingCard.genderNotes ? `<div style="font-size:0.85rem; color:var(--text-muted); margin-top:0.35rem;">💡 ${typingCard.genderNotes}</div>` : ""}
    `;
    speakPolish(closestAnswer);
  } else {
    recordCardResult(typingCard.id, false);
    typingStreak = 0;
    const expectedWord = (closestAnswer && closestAnswer !== typingCard.pl)
      ? `${closestAnswer} (forme standard : ${typingCard.pl})`
      : typingCard.pl;
    feedbackBox.innerHTML = `
      <div style="color: var(--danger); font-weight:700; font-size:1.15rem; margin-bottom:0.35rem;">
        ❌ Pas tout à fait...
      </div>
      <div>La réponse attendue était : <strong style="color:var(--primary); font-size:1.15rem;">${expectedWord}</strong></div>
      <div style="font-size:0.85rem; color:var(--text-muted); margin-top:0.3rem;">Votre saisie : <em>${rawInput || "(vide)"}</em></div>
      ${typingCard.genderNotes ? `<div style="font-size:0.85rem; color:var(--text-muted); margin-top:0.35rem;">💡 ${typingCard.genderNotes}</div>` : ""}
    `;
    speakPolish(closestAnswer || typingCard.pl);
  }

  updateTypingStatsCounters();

  feedbackBox.style.display = "block";
  inputEl.disabled = true;
  document.getElementById("typing-submit-btn").style.display = "none";
  document.getElementById("typing-next-btn").style.display = "inline-flex";
  document.getElementById("typing-next-btn").focus();
}

function updateTypingStatsCounters() {
  const scoreEl = document.getElementById("typing-score-val");
  const streakEl = document.getElementById("typing-streak-val");

  if (scoreEl) scoreEl.innerText = `${typingScore} / ${typingTotal}`;
  if (streakEl) streakEl.innerText = `${typingStreak} 🔥`;
}

function resetTypingSessionScore() {
  typingScore = 0;
  typingTotal = 0;
  typingStreak = 0;
  updateTypingStatsCounters();
}

// ==========================================
// MODE JEU DES CAS GRAMMATICAUX (PRZYPADKI)
// ==========================================

function initCases() {
  updateCaseCounts();
  startNewCaseQuestion();
  const audioBtn = document.getElementById("case-audio-btn");
  if (audioBtn) {
    audioBtn.addEventListener("click", () => {
      if (currentCaseChallenge) {
        speakPolish(currentCaseChallenge.fullSentence);
      }
    });
  }
}

function resolveCaseCanonicalKey(key) {
  if (!key) return "all";
  const k = String(key).toLowerCase();
  if (k.includes("biern") || k.includes("accusatif")) return "Biernik";
  if (k.includes("narz") || k.includes("instrumental")) return "Narzednik";
  if (k.includes("miejsc") || k.includes("locatif")) return "Miejscownik";
  if (k.includes("dop") || k.includes("genitif")) return "Dopelniacz";
  return "all";
}

function isSameCase(caseA, caseB) {
  if (!caseA || !caseB) return false;
  const canonicalA = resolveCaseCanonicalKey(caseA);
  const canonicalB = resolveCaseCanonicalKey(caseB);
  if (canonicalA !== "all" && canonicalB !== "all") {
    return canonicalA === canonicalB;
  }
  return canonicalA === canonicalB;
}

function updateCaseCounts() {
  const elAll = document.getElementById("case-count-all");
  const elBiernik = document.getElementById("case-count-biernik");
  const elNarzednik = document.getElementById("case-count-narzednik");
  const elMiejscownik = document.getElementById("case-count-miejscownik");
  const elDopelniacz = document.getElementById("case-count-dopelniacz");

  // Compteurs par type de cible
  const elTypeAll = document.getElementById("case-type-count-all");
  const elTypeNoun = document.getElementById("case-type-count-noun");
  const elTypeAdj = document.getElementById("case-type-count-adjective");
  const elTypePlural = document.getElementById("case-type-count-plural");

  if (typeof CASE_CHALLENGES === "undefined") return;

  if (elAll) elAll.innerText = CASE_CHALLENGES.length;
  if (elBiernik) elBiernik.innerText = CASE_CHALLENGES.filter(c => isSameCase(c.caseName, "Biernik")).length;
  if (elNarzednik) elNarzednik.innerText = CASE_CHALLENGES.filter(c => isSameCase(c.caseName, "Narzednik") || isSameCase(c.caseName, "Narzędnik")).length;
  if (elMiejscownik) elMiejscownik.innerText = CASE_CHALLENGES.filter(c => isSameCase(c.caseName, "Miejscownik")).length;
  if (elDopelniacz) elDopelniacz.innerText = CASE_CHALLENGES.filter(c => isSameCase(c.caseName, "Dopelniacz") || isSameCase(c.caseName, "Dopełniacz")).length;

  if (elTypeAll) elTypeAll.innerText = CASE_CHALLENGES.length;
  if (elTypeNoun) elTypeNoun.innerText = CASE_CHALLENGES.filter(c => c.targetType !== "adjective" && !c.isPlural).length;
  if (elTypeAdj) elTypeAdj.innerText = CASE_CHALLENGES.filter(c => c.targetType === "adjective").length;
  if (elTypePlural) elTypePlural.innerText = CASE_CHALLENGES.filter(c => c.isPlural || (c.gender && c.gender.toLowerCase().includes("pluriel"))).length;
}

function setCaseCategoryFilter(filterName) {
  currentCaseFilter = filterName;

  // Mettre à jour l'état visuel des boutons pilules de cas
  const pills = document.querySelectorAll(".cases-filter-bar .pill-filter-btn");
  pills.forEach(p => p.classList.remove("active"));

  const activePill = document.getElementById(`case-pill-${filterName}`);
  if (activePill) {
    activePill.classList.add("active");
  }

  startNewCaseQuestion();
}

function setCaseTypeFilter(typeName) {
  currentCaseTypeFilter = typeName;

  // Mettre à jour l'état visuel des boutons de type (Tous / Noms / Adjectifs / Pluriels)
  const pills = document.querySelectorAll(".cases-type-filter-bar .pill-type-btn");
  pills.forEach(p => p.classList.remove("active"));

  const activePill = document.getElementById(`case-type-${typeName}`);
  if (activePill) {
    activePill.classList.add("active");
  }

  startNewCaseQuestion();
}

function getFilteredCaseChallenges() {
  if (typeof CASE_CHALLENGES === "undefined" || CASE_CHALLENGES.length === 0) return [];

  return CASE_CHALLENGES.filter(c => {
    // 1. Filtre par cas
    const caseMatch = currentCaseFilter === "all" || isSameCase(c.caseName, currentCaseFilter);
    if (!caseMatch) return false;

    // 2. Filtre par type de cible (Noms singulier, Adjectifs, Pluriels)
    if (currentCaseTypeFilter === "adjective") return c.targetType === "adjective";
    if (currentCaseTypeFilter === "noun") return c.targetType !== "adjective" && !c.isPlural;
    if (currentCaseTypeFilter === "plural") return c.isPlural === true || (c.gender && c.gender.toLowerCase().includes("pluriel"));

    return true;
  });
}

function startNewCaseQuestion() {
  const deck = getFilteredCaseChallenges();
  const optionsContainer = document.getElementById("case-options-container");

  if (deck.length === 0) {
    if (optionsContainer) {
      optionsContainer.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 2.5rem 1.5rem; color: var(--text-muted); text-align: center; background:#f8fafc; border-radius:12px; border:1px dashed var(--border);">
          <div style="font-size:2rem; margin-bottom:0.5rem;">🔍</div>
          <p style="font-size: 1rem; font-weight:600; color:#334155; margin-bottom: 0.75rem;">
            Aucun exercice ne correspond à cette combinaison de filtres.
          </p>
          <button class="btn-primary" onclick="setCaseTypeFilter('all')">Voir tous les types pour ce cas</button>
        </div>
      `;
    }
    return;
  }

  // Éviter de répéter immédiatement la même question
  let nextChallenge = deck[Math.floor(Math.random() * deck.length)];
  if (deck.length > 1 && currentCaseChallenge && nextChallenge.id === currentCaseChallenge.id) {
    const remaining = deck.filter(c => c.id !== currentCaseChallenge.id);
    nextChallenge = remaining[Math.floor(Math.random() * remaining.length)];
  }
  currentCaseChallenge = nextChallenge;
  caseAnswered = false;

  // Badge explicite du cas
  const badgeEl = document.getElementById("case-badge-name");
  if (badgeEl) {
    badgeEl.className = `badge-case-name ${currentCaseChallenge.caseBadgeClass || ""}`;
    badgeEl.innerHTML = `🏛️ ${currentCaseChallenge.caseLabelFr.toUpperCase()}`;
  }

  // Phrase avec trou
  const beforeEl = document.getElementById("case-sentence-before");
  const gapEl = document.getElementById("case-gap-slot");
  const afterEl = document.getElementById("case-sentence-after");

  if (beforeEl) beforeEl.innerText = currentCaseChallenge.sentenceBefore;
  if (gapEl) {
    gapEl.innerText = "[ ... ]";
    gapEl.className = "case-gap-slot";
  }
  if (afterEl) afterEl.innerText = currentCaseChallenge.sentenceAfter;

  // Mot de départ & traduction
  const baseWordEl = document.getElementById("case-base-word");
  const genderEl = document.getElementById("case-word-gender");
  const meaningEl = document.getElementById("case-word-meaning");
  const transEl = document.getElementById("case-translation-fr");

  if (baseWordEl) baseWordEl.innerText = currentCaseChallenge.gapWord;
  if (genderEl) {
    const rawGender = currentCaseChallenge.gender || "général";
    const displayGender = (rawGender.startsWith("adjectif") || rawGender.startsWith("nom") || rawGender.startsWith("pluriel"))
      ? rawGender
      : (currentCaseChallenge.targetType === "adjective" ? `adjectif ${rawGender}` : `nom ${rawGender}`);
    genderEl.innerText = displayGender;
  }
  if (meaningEl) {
    meaningEl.innerText = currentCaseChallenge.gapWordMeaning
      ? currentCaseChallenge.gapWordMeaning
      : `"${currentCaseChallenge.translationFr}"`;
  }
  if (transEl) transEl.innerText = `"${currentCaseChallenge.translationFr}"`;

  // Cacher audio et feedback
  const audioBtn = document.getElementById("case-audio-btn");
  if (audioBtn) audioBtn.style.display = "none";

  const feedbackBox = document.getElementById("case-feedback-box");
  if (feedbackBox) feedbackBox.style.display = "none";

  // Rendu des 4 options
  renderCaseOptions();
}

function renderCaseOptions() {
  const container = document.getElementById("case-options-container");
  if (!container || !currentCaseChallenge) return;
  container.innerHTML = "";

  const options = [...currentCaseChallenge.options];
  shuffleArray(options);

  const letters = ["A", "B", "C", "D"];

  options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "case-option-btn";
    btn.setAttribute("data-index", idx + 1);

    btn.innerHTML = `
      <span class="case-option-letter">${letters[idx]}</span>
      <div class="case-option-content" style="display:flex; align-items:baseline; gap:0.5rem;">
        <span class="case-fullword">${opt.word}</span>
        <span class="case-ending-badge">(${opt.ending})</span>
      </div>
    `;

    btn.addEventListener("click", () => handleCaseOptionClick(btn, opt));
    container.appendChild(btn);
  });
}

function handleCaseOptionClick(selectedBtn, selectedOption) {
  if (caseAnswered || !currentCaseChallenge) return;
  caseAnswered = true;

  caseTotal++;
  const isCorrect = selectedOption.isCorrect;
  const allBtns = document.querySelectorAll(".case-option-btn");

  allBtns.forEach(btn => {
    btn.disabled = true;
  });

  const gapEl = document.getElementById("case-gap-slot");
  const audioBtn = document.getElementById("case-audio-btn");
  const feedbackBox = document.getElementById("case-feedback-box");
  const titleEl = document.getElementById("case-feedback-title");
  const expEl = document.getElementById("case-feedback-explanation");
  const nextBtn = document.getElementById("case-next-btn");

  if (isCorrect) {
    caseScore++;
    caseStreak++;
    selectedBtn.classList.add("correct");

    if (gapEl) {
      gapEl.innerText = selectedOption.ending;
      gapEl.className = "case-gap-slot filled-correct";
    }

    if (titleEl) {
      titleEl.innerHTML = `<span style="color:var(--success);">✅ Parfait ! Bardzo dobrze !</span>`;
    }

    // Prononcer la phrase polonaise complète
    speakPolish(currentCaseChallenge.fullSentence);
  } else {
    caseStreak = 0;
    selectedBtn.classList.add("wrong");

    // Trouver le bouton correct pour l'indiquer
    allBtns.forEach(btn => {
      const wordEl = btn.querySelector(".case-fullword");
      if (wordEl && wordEl.innerText === currentCaseChallenge.fullCorrectWord) {
        btn.classList.add("correct");
      }
    });

    if (gapEl) {
      gapEl.innerText = currentCaseChallenge.correctEnding;
      gapEl.className = "case-gap-slot filled-wrong";
    }

    if (titleEl) {
      titleEl.innerHTML = `<span style="color:var(--danger);">❌ Pas tout à fait...</span> La bonne terminaison était <strong>${currentCaseChallenge.correctEnding}</strong> (${currentCaseChallenge.fullCorrectWord})`;
    }

    speakPolish(currentCaseChallenge.fullSentence);
  }

  // Afficher l'explication de la règle
  if (expEl) {
    expEl.innerHTML = currentCaseChallenge.ruleExplanation;
  }

  if (audioBtn) {
    audioBtn.style.display = "inline-flex";
  }

  if (feedbackBox) {
    feedbackBox.style.display = "block";
  }

  if (nextBtn) {
    nextBtn.focus();
  }

  updateCaseStatsCounters();
}

function updateCaseStatsCounters() {
  const scoreEl = document.getElementById("case-score-val");
  const streakEl = document.getElementById("case-streak-val");

  if (scoreEl) scoreEl.innerText = `${caseScore} / ${caseTotal}`;
  if (streakEl) streakEl.innerText = `${caseStreak} 🔥`;
}

function resetCaseSessionScore() {
  caseScore = 0;
  caseTotal = 0;
  caseStreak = 0;
  updateCaseStatsCounters();
}

// ==========================================
// AIDE-MÉMOIRE & TABLEAUX DES CAS POLONAIS
// ==========================================

function openCaseCheatSheetModal(caseKey) {
  const modal = document.getElementById("case-cheatsheet-modal");
  if (!modal) return;
  modal.style.display = "flex";

  const targetTab = caseKey ? resolveCaseCanonicalKey(caseKey) : "all";
  switchCheatSheetTab(targetTab);
}

function closeCaseCheatSheetModal() {
  const modal = document.getElementById("case-cheatsheet-modal");
  if (modal) {
    modal.style.display = "none";
  }
}

function openActiveCaseGuide() {
  if (currentCaseChallenge && currentCaseChallenge.caseName) {
    openCaseCheatSheetModal(currentCaseChallenge.caseName);
  } else if (currentCaseFilter && currentCaseFilter !== "all") {
    openCaseCheatSheetModal(currentCaseFilter);
  } else {
    openCaseCheatSheetModal("all");
  }
}

function handleModalBackdropClick(e) {
  if (e.target && e.target.id === "case-cheatsheet-modal") {
    closeCaseCheatSheetModal();
  }
}


function switchCheatSheetTab(tabKey) {
  const canonical = resolveCaseCanonicalKey(tabKey);
  const tabBtns = document.querySelectorAll("#modal-case-tabs .modal-tab-btn");
  tabBtns.forEach(btn => {
    const btnCase = btn.getAttribute("data-case");
    if (btnCase === canonical || (canonical === "all" && btnCase === "all")) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  const contentEl = document.getElementById("modal-cheatsheet-content");
  if (!contentEl) return;

  if (canonical === "all") {
    contentEl.innerHTML = renderGlobalCheatSheetView();
  } else if (typeof POLISH_CASES_GUIDE !== "undefined" && POLISH_CASES_GUIDE[canonical]) {
    contentEl.innerHTML = renderSingleCaseGuideView(POLISH_CASES_GUIDE[canonical]);
  } else {
    contentEl.innerHTML = renderGlobalCheatSheetView();
  }
}

function renderGlobalCheatSheetView() {
  return `
    <div class="cheat-case-banner">
      <div class="cheat-case-title">
        <span>📊</span> Tableau Comparatif des 4 Cas Principaux
      </div>
      <p style="margin:0; font-size:0.9rem; color:#475569;">
        Synthèse rapide des rôles, déclencheurs et terminaisons au singulier et au pluriel. Cliquez sur un cas pour voir son guide détaillé avec exemples.
      </p>
    </div>

    <div class="cheat-table-wrapper">
      <table class="cheat-table">
        <thead>
          <tr>
            <th style="min-width:130px;">Cas & Question</th>
            <th style="min-width:145px;">Rôle & Prépositions</th>
            <th>Féminin sg.</th>
            <th>Masculin sg.</th>
            <th>Neutre sg.</th>
            <th>Pluriel</th>
            <th style="min-width:150px;">Exemple type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong style="color:#1d4ed8;">🏛️ Biernik</strong><br>
              <span style="font-size:0.75rem; color:#64748b;">Accusatif</span><br>
              <em style="font-size:0.75rem;">Kogo? Co?</em>
            </td>
            <td>
              <strong>COD</strong> (mieć, lubić, chcieć, poproszę, pić, czytać)<br>
              Direction : <strong>na / w</strong>
            </td>
            <td><strong>-ę</strong><br><small style="color:#64748b;">kawę, pizzę</small></td>
            <td>
              Animé : <strong>-a</strong> <small>(brata)</small><br>
              Inan. : <strong>-ø</strong> <small>(chleb)</small>
            </td>
            <td><strong>-o / -e</strong><br><small style="color:#64748b;">invariable</small></td>
            <td>
              <span title="Non-viril (femmes, animaux, objets)">Non-viril : <strong>-y / -e / -a</strong> <small style="color:#64748b;">(walizki, psy)</small></span><br>
              <span title="Viril / Masculin personnel (hommes, groupes mixtes)">Viril : <strong>-ów / -i</strong> <small style="color:#1d4ed8;">= Génitif pl. (studentów)</small></span>
            </td>
            <td><em>Poproszę <strong>kawę</strong>.</em></td>
          </tr>
          <tr>
            <td>
              <strong style="color:#6d28d9;">🤝 Narzędnik</strong><br>
              <span style="font-size:0.75rem; color:#64748b;">Instrumental</span><br>
              <em style="font-size:0.75rem;">Z kim? Z czym?</em>
            </td>
            <td>
              Accompagnement : <strong>z / ze</strong><br>
              Métier après <strong>być</strong><br>
              Moyen de transport
            </td>
            <td><strong>-ą</strong><br><small style="color:#64748b;">kawą, cytryną</small></td>
            <td><strong>-em / -iem</strong><br><small style="color:#64748b;">bratem, serem</small></td>
            <td><strong>-em / -iem</strong><br><small style="color:#64748b;">mlekiem</small></td>
            <td><strong>-ami</strong><br><small style="color:#64748b;">studentami</small></td>
            <td><em>Kawa z <strong>mlekiem</strong>.</em></td>
          </tr>
          <tr>
            <td>
              <strong style="color:#0f766e;">📍 Miejscownik</strong><br>
              <span style="font-size:0.75rem; color:#64748b;">Locatif</span><br>
              <em style="font-size:0.75rem;">W czym? Na czym? O kim?</em>
            </td>
            <td>
              Lieu statique : <strong>w, na</strong><br>
              Sujet de discussion : <strong>o</strong><br>
              Proximité : <strong>przy</strong>
            </td>
            <td><strong>-e / -i / -y</strong><br><small style="color:#64748b;">Polsce, stacji</small></td>
            <td><strong>-e / -u</strong><br><small style="color:#64748b;">stole, hotelu</small></td>
            <td><strong>-e / -u</strong><br><small style="color:#64748b;">kinie, biurze</small></td>
            <td><strong>-ach</strong><br><small style="color:#64748b;">miastach, pokojach</small></td>
            <td><em>Mieszkam w <strong>Polsce</strong>.</em></td>
          </tr>
          <tr>
            <td>
              <strong style="color:#b45309;">🎯 Dopełniacz</strong><br>
              <span style="font-size:0.75rem; color:#64748b;">Génitif</span><br>
              <em style="font-size:0.75rem;">Kogo? Czego?</em>
            </td>
            <td>
              <strong>Négation (nie mam)</strong><br>
              Absence : <strong>nie ma</strong><br>
              Prépositions : <strong>do, z, dla, bez</strong>
            </td>
            <td><strong>-y / -i</strong><br><small style="color:#64748b;">kawy, Francji</small></td>
            <td>
              Animé : <strong>-a</strong> <small>(brata)</small><br>
              Inan. : <strong>-u / -a</strong> <small>(cukru, chleba)</small>
            </td>
            <td><strong>-a</strong><br><small style="color:#64748b;">ciasta, piwa</small></td>
            <td>
              Masc. : <strong>-ów</strong><br>
              Fém./Neut. : <strong>-ø</strong> <small>(osób)</small>
            </td>
            <td><em>Kawa bez <strong>cukru</strong>.</em><br><em>Nie mam <strong>czasu</strong>.</em></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:0.65rem; margin-top:1rem;">
      <button type="button" class="btn-secondary" onclick="switchCheatSheetTab('Biernik')" style="text-align:left; padding:0.65rem 0.85rem;">
        🏛️ <strong>Biernik (Accusatif)</strong> &rarr;
      </button>
      <button type="button" class="btn-secondary" onclick="switchCheatSheetTab('Narzednik')" style="text-align:left; padding:0.65rem 0.85rem;">
        🤝 <strong>Narzędnik (Instrumental)</strong> &rarr;
      </button>
      <button type="button" class="btn-secondary" onclick="switchCheatSheetTab('Miejscownik')" style="text-align:left; padding:0.65rem 0.85rem;">
        📍 <strong>Miejscownik (Locatif)</strong> &rarr;
      </button>
      <button type="button" class="btn-secondary" onclick="switchCheatSheetTab('Dopelniacz')" style="text-align:left; padding:0.65rem 0.85rem;">
        🎯 <strong>Dopełniacz (Génitif)</strong> &rarr;
      </button>
    </div>
  `;
}

function renderSingleCaseGuideView(guide) {
  return `
    <div class="cheat-case-banner">
      <div class="cheat-case-title">
        <span>${guide.icon}</span> ${guide.title}
      </div>
      <div class="cheat-case-question">${guide.question}</div>
      <p style="margin:0; font-size:0.92rem; color:#334155; font-weight:500;">
        ${guide.summary}
      </p>
    </div>

    <div class="cheat-section-title">⚡ Déclencheurs & Quand l'employer</div>
    <ul style="margin:0 0 1.25rem 1.2rem; padding:0; font-size:0.9rem; color:#334155; line-height:1.65;">
      ${guide.triggers.map(t => `<li style="margin-bottom:0.35rem;">${t}</li>`).join("")}
    </ul>

    <div class="cheat-section-title">📐 Tableau des terminaisons régulières</div>
    <div class="cheat-table-wrapper">
      <table class="cheat-table">
        <thead>
          <tr>
            <th>Genre / Catégorie</th>
            <th>Terminaison Nom</th>
            <th>Terminaison Adjectif</th>
            <th>Remarques</th>
          </tr>
        </thead>
        <tbody>
          ${guide.endings.map(e => `
            <tr>
              <td><strong>${e.category}</strong></td>
              <td style="color:var(--primary); font-size:0.95rem;">${e.noun}</td>
              <td style="color:#0369a1;">${e.adj}</td>
              <td style="font-size:0.8rem; color:#64748b;">${e.note}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>

    <div class="cheat-section-title">💬 Exemples types en contexte</div>
    <div class="cheat-examples-grid">
      ${guide.examples.map(ex => `
        <div class="cheat-example-item">
          <div style="font-size:0.95rem; color:#0f172a; margin-bottom:0.2rem;">${ex.pl}</div>
          <div style="font-size:0.82rem; color:var(--text-muted);">${ex.fr}</div>
        </div>
      `).join("")}
    </div>

    ${guide.tip ? `<div class="cheat-tip-box">${guide.tip}</div>` : ""}
  `;
}

function setupSpecialKeys() {
  const container = document.getElementById("special-keys-container");
  if (!container) return;

  const polishChars = ["ą", "ć", "ę", "ł", "ń", "ó", "ś", "ź", "ż"];
  container.innerHTML = "";

  polishChars.forEach(ch => {
    const btn = document.createElement("button");
    btn.className = "special-key-btn";
    btn.innerText = ch;
    btn.onclick = () => {
      const input = document.getElementById("typing-input") || document.getElementById("card-pl-input");
      if (input) {
        insertAtCursor(input, ch);
      }
    };
    container.appendChild(btn);
  });
}

function insertAtCursor(input, text) {
  const start = input.selectionStart || 0;
  const end = input.selectionEnd || 0;
  const current = input.value;
  input.value = current.substring(0, start) + text + current.substring(end);
  input.focus();
  input.selectionStart = input.selectionEnd = start + text.length;
}

// ==========================================
// GESTIONNAIRE DE CARTES (TABLEAU, FORMULAIRE)
// ==========================================

function renderCardsTable() {
  const tbody = document.getElementById("cards-table-body");
  const searchInput = document.getElementById("table-search-input");
  const filterText = (searchInput ? searchInput.value : "").toLowerCase();
  const masterySelect = document.getElementById("table-filter-mastery");
  const masteryFilter = masterySelect ? masterySelect.value : "all";

  if (!tbody) return;
  tbody.innerHTML = "";

  const filtered = cards.filter(c => {
    const matchesText = (
      c.pl.toLowerCase().includes(filterText) ||
      c.fr.toLowerCase().includes(filterText) ||
      (c.category && c.category.toLowerCase().includes(filterText))
    );
    if (!matchesText) return false;

    if (masteryFilter !== "all") {
      const info = getCardMasteryInfo(c);
      if (info.status !== masteryFilter) return false;
    }

    return true;
  });

  const countLabel = document.getElementById("table-count-label");
  if (countLabel) {
    countLabel.innerText = `${filtered.length} carte(s) affichée(s) sur ${cards.length}`;
  }

  filtered.forEach(c => {
    const tr = document.createElement("tr");

    const genderBadge = c.genderNotes 
      ? `<div style="font-size:0.75rem; color:#0284c7; margin-top:3px;">${c.genderNotes}</div>` 
      : "";

    const masteryInfo = getCardMasteryInfo(c);

    tr.innerHTML = `
      <td style="font-weight:600;">
        <span style="display:inline-flex; align-items:center; gap:0.4rem;">
          ${c.pl}
          <button class="btn-icon btn-speak-row" title="Écouter la prononciation">🔊</button>
        </span>
        ${genderBadge}
      </td>
      <td>${c.fr}</td>
      <td><span class="table-badge">${c.category || "Général"}</span></td>
      <td><span class="badge-mastery ${masteryInfo.class}">${masteryInfo.label}</span></td>
      <td style="font-size:0.85rem; font-weight:600; white-space:nowrap;">
        <span style="color:var(--success);">✅ ${c.successCount || 0}</span> / <span style="color:var(--danger);">❌ ${c.mistakeCount || 0}</span>
      </td>
      <td>
        <div class="table-actions">
          <button class="btn-icon btn-delete-row" title="Supprimer la carte">🗑️</button>
        </div>
      </td>
    `;

    const speakBtn = tr.querySelector(".btn-speak-row");
    if (speakBtn) {
      speakBtn.addEventListener("click", () => speakPolish(c.pl));
    }

    const deleteBtn = tr.querySelector(".btn-delete-row");
    if (deleteBtn) {
      deleteBtn.addEventListener("click", () => deleteCard(c.id));
    }

    tbody.appendChild(tr);
  });
}

function handleAddCardSubmit(e) {
  e.preventDefault();

  const plInput = document.getElementById("card-pl-input");
  const frInput = document.getElementById("card-fr-input");
  const catInput = document.getElementById("card-category-input");
  const newCatInput = document.getElementById("card-new-cat-input");
  const genderInput = document.getElementById("card-gender-input");
  const distPlInput = document.getElementById("card-dist-pl-input");
  const distFrInput = document.getElementById("card-dist-fr-input");

  const pl = plInput.value.trim();
  const fr = frInput.value.trim();

  if (!pl || !fr) {
    alert("Veuillez renseigner au moins le mot polonais et sa traduction française.");
    return;
  }

  let category = catInput.value;
  if (category === "Autre" && newCatInput && newCatInput.value.trim()) {
    category = newCatInput.value.trim();
  }

  const genderNotes = genderInput ? genderInput.value.trim() : "";

  const distractorsPl = distPlInput.value
    ? distPlInput.value.split(",").map(s => s.trim()).filter(Boolean)
    : [];

  const distractorsFr = distFrInput.value
    ? distFrInput.value.split(",").map(s => s.trim()).filter(Boolean)
    : [];

  const newCard = {
    id: "custom-" + Date.now(),
    pl,
    fr,
    category: category || "Général",
    genderNotes,
    acceptedPl: [pl],
    acceptedFr: [fr],
    distractorsPl,
    distractorsFr
  };

  cards.unshift(newCard);
  saveCards();

  // Reset form
  plInput.value = "";
  frInput.value = "";
  if (genderInput) genderInput.value = "";
  distPlInput.value = "";
  distFrInput.value = "";
  if (newCatInput) newCatInput.value = "";

  updateCategoryDropdowns();
  renderCardsTable();

  alert(`La carte "${pl}" a bien été ajoutée !`);
}

function deleteCard(id) {
  const card = cards.find(c => c.id === id);
  if (!card) return;

  if (confirm(`Voulez-vous supprimer la carte "${card.pl}" (${card.fr}) ?`)) {
    cards = cards.filter(c => c.id !== id);
    saveCards();
    updateCategoryDropdowns();
    renderCardsTable();
  }
}

// ==========================================
// VÉRITABLE PRONONCIATION POLONAISE AUTHENTIQUE
// ==========================================

// ==========================================
// AUDIO & SYNTHÈSE VOCALE POLONAISE
// ==========================================

let cachedVoices = [];
function initVoices() {
  if ("speechSynthesis" in window) {
    cachedVoices = window.speechSynthesis.getVoices() || [];
    window.speechSynthesis.onvoiceschanged = () => {
      cachedVoices = window.speechSynthesis.getVoices() || [];
    };
  }
}
initVoices();

function getPolishVoice() {
  const voices = (window.speechSynthesis && window.speechSynthesis.getVoices()) || cachedVoices;
  if (!voices || voices.length === 0) return null;

  // Filtrer toutes les voix polonaises disponibles
  const polishVoices = voices.filter(v => {
    const langMatch = v.lang && v.lang.toLowerCase().replace("_", "-").startsWith("pl");
    const nameMatch = v.name && /polish|polski|zosia|krzysztof|siri|paulina|ewa|maja|jan/i.test(v.name);
    return langMatch || nameMatch;
  });

  if (polishVoices.length === 0) return null;

  // Hiérarchie de qualité sur Apple / Windows / Android :
  // 1. Zosia (Premium) — qualité maximale Apple Neural (très naturelle)
  let best = polishVoices.find(v => /zosia/i.test(v.name) && /premium/i.test(v.name));
  if (best) return best;

  // 2. Zosia (Améliorée / Enhanced)
  best = polishVoices.find(v => /zosia/i.test(v.name) && /amélior|enhanced/i.test(v.name));
  if (best) return best;

  // 3. Zosia standard
  best = polishVoices.find(v => /zosia/i.test(v.name));
  if (best) return best;

  // 4. Krzysztof (Premium / Amélioré / Enhanced)
  best = polishVoices.find(v => /krzysztof/i.test(v.name) && /premium|amélior|enhanced/i.test(v.name));
  if (best) return best;

  // 5. Krzysztof standard
  best = polishVoices.find(v => /krzysztof/i.test(v.name));
  if (best) return best;

  // 6. Toute autre voix polonaise de qualité Premium / Améliorée
  best = polishVoices.find(v => /premium|enhanced|amélior/i.test(v.name));
  if (best) return best;

  // 7. Première voix polonaise disponible
  return polishVoices[0];
}

function speakPolish(text) {
  if (!text) return;
  const cleanText = text.trim();

  // 1. Arrêter tout audio en cours
  if (currentAudioElement) {
    try {
      currentAudioElement.pause();
      currentAudioElement.currentTime = 0;
    } catch (e) {}
    currentAudioElement = null;
  }

  const isApple = /(iPhone|iPad|iPod|Macintosh)/i.test(navigator.userAgent);

  // 2. SUR IPHONE / IPAD / MAC :
  // Déclencher la synthèse vocale (Zosia / Siri) IMMÉDIATEMENT ET DE FAÇON SYNCHRONE !
  // Crucial sur Safari iOS : tout délai asynchrone (comme attendre l'échec d'un appel réseau Google)
  // détruit l'autorisation du geste tactile de l'utilisateur et rend Zosia muette.
  if (isApple && "speechSynthesis" in window) {
    playPolishSpeechSynthesis(cleanText);
    return;
  }

  // 3. SUR WINDOWS / PC / ANDROID :
  // Utiliser Google Translate TTS en priorité (prononciation native humaine de haute fidélité
  // sans dépendre d'un pack de langue Windows local)
  playGoogleTTS(cleanText);
}

function playPolishSpeechSynthesis(text) {
  if (!("speechSynthesis" in window)) {
    showAudioNotification("La synthèse vocale n'est pas supportée sur ce navigateur.");
    return;
  }

  try {
    // Si la synthèse vocale est en pause (bug fréquent Safari iOS), on réveille le moteur
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }
    // Ne pas appeler cancel() brutalement sur iOS si rien ne tourne, cela peut annuler le speak() suivant
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }

    const utterance = new SpeechSynthesisUtterance(text);
    const polishVoice = getPolishVoice();
    if (polishVoice) {
      utterance.voice = polishVoice;
    }
    utterance.lang = "pl-PL";
    utterance.rate = 0.88;
    utterance.pitch = 1.0;

    utterance.onerror = (e) => {
      console.warn("SpeechSynthesis error:", e.error, e);
      if (e.error === "language-unavailable" || e.error === "voice-unavailable") {
        showPlatformVoiceHelp();
      }
    };

    window.speechSynthesis.speak(utterance);
  } catch (err) {
    console.error("Erreur SpeechSynthesis :", err);
    showPlatformVoiceHelp();
  }
}

function playGoogleTTS(cleanText) {
  try {
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=pl&client=tw-ob&q=${encodeURIComponent(cleanText)}`;
    const audio = new Audio(url);
    currentAudioElement = audio;

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Lecture Google réussie !
        })
        .catch(err => {
          console.warn("Google TTS indisponible ou bloqué, repli sur synthèse vocale locale :", err);
          playPolishSpeechSynthesis(cleanText);
        });
      return;
    }
  } catch (err) {
    console.warn("Erreur Google TTS :", err);
    playPolishSpeechSynthesis(cleanText);
  }
}

function showPlatformVoiceHelp() {
  const isApple = /(iPhone|iPad|iPod|Macintosh)/i.test(navigator.userAgent);
  const isAndroid = /Android/i.test(navigator.userAgent);

  let msg = "";
  if (isApple) {
    msg = "Pour activer la voix polonaise sur iPhone : Réglages > Accessibilité > Contenu énoncé > Voix > Polonais (téléchargez gratuitement la voix Zosia ou Siri).";
  } else if (isAndroid) {
    msg = "Pour activer la voix polonaise sur Android : Paramètres > Accessibilité > Sortie de synthèse vocale > Moteur Google > Télécharger les voix en polonais.";
  } else {
    msg = "Pour activer la voix polonaise hors-ligne sur Windows : Paramètres > Heure et langue > Voix > Ajouter une voix (Polonais).";
  }
  showAudioNotification(msg);
}

function showAudioNotification(msg) {
  let notif = document.getElementById("audio-notif-toast");
  if (!notif) {
    notif = document.createElement("div");
    notif.id = "audio-notif-toast";
    notif.style.cssText = `
      position: fixed;
      bottom: calc(75px + env(safe-area-inset-bottom, 0px));
      left: 16px;
      right: 16px;
      max-width: 440px;
      margin: 0 auto;
      background: #1e293b;
      color: #f8fafc;
      padding: 14px 18px;
      border-radius: 12px;
      font-size: 0.85rem;
      line-height: 1.45;
      box-shadow: 0 10px 25px rgba(0,0,0,0.3);
      z-index: 9999;
      display: flex;
      align-items: flex-start;
      gap: 12px;
      animation: fadeIn 0.3s ease;
      border-left: 4px solid var(--accent, #3b82f6);
    `;
    document.body.appendChild(notif);
  }
  notif.innerHTML = `📢 <span>${msg}</span>`;
  notif.style.display = "flex";
  setTimeout(() => {
    if (notif) notif.style.display = "none";
  }, 5500);
}

// ==========================================
// RACCOURCIS CLAVIER & UTILITAIRES
// ==========================================

function setupKeyboardShortcuts() {
  document.addEventListener("keydown", (e) => {
    // Fermeture du modal aide-mémoire sur Échap
    const cheatModal = document.getElementById("case-cheatsheet-modal");
    if (cheatModal && cheatModal.style.display !== "none") {
      if (e.key === "Escape") {
        closeCaseCheatSheetModal();
        return;
      }
    }

    if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) {
      return;
    }

    const quizTabActive = document.getElementById("quiz-tab").classList.contains("active");
    const flashcardTabActive = document.getElementById("flashcard-tab").classList.contains("active");
    const casesTabActive = document.getElementById("cases-tab") && document.getElementById("cases-tab").classList.contains("active");
    const possTabActive = document.getElementById("possessives-tab") && document.getElementById("possessives-tab").classList.contains("active");

    if (quizTabActive) {
      if (["1", "2", "3", "4"].includes(e.key)) {
        const index = parseInt(e.key, 10);
        const btn = document.querySelector(`.option-btn[data-index="${index}"]`);
        if (btn && !btn.disabled) {
          btn.click();
        }
      } else if (e.key === " " || e.key === "Enter") {
        const nextBtn = document.getElementById("quiz-next-btn");
        if (nextBtn && nextBtn.style.display !== "none") {
          e.preventDefault();
          nextBtn.click();
        }
      }
    } else if (flashcardTabActive) {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        flipFlashcard();
      } else if (e.key === "ArrowRight") {
        document.getElementById("fc-knew-btn").click();
      } else if (e.key === "ArrowLeft") {
        document.getElementById("fc-again-btn").click();
      }
    } else if (casesTabActive) {
      if (["1", "2", "3", "4"].includes(e.key)) {
        const index = parseInt(e.key, 10);
        const btn = document.querySelector(`.case-option-btn[data-index="${index}"]`);
        if (btn && !btn.disabled) {
          btn.click();
        }
      } else if (e.key === " " || e.key === "Enter") {
        const feedbackBox = document.getElementById("case-feedback-box");
        const nextBtn = document.getElementById("case-next-btn");
        if (feedbackBox && feedbackBox.style.display !== "none" && nextBtn) {
          e.preventDefault();
          nextBtn.click();
        }
      }
    } else if (possTabActive) {
      if (["1", "2", "3", "4"].includes(e.key)) {
        const index = parseInt(e.key, 10);
        const btn = document.querySelector(`.poss-option-btn[data-index="${index}"]`);
        if (btn && !btn.disabled) {
          btn.click();
        }
      } else if (e.key === " " || e.key === "Enter") {
        const feedbackBox = document.getElementById("poss-feedback-box");
        const nextBtn = document.getElementById("poss-next-btn");
        if (feedbackBox && feedbackBox.style.display !== "none" && nextBtn) {
          e.preventDefault();
          nextBtn.click();
        }
      }
    }
  });
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

// ==========================================
// MODULE : POSSESSIFS & DÉMONSTRATIFS
// ==========================================

function initPossessives() {
  updatePossCounts();
  startNewPossQuestion();
  const audioBtn = document.getElementById("poss-audio-btn");
  if (audioBtn) {
    audioBtn.addEventListener("click", () => {
      if (currentPossChallenge) {
        speakPolish(currentPossChallenge.fullSentence);
      }
    });
  }
}

function updatePossCounts() {
  if (typeof POSSESSIVE_CHALLENGES === "undefined") return;

  const total = POSSESSIVE_CHALLENGES.length;
  const l1Count = POSSESSIVE_CHALLENGES.filter(c => c.level === 1).length;
  const l2Count = POSSESSIVE_CHALLENGES.filter(c => c.level === 2).length;

  const countAll = document.getElementById("poss-count-all");
  const countL1 = document.getElementById("poss-count-l1");
  const countL2 = document.getElementById("poss-count-l2");

  if (countAll) countAll.innerText = total;
  if (countL1) countL1.innerText = l1Count;
  if (countL2) countL2.innerText = l2Count;

  // Catégories
  const cat1st = POSSESSIVE_CHALLENGES.filter(c => c.category === "1st-sg" || c.category === "1st-pl").length;
  const cat2nd = POSSESSIVE_CHALLENGES.filter(c => c.category === "2nd-sg" || c.category === "2nd-pl").length;
  const cat3rd = POSSESSIVE_CHALLENGES.filter(c => c.category === "3rd-invariable").length;
  const catReflexive = POSSESSIVE_CHALLENGES.filter(c => c.category === "reflexive").length;
  const catDemonstrative = POSSESSIVE_CHALLENGES.filter(c => c.category === "demonstrative").length;

  const elCatAll = document.getElementById("poss-cat-count-all");
  const elCat1st = document.getElementById("poss-cat-count-1st");
  const elCat2nd = document.getElementById("poss-cat-count-2nd");
  const elCat3rd = document.getElementById("poss-cat-count-3rd");
  const elCatReflexive = document.getElementById("poss-cat-count-reflexive");
  const elCatDemonstrative = document.getElementById("poss-cat-count-demonstrative");

  if (elCatAll) elCatAll.innerText = total;
  if (elCat1st) elCat1st.innerText = cat1st;
  if (elCat2nd) elCat2nd.innerText = cat2nd;
  if (elCat3rd) elCat3rd.innerText = cat3rd;
  if (elCatReflexive) elCatReflexive.innerText = catReflexive;
  if (elCatDemonstrative) elCatDemonstrative.innerText = catDemonstrative;
}

function setPossLevelFilter(level) {
  currentPossLevelFilter = level;

  // Mettre à jour boutons pilules de niveau
  const pills = document.querySelectorAll("#possessives-tab .cases-filter-bar .pill-filter-btn");
  pills.forEach(p => p.classList.remove("active"));

  const targetId = level === "all" ? "poss-level-pill-all" : `poss-level-pill-${level}`;
  const activePill = document.getElementById(targetId);
  if (activePill) activePill.classList.add("active");

  startNewPossQuestion();
}

function setPossCategoryFilter(category) {
  currentPossCategoryFilter = category;

  // Mettre à jour boutons pilules de catégorie
  const pills = document.querySelectorAll("#possessives-tab .cases-type-filter-bar .pill-type-btn");
  pills.forEach(p => p.classList.remove("active"));

  let targetId = "poss-cat-all";
  if (category === "1st") targetId = "poss-cat-1st";
  else if (category === "2nd") targetId = "poss-cat-2nd";
  else if (category === "3rd-invariable") targetId = "poss-cat-3rd";
  else if (category === "reflexive") targetId = "poss-cat-reflexive";
  else if (category === "demonstrative") targetId = "poss-cat-demonstrative";

  const activePill = document.getElementById(targetId);
  if (activePill) activePill.classList.add("active");

  startNewPossQuestion();
}

function getFilteredPossChallenges() {
  if (typeof POSSESSIVE_CHALLENGES === "undefined" || POSSESSIVE_CHALLENGES.length === 0) return [];

  return POSSESSIVE_CHALLENGES.filter(c => {
    // Filtre de niveau (1 ou 2)
    if (currentPossLevelFilter !== "all" && c.level !== currentPossLevelFilter) {
      return false;
    }
    // Filtre de catégorie
    if (currentPossCategoryFilter !== "all") {
      if (currentPossCategoryFilter === "1st") {
        if (c.category !== "1st-sg" && c.category !== "1st-pl") return false;
      } else if (currentPossCategoryFilter === "2nd") {
        if (c.category !== "2nd-sg" && c.category !== "2nd-pl") return false;
      } else if (c.category !== currentPossCategoryFilter) {
        return false;
      }
    }
    return true;
  });
}

function startNewPossQuestion() {
  possAnswered = false;
  const pool = getFilteredPossChallenges();

  if (pool.length === 0) {
    const meaningEl = document.getElementById("poss-target-meaning");
    if (meaningEl) meaningEl.innerText = "Aucun défi dans cette sélection";
    return;
  }

  // Éviter de répéter immédiatement la même question
  let candidates = pool.filter(c => !currentPossChallenge || c.id !== currentPossChallenge.id);
  if (candidates.length === 0) candidates = pool;

  currentPossChallenge = candidates[Math.floor(Math.random() * candidates.length)];

  // Mise à jour de l'en-tête (badge niveau / cas)
  const badgeEl = document.getElementById("poss-badge-level");
  if (badgeEl) {
    const levelClass = currentPossChallenge.level === 1 ? "poss-level-1" : "poss-level-2";
    const levelIcon = currentPossChallenge.level === 1 ? "🟢" : "🔵";
    badgeEl.className = `badge-case-name ${levelClass}`;
    badgeEl.innerHTML = `${levelIcon} NIVEAU ${currentPossChallenge.level} • ${currentPossChallenge.caseLabelFr.toUpperCase()}`;
  }

  // Sens attendu et contexte du nom
  const meaningEl = document.getElementById("poss-target-meaning");
  const nounContextEl = document.getElementById("poss-noun-context");
  const caseLabelEl = document.getElementById("poss-case-label");

  if (meaningEl) meaningEl.innerText = `« ${currentPossChallenge.targetMeaning} »`;
  if (nounContextEl) nounContextEl.innerText = currentPossChallenge.nounContext;
  if (caseLabelEl) caseLabelEl.innerText = currentPossChallenge.caseLabelFr;

  // Phrase avec le trou
  const beforeEl = document.getElementById("poss-sentence-before");
  const gapEl = document.getElementById("poss-gap-slot");
  const afterEl = document.getElementById("poss-sentence-after");

  if (beforeEl) beforeEl.innerText = currentPossChallenge.sentenceBefore;
  if (gapEl) {
    gapEl.innerText = "[ ... ]";
    gapEl.className = "case-gap-slot";
  }
  if (afterEl) afterEl.innerText = currentPossChallenge.sentenceAfter;

  // Cacher audio et feedback
  const audioBtn = document.getElementById("poss-audio-btn");
  if (audioBtn) audioBtn.style.display = "none";

  const feedbackBox = document.getElementById("poss-feedback-box");
  if (feedbackBox) feedbackBox.style.display = "none";

  renderPossOptions();
}

function renderPossOptions() {
  const container = document.getElementById("poss-options-container");
  if (!container || !currentPossChallenge) return;
  container.innerHTML = "";

  const options = [...currentPossChallenge.options];
  shuffleArray(options);

  const letters = ["A", "B", "C", "D"];

  options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "case-option-btn poss-option-btn";
    btn.setAttribute("data-index", idx + 1);

    btn.innerHTML = `
      <span class="case-option-letter">${letters[idx]}</span>
      <div class="case-option-content" style="display:flex; align-items:baseline; gap:0.5rem;">
        <span class="case-fullword" style="font-weight:700; font-size:1.15rem;">${opt.word}</span>
      </div>
    `;

    btn.addEventListener("click", () => handlePossOptionClick(btn, opt));
    container.appendChild(btn);
  });
}

function handlePossOptionClick(selectedBtn, selectedOption) {
  if (possAnswered || !currentPossChallenge) return;
  possAnswered = true;

  possTotal++;
  const isCorrect = selectedOption.isCorrect;
  const allBtns = document.querySelectorAll(".poss-option-btn");

  allBtns.forEach(btn => {
    btn.disabled = true;
  });

  const gapEl = document.getElementById("poss-gap-slot");
  const audioBtn = document.getElementById("poss-audio-btn");
  const feedbackBox = document.getElementById("poss-feedback-box");
  const titleEl = document.getElementById("poss-feedback-title");
  const expEl = document.getElementById("poss-feedback-explanation");
  const nextBtn = document.getElementById("poss-next-btn");

  if (isCorrect) {
    possScore++;
    possStreak++;
    selectedBtn.classList.add("correct");

    if (gapEl) {
      gapEl.innerText = selectedOption.word;
      gapEl.className = "case-gap-slot filled-correct";
    }

    if (titleEl) {
      titleEl.innerHTML = `<span style="color:var(--success);">✅ Excellent ! Dobrze !</span>`;
    }
  } else {
    possStreak = 0;
    selectedBtn.classList.add("wrong");

    // Trouver et surligner le bon bouton
    const correctOpt = currentPossChallenge.options.find(o => o.isCorrect);
    allBtns.forEach(btn => {
      const fullWordSpan = btn.querySelector(".case-fullword");
      if (fullWordSpan && correctOpt && fullWordSpan.innerText.trim() === correctOpt.word.trim()) {
        btn.classList.add("correct");
      }
    });

    if (gapEl) {
      gapEl.innerText = currentPossChallenge.gapWord;
      gapEl.className = "case-gap-slot filled-wrong";
    }

    if (titleEl) {
      titleEl.innerHTML = `<span style="color:var(--danger);">❌ Incorrect.</span> La bonne réponse était : <strong>${currentPossChallenge.gapWord}</strong>`;
    }
  }

  // Révélation de la règle
  if (expEl) {
    expEl.innerHTML = `
      <div style="font-size:1.1rem; font-weight:700; color:#0f172a; margin-bottom:0.4rem;">
        🇵🇱 ${currentPossChallenge.fullSentence}
      </div>
      <div style="font-size:0.95rem; color:var(--text-muted); font-style:italic; margin-bottom:0.65rem;">
        🇫🇷 "${currentPossChallenge.translationFr}"
      </div>
      <div style="background:#f8fafc; border-left:3px solid var(--primary); padding:0.65rem 0.85rem; border-radius:0 6px 6px 0; font-size:0.9rem; line-height:1.55; color:#334155;">
        ${currentPossChallenge.ruleExplanation}
      </div>
    `;
  }

  // Activer l'audio
  if (audioBtn) {
    audioBtn.style.display = "inline-flex";
    speakPolish(currentPossChallenge.fullSentence);
  }

  if (feedbackBox) {
    feedbackBox.style.display = "block";
  }

  if (nextBtn) {
    nextBtn.focus();
  }

  updatePossStatsCounters();
}

function updatePossStatsCounters() {
  const scoreEl = document.getElementById("poss-score-val");
  const streakEl = document.getElementById("poss-streak-val");

  if (scoreEl) scoreEl.innerText = `${possScore} / ${possTotal}`;
  if (streakEl) streakEl.innerText = `${possStreak} 🔥`;
}

function resetPossSessionScore() {
  possScore = 0;
  possTotal = 0;
  possStreak = 0;
  updatePossStatsCounters();
}

// ------------------------------------------
// MODAL AIDE-MÉMOIRE DES POSSESSIFS
// ------------------------------------------

function openPossCheatSheetModal(targetTab = "rules") {
  const modal = document.getElementById("poss-cheatsheet-modal");
  if (!modal) return;
  modal.style.display = "flex";
  switchPossCheatSheetTab(targetTab);
}

function closePossCheatSheetModal() {
  const modal = document.getElementById("poss-cheatsheet-modal");
  if (modal) modal.style.display = "none";
}

function handlePossModalBackdropClick(event) {
  if (event.target.id === "poss-cheatsheet-modal") {
    closePossCheatSheetModal();
  }
}

function switchPossCheatSheetTab(tabKey) {
  const tabBtns = document.querySelectorAll("#modal-poss-tabs .modal-tab-btn");
  tabBtns.forEach(btn => {
    if (btn.getAttribute("data-posstab") === tabKey) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  const contentContainer = document.getElementById("modal-poss-cheatsheet-content");
  if (!contentContainer) return;

  if (tabKey === "rules") {
    contentContainer.innerHTML = renderPossRulesView();
  } else if (tabKey === "nominative") {
    contentContainer.innerHTML = renderPossNominativeTableView();
  } else if (tabKey === "cases") {
    contentContainer.innerHTML = renderPossCasesTableView();
  }
}

function renderPossRulesView() {
  if (typeof POSSESSIVE_CHEATSHEET === "undefined") return "";

  return `
    <div style="display:flex; flex-direction:column; gap:1.25rem;">
      <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:10px; padding:1rem 1.25rem;">
        <h4 style="margin:0 0 0.5rem 0; color:#1d4ed8; font-size:1.05rem;">🌟 Les 4 Piliers des Possessifs & Démonstratifs Polonais</h4>
        <p style="margin:0; font-size:0.9rem; color:#1e3a8a; line-height:1.5;">
          Pour maîtriser les possessifs polonais (<em>mój, nasz, twój, jego, tej...</em>), il suffit de comprendre 4 logiques simples :
        </p>
      </div>

      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:1rem;">
        ${POSSESSIVE_CHEATSHEET.goldenRules.map(rule => `
          <div style="background:white; border:1px solid var(--border); border-radius:8px; padding:1rem; box-shadow:0 1px 3px rgba(0,0,0,0.05);">
            <div style="font-weight:700; color:#0f172a; font-size:0.95rem; margin-bottom:0.4rem; display:flex; align-items:center; gap:0.4rem;">
              ${rule.title}
            </div>
            <div style="font-size:0.88rem; line-height:1.55; color:#334155;">
              ${rule.text}
            </div>
          </div>
        `).join("")}
      </div>

      <div style="display:flex; justify-content:center; gap:0.75rem; flex-wrap:wrap; margin-top:0.5rem;">
        <button type="button" class="btn-primary" onclick="switchPossCheatSheetTab('nominative')">
          📝 Voir le Tableau du Nominatif de Base &rarr;
        </button>
        <button type="button" class="btn-secondary" onclick="switchPossCheatSheetTab('cases')">
          🏛️ Voir le Tableau des Déclinaisons & Cas &rarr;
        </button>
      </div>
    </div>
  `;
}

function renderPossNominativeTableView() {
  if (typeof POSSESSIVE_CHEATSHEET === "undefined") return "";

  return `
    <div>
      <div style="margin-bottom:1rem;">
        <h4 style="margin:0 0 0.35rem 0; font-size:1.1rem; color:#0f172a;">📝 Niveau 1 : Formes de Base au Nominatif (Sujet)</h4>
        <p style="margin:0; font-size:0.85rem; color:var(--text-muted);">
          Notez bien que les possessifs s'accordent en genre et en nombre avec le nom possédé. Remarquez la forme spéciale du pluriel viril (réservée aux groupes contenant des hommes) et la totale invariance de <em>jego, jej, ich</em>.
        </p>
      </div>

      <div class="cheat-table-wrap">
        <table class="cheat-table">
          <thead>
            <tr>
              <th style="width:20%;">Personne / Pronom</th>
              <th style="width:16%;">Masculin (ten)</th>
              <th style="width:16%;">Féminin (ta)</th>
              <th style="width:16%;">Neutre (to)</th>
              <th style="width:16%;">Pluriel Viril (hommes)</th>
              <th style="width:16%;">Pluriel Non-viril</th>
            </tr>
          </thead>
          <tbody>
            ${POSSESSIVE_CHEATSHEET.nominativeTable.map(row => `
              <tr>
                <td><strong>${row.person}</strong></td>
                <td><strong style="color:var(--primary);">${row.m}</strong></td>
                <td><strong style="color:#d946ef;">${row.f}</strong></td>
                <td><strong style="color:#0284c7;">${row.n}</strong></td>
                <td><strong style="color:#16a34a;">${row.virilPl}</strong></td>
                <td><strong style="color:#ea580c;">${row.nonVirilPl}</strong> ${row.note ? `<span style="font-size:0.75rem; display:block; color:#64748b;">${row.note}</span>` : ""}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>

      <div style="background:#fefce8; border:1px solid #fef08a; border-radius:8px; padding:0.85rem 1rem; margin-top:1rem; font-size:0.88rem; color:#854d0e; line-height:1.5;">
        💡 <strong>Mémo express :</strong> Féminin = terminaison <strong>-a</strong> (moja, twoja, nasza, wasza, ta) • Neutre = terminaison <strong>-e</strong> (moje, twoje, nasze, wasze, to) • Pluriel viril = terminaison <strong>-i</strong> (moi, twoi, nasi, wasi, ci).
      </div>
    </div>
  `;
}

function renderPossCasesTableView() {
  if (typeof POSSESSIVE_CHEATSHEET === "undefined") return "";

  return `
    <div>
      <div style="margin-bottom:1rem;">
        <h4 style="margin:0 0 0.35rem 0; font-size:1.1rem; color:#0f172a;">🏛️ Niveau 2 : Déclinaisons dans les Cas Grammaticaux</h4>
        <p style="margin:0; font-size:0.85rem; color:var(--text-muted);">
          Voici les terminaisons clés appliquées aux possessifs et au démonstratif (<em>ten &rarr; tego, tej, tym, tą...</em>). Rappel : <strong>jego, jej, ich</strong> restent strictement invariables dans tous ces cas !
        </p>
      </div>

      <div class="cheat-table-wrap">
        <table class="cheat-table">
          <thead>
            <tr>
              <th style="width:18%;">Cas & Rôle</th>
              <th style="width:16%;">Masculin Animé</th>
              <th style="width:16%;">Masculin Inanimé</th>
              <th style="width:16%;">Féminin</th>
              <th style="width:16%;">Neutre</th>
              <th style="width:18%;">Exemple concret</th>
            </tr>
          </thead>
          <tbody>
            ${POSSESSIVE_CHEATSHEET.casesTable.map(row => `
              <tr>
                <td>
                  <strong>${row.caseName}</strong>
                  <div style="font-size:0.75rem; color:var(--text-muted); font-weight:normal;">${row.role}</div>
                </td>
                <td><strong style="color:#1e40af;">${row.mAnim}</strong></td>
                <td><strong style="color:#0f766e;">${row.mInan}</strong></td>
                <td><strong style="color:#be185d;">${row.f}</strong></td>
                <td><strong style="color:#0284c7;">${row.n}</strong></td>
                <td style="font-size:0.82rem; font-style:italic;">${row.example}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>

      <div style="background:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; padding:0.85rem 1rem; margin-top:1rem; font-size:0.88rem; color:#166534; line-height:1.5;">
        🎯 <strong>Les 3 terminaisons magiques à retenir :</strong><br>
        1. <strong>Féminin Génitif / Datif / Locatif :</strong> toujours en <strong>-ej</strong> &rarr; <em>mojej, twojej, naszej, <strong>tej</strong> (cette / de cette)</em> !<br>
        2. <strong>Féminin Accusatif & Instrumental :</strong> toujours en <strong>-ą</strong> &rarr; <em>moją, twoją, naszą, tą</em>.<br>
        3. <strong>Masculin & Neutre Instrumental / Locatif :</strong> toujours en <strong>-im / -ym</strong> &rarr; <em>moim, twoim, naszym, tym</em>.
      </div>
    </div>
  `;
}

// Expositions globales pour les événements HTML inline
window.resetQuizSessionScore = resetQuizSessionScore;
window.resetTypingSessionScore = resetTypingSessionScore;
window.resetCaseSessionScore = resetCaseSessionScore;
window.resetPossSessionScore = resetPossSessionScore;
window.resetSessionScore = resetSessionScore;
window.openPossCheatSheetModal = openPossCheatSheetModal;
window.closePossCheatSheetModal = closePossCheatSheetModal;
window.handlePossModalBackdropClick = handlePossModalBackdropClick;
window.switchPossCheatSheetTab = switchPossCheatSheetTab;
window.setPossLevelFilter = setPossLevelFilter;
window.setPossCategoryFilter = setPossCategoryFilter;
window.startNewPossQuestion = startNewPossQuestion;

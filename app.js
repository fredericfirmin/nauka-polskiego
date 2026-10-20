const STORAGE_KEY = "nauka_polskiego_cards_v7";
const LEGACY_STORAGE_KEY = "nauka_polskiego_cards_v6";

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
let score = 0;
let streak = 0;
let totalAnswers = 0;

// État Flashcard
let flashcardIndex = 0;
let flashcardList = [];
let isFlipped = false;

// État Écriture
let typingCard = null;
let typingDirection = "fr-pl";

// État Jeu des Cas (Przypadki)
let currentCaseFilter = "all";
let currentCaseChallenge = null;
let caseScore = 0;
let caseTotal = 0;
let caseStreak = 0;
let caseAnswered = false;

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
  renderCardsTable();
  setupSpecialKeys();
  setupKeyboardShortcuts();
  updateMasteryCounters();
  updateStatsCounters();
  registerServiceWorker();
});

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("./sw.js")
        .then((reg) => {
          console.log("PWA Service Worker actif :", reg.scope);
        })
        .catch((err) => {
          console.warn("Service Worker :", err);
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
    saved = localStorage.getItem(LEGACY_STORAGE_KEY);
  }

  if (saved) {
    try {
      cards = JSON.parse(saved);
      // Synchroniser avec les nouvelles définitions de genres et de réponses acceptées
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

      if (targetTab === "quiz-tab") {
        if (!currentQuizCard) startNewQuizQuestion();
      } else if (targetTab === "flashcard-tab") {
        initFlashcards();
      } else if (targetTab === "typing-tab") {
        startNewTypingQuestion();
      } else if (targetTab === "cases-tab") {
        if (!currentCaseChallenge) startNewCaseQuestion();
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

  totalAnswers++;
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
    score++;
    streak++;
    feedbackMsg.innerHTML = `<span style="color: var(--success); font-weight:700;">✅ Excellent ! Dobrze !</span>`;
    if (currentQuizDirection === "fr-pl") {
      speakPolish(correctAnswer);
    }
  } else {
    selectedBtn.classList.add("wrong");
    streak = 0;
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

  updateStatsCounters();
}

function updateStatsCounters() {
  const scoreEl = document.getElementById("stat-score");
  const streakEl = document.getElementById("stat-streak");
  const totalCardsEl = document.getElementById("stat-total-cards");

  if (scoreEl) scoreEl.innerText = `${score} / ${totalAnswers}`;
  if (streakEl) streakEl.innerText = `${streak} 🔥`;
  if (totalCardsEl) totalCardsEl.innerText = cards.length;
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

  // 2. Si pas d'égalité stricte, vérification par distance (tolérance aux inversions / typos légères)
  let bestDistance = Infinity;
  let closestAnswer = typingCard.pl;

  if (!isExactMatch) {
    for (const cand of candidateAnswers) {
      const normCand = normalizeText(cand);
      const dist = damerauLevenshtein(normalizedUser, normCand);
      if (dist < bestDistance) {
        bestDistance = dist;
        closestAnswer = cand;
      }
    }
  }

  // Seuil de tolérance :
  // - Chaîne de moins de 5 caractères : distance max 0 (exacte)
  // - Mot moyen (5 à 9 caractères) : distance max 1 (ex: spotni vs stopni)
  // - Phrase longue (10 caractères et +) : distance max 2 (ex: coquille légère sur une lettre ou inversion)
  const candLength = normalizeText(closestAnswer).length;
  const maxAllowedDistance = candLength < 5 ? 0 : (candLength < 10 ? 1 : 2);

  const isToleratedMatch = !isExactMatch && (bestDistance <= maxAllowedDistance);
  const feedbackBox = document.getElementById("typing-feedback");

  totalAnswers++;

  if (isExactMatch) {
    recordCardResult(typingCard.id, true);
    score++;
    streak++;
    feedbackBox.innerHTML = `
      <div style="color: var(--success); font-weight:700; font-size:1.15rem; margin-bottom:0.35rem;">
        ✅ Parfait ! Bardzo dobrze !
      </div>
      <div style="font-size:1.1rem; font-weight:600;">"${bestMatch}"</div>
      ${typingCard.genderNotes ? `<div style="font-size:0.85rem; color:var(--text-muted); margin-top:0.35rem;">💡 ${typingCard.genderNotes}</div>` : ""}
    `;
    speakPolish(bestMatch);
  } else if (isToleratedMatch) {
    recordCardResult(typingCard.id, true);
    score++;
    streak++;
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
    streak = 0;
    const expectedWord = typingCard.pl;
    feedbackBox.innerHTML = `
      <div style="color: var(--danger); font-weight:700; font-size:1.15rem; margin-bottom:0.35rem;">
        ❌ Pas tout à fait...
      </div>
      <div>La réponse attendue était : <strong style="color:var(--primary); font-size:1.15rem;">${expectedWord}</strong></div>
      <div style="font-size:0.85rem; color:var(--text-muted); margin-top:0.3rem;">Votre saisie : <em>${rawInput || "(vide)"}</em></div>
      ${typingCard.genderNotes ? `<div style="font-size:0.85rem; color:var(--text-muted); margin-top:0.35rem;">💡 ${typingCard.genderNotes}</div>` : ""}
    `;
    speakPolish(expectedWord);
  }

  updateStatsCounters();

  feedbackBox.style.display = "block";
  inputEl.disabled = true;
  document.getElementById("typing-submit-btn").style.display = "none";
  document.getElementById("typing-next-btn").style.display = "inline-flex";
  document.getElementById("typing-next-btn").focus();
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

function updateCaseCounts() {
  const elAll = document.getElementById("case-count-all");
  const elBiernik = document.getElementById("case-count-biernik");
  const elNarzednik = document.getElementById("case-count-narzednik");
  const elMiejscownik = document.getElementById("case-count-miejscownik");
  const elDopelniacz = document.getElementById("case-count-dopelniacz");

  if (typeof CASE_CHALLENGES === "undefined") return;

  if (elAll) elAll.innerText = CASE_CHALLENGES.length;
  if (elBiernik) elBiernik.innerText = CASE_CHALLENGES.filter(c => c.caseName === "Biernik").length;
  if (elNarzednik) elNarzednik.innerText = CASE_CHALLENGES.filter(c => c.caseName === "Narzędnik").length;
  if (elMiejscownik) elMiejscownik.innerText = CASE_CHALLENGES.filter(c => c.caseName === "Miejscownik").length;
  if (elDopelniacz) elDopelniacz.innerText = CASE_CHALLENGES.filter(c => c.caseName === "Dopełniacz").length;
}

function setCaseCategoryFilter(filterName) {
  currentCaseFilter = filterName;

  // Mettre à jour l'état visuel des boutons pilules
  const pills = document.querySelectorAll(".cases-filter-bar .pill-filter-btn");
  pills.forEach(p => p.classList.remove("active"));

  const activePill = document.getElementById(`case-pill-${filterName}`);
  if (activePill) {
    activePill.classList.add("active");
  }

  startNewCaseQuestion();
}

function getFilteredCaseChallenges() {
  if (typeof CASE_CHALLENGES === "undefined" || CASE_CHALLENGES.length === 0) return [];
  if (currentCaseFilter === "all") {
    return CASE_CHALLENGES;
  }
  return CASE_CHALLENGES.filter(c => c.caseName === currentCaseFilter);
}

function startNewCaseQuestion() {
  const deck = getFilteredCaseChallenges();
  if (deck.length === 0) return;

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
  if (genderEl) genderEl.innerText = `nom ${currentCaseChallenge.gender}`;
  if (meaningEl) meaningEl.innerText = `"${currentCaseChallenge.translationFr}"`;
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

/**
 * Joue la prononciation avec une VRAIE voix polonaise native :
 * 1. D'abord via le flux audio officiel polonais de Google Translate TTS (parfaitement authentique).
 * 2. En repli local, UNIQUEMENT si le système dispose d'une voix polonaise installée.
 * 3. Si aucune voix polonaise n'est installée, NE JAMAIS jouer avec la voix anglaise US !
 */
function speakPolish(text) {
  if (!text) return;
  const cleanText = text.trim();

  // Arrêter tout audio en cours
  if (currentAudioElement) {
    currentAudioElement.pause();
    currentAudioElement = null;
  }
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }

  // 1. Essai avec Google Translate TTS (voix native polonaise de haute fidélité)
  try {
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=pl&client=tw-ob&q=${encodeURIComponent(cleanText)}`;
    const audio = new Audio(url);
    currentAudioElement = audio;

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(err => {
        // En cas de blocage CORS/réseau, basculer sur SpeechSynthesis LOCAL mais STRICTEMENT polonais
        fallbackToStrictPolishVoice(cleanText);
      });
      return;
    }
  } catch (err) {
    fallbackToStrictPolishVoice(cleanText);
  }
}

function fallbackToStrictPolishVoice(text) {
  if (!("speechSynthesis" in window)) return;

  const voices = window.speechSynthesis.getVoices();
  // Chercher UNIQUEMENT une voix polonaise réelle
  const polishVoice = voices.find(v => v.lang && v.lang.toLowerCase().replace("_", "-").startsWith("pl"));

  if (!polishVoice) {
    console.warn("Aucune voix polonaise installée sur votre système d'exploitation. Voix anglaise bloquée.");
    showAudioNotification("Voix polonaise non disponible sur ce navigateur. Pour l'activer hors-ligne, installez le pack linguistique Polonais dans les paramètres de Windows.");
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = polishVoice;
  utterance.lang = "pl-PL";
  utterance.rate = 0.9;
  window.speechSynthesis.speak(utterance);
}

function showAudioNotification(msg) {
  let notif = document.getElementById("audio-notif-toast");
  if (!notif) {
    notif = document.createElement("div");
    notif.id = "audio-notif-toast";
    notif.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: #1e293b;
      color: white;
      padding: 12px 18px;
      border-radius: 10px;
      font-size: 0.85rem;
      max-width: 320px;
      box-shadow: 0 10px 20px rgba(0,0,0,0.2);
      z-index: 9999;
      display: flex;
      align-items: center;
      gap: 10px;
      animation: fadeIn 0.3s ease;
    `;
    document.body.appendChild(notif);
  }
  notif.innerHTML = `⚠️ <span>${msg}</span>`;
  notif.style.display = "flex";
  setTimeout(() => {
    if (notif) notif.style.display = "none";
  }, 4500);
}

// ==========================================
// RACCOURCIS CLAVIER & UTILITAIRES
// ==========================================

function setupKeyboardShortcuts() {
  document.addEventListener("keydown", (e) => {
    if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) {
      return;
    }

    const quizTabActive = document.getElementById("quiz-tab").classList.contains("active");
    const flashcardTabActive = document.getElementById("flashcard-tab").classList.contains("active");
    const casesTabActive = document.getElementById("cases-tab") && document.getElementById("cases-tab").classList.contains("active");

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
    }
  });
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

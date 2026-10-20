# 🇵🇱 Nauka Polskiego - Flashcards & Quiz de Polonais

Application web moderne, rapide et autonome pour apprendre et réviser le polonais avec des flashcards intelligentes, un mode QCM avec fausses réponses plausibles, un mode écriture et la synthèse vocale.

---

## 🚀 Démarrage rapide

Il n'y a **aucune installation ni dépendance requise** !
1. Ouvrez simplement le fichier **[`index.html`](file:///c:/Users/firmin/Documents/antigravity/jolly-bardeen/index.html)** dans votre navigateur web préféré (Chrome, Edge, Firefox, etc.).
2. Vous pouvez commencer à vous entraîner immédiatement !

---

## 🌟 Fonctionnalités

### 1. 🎯 Mode Quiz QCM (Choix Multiples)
- Propose **4 options** (1 bonne réponse + 3 mauvaises réponses crédibles).
- **Génération intelligente des mauvaises réponses** :
  - Chaque carte dispose de distracteurs cohérents préparés dans les deux sens de traduction.
  - Si vous ajoutez de nouvelles cartes sans préciser de mauvaises réponses, le système choisit automatiquement des distracteurs pertinents dans la même catégorie.
- **Raccourcis clavier** :
  - Touches **`1`**, **`2`**, **`3`**, **`4`** pour répondre.
  - Touche **`Espace`** ou **`Entrée`** pour passer à la question suivante.
- **Feedback immédiat** avec affichage clair de la bonne réponse en cas d'erreur.
- **Série en cours (Streak 🔥)** et suivi du score.

### 2. 🎴 Mode Flashcards 3D
- Animation fluide de rotation recto/verso en 3D.
- Évaluation autonome :
  - **`✅ Je savais !`** (ou Flèche Droite `→`)
  - **`🔄 À revoir`** (ou Flèche Gauche `←`) : replace la carte un peu plus loin dans la pile pour retravailler vos points faibles.
  - **`Espace`** : retourne la carte.

### 3. ✍️ Mode Écriture & Orthographe
- Entraînez-vous à écrire les mots polonais sans faute.
- **Clavier virtuel de caractères polonais** cliquables pour insérer facilement : `ą`, `ć`, `ę`, `ł`, `ń`, `ó`, `ś`, `ź`, `ż`.

### 4. 🔊 Prononciation Audio (Synthèse vocale)
- Écoutez la prononciation authentique en polonais pour chaque mot ou phrase en cliquant sur l'icône **`🔊`**.
- Possibilité d'activer l'option **"Prononcer auto"** pour entendre le mot polonais dès qu'il apparaît.

### 5. 🔄 Sens de travail au choix
- 🇵🇱 Polonais ➔ 🇫🇷 Français
- 🇫🇷 Français ➔ 🇵🇱 Polonais
- 🔀 Mixte (alternance automatique aléatoire)

### 6. 🏷️ Filtrage par Catégorie
- Travaillez sur tout le vocabulaire ou ciblez un thème précis :
  - *Expressions & Phrases*
  - *Couleurs*
  - *Adjectifs*
  - *Voyage & Aéroport*
  - *Nourriture & Café*
  - *(Vos catégories personnalisées)*

### 7. 📚 Gestionnaire & Enrichissement
- **Ajout instantané** de nouveaux mots ou phrases via le formulaire dédié.
- **Sauvegarde automatique** dans le `localStorage` de votre navigateur.
- **Exportation JSON** : téléchargez une copie de sauvegarde de votre deck en un clic.
- **Importation JSON** : rechargez facilement vos cartes ou partagez-les.
- **Réinitialisation** : bouton pour revenir au set d'origine si vous souhaitez repartir à zéro.

---

## 🗂️ Structure du projet

- [`index.html`](file:///c:/Users/firmin/Documents/antigravity/jolly-bardeen/index.html) : Interface utilisateur responsive et claire.
- [`data.js`](file:///c:/Users/firmin/Documents/antigravity/jolly-bardeen/data.js) : Base de vocabulaire initiale complète fournie (61 cartes enrichies avec distracteurs).
- [`app.js`](file:///c:/Users/firmin/Documents/antigravity/jolly-bardeen/app.js) : Moteur applicatif, logique de quiz, synthèse vocale, stockage local.
- [`style.css`](file:///c:/Users/firmin/Documents/antigravity/jolly-bardeen/style.css) : Design moderne, animations 3D, feedback visuel.

# 🇵🇱 Nauka Polskiego - Application d'Apprentissage du Polonais

Application web moderne, réactive et autonome (PWA) conçue pour maîtriser la langue polonaise : vocabulaire thématique, déclinaisons des cas grammaticaux (*przypadki*), adjectifs possessifs, exercices de prononciation audio et révisions intelligentes.

Fonctionne sur **ordinateur (Windows, Mac, Linux)** ainsi que sur **mobile (iPhone & Android)**, en ligne et hors-ligne.

---

## 🚀 Démarrage rapide

Il n'y a **aucune installation ni dépendance requise** !
1. Ouvrez simplement le fichier [`index.html`](file:///c:/Users/firmin/Documents/antigravity/jolly-bardeen/index.html) dans votre navigateur (Chrome, Edge, Safari, Firefox).
2. **Sur mobile (iPhone & Android)** : utilisez l'option *« Sur l'écran d'accueil »* de votre navigateur pour installer l'application en tant que **PWA** plein écran.

---

## 🌟 Modules & Fonctionnalités

### 1. 🏛️ Module Défi des Cas Polonais (*Przypadki*)
Entraînement contextualisé pour maîtriser les 4 déclinaisons fondamentales :
- **152 phrases et défis grammaticaux** rédigés en polonais courant :
  - **Biernik (Accusatif)** : complément d'objet direct, verbes d'action, destinations de mouvement (*na / w*).
  - **Narzędnik (Instrumental)** : accompagnement (*z / ze*), profession, nationalité, état après *być*.
  - **Miejscownik (Locatif)** : lieu où l'on se trouve (*w, na, o, po, przy*).
  - **Dopełniacz (Génitif)** : négation (*nie ma, nie widzę*), quantité, prépositions (*do, z, bez, dla, od*, *niedaleko*, verbe *potrzebować*).
- **Filtres croisés avancés** :
  - Par cas : *Tous*, *Biernik*, *Narzędnik*, *Miejscownik*, *Dopełniacz*.
  - Par catégorie grammaticale : *Tous*, *Noms singulier*, *Adjectifs*, *Pluriels*.
- **Prise en charge approfondie des pluriels (49 défis)** :
  - Distinction essentielle entre **pluriel viril (masculin personnel)** et **non-viril**.
  - Génitif pluriel complet (19 défis) : masculins en `-ów`, neutres et féminins à désinence zéro `-ø` et `e` mobile, irréguliers fréquents (*pieniędzy, dzieci, ludzi, miesięcy, dni*).
- **Tableau aide-mémoire interactif** : consultation à tout moment des terminaisons régulières, exceptions, questions de cas (*Kogo? Co?*, *Kim? Czym?*...) et exemples concrets.
- **Explications pédagogiques instantanées** après chaque validation.

---

### 2. 👥 Module Adjectifs Possessifs (*Zaimki dzierżawcze*)
Module dédié à l'apprentissage et à la manipulation des possessifs :
- Couvre toutes les personnes : **mój**, **twój**, **jego**, **jej**, **nasz**, **wasz**, **ich** ainsi que le réfléchi indispensable **swój**.
- Déclinaison par cas (Nominatif, Accusatif, Instrumental, Locatif, Génitif) et par genre (masculin animé/inanimé/viril, féminin, neutre, pluriels).
- **Filtres par niveau et catégorie** :
  - Niveaux : *Tous*, *Débutant (Nominatif de base)*, *Intermédiaire (Accusatif / Instrumental)*, *Avancé (Locatif / Génitif / Pluriels)*.
  - Personnes : *Tous*, *1re & 2e pers. (mój, twój, nasz, wasz)*, *3e pers. (jego, jej, ich)*, *Réfléchi (swój)*.
- **Tableau de synthèse complet des possessifs** accessible en un clic.

---

### 3. 🎯 Mode Quiz & Flashcards de Vocabulaire
- **Base riche de 265 cartes de vocabulaire** réparties par thématiques pratiques :
  - *Fruits & Légumes* (20 cartes complètes avec fraise, framboise, pastèque, poivron, etc.)
  - *Nombres* (39 cartes : dizaines, centaines, milliers, années 1999/2026 et calculs)
  - *Phrases & Quotidien* (salutations, expressions *Co nowego?*, *Po staremu!*, faire connaissance)
  - *Voyage & Aéroport*, *Nourriture & Café*, *Objets du quotidien*, *Adjectifs*, *Couleurs*, *La Poste*...
- **Quiz QCM 4 choix** : 1 bonne réponse et 3 faux choix crédibles (distracteurs intelligents générés par catégorie).
- **Flashcards 3D** : animation fluide de bascule recto/verso avec auto-évaluation (*Je savais* / *À revoir*).
- **Mode Écriture** : saisie avec clavier virtuel de caractères polonais cliquables (`ą`, `ć`, `ę`, `ł`, `ń`, `ó`, `ś`, `ź`, `ż`).
- **Sens d'apprentissage modulable** :
  - 🇵🇱 Polonais ➔ 🇫🇷 Français
  - 🇫🇷 Français ➔ 🇵🇱 Polonais
  - 🔀 Mixte aléatoire
- **Gestionnaire de deck** : ajout de nouvelles cartes, exportation/importation en JSON, persistance automatique dans le stockage local du navigateur.

---

### 4. 🔊 Moteur Audio Hybride Haute Fidélité
Prononciation polonaise fluide adaptée à chaque appareil :
- **Sous Windows / PC** : streaming natif de haute qualité via le flux vocal polonais officiel de Google Translate (aucune installation ni configuration de pack Windows requise).
- **Sur iPhone / iPad / Mac** : activation synchrone de la synthèse vocale native Apple (`SpeechSynthesis`) avec sélection prioritaire des voix haute résolution neuronales :
  - 🥇 **Zosia (Premium)** (qualité maximale Apple Neural)
  - 🥈 **Zosia (Améliorée)**
  - 🥉 **Zosia (Standard)** ou **Krzysztof**
- **Indicateurs et messages d'aide contextuels** : instructions claires adaptées au système utilisé en cas de voix désactivée.

---

### 5. 📱 PWA & Optimisations Mobiles (iPhone 15 / iOS & Android)
- **Barre de navigation inférieure (Bottom Nav)** ergonomique au pouce pour naviguer entre les écrans (*Vocabulaire, Cas, Possessifs, Cartes, Réglages*).
- **Prise en compte des zones de sécurité iOS** (`safe-area-inset-bottom` / `viewport-fit=cover` pour Dynamic Island et barre d'accueil iPhone).
- **Compteurs indépendants écran par écran** : scores, séries en cours (*Streak 🔥*) et totaux calculés séparément pour chaque mode.
- **Fonctionnement hors-ligne** grâce au Service Worker (`sw.js`).

---

## ⌨️ Raccourcis Clavier (Desktop)

| Raccourci | Action |
| :--- | :--- |
| **`1`**, **`2`**, **`3`**, **`4`** | Sélectionner une réponse dans les Quiz / Cas / Possessifs |
| **`Espace`** ou **`Entrée`** | Valider / Passer à la question suivante (ou retourner la flashcard) |
| **`Flèche Droite (→)`** | Flashcard : *Je savais !* |
| **`Flèche Gauche (←)`** | Flashcard : *À revoir* |
| **`Échap`** | Fermer le tableau aide-mémoire |

---

## 🗂️ Structure des Fichiers

```text
jolly-bardeen/
│
├── index.html        # Interface HTML5 responsive, navigation mobile, modales
├── style.css         # Styles CSS3, design moderne, animations 3D, responsive
├── app.js            # Moteur applicatif, audio hybride, logique Quiz/Cas/Possessifs
├── data.js           # Base de données : vocabulaire, 144 défis de cas, possessifs, guides
├── sw.js             # Service Worker PWA pour la mise en cache et le mode hors-ligne
├── manifest.json     # Manifest PWA pour l'installation sur écran d'accueil
└── icons/            # Icônes de l'application (192px, 512px, Apple touch icon)
```

---

## 💡 Astuce de prononciation sur iPhone

Pour profiter de la meilleure qualité audio possible sur votre iPhone :
1. Rendez-vous dans **Réglages** ➔ **Accessibilité** ➔ **Contenu énoncé** ➔ **Voix** ➔ **Polonais**.
2. Téléchargez gratuitement la voix **Zosia (Premium)** ou **Zosia (Améliorée)**.
3. L'application détectera automatiquement la voix Premium pour une prononciation naturelle.
4. *Pensez à désactiver le mode silencieux (bouton Action / commutateur latéral) pour autoriser le son web.*

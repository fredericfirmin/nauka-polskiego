/**
 * Base de données complète pour l'apprentissage du polonais.
 * - Vocabulaire initial + notes de cours de la prof
 * - Nombres de 0 à 10
 * - Jours de la semaine
 * - Saisons
 * - Mois de l'année
 * - Distracteurs cohérents pour le QCM
 * - Gestion des genres (m/f/n) pour les adjectifs
 */


const LATEST_IMPORT_DATE = "2026-11-17";
if (typeof window !== "undefined") {
  window.LATEST_IMPORT_DATE = LATEST_IMPORT_DATE;
}
const INITIAL_CARDS = [
  // ==========================================
  // 1. PHRASES & QUOTIDIEN
  // ==========================================
  {
    id: "phr-1",
    date: "2026-10-19",
    pl: "Ile jest stopni?",
    fr: "Combien de degrés fait-il ?",
    category: "Phrases & Quotidien",
    acceptedPl: ["Ile jest stopni"],
    acceptedFr: ["Combien de degrés fait-il", "Combien de degres fait-il"],
    distractorsPl: ["Która jest godzina?", "Jaka jest pogoda?", "Ile to kosztuje?"],
    distractorsFr: ["Quelle heure est-il ?", "Quel temps fait-il ?", "Combien ça coûte ?"]
  },
  {
    id: "phr-2",
    date: "2026-10-19",
    pl: "Jest 16 stopni.",
    fr: "Il fait 16 degrés.",
    category: "Phrases & Quotidien",
    acceptedPl: ["Jest 16 stopni"],
    acceptedFr: ["Il fait 16 degrés", "Il fait 16 degres"],
    distractorsPl: ["Jest godzina 16:00.", "Jest 25 stopni.", "Jest za zimno."],
    distractorsFr: ["Il est 16 heures.", "Il fait 25 degrés.", "Il fait trop froid."]
  },
  {
    id: "phr-3",
    date: "2026-10-19",
    pl: "Nie wiem.",
    fr: "Je ne sais pas.",
    category: "Phrases & Quotidien",
    acceptedPl: ["Nie wiem"],
    acceptedFr: ["Je ne sais pas"],
    distractorsPl: ["Nie pamiętam.", "Nie rozumiem.", "Nie ma za co."],
    distractorsFr: ["Je ne me souviens pas.", "Je ne comprends pas.", "De rien."]
  },
  {
    id: "phr-4",
    date: "2026-10-19",
    pl: "Nie znam.",
    fr: "Je ne connais pas.",
    category: "Phrases & Quotidien",
    acceptedPl: ["Nie znam"],
    acceptedFr: ["Je ne connais pas"],
    distractorsPl: ["Nie mam.", "Nie lubię.", "Nie chcę."],
    distractorsFr: ["Je n'ai pas.", "Je n'aime pas.", "Je ne veux pas."]
  },
  {
    id: "phr-5",
    date: "2026-10-19",
    pl: "Mój ulubiony zespół to U2.",
    fr: "Mon groupe préféré est U2.",
    category: "Phrases & Quotidien",
    acceptedPl: ["Mój ulubiony zespół to U2"],
    acceptedFr: ["Mon groupe préféré est U2", "Mon groupe prefere est U2"],
    distractorsPl: ["Mój ulubiony film to U2.", "Moja ulubiona piosenka to U2.", "Mój brat gra w zespole U2."],
    distractorsFr: ["Mon film préféré est U2.", "Ma chanson préférée est U2.", "Mon frère joue dans le groupe U2."]
  },
  {
    id: "phr-6",
    date: "2026-10-19",
    pl: "Chciałbym zupę i herbatę, proszę.",
    fr: "Je voudrais une soupe et un thé, s'il vous plaît.",
    category: "Phrases & Quotidien",
    genderNotes: "Locuteur masc. : Chciałbym | Locutrice fém. : Chciałabym",
    acceptedPl: [
      "Chciałbym zupę i herbatę, proszę",
      "Chciałabym zupę i herbatę, proszę"
    ],
    acceptedFr: [
      "Je voudrais une soupe et un thé, s'il vous plaît",
      "Je voudrais une soupe et un the, s'il vous plait"
    ],
    distractorsPl: ["Poproszę kawę i wodę.", "Chciałbym rachunek, proszę.", "Chciałbym ciasto i kawę, proszę."],
    distractorsFr: ["Un café et de l'eau, s'il vous plaît.", "Je voudrais l'addition, s'il vous plaît.", "Je voudrais un gâteau et un café, s'il vous plaît."]
  },
  {
    id: "phr-7",
    date: "2026-10-19",
    pl: "Chcę wysłać list do Francji.",
    fr: "Je veux envoyer une lettre en France.",
    category: "Phrases & Quotidien",
    acceptedPl: ["Chcę wysłać list do Francji"],
    acceptedFr: ["Je veux envoyer une lettre en France"],
    distractorsPl: ["Chcę kupić bilet do Francji.", "Chcę zadzwonić do Francji.", "Chcę wysłać paczkę do Polski."],
    distractorsFr: ["Je veux acheter un billet pour la France.", "Je veux téléphoner en France.", "Je veux envoyer un colis en Pologne."]
  },
  {
    id: "phr-8",
    date: "2026-10-19",
    pl: "perfekcyjnie!",
    fr: "Parfait !",
    category: "Phrases & Quotidien",
    acceptedPl: ["perfekcyjnie"],
    acceptedFr: ["Parfait"],
    distractorsPl: ["świetnie!", "niestety!", "być może!"],
    distractorsFr: ["Génial !", "Malheureusement !", "Peut-être !"]
  },
  {
    id: "phr-9",
    date: "2026-10-19",
    pl: "Mam syna.",
    fr: "J'ai un fils.",
    category: "Phrases & Quotidien",
    acceptedPl: ["Mam syna"],
    acceptedFr: ["J'ai un fils", "J ai un fils"],
    distractorsPl: ["Mam brata.", "Mam córkę.", "Mam psa."],
    distractorsFr: ["J'ai un frère.", "J'ai une fille.", "J'ai un chien."]
  },
  {
    id: "phr-10",
    date: "2026-10-19",
    pl: "Mieszkam niedaleko Nicei.",
    fr: "J'habite près de Nice.",
    category: "Phrases & Quotidien",
    acceptedPl: ["Mieszkam niedaleko Nicei"],
    acceptedFr: ["J'habite près de Nice", "J habite pres de Nice"],
    distractorsPl: ["Mieszkam w Paryżu.", "Mieszkam w Poznaniu.", "Mieszkam w centrum."],
    distractorsFr: ["J'habite à Paris.", "J'habite à Poznań.", "J'habite en centre-ville."]
  },
  {
    id: "phr-11",
    date: "2026-10-19",
    pl: "Gdzie mieszkasz?",
    fr: "Où habites-tu ?",
    category: "Phrases & Quotidien",
    acceptedPl: ["Gdzie mieszkasz"],
    acceptedFr: ["Où habites-tu", "Tu habites où", "Ou habites-tu"],
    distractorsPl: ["Dokąd idziesz?", "Skąd jesteś?", "Co robisz?"],
    distractorsFr: ["Où vas-tu ?", "D'où viens-tu ?", "Que fais-tu ?"]
  },
  {
    id: "phr-12",
    date: "2026-10-19",
    pl: "Moje hobby to język polski.",
    fr: "Mon hobby est la langue polonaise.",
    category: "Phrases & Quotidien",
    acceptedPl: ["Moje hobby to język polski"],
    acceptedFr: ["Mon hobby est la langue polonaise", "Mon passe-temps est la langue polonaise"],
    distractorsPl: ["Mój ulubiony sport to tenis.", "Moje hobby to muzyka.", "Lubię czytać książki."],
    distractorsFr: ["Mon sport préféré est le tennis.", "Mon hobby est la musique.", "J'aime lire des livres."]
  },
  {
    id: "phr-13",
    date: "2026-10-19",
    pl: "Dziś jest zimno.",
    fr: "Il fait froid aujourd'hui.",
    category: "Phrases & Quotidien",
    acceptedPl: ["Dziś jest zimno", "Dzisiaj jest zimno"],
    acceptedFr: ["Il fait froid aujourd'hui", "Aujourd'hui il fait froid"],
    distractorsPl: ["Dziś jest ciepło.", "Dziś pada deszcz.", "Dziś jest słonecznie."],
    distractorsFr: ["Il fait chaud aujourd'hui.", "Il pleut aujourd'hui.", "Il fait ensoleillé aujourd'hui."]
  },
  {
    id: "phr-14",
    date: "2026-10-19",
    pl: "Mam 49 lat.",
    fr: "J'ai 49 ans.",
    category: "Phrases & Quotidien",
    acceptedPl: ["Mam 49 lat", "Mam czterdzieści dziewięć lat"],
    acceptedFr: ["J'ai 49 ans", "J ai 49 ans"],
    distractorsPl: ["Mam 31 lat.", "Mam 20 lat.", "Mam 50 lat."],
    distractorsFr: ["J'ai 31 ans.", "J'ai 20 ans.", "J'ai 50 ans."]
  },
  {
    id: "phr-15",
    date: "2026-10-19",
    pl: "To mój brat.",
    fr: "C'est mon frère.",
    category: "Phrases & Quotidien",
    acceptedPl: ["To mój brat"],
    acceptedFr: ["C'est mon frère", "C est mon frere"],
    distractorsPl: ["To mój syn.", "To mój ojciec.", "To moja siostra."],
    distractorsFr: ["C'est mon fils.", "C'est mon père.", "C'est ma sœur."]
  },
  {
    id: "phr-16",
    date: "2026-10-19",
    pl: "Jaka jest pogoda?",
    fr: "Quel temps fait-il ?",
    category: "Phrases & Quotidien",
    acceptedPl: ["Jaka jest pogoda"],
    acceptedFr: ["Quel temps fait-il"],
    distractorsPl: ["Ile jest stopni?", "Która jest godzina?", "Jaki jest dzień?"],
    distractorsFr: ["Combien de degrés fait-il ?", "Quelle heure est-il ?", "Quel jour sommes-nous ?"]
  },
  {
    id: "phr-17",
    date: "2026-10-19",
    pl: "Pogoda jest świetna.",
    fr: "Le temps est superbe.",
    category: "Phrases & Quotidien",
    acceptedPl: ["Pogoda jest świetna"],
    acceptedFr: ["Le temps est superbe", "Il fait un temps superbe"],
    distractorsPl: ["Pogoda jest okropna.", "Pada deszcz.", "Jest bardzo zimno."],
    distractorsFr: ["Le temps est affreux.", "Il pleut.", "Il fait très froid."]
  },
  {
    id: "phr-18",
    date: "2026-10-19",
    pl: "ponieważ",
    fr: "parce que",
    category: "Phrases & Quotidien",
    acceptedPl: ["ponieważ", "bo"],
    acceptedFr: ["parce que", "car"],
    distractorsPl: ["dlatego", "chociaż", "więc"],
    distractorsFr: ["c'est pourquoi", "bien que", "donc"]
  },
  {
    id: "phr-19",
    date: "2026-10-19",
    pl: "tylko",
    fr: "seulement",
    category: "Phrases & Quotidien",
    acceptedPl: ["tylko"],
    acceptedFr: ["seulement", "uniquement"],
    distractorsPl: ["zawsze", "nigdy", "często"],
    distractorsFr: ["toujours", "jamais", "souvent"]
  },

  // ==========================================
  // 2. OBJETS DU QUOTIDIEN
  // ==========================================
  {
    id: "obj-1",
    date: "2026-10-19",
    pl: "jabłko",
    fr: "pomme",
    category: "Objets du quotidien",
    acceptedPl: ["jabłko"],
    acceptedFr: ["pomme", "la pomme", "une pomme"],
    distractorsPl: ["marchewka", "chleb", "banan"],
    distractorsFr: ["carotte", "pain", "banane"]
  },
  {
    id: "obj-2",
    date: "2026-10-19",
    pl: "zeszyt",
    fr: "cahier",
    category: "Objets du quotidien",
    acceptedPl: ["zeszyt"],
    acceptedFr: ["cahier", "le cahier", "un cahier"],
    distractorsPl: ["książka", "długopis", "laptop"],
    distractorsFr: ["livre", "stylo", "ordinateur portable"]
  },
  {
    id: "obj-3",
    date: "2026-10-19",
    pl: "laptop",
    fr: "ordinateur portable",
    category: "Objets du quotidien",
    acceptedPl: ["laptop"],
    acceptedFr: ["ordinateur portable", "laptop"],
    distractorsPl: ["ładowarka", "zeszyt", "książka"],
    distractorsFr: ["chargeur", "cahier", "livre"]
  },
  {
    id: "obj-4",
    date: "2026-10-19",
    pl: "butelka",
    fr: "bouteille",
    category: "Objets du quotidien",
    acceptedPl: ["butelka"],
    acceptedFr: ["bouteille", "la bouteille", "une bouteille"],
    distractorsPl: ["kubek", "szklanka", "talerz"],
    distractorsFr: ["tasse", "verre", "assiette"]
  },
  {
    id: "obj-5",
    date: "2026-10-19",
    pl: "długopis",
    fr: "stylo",
    category: "Objets du quotidien",
    acceptedPl: ["długopis"],
    acceptedFr: ["stylo", "le stylo", "un stylo"],
    distractorsPl: ["ołówek", "zeszyt", "książka"],
    distractorsFr: ["crayon", "cahier", "livre"]
  },
  {
    id: "obj-6",
    date: "2026-10-19",
    pl: "książka",
    fr: "livre",
    category: "Objets du quotidien",
    acceptedPl: ["książka"],
    acceptedFr: ["livre", "le livre", "un livre"],
    distractorsPl: ["zeszyt", "gazeta", "długopis"],
    distractorsFr: ["cahier", "journal", "stylo"]
  },
  {
    id: "obj-7",
    date: "2026-10-19",
    pl: "chleb",
    fr: "pain",
    category: "Objets du quotidien",
    acceptedPl: ["chleb"],
    acceptedFr: ["pain", "le pain", "du pain"],
    distractorsPl: ["bułka", "ciasto", "jabłko"],
    distractorsFr: ["petit pain", "gâteau", "pomme"]
  },
  {
    id: "obj-8",
    date: "2026-10-19",
    pl: "marchewka",
    fr: "carotte",
    category: "Objets du quotidien",
    acceptedPl: ["marchewka"],
    acceptedFr: ["carotte", "la carotte", "une carotte"],
    distractorsPl: ["jabłko", "pomidor", "ziemniak"],
    distractorsFr: ["pomme", "tomate", "pomme de terre"]
  },
  {
    id: "obj-9",
    date: "2026-10-19",
    pl: "kwiat",
    fr: "fleur",
    category: "Objets du quotidien",
    acceptedPl: ["kwiat"],
    acceptedFr: ["fleur", "la fleur", "une fleur"],
    distractorsPl: ["drzewo", "trawa", "liść"],
    distractorsFr: ["arbre", "herbe", "feuille"]
  },
  {
    id: "obj-10",
    date: "2026-10-19",
    pl: "krzesło",
    fr: "chaise",
    category: "Objets du quotidien",
    acceptedPl: ["krzesło"],
    acceptedFr: ["chaise", "la chaise", "une chaise"],
    distractorsPl: ["stół", "fotel", "łóżko"],
    distractorsFr: ["table", "fauteuil", "lit"]
  },
  {
    id: "obj-11",
    date: "2026-10-19",
    pl: "ładowarka",
    fr: "chargeur",
    category: "Objets du quotidien",
    acceptedPl: ["ładowarka"],
    acceptedFr: ["chargeur", "le chargeur", "un chargeur"],
    distractorsPl: ["laptop", "bateria", "telefon"],
    distractorsFr: ["ordinateur portable", "pile / batterie", "téléphone"]
  },
  {
    id: "obj-12",
    date: "2026-10-19",
    pl: "kubek",
    fr: "tasse / mug",
    category: "Objets du quotidien",
    acceptedPl: ["kubek"],
    acceptedFr: ["tasse", "mug", "tasse / mug", "une tasse"],
    distractorsPl: ["butelka", "talerz", "miska"],
    distractorsFr: ["bouteille", "assiette", "bol"]
  },

  // ==========================================
  // 3. NOMBRES DE 0 À 10
  // ==========================================
  {
    id: "num-0",
    date: "2026-10-16",
    pl: "zero",
    fr: "zéro (0)",
    category: "Nombres",
    acceptedPl: ["zero"],
    acceptedFr: ["zéro", "zero", "0"],
    distractorsPl: ["jeden", "dwa", "dziesięć"],
    distractorsFr: ["un", "deux", "dix"]
  },
  {
    id: "num-1",
    date: "2026-10-16",
    pl: "jeden",
    fr: "un (1)",
    category: "Nombres",
    acceptedPl: ["jeden"],
    acceptedFr: ["un", "1"],
    distractorsPl: ["dwa", "trzy", "zero"],
    distractorsFr: ["deux", "trois", "zéro"]
  },
  {
    id: "num-2",
    date: "2026-10-16",
    pl: "dwa",
    fr: "deux (2)",
    category: "Nombres",
    acceptedPl: ["dwa"],
    acceptedFr: ["deux", "2"],
    distractorsPl: ["jeden", "trzy", "cztery"],
    distractorsFr: ["un", "trois", "quatre"]
  },
  {
    id: "num-3",
    date: "2026-10-16",
    pl: "trzy",
    fr: "trois (3)",
    category: "Nombres",
    acceptedPl: ["trzy"],
    acceptedFr: ["trois", "3"],
    distractorsPl: ["dwa", "cztery", "pięć"],
    distractorsFr: ["deux", "quatre", "cinq"]
  },
  {
    id: "num-4",
    date: "2026-10-16",
    pl: "cztery",
    fr: "quatre (4)",
    category: "Nombres",
    acceptedPl: ["cztery"],
    acceptedFr: ["quatre", "4"],
    distractorsPl: ["trzy", "pięć", "sześć"],
    distractorsFr: ["trois", "cinq", "six"]
  },
  {
    id: "num-5",
    date: "2026-10-16",
    pl: "pięć",
    fr: "cinq (5)",
    category: "Nombres",
    acceptedPl: ["pięć"],
    acceptedFr: ["cinq", "5"],
    distractorsPl: ["cztery", "sześć", "siedem"],
    distractorsFr: ["quatre", "six", "sept"]
  },
  {
    id: "num-6",
    date: "2026-10-16",
    pl: "sześć",
    fr: "six (6)",
    category: "Nombres",
    acceptedPl: ["sześć"],
    acceptedFr: ["six", "6"],
    distractorsPl: ["pięć", "siedem", "osiem"],
    distractorsFr: ["cinq", "sept", "huit"]
  },
  {
    id: "num-7",
    date: "2026-10-16",
    pl: "siedem",
    fr: "sept (7)",
    category: "Nombres",
    acceptedPl: ["siedem"],
    acceptedFr: ["sept", "7"],
    distractorsPl: ["sześć", "osiem", "dziewięć"],
    distractorsFr: ["six", "huit", "neuf"]
  },
  {
    id: "num-8",
    date: "2026-10-16",
    pl: "osiem",
    fr: "huit (8)",
    category: "Nombres",
    acceptedPl: ["osiem"],
    acceptedFr: ["huit", "8"],
    distractorsPl: ["siedem", "dziewięć", "dziesięć"],
    distractorsFr: ["sept", "neuf", "dix"]
  },
  {
    id: "num-9",
    date: "2026-10-16",
    pl: "dziewięć",
    fr: "neuf (9)",
    category: "Nombres",
    acceptedPl: ["dziewięć"],
    acceptedFr: ["neuf", "9"],
    distractorsPl: ["osiem", "dziesięć", "siedem"],
    distractorsFr: ["huit", "dix", "sept"]
  },
  {
    id: "num-10",
    date: "2026-10-16",
    pl: "dziesięć",
    fr: "dix (10)",
    category: "Nombres",
    acceptedPl: ["dziesięć"],
    acceptedFr: ["dix", "10"],
    distractorsPl: ["dziewięć", "osiem", "jedenaście"],
    distractorsFr: ["neuf", "huit", "onze"]
  },

  // ==========================================
  // 4. JOURS DE LA SEMAINE
  // ==========================================
  {
    id: "day-1",
    date: "2026-10-16",
    pl: "poniedziałek",
    fr: "lundi",
    category: "Jours de la semaine",
    acceptedPl: ["poniedziałek"],
    acceptedFr: ["lundi"],
    distractorsPl: ["wtorek", "środa", "piątek"],
    distractorsFr: ["mardi", "mercredi", "vendredi"]
  },
  {
    id: "day-2",
    date: "2026-10-16",
    pl: "wtorek",
    fr: "mardi",
    category: "Jours de la semaine",
    acceptedPl: ["wtorek"],
    acceptedFr: ["mardi"],
    distractorsPl: ["poniedziałek", "środa", "czwartek"],
    distractorsFr: ["lundi", "mercredi", "jeudi"]
  },
  {
    id: "day-3",
    date: "2026-10-16",
    pl: "środa",
    fr: "mercredi",
    category: "Jours de la semaine",
    acceptedPl: ["środa"],
    acceptedFr: ["mercredi"],
    distractorsPl: ["wtorek", "czwartek", "piątek"],
    distractorsFr: ["mardi", "jeudi", "vendredi"]
  },
  {
    id: "day-4",
    date: "2026-10-16",
    pl: "czwartek",
    fr: "jeudi",
    category: "Jours de la semaine",
    acceptedPl: ["czwartek"],
    acceptedFr: ["jeudi"],
    distractorsPl: ["środa", "piątek", "sobota"],
    distractorsFr: ["mercredi", "vendredi", "samedi"]
  },
  {
    id: "day-5",
    date: "2026-10-16",
    pl: "piątek",
    fr: "vendredi",
    category: "Jours de la semaine",
    acceptedPl: ["piątek"],
    acceptedFr: ["vendredi"],
    distractorsPl: ["czwartek", "sobota", "niedziela"],
    distractorsFr: ["jeudi", "samedi", "dimanche"]
  },
  {
    id: "day-6",
    date: "2026-10-16",
    pl: "sobota",
    fr: "samedi",
    category: "Jours de la semaine",
    acceptedPl: ["sobota"],
    acceptedFr: ["samedi"],
    distractorsPl: ["piątek", "niedziela", "czwartek"],
    distractorsFr: ["vendredi", "dimanche", "jeudi"]
  },
  {
    id: "day-7",
    date: "2026-10-16",
    pl: "niedziela",
    fr: "dimanche",
    category: "Jours de la semaine",
    acceptedPl: ["niedziela"],
    acceptedFr: ["dimanche"],
    distractorsPl: ["sobota", "poniedziałek", "piątek"],
    distractorsFr: ["samedi", "lundi", "vendredi"]
  },
  {
    id: "day-8",
    date: "2026-10-16",
    pl: "weekend",
    fr: "week-end",
    category: "Jours de la semaine",
    acceptedPl: ["weekend"],
    acceptedFr: ["week-end", "weekend"],
    distractorsPl: ["tydzień", "miesiąc", "sobota"],
    distractorsFr: ["semaine", "mois", "samedi"]
  },

  // ==========================================
  // 5. SAISONS DE L'ANNÉE
  // ==========================================
  {
    id: "seas-1",
    date: "2026-10-16",
    pl: "wiosna",
    fr: "printemps",
    category: "Saisons",
    acceptedPl: ["wiosna"],
    acceptedFr: ["printemps", "le printemps"],
    distractorsPl: ["lato", "jesień", "zima"],
    distractorsFr: ["été", "automne", "hiver"]
  },
  {
    id: "seas-2",
    date: "2026-10-16",
    pl: "lato",
    fr: "été",
    category: "Saisons",
    acceptedPl: ["lato"],
    acceptedFr: ["été", "ete", "l'été"],
    distractorsPl: ["wiosna", "jesień", "zima"],
    distractorsFr: ["printemps", "automne", "hiver"]
  },
  {
    id: "seas-3",
    date: "2026-10-16",
    pl: "jesień",
    fr: "automne",
    category: "Saisons",
    acceptedPl: ["jesień"],
    acceptedFr: ["automne", "l'automne"],
    distractorsPl: ["zima", "wiosna", "lato"],
    distractorsFr: ["hiver", "printemps", "été"]
  },
  {
    id: "seas-4",
    date: "2026-10-16",
    pl: "zima",
    fr: "hiver",
    category: "Saisons",
    acceptedPl: ["zima"],
    acceptedFr: ["hiver", "l'hiver"],
    distractorsPl: ["jesień", "wiosna", "lato"],
    distractorsFr: ["automne", "printemps", "été"]
  },

  // ==========================================
  // 6. LES 12 MOIS DE L'ANNÉE
  // ==========================================
  {
    id: "month-1",
    date: "2026-10-16",
    pl: "styczeń",
    fr: "janvier",
    category: "Mois de l'année",
    acceptedPl: ["styczeń"],
    acceptedFr: ["janvier"],
    distractorsPl: ["luty", "marzec", "grudzień"],
    distractorsFr: ["février", "mars", "décembre"]
  },
  {
    id: "month-2",
    date: "2026-10-16",
    pl: "luty",
    fr: "février",
    category: "Mois de l'année",
    acceptedPl: ["luty"],
    acceptedFr: ["février", "fevrier"],
    distractorsPl: ["styczeń", "marzec", "kwiecień"],
    distractorsFr: ["janvier", "mars", "avril"]
  },
  {
    id: "month-3",
    date: "2026-10-16",
    pl: "marzec",
    fr: "mars",
    category: "Mois de l'année",
    acceptedPl: ["marzec"],
    acceptedFr: ["mars"],
    distractorsPl: ["luty", "kwiecień", "maj"],
    distractorsFr: ["février", "avril", "mai"]
  },
  {
    id: "month-4",
    date: "2026-10-16",
    pl: "kwiecień",
    fr: "avril",
    category: "Mois de l'année",
    acceptedPl: ["kwiecień"],
    acceptedFr: ["avril"],
    distractorsPl: ["marzec", "maj", "czerwiec"],
    distractorsFr: ["mars", "mai", "juin"]
  },
  {
    id: "month-5",
    date: "2026-10-16",
    pl: "maj",
    fr: "mai",
    category: "Mois de l'année",
    acceptedPl: ["maj"],
    acceptedFr: ["mai"],
    distractorsPl: ["kwiecień", "czerwiec", "lipiec"],
    distractorsFr: ["avril", "juin", "juillet"]
  },
  {
    id: "month-6",
    date: "2026-10-16",
    pl: "czerwiec",
    fr: "juin",
    category: "Mois de l'année",
    acceptedPl: ["czerwiec"],
    acceptedFr: ["juin"],
    distractorsPl: ["maj", "lipiec", "sierpień"],
    distractorsFr: ["mai", "juillet", "août"]
  },
  {
    id: "month-7",
    date: "2026-10-16",
    pl: "lipiec",
    fr: "juillet",
    category: "Mois de l'année",
    acceptedPl: ["lipiec"],
    acceptedFr: ["juillet"],
    distractorsPl: ["czerwiec", "sierpień", "wrzesień"],
    distractorsFr: ["juin", "août", "septembre"]
  },
  {
    id: "month-8",
    date: "2026-10-16",
    pl: "sierpień",
    fr: "août",
    category: "Mois de l'année",
    acceptedPl: ["sierpień"],
    acceptedFr: ["août", "aout"],
    distractorsPl: ["lipiec", "wrzesień", "październik"],
    distractorsFr: ["juillet", "septembre", "octobre"]
  },
  {
    id: "month-9",
    date: "2026-10-16",
    pl: "wrzesień",
    fr: "septembre",
    category: "Mois de l'année",
    acceptedPl: ["wrzesień"],
    acceptedFr: ["septembre"],
    distractorsPl: ["sierpień", "październik", "listopad"],
    distractorsFr: ["août", "octobre", "novembre"]
  },
  {
    id: "month-10",
    date: "2026-10-16",
    pl: "październik",
    fr: "octobre",
    category: "Mois de l'année",
    acceptedPl: ["październik"],
    acceptedFr: ["octobre"],
    distractorsPl: ["wrzesień", "listopad", "grudzień"],
    distractorsFr: ["septembre", "novembre", "décembre"]
  },
  {
    id: "month-11",
    date: "2026-10-16",
    pl: "listopad",
    fr: "novembre",
    category: "Mois de l'année",
    acceptedPl: ["listopad"],
    acceptedFr: ["novembre"],
    distractorsPl: ["październik", "grudzień", "styczeń"],
    distractorsFr: ["octobre", "décembre", "janvier"]
  },
  {
    id: "month-12",
    date: "2026-10-16",
    pl: "grudzień",
    fr: "décembre",
    category: "Mois de l'année",
    acceptedPl: ["grudzień"],
    acceptedFr: ["décembre", "decembre"],
    distractorsPl: ["listopad", "styczeń", "luty"],
    distractorsFr: ["novembre", "janvier", "février"]
  },

  // ==========================================
  // 7. COULEURS (KOLORY)
  // ==========================================
  {
    id: "col-1",
    date: "2026-10-19",
    pl: "czerwony",
    fr: "rouge",
    category: "Couleurs",
    genderNotes: "m: czerwony | f: czerwona | n: czerwone",
    acceptedPl: ["czerwony", "czerwona", "czerwone"],
    acceptedFr: ["rouge"],
    distractorsPl: ["niebieski", "zielony", "żółty"],
    distractorsFr: ["bleu", "vert", "jaune"]
  },
  {
    id: "col-2",
    date: "2026-10-19",
    pl: "niebieski",
    fr: "bleu",
    category: "Couleurs",
    genderNotes: "m: niebieski | f: niebieska | n: niebieskie",
    acceptedPl: ["niebieski", "niebieska", "niebieskie"],
    acceptedFr: ["bleu", "bleue"],
    distractorsPl: ["czerwony", "fioletowy", "czarny"],
    distractorsFr: ["rouge", "violet", "noir"]
  },
  {
    id: "col-3",
    date: "2026-10-19",
    pl: "zielony",
    fr: "vert",
    category: "Couleurs",
    genderNotes: "m: zielony | f: zielona | n: zielone",
    acceptedPl: ["zielony", "zielona", "zielone"],
    acceptedFr: ["vert", "verte"],
    distractorsPl: ["żółty", "szary", "brązowy"],
    distractorsFr: ["jaune", "gris", "marron"]
  },
  {
    id: "col-4",
    date: "2026-10-19",
    pl: "żółty",
    fr: "jaune",
    category: "Couleurs",
    genderNotes: "m: żółty | f: żółta | n: żółte",
    acceptedPl: ["żółty", "żółta", "żółte"],
    acceptedFr: ["jaune"],
    distractorsPl: ["pomarańczowy", "biały", "zielony"],
    distractorsFr: ["orange", "blanc", "vert"]
  },
  {
    id: "col-5",
    date: "2026-10-19",
    pl: "czarny",
    fr: "noir",
    category: "Couleurs",
    genderNotes: "m: czarny | f: czarna | n: czarne",
    acceptedPl: ["czarny", "czarna", "czarne"],
    acceptedFr: ["noir", "noire"],
    distractorsPl: ["biały", "szary", "brązowy"],
    distractorsFr: ["blanc", "gris", "marron"]
  },
  {
    id: "col-6",
    date: "2026-10-19",
    pl: "biały",
    fr: "blanc",
    category: "Couleurs",
    genderNotes: "m: biały | f: biała | n: białe",
    acceptedPl: ["biały", "biała", "białe"],
    acceptedFr: ["blanc", "blanche"],
    distractorsPl: ["czarny", "szary", "różowy"],
    distractorsFr: ["noir", "gris", "rose"]
  },
  {
    id: "col-7",
    date: "2026-10-19",
    pl: "szary",
    fr: "gris",
    category: "Couleurs",
    genderNotes: "m: szary | f: szara | n: szare",
    acceptedPl: ["szary", "szara", "szare"],
    acceptedFr: ["gris", "grise"],
    distractorsPl: ["czarny", "brązowy", "biały"],
    distractorsFr: ["noir", "marron", "blanc"]
  },
  {
    id: "col-8",
    date: "2026-10-19",
    pl: "brązowy",
    fr: "marron",
    category: "Couleurs",
    genderNotes: "m: brązowy | f: brązowa | n: brązowe",
    acceptedPl: ["brązowy", "brązowa", "brązowe"],
    acceptedFr: ["marron"],
    distractorsPl: ["czarny", "szary", "pomarańczowy"],
    distractorsFr: ["noir", "gris", "orange"]
  },
  {
    id: "col-9",
    date: "2026-10-19",
    pl: "różowy",
    fr: "rose",
    category: "Couleurs",
    genderNotes: "m: różowy | f: różowa | n: różowe",
    acceptedPl: ["różowy", "różowa", "różowe"],
    acceptedFr: ["rose"],
    distractorsPl: ["fioletowy", "czerwony", "pomarańczowy"],
    distractorsFr: ["violet", "rouge", "orange"]
  },
  {
    id: "col-10",
    date: "2026-10-19",
    pl: "pomarańczowy",
    fr: "orange",
    category: "Couleurs",
    genderNotes: "m: pomarańczowy | f: pomarańczowa | n: pomarańczowe",
    acceptedPl: ["pomarańczowy", "pomarańczowa", "pomarańczowe"],
    acceptedFr: ["orange"],
    distractorsPl: ["żółty", "czerwony", "brązowy"],
    distractorsFr: ["jaune", "rouge", "marron"]
  },
  {
    id: "col-11",
    date: "2026-10-19",
    pl: "fioletowy",
    fr: "violet",
    category: "Couleurs",
    genderNotes: "m: fioletowy | f: fioletowa | n: fioletowe",
    acceptedPl: ["fioletowy", "fioletowa", "fioletowe"],
    acceptedFr: ["violet", "violette"],
    distractorsPl: ["różowy", "niebieski", "czarny"],
    distractorsFr: ["rose", "bleu", "noir"]
  },
  {
    id: "col-12",
    date: "2026-10-19",
    pl: "beżowy",
    fr: "beige",
    category: "Couleurs",
    genderNotes: "m: beżowy | f: beżowa | n: beżowe",
    acceptedPl: ["beżowy", "beżowa", "beżowe"],
    acceptedFr: ["beige"],
    distractorsPl: ["szary", "brązowy", "biały"],
    distractorsFr: ["gris", "marron", "blanc"]
  },

  // ==========================================
  // 8. ADJECTIFS (PRZYMIOTNIKI)
  // ==========================================
  {
    id: "adj-1",
    date: "2026-10-19",
    pl: "nowy",
    fr: "nouveau",
    category: "Adjectifs",
    genderNotes: "m: nowy | f: nowa | n: nowe",
    acceptedPl: ["nowy", "nowa", "nowe"],
    acceptedFr: ["nouveau", "nouvelle"],
    distractorsPl: ["stary", "nowoczesny", "młody"],
    distractorsFr: ["vieux", "moderne", "jeune"]
  },
  {
    id: "adj-2",
    date: "2026-10-19",
    pl: "stary",
    fr: "vieux",
    category: "Adjectifs",
    genderNotes: "m: stary | f: stara | n: stare",
    acceptedPl: ["stary", "stara", "stare"],
    acceptedFr: ["vieux", "vieille"],
    distractorsPl: ["nowy", "młody", "ładny"],
    distractorsFr: ["nouveau", "jeune", "joli"]
  },
  {
    id: "adj-3",
    date: "2026-10-19",
    pl: "nowoczesny",
    fr: "moderne",
    category: "Adjectifs",
    genderNotes: "m: nowoczesny | f: nowoczesna | n: nowoczesne",
    acceptedPl: ["nowoczesny", "nowoczesna", "nowoczesne"],
    acceptedFr: ["moderne"],
    distractorsPl: ["stary", "wygodny", "drogi"],
    distractorsFr: ["vieux", "confortable", "cher"]
  },
  {
    id: "adj-4",
    date: "2026-10-19",
    pl: "ładny",
    fr: "joli",
    category: "Adjectifs",
    genderNotes: "m: ładny | f: ładna | n: ładne",
    acceptedPl: ["ładny", "ładna", "ładne"],
    acceptedFr: ["joli", "jolie"],
    distractorsPl: ["brzydki", "duży", "drogi"],
    distractorsFr: ["laid", "grand", "cher"]
  },
  {
    id: "adj-5",
    date: "2026-10-19",
    pl: "piękny",
    fr: "beau / magnifique",
    category: "Adjectifs",
    genderNotes: "m: piękny | f: piękna | n: piękne",
    acceptedPl: ["piękny", "piękna", "piękne"],
    acceptedFr: ["beau", "belle", "magnifique"],
    distractorsPl: ["brzydki", "stary", "mały"],
    distractorsFr: ["laid", "vieux", "petit"]
  },
  {
    id: "adj-6",
    date: "2026-10-19",
    pl: "duży",
    fr: "grand",
    category: "Adjectifs",
    genderNotes: "m: duży | f: duża | n: duże",
    acceptedPl: ["duży", "duża", "duże"],
    acceptedFr: ["grand", "grande"],
    distractorsPl: ["mały", "długi", "ciężki"],
    distractorsFr: ["petit", "long", "lourd"]
  },
  {
    id: "adj-7",
    date: "2026-10-19",
    pl: "mały",
    fr: "petit",
    category: "Adjectifs",
    genderNotes: "m: mały | f: mała | n: małe",
    acceptedPl: ["mały", "mała", "małe"],
    acceptedFr: ["petit", "petite"],
    distractorsPl: ["duży", "krótki", "lekki"],
    distractorsFr: ["grand", "court", "léger"]
  },
  {
    id: "adj-8",
    date: "2026-10-19",
    pl: "długi",
    fr: "long",
    category: "Adjectifs",
    genderNotes: "m: długi | f: długa | n: długie",
    acceptedPl: ["długi", "długa", "długie"],
    acceptedFr: ["long", "longue"],
    distractorsPl: ["krótki", "duży", "szeroki"],
    distractorsFr: ["court", "grand", "large"]
  },
  {
    id: "adj-9",
    date: "2026-10-19",
    pl: "krótki",
    fr: "court",
    category: "Adjectifs",
    genderNotes: "m: krótki | f: krótka | n: krótkie",
    acceptedPl: ["krótki", "krótka", "krótkie"],
    acceptedFr: ["court", "courte"],
    distractorsPl: ["długi", "mały", "wąski"],
    distractorsFr: ["long", "petit", "étroit"]
  },
  {
    id: "adj-10",
    date: "2026-10-19",
    pl: "drogi",
    fr: "cher",
    category: "Adjectifs",
    genderNotes: "m: drogi | f: droga | n: drogie",
    acceptedPl: ["drogi", "droga", "drogie"],
    acceptedFr: ["cher", "chère"],
    distractorsPl: ["tani", "dobry", "cenny"],
    distractorsFr: ["bon marché", "bon", "précieux"]
  },
  {
    id: "adj-11",
    date: "2026-10-19",
    pl: "dobry",
    fr: "bon",
    category: "Adjectifs",
    genderNotes: "m: dobry | f: dobra | n: dobre",
    acceptedPl: ["dobry", "dobra", "dobre"],
    acceptedFr: ["bon", "bonne"],
    distractorsPl: ["zły", "smaczny", "prosty"],
    distractorsFr: ["mauvais", "savoureux", "simple"]
  },
  {
    id: "adj-12",
    date: "2026-10-19",
    pl: "zły",
    fr: "mauvais",
    category: "Adjectifs",
    genderNotes: "m: zły | f: zła | n: złe",
    acceptedPl: ["zły", "zła", "złe", "źle", "zly", "zla", "zle"],
    acceptedFr: ["mauvais", "mauvaise"],
    distractorsPl: ["dobry", "brudny", "trudny"],
    distractorsFr: ["bon", "sale", "difficile"]
  },
  {
    id: "adj-13",
    date: "2026-10-19",
    pl: "przydatny",
    fr: "utile",
    category: "Adjectifs",
    genderNotes: "m: przydatny | f: przydatna | n: przydatne",
    acceptedPl: ["przydatny", "przydatna", "przydatne"],
    acceptedFr: ["utile"],
    distractorsPl: ["nieprzydatny", "łatwy", "wygodny"],
    distractorsFr: ["inutile", "facile", "confortable"]
  },
  {
    id: "adj-14",
    date: "2026-10-19",
    pl: "nieprzydatny",
    fr: "inutile",
    category: "Adjectifs",
    genderNotes: "m: nieprzydatny | f: nieprzydatna | n: nieprzydatne",
    acceptedPl: ["nieprzydatny", "nieprzydatna", "nieprzydatne"],
    acceptedFr: ["inutile"],
    distractorsPl: ["przydatny", "zły", "trudny"],
    distractorsFr: ["utile", "mauvais", "difficile"]
  },
  {
    id: "adj-15",
    date: "2026-10-19",
    pl: "interesujący",
    fr: "intéressant",
    category: "Adjectifs",
    genderNotes: "m: interesujący | f: interesująca | n: interesujące",
    acceptedPl: ["interesujący", "interesująca", "interesujące"],
    acceptedFr: ["intéressant", "intéressante", "interessant", "interessante"],
    distractorsPl: ["nudny", "ważny", "prosty"],
    distractorsFr: ["ennuyeux", "important", "simple"]
  },
  {
    id: "adj-16",
    date: "2026-10-19",
    pl: "łatwy",
    fr: "facile",
    category: "Adjectifs",
    genderNotes: "m: łatwy | f: łatwa | n: łatwe",
    acceptedPl: ["łatwy", "łatwa", "łatwe"],
    acceptedFr: ["facile"],
    distractorsPl: ["trudny", "szybki", "lekki"],
    distractorsFr: ["difficile", "rapide", "léger"]
  },
  {
    id: "adj-17",
    date: "2026-10-19",
    pl: "trudny",
    fr: "difficile",
    category: "Adjectifs",
    genderNotes: "m: trudny | f: trudna | n: trudne",
    acceptedPl: ["trudny", "trudna", "trudne"],
    acceptedFr: ["difficile"],
    distractorsPl: ["łatwy", "ciężki", "skomplikowany"],
    distractorsFr: ["facile", "lourd", "compliqué"]
  },
  {
    id: "adj-18",
    date: "2026-10-19",
    pl: "czysty",
    fr: "propre",
    category: "Adjectifs",
    genderNotes: "m: czysty | f: czysta | n: czyste",
    acceptedPl: ["czysty", "czysta", "czyste"],
    acceptedFr: ["propre"],
    distractorsPl: ["brudny", "świeży", "jasny"],
    distractorsFr: ["sale", "frais", "clair"]
  },
  {
    id: "adj-19",
    date: "2026-10-19",
    pl: "brudny",
    fr: "sale",
    category: "Adjectifs",
    genderNotes: "m: brudny | f: brudna | n: brudne",
    acceptedPl: ["brudny", "brudna", "brudne"],
    acceptedFr: ["sale"],
    distractorsPl: ["czysty", "ciemny", "stary"],
    distractorsFr: ["propre", "sombre", "vieux"]
  },
  {
    id: "adj-20",
    date: "2026-10-19",
    pl: "wygodny",
    fr: "confortable",
    category: "Adjectifs",
    genderNotes: "m: wygodny | f: wygodna | n: wygodne",
    acceptedPl: ["wygodny", "wygodna", "wygodne"],
    acceptedFr: ["confortable"],
    distractorsPl: ["niewygodny", "miękki", "przytulny"],
    distractorsFr: ["inconfortable", "mou", "chaleureux"]
  },
  {
    id: "adj-21",
    date: "2026-10-19",
    pl: "ciepły",
    fr: "chaud",
    category: "Adjectifs",
    genderNotes: "m: ciepły | f: ciepła | n: ciepłe",
    acceptedPl: ["ciepły", "ciepła", "ciepłe"],
    acceptedFr: ["chaud", "chaude"],
    distractorsPl: ["zimny", "gorący", "chłodny"],
    distractorsFr: ["froid", "brûlant", "frais"]
  },
  {
    id: "adj-22",
    date: "2026-10-19",
    pl: "zimny",
    fr: "froid",
    category: "Adjectifs",
    genderNotes: "m: zimny | f: zimna | n: zimne",
    acceptedPl: ["zimny", "zimna", "zimne"],
    acceptedFr: ["froid", "froide"],
    distractorsPl: ["ciepły", "mroźny", "chłodny"],
    distractorsFr: ["chaud", "glacial", "frais"]
  },
  {
    id: "adj-23",
    date: "2026-10-19",
    pl: "szybki",
    fr: "rapide",
    category: "Adjectifs",
    genderNotes: "m: szybki | f: szybka | n: szybkie",
    acceptedPl: ["szybki", "szybka", "szybkie"],
    acceptedFr: ["rapide"],
    distractorsPl: ["wolny", "głośny", "dynamiczny"],
    distractorsFr: ["lent", "bruyant", "dynamique"]
  },
  {
    id: "adj-24",
    date: "2026-10-19",
    pl: "wolny",
    fr: "lent",
    category: "Adjectifs",
    genderNotes: "m: wolny | f: wolna | n: wolne",
    acceptedPl: ["wolny", "wolna", "wolne"],
    acceptedFr: ["lent", "lente"],
    distractorsPl: ["szybki", "spokojny", "leniwy"],
    distractorsFr: ["rapide", "calme", "paresseux"]
  },
  {
    id: "adj-25",
    date: "2026-10-19",
    pl: "lekki",
    fr: "léger",
    category: "Adjectifs",
    genderNotes: "m: lekki | f: lekka | n: lekkie",
    acceptedPl: ["lekki", "lekka", "lekkie"],
    acceptedFr: ["léger", "légère", "leger", "legere"],
    distractorsPl: ["ciężki", "mały", "cienki"],
    distractorsFr: ["lourd", "petit", "fin"]
  },
  {
    id: "adj-26",
    date: "2026-10-19",
    pl: "ciężki",
    fr: "lourd",
    category: "Adjectifs",
    genderNotes: "m: ciężki | f: ciężka | n: ciężkie",
    acceptedPl: ["ciężki", "ciężka", "ciężkie"],
    acceptedFr: ["lourd", "lourde"],
    distractorsPl: ["lekki", "trudny", "duży"],
    distractorsFr: ["léger", "difficile", "grand"]
  },
  {
    id: "adj-27",
    date: "2026-10-19",
    pl: "świeży",
    fr: "frais",
    category: "Adjectifs",
    genderNotes: "m: świeży | f: świeża | n: świeże",
    acceptedPl: ["świeży", "świeża", "świeże"],
    acceptedFr: ["frais", "fraîche", "fraiche"],
    distractorsPl: ["stary", "brudny", "ciepły"],
    distractorsFr: ["vieux", "sale", "chaud"]
  },

  // ==========================================
  // 9. VOYAGE & AÉROPORT (NA LOTNISKU)
  // ==========================================
  {
    id: "voy-1",
    date: "2026-10-21",
    pl: "karta pokładowa",
    fr: "carte d'embarquement",
    category: "Voyage & Aéroport",
    acceptedPl: ["karta pokładowa"],
    acceptedFr: ["carte d'embarquement", "carte d embarquement"],
    distractorsPl: ["karta kredytowa", "bilet lotniczy", "paszport"],
    distractorsFr: ["carte de crédit", "billet d'avion", "passeport"]
  },
  {
    id: "voy-2",
    date: "2026-10-21",
    pl: "lecieć",
    fr: "voler (en avion)",
    category: "Voyage & Aéroport",
    acceptedPl: ["lecieć"],
    acceptedFr: ["voler", "voler en avion"],
    distractorsPl: ["jechać", "płynąć", "biegać"],
    distractorsFr: ["rouler / aller en voiture", "naviguer", "courir"]
  },
  {
    id: "voy-3",
    date: "2026-10-21",
    pl: "bramka",
    fr: "gate / porte",
    category: "Voyage & Aéroport",
    acceptedPl: ["bramka"],
    acceptedFr: ["gate", "porte", "gate / porte", "porte d'embarquement"],
    distractorsPl: ["stacja", "peron", "poczekalnia"],
    distractorsFr: ["gare", "quai", "salle d'attente"]
  },
  {
    id: "voy-4",
    date: "2026-10-21",
    pl: "Dokąd pani jedzie?",
    fr: "Vers où volez-vous ? (à une femme)",
    category: "Voyage & Aéroport",
    genderNotes: "Adressé à une femme : pani | Adressé à un homme : pan",
    acceptedPl: [
      "Dokąd pani jedzie",
      "Dokąd pan jedzie"
    ],
    acceptedFr: [
      "Vers où volez-vous",
      "Vers ou volez-vous",
      "Où voyagez-vous",
      "Vers où allez-vous"
    ],
    distractorsPl: ["Skąd pani wraca?", "Kiedy pani odjeżdża?", "Gdzie pani mieszka?"],
    distractorsFr: ["D'où revenez-vous ?", "Quand partez-vous ?", "Où habitez-vous ?"]
  },
  {
    id: "voy-5",
    date: "2026-10-21",
    pl: "plecak",
    fr: "sac a dos",
    category: "Voyage & Aéroport",
    acceptedPl: ["plecak"],
    acceptedFr: ["sac à dos", "sac a dos"],
    distractorsPl: ["walizka", "torba", "bagaż"],
    distractorsFr: ["valise", "sac à main", "bagage"]
  },
  {
    id: "voy-6",
    date: "2026-10-21",
    pl: "Poproszę paszport.",
    fr: "Le passeport, s'il vous plaît.",
    category: "Voyage & Aéroport",
    acceptedPl: ["Poproszę paszport"],
    acceptedFr: ["Le passeport, s'il vous plaît", "Le passeport s'il vous plait", "Passeport s'il vous plaît"],
    distractorsPl: ["Poproszę bilet.", "Poproszę kartę.", "Poproszę bagaż."],
    distractorsFr: ["Le billet, s'il vous plaît.", "La carte, s'il vous plaît.", "Le bagage, s'il vous plaît."]
  },
  {
    id: "voy-7",
    date: "2026-10-21",
    pl: "walizka",
    fr: "valise",
    category: "Voyage & Aéroport",
    acceptedPl: ["walizka"],
    acceptedFr: ["valise", "la valise", "une valise"],
    distractorsPl: ["plecak", "torba", "bagaż"],
    distractorsFr: ["sac à dos", "sac à main", "bagage"]
  },
  {
    id: "voy-8",
    date: "2026-10-21",
    pl: "bagaż",
    fr: "bagage",
    category: "Voyage & Aéroport",
    acceptedPl: ["bagaż"],
    acceptedFr: ["bagage", "le bagage"],
    distractorsPl: ["walizka", "plecak", "bilet"],
    distractorsFr: ["valise", "sac à dos", "billet"]
  },
  {
    id: "voy-9",
    date: "2026-10-21",
    pl: "Lecę do Paryża.",
    fr: "Je prends l'avion pour Paris.",
    category: "Voyage & Aéroport",
    acceptedPl: ["Lecę do Paryża"],
    acceptedFr: ["Je prends l'avion pour Paris", "Je vole pour Paris", "Je vole vers Paris"],
    distractorsPl: ["Jadę do Paryża.", "Lecę do Londynu.", "Wracam z Paryża."],
    distractorsFr: ["Je vais à Paris en voiture.", "Je vole pour Londres.", "Je reviens de Paris."]
  },
  {
    id: "voy-10",
    date: "2026-10-21",
    pl: "Proszę położyć walizkę tutaj.",
    fr: "Veuillez poser la valise ici.",
    category: "Voyage & Aéroport",
    acceptedPl: ["Proszę położyć walizkę tutaj"],
    acceptedFr: ["Veuillez poser la valise ici", "Posez la valise ici"],
    distractorsPl: ["Proszę otworzyć walizkę.", "Proszę zważyć walizkę.", "Proszę wziąć walizkę."],
    distractorsFr: ["Veuillez ouvrir la valise.", "Veuillez peser la valise.", "Veuillez prendre la valise."]
  },
  {
    id: "voy-11",
    date: "2026-10-21",
    pl: "Miłego lotu!",
    fr: "Bon vol !",
    category: "Voyage & Aéroport",
    acceptedPl: ["Miłego lotu"],
    acceptedFr: ["Bon vol", "Bon voyage"],
    distractorsPl: ["Dobrej nocy!", "Miłego dnia!", "Do widzenia!"],
    distractorsFr: ["Bonne nuit !", "Bonne journée !", "Au revoir !"]
  },

  // ==========================================
  // 10. NOURRITURE, CAFÉ & RESTAURANT
  // ==========================================
  {
    id: "food-1",
    date: "2026-10-21",
    pl: "bez mleka",
    fr: "sans lait",
    category: "Nourriture & Café",
    acceptedPl: ["bez mleka"],
    acceptedFr: ["sans lait"],
    distractorsPl: ["z mlekiem", "bez cukru", "ze śmietanką"],
    distractorsFr: ["avec du lait", "sans sucre", "avec de la crème"]
  },
  {
    id: "food-2",
    date: "2026-10-21",
    pl: "mocna",
    fr: "forte",
    category: "Nourriture & Café",
    genderNotes: "m: mocny | f: mocna | n: mocne",
    acceptedPl: ["mocna", "mocny", "mocne"],
    acceptedFr: ["forte", "fort"],
    distractorsPl: ["słaba", "słodka", "gorąca"],
    distractorsFr: ["légère / faible", "sucrée", "chaude"]
  },
  {
    id: "food-3",
    date: "2026-10-21",
    pl: "bez cukru",
    fr: "sans sucre",
    category: "Nourriture & Café",
    acceptedPl: ["bez cukru"],
    acceptedFr: ["sans sucre"],
    distractorsPl: ["z cukrem", "bez mleka", "ze słodzikiem"],
    distractorsFr: ["avec du sucre", "sans lait", "avec de l'édulcorant"]
  },
  {
    id: "food-4",
    date: "2026-10-21",
    pl: "coś",
    fr: "qqch",
    category: "Nourriture & Café",
    acceptedPl: ["coś"],
    acceptedFr: ["qqch", "quelque chose"],
    distractorsPl: ["nic", "ktoś", "wszystko"],
    distractorsFr: ["rien", "quelqu'un", "tout"]
  },
  {
    id: "food-5",
    date: "2026-10-21",
    pl: "ciastko",
    fr: "petit-gateau, biscuit",
    category: "Nourriture & Café",
    acceptedPl: ["ciastko"],
    acceptedFr: ["petit-gateau", "petit-gâteau", "biscuit", "petit gateau", "petit gâteau"],
    distractorsPl: ["ciasto", "cukierek", "chleb"],
    distractorsFr: ["gâteau", "bonbon", "pain"]
  },
  {
    id: "food-6",
    date: "2026-10-21",
    pl: "ciasto",
    fr: "gateau",
    category: "Nourriture & Café",
    acceptedPl: ["ciasto"],
    acceptedFr: ["gateau", "gâteau"],
    distractorsPl: ["ciastko", "chleb", "bułka"],
    distractorsFr: ["petit-gâteau", "pain", "petit pain"]
  },
  {
    id: "food-7",
    date: "2026-10-21",
    pl: "jabłecznik",
    fr: "tarte aux pommes",
    category: "Nourriture & Café",
    acceptedPl: ["jabłecznik"],
    acceptedFr: ["tarte aux pommes"],
    distractorsPl: ["sernik", "makowiec", "piernik"],
    distractorsFr: ["gâteau au fromage blanc", "gâteau au pavot", "pain d'épices"]
  },
  {
    id: "food-8",
    date: "2026-10-21",
    pl: "płacić",
    fr: "payer",
    category: "Nourriture & Café",
    acceptedPl: ["płacić"],
    acceptedFr: ["payer"],
    distractorsPl: ["kupować", "sprzedawać", "zamawiać"],
    distractorsFr: ["acheter", "vendre", "commander"]
  },
  {
    id: "food-9",
    date: "2026-10-21",
    pl: "czekoladowy",
    fr: "au chocolat",
    category: "Nourriture & Café",
    genderNotes: "m: czekoladowy | f: czekoladowa | n: czekoladowe",
    acceptedPl: ["czekoladowy", "czekoladowa", "czekoladowe"],
    acceptedFr: ["au chocolat"],
    distractorsPl: ["waniliowy", "truskawkowy", "karmelowy"],
    distractorsFr: ["à la vanille", "à la fraise", "au caramel"]
  },
  {
    id: "food-10",
    date: "2026-10-21",
    pl: "ciasto czekoladowe",
    fr: "gâteau au chocolat",
    category: "Nourriture & Café",
    acceptedPl: ["ciasto czekoladowe"],
    acceptedFr: ["gâteau au chocolat", "gateau au chocolat"],
    distractorsPl: ["lody czekoladowe", "ciasto truskawkowe", "mleko czekoladowe"],
    distractorsFr: ["glace au chocolat", "gâteau aux fraises", "lait chocolaté"]
  },
  {
    id: "food-11",
    date: "2026-10-21",
    pl: "dla pana za darmo",
    fr: "pour vous (à un homme) gratuit",
    category: "Nourriture & Café",
    genderNotes: "Homme : dla pana | Femme : dla pani",
    acceptedPl: [
      "dla pana za darmo",
      "dla pani za darmo"
    ],
    acceptedFr: [
      "pour vous (à un homme) gratuit",
      "pour vous gratuit",
      "gratuit pour vous",
      "c'est gratuit pour vous"
    ],
    distractorsPl: ["dla pana z rabatem", "dla pani ze zniżką", "rachunek dla pana"],
    distractorsFr: ["pour vous avec réduction", "pour vous avec remise", "l'addition pour vous"]
  },
  {
    id: "food-12",
    date: "2026-10-21",
    pl: "za darmo",
    fr: "gratuit",
    category: "Nourriture & Café",
    acceptedPl: ["za darmo"],
    acceptedFr: ["gratuit"],
    distractorsPl: ["drogo", "płatne", "tanio"],
    distractorsFr: ["cher", "payant", "bon marché"]
  },
  {
    id: "food-13",
    date: "2026-10-21",
    pl: "Poproszę kawę.",
    fr: "Un café, s'il vous plaît.",
    category: "Nourriture & Café",
    acceptedPl: ["Poproszę kawę"],
    acceptedFr: ["Un café, s'il vous plaît", "Un cafe s'il vous plait", "Un café"],
    distractorsPl: ["Poproszę herbatę.", "Poproszę wodę.", "Poproszę sok."],
    distractorsFr: ["Un thé, s'il vous plaît.", "De l'eau, s'il vous plaît.", "Un jus, s'il vous plaît."]
  },
  {
    id: "food-14",
    date: "2026-10-21",
    pl: "Co podać?",
    fr: "Que puis-je vous servir ?",
    category: "Nourriture & Café",
    acceptedPl: ["Co podać"],
    acceptedFr: ["Que puis-je vous servir", "Que désirez-vous", "Que voulez-vous"],
    distractorsPl: ["Ile płacę?", "Co pani zamawia?", "Czy ma pani rezerwację?"],
    distractorsFr: ["Combien je dois ?", "Que commandez-vous ?", "Avez-vous une réservation ?"]
  },
  {
    id: "food-15",
    date: "2026-10-21",
    pl: "z mlekiem",
    fr: "avec du lait",
    category: "Nourriture & Café",
    acceptedPl: ["z mlekiem"],
    acceptedFr: ["avec du lait", "avec lait"],
    distractorsPl: ["bez mleka", "z cukrem", "ze śmietanką"],
    distractorsFr: ["sans lait", "avec du sucre", "avec de la crème"]
  },
  {
    id: "food-16",
    date: "2026-10-21",
    pl: "z cukrem",
    fr: "avec du sucre",
    category: "Nourriture & Café",
    acceptedPl: ["z cukrem"],
    acceptedFr: ["avec du sucre", "avec sucre"],
    distractorsPl: ["bez cukru", "z mlekiem", "ze słodzikiem"],
    distractorsFr: ["sans sucre", "avec du lait", "avec de l'édulcorant"]
  },
  {
    id: "food-17",
    date: "2026-10-21",
    pl: "Czy chce pani coś do jedzenia?",
    fr: "Désirez-vous quelque chose à manger ?",
    category: "Nourriture & Café",
    acceptedPl: ["Czy chce pani coś do jedzenia", "Czy chce pan coś do jedzenia"],
    acceptedFr: ["Désirez-vous quelque chose à manger", "Voulez-vous quelque chose à manger"],
    distractorsPl: ["Czy chce pani coś do picia?", "Co pani zamawia?", "Ile to kosztuje?"],
    distractorsFr: ["Désirez-vous quelque chose à boire ?", "Que commandez-vous ?", "Combien ça coûte ?"]
  },
  {
    id: "food-18",
    date: "2026-10-21",
    pl: "jedzenie",
    fr: "la nourriture",
    category: "Nourriture & Café",
    acceptedPl: ["jedzenie"],
    acceptedFr: ["la nourriture", "nourriture", "repas"],
    distractorsPl: ["picie", "gotowanie", "rachunek"],
    distractorsFr: ["la boisson", "la cuisine", "l'addition"]
  },
  {
    id: "food-19",
    date: "2026-10-21",
    pl: "Ile płacę?",
    fr: "Combien je vous dois ?",
    category: "Nourriture & Café",
    acceptedPl: ["Ile płacę"],
    acceptedFr: ["Combien je vous dois", "Combien je paie", "Combien ça fait"],
    distractorsPl: ["Ile to kosztuje?", "Czy można płacić kartą?", "Poproszę rachunek."],
    distractorsFr: ["Combien ça coûte ?", "Peut-on payer par carte ?", "L'addition s'il vous plaît."]
  },
  {
    id: "food-20",
    date: "2026-10-21",
    pl: "Smacznego!",
    fr: "Bon appétit !",
    category: "Nourriture & Café",
    acceptedPl: ["Smacznego"],
    acceptedFr: ["Bon appétit", "Bon appetit"],
    distractorsPl: ["Na zdrowie!", "Dziękuję!", "Miłego dnia!"],
    distractorsFr: ["Santé !", "Merci !", "Bonne journée !"]
  },
  {
    id: "food-21",
    date: "2026-10-21",
    pl: "Czy ma pani rezerwację?",
    fr: "Avez-vous une réservation ?",
    category: "Nourriture & Café",
    genderNotes: "À une femme : pani | À un homme : pan",
    acceptedPl: ["Czy ma pani rezerwację", "Czy ma pan rezerwację"],
    acceptedFr: ["Avez-vous une réservation", "Avez vous une reservation"],
    distractorsPl: ["Stolik dla ilu osób?", "Co pani zamawia?", "Czy stolik jest wolny?"],
    distractorsFr: ["Une table pour combien de personnes ?", "Que commandez-vous ?", "La table est-elle libre ?"]
  },
  {
    id: "food-22",
    date: "2026-10-21",
    pl: "Stolik dla ilu osób?",
    fr: "Une table pour combien de personnes ?",
    category: "Nourriture & Café",
    acceptedPl: ["Stolik dla ilu osób"],
    acceptedFr: ["Une table pour combien de personnes", "Table pour combien de personnes"],
    distractorsPl: ["Czy ma pani rezerwację?", "Gdzie jest toaleta?", "Czy mają państwo menu?"],
    distractorsFr: ["Avez-vous une réservation ?", "Où sont les toilettes ?", "Avez-vous le menu ?"]
  },
  {
    id: "food-23",
    date: "2026-10-21",
    pl: "Co pani zamawia?",
    fr: "Que commandez-vous ?",
    category: "Nourriture & Café",
    genderNotes: "À une femme : pani | À un homme : pan",
    acceptedPl: ["Co pani zamawia", "Co pan zamawia"],
    acceptedFr: ["Que commandez-vous", "Qu'est-ce que vous commandez"],
    distractorsPl: ["Co podać?", "Czy ma pani rezerwację?", "Ile płacę?"],
    distractorsFr: ["Que puis-je vous servir ?", "Avez-vous une réservation ?", "Combien je dois ?"]
  },
  {
    id: "food-24",
    date: "2026-10-21",
    pl: "Czy coś jeszcze?",
    fr: "Autre chose ?",
    category: "Nourriture & Café",
    acceptedPl: ["Czy coś jeszcze"],
    acceptedFr: ["Autre chose", "Quelque chose d'autre", "Autre chose ?"],
    distractorsPl: ["Czy to wszystko?", "Ile to kosztuje?", "Co podać?"],
    distractorsFr: ["C'est tout ?", "Combien ça coûte ?", "Que puis-je vous servir ?"]
  },
  {
    id: "food-25",
    date: "2026-10-21",
    pl: "kurczak",
    fr: "poulet",
    category: "Nourriture & Café",
    acceptedPl: ["kurczak"],
    acceptedFr: ["poulet", "le poulet", "du poulet"],
    distractorsPl: ["ryba", "wołowina", "wieprzowina"],
    distractorsFr: ["poisson", "bœuf", "porc"]
  },

  // ==========================================
  // 11. LA POSTE (NA POCZCIE)
  // ==========================================
  {
    id: "post-1",
    date: "2026-10-16",
    pl: "W czym mogę pomóc?",
    fr: "En quoi puis-je vous aider ?",
    category: "La Poste",
    acceptedPl: ["W czym mogę pomóc"],
    acceptedFr: ["En quoi puis-je vous aider", "Comment puis-je vous aider", "Puis-je vous aider"],
    distractorsPl: ["Co mogę zrobić?", "Gdzie mogę pomóc?", "Dokąd pani idzie?"],
    distractorsFr: ["Que puis-je faire ?", "Où puis-je aider ?", "Où allez-vous ?"]
  },
  {
    id: "post-2",
    date: "2026-10-16",
    pl: "znaczek",
    fr: "timbre",
    category: "La Poste",
    acceptedPl: ["znaczek"],
    acceptedFr: ["timbre", "le timbre", "un timbre"],
    distractorsPl: ["list", "koperta", "paczka"],
    distractorsFr: ["lettre", "enveloppe", "colis"]
  },
  {
    id: "post-3",
    date: "2026-10-16",
    pl: "Ile to kosztuje?",
    fr: "Combien ça coûte ?",
    category: "La Poste",
    acceptedPl: ["Ile to kosztuje"],
    acceptedFr: ["Combien ça coûte", "Combien ca coute"],
    distractorsPl: ["Ile płacę?", "Ile jest stopni?", "Która jest godzina?"],
    distractorsFr: ["Combien je dois ?", "Combien de degrés fait-il ?", "Quelle heure est-il ?"]
  },
  {
    id: "post-4",
    date: "2026-10-16",
    pl: "paczka",
    fr: "colis",
    category: "La Poste",
    acceptedPl: ["paczka"],
    acceptedFr: ["colis", "le colis", "un colis"],
    distractorsPl: ["list", "znaczek", "pocztówka"],
    distractorsFr: ["lettre", "timbre", "carte postale"]
  },
  {
    id: "post-5",
    date: "2026-10-16",
    pl: "pocztówka",
    fr: "carte postale",
    category: "La Poste",
    acceptedPl: ["pocztówka"],
    acceptedFr: ["carte postale", "la carte postale", "une carte postale"],
    distractorsPl: ["list", "znaczek", "paczka"],
    distractorsFr: ["lettre", "timbre", "colis"]
  },

  // ==========================================
  // COURS DU 21.10 - NOUVELLES PHRASES & DIALOGUES
  // ==========================================
  {
    id: "phr-21-1",
    date: "2026-10-21",
    pl: "Skąd jesteś?",
    fr: "D'où viens-tu ?",
    category: "Phrases & Quotidien",
    acceptedPl: ["Skąd jesteś", "Skad jestes"],
    acceptedFr: ["D'où viens-tu", "D ou viens-tu", "Tu viens d'où", "Tu viens d ou"],
    distractorsPl: ["Gdzie mieszkasz?", "Dokąd jedziesz?", "Kim jesteś?"],
    distractorsFr: ["Où habites-tu ?", "Où vas-tu ?", "Qui es-tu ?"]
  },
  {
    id: "phr-21-2",
    date: "2026-10-21",
    pl: "Jestem z Francji.",
    fr: "Je viens de France.",
    category: "Phrases & Quotidien",
    acceptedPl: ["Jestem z Francji"],
    acceptedFr: ["Je viens de France", "Je suis de France"],
    distractorsPl: ["Mieszkam w Polsce.", "Jadę do Francji.", "Znam Francję."],
    distractorsFr: ["J'habite en Pologne.", "Je vais en France.", "Je connais la France."]
  },
  {
    id: "phr-21-3",
    date: "2026-10-21",
    pl: "Plecak jest czarny i mały.",
    fr: "Le sac à dos est noir et petit.",
    category: "Phrases & Quotidien",
    acceptedPl: ["Plecak jest czarny i mały", "Plecak jest czarny i maly"],
    acceptedFr: ["Le sac à dos est noir et petit", "Le sac a dos est noir et petit"],
    distractorsPl: ["Walizka jest czarna i duża.", "Plecak jest czerwony i nowy.", "Torba jest brązowa i lekka."],
    distractorsFr: ["La valise est noire et grande.", "Le sac à dos est rouge et neuf.", "Le sac est marron et léger."]
  },
  {
    id: "phr-21-4",
    date: "2026-10-21",
    pl: "Jabłko jest czerwone i świeże.",
    fr: "La pomme est rouge et fraîche.",
    category: "Phrases & Quotidien",
    acceptedPl: ["Jabłko jest czerwone i świeże", "Jablko jest czerwone i swieze"],
    acceptedFr: ["La pomme est rouge et fraîche", "La pomme est rouge et fraiche"],
    distractorsPl: ["Jabłko jest zielone i stare.", "Ciasto jest słodkie i ciepłe.", "Chleb jest świeży i dobry."],
    distractorsFr: ["La pomme est verte et vieille.", "Le gâteau est sucré et chaud.", "Le pain est frais et bon."]
  },
  {
    id: "phr-21-5",
    date: "2026-10-21",
    pl: "Jest szesnaście stopni we Francji.",
    fr: "Il fait 16 degrés en France.",
    category: "Phrases & Quotidien",
    acceptedPl: ["Jest szesnaście stopni we Francji", "Jest 16 stopni we Francji", "Jest szesnascie stopni we Francji"],
    acceptedFr: ["Il fait 16 degrés en France", "Il fait seize degrés en France", "Il fait 16 degres en France"],
    distractorsPl: ["W Polsce jest siedem stopni.", "Dziś jest zimno we Francji.", "Jest dwadzieścia stopni we Francji."],
    distractorsFr: ["En Pologne il fait sept degrés.", "Aujourd'hui il fait froid en France.", "Il fait vingt degrés en France."]
  },
  {
    id: "phr-21-6",
    date: "2026-10-21",
    pl: "Kawa jest ciepła i bez cukru.",
    fr: "Le café est chaud et sans sucre.",
    category: "Phrases & Quotidien",
    acceptedPl: ["Kawa jest ciepła i bez cukru", "Kawa jest ciepla i bez cukru"],
    acceptedFr: ["Le café est chaud et sans sucre", "Le cafe est chaud et sans sucre"],
    distractorsPl: ["Kawa jest zimna i z mlekiem.", "Herbata jest gorąca i z cukrem.", "Kawa jest mocna i bez mleka."],
    distractorsFr: ["Le café est froid et avec du lait.", "Le thé est chaud et avec du sucre.", "Le café est fort et sans lait."]
  },
  {
    id: "phr-21-7",
    date: "2026-10-21",
    pl: "Krzesło jest stare, ale wygodne.",
    fr: "La chaise est vieille, mais confortable.",
    category: "Phrases & Quotidien",
    acceptedPl: ["Krzesło jest stare, ale wygodne", "Krzeslo jest stare, ale wygodne", "Krzesło jest stare ale wygodne"],
    acceptedFr: ["La chaise est vieille, mais confortable", "La chaise est vieille mais confortable"],
    distractorsPl: ["Stół jest nowy, ale mały.", "Krzesło jest nowoczesne i ładne.", "Łóżko jest duże, ale twarde."],
    distractorsFr: ["La table est neuve, mais petite.", "La chaise est moderne et jolie.", "Le lit est grand, mais dur."]
  },
  {
    id: "phr-21-8",
    date: "2026-10-21",
    pl: "Ciasto czekoladowe jest smaczne i tanie.",
    fr: "Le gâteau au chocolat est bon et pas cher.",
    category: "Phrases & Quotidien",
    acceptedPl: ["Ciasto czekoladowe jest smaczne i tanie"],
    acceptedFr: ["Le gâteau au chocolat est bon et pas cher", "Le gateau au chocolat est bon et pas cher", "Le gâteau au chocolat est délicieux et bon marché"],
    distractorsPl: ["Kawa jest smaczna i tania.", "Ciastko jest słodkie i drogie.", "Jabłecznik jest ciepły i tani."],
    distractorsFr: ["Le café est bon et pas cher.", "Le biscuit est sucré et cher.", "La tarte aux pommes est chaude et pas chère."]
  },
  {
    id: "phr-21-9",
    date: "2026-10-21",
    pl: "Kelnerka nosi niebieską i żółtą sukienkę.",
    fr: "La serveuse porte une robe bleue et jaune.",
    category: "Phrases & Quotidien",
    acceptedPl: ["Kelnerka nosi niebieską i żółtą sukienkę", "Kelnerka nosi niebieska i zolta sukienke"],
    acceptedFr: ["La serveuse porte une robe bleue et jaune"],
    distractorsPl: ["Kelner nosi czarne spodnie.", "Dziewczyna nosi czerwoną sukienkę.", "Kobieta ma niebieską torbę."],
    distractorsFr: ["Le serveur porte un pantalon noir.", "La fille porte une robe rouge.", "La femme a un sac bleu."]
  },
  {
    id: "phr-21-10",
    date: "2026-10-21",
    pl: "Chciałbym dwa bilety do Nowego Jorku, proszę.",
    fr: "Je voudrais deux billets pour New York, s'il vous plaît.",
    category: "Phrases & Quotidien",
    genderNotes: "Locuteur masc. : Chciałbym | Locutrice fém. : Chciałabym",
    acceptedPl: [
      "Chciałbym dwa bilety do Nowego Jorku, proszę",
      "Chciałabym dwa bilety do Nowego Jorku, proszę",
      "Chcialbym dwa bilety do Nowego Jorku, prosze"
    ],
    acceptedFr: [
      "Je voudrais deux billets pour New York, s'il vous plaît",
      "Je voudrais deux billets pour New York, s il vous plait"
    ],
    distractorsPl: ["Poproszę jeden bilet do Paryża.", "Chciałbym kupić bilet do Francji.", "Poproszę dwa bilety normalne."],
    distractorsFr: ["Un billet pour Paris, s'il vous plaît.", "Je voudrais acheter un billet pour la France.", "Deux billets plein tarif, s'il vous plaît."]
  },

  // ==========================================
  // COURS DU 21.10 - VOCABULAIRE GÉNÉRAL
  // ==========================================
  {
    id: "voc-21-1",
    date: "2026-10-16",
    pl: "powtórzyć",
    fr: "répéter",
    category: "Phrases & Quotidien",
    acceptedPl: ["powtórzyć", "powtorzyc"],
    acceptedFr: ["répéter", "repeter"],
    distractorsPl: ["powiedzieć", "napisać", "zrozumieć"],
    distractorsFr: ["dire", "écrire", "comprendre"]
  },
  {
    id: "voc-21-2",
    date: "2026-10-16",
    pl: "sukienka",
    fr: "robe",
    category: "Objets du quotidien",
    acceptedPl: ["sukienka"],
    acceptedFr: ["robe", "la robe", "une robe"],
    distractorsPl: ["spódnica", "koszula", "kurtka"],
    distractorsFr: ["jupe", "chemise", "veste"]
  },
  {
    id: "voc-21-3",
    date: "2026-10-16",
    pl: "kelnerka",
    fr: "serveuse",
    category: "Nourriture & Café",
    acceptedPl: ["kelnerka"],
    acceptedFr: ["serveuse", "la serveuse", "une serveuse"],
    distractorsPl: ["kelner", "kierowca", "nauczycielka"],
    distractorsFr: ["serveur", "chauffeur", "enseignante"]
  },
  {
    id: "voc-21-4",
    date: "2026-10-16",
    pl: "tani",
    fr: "pas cher, bon marché",
    category: "Adjectifs",
    genderNotes: "m: tani | f: tania | n: tanie",
    acceptedPl: ["tani", "tania", "tanie"],
    acceptedFr: ["pas cher", "bon marché", "bon marche", "pas chère", "pas chere"],
    distractorsPl: ["drogi", "dobry", "cenny"],
    distractorsFr: ["cher", "bon", "précieux"]
  },
  {
    id: "voc-21-5",
    date: "2026-10-16",
    pl: "dokąd",
    fr: "vers où (direction)",
    category: "Phrases & Quotidien",
    acceptedPl: ["dokąd", "dokad"],
    acceptedFr: ["vers où", "où", "ou", "vers ou"],
    distractorsPl: ["skąd", "gdzie", "kiedy"],
    distractorsFr: ["d'où", "où (statique)", "quand"]
  },
  {
    id: "voc-21-6",
    date: "2026-10-16",
    pl: "skąd",
    fr: "d'où",
    category: "Phrases & Quotidien",
    acceptedPl: ["skąd", "skad"],
    acceptedFr: ["d'où", "d ou"],
    distractorsPl: ["dokąd", "gdzie", "dlaczego"],
    distractorsFr: ["vers où", "où", "pourquoi"]
  },
  {
    id: "voc-21-7",
    date: "2026-10-16",
    pl: "dużo",
    fr: "beaucoup",
    category: "Phrases & Quotidien",
    acceptedPl: ["dużo", "duzo"],
    acceptedFr: ["beaucoup"],
    distractorsPl: ["mało", "bardzo", "trochę"],
    distractorsFr: ["peu", "très", "un peu"]
  },
  {
    id: "voc-21-8",
    date: "2026-10-16",
    pl: "niezależność",
    fr: "indépendance",
    category: "Phrases & Quotidien",
    acceptedPl: ["niezależność", "niezaleznosc"],
    acceptedFr: ["indépendance", "independance", "l'indépendance"],
    distractorsPl: ["wolność", "spokój", "pomoc"],
    distractorsFr: ["liberté", "calme", "aide"]
  },

  // ==========================================
  // COURS DU 21.10 - EN TAXI & EN VILLE
  // ==========================================
  {
    id: "taxi-1",
    date: "2026-10-21",
    pl: "taksówka",
    fr: "taxi",
    category: "Voyage & Aéroport",
    acceptedPl: ["taksówka", "taksowka"],
    acceptedFr: ["taxi", "le taxi", "un taxi"],
    distractorsPl: ["autobus", "pociąg", "samolot"],
    distractorsFr: ["bus", "train", "avion"]
  },
  {
    id: "taxi-2",
    date: "2026-10-21",
    pl: "kierowca",
    fr: "chauffeur, conducteur",
    category: "Voyage & Aéroport",
    acceptedPl: ["kierowca"],
    acceptedFr: ["chauffeur", "conducteur", "le chauffeur"],
    distractorsPl: ["kelner", "pracownik", "pilot"],
    distractorsFr: ["serveur", "employé", "pilote"]
  },
  {
    id: "taxi-3",
    date: "2026-10-21",
    pl: "Dokąd jedziemy?",
    fr: "Où allons-nous ?",
    category: "Voyage & Aéroport",
    acceptedPl: ["Dokąd jedziemy", "Dokad jedziemy"],
    acceptedFr: ["Où allons-nous", "Ou allons-nous", "On va où"],
    distractorsPl: ["Skąd jedziemy?", "Dokąd lecisz?", "Gdzie jesteśmy?"],
    distractorsFr: ["D'où venons-nous ?", "Où voles-tu ?", "Où sommes-nous ?"]
  },
  {
    id: "taxi-4",
    date: "2026-10-21",
    pl: "Proszę jechać na ulicę Lipową.",
    fr: "S'il vous plaît, allez rue Lipowa.",
    category: "Voyage & Aéroport",
    acceptedPl: ["Proszę jechać na ulicę Lipową", "Prosze jechac na ulice Lipowa"],
    acceptedFr: ["S'il vous plaît, allez rue Lipowa", "Allez rue Lipowa s'il vous plaît", "S il vous plait allez rue Lipowa"],
    distractorsPl: ["Proszę czekać na ulicy Lipowej.", "Gdzie jest ulica Lipowa?", "Proszę skręcić w lewo."],
    distractorsFr: ["Veuillez attendre rue Lipowa.", "Où est la rue Lipowa ?", "Veuillez tourner à gauche."]
  },
  {
    id: "taxi-5",
    date: "2026-10-21",
    pl: "jechać",
    fr: "aller (en véhicule), rouler",
    category: "Voyage & Aéroport",
    genderNotes: "ja jadę (je vais), my jedziemy (nous allons)",
    acceptedPl: ["jechać", "jechac"],
    acceptedFr: ["aller", "aller en véhicule", "rouler"],
    distractorsPl: ["lecieć", "iść", "biegać"],
    distractorsFr: ["voler (en avion)", "aller à pied", "courir"]
  },
  {
    id: "taxi-6",
    date: "2026-10-21",
    pl: "przejazd",
    fr: "trajet, course",
    category: "Voyage & Aéroport",
    acceptedPl: ["przejazd"],
    acceptedFr: ["trajet", "course", "le trajet", "la course"],
    distractorsPl: ["bilet", "lot", "podróż"],
    distractorsFr: ["billet", "vol", "voyage"]
  },
  {
    id: "taxi-7",
    date: "2026-10-21",
    pl: "Ile kosztuje przejazd?",
    fr: "Combien coûte le trajet ?",
    category: "Voyage & Aéroport",
    acceptedPl: ["Ile kosztuje przejazd"],
    acceptedFr: ["Combien coûte le trajet", "Combien coute le trajet", "Combien coûte la course"],
    distractorsPl: ["Ile kosztuje bilet?", "Ile płacę?", "Ile to kosztuje?"],
    distractorsFr: ["Combien coûte le billet ?", "Combien je paie ?", "Combien ça coûte ?"]
  },
  {
    id: "taxi-8",
    date: "2026-10-21",
    pl: "ulica",
    fr: "rue (abrév. ul.)",
    category: "Voyage & Aéroport",
    acceptedPl: ["ulica", "ul"],
    acceptedFr: ["rue", "la rue", "une rue"],
    distractorsPl: ["aleja", "plac", "osiedle"],
    distractorsFr: ["avenue", "place", "quartier"]
  },
  {
    id: "taxi-9",
    date: "2026-10-21",
    pl: "aleja",
    fr: "avenue, allée (abrév. al.)",
    category: "Voyage & Aéroport",
    acceptedPl: ["aleja", "al"],
    acceptedFr: ["avenue", "allée", "allee", "l'avenue"],
    distractorsPl: ["ulica", "plac", "droga"],
    distractorsFr: ["rue", "place", "route"]
  },
  {
    id: "taxi-10",
    date: "2026-10-21",
    pl: "osiedle",
    fr: "quartier, lotissement, cité (abrév. os.)",
    category: "Voyage & Aéroport",
    acceptedPl: ["osiedle", "os"],
    acceptedFr: ["quartier", "lotissement", "cité", "le quartier"],
    distractorsPl: ["miasto", "ulica", "centrum"],
    distractorsFr: ["ville", "rue", "centre-ville"]
  },
  {
    id: "taxi-11",
    date: "2026-10-21",
    pl: "plac",
    fr: "place (abrév. pl.)",
    category: "Voyage & Aéroport",
    acceptedPl: ["plac", "pl"],
    acceptedFr: ["place", "la place", "une place"],
    distractorsPl: ["park", "ulica", "budynek"],
    distractorsFr: ["parc", "rue", "bâtiment"]
  },
  {
    id: "taxi-12",
    date: "2026-10-21",
    pl: "Chciałbym jechać na aleję Niezależności.",
    fr: "Je voudrais aller sur l'avenue de l'Indépendance.",
    category: "Voyage & Aéroport",
    genderNotes: "Locuteur masc. : Chciałbym | Locutrice fém. : Chciałabym",
    acceptedPl: [
      "Chciałbym jechać na aleję Niezależności",
      "Chciałabym jechać na aleję Niezależności",
      "Chcialbym jechac na aleje Niezaleznosci"
    ],
    acceptedFr: [
      "Je voudrais aller sur l'avenue de l'Indépendance",
      "Je voudrais aller avenue de l'Indépendance",
      "Je voudrais aller sur l avenue de l Independance"
    ],
    distractorsPl: [
      "Proszę jechać na ulicę Lipową.",
      "Chciałbym kupić bilet do Francji.",
      "Dokąd jedziemy dzisiaj?"
    ],
    distractorsFr: [
      "S'il vous plaît, allez rue Lipowa.",
      "Je voudrais acheter un billet pour la France.",
      "Où allons-nous aujourd'hui ?"
    ]
  },

  // ==========================================
  // COURS DU 21.10 - AU MUSÉE & ORIENTATION
  // ==========================================
  {
    id: "muz-1",
    date: "2026-10-21",
    pl: "muzeum",
    fr: "musée",
    category: "Voyage & Aéroport",
    acceptedPl: ["muzeum"],
    acceptedFr: ["musée", "musee", "le musée"],
    distractorsPl: ["kino", "teatr", "restauracja"],
    distractorsFr: ["cinéma", "théâtre", "restaurant"]
  },
  {
    id: "muz-2",
    date: "2026-10-21",
    pl: "bilet normalny",
    fr: "billet plein tarif",
    category: "Voyage & Aéroport",
    acceptedPl: ["bilet normalny"],
    acceptedFr: ["billet plein tarif", "plein tarif", "billet normal"],
    distractorsPl: ["bilet ulgowy", "karta pokładowa", "znaczek"],
    distractorsFr: ["billet tarif réduit", "carte d'embarquement", "timbre"]
  },
  {
    id: "muz-3",
    date: "2026-10-21",
    pl: "bilet ulgowy",
    fr: "billet tarif réduit",
    category: "Voyage & Aéroport",
    acceptedPl: ["bilet ulgowy"],
    acceptedFr: ["billet tarif réduit", "tarif réduit", "billet étudiant", "billet etudiant"],
    distractorsPl: ["bilet normalny", "bilet miesięczny", "rezerwacja"],
    distractorsFr: ["billet plein tarif", "abonnement mensuel", "réservation"]
  },
  {
    id: "muz-4",
    date: "2026-10-21",
    pl: "ulgowy",
    fr: "à tarif réduit (avec réduction)",
    category: "Adjectifs",
    genderNotes: "m: ulgowy | f: ulgowa | n: ulgowe",
    acceptedPl: ["ulgowy", "ulgowa", "ulgowe"],
    acceptedFr: ["à tarif réduit", "tarif reduit", "avec reduction", "réduit", "reduit"],
    distractorsPl: ["normalny", "drogi", "darmowy"],
    distractorsFr: ["normal", "cher", "gratuit"]
  },
  {
    id: "muz-5",
    date: "2026-10-21",
    pl: "wejście",
    fr: "entrée",
    category: "Voyage & Aéroport",
    acceptedPl: ["wejście", "wejscie"],
    acceptedFr: ["entrée", "entree", "l'entrée"],
    distractorsPl: ["wyjście", "drzwi", "okno"],
    distractorsFr: ["sortie", "porte", "fenêtre"]
  },
  {
    id: "muz-6",
    date: "2026-10-21",
    pl: "wyjście",
    fr: "sortie",
    category: "Voyage & Aéroport",
    acceptedPl: ["wyjście", "wyjscie"],
    acceptedFr: ["sortie", "la sortie", "une sortie"],
    distractorsPl: ["wejście", "bramka", "korytarz"],
    distractorsFr: ["entrée", "porte d'embarquement", "couloir"]
  },
  {
    id: "muz-7",
    date: "2026-10-21",
    pl: "Nie ma wyjścia.",
    fr: "Il n'y a pas d'issue (pas le choix).",
    category: "Phrases & Quotidien",
    acceptedPl: ["Nie ma wyjścia", "Nie ma wyjscia"],
    acceptedFr: ["Il n'y a pas d'issue", "Il n y a pas d issue", "Pas d'issue", "Pas le choix"],
    distractorsPl: ["Gdzie jest wyjście?", "Wyjście jest tam.", "Nie ma problemu."],
    distractorsFr: ["Où est la sortie ?", "La sortie est là-bas.", "Pas de problème."]
  },
  {
    id: "muz-8",
    date: "2026-10-21",
    pl: "Wyjście jest tam!",
    fr: "La sortie est là-bas !",
    category: "Phrases & Quotidien",
    acceptedPl: ["Wyjście jest tam", "Wyjscie jest tam"],
    acceptedFr: ["La sortie est là-bas", "La sortie est la-bas"],
    distractorsPl: ["Wejście jest po lewej.", "To kosztuje dwadzieścia złotych.", "Proszę czekać tutaj."],
    distractorsFr: ["L'entrée est à gauche.", "Ça coûte vingt zlotys.", "Veuillez attendre ici."]
  },
  {
    id: "muz-9",
    date: "2026-10-21",
    pl: "po lewej stronie",
    fr: "sur le côté gauche, à gauche",
    category: "Voyage & Aéroport",
    acceptedPl: ["po lewej stronie", "po lewej"],
    acceptedFr: ["sur le côté gauche", "à gauche", "sur le cote gauche", "a gauche"],
    distractorsPl: ["po prawej stronie", "prosto", "niedaleko"],
    distractorsFr: ["sur le côté droit", "tout droit", "pas loin"]
  },
  {
    id: "muz-10",
    date: "2026-10-21",
    pl: "po prawej stronie",
    fr: "sur le côté droit, à droite",
    category: "Voyage & Aéroport",
    acceptedPl: ["po prawej stronie", "po prawej"],
    acceptedFr: ["sur le côté droit", "à droite", "sur le cote droit", "a droite"],
    distractorsPl: ["po lewej stronie", "z tyłu", "blisko"],
    distractorsFr: ["sur le côté gauche", "derrière", "près"]
  },
  {
    id: "muz-11",
    date: "2026-10-21",
    pl: "potrzebować",
    fr: "avoir besoin de",
    category: "Phrases & Quotidien",
    acceptedPl: ["potrzebować", "potrzebowac"],
    acceptedFr: ["avoir besoin de", "avoir besoin"],
    distractorsPl: ["pomagać", "prosić", "zamawiać"],
    distractorsFr: ["aider", "demander", "commander"]
  },
  {
    id: "muz-12",
    date: "2026-10-21",
    pl: "Potrzebuje Pan pomocy?",
    fr: "Avez-vous besoin d'aide ? (à un homme)",
    category: "Phrases & Quotidien",
    genderNotes: "À un homme : Potrzebuje Pan pomocy? | À une femme : Potrzebuje Pani pomocy?",
    acceptedPl: ["Potrzebuje Pan pomocy", "Potrzebuje Pani pomocy", "Potrzebuje pan pomocy", "Potrzebuje pani pomocy"],
    acceptedFr: ["Avez-vous besoin d'aide", "Avez vous besoin d aide", "Vous avez besoin d'aide"],
    distractorsPl: ["W czym mogę pomóc?", "Czy mogę prosić o pomoc?", "Czy ma Pan bilet?"],
    distractorsFr: ["En quoi puis-je vous aider ?", "Puis-je demander de l'aide ?", "Avez-vous un billet ?"]
  },
  {
    id: "muz-13",
    date: "2026-10-21",
    pl: "oto",
    fr: "voici",
    category: "Phrases & Quotidien",
    acceptedPl: ["oto"],
    acceptedFr: ["voici", "voila", "voilà"],
    distractorsPl: ["tam", "tutaj", "gdzie"],
    distractorsFr: ["là-bas", "ici", "où"]
  },
  // ==========================================
  // COURS DU 27.10 - EXPRESSIONS & DIALOGUES
  // ==========================================
  {
    id: "phr-27-1",
    date: "2026-10-27",
    pl: "Co nowego?",
    fr: "Quoi de neuf ?",
    category: "Phrases & Quotidien",
    acceptedPl: ["Co nowego"],
    acceptedFr: ["Quoi de neuf", "Quoi de nouveau"],
    distractorsPl: ["Jak się masz?", "Co robisz?", "Co słychać?"],
    distractorsFr: ["Comment vas-tu ?", "Que fais-tu ?", "Qu'est-ce qu'on raconte ?"]
  },
  {
    id: "phr-27-2",
    date: "2026-10-27",
    pl: "Nic nowego!",
    fr: "Rien de neuf !",
    category: "Phrases & Quotidien",
    acceptedPl: ["Nic nowego"],
    acceptedFr: ["Rien de neuf", "Rien de nouveau"],
    distractorsPl: ["Wszystko dobrze!", "Dużo pracy!", "Nie wiem!"],
    distractorsFr: ["Tout va bien !", "Beaucoup de travail !", "Je ne sais pas !"]
  },
  {
    id: "phr-27-3",
    date: "2026-10-27",
    pl: "Po staremu!",
    fr: "Comme d'habitude ! / Rien de changé !",
    category: "Phrases & Quotidien",
    acceptedPl: ["Po staremu"],
    acceptedFr: ["Comme d'habitude", "Rien de changé", "Comme avant", "Toujours pareil"],
    distractorsPl: ["Świetnie!", "Bardzo dobrze!", "Niestety nie!"],
    distractorsFr: ["Super !", "Très bien !", "Malheureusement non !"]
  },
  {
    id: "phr-27-4",
    date: "2026-10-27",
    pl: "Mam dwie walizki i plecak na dziś.",
    fr: "J'ai deux valises et un sac à dos pour aujourd'hui.",
    category: "Voyage & Aéroport",
    acceptedPl: ["Mam dwie walizki i plecak na dziś", "Mam dwie walizki i plecak na dzis"],
    acceptedFr: ["J'ai deux valises et un sac à dos pour aujourd'hui", "J ai deux valises et un sac a dos pour aujourd hui"],
    distractorsPl: ["Mam jedną walizkę i torbę.", "Nie mam żadnego bagażu.", "Mam dwa duże plecaki."],
    distractorsFr: ["J'ai une valise et un sac.", "Je n'ai aucun bagage.", "J'ai deux grands sacs à dos."]
  },
  {
    id: "phr-27-5",
    date: "2026-10-27",
    pl: "Trzy plus cztery to siedem i dziesięć minus osiem to dwa.",
    fr: "Trois plus quatre font sept et dix moins huit font deux.",
    category: "Nombres",
    acceptedPl: [
      "Trzy plus cztery to siedem i dziesięć minus osiem to dwa",
      "Trzy plus cztery to siedem i dziesiec minus osiem to dwa"
    ],
    acceptedFr: [
      "Trois plus quatre font sept et dix moins huit font deux",
      "Trois plus quatre ça fait sept et dix moins huit ça fait deux",
      "Trois plus quatre ca fait sept et dix moins huit ca fait deux"
    ],
    distractorsPl: [
      "Dwa plus pięć to siedem i osiem minus trzy to pięć.",
      "Cztery plus cztery to osiem i dziesięć minus sześć to cztery.",
      "Sześć plus jeden to siedem i dziesięć minus dwa to osiem."
    ],
    distractorsFr: [
      "Deux plus cinq font sept et huit moins trois font cinq.",
      "Quatre plus quatre font huit et dix moins six font quatre.",
      "Six plus un font sept et dix moins deux font huit."
    ]
  },
  {
    id: "phr-27-6",
    date: "2026-10-27",
    pl: "Dzień dobry, chciałbym kupić bilet ulgowy do muzeum.",
    fr: "Bonjour, je voudrais acheter un billet à tarif réduit pour le musée.",
    category: "Voyage & Aéroport",
    genderNotes: "Homme : chciałbym | Femme : chciałabym",
    acceptedPl: [
      "Dzień dobry, chciałbym kupić bilet ulgowy do muzeum",
      "Dzień dobry, chciałabym kupić bilet ulgowy do muzeum",
      "Dzien dobry, chcialbym kupic bilet ulgowy do muzeum"
    ],
    acceptedFr: [
      "Bonjour, je voudrais acheter un billet à tarif réduit pour le musée",
      "Bonjour, je voudrais acheter un billet tarif reduit pour le musee",
      "Bonjour je voudrais acheter un billet à tarif réduit pour le musée"
    ],
    distractorsPl: [
      "Dzień dobry, poproszę dwa bilety normalne do kina.",
      "Dzień dobry, chcę wysłać list do Francji.",
      "Dzień dobry, proszę jechać na ulicę Lipową."
    ],
    distractorsFr: [
      "Bonjour, deux billets plein tarif pour le cinéma s'il vous plaît.",
      "Bonjour, je veux envoyer une lettre en France.",
      "Bonjour, veuillez aller rue Lipowa."
    ]
  },
  {
    id: "phr-27-7",
    date: "2026-10-27",
    pl: "Czy potrzebuje pani pomocy?",
    fr: "Avez-vous besoin d'aide, madame ?",
    category: "Phrases & Quotidien",
    genderNotes: "À une femme : pani | À un homme : pan (Czy potrzebuje pan pomocy?)",
    acceptedPl: ["Czy potrzebuje pani pomocy", "Czy potrzebuje pan pomocy"],
    acceptedFr: [
      "Avez-vous besoin d'aide, madame",
      "Avez vous besoin d aide madame",
      "Avez-vous besoin d'aide",
      "Est-ce que vous avez besoin d'aide, madame"
    ],
    distractorsPl: ["W czym mogę pomóc?", "Czy mogę prosić o bilet?", "Gdzie jest pomoc?"],
    distractorsFr: ["En quoi puis-je vous aider ?", "Puis-je demander un billet ?", "Où est l'aide ?"]
  },
  {
    id: "phr-27-8",
    date: "2026-10-27",
    pl: "Gdzie jest wejście, proszę? Jest po lewej, niedaleko wyjścia.",
    fr: "Où est l'entrée, s'il vous plaît ? Elle est à gauche, près de la sortie.",
    category: "Voyage & Aéroport",
    acceptedPl: [
      "Gdzie jest wejście, proszę? Jest po lewej, niedaleko wyjścia",
      "Gdzie jest wejscie, prosze? Jest po lewej, niedaleko wyjscia"
    ],
    acceptedFr: [
      "Où est l'entrée, s'il vous plaît ? Elle est à gauche, près de la sortie",
      "Ou est l entree s il vous plait ? Elle est a gauche pres de la sortie",
      "Où est l'entrée s'il vous plaît ? Elle est à gauche près de la sortie"
    ],
    distractorsPl: [
      "Gdzie jest wyjście, proszę? Jest po prawej stronie.",
      "Gdzie jest kasa biletowa? Jest na wprost wejścia.",
      "Czy wejście jest otwarte? Tak, po lewej stronie."
    ],
    distractorsFr: [
      "Où est la sortie, s'il vous plaît ? Elle est sur le côté droit.",
      "Où est la billetterie ? Elle est en face de l'entrée.",
      "Est-ce que l'entrée est ouverte ? Oui, à gauche."
    ]
  },
  {
    id: "phr-27-9",
    date: "2026-10-27",
    pl: "Chciałbym powtórzyć adres : plac Centralny, numer dwadzieścia dwa.",
    fr: "Je voudrais répéter l'adresse : place Centrale, numéro vingt-deux.",
    category: "Voyage & Aéroport",
    acceptedPl: [
      "Chciałbym powtórzyć adres : plac Centralny, numer dwadzieścia dwa",
      "Chcialbym powtorzyc adres : plac Centralny, numer dwadziescia dwa"
    ],
    acceptedFr: [
      "Je voudrais répéter l'adresse : place Centrale, numéro vingt-deux",
      "Je voudrais repeter l adresse : place Centrale, numero vingt deux",
      "Je voudrais répéter l'adresse place Centrale numéro 22"
    ],
    distractorsPl: [
      "Proszę powtórzyć nazwisko i numer telefonu.",
      "Proszę jechać na ulicę Lipową, numer dziesięć.",
      "Gdzie jest plac Centralny w tym mieście?"
    ],
    distractorsFr: [
      "Veuillez répéter le nom de famille et le numéro de téléphone.",
      "Veuillez aller rue Lipowa, numéro dix.",
      "Où se trouve la place Centrale dans cette ville ?"
    ]
  },
  {
    id: "phr-27-10",
    date: "2026-10-27",
    pl: "dwadzieścia przez trzynaście (20/13)",
    fr: "vingt sur treize (adresse : numéro 20, appartement 13)",
    category: "Phrases & Quotidien",
    acceptedPl: ["dwadzieścia przez trzynaście", "dwadziescia przez trzynascie", "20/13"],
    acceptedFr: ["vingt sur treize", "20 sur 13", "numéro 20 appartement 13"],
    distractorsPl: ["dwadzieścia i trzynaście", "trzynaście przez dwadzieścia", "dwadzieścia trzy"],
    distractorsFr: ["vingt et treize", "treize sur vingt", "vingt-trois"]
  },

  // ==========================================
  // COURS DU 27.10 - NOMBRES, CENTAINES & MILLIERS
  // ==========================================
  {
    id: "num-27-1",
    date: "2026-10-27",
    pl: "rok",
    fr: "an, année",
    category: "Nombres",
    acceptedPl: ["rok"],
    acceptedFr: ["an", "année", "annee", "l'année"],
    distractorsPl: ["miesiąc", "tydzień", "dzień"],
    distractorsFr: ["mois", "semaine", "jour"]
  },
  {
    id: "num-27-2",
    date: "2026-10-27",
    pl: "teraz",
    fr: "maintenant",
    category: "Phrases & Quotidien",
    acceptedPl: ["teraz"],
    acceptedFr: ["maintenant", "actuellement"],
    distractorsPl: ["wczoraj", "jutro", "zawsze"],
    distractorsFr: ["hier", "demain", "toujours"]
  },
  {
    id: "num-27-3",
    date: "2026-10-27",
    pl: "Jaki jest teraz rok?",
    fr: "En quelle année sommes-nous maintenant ?",
    category: "Nombres",
    acceptedPl: ["Jaki jest teraz rok"],
    acceptedFr: ["En quelle année sommes-nous maintenant", "Quelle année sommes-nous", "Quel est l'an actuel"],
    distractorsPl: ["Który jest dzisiaj dzień?", "Która jest godzina?", "Kiedy masz urodziny?"],
    distractorsFr: ["Quel jour sommes-nous aujourd'hui ?", "Quelle heure est-il ?", "Quand as-tu ton anniversaire ?"]
  },
  {
    id: "num-27-4",
    date: "2026-10-27",
    pl: "W jakim roku się urodziłeś?",
    fr: "En quelle année es-tu né ?",
    category: "Nombres",
    genderNotes: "À un homme : urodziłeś | À une femme : urodziłaś",
    acceptedPl: ["W jakim roku się urodziłeś", "W jakim roku sie urodziles", "W jakim roku się urodziłaś"],
    acceptedFr: ["En quelle année es-tu né", "En quelle annee es-tu ne", "En quelle année es-tu née"],
    distractorsPl: ["Ile masz lat?", "Gdzie się urodziłeś?", "Kiedy masz urodziny?"],
    distractorsFr: ["Quel âge as-tu ?", "Où es-tu né ?", "Quand est ton anniversaire ?"]
  },
  {
    id: "num-27-5",
    date: "2026-10-27",
    pl: "dwadzieścia",
    fr: "20 (vingt)",
    category: "Nombres",
    acceptedPl: ["dwadzieścia", "dwadziescia", "20"],
    acceptedFr: ["20", "vingt"],
    distractorsPl: ["dwanaście", "dwieście", "trzydzieści"],
    distractorsFr: ["douze", "deux cents", "trente"]
  },
  {
    id: "num-27-6",
    date: "2026-10-27",
    pl: "trzydzieści",
    fr: "30 (trente)",
    category: "Nombres",
    acceptedPl: ["trzydzieści", "trzydziesci", "30"],
    acceptedFr: ["30", "trente"],
    distractorsPl: ["trzynaście", "trzysta", "czterdzieści"],
    distractorsFr: ["treize", "trois cents", "quarante"]
  },
  {
    id: "num-27-7",
    date: "2026-10-27",
    pl: "czterdzieści",
    fr: "40 (quarante)",
    category: "Nombres",
    acceptedPl: ["czterdzieści", "czterdziesci", "40"],
    acceptedFr: ["40", "quarante"],
    distractorsPl: ["czternaście", "czterysta", "pięćdziesiąt"],
    distractorsFr: ["quatorze", "quatre cents", "cinquante"]
  },
  {
    id: "num-27-8",
    date: "2026-10-27",
    pl: "pięćdziesiąt",
    fr: "50 (cinquante)",
    category: "Nombres",
    acceptedPl: ["pięćdziesiąt", "piecdziesiat", "50"],
    acceptedFr: ["50", "cinquante"],
    distractorsPl: ["piętnaście", "pięćset", "sześćdziesiąt"],
    distractorsFr: ["quinze", "cinq cents", "soixante"]
  },
  {
    id: "num-27-9",
    date: "2026-10-27",
    pl: "sześćdziesiąt",
    fr: "60 (soixante)",
    category: "Nombres",
    acceptedPl: ["sześćdziesiąt", "szescdziesiat", "60"],
    acceptedFr: ["60", "soixante"],
    distractorsPl: ["szesnaście", "sześćset", "siedemdziesiąt"],
    distractorsFr: ["seize", "six cents", "soixante-dix"]
  },
  {
    id: "num-27-10",
    date: "2026-10-27",
    pl: "siedemdziesiąt",
    fr: "70 (soixante-dix)",
    category: "Nombres",
    acceptedPl: ["siedemdziesiąt", "siedemdziesiat", "70"],
    acceptedFr: ["70", "soixante-dix", "septante"],
    distractorsPl: ["siedemnaście", "siedemset", "osiemdziesiąt"],
    distractorsFr: ["dix-sept", "sept cents", "quatre-vingts"]
  },
  {
    id: "num-27-11",
    date: "2026-10-27",
    pl: "osiemdziesiąt",
    fr: "80 (quatre-vingts)",
    category: "Nombres",
    acceptedPl: ["osiemdziesiąt", "osiemdziesiat", "80"],
    acceptedFr: ["80", "quatre-vingts", "quatre-vingt", "huitante"],
    distractorsPl: ["osiemnaście", "osiemset", "dziewięćdziesiąt"],
    distractorsFr: ["dix-huit", "huit cents", "quatre-vingt-dix"]
  },
  {
    id: "num-27-12",
    date: "2026-10-27",
    pl: "dziewięćdziesiąt",
    fr: "90 (quatre-vingt-dix)",
    category: "Nombres",
    acceptedPl: ["dziewięćdziesiąt", "dziewiecdziesiat", "90"],
    acceptedFr: ["90", "quatre-vingt-dix", "nonante"],
    distractorsPl: ["dziewiętnaście", "dziewięćset", "sto"],
    distractorsFr: ["dix-neuf", "neuf cents", "cent"]
  },
  {
    id: "num-27-13",
    date: "2026-10-27",
    pl: "sto",
    fr: "100 (cent)",
    category: "Nombres",
    acceptedPl: ["sto", "100"],
    acceptedFr: ["100", "cent"],
    distractorsPl: ["dziesięć", "dwieście", "tysiąc"],
    distractorsFr: ["dix", "deux cents", "mille"]
  },
  {
    id: "num-27-14",
    date: "2026-10-27",
    pl: "dwieście",
    fr: "200 (deux cents)",
    category: "Nombres",
    acceptedPl: ["dwieście", "dwiescie", "200"],
    acceptedFr: ["200", "deux cents", "deux cent"],
    distractorsPl: ["dwadzieścia", "trzysta", "dwa tysiące"],
    distractorsFr: ["vingt", "trois cents", "deux mille"]
  },
  {
    id: "num-27-15",
    date: "2026-10-27",
    pl: "trzysta",
    fr: "300 (trois cents)",
    category: "Nombres",
    acceptedPl: ["trzysta", "300"],
    acceptedFr: ["300", "trois cents", "trois cent"],
    distractorsPl: ["trzydzieści", "czterysta", "trzy tysiące"],
    distractorsFr: ["trente", "quatre cents", "trois mille"]
  },
  {
    id: "num-27-16",
    date: "2026-10-27",
    pl: "czterysta",
    fr: "400 (quatre cents)",
    category: "Nombres",
    acceptedPl: ["czterysta", "400"],
    acceptedFr: ["400", "quatre cents", "quatre cent"],
    distractorsPl: ["czterdzieści", "pięćset", "dwa tysiące"],
    distractorsFr: ["quarante", "cinq cents", "deux mille"]
  },
  {
    id: "num-27-17",
    date: "2026-10-27",
    pl: "pięćset",
    fr: "500 (cinq cents)",
    category: "Nombres",
    acceptedPl: ["pięćset", "piecset", "500"],
    acceptedFr: ["500", "cinq cents", "cinq cent"],
    distractorsPl: ["pięćdziesiąt", "sześćset", "pięć tysięcy"],
    distractorsFr: ["cinquante", "six cents", "cinq mille"]
  },
  {
    id: "num-27-18",
    date: "2026-10-27",
    pl: "sześćset",
    fr: "600 (six cents)",
    category: "Nombres",
    acceptedPl: ["sześćset", "szescset", "600"],
    acceptedFr: ["600", "six cents", "six cent"],
    distractorsPl: ["sześćdziesiąt", "siedemset", "sześć tysięcy"],
    distractorsFr: ["soixante", "sept cents", "six mille"]
  },
  {
    id: "num-27-19",
    date: "2026-10-27",
    pl: "siedemset",
    fr: "700 (sept cents)",
    category: "Nombres",
    acceptedPl: ["siedemset", "700"],
    acceptedFr: ["700", "sept cents", "sept cent"],
    distractorsPl: ["siedemdziesiąt", "osiemset", "siedem tysięcy"],
    distractorsFr: ["soixante-dix", "huit cents", "sept mille"]
  },
  {
    id: "num-27-20",
    date: "2026-10-27",
    pl: "osiemset",
    fr: "800 (huit cents)",
    category: "Nombres",
    acceptedPl: ["osiemset", "800"],
    acceptedFr: ["800", "huit cents", "huit cent"],
    distractorsPl: ["osiemdziesiąt", "dziewięćset", "osiem tysięcy"],
    distractorsFr: ["quatre-vingts", "neuf cents", "huit mille"]
  },
  {
    id: "num-27-21",
    date: "2026-10-27",
    pl: "dziewięćset",
    fr: "900 (neuf cents)",
    category: "Nombres",
    acceptedPl: ["dziewięćset", "dziewiecset", "900"],
    acceptedFr: ["900", "neuf cents", "neuf cent"],
    distractorsPl: ["dziewięćdziesiąt", "tysiąc", "dziewięć tysięcy"],
    distractorsFr: ["quatre-vingt-dix", "mille", "neuf mille"]
  },
  {
    id: "num-27-22",
    date: "2026-10-27",
    pl: "tysiąc",
    fr: "1 000 (mille)",
    category: "Nombres",
    acceptedPl: ["tysiąc", "tysiac", "1000", "1 000"],
    acceptedFr: ["1000", "1 000", "mille"],
    distractorsPl: ["sto", "dwa tysiące", "milion"],
    distractorsFr: ["cent", "deux mille", "million"]
  },
  {
    id: "num-27-23",
    date: "2026-10-27",
    pl: "dwa tysiące",
    fr: "2 000 (deux mille)",
    category: "Nombres",
    acceptedPl: ["dwa tysiące", "dwa tysiace", "2000", "2 000"],
    acceptedFr: ["2000", "2 000", "deux mille"],
    distractorsPl: ["tysiąc", "trzy tysiące", "dwieście"],
    distractorsFr: ["mille", "trois mille", "deux cents"]
  },
  {
    id: "num-27-24",
    date: "2026-10-27",
    pl: "pięć tysięcy",
    fr: "5 000 (cinq mille)",
    category: "Nombres",
    acceptedPl: ["pięć tysięcy", "piec tysiecy", "5000", "5 000"],
    acceptedFr: ["5000", "5 000", "cinq mille"],
    distractorsPl: ["pięćset", "dwa tysiące", "siedem tysięcy"],
    distractorsFr: ["cinq cents", "deux mille", "sept mille"]
  },
  {
    id: "num-27-25",
    date: "2026-10-27",
    pl: "sześćset siedemdziesiąt osiem",
    fr: "678 (six cent soixante-dix-huit)",
    category: "Nombres",
    acceptedPl: ["sześćset siedemdziesiąt osiem", "szescset siedemdziesiat osiem", "678"],
    acceptedFr: ["678", "six cent soixante-dix-huit", "six cent soixante dix huit"],
    distractorsPl: ["siedemset sześćdziesiąt osiem", "pięćset siedemdziesiąt sześć", "sześćset osiemdziesiąt siedem"],
    distractorsFr: ["sept cent soixante-huit", "cinq cent soixante-seize", "six cent quatre-vingt-sept"]
  },
  {
    id: "num-27-26",
    date: "2026-10-27",
    pl: "trzy tysiące dwieście czternaście",
    fr: "3 214 (trois mille deux cent quatorze)",
    category: "Nombres",
    acceptedPl: ["trzy tysiące dwieście czternaście", "trzy tysiace dwiescie czternascie", "3214", "3 214"],
    acceptedFr: ["3214", "3 214", "trois mille deux cent quatorze"],
    distractorsPl: ["trzy tysiące sto dwadzieścia cztery", "dwa tysiące trzysta czternaście", "cztery tysiące dwieście trzynaście"],
    distractorsFr: ["trois mille cent vingt-quatre", "deux mille trois cent quatorze", "quatre mille deux cent treize"]
  },
  {
    id: "num-27-27",
    date: "2026-10-27",
    pl: "dwa tysiące dwadzieścia sześć",
    fr: "2 026 (deux mille vingt-six - année 2026)",
    category: "Nombres",
    acceptedPl: ["dwa tysiące dwadzieścia sześć", "dwa tysiace dwadziescia szesc", "2026", "2 026"],
    acceptedFr: ["2026", "2 026", "deux mille vingt-six", "deux mille vingt six"],
    distractorsPl: ["dwa tysiące dwadzieścia cztery", "dwa tysiące szesnaście", "tysiąc dziewięćset dziewięćdziesiąt sześć"],
    distractorsFr: ["deux mille vingt-quatre", "deux mille seize", "mille neuf cent quatre-vingt-seize"]
  },
  {
    id: "num-27-28",
    date: "2026-10-27",
    pl: "tysiąc dziewięćset dziewięćdziesiąt dziewięć",
    fr: "1 999 (mille neuf cent quatre-vingt-dix-neuf - année 1999)",
    category: "Nombres",
    acceptedPl: [
      "tysiąc dziewięćset dziewięćdziesiąt dziewięć",
      "tysiac dziewiecset dziewiecdziesiat dziewiec",
      "1999",
      "1 999"
    ],
    acceptedFr: [
      "1999",
      "1 999",
      "mille neuf cent quatre-vingt-dix-neuf",
      "mille neuf cent nonante neuf"
    ],
    distractorsPl: [
      "tysiąc dziewięćset osiemdziesiąt dziewięć",
      "dwa tysiące dziewięć",
      "tysiąc osiemset dziewięćdziesiąt dziewięć"
    ],
    distractorsFr: [
      "mille neuf cent quatre-vingt-neuf",
      "deux mille neuf",
      "mille huit cent quatre-vingt-dix-neuf"
    ]
  },

  // ==========================================
  // COURS DU 27.10 - FAIRE CONNAISSANCE (POZNANIE NOWEJ OSOBY)
  // ==========================================
  {
    id: "ren-27-1",
    date: "2026-10-27",
    pl: "miasto",
    fr: "ville",
    category: "Phrases & Quotidien",
    acceptedPl: ["miasto"],
    acceptedFr: ["ville", "la ville", "une ville"],
    distractorsPl: ["państwo", "wieś", "ulica"],
    distractorsFr: ["pays", "campagne, village", "rue"]
  },
  {
    id: "ren-27-2",
    date: "2026-10-27",
    pl: "trochę",
    fr: "un peu",
    category: "Phrases & Quotidien",
    acceptedPl: ["trochę", "troche"],
    acceptedFr: ["un peu"],
    distractorsPl: ["dużo", "bardzo", "zawsze"],
    distractorsFr: ["beaucoup", "très", "toujours"]
  },
  {
    id: "ren-27-3",
    date: "2026-10-27",
    pl: "język ojczysty",
    fr: "langue maternelle",
    category: "Phrases & Quotidien",
    acceptedPl: ["język ojczysty", "jezyk ojczysty"],
    acceptedFr: ["langue maternelle", "la langue maternelle"],
    distractorsPl: ["język obcy", "język polski", "język francuski"],
    distractorsFr: ["langue étrangère", "langue polonaise", "langue française"]
  },
  {
    id: "ren-27-4",
    date: "2026-10-27",
    pl: "ojciec",
    fr: "père",
    category: "Phrases & Quotidien",
    acceptedPl: ["ojciec"],
    acceptedFr: ["père", "pere", "le père"],
    distractorsPl: ["syn", "brat", "mąż"],
    distractorsFr: ["fils", "frère", "mari"]
  },
  {
    id: "ren-27-5",
    date: "2026-10-27",
    pl: "Francuski to mój język ojczysty.",
    fr: "Le français est ma langue maternelle.",
    category: "Phrases & Quotidien",
    acceptedPl: ["Francuski to mój język ojczysty", "Francuski to moj jezyk ojczysty"],
    acceptedFr: ["Le français est ma langue maternelle", "Le francais est ma langue maternelle"],
    distractorsPl: ["Polski to mój język obcy.", "Uczę się języka francuskiego.", "Mój ojciec mówi po francusku."],
    distractorsFr: ["Le polonais est ma langue étrangère.", "J'apprends la langue française.", "Mon père parle français."]
  },
  {
    id: "ren-27-6",
    date: "2026-10-27",
    pl: "uczyć się",
    fr: "apprendre (pour soi-même, étudier)",
    category: "Phrases & Quotidien",
    genderNotes: "ja uczę się (j'apprends), ty uczysz się (tu apprends)",
    acceptedPl: ["uczyć się", "uczyc sie"],
    acceptedFr: ["apprendre", "étudier", "etudier"],
    distractorsPl: ["uczyć", "mówić", "czytać"],
    distractorsFr: ["enseigner (apprendre à qqn)", "parler", "lire"]
  },
  {
    id: "ren-27-7",
    date: "2026-10-27",
    pl: "uczyć",
    fr: "enseigner (apprendre à quelqu'un)",
    category: "Phrases & Quotidien",
    genderNotes: "ja uczę (j'enseigne) vs ja uczę się (j'apprends)",
    acceptedPl: ["uczyć", "uczyc"],
    acceptedFr: ["enseigner", "apprendre à quelqu'un"],
    distractorsPl: ["uczyć się", "wiedzieć", "pracować"],
    distractorsFr: ["apprendre (étudier)", "savoir", "travailler"]
  },
  {
    id: "ren-27-8",
    date: "2026-10-27",
    pl: "Uczę się polskiego, bo mam polską dziewczynę.",
    fr: "J'apprends le polonais parce que j'ai une copine polonaise.",
    category: "Phrases & Quotidien",
    acceptedPl: [
      "Uczę się polskiego, bo mam polską dziewczynę",
      "Ucze sie polskiego, bo mam polska dziewczyne",
      "Uczę się polskiego bo mam polską dziewczynę"
    ],
    acceptedFr: [
      "J'apprends le polonais parce que j'ai une copine polonaise",
      "J'apprends le polonais car j'ai une petite amie polonaise",
      "J apprends le polonais parce que j ai une copine polonaise"
    ],
    distractorsPl: [
      "Mój brat uczy się angielskiego w szkole.",
      "Mieszkam w Polsce, bo lubię polskie jedzenie.",
      "Uczę się hiszpańskiego z moją dziewczyną."
    ],
    distractorsFr: [
      "Mon frère apprend l'anglais à l'école.",
      "J'habite en Pologne parce que j'aime la nourriture polonaise.",
      "J'apprends l'espagnol avec ma copine."
    ]
  },
  {
    id: "ren-27-9",
    date: "2026-10-27",
    pl: "Co lubisz jeść? Lubię jeść pierogi z mięsem i kapustą.",
    fr: "Qu'aimes-tu manger ? J'aime manger des pierogi à la viande et au chou.",
    category: "Nourriture & Café",
    acceptedPl: [
      "Co lubisz jeść? Lubię jeść pierogi z mięsem i kapustą",
      "Co lubisz jesc? Lubie jesc pierogi z miesem i kapusta"
    ],
    acceptedFr: [
      "Qu'aimes-tu manger ? J'aime manger des pierogi à la viande et au chou",
      "Qu aime tu manger ? J aime manger des pierogi a la viande et au chou",
      "Qu'est-ce que tu aimes manger ? J'aime manger des pierogi à la viande et au chou"
    ],
    distractorsPl: [
      "Co zamawiasz? Poproszę zupę pomidorową i herbatę.",
      "Co lubisz pić? Lubię pić sok jabłkowy i kawę.",
      "Gdzie jesz obiad? Jem w polskiej restauracji."
    ],
    distractorsFr: [
      "Que commandes-tu ? Une soupe à la tomate et un thé s'il vous plaît.",
      "Qu'aimes-tu boire ? J'aime boire du jus de pomme et du café.",
      "Où manges-tu à midi ? Je mange dans un restaurant polonais."
    ]
  },
  {
    id: "ren-27-10",
    date: "2026-10-27",
    pl: "już",
    fr: "déjà",
    category: "Phrases & Quotidien",
    acceptedPl: ["już", "juz"],
    acceptedFr: ["déjà", "deja"],
    distractorsPl: ["jeszcze", "zawsze", "teraz"],
    distractorsFr: ["encore", "toujours", "maintenant"]
  },
  {
    id: "ren-27-11",
    date: "2026-10-27",
    pl: "Byłeś już w Polsce?",
    fr: "Es-tu déjà allé en Pologne ? (à un homme)",
    category: "Voyage & Aéroport",
    genderNotes: "À un homme : Byłeś | À une femme : Byłaś",
    acceptedPl: ["Byłeś już w Polsce", "Byles juz w Polsce", "Byłaś już w Polsce"],
    acceptedFr: [
      "Es-tu déjà allé en Pologne",
      "Es tu deja alle en Pologne",
      "Tu es déjà allé en Pologne",
      "Es-tu déjà allée en Pologne"
    ],
    distractorsPl: ["Kiedy jedziesz do Polski?", "Mieszkasz w Polsce?", "Znasz Warszawę?"],
    distractorsFr: ["Quand vas-tu en Pologne ?", "Habites-tu en Pologne ?", "Connais-tu Varsovie ?"]
  },
  {
    id: "ren-27-12",
    date: "2026-10-27",
    pl: "Byłem we Wrocławiu i w Krakowie.",
    fr: "Je suis allé à Wrocław et à Cracovie. (homme)",
    category: "Voyage & Aéroport",
    genderNotes: "Locuteur masc. : Byłem | Locutrice fém. : Byłam",
    acceptedPl: [
      "Byłem we Wrocławiu i w Krakowie",
      "Bylem we Wroclawiu i w Krakowie",
      "Byłam we Wrocławiu i w Krakowie"
    ],
    acceptedFr: [
      "Je suis allé à Wrocław et à Cracovie",
      "Je suis alle a Wroclaw et a Cracovie",
      "Je suis allée à Wrocław et à Cracovie"
    ],
    distractorsPl: [
      "Mieszkam w Warszawie i w Poznaniu.",
      "Jadę do Gdańska i do Krakowa.",
      "Znam Wrocław i Warszawę."
    ],
    distractorsFr: [
      "J'habite à Varsovie et à Poznań.",
      "Je vais à Gdańsk et à Cracovie.",
      "Je connais Wrocław et Varsovie."
    ]
  },
  {
    id: "ren-27-13",
    date: "2026-10-27",
    pl: "podróżować",
    fr: "voyager",
    category: "Voyage & Aéroport",
    acceptedPl: ["podróżować", "podrozowac"],
    acceptedFr: ["voyager"],
    distractorsPl: ["pracować", "zwiedzać", "odpoczywać"],
    distractorsFr: ["travailler", "visiter", "se reposer"]
  },
  {
    id: "ren-27-14",
    date: "2026-10-27",
    pl: "Lubisz podróżować?",
    fr: "Aimes-tu voyager ?",
    category: "Voyage & Aéroport",
    acceptedPl: ["Lubisz podróżować", "Lubisz podrozowac"],
    acceptedFr: ["Aimes-tu voyager", "Aimes tu voyager", "Tu aimes voyager"],
    distractorsPl: ["Gdzie lubisz jeździć?", "Czy masz walizkę?", "Dokąd lecisz?"],
    distractorsFr: ["Où aimes-tu aller ?", "As-tu une valise ?", "Vers où voles-tu ?"]
  },
  {
    id: "ren-27-15",
    date: "2026-10-27",
    pl: "Moje hobby to gitara.",
    fr: "Mon hobby est la guitare.",
    category: "Phrases & Quotidien",
    acceptedPl: ["Moje hobby to gitara"],
    acceptedFr: ["Mon hobby est la guitare", "Mon passe-temps est la guitare"],
    distractorsPl: ["Moje hobby to język polski.", "Lubię słuchać rocka.", "Gram w tenisa."],
    distractorsFr: ["Mon hobby est la langue polonaise.", "J'aime écouter du rock.", "Je joue au tennis."]
  },
  {
    id: "ren-27-16",
    date: "2026-10-27",
    pl: "zwierzęta",
    fr: "les animaux",
    category: "Phrases & Quotidien",
    acceptedPl: ["zwierzęta", "zwierzeta"],
    acceptedFr: ["les animaux", "animaux", "des animaux"],
    distractorsPl: ["owoce", "ludzie", "rzeczy"],
    distractorsFr: ["fruits", "gens, personnes", "choses"]
  },
  {
    id: "ren-27-17",
    date: "2026-10-27",
    pl: "Masz jakieś zwierzęta? Mam dwa psy.",
    fr: "As-tu des animaux ? J'ai deux chiens.",
    category: "Phrases & Quotidien",
    acceptedPl: ["Masz jakieś zwierzęta? Mam dwa psy", "Masz jakies zwierzeta? Mam dwa psy"],
    acceptedFr: [
      "As-tu des animaux ? J'ai deux chiens",
      "As tu des animaux ? J ai deux chiens",
      "Tu as des animaux ? J'ai deux chiens"
    ],
    distractorsPl: [
      "Lubisz psy i koty?",
      "Mam jednego psa i dwa koty.",
      "Czy to jest twój mały pies?"
    ],
    distractorsFr: [
      "Aimes-tu les chiens et les chats ?",
      "J'ai un chien et deux chats.",
      "Est-ce ton petit chien ?"
    ]
  },
  {
    id: "ren-27-18",
    date: "2026-10-27",
    pl: "Mój ulubiony owoc to truskawka.",
    fr: "Mon fruit préféré est la fraise.",
    category: "Fruits & Légumes",
    acceptedPl: ["Mój ulubiony owoc to truskawka", "Moj ulubiony owoc to truskawka"],
    acceptedFr: ["Mon fruit préféré est la fraise", "Mon fruit prefere est la fraise"],
    distractorsPl: ["Mój ulubiony owoc to jabłko.", "Moje ulubione warzywo to marchewka.", "Lubię arbuzy i banany."],
    distractorsFr: ["Mon fruit préféré est la pomme.", "Mon légume préféré est la carotte.", "J'aime les pastèques et les bananes."]
  },
  {
    id: "ren-27-19",
    date: "2026-10-27",
    pl: "Jaki jest twój ulubiony film?",
    fr: "Quel est ton film préféré ?",
    category: "Phrases & Quotidien",
    acceptedPl: ["Jaki jest twój ulubiony film", "Jaki jest twoj ulubiony film"],
    acceptedFr: ["Quel est ton film préféré", "Quel est ton film prefere", "Quel est votre film préféré"],
    distractorsPl: ["Jaki jest twój ulubiony zespół?", "Jaka jest twoja ulubiona książka?", "Co robisz wieczorem?"],
    distractorsFr: ["Quel est ton groupe préféré ?", "Quel est ton livre préféré ?", "Que fais-tu ce soir ?"]
  },

  // ==========================================
  // COURS DU 27.10 - FRUITS & LÉGUMES (WARZYWA I OWOCE)
  // ==========================================
  {
    id: "veg-27-1",
    date: "2026-10-27",
    pl: "truskawka",
    fr: "fraise",
    category: "Fruits & Légumes",
    acceptedPl: ["truskawka"],
    acceptedFr: ["fraise", "la fraise", "une fraise"],
    distractorsPl: ["malina", "wiśnia", "jabłko"],
    distractorsFr: ["framboise", "cerise", "pomme"]
  },
  {
    id: "veg-27-2",
    date: "2026-10-27",
    pl: "malina",
    fr: "framboise",
    category: "Fruits & Légumes",
    acceptedPl: ["malina"],
    acceptedFr: ["framboise", "la framboise", "une framboise"],
    distractorsPl: ["truskawka", "wiśnia", "arbuz"],
    distractorsFr: ["fraise", "cerise", "pastèque"]
  },
  {
    id: "veg-27-3",
    date: "2026-10-27",
    pl: "arbuz",
    fr: "pastèque",
    category: "Fruits & Légumes",
    acceptedPl: ["arbuz"],
    acceptedFr: ["pastèque", "pasteque", "la pastèque"],
    distractorsPl: ["dynia", "ananas", "kokos"],
    distractorsFr: ["citrouille", "ananas", "noix de coco"]
  },
  {
    id: "veg-27-4",
    date: "2026-10-27",
    pl: "kokos",
    fr: "noix de coco",
    category: "Fruits & Légumes",
    acceptedPl: ["kokos"],
    acceptedFr: ["noix de coco", "coco", "la noix de coco"],
    distractorsPl: ["ananas", "kiwi", "banan"],
    distractorsFr: ["ananas", "kiwi", "banane"]
  },
  {
    id: "veg-27-5",
    date: "2026-10-27",
    pl: "gruszka",
    fr: "poire",
    category: "Fruits & Légumes",
    acceptedPl: ["gruszka"],
    acceptedFr: ["poire", "la poire", "une poire"],
    distractorsPl: ["jabłko", "truskawka", "wiśnia"],
    distractorsFr: ["pomme", "fraise", "cerise"]
  },
  {
    id: "veg-27-6",
    date: "2026-10-27",
    pl: "ananas",
    fr: "ananas",
    category: "Fruits & Légumes",
    acceptedPl: ["ananas"],
    acceptedFr: ["ananas", "l'ananas", "un ananas"],
    distractorsPl: ["banan", "arbuz", "kokos"],
    distractorsFr: ["banane", "pastèque", "noix de coco"]
  },
  {
    id: "veg-27-7",
    date: "2026-10-27",
    pl: "banan",
    fr: "banane",
    category: "Fruits & Légumes",
    acceptedPl: ["banan"],
    acceptedFr: ["banane", "la banane", "une banane"],
    distractorsPl: ["cytryna", "ananas", "gruszka"],
    distractorsFr: ["citron", "ananas", "poire"]
  },
  {
    id: "veg-27-8",
    date: "2026-10-27",
    pl: "kiwi",
    fr: "kiwi",
    category: "Fruits & Légumes",
    acceptedPl: ["kiwi"],
    acceptedFr: ["kiwi", "le kiwi", "un kiwi"],
    distractorsPl: ["jabłko", "gruszka", "awokado"],
    distractorsFr: ["pomme", "poire", "avocat"]
  },
  {
    id: "veg-27-9",
    date: "2026-10-27",
    pl: "wiśnia",
    fr: "cerise",
    category: "Fruits & Légumes",
    acceptedPl: ["wiśnia", "wisnia"],
    acceptedFr: ["cerise", "la cerise", "une cerise"],
    distractorsPl: ["truskawka", "malina", "jabłko"],
    distractorsFr: ["fraise", "framboise", "pomme"]
  },
  {
    id: "veg-27-10",
    date: "2026-10-27",
    pl: "pomidor",
    fr: "tomate",
    category: "Fruits & Légumes",
    acceptedPl: ["pomidor"],
    acceptedFr: ["tomate", "la tomate", "une tomate"],
    distractorsPl: ["ogórek", "papryka", "cebula"],
    distractorsFr: ["concombre", "poivron", "oignon"]
  },
  {
    id: "veg-27-11",
    date: "2026-10-27",
    pl: "cebula",
    fr: "oignon",
    category: "Fruits & Légumes",
    acceptedPl: ["cebula"],
    acceptedFr: ["oignon", "l'oignon", "un oignon"],
    distractorsPl: ["czosnek", "marchewka", "ziemniak"],
    distractorsFr: ["ail", "carotte", "pomme de terre"]
  },
  {
    id: "veg-27-12",
    date: "2026-10-27",
    pl: "grzyb",
    fr: "champignon",
    category: "Fruits & Légumes",
    acceptedPl: ["grzyb"],
    acceptedFr: ["champignon", "le champignon", "un champignon"],
    distractorsPl: ["bakłażan", "kalafior", "dynia"],
    distractorsFr: ["aubergine", "chou-fleur", "citrouille"]
  },
  {
    id: "veg-27-13",
    date: "2026-10-27",
    pl: "bakłażan",
    fr: "aubergine",
    category: "Fruits & Légumes",
    acceptedPl: ["bakłażan", "baklazan"],
    acceptedFr: ["aubergine", "l'aubergine", "une aubergine"],
    distractorsPl: ["cukinia", "papryka", "pomidor"],
    distractorsFr: ["courgette", "poivron", "tomate"]
  },
  {
    id: "veg-27-14",
    date: "2026-10-27",
    pl: "kalafior",
    fr: "chou-fleur",
    category: "Fruits & Légumes",
    acceptedPl: ["kalafior"],
    acceptedFr: ["chou-fleur", "chou fleur", "le chou-fleur"],
    distractorsPl: ["kapusta", "brokuł", "sałata"],
    distractorsFr: ["chou", "brocoli", "salade"]
  },
  {
    id: "veg-27-15",
    date: "2026-10-27",
    pl: "awokado",
    fr: "avocat (le fruit)",
    category: "Fruits & Légumes",
    acceptedPl: ["awokado"],
    acceptedFr: ["avocat", "l'avocat", "un avocat"],
    distractorsPl: ["kiwi", "ogórek", "gruszka"],
    distractorsFr: ["kiwi", "concombre", "poire"]
  },
  {
    id: "veg-27-16",
    date: "2026-10-27",
    pl: "papryka",
    fr: "poivron",
    category: "Fruits & Légumes",
    acceptedPl: ["papryka"],
    acceptedFr: ["poivron", "le poivron", "un poivron"],
    distractorsPl: ["pomidor", "marchewka", "cebula"],
    distractorsFr: ["tomate", "carotte", "oignon"]
  },
  {
    id: "veg-27-17",
    date: "2026-10-27",
    pl: "dynia",
    fr: "citrouille, potiron",
    category: "Fruits & Légumes",
    acceptedPl: ["dynia"],
    acceptedFr: ["citrouille", "potiron", "la citrouille"],
    distractorsPl: ["arbuz", "melon", "kalafior"],
    distractorsFr: ["pastèque", "melon", "chou-fleur"]
  },
  {
    id: "veg-27-18",
    date: "2026-10-27",
    pl: "sałata",
    fr: "salade, laitue",
    category: "Fruits & Légumes",
    acceptedPl: ["sałata", "salata"],
    acceptedFr: ["salade", "laitue", "la salade"],
    distractorsPl: ["kapusta", "szpinak", "rzodkiewka"],
    distractorsFr: ["chou", "épinard", "radis"]
  },
  {
    id: "veg-27-19",
    date: "2026-10-27",
    pl: "rzodkiewka",
    fr: "radis",
    category: "Fruits & Légumes",
    acceptedPl: ["rzodkiewka"],
    acceptedFr: ["radis", "le radis", "un radis"],
    distractorsPl: ["marchewka", "burak", "cebula"],
    distractorsFr: ["carotte", "betterave", "oignon"]
  },
  {
    id: "fam-29-1",
    date: "2026-10-29",
    pl: "mama",
    fr: "maman",
    category: "La Famille",
    acceptedPl: ["mama"],
    acceptedFr: ["maman", "la maman", "mère"],
    distractorsPl: ["tata", "babcia", "ciocia"],
    distractorsFr: ["papa", "grand-mère", "tante"]
  },
  {
    id: "fam-29-2",
    date: "2026-10-29",
    pl: "tata",
    fr: "papa",
    category: "La Famille",
    acceptedPl: ["tata"],
    acceptedFr: ["papa", "le papa", "père"],
    distractorsPl: ["mama", "dziadek", "wujek"],
    distractorsFr: ["maman", "grand-père", "oncle"]
  },
  {
    id: "fam-29-3",
    date: "2026-10-29",
    pl: "babcia",
    fr: "grand-mère",
    category: "La Famille",
    acceptedPl: ["babcia"],
    acceptedFr: ["grand-mère", "la grand-mère", "mamie"],
    distractorsPl: ["prababcia", "dziadek", "mama"],
    distractorsFr: ["arrière-grand-mère", "grand-père", "maman"]
  },
  {
    id: "fam-29-4",
    date: "2026-10-29",
    pl: "dziadek",
    fr: "grand-père",
    category: "La Famille",
    acceptedPl: ["dziadek"],
    acceptedFr: ["grand-père", "le grand-père", "papy"],
    distractorsPl: ["pradziadek", "babcia", "tata"],
    distractorsFr: ["arrière-grand-père", "grand-mère", "papa"]
  },
  {
    id: "fam-29-5",
    date: "2026-10-29",
    pl: "prababcia",
    fr: "arrière-grand-mère",
    category: "La Famille",
    acceptedPl: ["prababcia"],
    acceptedFr: ["arrière-grand-mère", "l'arrière-grand-mère", "arriere grand-mere"],
    distractorsPl: ["babcia", "pradziadek", "ciocia"],
    distractorsFr: ["grand-mère", "arrière-grand-père", "tante"]
  },
  {
    id: "fam-29-6",
    date: "2026-10-29",
    pl: "pradziadek",
    fr: "arrière-grand-père",
    category: "La Famille",
    acceptedPl: ["pradziadek"],
    acceptedFr: ["arrière-grand-père", "l'arrière-grand-père", "arriere grand-pere"],
    distractorsPl: ["dziadek", "prababcia", "wujek"],
    distractorsFr: ["grand-père", "arrière-grand-mère", "oncle"]
  },
  {
    id: "fam-29-7",
    date: "2026-10-29",
    pl: "wujek",
    fr: "oncle",
    category: "La Famille",
    acceptedPl: ["wujek"],
    acceptedFr: ["oncle", "l'oncle", "tonton"],
    distractorsPl: ["ciocia", "dziadek", "brat"],
    distractorsFr: ["tante", "grand-père", "frère"]
  },
  {
    id: "fam-29-8",
    date: "2026-10-29",
    pl: "ciocia",
    fr: "tante",
    category: "La Famille",
    acceptedPl: ["ciocia"],
    acceptedFr: ["tante", "la tante", "tatie"],
    distractorsPl: ["wujek", "babcia", "siostra"],
    distractorsFr: ["oncle", "grand-mère", "sœur"]
  },
  {
    id: "fam-29-9",
    date: "2026-10-29",
    pl: "brat",
    fr: "frère",
    category: "La Famille",
    acceptedPl: ["brat"],
    acceptedFr: ["frère", "le frère", "un frère"],
    distractorsPl: ["siostra", "syn", "kuzyn"],
    distractorsFr: ["sœur", "fils", "cousin"]
  },
  {
    id: "fam-29-10",
    date: "2026-10-29",
    pl: "siostra",
    fr: "sœur",
    category: "La Famille",
    acceptedPl: ["siostra"],
    acceptedFr: ["sœur", "soeur", "la sœur", "la soeur"],
    distractorsPl: ["brat", "córka", "kuzynka"],
    distractorsFr: ["frère", "fille", "cousine"]
  },
  {
    id: "fam-29-11",
    date: "2026-10-29",
    pl: "mąż",
    fr: "mari, époux",
    category: "La Famille",
    acceptedPl: ["mąż", "maz"],
    acceptedFr: ["mari", "époux", "le mari", "l'époux"],
    distractorsPl: ["żona", "ojciec", "wujek"],
    distractorsFr: ["femme", "père", "oncle"]
  },
  {
    id: "fam-29-12",
    date: "2026-10-29",
    pl: "żona",
    fr: "femme, épouse",
    category: "La Famille",
    acceptedPl: ["żona", "zona"],
    acceptedFr: ["femme", "épouse", "la femme", "l'épouse"],
    distractorsPl: ["mąż", "matka", "ciocia"],
    distractorsFr: ["mari", "mère", "tante"]
  },
  {
    id: "fam-29-13",
    date: "2026-10-29",
    pl: "kuzyn",
    fr: "cousin",
    category: "La Famille",
    acceptedPl: ["kuzyn"],
    acceptedFr: ["cousin", "le cousin", "un cousin"],
    distractorsPl: ["kuzynka", "brat", "wujek"],
    distractorsFr: ["cousine", "frère", "oncle"]
  },
  {
    id: "fam-29-14",
    date: "2026-10-29",
    pl: "kuzynka",
    fr: "cousine",
    category: "La Famille",
    acceptedPl: ["kuzynka"],
    acceptedFr: ["cousine", "la cousine", "une cousine"],
    distractorsPl: ["kuzyn", "siostra", "ciocia"],
    distractorsFr: ["cousin", "sœur", "tante"]
  },
  {
    id: "fam-29-15",
    date: "2026-10-29",
    pl: "żona kuzyna",
    fr: "la femme du cousin",
    category: "La Famille",
    acceptedPl: ["żona kuzyna", "zona kuzyna"],
    acceptedFr: ["la femme du cousin", "femme du cousin", "l'épouse du cousin"],
    distractorsPl: ["mąż kuzynki", "siostra kuzyna", "żona brata"],
    distractorsFr: ["le mari de la cousine", "la sœur du cousin", "la femme du frère"]
  },
  {
    id: "fam-29-16",
    date: "2026-10-29",
    pl: "syn",
    fr: "fils",
    category: "La Famille",
    acceptedPl: ["syn"],
    acceptedFr: ["fils", "le fils", "un fils"],
    distractorsPl: ["córka", "brat", "wnuk"],
    distractorsFr: ["fille", "frère", "petit-fils"]
  },
  {
    id: "fam-29-17",
    date: "2026-10-29",
    pl: "córka",
    fr: "fille (enfant)",
    category: "La Famille",
    acceptedPl: ["córka", "corka"],
    acceptedFr: ["fille", "la fille", "une fille"],
    distractorsPl: ["syn", "siostra", "wnuczka"],
    distractorsFr: ["fils", "sœur", "petite-fille"]
  },
  {
    id: "fam-29-18",
    date: "2026-10-29",
    pl: "bratanek",
    fr: "neveu (fils du frère)",
    category: "La Famille",
    acceptedPl: ["bratanek"],
    acceptedFr: ["neveu", "neveu (fils du frère)", "le neveu"],
    distractorsPl: ["bratanica", "siostrzeniec", "kuzyn"],
    distractorsFr: ["nièce (fille du frère)", "neveu (fils de la sœur)", "cousin"]
  },
  {
    id: "fam-29-19",
    date: "2026-10-29",
    pl: "bratanica",
    fr: "nièce (fille du frère)",
    category: "La Famille",
    acceptedPl: ["bratanica"],
    acceptedFr: ["nièce", "nièce (fille du frère)", "la nièce"],
    distractorsPl: ["bratanek", "siostrzenica", "kuzynka"],
    distractorsFr: ["neveu (fils du frère)", "nièce (fille de la sœur)", "cousine"]
  },
  {
    id: "fam-29-20",
    date: "2026-10-29",
    pl: "siostrzeniec",
    fr: "neveu (fils de la sœur)",
    category: "La Famille",
    acceptedPl: ["siostrzeniec"],
    acceptedFr: ["neveu", "neveu (fils de la sœur)", "le neveu"],
    distractorsPl: ["siostrzenica", "bratanek", "syn"],
    distractorsFr: ["nièce (fille de la sœur)", "neveu (fils du frère)", "fils"]
  },
  {
    id: "fam-29-21",
    date: "2026-10-29",
    pl: "siostrzenica",
    fr: "nièce (fille de la sœur)",
    category: "La Famille",
    acceptedPl: ["siostrzenica"],
    acceptedFr: ["nièce", "nièce (fille de la sœur)", "la nièce"],
    distractorsPl: ["siostrzeniec", "bratanica", "córka"],
    distractorsFr: ["neveu (fils de la sœur)", "nièce (fille du frère)", "fille"]
  },
  {
    id: "fam-29-22",
    date: "2026-10-29",
    pl: "jedynak",
    fr: "fils unique",
    category: "La Famille",
    acceptedPl: ["jedynak"],
    acceptedFr: ["fils unique", "un fils unique", "enfant unique"],
    distractorsPl: ["jedynaczka", "bliźniak", "syn"],
    distractorsFr: ["fille unique", "jumeau", "fils"]
  },
  {
    id: "fam-29-23",
    date: "2026-10-29",
    pl: "jedynaczka",
    fr: "fille unique",
    category: "La Famille",
    acceptedPl: ["jedynaczka"],
    acceptedFr: ["fille unique", "une fille unique", "enfant unique"],
    distractorsPl: ["jedynak", "bliźniaczka", "córka"],
    distractorsFr: ["fils unique", "jumelle", "fille"]
  },
  {
    id: "fam-29-24",
    date: "2026-10-29",
    pl: "Mąż Anny ma na imię Henryk.",
    fr: "Le mari d'Anna s'appelle Henryk.",
    category: "La Famille",
    acceptedPl: ["Mąż Anny ma na imię Henryk", "Maz Anny ma na imie Henryk"],
    acceptedFr: ["Le mari d'Anna s'appelle Henryk", "Le mari d'Anna est Henryk"],
    distractorsPl: ["Brat Anny ma na imię Henryk.", "Syn Anny ma na imię Henryk.", "Ojciec Anny ma na imię Henryk."],
    distractorsFr: ["Le frère d'Anna s'appelle Henryk.", "Le fils d'Anna s'appelle Henryk.", "Le père d'Anna s'appelle Henryk."]
  },
  {
    id: "fam-29-25",
    date: "2026-10-29",
    pl: "Jak ma na imię mąż Anny?",
    fr: "Comment s'appelle le mari d'Anna ?",
    category: "La Famille",
    acceptedPl: ["Jak ma na imię mąż Anny?", "Jak ma na imie maz Anny?"],
    acceptedFr: ["Comment s'appelle le mari d'Anna ?", "Quel est le nom du mari d'Anna ?"],
    distractorsPl: ["Jak ma na imię brat Anny?", "Kim jest mąż Anny?", "Gdzie mieszka mąż Anny?"],
    distractorsFr: ["Comment s'appelle le frère d'Anna ?", "Qui est le mari d'Anna ?", "Où habite le mari d'Anna ?"]
  },
  {
    id: "fam-29-26",
    date: "2026-10-29",
    pl: "Mam dwóch braci.",
    fr: "J'ai deux frères.",
    category: "La Famille",
    acceptedPl: ["Mam dwóch braci", "Mam dwoch braci"],
    acceptedFr: ["J'ai deux frères", "J'ai 2 frères"],
    distractorsPl: ["Mam dwie siostry.", "Mam dwóch synów.", "Mam dwóch kuzynów."],
    distractorsFr: ["J'ai deux sœurs.", "J'ai deux fils.", "J'ai deux cousins."]
  },
  {
    id: "fam-29-27",
    date: "2026-10-29",
    pl: "Mam dużo kuzynów i kuzynek.",
    fr: "J'ai beaucoup de cousins et de cousines.",
    category: "La Famille",
    acceptedPl: ["Mam dużo kuzynów i kuzynek", "Mam duzo kuzynow i kuzynek"],
    acceptedFr: ["J'ai beaucoup de cousins et de cousines", "J'ai beaucoup de cousins et cousines"],
    distractorsPl: ["Mam mało kuzynów i kuzynek.", "Nie mam kuzynów ani kuzynek.", "Mam wielu braci i sióstr."],
    distractorsFr: ["J'ai peu de cousins et de cousines.", "Je n'ai pas de cousins ni de cousines.", "J'ai beaucoup de frères et sœurs."]
  },
  {
    id: "fam-29-28",
    date: "2026-10-29",
    pl: "Mój ulubiony kuzyn",
    fr: "Mon cousin préféré",
    category: "La Famille",
    acceptedPl: ["Mój ulubiony kuzyn", "Moj ulubiony kuzyn"],
    acceptedFr: ["Mon cousin préféré", "Mon cousin prefere"],
    distractorsPl: ["Moja ulubiona kuzynka", "Mój ulubiony brat", "Mój najlepszy przyjaciel"],
    distractorsFr: ["Ma cousine préférée", "Mon frère préféré", "Mon meilleur ami"]
  },
  {
    id: "fam-29-29",
    date: "2026-10-29",
    pl: "Moja ulubiona kuzynka",
    fr: "Ma cousine préférée",
    category: "La Famille",
    acceptedPl: ["Moja ulubiona kuzynka"],
    acceptedFr: ["Ma cousine préférée", "Ma cousine preferee"],
    distractorsPl: ["Mój ulubiony kuzyn", "Moja ulubiona siostra", "Moja najlepsza przyjaciółka"],
    distractorsFr: ["Mon cousin préféré", "Ma sœur préférée", "Ma meilleure amie"]
  },
  {
    id: "fam-29-30",
    date: "2026-10-29",
    pl: "Którego lubisz najbardziej?",
    fr: "Lequel préfères-tu ?",
    category: "La Famille",
    acceptedPl: ["Którego lubisz najbardziej?", "Ktorego lubisz najbardziej?"],
    acceptedFr: ["Lequel préfères-tu ?", "Lequel aimes-tu le plus ?", "Qui préfères-tu ?"],
    distractorsPl: ["Co lubisz najbardziej?", "Gdzie lubisz jeździć?", "Kiedy przyjedziesz?"],
    distractorsFr: ["Qu'aimes-tu le plus ?", "Où aimes-tu aller ?", "Quand viens-tu ?"]
  },
  {
    id: "trav-29-1",
    date: "2026-10-29",
    pl: "Pracujesz dzisiaj?",
    fr: "Tu travailles aujourd'hui ?",
    category: "Phrases & Quotidien",
    acceptedPl: ["Pracujesz dzisiaj?"],
    acceptedFr: ["Tu travailles aujourd'hui ?", "Travailles-tu aujourd'hui ?"],
    distractorsPl: ["Gdzie pracujesz dzisiaj?", "Co robisz dzisiaj?", "Odpoczywasz dzisiaj?"],
    distractorsFr: ["Où travailles-tu aujourd'hui ?", "Que fais-tu aujourd'hui ?", "Tu te reposes aujourd'hui ?"]
  },
  {
    id: "trav-29-2",
    date: "2026-10-29",
    pl: "Tak, pracuję.",
    fr: "Oui, je travaille.",
    category: "Phrases & Quotidien",
    acceptedPl: ["Tak, pracuję", "Tak, pracuje"],
    acceptedFr: ["Oui, je travaille", "Oui je travaille"],
    distractorsPl: ["Nie, nie pracuję.", "Tak, studiuję.", "Nie, odpoczywam."],
    distractorsFr: ["Non, je ne travaille pas.", "Oui, j'étudie.", "Non, je me repose."]
  },
  {
    id: "trav-29-3",
    date: "2026-10-29",
    pl: "Ile godzin?",
    fr: "Combien d'heures ?",
    category: "Phrases & Quotidien",
    acceptedPl: ["Ile godzin?"],
    acceptedFr: ["Combien d'heures ?", "Combien d heures ?"],
    distractorsPl: ["Która godzina?", "Ile kosztuje?", "Ile masz lat?"],
    distractorsFr: ["Quelle heure est-il ?", "Combien ça coûte ?", "Quel âge as-tu ?"]
  },
  {
    id: "trav-29-4",
    date: "2026-10-29",
    pl: "godzina",
    fr: "heure",
    category: "Phrases & Quotidien",
    acceptedPl: ["godzina"],
    acceptedFr: ["heure", "l'heure", "une heure"],
    distractorsPl: ["minuta", "dzień", "rok"],
    distractorsFr: ["minute", "jour", "année"]
  },
  {
    id: "trav-29-5",
    date: "2026-10-29",
    pl: "to zależy",
    fr: "ça dépend",
    category: "Phrases & Quotidien",
    acceptedPl: ["to zależy", "to zalezy"],
    acceptedFr: ["ça dépend", "ca depend"],
    distractorsPl: ["to możliwe", "to prawda", "to dobrze"],
    distractorsFr: ["c'est possible", "c'est vrai", "c'est bien"]
  },
  {
    id: "trav-29-6",
    date: "2026-10-29",
    pl: "mniej więcej",
    fr: "plus ou moins, environ",
    category: "Phrases & Quotidien",
    acceptedPl: ["mniej więcej", "mniej wiecej"],
    acceptedFr: ["plus ou moins", "environ", "à peu près"],
    distractorsPl: ["bardzo dużo", "bardzo mało", "dokładnie tak"],
    distractorsFr: ["beaucoup", "très peu", "exactement comme ça"]
  },
  {
    id: "trav-29-7",
    date: "2026-10-29",
    pl: "do",
    fr: "jusqu'à, vers",
    category: "Phrases & Quotidien",
    acceptedPl: ["do"],
    acceptedFr: ["jusqu'à", "vers", "à", "en direction de"],
    distractorsPl: ["od", "z", "bez"],
    distractorsFr: ["depuis", "de / avec", "sans"]
  },
  {
    id: "trav-29-8",
    date: "2026-10-29",
    pl: "kraj",
    fr: "pays",
    category: "Phrases & Quotidien",
    acceptedPl: ["kraj"],
    acceptedFr: ["pays", "le pays", "un pays"],
    distractorsPl: ["miasto", "ulica", "świat"],
    distractorsFr: ["ville", "rue", "monde"]
  },
  {
    id: "trav-29-9",
    date: "2026-10-29",
    pl: "Urodziłem się w tysiąc dziewięćset dziewięćdziesiąt dziewiątym.",
    fr: "Je suis né en 1999.",
    category: "Phrases & Quotidien",
    acceptedPl: ["Urodziłem się w tysiąc dziewięćset dziewięćdziesiąt dziewiątym", "Urodzilem sie w tysiac dziewiecset dziewiecdziesiat dziewiatym"],
    acceptedFr: ["Je suis né en 1999", "Je suis ne en 1999"],
    distractorsPl: ["Urodziłem się w dwa tysiące dwudziestym.", "Mam dwadzieścia pięć lat.", "Urodziłem się w Nicei."],
    distractorsFr: ["Je suis né en 2020.", "J'ai 25 ans.", "Je suis né à Nice."]
  },
  {
    id: "trav-29-10",
    date: "2026-10-29",
    pl: "Jestem z Francji, z Nicei.",
    fr: "Je viens de France, de Nice.",
    category: "Phrases & Quotidien",
    acceptedPl: ["Jestem z Francji, z Nicei"],
    acceptedFr: ["Je viens de France, de Nice", "Je suis de France, de Nice"],
    distractorsPl: ["Mieszkam w Paryżu.", "Jestem z Polski, z Warszawy.", "Lecę do Francji."],
    distractorsFr: ["J'habite à Paris.", "Je viens de Pologne, de Varsovie.", "Je vole vers la France."]
  },
  {
    id: "trav-29-11",
    date: "2026-10-29",
    pl: "Mieszkam w Paryżu.",
    fr: "J'habite à Paris.",
    category: "Phrases & Quotidien",
    acceptedPl: ["Mieszkam w Paryżu", "Mieszkam w Paryzu"],
    acceptedFr: ["J'habite à Paris", "J'habite a Paris", "Je vis à Paris"],
    distractorsPl: ["Mieszkam w Nicei.", "Mieszkam w Warszawie.", "Jestem w Paryżu."],
    distractorsFr: ["J'habite à Nice.", "J'habite à Varsovie.", "Je suis à Paris."]
  },
  {
    id: "trav-29-12",
    date: "2026-10-29",
    pl: "Mówię po francusku i trochę po polsku.",
    fr: "Je parle français et un peu polonais.",
    category: "Phrases & Quotidien",
    acceptedPl: ["Mówię po francusku i trochę po polsku", "Mowie po francusku i troche po polsku"],
    acceptedFr: ["Je parle français et un peu polonais", "Je parle francais et un peu polonais"],
    distractorsPl: ["Mówię tylko po angielsku.", "Uczę się hiszpańskiego.", "Znam biegle język polski."],
    distractorsFr: ["Je parle seulement anglais.", "J'apprends l'espagnol.", "Je parle couramment la langue polonaise."]
  },
  {
    id: "trav-29-13",
    date: "2026-10-29",
    pl: "Dlaczego uczysz się polskiego?",
    fr: "Pourquoi apprends-tu le polonais ?",
    category: "Phrases & Quotidien",
    acceptedPl: ["Dlaczego uczysz się polskiego?", "Dlaczego uczysz sie polskiego?"],
    acceptedFr: ["Pourquoi apprends-tu le polonais ?", "Pourquoi tu apprends le polonais ?"],
    distractorsPl: ["Jak długo uczysz się polskiego?", "Gdzie uczysz się polskiego?", "Czy lubisz język polski?"],
    distractorsFr: ["Depuis combien de temps apprends-tu le polonais ?", "Où apprends-tu le polonais ?", "Aimes-tu la langue polonaise ?"]
  },
  {
    id: "trav-29-14",
    date: "2026-10-29",
    pl: "Uczę się polskiego, bo moja dziewczyna jest Polką.",
    fr: "J'apprends le polonais parce que ma copine est polonaise.",
    category: "Phrases & Quotidien",
    acceptedPl: ["Uczę się polskiego, bo moja dziewczyna jest Polką", "Ucze sie polskiego, bo moja dziewczyna jest Polka"],
    acceptedFr: ["J'apprends le polonais parce que ma copine est polonaise", "J'apprends le polonais car ma copine est polonaise"],
    distractorsPl: ["Uczę się polskiego dla mojej pracy.", "Moja dziewczyna uczy się francuskiego.", "Mieszkam w Polsce od roku."],
    distractorsFr: ["J'apprends le polonais pour mon travail.", "Ma copine apprend le français.", "J'habite en Pologne depuis un an."]
  },
  {
    id: "fam-29-31",
    date: "2026-10-29",
    pl: "Polka",
    fr: "une Polonaise",
    category: "Phrases & Quotidien",
    acceptedPl: ["Polka"],
    acceptedFr: ["une Polonaise", "Polonaise", "la Polonaise"],
    distractorsPl: ["Polak", "Francuzka", "Hiszpanka"],
    distractorsFr: ["un Polonais", "une Française", "une Espagnole"]
  },
  {
    id: "fam-29-32",
    date: "2026-10-29",
    pl: "Polak",
    fr: "un Polonais",
    category: "Phrases & Quotidien",
    acceptedPl: ["Polak"],
    acceptedFr: ["un Polonais", "Polonais", "le Polonais"],
    distractorsPl: ["Polka", "Francuz", "Hiszpan"],
    distractorsFr: ["une Polonaise", "un Français", "un Espagnol"]
  },
  {
    id: "trav-29-15",
    date: "2026-10-29",
    pl: "Jestem Francuzem, jestem Polakiem.",
    fr: "Je suis Français, je suis Polonais.",
    category: "Phrases & Quotidien",
    acceptedPl: ["Jestem Francuzem, jestem Polakiem"],
    acceptedFr: ["Je suis Français, je suis Polonais", "Je suis Francais, je suis Polonais"],
    distractorsPl: ["Jestem z Francji i z Polski.", "Jestem Francuzką, jestem Polką.", "Mówię po francusku i po polsku."],
    distractorsFr: ["Je viens de France et de Pologne.", "Je suis Française, je suis Polonaise.", "Je parle français et polonais."]
  },
  {
    id: "trav-29-16",
    date: "2026-10-29",
    pl: "Mam dwa psy i lubię podróżować.",
    fr: "J'ai deux chiens et j'aime voyager.",
    category: "Phrases & Quotidien",
    acceptedPl: ["Mam dwa psy i lubię podróżować", "Mam dwa psy i lubie podrozowac"],
    acceptedFr: ["J'ai deux chiens et j'aime voyager", "J'ai 2 chiens et j'aime voyager"],
    distractorsPl: ["Mam jednego kota i lubię czytać.", "Mam dwa koty i lubię gotować.", "Nie mam zwierząt."],
    distractorsFr: ["J'ai un chat et j'aime lire.", "J'ai deux chats et j'aime cuisiner.", "Je n'ai pas d'animaux."]
  },
  {
    id: "sklep-29-1",
    date: "2026-10-29",
    pl: "Szukam chleba.",
    fr: "Je cherche du pain.",
    category: "Nourriture & Café",
    acceptedPl: ["Szukam chleba"],
    acceptedFr: ["Je cherche du pain", "Je cherche le pain"],
    distractorsPl: ["Kupuję chleb.", "Poproszę chleb.", "Gdzie jest mleko?"],
    distractorsFr: ["J'achète du pain.", "Du pain, s'il vous plaît.", "Où est le lait ?"]
  },
  {
    id: "sklep-29-2",
    date: "2026-10-29",
    pl: "Chleb jest tam, po prawej stronie.",
    fr: "Le pain est là-bas, sur le côté droit.",
    category: "Nourriture & Café",
    acceptedPl: ["Chleb jest tam, po prawej stronie"],
    acceptedFr: ["Le pain est là-bas, sur le côté droit", "Le pain est la-bas a droite"],
    distractorsPl: ["Chleb jest po lewej stronie.", "Chleb jest obok kasy.", "Nie ma już chleba."],
    distractorsFr: ["Le pain est sur le côté gauche.", "Le pain est à côté de la caisse.", "Il n'y a plus de pain."]
  },
  {
    id: "sklep-29-3",
    date: "2026-10-29",
    pl: "Gdzie są owoce?",
    fr: "Où sont les fruits ?",
    category: "Nourriture & Café",
    acceptedPl: ["Gdzie są owoce?", "Gdzie sa owoce?"],
    acceptedFr: ["Où sont les fruits ?", "Ou sont les fruits ?"],
    distractorsPl: ["Gdzie są warzywa?", "Ile kosztują owoce?", "Czy są świeże owoce?"],
    distractorsFr: ["Où sont les légumes ?", "Combien coûtent les fruits ?", "Y a-t-il des fruits frais ?"]
  },
  {
    id: "sklep-29-4",
    date: "2026-10-29",
    pl: "Owoce są obok warzyw.",
    fr: "Les fruits sont à côté des légumes.",
    category: "Nourriture & Café",
    acceptedPl: ["Owoce są obok warzyw", "Owoce sa obok warzyw"],
    acceptedFr: ["Les fruits sont à côté des légumes", "Les fruits sont a cote des legumes"],
    distractorsPl: ["Owoce są obok pieczywa.", "Warzywa są po prawej stronie.", "Owoce są daleko."],
    distractorsFr: ["Les fruits sont à côté des pains.", "Les légumes sont à droite.", "Les fruits sont loin."]
  },
  {
    id: "sklep-29-5",
    date: "2026-10-29",
    pl: "Poproszę kilogram jabłek.",
    fr: "Un kilo de pommes, s'il vous plaît.",
    category: "Nourriture & Café",
    acceptedPl: ["Poproszę kilogram jabłek", "Poprosze kilogram jablek"],
    acceptedFr: ["Un kilo de pommes, s'il vous plaît", "Un kilo de pommes s'il vous plait"],
    distractorsPl: ["Poproszę dwa kilogramy jabłek.", "Poproszę kilo truskawek.", "Ile kosztuje kilogram jabłek?"],
    distractorsFr: ["Deux kilos de pommes, s'il vous plaît.", "Un kilo de fraises, s'il vous plaît.", "Combien coûte un kilo de pommes ?"]
  },
  {
    id: "sklep-29-6",
    date: "2026-10-29",
    pl: "Ile kosztują jabłka?",
    fr: "Combien coûtent les pommes ?",
    category: "Nourriture & Café",
    acceptedPl: ["Ile kosztują jabłka?", "Ile kosztuja jablka?"],
    acceptedFr: ["Combien coûtent les pommes ?", "Combien coutent les pommes ?"],
    distractorsPl: ["Ile kosztuje chleb?", "Czy to są jabłka?", "Gdzie są jabłka?"],
    distractorsFr: ["Combien coûte le pain ?", "Est-ce que ce sont des pommes ?", "Où sont les pommes ?"]
  },
  {
    id: "sklep-29-7",
    date: "2026-10-29",
    pl: "obok",
    fr: "à côté de",
    category: "Nourriture & Café",
    acceptedPl: ["obok"],
    acceptedFr: ["à côté de", "a cote de", "à côté"],
    distractorsPl: ["daleko od", "przed", "za"],
    distractorsFr: ["loin de", "devant", "derrière"]
  },
  {
    id: "sklep-29-8",
    date: "2026-10-29",
    pl: "Szukam truskawek.",
    fr: "Je cherche des fraises.",
    category: "Nourriture & Café",
    acceptedPl: ["Szukam truskawek"],
    acceptedFr: ["Je cherche des fraises", "Je cherche les fraises"],
    distractorsPl: ["Kupuję truskawki.", "Lubię truskawki.", "Szukam jabłek."],
    distractorsFr: ["J'achète des fraises.", "J'aime les fraises.", "Je cherche des pommes."]
  },
  {
    id: "sklep-29-9",
    date: "2026-10-29",
    pl: "obok jabłek",
    fr: "à côté des pommes",
    category: "Nourriture & Café",
    acceptedPl: ["obok jabłek", "obok jablek"],
    acceptedFr: ["à côté des pommes", "a cote des pommes"],
    distractorsPl: ["obok warzyw", "obok chleba", "obok kasy"],
    distractorsFr: ["à côté des légumes", "à côté du pain", "à côté de la caisse"]
  },
  {
    id: "sklep-29-10",
    date: "2026-10-29",
    pl: "po prawej stronie",
    fr: "sur le côté droit, à droite",
    category: "Phrases & Quotidien",
    acceptedPl: ["po prawej stronie", "po prawej"],
    acceptedFr: ["sur le côté droit", "à droite", "sur la droite"],
    distractorsPl: ["po lewej stronie", "na wprost", "z tyłu"],
    distractorsFr: ["sur le côté gauche", "tout droit", "à l'arrière"]
  },
  {
    id: "sklep-29-11",
    date: "2026-10-29",
    pl: "po lewej stronie",
    fr: "sur le côté gauche, à gauche",
    category: "Phrases & Quotidien",
    acceptedPl: ["po lewej stronie", "po lewej"],
    acceptedFr: ["sur le côté gauche", "à gauche", "sur la gauche"],
    distractorsPl: ["po prawej stronie", "na wprost", "obok"],
    distractorsFr: ["sur le côté droit", "tout droit", "à côté"]
  },
  {
    id: "sklep-29-12",
    date: "2026-10-29",
    pl: "Niektórzy mówią, że pomidor to owoc.",
    fr: "Certains disent que la tomate est un fruit.",
    category: "Phrases & Quotidien",
    acceptedPl: ["Niektórzy mówią, że pomidor to owoc", "Niektorzy mowia, ze pomidor to owoc"],
    acceptedFr: ["Certains disent que la tomate est un fruit", "Certaines personnes disent que la tomate est un fruit"],
    distractorsPl: ["Wszyscy wiedzą, że pomidor to warzywo.", "Myślę, że pomidor to owoc.", "Pomidor to czerwone warzywo."],
    distractorsFr: ["Tout le monde sait que la tomate est un légume.", "Je pense que la tomate est un fruit.", "La tomate est un légume rouge."]
  },
  {
    id: "sklep-29-13",
    date: "2026-10-29",
    pl: "niektórzy",
    fr: "certains, quelques-uns",
    category: "Phrases & Quotidien",
    acceptedPl: ["niektórzy", "niektorzy"],
    acceptedFr: ["certains", "quelques-uns", "certaines personnes"],
    distractorsPl: ["wszyscy", "nikt", "każdy"],
    distractorsFr: ["tous", "personne", "chacun"]
  },
  {
    id: "sklep-29-14",
    date: "2026-10-29",
    pl: "Co myślisz?",
    fr: "Qu'en penses-tu ?",
    category: "Phrases & Quotidien",
    acceptedPl: ["Co myślisz?", "Co myslisz?"],
    acceptedFr: ["Qu'en penses-tu ?", "Qu'est-ce que tu en penses ?", "Que penses-tu ?"],
    distractorsPl: ["Co robisz?", "Co mówisz?", "Co wiesz?"],
    distractorsFr: ["Que fais-tu ?", "Que dis-tu ?", "Que sais-tu ?"]
  },
  {
    id: "sklep-29-15",
    date: "2026-10-29",
    pl: "myśleć",
    fr: "penser, réfléchir",
    category: "Phrases & Quotidien",
    acceptedPl: ["myśleć", "myslec"],
    acceptedFr: ["penser", "réfléchir"],
    distractorsPl: ["mówić", "wiedzieć", "widzieć"],
    distractorsFr: ["parler", "savoir", "voir"]
  },
  {
    id: "sklep-29-16",
    date: "2026-10-29",
    pl: "Myślę, że...",
    fr: "Je pense que...",
    category: "Phrases & Quotidien",
    acceptedPl: ["Myślę, że", "Mysle, ze"],
    acceptedFr: ["Je pense que", "Je trouve que"],
    distractorsPl: ["Wiem, że...", "Mówię, że...", "Widzę, że..."],
    distractorsFr: ["Je sais que...", "Je dis que...", "Je vois que..."]
  },
  {
    id: "sklep-29-17",
    date: "2026-10-29",
    pl: "warzywa",
    fr: "les légumes",
    category: "Nourriture & Café",
    acceptedPl: ["warzywa"],
    acceptedFr: ["légumes", "les légumes", "legumes"],
    distractorsPl: ["owoce", "pieczywo", "napoje"],
    distractorsFr: ["fruits", "pains", "boissons"]
  },
  {
    id: "vet-3-1",
    date: "2026-11-03",
    pl: "ubrania",
    fr: "vêtements, habits",
    category: "Vêtements & Mode",
    acceptedPl: ["ubrania"],
    acceptedFr: ["vêtements", "habits", "les vêtements", "vetements"],
    distractorsPl: ["buty", "akcesoria", "płaszcze"],
    distractorsFr: ["chaussures", "accessoires", "manteaux"]
  },
  {
    id: "vet-3-2",
    date: "2026-11-03",
    pl: "koszula",
    fr: "chemise",
    category: "Vêtements & Mode",
    acceptedPl: ["koszula"],
    acceptedFr: ["chemise", "la chemise", "une chemise"],
    distractorsPl: ["koszulka", "sukienka", "kurtka"],
    distractorsFr: ["t-shirt", "robe", "veste"]
  },
  {
    id: "vet-3-3",
    date: "2026-11-03",
    pl: "czapka z daszkiem",
    fr: "casquette",
    category: "Vêtements & Mode",
    acceptedPl: ["czapka z daszkiem", "czapka"],
    acceptedFr: ["casquette", "la casquette", "une casquette"],
    distractorsPl: ["kapelusz", "pasek", "szalik"],
    distractorsFr: ["chapeau", "ceinture", "écharpe"]
  },
  {
    id: "vet-3-4",
    date: "2026-11-03",
    pl: "krawat",
    fr: "cravate",
    category: "Vêtements & Mode",
    acceptedPl: ["krawat"],
    acceptedFr: ["cravate", "la cravate", "une cravate"],
    distractorsPl: ["pasek", "szalik", "zegarek"],
    distractorsFr: ["ceinture", "écharpe", "montre"]
  },
  {
    id: "vet-3-5",
    date: "2026-11-03",
    pl: "marynarka",
    fr: "veste de costume, blazer",
    category: "Vêtements & Mode",
    acceptedPl: ["marynarka"],
    acceptedFr: ["veste", "veste de costume", "blazer", "la veste"],
    distractorsPl: ["płaszcz", "kurtka", "koszula"],
    distractorsFr: ["manteau", "blouson", "chemise"]
  },
  {
    id: "vet-3-6",
    date: "2026-11-03",
    pl: "zegarek",
    fr: "montre",
    category: "Vêtements & Mode",
    acceptedPl: ["zegarek"],
    acceptedFr: ["montre", "la montre", "une montre"],
    distractorsPl: ["okulary", "pasek", "telefon"],
    distractorsFr: ["lunettes", "ceinture", "téléphone"]
  },
  {
    id: "vet-3-7",
    date: "2026-11-03",
    pl: "spodnie",
    fr: "pantalon",
    category: "Vêtements & Mode",
    acceptedPl: ["spodnie"],
    acceptedFr: ["pantalon", "le pantalon", "un pantalon"],
    distractorsPl: ["krótkie spodenki", "spódnica", "majtki"],
    distractorsFr: ["short", "jupe", "culotte"]
  },
  {
    id: "vet-3-8",
    date: "2026-11-03",
    pl: "sweter",
    fr: "pull, pull-over",
    category: "Vêtements & Mode",
    acceptedPl: ["sweter"],
    acceptedFr: ["pull", "pull-over", "le pull", "un pull"],
    distractorsPl: ["bluza", "koszula", "kurtka"],
    distractorsFr: ["sweat", "chemise", "veste"]
  },
  {
    id: "vet-3-9",
    date: "2026-11-03",
    pl: "bluza",
    fr: "sweat, sweat à capuche",
    category: "Vêtements & Mode",
    acceptedPl: ["bluza"],
    acceptedFr: ["sweat", "sweat à capuche", "le sweat", "un sweat"],
    distractorsPl: ["sweter", "kurtka", "koszulka"],
    distractorsFr: ["pull", "veste", "t-shirt"]
  },
  {
    id: "vet-3-10",
    date: "2026-11-03",
    pl: "krótkie spodenki",
    fr: "short, bermuda",
    category: "Vêtements & Mode",
    acceptedPl: ["krótkie spodenki", "krotkie spodenki", "spodenki"],
    acceptedFr: ["short", "le short", "bermuda", "un short"],
    distractorsPl: ["spodnie", "spódnica", "majtki"],
    distractorsFr: ["pantalon", "jupe", "sous-vêtements"]
  },
  {
    id: "vet-3-11",
    date: "2026-11-03",
    pl: "skarpetki",
    fr: "chaussettes",
    category: "Vêtements & Mode",
    acceptedPl: ["skarpetki"],
    acceptedFr: ["chaussettes", "les chaussettes", "des chaussettes"],
    distractorsPl: ["buty", "trampki", "szpilki"],
    distractorsFr: ["chaussures", "baskets", "talons hauts"]
  },
  {
    id: "vet-3-12",
    date: "2026-11-03",
    pl: "trampki",
    fr: "baskets, tennis",
    category: "Vêtements & Mode",
    acceptedPl: ["trampki"],
    acceptedFr: ["baskets", "tennis", "les baskets", "des baskets"],
    distractorsPl: ["buty zimowe", "szpilki", "sandały"],
    distractorsFr: ["chaussures d'hiver", "escarpins", "sandales"]
  },
  {
    id: "vet-3-13",
    date: "2026-11-03",
    pl: "buty zimowe",
    fr: "chaussures d'hiver, bottes",
    category: "Vêtements & Mode",
    acceptedPl: ["buty zimowe", "buty"],
    acceptedFr: ["chaussures d'hiver", "bottes", "bottes d'hiver", "chaussures d hiver"],
    distractorsPl: ["trampki", "szpilki", "skarpetki"],
    distractorsFr: ["baskets", "talons", "chaussettes"]
  },
  {
    id: "vet-3-14",
    date: "2026-11-03",
    pl: "kapelusz",
    fr: "chapeau",
    category: "Vêtements & Mode",
    acceptedPl: ["kapelusz"],
    acceptedFr: ["chapeau", "le chapeau", "un chapeau"],
    distractorsPl: ["czapka z daszkiem", "chusta", "okulary"],
    distractorsFr: ["casquette", "foulard", "lunettes"]
  },
  {
    id: "vet-3-15",
    date: "2026-11-03",
    pl: "koszulka",
    fr: "t-shirt, maillot",
    category: "Vêtements & Mode",
    acceptedPl: ["koszulka", "T-shirt", "t-shirt"],
    acceptedFr: ["t-shirt", "le t-shirt", "un t-shirt", "maillot"],
    distractorsPl: ["koszula", "bluza", "sukienka"],
    distractorsFr: ["chemise", "sweat", "robe"]
  },
  {
    id: "vet-3-16",
    date: "2026-11-03",
    pl: "okulary przeciwsłoneczne",
    fr: "lunettes de soleil",
    category: "Vêtements & Mode",
    acceptedPl: ["okulary przeciwsłoneczne", "okulary przeciwsloneczne", "okulary"],
    acceptedFr: ["lunettes de soleil", "les lunettes de soleil", "lunettes"],
    distractorsPl: ["zegarek", "kapelusz", "pasek"],
    distractorsFr: ["montre", "chapeau", "ceinture"]
  },
  {
    id: "vet-3-17",
    date: "2026-11-03",
    pl: "sukienka",
    fr: "robe",
    category: "Vêtements & Mode",
    acceptedPl: ["sukienka"],
    acceptedFr: ["robe", "la robe", "une robe"],
    distractorsPl: ["spódnica", "koszula", "bluza"],
    distractorsFr: ["jupe", "chemise", "sweat"]
  },
  {
    id: "vet-3-18",
    date: "2026-11-03",
    pl: "płaszcz",
    fr: "manteau",
    category: "Vêtements & Mode",
    acceptedPl: ["płaszcz", "plasDisplay"],
    acceptedFr: ["manteau", "le manteau", "un manteau"],
    distractorsPl: ["kurtka", "marynarka", "sweter"],
    distractorsFr: ["blouson", "veste", "pull"]
  },
  {
    id: "vet-3-19",
    date: "2026-11-03",
    pl: "strój kąpielowy",
    fr: "maillot de bain",
    category: "Vêtements & Mode",
    acceptedPl: ["strój kąpielowy", "stroj kapielowy"],
    acceptedFr: ["maillot de bain", "le maillot de bain", "un maillot de bain"],
    distractorsPl: ["krótkie spodenki", "sukienka", "majtki"],
    distractorsFr: ["short", "robe", "culotte"]
  },
  {
    id: "vet-3-20",
    date: "2026-11-03",
    pl: "kurtka",
    fr: "veste, blouson",
    category: "Vêtements & Mode",
    acceptedPl: ["kurtka"],
    acceptedFr: ["veste", "blouson", "la veste", "un blouson"],
    distractorsPl: ["płaszcz", "marynarka", "sweter"],
    distractorsFr: ["manteau", "blazer", "pull"]
  },
  {
    id: "vet-3-21",
    date: "2026-11-03",
    pl: "majtki",
    fr: "culotte, sous-vêtements",
    category: "Vêtements & Mode",
    acceptedPl: ["majtki"],
    acceptedFr: ["culotte", "sous-vêtements", "la culotte", "les sous-vêtements"],
    distractorsPl: ["skarpetki", "spodnie", "strój kąpielowy"],
    distractorsFr: ["chaussettes", "pantalon", "maillot de bain"]
  },
  {
    id: "vet-3-22",
    date: "2026-11-03",
    pl: "pasek",
    fr: "ceinture",
    category: "Vêtements & Mode",
    acceptedPl: ["pasek"],
    acceptedFr: ["ceinture", "la ceinture", "une ceinture"],
    distractorsPl: ["krawat", "szalik", "zegarek"],
    distractorsFr: ["cravate", "écharpe", "montre"]
  },
  {
    id: "vet-3-23",
    date: "2026-11-03",
    pl: "spódnica",
    fr: "jupe",
    category: "Vêtements & Mode",
    acceptedPl: ["spódnica", "spodnica"],
    acceptedFr: ["jupe", "la jupe", "une jupe"],
    distractorsPl: ["sukienka", "spodnie", "koszula"],
    distractorsFr: ["robe", "pantalon", "chemise"]
  },
  {
    id: "vet-3-24",
    date: "2026-11-03",
    pl: "torebka",
    fr: "sac à main",
    category: "Vêtements & Mode",
    acceptedPl: ["torebka"],
    acceptedFr: ["sac à main", "le sac à main", "un sac à main", "sac a main"],
    distractorsPl: ["plecak", "walizka", "pasek"],
    distractorsFr: ["sac à dos", "valise", "ceinture"]
  },
  {
    id: "vet-3-25",
    date: "2026-11-03",
    pl: "szpilki",
    fr: "talons hauts, escarpins",
    category: "Vêtements & Mode",
    acceptedPl: ["szpilki"],
    acceptedFr: ["talons hauts", "escarpins", "les talons hauts", "chaussures à talons"],
    distractorsPl: ["trampki", "buty zimowe", "skarpetki"],
    distractorsFr: ["baskets", "bottes d'hiver", "chaussettes"]
  },
  {
    id: "phr-3-1",
    date: "2026-11-03",
    pl: "Mam duży plecak.",
    fr: "J'ai un grand sac à dos.",
    category: "Phrases & Quotidien",
    acceptedPl: ["Mam duży plecak", "Mam duzy plecak"],
    acceptedFr: ["J'ai un grand sac à dos", "J'ai un grand sac a dos"],
    distractorsPl: ["Mam mały plecak.", "Mam dwie walizki.", "Gdzie jest mój plecak?"],
    distractorsFr: ["J'ai un petit sac à dos.", "J'ai deux valises.", "Où est mon sac à dos ?"]
  },
  {
    id: "phr-3-2",
    date: "2026-11-03",
    pl: "Wyjście jest tam.",
    fr: "La sortie est là-bas.",
    category: "Phrases & Quotidien",
    acceptedPl: ["Wyjście jest tam", "Wyjscie jest tam"],
    acceptedFr: ["La sortie est là-bas", "La sortie est la-bas", "La sortie est là"],
    distractorsPl: ["Wejście jest po lewej.", "Nie ma wyjścia.", "Gdzie jest wyjście?"],
    distractorsFr: ["L'entrée est à gauche.", "Il n'y a pas d'issue.", "Où est la sortie ?"]
  },
  {
    id: "phr-3-3",
    date: "2026-11-03",
    pl: "Ten długopis jest nieprzydatny.",
    fr: "Ce stylo est inutile.",
    category: "Phrases & Quotidien",
    acceptedPl: ["Ten długopis jest nieprzydatny", "Ten dlugopis jest nieprzydatny"],
    acceptedFr: ["Ce stylo est inutile", "Ce stylo ne sert à rien"],
    distractorsPl: ["Ten długopis jest nowy.", "To jest mój długopis.", "Ładowarka jest nieprzydatna."],
    distractorsFr: ["Ce stylo est neuf.", "C'est mon stylo.", "Le chargeur est inutile."]
  },
  {
    id: "phr-3-4",
    date: "2026-11-03",
    pl: "nieprzydatny",
    fr: "inutile",
    category: "Adjectifs",
    acceptedPl: ["nieprzydatny"],
    acceptedFr: ["inutile"],
    distractorsPl: ["przydatny", "nowoczesny", "trudny"],
    distractorsFr: ["utile", "moderne", "difficile"]
  },
  {
    id: "phr-3-5",
    date: "2026-11-03",
    pl: "Nie działa.",
    fr: "Ça ne marche pas, il ne fonctionne pas.",
    category: "Phrases & Quotidien",
    acceptedPl: ["Nie działa", "Nie dziala"],
    acceptedFr: ["Ça ne marche pas", "Il ne fonctionne pas", "Ca ne marche pas", "Ça ne fonctionne pas"],
    distractorsPl: ["Wszystko działa.", "Nie wiem.", "Nie ma problemu."],
    distractorsFr: ["Tout fonctionne.", "Je ne sais pas.", "Il n'y a pas de problème."]
  },
  {
    id: "phr-3-6",
    date: "2026-11-03",
    pl: "niestety",
    fr: "malheureusement",
    category: "Phrases & Quotidien",
    acceptedPl: ["niestety"],
    acceptedFr: ["malheureusement", "hélas"],
    distractorsPl: ["na szczęście", "oczywiście", "na pewno"],
    distractorsFr: ["heureusement", "bien sûr", "certainement"]
  },
  {
    id: "phr-3-7",
    date: "2026-11-03",
    pl: "na szczęście",
    fr: "heureusement, par chance",
    category: "Phrases & Quotidien",
    acceptedPl: ["na szczęście", "na szczescie"],
    acceptedFr: ["heureusement", "par chance"],
    distractorsPl: ["niestety", "być może", "szkoda"],
    distractorsFr: ["malheureusement", "peut-être", "dommage"]
  },
  {
    id: "phr-3-8",
    date: "2026-11-03",
    pl: "Ile godzin pracujesz?",
    fr: "Combien d'heures travailles-tu ?",
    category: "Phrases & Quotidien",
    acceptedPl: ["Ile godzin pracujesz?"],
    acceptedFr: ["Combien d'heures travailles-tu ?", "Combien d'heures tu travailles ?"],
    distractorsPl: ["Gdzie pracujesz?", "O której pracujesz?", "Pracujesz dzisiaj?"],
    distractorsFr: ["Où travailles-tu ?", "À quelle heure travailles-tu ?", "Travailles-tu aujourd'hui ?"]
  },
  {
    id: "phr-3-9",
    date: "2026-11-03",
    pl: "Mam dwóch braci i jedną siostrę.",
    fr: "J'ai deux frères et une sœur.",
    category: "La Famille",
    acceptedPl: ["Mam dwóch braci i jedną siostrę", "Mam dwoch braci i jedna siostre"],
    acceptedFr: ["J'ai deux frères et une sœur", "J'ai deux frères et une soeur", "J'ai 2 frères et 1 sœur"],
    distractorsPl: ["Mam jednego brata i dwie siostry.", "Mam dwóch synów i jedną córkę.", "Jestem jedynakiem."],
    distractorsFr: ["J'ai un frère et deux sœurs.", "J'ai deux fils et une fille.", "Je suis fils unique."]
  },
  {
    id: "phr-3-10",
    date: "2026-11-03",
    pl: "Moja siostra ma trzydzieści pięć lat.",
    fr: "Ma sœur a trente-cinq ans.",
    category: "La Famille",
    acceptedPl: ["Moja siostra ma trzydzieści pięć lat", "Moja siostra ma 35 lat"],
    acceptedFr: ["Ma sœur a trente-cinq ans", "Ma sœur a 35 ans", "Ma soeur a 35 ans"],
    distractorsPl: ["Moja siostra ma dwadzieścia dwa lata.", "Mój brat ma trzydzieści pięć lat.", "Mam trzydzieści pięć lat."],
    distractorsFr: ["Ma sœur a 22 ans.", "Mon frère a 35 ans.", "J'ai 35 ans."]
  },
  {
    id: "phr-3-11",
    date: "2026-11-03",
    pl: "Mąż Marii ma na imię Pierre.",
    fr: "Le mari de Marie s'appelle Pierre.",
    category: "La Famille",
    acceptedPl: ["Mąż Marii ma na imię Pierre", "Maz Marii ma na imie Pierre"],
    acceptedFr: ["Le mari de Marie s'appelle Pierre", "Le mari de Maria s'appelle Pierre"],
    distractorsPl: ["Brat Marii ma na imię Pierre.", "Mąż Anny ma na imię Henryk.", "Syn Marii ma na imię Pierre."],
    distractorsFr: ["Le frère de Marie s'appelle Pierre.", "Le mari d'Anna s'appelle Henryk.", "Le fils de Marie s'appelle Pierre."]
  },
  {
    id: "phr-3-12",
    date: "2026-11-03",
    pl: "Moja ulubiona kuzynka ma dwadzieścia dwa lata.",
    fr: "Ma cousine préférée a vingt-deux ans.",
    category: "La Famille",
    acceptedPl: ["Moja ulubiona kuzynka ma dwadzieścia dwa lata", "Moja ulubiona kuzynka ma 22 lata"],
    acceptedFr: ["Ma cousine préférée a vingt-deux ans", "Ma cousine préférée a 22 ans", "Ma cousine preferee a 22 ans"],
    distractorsPl: ["Mój ulubiony kuzyn ma dwadzieścia dwa lata.", "Moja siostra ma dwadzieścia dwa lata.", "Moja kuzynka ma trzydzieści lat."],
    distractorsFr: ["Mon cousin préféré a 22 ans.", "Ma sœur a 22 ans.", "Ma cousine a 30 ans."]
  },
  {
    id: "phr-3-13",
    date: "2026-11-03",
    pl: "Szukam truskawek obok jabłek.",
    fr: "Je cherche des fraises à côté des pommes.",
    category: "Nourriture & Café",
    acceptedPl: ["Szukam truskawek obok jabłek", "Szukam truskawek obok jablek"],
    acceptedFr: ["Je cherche des fraises à côté des pommes", "Je cherche des fraises a cote des pommes"],
    distractorsPl: ["Kupuję truskawki i jabłka.", "Owoce są obok warzyw.", "Szukam chleba obok kasy."],
    distractorsFr: ["J'achète des fraises et des pommes.", "Les fruits sont à côté des légumes.", "Je cherche du pain près de la caisse."]
  },
  {
    id: "phr-3-14",
    date: "2026-11-03",
    pl: "Mój brat mieszka po lewej stronie domu.",
    fr: "Mon frère habite à gauche de la maison.",
    category: "La Famille",
    acceptedPl: ["Mój brat mieszka po lewej stronie domu", "Moj brat mieszka po lewej stronie domu"],
    acceptedFr: ["Mon frère habite à gauche de la maison", "Mon frere habite a gauche de la maison"],
    distractorsPl: ["Mój brat mieszka po prawej stronie.", "Mój brat mieszka w Paryżu.", "Moja siostra mieszka blisko domu."],
    distractorsFr: ["Mon frère habite sur le côté droit.", "Mon frère habite à Paris.", "Ma sœur habite près de la maison."]
  },
  {
    id: "phr-3-15",
    date: "2026-11-03",
    pl: "Myślę, że pomidor to owoc.",
    fr: "Je pense que la tomate est un fruit.",
    category: "Phrases & Quotidien",
    acceptedPl: ["Myślę, że pomidor to owoc", "Mysle, ze pomidor to owoc"],
    acceptedFr: ["Je pense que la tomate est un fruit", "Je trouve que la tomate est un fruit"],
    distractorsPl: ["Wiem, że pomidor to warzywo.", "Niektórzy mówią, że pomidor to owoc.", "Pomidor to czerwone warzywo."],
    distractorsFr: ["Je sais que la tomate est un légume.", "Certains disent que la tomate est un fruit.", "La tomate est un légume rouge."]
  },
  {
    id: "dial-3-1",
    date: "2026-11-03",
    pl: "Dzwonię w sprawie spotkania we wtorek.",
    fr: "J'appelle au sujet du rendez-vous de mardi.",
    category: "Phrases & Quotidien",
    acceptedPl: ["Dzwonię w sprawie spotkania we wtorek", "Dzwonie w sprawie spotkania we wtorek"],
    acceptedFr: ["J'appelle au sujet du rendez-vous de mardi", "J'appelle pour la réunion de mardi"],
    distractorsPl: ["Dzwonię w sprawie pracy.", "Spotkajmy się we wtorek.", "Nie mogę przyjść w środę."],
    distractorsFr: ["J'appelle au sujet du travail.", "Retrouvons-nous mardi.", "Je ne peux pas venir mercredi."]
  },
  {
    id: "dial-3-2",
    date: "2026-11-03",
    pl: "Niestety, nie mogę być na tym spotkaniu.",
    fr: "Malheureusement, je ne peux pas être à ce rendez-vous.",
    category: "Phrases & Quotidien",
    acceptedPl: ["Niestety, nie mogę być na tym spotkaniu", "Niestety nie moge byc na tym spotkaniu"],
    acceptedFr: ["Malheureusement, je ne peux pas être à ce rendez-vous", "Malheureusement je ne peux pas assister à cette réunion"],
    distractorsPl: ["Chętnie przyjdę na spotkanie.", "Będę na spotkaniu o jedenastej.", "Niestety, jestem chory."],
    distractorsFr: ["Je viendrai volontiers au rendez-vous.", "Je serai au rendez-vous à 11h.", "Malheureusement, je suis malade."]
  },
  {
    id: "dial-3-3",
    date: "2026-11-03",
    pl: "O, szkoda.",
    fr: "Oh, c'est dommage.",
    category: "Phrases & Quotidien",
    acceptedPl: ["O, szkoda", "O szkoda", "szkoda"],
    acceptedFr: ["Oh, c'est dommage", "C'est dommage", "Quel dommage"],
    distractorsPl: ["To świetnie!", "Doskonale!", "Nic nie szkodzi."],
    distractorsFr: ["C'est super !", "Parfait !", "Ce n'est rien."]
  },
  {
    id: "dial-3-4",
    date: "2026-11-03",
    pl: "Może w innym terminie ma pani czas?",
    fr: "Peut-être avez-vous du temps à une autre date ?",
    category: "Phrases & Quotidien",
    acceptedPl: ["Może w innym terminie ma pani czas?", "Moze w innym terminie ma pani czas?"],
    acceptedFr: ["Peut-être avez-vous du temps à une autre date ?", "Avez-vous du temps à un autre moment ?"],
    distractorsPl: ["Kiedy ma pani czas?", "O której godzinie się spotkamy?", "Czy ma pani dzisiaj czas?"],
    distractorsFr: ["Quand avez-vous du temps ?", "À quelle heure nous voyons-nous ?", "Avez-vous du temps aujourd'hui ?"]
  },
  {
    id: "dial-3-5",
    date: "2026-11-03",
    pl: "Tak, proponuję środę.",
    fr: "Oui, je propose mercredi.",
    category: "Phrases & Quotidien",
    acceptedPl: ["Tak, proponuję środę", "Tak, proponuje srode"],
    acceptedFr: ["Oui, je propose mercredi", "Oui je propose mercredi"],
    distractorsPl: ["Proponuję czwartek.", "W środę nie mogę.", "Może w piątek?"],
    distractorsFr: ["Je propose jeudi.", "Mercredi je ne peux pas.", "Peut-être vendredi ?"]
  },
  {
    id: "dial-3-6",
    date: "2026-11-03",
    pl: "Niestety, w środę cały dzień jestem bardzo zajęty.",
    fr: "Malheureusement, le mercredi toute la journée je suis très occupé.",
    category: "Phrases & Quotidien",
    acceptedPl: ["Niestety, w środę cały dzień jestem bardzo zajęty", "Niestety w srode caly dzien jestem bardzo zajety"],
    acceptedFr: ["Malheureusement, le mercredi toute la journée je suis très occupé", "Le mercredi je suis très occupé toute la journée"],
    distractorsPl: ["W środę mam wolny czas.", "W czwartek jestem zajęty.", "Niestety, pracuję do późna."],
    distractorsFr: ["Mercredi j'ai du temps libre.", "Jeudi je suis occupé.", "Malheureusement, je travaille tard."]
  },
  {
    id: "dial-3-7",
    date: "2026-11-03",
    pl: "Więc może czwartek?",
    fr: "Alors peut-être jeudi ?",
    category: "Phrases & Quotidien",
    acceptedPl: ["Więc może czwartek?", "Wiec moze czwartek?"],
    acceptedFr: ["Alors peut-être jeudi ?", "Donc peut-être jeudi ?"],
    distractorsPl: ["Więc może piątek?", "Kiedy pani pasuje?", "Do zobaczenia w czwartek!"],
    distractorsFr: ["Alors peut-être vendredi ?", "Quand cela vous convient-il ?", "À jeudi !"]
  },
  {
    id: "dial-3-8",
    date: "2026-11-03",
    pl: "Tak, w czwartek mam czas. O jedenastej?",
    fr: "Oui, le jeudi j'ai le temps. À onze heures ?",
    category: "Phrases & Quotidien",
    acceptedPl: ["Tak, w czwartek mam czas. O jedenastej?", "Tak w czwartek mam czas. O jedenastej?"],
    acceptedFr: ["Oui, le jeudi j'ai le temps. À onze heures ?", "Oui jeudi j'ai le temps. À 11h ?"],
    distractorsPl: ["Nie, w czwartek nie mogę.", "O jedenastej mam spotkanie.", "Tak, w piątek o dziesiątej."],
    distractorsFr: ["Non, jeudi je ne peux pas.", "À 11h j'ai une réunion.", "Oui, vendredi à 10h."]
  },
  {
    id: "dial-3-9",
    date: "2026-11-03",
    pl: "Doskonale. Dziękuję i jeszcze raz przepraszam.",
    fr: "Parfait. Merci et encore une fois pardon.",
    category: "Phrases & Quotidien",
    acceptedPl: ["Doskonale. Dziękuję i jeszcze raz przepraszam", "Doskonale. Dziekuje i jeszcze raz przepraszam"],
    acceptedFr: ["Parfait. Merci et encore une fois pardon", "Excellent. Merci et pardon encore une fois"],
    distractorsPl: ["Bardzo dziękuję. Do widzenia.", "Nie ma za co, do zobaczenia.", "Przepraszam za spóźnienie."],
    distractorsFr: ["Merci beaucoup. Au revoir.", "De rien, à bientôt.", "Désolé pour le retard."]
  },
  {
    id: "dial-3-10",
    date: "2026-11-03",
    pl: "Nic nie szkodzi.",
    fr: "Ce n'est rien, pas de souci.",
    category: "Phrases & Quotidien",
    acceptedPl: ["Nic nie szkodzi"],
    acceptedFr: ["Ce n'est rien", "Pas de souci", "Ça ne fait rien", "Ca ne fait rien"],
    distractorsPl: ["Nie ma sprawy.", "Szkoda.", "Oczywiście."],
    distractorsFr: ["Pas de problème.", "Dommage.", "Bien sûr."]
  },
  {
    id: "dial-3-11",
    date: "2026-11-03",
    pl: "nic się nie stało",
    fr: "ce n'est rien, rien de grave",
    category: "Phrases & Quotidien",
    acceptedPl: ["nic się nie stało", "nic sie nie stalo"],
    acceptedFr: ["ce n'est rien", "rien de grave", "ce n'est pas grave"],
    distractorsPl: ["co się stało?", "wszystko w porządku", "to prawda"],
    distractorsFr: ["que s'est-il passé ?", "tout va bien", "c'est vrai"]
  },
  {
    id: "dial-3-12",
    date: "2026-11-03",
    pl: "dzwonić",
    fr: "appeler, téléphoner",
    category: "Phrases & Quotidien",
    acceptedPl: ["dzwonić", "dzwonic"],
    acceptedFr: ["appeler", "téléphoner"],
    distractorsPl: ["mówić", "pytać", "pisać"],
    distractorsFr: ["parler", "demander", "écrire"]
  },
  {
    id: "dial-3-13",
    date: "2026-11-03",
    pl: "spotkanie",
    fr: "réunion, rendez-vous",
    category: "Phrases & Quotidien",
    acceptedPl: ["spotkanie"],
    acceptedFr: ["réunion", "rendez-vous", "la réunion", "le rendez-vous"],
    distractorsPl: ["praca", "rozmowa", "wykład"],
    distractorsFr: ["travail", "conversation", "conférence"]
  },
  {
    id: "dial-3-14",
    date: "2026-11-03",
    pl: "termin",
    fr: "date, créneau, échéance",
    category: "Phrases & Quotidien",
    acceptedPl: ["termin"],
    acceptedFr: ["date", "créneau", "échéance", "le créneau"],
    distractorsPl: ["godzina", "miejsce", "adres"],
    distractorsFr: ["heure", "lieu", "adresse"]
  },
  {
    id: "dial-3-15",
    date: "2026-11-03",
    pl: "proponować",
    fr: "proposer",
    category: "Phrases & Quotidien",
    acceptedPl: ["proponować", "proponowac"],
    acceptedFr: ["proposer"],
    distractorsPl: ["pytać", "odpowiadać", "zgadzać się"],
    distractorsFr: ["demander", "répondre", "être d'accord"]
  },
  {
    id: "dial-3-16",
    date: "2026-11-03",
    pl: "cały dzień",
    fr: "toute la journée",
    category: "Phrases & Quotidien",
    acceptedPl: ["cały dzień", "caly dzien"],
    acceptedFr: ["toute la journée", "toute la journee"],
    distractorsPl: ["cały tydzień", "pół dnia", "dzisiaj rano"],
    distractorsFr: ["toute la semaine", "une demi-journée", "ce matin"]
  },
  {
    id: "dial-3-17",
    date: "2026-11-03",
    pl: "zajęty",
    fr: "occupé (personne ou ligne)",
    category: "Adjectifs",
    acceptedPl: ["zajęty", "zajety"],
    acceptedFr: ["occupé", "occupe"],
    distractorsPl: ["wolny", "zmęczony", "zadowolony"],
    distractorsFr: ["libre", "fatigué", "content"]
  },
  {
    id: "dial-3-18",
    date: "2026-11-03",
    pl: "spotykać się",
    fr: "se rencontrer, se voir",
    category: "Phrases & Quotidien",
    acceptedPl: ["spotykać się", "spotykac sie"],
    acceptedFr: ["se rencontrer", "se voir"],
    distractorsPl: ["rozmawiać", "dzwonić", "widzieć"],
    distractorsFr: ["discuter", "appeler", "voir"]
  },
  {
    id: "lidl-3-1",
    date: "2026-11-03",
    pl: "olej rzepakowy",
    fr: "huile de colza",
    category: "Nourriture & Café",
    acceptedPl: ["olej rzepakowy", "olej"],
    acceptedFr: ["huile de colza", "l'huile de colza", "huile"],
    distractorsPl: ["oliwa z oliwek", "masło", "mleko"],
    distractorsFr: ["huile d'olive", "beurre", "lait"]
  },
  {
    id: "lidl-3-2",
    date: "2026-11-03",
    pl: "banany luzem",
    fr: "bananes en vrac",
    category: "Nourriture & Café",
    acceptedPl: ["banany luzem", "banany"],
    acceptedFr: ["bananes en vrac", "bananes", "les bananes"],
    distractorsPl: ["jabłka", "pomarańcze", "truskawki"],
    distractorsFr: ["pommes", "oranges", "fraises"]
  },
  {
    id: "lidl-3-3",
    date: "2026-11-03",
    pl: "luzem",
    fr: "en vrac",
    category: "Nourriture & Café",
    acceptedPl: ["luzem"],
    acceptedFr: ["en vrac"],
    distractorsPl: ["w paczce", "w plastrach", "na wagę"],
    distractorsFr: ["en paquet", "en tranches", "au poids"]
  },
  {
    id: "lidl-3-4",
    date: "2026-11-03",
    pl: "pomidory truskawkowe",
    fr: "tomates cerises allongées",
    category: "Nourriture & Café",
    acceptedPl: ["pomidory truskawkowe", "pomidory"],
    acceptedFr: ["tomates cerises", "tomates cerises allongées", "tomates"],
    distractorsPl: ["ogórki", "papryka", "marchewka"],
    distractorsFr: ["concombres", "poivron", "carotte"]
  },
  {
    id: "lidl-3-5",
    date: "2026-11-03",
    pl: "ser gouda w plastrach",
    fr: "fromage gouda en tranches",
    category: "Nourriture & Café",
    acceptedPl: ["ser gouda w plastrach", "ser w plastrach", "gouda"],
    acceptedFr: ["gouda en tranches", "fromage gouda en tranches", "fromage en tranches"],
    distractorsPl: ["masło", "twaróg", "szynka"],
    distractorsFr: ["beurre", "fromage blanc", "jambon"]
  },
  {
    id: "lidl-3-6",
    date: "2026-11-03",
    pl: "w plastrach",
    fr: "en tranches",
    category: "Nourriture & Café",
    acceptedPl: ["w plastrach"],
    acceptedFr: ["en tranches"],
    distractorsPl: ["w kawałku", "luzem", "w kostce"],
    distractorsFr: ["en morceau", "en vrac", "en dés"]
  },
  {
    id: "lidl-3-7",
    date: "2026-11-03",
    pl: "łopatka wieprzowa",
    fr: "palette / épaule de porc",
    category: "Nourriture & Café",
    acceptedPl: ["łopatka wieprzowa", "lopatka wieprzowa"],
    acceptedFr: ["palette de porc", "épaule de porc", "porc", "viande de porc"],
    distractorsPl: ["pierś z kurczaka", "wołowina", "kiełbasa"],
    distractorsFr: ["blanc de poulet", "bœuf", "saucisse"]
  },
  {
    id: "lidl-3-8",
    date: "2026-11-03",
    pl: "taniej",
    fr: "moins cher (comparatif de tanio)",
    category: "Nourriture & Café",
    acceptedPl: ["taniej"],
    acceptedFr: ["moins cher", "en réduction", "meilleur marché"],
    distractorsPl: ["drożej", "szybciej", "lepiej"],
    distractorsFr: ["plus cher", "plus vite", "mieux"]
  },
  {
    id: "lidl-3-9",
    date: "2026-11-03",
    pl: "pięć złotych osiemdziesiąt dziewięć groszy",
    fr: "5,89 zł (cinq zlotys quatre-vingt-neuf groszy)",
    category: "Nombres",
    acceptedPl: ["pięć złotych osiemdziesiąt dziewięć groszy", "piec zlotych osiemdziesiat dziewiec groszy", "5,89 zł"],
    acceptedFr: ["5,89 zł", "cinq zlotys quatre-vingt-neuf groszy", "cinq zloty quatre vingt neuf"],
    distractorsPl: ["pięć złotych dziewięćdziesiąt groszy", "cztery złote osiemdziesiąt groszy", "sześć złotych osiemdziesiąt dziewięć groszy"],
    distractorsFr: ["5,90 zł", "4,80 zł", "6,89 zł"]
  },
  {
    id: "lidl-3-10",
    date: "2026-11-03",
    pl: "trzy złote czterdzieści dziewięć groszy",
    fr: "3,49 zł (trois zlotys quarante-neuf groszy)",
    category: "Nombres",
    acceptedPl: ["trzy złote czterdzieści dziewięć groszy", "trzy zlote czterdziesci dziewiec groszy", "3,49 zł"],
    acceptedFr: ["3,49 zł", "trois zlotys quarante-neuf groszy", "trois zloty quarante neuf"],
    distractorsPl: ["trzy złote pięćdziesiąt groszy", "dwa złote czterdzieści dziewięć groszy", "cztery złote czterdzieści dziewięć groszy"],
    distractorsFr: ["3,50 zł", "2,49 zł", "4,49 zł"]
  },
  {
    id: "lidl-3-11",
    date: "2026-11-03",
    pl: "siedem złotych dziewięćdziesiąt dziewięć groszy",
    fr: "7,99 zł (sept zlotys quatre-vingt-dix-neuf groszy)",
    category: "Nombres",
    acceptedPl: ["siedem złotych dziewięćdziesiąt dziewięć groszy", "siedem zlotych dziewiecdziesiat dziewiec groszy", "7,99 zł"],
    acceptedFr: ["7,99 zł", "sept zlotys quatre-vingt-dix-neuf groszy", "sept zloty quatre vingt dix neuf"],
    distractorsPl: ["osiem złotych", "siedem złotych osiemdziesiąt dziewięć groszy", "sześć złotych dziewięćdziesiąt dziewięć groszy"],
    distractorsFr: ["8,00 zł", "7,89 zł", "6,99 zł"]
  },
  {
    id: "lidl-3-12",
    date: "2026-11-03",
    pl: "aż",
    fr: "jusqu'à, pas moins de, autant que",
    category: "Phrases & Quotidien",
    acceptedPl: ["aż", "az"],
    acceptedFr: ["jusqu'à", "pas moins de", "autant que"],
    distractorsPl: ["tylko", "prawie", "mniej"],
    distractorsFr: ["seulement", "presque", "moins"]
  },
  {
    id: "adj-3-1",
    date: "2026-11-03",
    pl: "jesienny",
    fr: "automnal, d'automne",
    category: "Adjectifs",
    acceptedPl: ["jesienny"],
    acceptedFr: ["automnal", "d'automne", "de l'automne"],
    distractorsPl: ["zimowy", "wiosenny", "letni"],
    distractorsFr: ["hivernal", "printanier", "estival"]
  },
  {
    id: "adj-3-2",
    date: "2026-11-03",
    pl: "zimowy",
    fr: "hivernal, d'hiver",
    category: "Adjectifs",
    acceptedPl: ["zimowy"],
    acceptedFr: ["hivernal", "d'hiver", "de l'hiver"],
    distractorsPl: ["letni", "jesienny", "wiosenny"],
    distractorsFr: ["estival", "automnal", "printanier"]
  },
  {
    id: "adj-3-3",
    date: "2026-11-03",
    pl: "wiosenny",
    fr: "printanier, de printemps",
    category: "Adjectifs",
    acceptedPl: ["wiosenny"],
    acceptedFr: ["printanier", "de printemps", "du printemps"],
    distractorsPl: ["jesienny", "zimowy", "letni"],
    distractorsFr: ["automnal", "hivernal", "estival"]
  },
  {
    id: "adj-3-4",
    date: "2026-11-03",
    pl: "letni",
    fr: "estival, d'été",
    category: "Adjectifs",
    acceptedPl: ["letni"],
    acceptedFr: ["estival", "d'été", "de l'été"],
    distractorsPl: ["zimowy", "jesienny", "wiosenny"],
    distractorsFr: ["hivernal", "automnal", "printanier"]
  },
  {
    id: "day-3-1",
    date: "2026-11-03",
    pl: "we wtorek",
    fr: "mardi, le mardi",
    category: "Jours de la semaine",
    acceptedPl: ["we wtorek"],
    acceptedFr: ["mardi", "le mardi"],
    distractorsPl: ["w środę", "w czwartek", "w poniedziałek"],
    distractorsFr: ["mercredi", "jeudi", "lundi"]
  },
  {
    id: "day-3-2",
    date: "2026-11-03",
    pl: "w środę",
    fr: "mercredi, le mercredi",
    category: "Jours de la semaine",
    acceptedPl: ["w środę", "w srode"],
    acceptedFr: ["mercredi", "le mercredi"],
    distractorsPl: ["we wtorek", "w czwartek", "w piątek"],
    distractorsFr: ["mardi", "jeudi", "vendredi"]
  },
  {
    id: "day-3-3",
    date: "2026-11-03",
    pl: "w czwartek",
    fr: "jeudi, le jeudi",
    category: "Jours de la semaine",
    acceptedPl: ["w czwartek"],
    acceptedFr: ["jeudi", "le jeudi"],
    distractorsPl: ["w środę", "w piątek", "we wtorek"],
    distractorsFr: ["mercredi", "vendredi", "mardi"]
  },
  // ==========================================
  // 17. COURS DU 05/11/2026 (ROUTINE, HABITS, TOUSSAINT & ANDRZEJKI)
  // ==========================================
  {
    "id": "phr-5-1",
    "date": "2026-11-05",
    "pl": "Jadłeś śniadanie?",
    "fr": "As-tu pris le petit-déjeuner ?",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "Jadłeś śniadanie?",
      "Jadles sniadanie?"
    ],
    "acceptedFr": [
      "As-tu pris le petit-déjeuner ?",
      "As-tu mangé le petit-déjeuner ?",
      "Tu as mangé le petit déjeuner ?"
    ],
    "distractorsPl": [
      "Co jesz na śniadanie?",
      "Chcesz śniadanie?",
      "Gdzie jesz obiad?"
    ],
    "distractorsFr": [
      "Que manges-tu au petit-déjeuner ?",
      "Tu veux un petit-déjeuner ?",
      "Où déjeunes-tu ?"
    ]
  },
  {
    "id": "phr-5-2",
    "date": "2026-11-05",
    "pl": "jeszcze nie",
    "fr": "pas encore",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "jeszcze nie"
    ],
    "acceptedFr": [
      "pas encore",
      "non pas encore"
    ],
    "distractorsPl": [
      "już tak",
      "na pewno nie",
      "teraz nie"
    ],
    "distractorsFr": [
      "déjà oui",
      "certainement pas",
      "pas maintenant"
    ]
  },
  {
    "id": "phr-5-3",
    "date": "2026-11-05",
    "pl": "Nie jest źle.",
    "fr": "Ce n'est pas mal, ça ne va pas mal.",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "Nie jest źle",
      "Nie jest zle"
    ],
    "acceptedFr": [
      "Ce n'est pas mal",
      "Ça ne va pas mal",
      "Pas mal",
      "Ca ne va pas mal"
    ],
    "distractorsPl": [
      "Jest bardzo źle.",
      "Wszystko w porządku.",
      "Nie ma problemu."
    ],
    "distractorsFr": [
      "C'est très mauvais.",
      "Tout va bien.",
      "Il n'y a pas de problème."
    ]
  },
  {
    "id": "phr-5-4",
    "date": "2026-11-05",
    "pl": "Jakie jest twoje ulubione zwierzę?",
    "fr": "Quel est ton animal préféré ?",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "Jakie jest twoje ulubione zwierzę?",
      "Jakie jest twoje ulubione zwierze?"
    ],
    "acceptedFr": [
      "Quel est ton animal préféré ?",
      "Quel est votre animal préféré ?"
    ],
    "distractorsPl": [
      "Masz jakieś zwierzęta?",
      "Jaki jest twój ulubiony pies?",
      "Czy lubisz zwierzęta?"
    ],
    "distractorsFr": [
      "As-tu des animaux ?",
      "Quel est ton chien préféré ?",
      "Aimes-tu les animaux ?"
    ]
  },
  {
    "id": "phr-5-5",
    "date": "2026-11-05",
    "pl": "zwierzę",
    "fr": "animal",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "zwierzę",
      "zwierze"
    ],
    "acceptedFr": [
      "animal",
      "l'animal",
      "un animal"
    ],
    "distractorsPl": [
      "pies",
      "kot",
      "ptak"
    ],
    "distractorsFr": [
      "chien",
      "chat",
      "oiseau"
    ]
  },
  {
    "id": "phr-5-6",
    "date": "2026-11-05",
    "pl": "zwierzęta",
    "fr": "animaux, les animaux",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "zwierzęta",
      "zwierzeta"
    ],
    "acceptedFr": [
      "animaux",
      "les animaux",
      "des animaux"
    ],
    "distractorsPl": [
      "psy",
      "koty",
      "ludzie"
    ],
    "distractorsFr": [
      "chiens",
      "chats",
      "gens"
    ]
  },
  {
    "id": "phr-5-7",
    "date": "2026-11-05",
    "pl": "Moje ulubione zwierzęta to moje psy.",
    "fr": "Mes animaux préférés sont mes chiens.",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "Moje ulubione zwierzęta to moje psy",
      "Moje ulubione zwierzeta to moje psy"
    ],
    "acceptedFr": [
      "Mes animaux préférés sont mes chiens",
      "Mes animaux preferes sont mes chiens"
    ],
    "distractorsPl": [
      "Mój ulubiony pies to labrador.",
      "Mam dwa koty i psa.",
      "Lubię wszystkie zwierzęta."
    ],
    "distractorsFr": [
      "Mon chien préféré est le labrador.",
      "J'ai deux chats et un chien.",
      "J'aime tous les animaux."
    ]
  },
  {
    "id": "phr-5-8",
    "date": "2026-11-05",
    "pl": "Ulica jest brudna.",
    "fr": "La rue est sale.",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "Ulica jest brudna"
    ],
    "acceptedFr": [
      "La rue est sale",
      "Une rue est sale"
    ],
    "distractorsPl": [
      "Ulica jest czysta.",
      "Ulica jest długa.",
      "Miasto jest brudne."
    ],
    "distractorsFr": [
      "La rue est propre.",
      "La rue est longue.",
      "La ville est sale."
    ]
  },
  {
    "id": "phr-5-9",
    "date": "2026-11-05",
    "pl": "zostawać",
    "fr": "rester, demeurer",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "zostawać",
      "zostawac"
    ],
    "acceptedFr": [
      "rester",
      "demeurer"
    ],
    "distractorsPl": [
      "wychodzić",
      "jechać",
      "wracać"
    ],
    "distractorsFr": [
      "sortir",
      "aller en transport",
      "revenir"
    ]
  },
  {
    "id": "phr-5-10",
    "date": "2026-11-05",
    "pl": "Dzisiaj pogoda nie jest ładna, więc zostaję w domu cały dzień.",
    "fr": "Aujourd'hui le temps n'est pas beau, donc je reste à la maison toute la journée.",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "Dzisiaj pogoda nie jest ładna, więc zostaję w domu cały dzień",
      "Dzisiaj pogoda nie jest ladna, wiec zostaje w domu caly dzien"
    ],
    "acceptedFr": [
      "Aujourd'hui le temps n'est pas beau, donc je reste à la maison toute la journée",
      "Il ne fait pas beau aujourd'hui, donc je reste à la maison toute la journée"
    ],
    "distractorsPl": [
      "Pogoda jest świetna, więc idę na spacer.",
      "Dzisiaj pada deszcz, ale idę do pracy.",
      "Zostaję w domu tylko rano."
    ],
    "distractorsFr": [
      "Le temps est superbe, donc je vais me promener.",
      "Aujourd'hui il pleut, mais je vais au travail.",
      "Je reste à la maison seulement le matin."
    ]
  },
  {
    "id": "phr-5-11",
    "date": "2026-11-05",
    "pl": "w domu",
    "fr": "à la maison, chez soi",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "w domu"
    ],
    "acceptedFr": [
      "à la maison",
      "chez soi",
      "a la maison"
    ],
    "distractorsPl": [
      "do domu",
      "z domu",
      "przed domem"
    ],
    "distractorsFr": [
      "vers la maison",
      "de la maison",
      "devant la maison"
    ]
  },
  {
    "id": "phr-5-12",
    "date": "2026-11-05",
    "pl": "Możesz dzwonić do Marii?",
    "fr": "Tu peux appeler Marie ?",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "Możesz dzwonić do Marii?",
      "Mozesz dzwonic do Marii?"
    ],
    "acceptedFr": [
      "Tu peux appeler Marie ?",
      "Peux-tu téléphoner à Marie ?"
    ],
    "distractorsPl": [
      "Dzwonisz do Piotra?",
      "Czy Maria dzwoniła?",
      "Kiedy zadzwonisz do Marii?"
    ],
    "distractorsFr": [
      "Tu appelles Piotr ?",
      "Est-ce que Marie a appelé ?",
      "Quand appelleras-tu Marie ?"
    ]
  },
  {
    "id": "phr-5-13",
    "date": "2026-11-05",
    "pl": "Chcę ją spotkać w piątek.",
    "fr": "Je veux la rencontrer vendredi.",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "Chcę ją spotkać w piątek",
      "Chce ja spotkac w piatek"
    ],
    "acceptedFr": [
      "Je veux la rencontrer vendredi",
      "Je veux la voir vendredi"
    ],
    "distractorsPl": [
      "Chcę go spotkać w piątek.",
      "Spotkamy się w sobotę.",
      "Nie mogę jej spotkać."
    ],
    "distractorsFr": [
      "Je veux le rencontrer vendredi.",
      "Nous nous verrons samedi.",
      "Je ne peux pas la rencontrer."
    ]
  },
  {
    "id": "phr-5-14",
    "date": "2026-11-05",
    "pl": "W środę mamy spotkanie o trzeciej.",
    "fr": "Le mercredi, nous avons un rendez-vous à trois heures.",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "W środę mamy spotkanie o trzeciej",
      "W srode mamy spotkanie o trzeciej"
    ],
    "acceptedFr": [
      "Le mercredi, nous avons un rendez-vous à trois heures",
      "Mercredi nous avons une réunion à 3h"
    ],
    "distractorsPl": [
      "We wtorek mamy spotkanie o pierwszej.",
      "W środę jestem wolny o trzeciej.",
      "Spotkanie jest o czwartej."
    ],
    "distractorsFr": [
      "Mardi nous avons une réunion à une heure.",
      "Mercredi je suis libre à 3h.",
      "Le rendez-vous est à quatre heures."
    ]
  },
  {
    "id": "phr-5-15",
    "date": "2026-11-05",
    "pl": "o pierwszej",
    "fr": "à une heure (1h00)",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "o pierwszej"
    ],
    "acceptedFr": [
      "à une heure",
      "a une heure",
      "à 1h"
    ],
    "distractorsPl": [
      "o drugiej",
      "o trzeciej",
      "o jedenastej"
    ],
    "distractorsFr": [
      "à deux heures",
      "à trois heures",
      "à onze heures"
    ]
  },
  {
    "id": "phr-5-16",
    "date": "2026-11-05",
    "pl": "o drugiej",
    "fr": "à deux heures (2h00)",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "o drugiej"
    ],
    "acceptedFr": [
      "à deux heures",
      "a deux heures",
      "à 2h"
    ],
    "distractorsPl": [
      "o pierwszej",
      "o trzeciej",
      "o czwartej"
    ],
    "distractorsFr": [
      "à une heure",
      "à trois heures",
      "à quatre heures"
    ]
  },
  {
    "id": "phr-5-17",
    "date": "2026-11-05",
    "pl": "o trzeciej",
    "fr": "à trois heures (3h00)",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "o trzeciej"
    ],
    "acceptedFr": [
      "à trois heures",
      "a trois heures",
      "à 3h"
    ],
    "distractorsPl": [
      "o drugiej",
      "o czwartej",
      "o piątej"
    ],
    "distractorsFr": [
      "à deux heures",
      "à quatre heures",
      "à cinq heures"
    ]
  },
  {
    "id": "phr-5-18",
    "date": "2026-11-05",
    "pl": "o czwartej",
    "fr": "à quatre heures (4h00)",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "o czwartej"
    ],
    "acceptedFr": [
      "à quatre heures",
      "a quatre heures",
      "à 4h"
    ],
    "distractorsPl": [
      "o trzeciej",
      "o piątej",
      "o szóstej"
    ],
    "distractorsFr": [
      "à trois heures",
      "à cinq heures",
      "à six heures"
    ]
  },
  {
    "id": "phr-5-19",
    "date": "2026-11-05",
    "pl": "o piątej",
    "fr": "à cinq heures (5h00)",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "o piątej",
      "o piatej"
    ],
    "acceptedFr": [
      "à cinq heures",
      "a cinq heures",
      "à 5h"
    ],
    "distractorsPl": [
      "o czwartej",
      "o szóstej",
      "o pierwszej"
    ],
    "distractorsFr": [
      "à quatre heures",
      "à six heures",
      "à une heure"
    ]
  },
  {
    "id": "vet-5-1",
    "date": "2026-11-05",
    "pl": "nosić",
    "fr": "porter (des vêtements régulièrement)",
    "category": "Vêtements & Mode",
    "acceptedPl": [
      "nosić",
      "nosic"
    ],
    "acceptedFr": [
      "porter",
      "mettre"
    ],
    "distractorsPl": [
      "kupować",
      "przymierzać",
      "mieć"
    ],
    "distractorsFr": [
      "acheter",
      "essayer",
      "avoir"
    ]
  },
  {
    "id": "vet-5-2",
    "date": "2026-11-05",
    "pl": "mieć na sobie",
    "fr": "avoir sur soi, être vêtu de",
    "category": "Vêtements & Mode",
    "acceptedPl": [
      "mieć na sobie",
      "miec na sobie"
    ],
    "acceptedFr": [
      "avoir sur soi",
      "porter",
      "être vêtu de"
    ],
    "distractorsPl": [
      "ubierać się",
      "kupować",
      "nosić w torbie"
    ],
    "distractorsFr": [
      "s'habiller",
      "acheter",
      "porter dans le sac"
    ]
  },
  {
    "id": "vet-5-3",
    "date": "2026-11-05",
    "pl": "W poniedziałek noszę czarne spodnie i czerwony sweter.",
    "fr": "Le lundi, je porte un pantalon noir et un pull rouge.",
    "category": "Vêtements & Mode",
    "acceptedPl": [
      "W poniedziałek noszę czarne spodnie i czerwony sweter",
      "W poniedzialek nosze czarne spodnie i czerwony sweter"
    ],
    "acceptedFr": [
      "Le lundi, je porte un pantalon noir et un pull rouge",
      "Lundi je porte un pantalon noir et un pull rouge"
    ],
    "distractorsPl": [
      "We wtorek noszę białe spodnie i szary sweter.",
      "W poniedziałek noszę czarną koszulę.",
      "Lubię czerwony sweter."
    ],
    "distractorsFr": [
      "Mardi je porte un pantalon blanc et un pull gris.",
      "Lundi je porte une chemise noire.",
      "J'aime le pull rouge."
    ]
  },
  {
    "id": "vet-5-4",
    "date": "2026-11-05",
    "pl": "We wtorek ona nosi niebieską sukienkę i białe buty.",
    "fr": "Le mardi, elle porte une robe bleue et des chaussures blanches.",
    "category": "Vêtements & Mode",
    "acceptedPl": [
      "We wtorek ona nosi niebieską sukienkę i białe buty",
      "We wtorek, ona nosi niebieska sukienke i biale buty"
    ],
    "acceptedFr": [
      "Le mardi, elle porte une robe bleue et des chaussures blanches",
      "Mardi elle porte une robe bleue et des chaussures blanches"
    ],
    "distractorsPl": [
      "W środę ona nosi żółtą sukienkę.",
      "We wtorek on nosi niebieską koszulę.",
      "Ona lubi białe buty."
    ],
    "distractorsFr": [
      "Mercredi elle porte une robe jaune.",
      "Mardi il porte une chemise bleue.",
      "Elle aime les chaussures blanches."
    ]
  },
  {
    "id": "vet-5-5",
    "date": "2026-11-05",
    "pl": "W zimę noszę szary płaszcz i zielony szalik.",
    "fr": "En hiver, je porte un manteau gris et une écharpe verte.",
    "category": "Vêtements & Mode",
    "acceptedPl": [
      "W zimę noszę szary płaszcz i zielony szalik",
      "W zime nosze szary plaszcz i zielony szalik"
    ],
    "acceptedFr": [
      "En hiver, je porte un manteau gris et une écharpe verte",
      "L'hiver je porte un manteau gris et une écharpe verte"
    ],
    "distractorsPl": [
      "W lato noszę żółtą koszulkę.",
      "W zimę noszę czarną kurtkę i czapkę.",
      "Mam szary płaszcz."
    ],
    "distractorsFr": [
      "En été je porte un t-shirt jaune.",
      "En hiver je porte un blouson noir et un bonnet.",
      "J'ai un manteau gris."
    ]
  },
  {
    "id": "vet-5-6",
    "date": "2026-11-05",
    "pl": "szalik",
    "fr": "écharpe, foulard",
    "category": "Vêtements & Mode",
    "acceptedPl": [
      "szalik",
      "szal"
    ],
    "acceptedFr": [
      "écharpe",
      "l'écharpe",
      "une écharpe",
      "foulard"
    ],
    "distractorsPl": [
      "pasek",
      "krawat",
      "czapka"
    ],
    "distractorsFr": [
      "ceinture",
      "cravate",
      "bonnet"
    ]
  },
  {
    "id": "vet-5-7",
    "date": "2026-11-05",
    "pl": "W lato on nosi białe szorty i żółtą koszulkę.",
    "fr": "En été, il porte un short blanc et un tee-shirt jaune.",
    "category": "Vêtements & Mode",
    "acceptedPl": [
      "W lato on nosi białe szorty i żółtą koszulkę",
      "W lato on nosi biale szorty i zolta koszulke"
    ],
    "acceptedFr": [
      "En été, il porte un short blanc et un tee-shirt jaune",
      "L'été il porte des shorts blancs et un t-shirt jaune"
    ],
    "distractorsPl": [
      "W lato on nosi niebieskie spodnie.",
      "W zimę on nosi ciepły sweter.",
      "On ma żółtą koszulkę."
    ],
    "distractorsFr": [
      "En été il porte un pantalon bleu.",
      "En hiver il porte un pull chaud.",
      "Il a un t-shirt jaune."
    ]
  },
  {
    "id": "vet-5-8",
    "date": "2026-11-05",
    "pl": "szorty",
    "fr": "short, bermuda",
    "category": "Vêtements & Mode",
    "acceptedPl": [
      "szorty",
      "krótkie spodenki"
    ],
    "acceptedFr": [
      "short",
      "le short",
      "des shorts"
    ],
    "distractorsPl": [
      "spodnie",
      "spódnica",
      "majtki"
    ],
    "distractorsFr": [
      "pantalon",
      "jupe",
      "sous-vêtements"
    ]
  },
  {
    "id": "vet-5-9",
    "date": "2026-11-05",
    "pl": "Noszę różową spódnicę, bo lubię ten kolor.",
    "fr": "Je porte une jupe rose parce que j'aime cette couleur.",
    "category": "Vêtements & Mode",
    "acceptedPl": [
      "Noszę różową spódnicę, bo lubię ten kolor",
      "Nosze rozowa spodnice, bo lubie ten kolor"
    ],
    "acceptedFr": [
      "Je porte une jupe rose parce que j'aime cette couleur",
      "Je porte une jupe rose car j'aime cette couleur"
    ],
    "distractorsPl": [
      "Noszę niebieską sukienkę.",
      "Lubię czarne spódnice.",
      "Różowy to mój ulubiony kolor."
    ],
    "distractorsFr": [
      "Je porte une robe bleue.",
      "J'aime les jupes noires.",
      "Le rose est ma couleur préférée."
    ]
  },
  {
    "id": "vet-5-10",
    "date": "2026-11-05",
    "pl": "błękitny",
    "fr": "bleu ciel, azur",
    "category": "Couleurs",
    "acceptedPl": [
      "błękitny",
      "blekitny"
    ],
    "acceptedFr": [
      "bleu ciel",
      "azur",
      "bleu clair"
    ],
    "distractorsPl": [
      "niebieski",
      "granatowy",
      "fioletowy"
    ],
    "distractorsFr": [
      "bleu",
      "bleu marine",
      "violet"
    ]
  },
  {
    "id": "vet-5-11",
    "date": "2026-11-05",
    "pl": "torba",
    "fr": "sac, besace, sacoche",
    "category": "Vêtements & Mode",
    "acceptedPl": [
      "torba"
    ],
    "acceptedFr": [
      "sac",
      "le sac",
      "besace",
      "sacoche"
    ],
    "distractorsPl": [
      "torebka",
      "plecak",
      "walizka"
    ],
    "distractorsFr": [
      "sac à main",
      "sac à dos",
      "valise"
    ]
  },
  {
    "id": "vet-5-12",
    "date": "2026-11-05",
    "pl": "On nosi błękitną koszulę, czarne buty i szarą torbę.",
    "fr": "Il porte une chemise bleu ciel, des chaussures noires et un sac gris.",
    "category": "Vêtements & Mode",
    "acceptedPl": [
      "On nosi błękitną koszulę, czarne buty i szarą torbę",
      "On nosi blekitna koszule, czarne buty i szara torbe",
      "On nosi niebieską koszulę, czarne buty, szarą torbę."
    ],
    "acceptedFr": [
      "Il porte une chemise bleu ciel, des chaussures noires et un sac gris",
      "Il porte une chemise bleue, des chaussures noires et un sac gris"
    ],
    "distractorsPl": [
      "On nosi białą koszulę i czarny pasek.",
      "On ma szary plecak i czarne buty.",
      "Ten mężczyzna nosi zieloną koszulkę."
    ],
    "distractorsFr": [
      "Il porte une chemise blanche et une ceinture noire.",
      "Il a un sac à dos gris et des chaussures noires.",
      "Cet homme porte un t-shirt vert."
    ]
  },
  {
    "id": "vet-5-13",
    "date": "2026-11-05",
    "pl": "Ten mężczyzna nosi zieloną koszulkę, brązowe spodnie i czarny pasek.",
    "fr": "Cet homme porte un t-shirt vert, un pantalon marron et une ceinture noire.",
    "category": "Vêtements & Mode",
    "acceptedPl": [
      "Ten mężczyzna nosi zieloną koszulkę, brązowe spodnie i czarny pasek",
      "Ten mezczyzna nosi zielona koszulke, brazowe spodnie i czarny pasek"
    ],
    "acceptedFr": [
      "Cet homme porte un t-shirt vert, un pantalon marron et une ceinture noire",
      "Cet homme porte un tee-shirt vert, pantalon marron et ceinture noire"
    ],
    "distractorsPl": [
      "Ten mężczyzna nosi niebieską koszulę.",
      "On nosi czarne spodnie i zielony sweter.",
      "Mężczyzna ma brązowe buty."
    ],
    "distractorsFr": [
      "Cet homme porte une chemise bleue.",
      "Il porte un pantalon noir et un pull vert.",
      "L'homme a des chaussures marron."
    ]
  },
  {
    "id": "vet-5-14",
    "date": "2026-11-05",
    "pl": "Brunetka nosi czerwoną sukienkę, czarne szpilki i czerwoną torebkę.",
    "fr": "La brune porte une robe rouge, des escarpins noirs et un sac à main rouge.",
    "category": "Vêtements & Mode",
    "acceptedPl": [
      "Brunetka nosi czerwoną sukienkę, czarne szpilki i czerwoną torebkę",
      "Brunetka nosi czerwona sukienke, czarne szpilki i czerwona torebke"
    ],
    "acceptedFr": [
      "La brune porte une robe rouge, des escarpins noirs et un sac à main rouge",
      "La brune porte une robe rouge, des talons noirs et un sac rouge"
    ],
    "distractorsPl": [
      "Blondynka nosi czerwoną sukienkę.",
      "Brunetka nosi czarną spódnicę i szpilki.",
      "Ona ma czerwoną torebkę i trampki."
    ],
    "distractorsFr": [
      "La blonde porte une robe rouge.",
      "La brune porte une jupe noire et des escarpins.",
      "Elle a un sac à main rouge et des baskets."
    ]
  },
  {
    "id": "vet-5-15",
    "date": "2026-11-05",
    "pl": "brunetka",
    "fr": "une brune, femme aux cheveux bruns",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "brunetka"
    ],
    "acceptedFr": [
      "une brune",
      "brune",
      "femme brune"
    ],
    "distractorsPl": [
      "blondynka",
      "szatynka",
      "dziewczyna"
    ],
    "distractorsFr": [
      "une blonde",
      "une châtaine",
      "une fille"
    ]
  },
  {
    "id": "vet-5-16",
    "date": "2026-11-05",
    "pl": "blondynka",
    "fr": "une blonde, femme aux cheveux blonds",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "blondynka"
    ],
    "acceptedFr": [
      "une blonde",
      "blonde",
      "femme blonde"
    ],
    "distractorsPl": [
      "brunetka",
      "szatynka",
      "kobieta"
    ],
    "distractorsFr": [
      "une brune",
      "une châtaine",
      "une femme"
    ]
  },
  {
    "id": "vet-5-17",
    "date": "2026-11-05",
    "pl": "Blondynka nosi białą koszulkę, czarne spodnie i czarne buty.",
    "fr": "La blonde porte un t-shirt blanc, un pantalon noir et des chaussures noires.",
    "category": "Vêtements & Mode",
    "acceptedPl": [
      "Blondynka nosi białą koszulkę, czarne spodnie i czarne buty",
      "Blondynka nosi biala koszulke, czarne spodnie i czarne buty"
    ],
    "acceptedFr": [
      "La blonde porte un t-shirt blanc, un pantalon noir et des chaussures noires",
      "La fille blonde porte un t-shirt blanc et pantalon noir"
    ],
    "distractorsPl": [
      "Brunetka nosi białą koszulkę.",
      "Blondynka ma niebieską sukienkę.",
      "Ona nosi czarny sweter i białe buty."
    ],
    "distractorsFr": [
      "La brune porte un t-shirt blanc.",
      "La blonde a une robe bleue.",
      "Elle porte un pull noir et des chaussures blanches."
    ]
  },
  {
    "id": "cult-5-1",
    "date": "2026-11-05",
    "pl": "Dzień Wszystkich Świętych",
    "fr": "La Toussaint (1er novembre en Pologne)",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "Dzień Wszystkich Świętych",
      "Dzien Wszystkich Swietych"
    ],
    "acceptedFr": [
      "La Toussaint",
      "Toussaint",
      "La Toussaint en Pologne"
    ],
    "distractorsPl": [
      "Andrzejki",
      "Boże Narodzenie",
      "Wielkanoc"
    ],
    "distractorsFr": [
      "La Sainte-André",
      "Noël",
      "Pâques"
    ]
  },
  {
    "id": "cult-5-2",
    "date": "2026-11-05",
    "pl": "obchodzić",
    "fr": "célébrer, fêter (une fête)",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "obchodzić",
      "obchodzic"
    ],
    "acceptedFr": [
      "célébrer",
      "fêter"
    ],
    "distractorsPl": [
      "odwiedzać",
      "organizować",
      "wspominać"
    ],
    "distractorsFr": [
      "visiter",
      "organiser",
      "évoquer le souvenir"
    ]
  },
  {
    "id": "cult-5-3",
    "date": "2026-11-05",
    "pl": "pierwszego listopada",
    "fr": "le premier novembre",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "pierwszego listopada",
      "1 listopada"
    ],
    "acceptedFr": [
      "le premier novembre",
      "le 1er novembre",
      "1er novembre"
    ],
    "distractorsPl": [
      "trzydziestego listopada",
      "pierwszego maja",
      "drugiego listopada"
    ],
    "distractorsFr": [
      "le 30 novembre",
      "le 1er mai",
      "le 2 novembre"
    ]
  },
  {
    "id": "cult-5-4",
    "date": "2026-11-05",
    "pl": "cmentarz",
    "fr": "cimetière",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "cmentarz"
    ],
    "acceptedFr": [
      "cimetière",
      "le cimetière",
      "un cimetière"
    ],
    "distractorsPl": [
      "kościół",
      "park",
      "grób"
    ],
    "distractorsFr": [
      "église",
      "parc",
      "tombe"
    ]
  },
  {
    "id": "cult-5-5",
    "date": "2026-11-05",
    "pl": "cmentarze",
    "fr": "les cimetières",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "cmentarze"
    ],
    "acceptedFr": [
      "les cimetières",
      "cimetières",
      "des cimetières"
    ],
    "distractorsPl": [
      "groby",
      "znicze",
      "kościoły"
    ],
    "distractorsFr": [
      "tombes",
      "bougies",
      "églises"
    ]
  },
  {
    "id": "cult-5-6",
    "date": "2026-11-05",
    "pl": "zapalać",
    "fr": "allumer (une flamme, bougie)",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "zapalać",
      "zapalac"
    ],
    "acceptedFr": [
      "allumer"
    ],
    "distractorsPl": [
      "kłaść",
      "odwiedzać",
      "palić"
    ],
    "distractorsFr": [
      "poser",
      "visiter",
      "brûler"
    ]
  },
  {
    "id": "cult-5-7",
    "date": "2026-11-05",
    "pl": "znicz",
    "fr": "bougie du souvenir, lumignon funéraire",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "znicz"
    ],
    "acceptedFr": [
      "bougie du souvenir",
      "lumignon",
      "bougie de cimetière",
      "lumignon funéraire"
    ],
    "distractorsPl": [
      "świeca",
      "kwiat",
      "grób"
    ],
    "distractorsFr": [
      "bougie classique",
      "fleur",
      "tombe"
    ]
  },
  {
    "id": "cult-5-8",
    "date": "2026-11-05",
    "pl": "znicze",
    "fr": "les bougies du souvenir",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "znicze"
    ],
    "acceptedFr": [
      "les bougies du souvenir",
      "lumignons",
      "bougies funéraires"
    ],
    "distractorsPl": [
      "kwiaty",
      "groby",
      "światła"
    ],
    "distractorsFr": [
      "fleurs",
      "tombes",
      "lumières"
    ]
  },
  {
    "id": "cult-5-9",
    "date": "2026-11-05",
    "pl": "kłaść",
    "fr": "poser, mettre, déposer",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "kłaść",
      "klasc"
    ],
    "acceptedFr": [
      "poser",
      "mettre",
      "déposer"
    ],
    "distractorsPl": [
      "zapalać",
      "brać",
      "kupować"
    ],
    "distractorsFr": [
      "allumer",
      "prendre",
      "acheter"
    ]
  },
  {
    "id": "cult-5-10",
    "date": "2026-11-05",
    "pl": "grób",
    "fr": "tombe, sépulture",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "grób",
      "grob"
    ],
    "acceptedFr": [
      "tombe",
      "la tombe",
      "sépulture"
    ],
    "distractorsPl": [
      "cmentarz",
      "znicz",
      "kamień"
    ],
    "distractorsFr": [
      "cimetière",
      "lumignon",
      "pierre"
    ]
  },
  {
    "id": "cult-5-11",
    "date": "2026-11-05",
    "pl": "groby",
    "fr": "les tombes",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "groby"
    ],
    "acceptedFr": [
      "les tombes",
      "tombes",
      "sépultures"
    ],
    "distractorsPl": [
      "cmentarze",
      "znicze",
      "kwiaty"
    ],
    "distractorsFr": [
      "cimetières",
      "lumignons",
      "fleurs"
    ]
  },
  {
    "id": "cult-5-12",
    "date": "2026-11-05",
    "pl": "bliscy",
    "fr": "les proches, les êtres chers",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "bliscy"
    ],
    "acceptedFr": [
      "les proches",
      "proches",
      "êtres chers"
    ],
    "distractorsPl": [
      "znajomi",
      "ludzie",
      "rodzice"
    ],
    "distractorsFr": [
      "connaissances",
      "gens",
      "parents"
    ]
  },
  {
    "id": "cult-5-13",
    "date": "2026-11-05",
    "pl": "wspominać",
    "fr": "se souvenir de, évoquer la mémoire de",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "wspominać",
      "wspominac"
    ],
    "acceptedFr": [
      "se souvenir de",
      "évoquer le souvenir de",
      "commémorer"
    ],
    "distractorsPl": [
      "zapominać",
      "odwiedzać",
      "myśleć o"
    ],
    "distractorsFr": [
      "oublier",
      "visiter",
      "penser à"
    ]
  },
  {
    "id": "cult-5-14",
    "date": "2026-11-05",
    "pl": "żyć",
    "fr": "vivre, être en vie",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "żyć",
      "zyc"
    ],
    "acceptedFr": [
      "vivre",
      "être en vie"
    ],
    "distractorsPl": [
      "być",
      "mieszkać",
      "umierać"
    ],
    "distractorsFr": [
      "être",
      "habiter",
      "mourir"
    ]
  },
  {
    "id": "cult-5-15",
    "date": "2026-11-05",
    "pl": "którzy już nie żyją",
    "fr": "qui ne vivent plus, les défunts",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "którzy już nie żyją",
      "ktorzy juz nie zyja"
    ],
    "acceptedFr": [
      "qui ne vivent plus",
      "les défunts",
      "qui sont décédés"
    ],
    "distractorsPl": [
      "którzy żyją w Polsce",
      "którzy są chorzy",
      "którzy mieszkają daleko"
    ],
    "distractorsFr": [
      "qui vivent en Pologne",
      "qui sont malades",
      "qui habitent loin"
    ]
  },
  {
    "id": "cult-5-16",
    "date": "2026-11-05",
    "pl": "dzień wolny od pracy",
    "fr": "jour férié, jour chômé",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "dzień wolny od pracy",
      "dzien wolny od pracy",
      "dzień wolny"
    ],
    "acceptedFr": [
      "jour férié",
      "jour chômé",
      "jour de congé"
    ],
    "distractorsPl": [
      "dzień roboczy",
      "dzień świąteczny",
      "weekend"
    ],
    "distractorsFr": [
      "jour ouvré",
      "jour de fête",
      "week-end"
    ]
  },
  {
    "id": "cult-5-17",
    "date": "2026-11-05",
    "pl": "światło",
    "fr": "lumière",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "światło",
      "swiatlo"
    ],
    "acceptedFr": [
      "lumière",
      "la lumière"
    ],
    "distractorsPl": [
      "ogień",
      "znicz",
      "cień"
    ],
    "distractorsFr": [
      "feu",
      "lumignon",
      "ombre"
    ]
  },
  {
    "id": "cult-5-18",
    "date": "2026-11-05",
    "pl": "światła",
    "fr": "lumières, feux",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "światła",
      "swiatla"
    ],
    "acceptedFr": [
      "lumières",
      "les lumières"
    ],
    "distractorsPl": [
      "znicze",
      "cienie",
      "świece"
    ],
    "distractorsFr": [
      "lumignons",
      "ombres",
      "bougies"
    ]
  },
  {
    "id": "cult-5-19",
    "date": "2026-11-05",
    "pl": "Andrzejki",
    "fr": "fête de la Sainte-André (tradition du 30 novembre)",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "Andrzejki"
    ],
    "acceptedFr": [
      "la Sainte-André",
      "fête de la Sainte-André",
      "Andrzejki"
    ],
    "distractorsPl": [
      "Dzień Wszystkich Świętych",
      "Mikołajki",
      "Sylwester"
    ],
    "distractorsFr": [
      "La Toussaint",
      "Saint-Nicolas",
      "Saint-Sylvestre"
    ]
  },
  {
    "id": "cult-5-20",
    "date": "2026-11-05",
    "pl": "trzydziestego listopada",
    "fr": "le trente novembre",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "trzydziestego listopada",
      "30 listopada"
    ],
    "acceptedFr": [
      "le trente novembre",
      "le 30 novembre",
      "30 novembre"
    ],
    "distractorsPl": [
      "pierwszego listopada",
      "trzydziestego pierwszego grudnia",
      "trzynastego listopada"
    ],
    "distractorsFr": [
      "le 1er novembre",
      "le 31 décembre",
      "le 13 novembre"
    ]
  },
  {
    "id": "cult-5-21",
    "date": "2026-11-05",
    "pl": "impreza",
    "fr": "fête, soirée, événement festif",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "impreza"
    ],
    "acceptedFr": [
      "fête",
      "soirée",
      "la fête",
      "une soirée"
    ],
    "distractorsPl": [
      "spotkanie",
      "praca",
      "obiad"
    ],
    "distractorsFr": [
      "réunion",
      "travail",
      "déjeuner"
    ]
  },
  {
    "id": "cult-5-22",
    "date": "2026-11-05",
    "pl": "dawniej",
    "fr": "autrefois, dans le passé",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "dawniej"
    ],
    "acceptedFr": [
      "autrefois",
      "dans le passé",
      "jadis"
    ],
    "distractorsPl": [
      "dzisiaj",
      "teraz",
      "wkrótce"
    ],
    "distractorsFr": [
      "aujourd'hui",
      "maintenant",
      "bientôt"
    ]
  },
  {
    "id": "cult-5-23",
    "date": "2026-11-05",
    "pl": "wróżyć",
    "fr": "prédire l'avenir, dire la bonne aventure",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "wróżyć",
      "wrozyc"
    ],
    "acceptedFr": [
      "prédire l'avenir",
      "dire la bonne aventure",
      "diviner"
    ],
    "distractorsPl": [
      "zgadywać",
      "wierzyć",
      "marzyć"
    ],
    "distractorsFr": [
      "deviner",
      "croire",
      "rêver"
    ]
  },
  {
    "id": "cult-5-24",
    "date": "2026-11-05",
    "pl": "wróżba",
    "fr": "prédiction, rituel divinatoire",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "wróżba",
      "wrozba"
    ],
    "acceptedFr": [
      "prédiction",
      "divination",
      "rituel divinatoire"
    ],
    "distractorsPl": [
      "zabawa",
      "tradycja",
      "święto"
    ],
    "distractorsFr": [
      "jeu",
      "tradition",
      "fête"
    ]
  },
  {
    "id": "cult-5-25",
    "date": "2026-11-05",
    "pl": "wosk",
    "fr": "la cire (d'abeille ou de bougie)",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "wosk"
    ],
    "acceptedFr": [
      "la cire",
      "cire"
    ],
    "distractorsPl": [
      "woda",
      "olej",
      "papier"
    ],
    "distractorsFr": [
      "eau",
      "huile",
      "papier"
    ]
  },
  {
    "id": "cult-5-26",
    "date": "2026-11-05",
    "pl": "lanie wosku przez dziurkę od klucza",
    "fr": "le coulage de cire à travers le trou de serrure (coutume d'Andrzejki)",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "lanie wosku przez dziurkę od klucza",
      "lanie wosku"
    ],
    "acceptedFr": [
      "le coulage de cire",
      "coulage de cire à travers le trou de clé",
      "lanie wosku"
    ],
    "distractorsPl": [
      "ustawianie butów",
      "zapalanie zniczy",
      "wróżenie z kart"
    ],
    "distractorsFr": [
      "l'alignement des chaussures",
      "l'allumage des bougies",
      "la divination par les cartes"
    ]
  },
  {
    "id": "cult-5-27",
    "date": "2026-11-05",
    "pl": "dziurka od klucza",
    "fr": "trou de serrure, trou de la clé",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "dziurka od klucza"
    ],
    "acceptedFr": [
      "trou de serrure",
      "trou de clé",
      "le trou de la serrure"
    ],
    "distractorsPl": [
      "drzwi",
      "zamek",
      "klucz"
    ],
    "distractorsFr": [
      "porte",
      "serrure",
      "clé"
    ]
  },
  {
    "id": "cult-5-28",
    "date": "2026-11-05",
    "pl": "cień",
    "fr": "ombre, silhouette projetée",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "cień",
      "cien"
    ],
    "acceptedFr": [
      "ombre",
      "l'ombre",
      "silhouette"
    ],
    "distractorsPl": [
      "światło",
      "wosk",
      "postać"
    ],
    "distractorsFr": [
      "lumière",
      "cire",
      "figure"
    ]
  },
  {
    "id": "cult-5-29",
    "date": "2026-11-05",
    "pl": "zgadnąć",
    "fr": "deviner",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "zgadnąć",
      "zgadnac"
    ],
    "acceptedFr": [
      "deviner"
    ],
    "distractorsPl": [
      "wiedzieć",
      "próbować",
      "wierzyć"
    ],
    "distractorsFr": [
      "savoir",
      "essayer",
      "croire"
    ]
  },
  {
    "id": "cult-5-30",
    "date": "2026-11-05",
    "pl": "wierzyć",
    "fr": "croire",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "wierzyć",
      "wierzyc"
    ],
    "acceptedFr": [
      "croire"
    ],
    "distractorsPl": [
      "wiedzieć",
      "myśleć",
      "widzieć"
    ],
    "distractorsFr": [
      "savoir",
      "penser",
      "voir"
    ]
  },
  {
    "id": "cult-5-31",
    "date": "2026-11-05",
    "pl": "dotknąć",
    "fr": "toucher, effleurer",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "dotknąć",
      "dotknac"
    ],
    "acceptedFr": [
      "toucher",
      "effleurer"
    ],
    "distractorsPl": [
      "otworzyć",
      "zamknąć",
      "widzieć"
    ],
    "distractorsFr": [
      "ouvrir",
      "fermer",
      "voir"
    ]
  },
  {
    "id": "cult-5-32",
    "date": "2026-11-05",
    "pl": "drzwi",
    "fr": "la porte",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "drzwi"
    ],
    "acceptedFr": [
      "la porte",
      "porte",
      "les portes"
    ],
    "distractorsPl": [
      "okno",
      "pokój",
      "ściana"
    ],
    "distractorsFr": [
      "fenêtre",
      "chambre",
      "mur"
    ]
  },
  {
    "id": "cult-5-33",
    "date": "2026-11-05",
    "pl": "wyjść za mąż",
    "fr": "se marier (pour une femme)",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "wyjść za mąż",
      "wyjsc za maz"
    ],
    "acceptedFr": [
      "se marier",
      "se marier (femme)",
      "épouser un homme"
    ],
    "distractorsPl": [
      "ożenić się",
      "mieć męża",
      "poznać męża"
    ],
    "distractorsFr": [
      "se marier (homme)",
      "avoir un mari",
      "rencontrer un mari"
    ]
  },
  {
    "id": "cult-5-34",
    "date": "2026-11-05",
    "pl": "ożenić się",
    "fr": "se marier (pour un homme)",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "ożenić się",
      "ozenic sie"
    ],
    "acceptedFr": [
      "se marier",
      "se marier (homme)",
      "épouser une femme"
    ],
    "distractorsPl": [
      "wyjść za mąż",
      "mieć żonę",
      "szukać żony"
    ],
    "distractorsFr": [
      "se marier (femme)",
      "avoir une femme",
      "chercher une femme"
    ]
  },
  {
    "id": "cult-5-35",
    "date": "2026-11-05",
    "pl": "zabawa",
    "fr": "fête, divertissement, jeu",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "zabawa"
    ],
    "acceptedFr": [
      "fête",
      "divertissement",
      "jeu",
      "amusement"
    ],
    "distractorsPl": [
      "praca",
      "nauka",
      "spotkanie"
    ],
    "distractorsFr": [
      "travail",
      "apprentissage",
      "réunion"
    ]
  },
  // ==========================================
  // 18. COURS DU 09/11/2026 (WEEK-END, GÉNITIF, NÉGATION & INDÉPENDANCE)
  // ==========================================
  {
    "id": "phr-9-1",
    "date": "2026-11-09",
    "pl": "Jaki miałeś weekend?",
    "fr": "Comment s'est passé ton week-end ?",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "Jaki miałeś weekend?",
      "Jaki miales weekend?"
    ],
    "acceptedFr": [
      "Comment s'est passé ton week-end ?",
      "Comment s'est passe ton week-end ?",
      "Quel week-end as-tu eu ?"
    ],
    "distractorsPl": [
      "Co robisz w weekend?",
      "Kiedy masz weekend?",
      "Gdzie spędzasz weekend?"
    ],
    "distractorsFr": [
      "Que fais-tu ce week-end ?",
      "Quand as-tu ton week-end ?",
      "Où passes-tu ton week-end ?"
    ]
  },
  {
    "id": "phr-9-2",
    "date": "2026-11-09",
    "pl": "Normalny.",
    "fr": "Normal, ordinaire.",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "Normalny"
    ],
    "acceptedFr": [
      "Normal",
      "Ordinaire",
      "Normal, ordinaire"
    ],
    "distractorsPl": [
      "Świetny.",
      "Trudny.",
      "Bardzo zły."
    ],
    "distractorsFr": [
      "Génial.",
      "Difficile.",
      "Très mauvais."
    ]
  },
  {
    "id": "phr-9-3",
    "date": "2026-11-09",
    "pl": "Nic ciekawego.",
    "fr": "Rien d'intéressant.",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "Nic ciekawego"
    ],
    "acceptedFr": [
      "Rien d'intéressant",
      "Rien d'interessant"
    ],
    "distractorsPl": [
      "Wszystko w porządku.",
      "Dużo nowego.",
      "Bardzo ciekawe."
    ],
    "distractorsFr": [
      "Tout va bien.",
      "Beaucoup de neuf.",
      "Très intéressant."
    ]
  },
  {
    "id": "phr-9-4",
    "date": "2026-11-09",
    "pl": "nic",
    "fr": "rien",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "nic"
    ],
    "acceptedFr": [
      "rien"
    ],
    "distractorsPl": [
      "coś",
      "wszystko",
      "zawsze"
    ],
    "distractorsFr": [
      "quelque chose",
      "tout",
      "toujours"
    ]
  },
  {
    "id": "phr-9-5",
    "date": "2026-11-09",
    "pl": "ciekawy",
    "fr": "intéressant (masc.)",
    "category": "Adjectifs",
    "acceptedPl": [
      "ciekawy"
    ],
    "acceptedFr": [
      "intéressant",
      "interessant"
    ],
    "distractorsPl": [
      "nudny",
      "trudny",
      "łatwy"
    ],
    "distractorsFr": [
      "ennuyeux",
      "difficile",
      "facile"
    ]
  },
  {
    "id": "phr-9-6",
    "date": "2026-11-09",
    "pl": "Co chcesz jeść?",
    "fr": "Que veux-tu manger ?",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "Co chcesz jeść?",
      "Co chcesz jesc?"
    ],
    "acceptedFr": [
      "Que veux-tu manger ?",
      "Qu'est-ce que tu veux manger ?"
    ],
    "distractorsPl": [
      "Co lubisz pić?",
      "Co robisz dzisiaj?",
      "Gdzie chcesz iść?"
    ],
    "distractorsFr": [
      "Qu'aimes-tu boire ?",
      "Que fais-tu aujourd'hui ?",
      "Où veux-tu aller ?"
    ]
  },
  {
    "id": "phr-9-7",
    "date": "2026-11-09",
    "pl": "Co lubisz jeść na śniadanie?",
    "fr": "Qu'aimes-tu manger au petit-déjeuner ?",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "Co lubisz jeść na śniadanie?",
      "Co lubisz jesc na sniadanie?"
    ],
    "acceptedFr": [
      "Qu'aimes-tu manger au petit-déjeuner ?",
      "Que manges-tu au petit déjeuner ?"
    ],
    "distractorsPl": [
      "O której jesz śniadanie?",
      "Gdzie jesz obiad?",
      "Czy jesz kolację?"
    ],
    "distractorsFr": [
      "À quelle heure manges-tu ?",
      "Où déjeunes-tu ?",
      "Dînes-tu ?"
    ]
  },
  {
    "id": "phr-9-8",
    "date": "2026-11-09",
    "pl": "małe śniadanie",
    "fr": "un petit déjeuner léger, un petit petit-déjeuner",
    "category": "Nourriture & Café",
    "acceptedPl": [
      "małe śniadanie",
      "male sniadanie"
    ],
    "acceptedFr": [
      "un petit déjeuner léger",
      "petit déjeuner léger",
      "un petit déjeuner"
    ],
    "distractorsPl": [
      "duży obiad",
      "szybka kolacja",
      "smaczna kawa"
    ],
    "distractorsFr": [
      "un grand déjeuner",
      "un dîner rapide",
      "un bon café"
    ]
  },
  {
    "id": "phr-9-9",
    "date": "2026-11-09",
    "pl": "w biurze",
    "fr": "au bureau",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "w biurze"
    ],
    "acceptedFr": [
      "au bureau",
      "dans le bureau"
    ],
    "distractorsPl": [
      "w domu",
      "w szkole",
      "w sklepie"
    ],
    "distractorsFr": [
      "à la maison",
      "à l'école",
      "au magasin"
    ]
  },
  {
    "id": "phr-9-10",
    "date": "2026-11-09",
    "pl": "Masz dużo pracy?",
    "fr": "As-tu beaucoup de travail ?",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "Masz dużo pracy?",
      "Masz duzo pracy?"
    ],
    "acceptedFr": [
      "As-tu beaucoup de travail ?",
      "Tu as beaucoup de travail ?"
    ],
    "distractorsPl": [
      "Gdzie pracujesz?",
      "Ile godzin pracujesz?",
      "Lubisz twoją pracę?"
    ],
    "distractorsFr": [
      "Où travailles-tu ?",
      "Combien d'heures travailles-tu ?",
      "Aimes-tu ton travail ?"
    ]
  },
  {
    "id": "phr-9-11",
    "date": "2026-11-09",
    "pl": "Zobaczymy.",
    "fr": "On va voir. / Nous verrons.",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "Zobaczymy"
    ],
    "acceptedFr": [
      "On va voir",
      "Nous verrons",
      "On verra"
    ],
    "distractorsPl": [
      "Nie wiem.",
      "Oczywiście.",
      "Na pewno."
    ],
    "distractorsFr": [
      "Je ne sais pas.",
      "Bien sûr.",
      "Certainement."
    ]
  },
  {
    "id": "phr-9-12",
    "date": "2026-11-09",
    "pl": "Pożyjemy, zobaczymy.",
    "fr": "Qui vivra verra.",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "Pożyjemy, zobaczymy",
      "Pozyjemy, zobaczymy",
      "Pożyjemy zobaczymy"
    ],
    "acceptedFr": [
      "Qui vivra verra",
      "Qui vivra, verra"
    ],
    "distractorsPl": [
      "Co ma być, to będzie.",
      "Czas pokaże.",
      "Wszystko będzie dobrze."
    ],
    "distractorsFr": [
      "Advienne que pourra.",
      "Le temps nous le dira.",
      "Tout ira bien."
    ]
  },
  {
    "id": "phr-9-13",
    "date": "2026-11-09",
    "pl": "bułka z masłem",
    "fr": "c'est du gâteau, super facile",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "bułka z masłem",
      "bulka z maslem"
    ],
    "acceptedFr": [
      "c'est du gâteau",
      "c'est du gateau",
      "c'est super facile",
      "du gâteau"
    ],
    "distractorsPl": [
      "chleb z szynką",
      "kawa z mlekiem",
      "trudna sprawa"
    ],
    "distractorsFr": [
      "pain avec jambon",
      "café au lait",
      "affaire difficile"
    ]
  },
  {
    "id": "phr-9-14",
    "date": "2026-11-09",
    "pl": "łatwy",
    "fr": "facile (masc.)",
    "category": "Adjectifs",
    "acceptedPl": [
      "łatwy",
      "latwy"
    ],
    "acceptedFr": [
      "facile"
    ],
    "distractorsPl": [
      "trudny",
      "drogi",
      "prosty"
    ],
    "distractorsFr": [
      "difficile",
      "cher",
      "simple"
    ]
  },
  {
    "id": "phr-9-15",
    "date": "2026-11-09",
    "pl": "trudny",
    "fr": "difficile (masc.)",
    "category": "Adjectifs",
    "acceptedPl": [
      "trudny"
    ],
    "acceptedFr": [
      "difficile"
    ],
    "distractorsPl": [
      "łatwy",
      "tani",
      "dobry"
    ],
    "distractorsFr": [
      "facile",
      "pas cher",
      "bon"
    ]
  },
  {
    "id": "phr-9-16",
    "date": "2026-11-09",
    "pl": "To prawda?",
    "fr": "C'est vrai ?",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "To prawda?"
    ],
    "acceptedFr": [
      "C'est vrai ?",
      "Est-ce vrai ?"
    ],
    "distractorsPl": [
      "Nie ma problemu?",
      "Co to znaczy?",
      "Dlaczego nie?"
    ],
    "distractorsFr": [
      "Pas de problème ?",
      "Qu'est-ce que ça veut dire ?",
      "Pourquoi pas ?"
    ]
  },
  {
    "id": "phr-9-17",
    "date": "2026-11-09",
    "pl": "To prawda.",
    "fr": "C'est vrai.",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "To prawda"
    ],
    "acceptedFr": [
      "C'est vrai",
      "C'est la vérité"
    ],
    "distractorsPl": [
      "To nieprawda.",
      "Może być.",
      "Nie wiem."
    ],
    "distractorsFr": [
      "Ce n'est pas vrai.",
      "C'est possible.",
      "Je ne sais pas."
    ]
  },
  {
    "id": "phr-9-18",
    "date": "2026-11-09",
    "pl": "To nieprawda.",
    "fr": "Ce n'est pas vrai. / C'est faux.",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "To nieprawda"
    ],
    "acceptedFr": [
      "Ce n'est pas vrai",
      "C'est faux",
      "C'est pas vrai"
    ],
    "distractorsPl": [
      "To prawda.",
      "Masz rację.",
      "Oczywiście."
    ],
    "distractorsFr": [
      "C'est vrai.",
      "Tu as raison.",
      "Bien sûr."
    ]
  },
  {
    "id": "cult-9-1",
    "date": "2026-11-09",
    "pl": "Pierwszego listopada wiele osób odwiedza cmentarze.",
    "fr": "Le 1er novembre, beaucoup de personnes visitent les cimetières.",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "Pierwszego listopada wiele osób odwiedza cmentarze",
      "Pierwszego listopada wiele osob odwiedza cmentarze"
    ],
    "acceptedFr": [
      "Le premier novembre beaucoup de personnes visitent les cimetières",
      "Le 1er novembre beaucoup de personnes visitent les cimetières"
    ],
    "distractorsPl": [
      "Trzydziestego listopada ludzie organizują imprezy.",
      "Pierwszego listopada sklepy są otwarte.",
      "W listopadzie ludzie zostają w domu."
    ],
    "distractorsFr": [
      "Le 30 novembre les gens organisent des fêtes.",
      "Le 1er novembre les magasins sont ouverts.",
      "En novembre les gens restent chez eux."
    ]
  },
  {
    "id": "cult-9-2",
    "date": "2026-11-09",
    "pl": "wiele osób",
    "fr": "beaucoup de personnes, beaucoup de gens",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "wiele osób",
      "wiele osob"
    ],
    "acceptedFr": [
      "beaucoup de personnes",
      "beaucoup de gens"
    ],
    "distractorsPl": [
      "kilka osób",
      "mało ludzi",
      "wszyscy ludzie"
    ],
    "distractorsFr": [
      "quelques personnes",
      "peu de gens",
      "tous les gens"
    ]
  },
  {
    "id": "cult-9-3",
    "date": "2026-11-09",
    "pl": "odwiedzać",
    "fr": "visiter, rendre visite à",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "odwiedzać",
      "odwiedzac"
    ],
    "acceptedFr": [
      "visiter",
      "rendre visite"
    ],
    "distractorsPl": [
      "mieszkać",
      "podróżować",
      "widzieć"
    ],
    "distractorsFr": [
      "habiter",
      "voyager",
      "voir"
    ]
  },
  {
    "id": "phr-9-19",
    "date": "2026-11-09",
    "pl": "Moja mama ma na sobie czarną sukienkę, czerwone buty i białą torebkę.",
    "fr": "Ma mère porte une robe noire, des chaussures rouges et un sac blanc.",
    "category": "Vêtements & Mode",
    "acceptedPl": [
      "Moja mama ma na sobie czarną sukienkę, czerwone buty i białą torebkę",
      "Moja mama ma na sobie czarna sukienke, czerwone buty i biala torebke"
    ],
    "acceptedFr": [
      "Ma mère porte une robe noire des chaussures rouges et un sac blanc",
      "Ma mere porte une robe noire des chaussures rouges et un sac blanc"
    ],
    "distractorsPl": [
      "Moja siostra ma na sobie niebieską spódnicę i czarne buty.",
      "Moja mama kupuje czarną sukienkę w sklepie.",
      "Moja mama lubi czerwony sweter i białe buty."
    ],
    "distractorsFr": [
      "Ma sœur porte une jupe bleue et des chaussures noires.",
      "Ma mère achète une robe noire au magasin.",
      "Ma mère aime le pull rouge et les chaussures blanches."
    ]
  },
  {
    "id": "cult-9-4",
    "date": "2026-11-09",
    "pl": "Młode dziewczyny chcą wiedzieć, kto będzie ich mężem.",
    "fr": "Les jeunes filles veulent savoir qui sera leur mari.",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "Młode dziewczyny chcą wiedzieć, kto będzie ich mężem",
      "Mlode dziewczyny chca wiedziec, kto bedzie ich mezem"
    ],
    "acceptedFr": [
      "Les jeunes filles veulent savoir qui sera leur mari",
      "Les jeunes filles veulent savoir qui va être leur mari"
    ],
    "distractorsPl": [
      "Młode dziewczyny organizują spotkanie z rodziną.",
      "Młodzi chłopcy szukają żony na Andrzejkach.",
      "Kobiety wiedzą, kiedy wyjdą za mąż."
    ],
    "distractorsFr": [
      "Les jeunes filles organisent une réunion de famille.",
      "Les jeunes garçons cherchent une femme à la Sainte-André.",
      "Les femmes savent quand elles se marieront."
    ]
  },
  {
    "id": "phr-9-20",
    "date": "2026-11-09",
    "pl": "Ja będę iść.",
    "fr": "Je vais aller / marcher.",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "Ja będę iść",
      "Ja bede isc",
      "Będę iść"
    ],
    "acceptedFr": [
      "Je vais aller",
      "Je vais marcher",
      "J'irai à pied"
    ],
    "distractorsPl": [
      "Ja będę jechać.",
      "Ja chcę iść.",
      "Ja muszę iść."
    ],
    "distractorsFr": [
      "Je vais y aller en voiture.",
      "Je veux marcher.",
      "Je dois y aller."
    ]
  },
  {
    "id": "cult-9-5",
    "date": "2026-11-09",
    "pl": "Zapalamy znicze i kładziemy kwiaty na grobach.",
    "fr": "Nous allumons des bougies funéraires et nous déposons des fleurs sur les tombes.",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "Zapalamy znicze i kładziemy kwiaty na grobach",
      "Zapalamy znicze i kladziemy kwiaty na grobach"
    ],
    "acceptedFr": [
      "Nous allumons des bougies et déposons des fleurs sur les tombes",
      "Nous allumons des bougies et mettons des fleurs sur les tombes"
    ],
    "distractorsPl": [
      "Kupujemy znicze i kwiaty w sklepie.",
      "Odwiedzamy rodzinę i jemy obiad.",
      "Wracamy do domu po cmentarzu."
    ],
    "distractorsFr": [
      "Nous achetons des bougies et des fleurs au magasin.",
      "Nous rendons visite à la famille et déjeunons.",
      "Nous rentrons à la maison après le cimetière."
    ]
  },
  {
    "id": "cult-9-6",
    "date": "2026-11-09",
    "pl": "świeczka",
    "fr": "bougie",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "świeczka",
      "swieczka"
    ],
    "acceptedFr": [
      "bougie",
      "une bougie",
      "chandelle"
    ],
    "distractorsPl": [
      "znicz",
      "ogień",
      "lampa"
    ],
    "distractorsFr": [
      "bougie de cimetière",
      "feu",
      "lampe"
    ]
  },
  {
    "id": "cult-9-7",
    "date": "2026-11-09",
    "pl": "Trzydziestego listopada rodziny organizują imprezy z przyjaciółmi.",
    "fr": "Le 30 novembre, les familles organisent des fêtes avec leurs amis.",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "Trzydziestego listopada rodziny organizują imprezy z przyjaciółmi",
      "Trzydziestego listopada rodziny organizuja imprezy z przyjaciolmi"
    ],
    "acceptedFr": [
      "Le 30 novembre les familles organisent des fêtes avec leurs amis",
      "Le trente novembre les familles organisent des soirées avec leurs amis"
    ],
    "distractorsPl": [
      "Pierwszego listopada rodziny odwiedzają cmentarze.",
      "W listopadzie przyjaciele nie mają czasu.",
      "Trzydziestego listopada wszyscy pracują."
    ],
    "distractorsFr": [
      "Le 1er novembre les familles visitent les cimetières.",
      "En novembre les amis n'ont pas le temps.",
      "Le 30 novembre tout le monde travaille."
    ]
  },
  {
    "id": "phr-9-21",
    "date": "2026-11-09",
    "pl": "przyjaciele",
    "fr": "les amis",
    "category": "La Famille",
    "acceptedPl": [
      "przyjaciele"
    ],
    "acceptedFr": [
      "amis",
      "les amis",
      "des amis"
    ],
    "distractorsPl": [
      "koledzy",
      "rodzina",
      "ludzie"
    ],
    "distractorsFr": [
      "collègues / copains",
      "famille",
      "gens"
    ]
  },
  {
    "id": "phr-9-22",
    "date": "2026-11-09",
    "pl": "impreza",
    "fr": "fête, soirée",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "impreza"
    ],
    "acceptedFr": [
      "fête",
      "soirée",
      "une fête",
      "une soirée"
    ],
    "distractorsPl": [
      "spotkanie",
      "praca",
      "zabawa"
    ],
    "distractorsFr": [
      "réunion",
      "travail",
      "jeu / amusement"
    ]
  },
  {
    "id": "phr-9-23",
    "date": "2026-11-09",
    "pl": "Ta kobieta ma na sobie niebieską spódnicę, biały sweter i czarne buty.",
    "fr": "Cette femme porte une jupe bleue, un pull blanc et des chaussures noires.",
    "category": "Vêtements & Mode",
    "acceptedPl": [
      "Ta kobieta ma na sobie niebieską spódnicę, biały sweter i czarne buty",
      "Ta kobieta ma na sobie niebieska spodnice, bialy sweter i czarne buty"
    ],
    "acceptedFr": [
      "Cette femme porte une jupe bleue un pull blanc et des chaussures noires"
    ],
    "distractorsPl": [
      "Ten mężczyzna nosi czarne spodnie i czerwony sweter.",
      "Ta dziewczyna ma na sobie czerwoną sukienkę i szpilki.",
      "Ta kobieta kupuje białą torebkę i szalik."
    ],
    "distractorsFr": [
      "Cet homme porte un pantalon noir et un pull rouge.",
      "Cette fille porte une robe rouge et des talons.",
      "Cette femme achète un sac blanc et une écharpe."
    ]
  },
  {
    "id": "num-9-1",
    "date": "2026-11-09",
    "pl": "osiem tysięcy czterysta dwadzieścia dwa",
    "fr": "8 422 (huit mille quatre cent vingt-deux)",
    "category": "Nombres",
    "acceptedPl": [
      "osiem tysięcy czterysta dwadzieścia dwa",
      "osiem tysiecy czterysta dwadziescia dwa"
    ],
    "acceptedFr": [
      "8422",
      "8 422",
      "huit mille quatre cent vingt-deux"
    ],
    "distractorsPl": [
      "dziewięć tysięcy trzysta czterdzieści sześć",
      "osiemset czterdzieści sześć",
      "czterysta osiem"
    ],
    "distractorsFr": [
      "9 346",
      "846",
      "408"
    ]
  },
  {
    "id": "num-9-2",
    "date": "2026-11-09",
    "pl": "pięćset sześćdziesiąt siedem",
    "fr": "567 (cinq cent soixante-sept)",
    "category": "Nombres",
    "acceptedPl": [
      "pięćset sześćdziesiąt siedem",
      "piecset szescdziesiat siedem"
    ],
    "acceptedFr": [
      "567",
      "cinq cent soixante-sept"
    ],
    "distractorsPl": [
      "sześćset pięćdziesiąt siedem",
      "pięćset siedemdziesiąt sześć",
      "czterysta osiem"
    ],
    "distractorsFr": [
      "657",
      "576",
      "408"
    ]
  },
  {
    "id": "num-9-3",
    "date": "2026-11-09",
    "pl": "osiemset czterdzieści sześć",
    "fr": "846 (huit cent quarante-six)",
    "category": "Nombres",
    "acceptedPl": [
      "osiemset czterdzieści sześć",
      "osiemset czterdziesci szesc"
    ],
    "acceptedFr": [
      "846",
      "huit cent quarante-six"
    ],
    "distractorsPl": [
      "czterysta osiem",
      "osiemset sześćdziesiąt cztery",
      "trzysta pięć"
    ],
    "distractorsFr": [
      "408",
      "864",
      "305"
    ]
  },
  {
    "id": "num-9-4",
    "date": "2026-11-09",
    "pl": "czterysta osiem",
    "fr": "408 (quatre cent huit)",
    "category": "Nombres",
    "acceptedPl": [
      "czterysta osiem"
    ],
    "acceptedFr": [
      "408",
      "quatre cent huit"
    ],
    "distractorsPl": [
      "czterysta osiemdziesiąt",
      "trzysta pięć",
      "pięćset osiem"
    ],
    "distractorsFr": [
      "480",
      "305",
      "508"
    ]
  },
  {
    "id": "num-9-5",
    "date": "2026-11-09",
    "pl": "dziewięć tysięcy trzysta czterdzieści sześć",
    "fr": "9 346 (neuf mille trois cent quarante-six)",
    "category": "Nombres",
    "acceptedPl": [
      "dziewięć tysięcy trzysta czterdzieści sześć",
      "dziewiec tysiecy trzysta czterdziesci szesc"
    ],
    "acceptedFr": [
      "9346",
      "9 346",
      "neuf mille trois cent quarante-six"
    ],
    "distractorsPl": [
      "osiem tysięcy czterysta dwadzieścia dwa",
      "dziewięćset trzydzieści cztery",
      "trzy tysiące dziewięćset"
    ],
    "distractorsFr": [
      "8 422",
      "934",
      "3 900"
    ]
  },
  {
    "id": "num-9-6",
    "date": "2026-11-09",
    "pl": "trzysta pięć",
    "fr": "305 (trois cent cinq)",
    "category": "Nombres",
    "acceptedPl": [
      "trzysta pięć",
      "trzysta piec"
    ],
    "acceptedFr": [
      "305",
      "trois cent cinq"
    ],
    "distractorsPl": [
      "trzysta pięćdziesiąt",
      "dwieście pięć",
      "czterysta osiem"
    ],
    "distractorsFr": [
      "350",
      "205",
      "408"
    ]
  },
  {
    "id": "gen-9-1",
    "date": "2026-11-09",
    "pl": "kogo?",
    "fr": "de qui ?",
    "category": "Expressions & Phrases",
    "acceptedPl": [
      "kogo",
      "kogo?"
    ],
    "acceptedFr": [
      "de qui ?",
      "de qui",
      "qui"
    ],
    "distractorsPl": [
      "czego?",
      "komu?",
      "kim?"
    ],
    "distractorsFr": [
      "de quoi ?",
      "à qui ?",
      "avec qui ?"
    ]
  },
  {
    "id": "gen-9-2",
    "date": "2026-11-09",
    "pl": "czego?",
    "fr": "de quoi ?",
    "category": "Expressions & Phrases",
    "acceptedPl": [
      "czego",
      "czego?"
    ],
    "acceptedFr": [
      "de quoi ?",
      "de quoi",
      "quoi"
    ],
    "distractorsPl": [
      "kogo?",
      "czym?",
      "co?"
    ],
    "distractorsFr": [
      "de qui ?",
      "avec quoi ?",
      "que / quoi ?"
    ]
  },
  {
    "id": "gen-9-3",
    "date": "2026-11-09",
    "pl": "Nie mam czasu.",
    "fr": "Je n'ai pas le temps.",
    "category": "Expressions & Phrases",
    "acceptedPl": [
      "Nie mam czasu"
    ],
    "acceptedFr": [
      "Je n'ai pas le temps",
      "Je n'ai pas de temps"
    ],
    "distractorsPl": [
      "Mam dużo czasu.",
      "Nie mam pracy.",
      "Nie mam ochoty."
    ],
    "distractorsFr": [
      "J'ai beaucoup de temps.",
      "Je n'ai pas de travail.",
      "Je n'ai pas envie."
    ]
  },
  {
    "id": "gen-9-4",
    "date": "2026-11-09",
    "pl": "Nie ma herbaty.",
    "fr": "Il n'y a pas de thé.",
    "category": "Nourriture & Café",
    "acceptedPl": [
      "Nie ma herbaty"
    ],
    "acceptedFr": [
      "Il n'y a pas de thé",
      "Il n'y a pas de the"
    ],
    "distractorsPl": [
      "Poproszę herbatę.",
      "Herbata jest ciepła.",
      "Nie ma kawy."
    ],
    "distractorsFr": [
      "Un thé s'il vous plaît.",
      "Le thé est chaud.",
      "Il n'y a pas de café."
    ]
  },
  {
    "id": "gen-9-5",
    "date": "2026-11-09",
    "pl": "Nie mam jabłka.",
    "fr": "Je n'ai pas de pomme.",
    "category": "Nourriture & Café",
    "acceptedPl": [
      "Nie mam jabłka",
      "Nie mam jablka"
    ],
    "acceptedFr": [
      "Je n'ai pas de pomme",
      "Je n'ai pas une pomme"
    ],
    "distractorsPl": [
      "Mam czerwone jabłko.",
      "Lubię jabłka.",
      "Nie jem owoców."
    ],
    "distractorsFr": [
      "J'ai une pomme rouge.",
      "J'aime les pommes.",
      "Je ne mange pas de fruits."
    ]
  },
  {
    "id": "gen-9-6",
    "date": "2026-11-09",
    "pl": "Nie widzę kota.",
    "fr": "Je ne vois pas le chat.",
    "category": "Expressions & Phrases",
    "acceptedPl": [
      "Nie widzę kota",
      "Nie widze kota"
    ],
    "acceptedFr": [
      "Je ne vois pas le chat",
      "Je ne vois pas de chat"
    ],
    "distractorsPl": [
      "Widzę małego psa.",
      "Mam czarnego kota.",
      "Gdzie jest kot?"
    ],
    "distractorsFr": [
      "Je vois un petit chien.",
      "J'ai un chat noir.",
      "Où est le chat ?"
    ]
  },
  {
    "id": "gen-9-7",
    "date": "2026-11-09",
    "pl": "Nie lubię kawy.",
    "fr": "Je n'aime pas le café.",
    "category": "Nourriture & Café",
    "acceptedPl": [
      "Nie lubię kawy",
      "Nie lubie kawy"
    ],
    "acceptedFr": [
      "Je n'aime pas le café",
      "Je n'aime pas le cafe"
    ],
    "distractorsPl": [
      "Poproszę kawę z mlekiem.",
      "Lubię czarną kawę.",
      "Czy pijesz kawę?"
    ],
    "distractorsFr": [
      "Un café au lait s'il vous plaît.",
      "J'aime le café noir.",
      "Bois-tu du café ?"
    ]
  },
  {
    "id": "gen-9-8",
    "date": "2026-11-09",
    "pl": "dużo czasu",
    "fr": "beaucoup de temps",
    "category": "Expressions & Phrases",
    "acceptedPl": [
      "dużo czasu",
      "duzo czasu"
    ],
    "acceptedFr": [
      "beaucoup de temps"
    ],
    "distractorsPl": [
      "mało pracy",
      "trochę wody",
      "cały dzień"
    ],
    "distractorsFr": [
      "peu de travail",
      "un peu d'eau",
      "toute la journée"
    ]
  },
  {
    "id": "gen-9-9",
    "date": "2026-11-09",
    "pl": "trochę wody",
    "fr": "un peu d'eau",
    "category": "Nourriture & Café",
    "acceptedPl": [
      "trochę wody",
      "troche wody"
    ],
    "acceptedFr": [
      "un peu d'eau"
    ],
    "distractorsPl": [
      "butelka wody",
      "dużo herbaty",
      "szklanka soku"
    ],
    "distractorsFr": [
      "une bouteille d'eau",
      "beaucoup de thé",
      "un verre de jus"
    ]
  },
  {
    "id": "gen-9-10",
    "date": "2026-11-09",
    "pl": "Nie mam energii.",
    "fr": "Je n'ai pas d'énergie.",
    "category": "Expressions & Phrases",
    "acceptedPl": [
      "Nie mam energii"
    ],
    "acceptedFr": [
      "Je n'ai pas d'énergie",
      "Je n'ai pas d'energie"
    ],
    "distractorsPl": [
      "Mam dużo siły.",
      "Jestem zmęczony.",
      "Nie mam ochoty."
    ],
    "distractorsFr": [
      "J'ai beaucoup de force.",
      "Je suis fatigué.",
      "Je n'ai pas envie."
    ]
  },
  {
    "id": "gen-9-11",
    "date": "2026-11-09",
    "pl": "Nie ma imprezy.",
    "fr": "Il n'y a pas de fête.",
    "category": "Expressions & Phrases",
    "acceptedPl": [
      "Nie ma imprezy"
    ],
    "acceptedFr": [
      "Il n'y a pas de fête",
      "Il n'y a pas de soiree",
      "Il n'y a pas de fete"
    ],
    "distractorsPl": [
      "Dzisiaj jest impreza.",
      "Idę na spotkanie.",
      "Kiedy jest zabawa?"
    ],
    "distractorsFr": [
      "Aujourd'hui il y a une fête.",
      "Je vais à la réunion.",
      "Quand a lieu la fête ?"
    ]
  },
  {
    "id": "gen-9-12",
    "date": "2026-11-09",
    "pl": "Mam dużo pracy.",
    "fr": "J'ai beaucoup de travail.",
    "category": "Expressions & Phrases",
    "acceptedPl": [
      "Mam dużo pracy",
      "Mam duzo pracy"
    ],
    "acceptedFr": [
      "J'ai beaucoup de travail"
    ],
    "distractorsPl": [
      "Nie mam pracy.",
      "Szukam nowej pracy.",
      "Pracuję cały dzień."
    ],
    "distractorsFr": [
      "Je n'ai pas de travail.",
      "Je cherche un nouveau travail.",
      "Je travaille toute la journée."
    ]
  },
  {
    "id": "gen-9-13",
    "date": "2026-11-09",
    "pl": "Ona nie pije kawy.",
    "fr": "Elle ne boit pas de café.",
    "category": "Nourriture & Café",
    "acceptedPl": [
      "Ona nie pije kawy"
    ],
    "acceptedFr": [
      "Elle ne boit pas de café",
      "Elle ne boit pas de cafe"
    ],
    "distractorsPl": [
      "Ona pije czarną herbatę.",
      "Ona lubi kawę z cukrem.",
      "On nie pije alkoholu."
    ],
    "distractorsFr": [
      "Elle boit du thé noir.",
      "Elle aime le café sucré.",
      "Il ne boit pas d'alcool."
    ]
  },
  {
    "id": "gen-9-14",
    "date": "2026-11-09",
    "pl": "Masz dużo czasu w weekend?",
    "fr": "As-tu beaucoup de temps ce week-end ?",
    "category": "Expressions & Phrases",
    "acceptedPl": [
      "Masz dużo czasu w weekend?",
      "Masz duzo czasu w weekend?"
    ],
    "acceptedFr": [
      "As-tu beaucoup de temps ce week-end ?",
      "Tu as beaucoup de temps ce week-end ?"
    ],
    "distractorsPl": [
      "Co robisz w ten weekend?",
      "Kiedy zaczyna się weekend?",
      "Masz wolną sobotę?"
    ],
    "distractorsFr": [
      "Que fais-tu ce week-end ?",
      "Quand commence le week-end ?",
      "As-tu ton samedi de libre ?"
    ]
  },
  {
    "id": "gen-9-15",
    "date": "2026-11-09",
    "pl": "Nie, nie mam dużo czasu w weekend.",
    "fr": "Non, je n'ai pas beaucoup de temps ce week-end.",
    "category": "Expressions & Phrases",
    "acceptedPl": [
      "Nie, nie mam dużo czasu w weekend",
      "Nie, nie mam duzo czasu w weekend"
    ],
    "acceptedFr": [
      "Non je n'ai pas beaucoup de temps ce week-end",
      "Non, je n'ai pas beaucoup de temps le week-end"
    ],
    "distractorsPl": [
      "Tak, mam wolny cały weekend.",
      "Pracuję tylko w sobotę rano.",
      "W niedzielę odpoczywam."
    ],
    "distractorsFr": [
      "Oui j'ai tout le week-end de libre.",
      "Je travaille seulement samedi matin.",
      "Le dimanche je me repose."
    ]
  },
  {
    "id": "gen-9-16",
    "date": "2026-11-09",
    "pl": "Masz pieniądze na wakacje?",
    "fr": "As-tu de l'argent pour les vacances ?",
    "category": "Expressions & Phrases",
    "acceptedPl": [
      "Masz pieniądze na wakacje?",
      "Masz pieniadze na wakacje?"
    ],
    "acceptedFr": [
      "As-tu de l'argent pour les vacances ?",
      "Tu as de l'argent pour les vacances ?"
    ],
    "distractorsPl": [
      "Dokąd jedziesz na wakacje?",
      "Kiedy masz urlop?",
      "Ile kosztują wakacje?"
    ],
    "distractorsFr": [
      "Où vas-tu en vacances ?",
      "Quand as-tu tes congés ?",
      "Combien coûtent les vacances ?"
    ]
  },
  {
    "id": "gen-9-17",
    "date": "2026-11-09",
    "pl": "Nie, nie mam pieniędzy na wakacje.",
    "fr": "Non, je n'ai pas d'argent pour les vacances.",
    "category": "Expressions & Phrases",
    "acceptedPl": [
      "Nie, nie mam pieniędzy na wakacje",
      "Nie, nie mam pieniedzy na wakacje"
    ],
    "acceptedFr": [
      "Non je n'ai pas d'argent pour les vacances",
      "Non, je n'ai pas d'argent pour les vacances"
    ],
    "distractorsPl": [
      "Tak, mam wystarczająco dużo pieniędzy.",
      "Wakacje są bardzo drogie.",
      "Nie planuję wyjazdu."
    ],
    "distractorsFr": [
      "Oui j'ai suffisamment d'argent.",
      "Les vacances sont très chères.",
      "Je ne prévois pas de partir."
    ]
  },
  {
    "id": "gen-9-18",
    "date": "2026-11-09",
    "pl": "pieniądze",
    "fr": "l'argent",
    "category": "Expressions & Phrases",
    "acceptedPl": [
      "pieniądze",
      "pieniadze"
    ],
    "acceptedFr": [
      "l'argent",
      "argent",
      "des sous"
    ],
    "distractorsPl": [
      "karta",
      "bank",
      "złoty"
    ],
    "distractorsFr": [
      "carte",
      "banque",
      "złoty"
    ]
  },
  {
    "id": "gen-9-19",
    "date": "2026-11-09",
    "pl": "pieniędzy",
    "fr": "d'argent",
    "category": "Expressions & Phrases",
    "acceptedPl": [
      "pieniędzy",
      "pieniedzy"
    ],
    "acceptedFr": [
      "d'argent",
      "argent"
    ],
    "distractorsPl": [
      "pieniądzach",
      "pieniądze",
      "pieniądzom"
    ],
    "distractorsFr": [
      "sur l'argent",
      "l'argent",
      "à l'argent"
    ]
  },
  {
    "id": "gen-9-20",
    "date": "2026-11-09",
    "pl": "Masz jakieś plany na wakacje?",
    "fr": "As-tu des projets pour les vacances ?",
    "category": "Expressions & Phrases",
    "acceptedPl": [
      "Masz jakieś plany na wakacje?",
      "Masz jakies plany na wakacje?"
    ],
    "acceptedFr": [
      "As-tu des projets pour les vacances ?",
      "Tu as des plans pour les vacances ?"
    ],
    "distractorsPl": [
      "Kiedy jedziesz na wakacje?",
      "Gdzie spędzasz urlop?",
      "Czy lubisz podróżować?"
    ],
    "distractorsFr": [
      "Quand pars-tu en vacances ?",
      "Où passes-tu tes vacances ?",
      "Aimes-tu voyager ?"
    ]
  },
  {
    "id": "gen-9-21",
    "date": "2026-11-09",
    "pl": "Czy pijesz kawę?",
    "fr": "Est-ce que tu bois du café ?",
    "category": "Nourriture & Café",
    "acceptedPl": [
      "Czy pijesz kawę?",
      "Czy pijesz kawe?"
    ],
    "acceptedFr": [
      "Est-ce que tu bois du café ?",
      "Bois-tu du café ?"
    ],
    "distractorsPl": [
      "Czy lubisz herbatę?",
      "Ile kaw pijesz dziennie?",
      "Pijesz kawę z mlekiem?"
    ],
    "distractorsFr": [
      "Aimes-tu le thé ?",
      "Combien de cafés bois-tu par jour ?",
      "Bois-tu le café avec du lait ?"
    ]
  },
  {
    "id": "gen-9-22",
    "date": "2026-11-09",
    "pl": "Czy masz dużo pracy w tym tygodniu?",
    "fr": "Est-ce que tu as beaucoup de travail cette semaine ?",
    "category": "Expressions & Phrases",
    "acceptedPl": [
      "Czy masz dużo pracy w tym tygodniu?",
      "Czy masz duzo pracy w tym tygodniu?"
    ],
    "acceptedFr": [
      "Est-ce que tu as beaucoup de travail cette semaine ?",
      "As-tu beaucoup de travail cette semaine ?"
    ],
    "distractorsPl": [
      "Pracujesz w ten weekend?",
      "Ile godzin dzisiaj pracujesz?",
      "Kiedy kończysz pracę?"
    ],
    "distractorsFr": [
      "Travailles-tu ce week-end ?",
      "Combien d'heures travailles-tu aujourd'hui ?",
      "Quand finis-tu le travail ?"
    ]
  },
  {
    "id": "gen-9-23",
    "date": "2026-11-09",
    "pl": "Nie mam dużo pracy w tym tygodniu.",
    "fr": "Je n'ai pas beaucoup de travail cette semaine.",
    "category": "Expressions & Phrases",
    "acceptedPl": [
      "Nie mam dużo pracy w tym tygodniu",
      "Nie mam duzo pracy w tym tygodniu"
    ],
    "acceptedFr": [
      "Je n'ai pas beaucoup de travail cette semaine"
    ],
    "distractorsPl": [
      "W tym tygodniu pracuję codziennie.",
      "Mam bardzo zajęty tydzień.",
      "Nie pracuję w biurze."
    ],
    "distractorsFr": [
      "Cette semaine je travaille tous les jours.",
      "J'ai une semaine très chargée.",
      "Je ne travaille pas au bureau."
    ]
  },
  {
    "id": "gen-9-24",
    "date": "2026-11-09",
    "pl": "tydzień",
    "fr": "la semaine",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "tydzień",
      "tydzien"
    ],
    "acceptedFr": [
      "semaine",
      "la semaine",
      "une semaine"
    ],
    "distractorsPl": [
      "miesiąc",
      "rok",
      "dzień"
    ],
    "distractorsFr": [
      "mois",
      "an / année",
      "jour"
    ]
  },
  {
    "id": "gen-9-25",
    "date": "2026-11-09",
    "pl": "w tym tygodniu",
    "fr": "cette semaine",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "w tym tygodniu"
    ],
    "acceptedFr": [
      "cette semaine"
    ],
    "distractorsPl": [
      "w przyszłym tygodniu",
      "w zeszłym tygodniu",
      "w ten weekend"
    ],
    "distractorsFr": [
      "la semaine prochaine",
      "la semaine dernière",
      "ce week-end"
    ]
  },
  {
    "id": "gen-9-26",
    "date": "2026-11-09",
    "pl": "Czego nie masz dzisiaj?",
    "fr": "Qu'est-ce que tu n'as pas aujourd'hui ?",
    "category": "Expressions & Phrases",
    "acceptedPl": [
      "Czego nie masz dzisiaj?"
    ],
    "acceptedFr": [
      "Qu'est-ce que tu n'as pas aujourd'hui ?",
      "Que n'as-tu pas aujourd'hui ?"
    ],
    "distractorsPl": [
      "Co masz dzisiaj?",
      "Co robisz dzisiaj?",
      "Gdzie jesteś dzisiaj?"
    ],
    "distractorsFr": [
      "Qu'as-tu aujourd'hui ?",
      "Que fais-tu aujourd'hui ?",
      "Où es-tu aujourd'hui ?"
    ]
  },
  {
    "id": "gen-9-27",
    "date": "2026-11-09",
    "pl": "Nie mam kursu chińskiego.",
    "fr": "Je n'ai pas cours de chinois.",
    "category": "Expressions & Phrases",
    "acceptedPl": [
      "Nie mam kursu chińskiego",
      "Nie mam kursu chinskiego"
    ],
    "acceptedFr": [
      "Je n'ai pas cours de chinois",
      "Je n'ai pas de cours de chinois"
    ],
    "distractorsPl": [
      "Uczę się chińskiego.",
      "Mam kurs polskiego.",
      "Nie lubię języków obcych."
    ],
    "distractorsFr": [
      "J'apprends le chinois.",
      "J'ai cours de polonais.",
      "Je n'aime pas les langues étrangères."
    ]
  },
  {
    "id": "gen-9-28",
    "date": "2026-11-09",
    "pl": "kurs",
    "fr": "le cours (formation)",
    "category": "Expressions & Phrases",
    "acceptedPl": [
      "kurs"
    ],
    "acceptedFr": [
      "cours",
      "le cours",
      "un cours"
    ],
    "distractorsPl": [
      "lekcja",
      "szkoła",
      "praca"
    ],
    "distractorsFr": [
      "leçon",
      "école",
      "travail"
    ]
  },
  {
    "id": "gen-9-29",
    "date": "2026-11-09",
    "pl": "kościół",
    "fr": "l'église",
    "category": "Voyage & Aéroport",
    "acceptedPl": [
      "kościół",
      "kosciol"
    ],
    "acceptedFr": [
      "église",
      "l'église",
      "une église"
    ],
    "distractorsPl": [
      "muzeum",
      "cmentarz",
      "szkoła"
    ],
    "distractorsFr": [
      "musée",
      "cimetière",
      "école"
    ]
  },
  {
    "id": "gen-9-30",
    "date": "2026-11-09",
    "pl": "Szukam kościoła.",
    "fr": "Je cherche une église.",
    "category": "Voyage & Aéroport",
    "acceptedPl": [
      "Szukam kościoła",
      "Szukam kosciola"
    ],
    "acceptedFr": [
      "Je cherche une église",
      "Je cherche l'église"
    ],
    "distractorsPl": [
      "Widzę stary kościół.",
      "Gdzie jest kościół?",
      "Idę do kościoła."
    ],
    "distractorsFr": [
      "Je vois une vieille église.",
      "Où est l'église ?",
      "Je vais à l'église."
    ]
  },
  {
    "id": "gen-9-31",
    "date": "2026-11-09",
    "pl": "Potrzebuję banku.",
    "fr": "J'ai besoin d'une banque.",
    "category": "Expressions & Phrases",
    "acceptedPl": [
      "Potrzebuję banku",
      "Potrzebuje banku"
    ],
    "acceptedFr": [
      "J'ai besoin d'une banque",
      "J'ai besoin de la banque"
    ],
    "distractorsPl": [
      "Szukam bankomatu.",
      "Gdzie jest bank?",
      "Mam konto w banku."
    ],
    "distractorsFr": [
      "Je cherche un distributeur.",
      "Où est la banque ?",
      "J'ai un compte à la banque."
    ]
  },
  {
    "id": "gen-9-32",
    "date": "2026-11-09",
    "pl": "bać się",
    "fr": "avoir peur de",
    "category": "Expressions & Phrases",
    "acceptedPl": [
      "bać się",
      "bac sie"
    ],
    "acceptedFr": [
      "avoir peur",
      "avoir peur de"
    ],
    "distractorsPl": [
      "martwić się",
      "lubić",
      "cieszyć się"
    ],
    "distractorsFr": [
      "s'inquiéter",
      "aimer",
      "se réjouir"
    ]
  },
  {
    "id": "gen-9-33",
    "date": "2026-11-09",
    "pl": "boję się",
    "fr": "j'ai peur",
    "category": "Expressions & Phrases",
    "acceptedPl": [
      "boję się",
      "boje sie"
    ],
    "acceptedFr": [
      "j'ai peur",
      "je crains"
    ],
    "distractorsPl": [
      "nie boję się",
      "boisz się",
      "wiem"
    ],
    "distractorsFr": [
      "je n'ai pas peur",
      "tu as peur",
      "je sais"
    ]
  },
  {
    "id": "gen-9-34",
    "date": "2026-11-09",
    "pl": "używać",
    "fr": "utiliser, employer",
    "category": "Expressions & Phrases",
    "acceptedPl": [
      "używać",
      "uzywac"
    ],
    "acceptedFr": [
      "utiliser",
      "employer"
    ],
    "distractorsPl": [
      "mieć",
      "szukać",
      "robić"
    ],
    "distractorsFr": [
      "avoir",
      "chercher",
      "faire"
    ]
  },
  {
    "id": "gen-9-35",
    "date": "2026-11-09",
    "pl": "próbować",
    "fr": "essayer, goûter",
    "category": "Expressions & Phrases",
    "acceptedPl": [
      "próbować",
      "probowac"
    ],
    "acceptedFr": [
      "essayer",
      "goûter",
      "gouter"
    ],
    "distractorsPl": [
      "robić",
      "chcieć",
      "myśleć"
    ],
    "distractorsFr": [
      "faire",
      "vouloir",
      "penser"
    ]
  },
  {
    "id": "gen-9-36",
    "date": "2026-11-09",
    "pl": "próbuję",
    "fr": "j'essaie",
    "category": "Expressions & Phrases",
    "acceptedPl": [
      "próbuję",
      "probuje"
    ],
    "acceptedFr": [
      "j'essaie",
      "j'essaye"
    ],
    "distractorsPl": [
      "próbujesz",
      "wiem",
      "chcę"
    ],
    "distractorsFr": [
      "tu essaies",
      "je sais",
      "je veux"
    ]
  },
  {
    "id": "gen-9-37",
    "date": "2026-11-09",
    "pl": "Wiesz co jest jutro?",
    "fr": "Sais-tu ce qu'il y a demain ?",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "Wiesz co jest jutro?"
    ],
    "acceptedFr": [
      "Sais-tu ce qu'il y a demain ?",
      "Tu sais ce qu'il y a demain ?"
    ],
    "distractorsPl": [
      "Wiesz która jest godzina?",
      "Co robisz jutro?",
      "Gdzie idziesz jutro?"
    ],
    "distractorsFr": [
      "Sais-tu quelle heure il est ?",
      "Que fais-tu demain ?",
      "Où vas-tu demain ?"
    ]
  },
  {
    "id": "cult-9-8",
    "date": "2026-11-09",
    "pl": "Jutro jest Dzień Niepodległości Polski.",
    "fr": "Demain c'est la Fête de l'Indépendance de la Pologne.",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "Jutro jest Dzień Niepodległości Polski",
      "Jutro jest Dzien Niepodleglosci Polski"
    ],
    "acceptedFr": [
      "Demain c'est la fête de l'indépendance de la Pologne",
      "Demain est la fête de l'indépendance de la Pologne"
    ],
    "distractorsPl": [
      "Jutro jest Dzień Wszystkich Świętych.",
      "Jutro są Andrzejki w Polsce.",
      "Jutro jest dzień wolny od szkoły."
    ],
    "distractorsFr": [
      "Demain c'est la Toussaint.",
      "Demain c'est la Sainte-André en Pologne.",
      "Demain est un jour sans école."
    ]
  },
  {
    "id": "cult-9-9",
    "date": "2026-11-09",
    "pl": "niepodległość",
    "fr": "l'indépendance",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "niepodległość",
      "niepodleglosc"
    ],
    "acceptedFr": [
      "indépendance",
      "l'indépendance",
      "independance"
    ],
    "distractorsPl": [
      "wolność",
      "pokój",
      "tradycja"
    ],
    "distractorsFr": [
      "liberté",
      "paix",
      "tradition"
    ]
  },
  {
    "id": "cult-9-10",
    "date": "2026-11-09",
    "pl": "jedenastego listopada",
    "fr": "le 11 novembre",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "jedenastego listopada"
    ],
    "acceptedFr": [
      "le 11 novembre",
      "le onze novembre",
      "onze novembre"
    ],
    "distractorsPl": [
      "pierwszego listopada",
      "trzydziestego listopada",
      "jedenasty listopad"
    ],
    "distractorsFr": [
      "le premier novembre",
      "le trente novembre",
      "le deux novembre"
    ]
  },
  {
    "id": "gen-9-38",
    "date": "2026-11-09",
    "pl": "jezioro",
    "fr": "le lac",
    "category": "Voyage & Aéroport",
    "acceptedPl": [
      "jezioro"
    ],
    "acceptedFr": [
      "lac",
      "le lac",
      "un lac"
    ],
    "distractorsPl": [
      "morze",
      "rzeka",
      "góra"
    ],
    "distractorsFr": [
      "mer",
      "fleuve / rivière",
      "montagne"
    ]
  },
  // ==========================================
  // 19. COURS DU 12/11/2026 (TRANSPORTS, CUISINE TRADITIONNELLE & NATURE)
  // ==========================================
  {
    "id": "tr-12-1",
    "date": "2026-11-12",
    "pl": "Jak jedziesz do biura?",
    "fr": "Comment vas-tu au bureau ?",
    "category": "Voyage & Aéroport",
    "acceptedPl": [
      "Jak jedziesz do biura?",
      "Jak jedziesz do biura"
    ],
    "acceptedFr": [
      "Comment vas-tu au bureau ?",
      "Comment vas-tu au bureau",
      "Tu vas comment au bureau ?"
    ],
    "distractorsPl": [
      "O której jedziesz do biura?",
      "Gdzie jest twoje biuro?",
      "Czy pracujesz w biurze?"
    ],
    "distractorsFr": [
      "À quelle heure vas-tu au bureau ?",
      "Où est ton bureau ?",
      "Travailles-tu au bureau ?"
    ]
  },
  {
    "id": "tr-12-2",
    "date": "2026-11-12",
    "pl": "Jakim transportem?",
    "fr": "Par quel moyen de transport ?",
    "category": "Voyage & Aéroport",
    "acceptedPl": [
      "Jakim transportem?",
      "Jakim transportem"
    ],
    "acceptedFr": [
      "Par quel moyen de transport ?",
      "Par quel moyen de transport",
      "Par quel transport ?"
    ],
    "distractorsPl": [
      "O której godzinie?",
      "Dokąd jedziesz?",
      "Ile kosztuje bilet?"
    ],
    "distractorsFr": [
      "À quelle heure ?",
      "Où vas-tu ?",
      "Combien coûte le ticket ?"
    ]
  },
  {
    "id": "tr-12-3",
    "date": "2026-11-12",
    "pl": "samochodem",
    "fr": "en voiture",
    "category": "Voyage & Aéroport",
    "acceptedPl": [
      "samochodem"
    ],
    "acceptedFr": [
      "en voiture",
      "voiture",
      "par la voiture"
    ],
    "distractorsPl": [
      "pociągiem",
      "autobusem",
      "rowerem"
    ],
    "distractorsFr": [
      "en train",
      "en bus",
      "à vélo"
    ]
  },
  {
    "id": "tr-12-4",
    "date": "2026-11-12",
    "pl": "pociągiem",
    "fr": "en train",
    "category": "Voyage & Aéroport",
    "acceptedPl": [
      "pociągiem",
      "pociagiem"
    ],
    "acceptedFr": [
      "en train",
      "train",
      "par le train"
    ],
    "distractorsPl": [
      "metrem",
      "tramwajem",
      "samochodem"
    ],
    "distractorsFr": [
      "en métro",
      "en tramway",
      "en voiture"
    ]
  },
  {
    "id": "tr-12-5",
    "date": "2026-11-12",
    "pl": "metrem",
    "fr": "en métro",
    "category": "Voyage & Aéroport",
    "acceptedPl": [
      "metrem"
    ],
    "acceptedFr": [
      "en métro",
      "en metro",
      "par le métro"
    ],
    "distractorsPl": [
      "taksówką",
      "autobusem",
      "rowerem"
    ],
    "distractorsFr": [
      "en taxi",
      "en bus",
      "à vélo"
    ]
  },
  {
    "id": "tr-12-6",
    "date": "2026-11-12",
    "pl": "tramwajem",
    "fr": "en tramway",
    "category": "Voyage & Aéroport",
    "acceptedPl": [
      "tramwajem"
    ],
    "acceptedFr": [
      "en tramway",
      "en tram",
      "tramway"
    ],
    "distractorsPl": [
      "samochodem",
      "pociągiem",
      "metrem"
    ],
    "distractorsFr": [
      "en voiture",
      "en train",
      "en métro"
    ]
  },
  {
    "id": "tr-12-7",
    "date": "2026-11-12",
    "pl": "autobusem",
    "fr": "en bus",
    "category": "Voyage & Aéroport",
    "acceptedPl": [
      "autobusem"
    ],
    "acceptedFr": [
      "en bus",
      "bus",
      "par le bus"
    ],
    "distractorsPl": [
      "rowerem",
      "taksówką",
      "tramwajem"
    ],
    "distractorsFr": [
      "à vélo",
      "en taxi",
      "en tramway"
    ]
  },
  {
    "id": "tr-12-8",
    "date": "2026-11-12",
    "pl": "rowerem",
    "fr": "à vélo",
    "category": "Voyage & Aéroport",
    "acceptedPl": [
      "rowerem"
    ],
    "acceptedFr": [
      "à vélo",
      "a velo",
      "en vélo",
      "vélo"
    ],
    "distractorsPl": [
      "samochodem",
      "metrem",
      "pociągiem"
    ],
    "distractorsFr": [
      "en voiture",
      "en métro",
      "en train"
    ]
  },
  {
    "id": "tr-12-9",
    "date": "2026-11-12",
    "pl": "taksówką",
    "fr": "en taxi",
    "category": "Voyage & Aéroport",
    "acceptedPl": [
      "taksówką",
      "taksowka"
    ],
    "acceptedFr": [
      "en taxi",
      "taxi",
      "par taxi"
    ],
    "distractorsPl": [
      "tramwajem",
      "autobusem",
      "metrem"
    ],
    "distractorsFr": [
      "en tramway",
      "en bus",
      "en métro"
    ]
  },
  {
    "id": "tr-12-10",
    "date": "2026-11-12",
    "pl": "Twoje biuro jest daleko?",
    "fr": "Ton bureau est loin ?",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "Twoje biuro jest daleko?",
      "Twoje biuro jest daleko"
    ],
    "acceptedFr": [
      "Ton bureau est loin ?",
      "Ton bureau est-il loin ?",
      "Est-ce que ton bureau est loin ?"
    ],
    "distractorsPl": [
      "Gdzie jest twoje biuro?",
      "Jak duże jest biuro?",
      "Kiedy otwierasz biuro?"
    ],
    "distractorsFr": [
      "Où est ton bureau ?",
      "Quelle est la taille du bureau ?",
      "Quand ouvres-tu le bureau ?"
    ]
  },
  {
    "id": "tr-12-11",
    "date": "2026-11-12",
    "pl": "piętnaście minut",
    "fr": "quinze minutes (15 min)",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "piętnaście minut",
      "pietnascie minut"
    ],
    "acceptedFr": [
      "quinze minutes",
      "15 minutes",
      "15 min"
    ],
    "distractorsPl": [
      "pięć minut",
      "pięćdziesiąt minut",
      "godzina"
    ],
    "distractorsFr": [
      "cinq minutes",
      "cinquante minutes",
      "une heure"
    ]
  },
  {
    "id": "tr-12-12",
    "date": "2026-11-12",
    "pl": "Tam można dojechać...",
    "fr": "On peut y arriver / s'y rendre...",
    "category": "Voyage & Aéroport",
    "acceptedPl": [
      "Tam można dojechać",
      "Tam mozna dojechac"
    ],
    "acceptedFr": [
      "On peut y aller",
      "On peut y arriver",
      "On peut s'y rendre"
    ],
    "distractorsPl": [
      "Tam trzeba iść pieszo.",
      "Tam nie ma drogi.",
      "Tam jest za daleko."
    ],
    "distractorsFr": [
      "Il faut y aller à pied.",
      "Il n'y a pas de route là-bas.",
      "C'est trop loin là-bas."
    ]
  },
  {
    "id": "tr-12-13",
    "date": "2026-11-12",
    "pl": "Jeździsz rowerem?",
    "fr": "Fais-tu du vélo ? / Te déplaces-tu à vélo ?",
    "category": "Voyage & Aéroport",
    "acceptedPl": [
      "Jeździsz rowerem?",
      "Jezdzisz rowerem?"
    ],
    "acceptedFr": [
      "Fais-tu du vélo ?",
      "Te déplaces-tu à vélo ?",
      "Tu fais du vélo ?"
    ],
    "distractorsPl": [
      "Masz nowy rower?",
      "Gdzie kupiłeś rower?",
      "Lubisz jeździć autem?"
    ],
    "distractorsFr": [
      "As-tu un nouveau vélo ?",
      "Où as-tu acheté le vélo ?",
      "Aimes-tu conduire une voiture ?"
    ]
  },
  {
    "id": "tr-12-14",
    "date": "2026-11-12",
    "pl": "Nie jeżdżę rowerem.",
    "fr": "Je ne fais pas de vélo. / Je ne me déplace pas à vélo.",
    "category": "Voyage & Aéroport",
    "acceptedPl": [
      "Nie jeżdżę rowerem",
      "Nie jezdze rowerem"
    ],
    "acceptedFr": [
      "Je ne fais pas de vélo",
      "Je ne me déplace pas à vélo",
      "Je ne roule pas à vélo"
    ],
    "distractorsPl": [
      "Często jeżdżę rowerem.",
      "Nie mam samochodu.",
      "Wolę chodzić pieszo."
    ],
    "distractorsFr": [
      "Je fais souvent du vélo.",
      "Je n'ai pas de voiture.",
      "Je préfère marcher à pied."
    ]
  },
  {
    "id": "tr-12-15",
    "date": "2026-11-12",
    "pl": "Od czasu do czasu jeździsz taksówką?",
    "fr": "Prends-tu le taxi de temps en temps ?",
    "category": "Voyage & Aéroport",
    "acceptedPl": [
      "Od czasu do czasu jeździsz taksówką?",
      "Od czasu do czasu jezdzisz taksowka?"
    ],
    "acceptedFr": [
      "Prends-tu le taxi de temps en temps ?",
      "Tu prends le taxi de temps en temps ?"
    ],
    "distractorsPl": [
      "Często jeździsz pociągiem?",
      "Ile kosztuje taksówka?",
      "Czy masz własne auto?"
    ],
    "distractorsFr": [
      "Prends-tu souvent le train ?",
      "Combien coûte le taxi ?",
      "As-tu ta propre voiture ?"
    ]
  },
  {
    "id": "tr-12-16",
    "date": "2026-11-12",
    "pl": "W moim mieście nie ma metra.",
    "fr": "Dans ma ville, il n'y a pas de métro.",
    "category": "Voyage & Aéroport",
    "acceptedPl": [
      "W moim mieście nie ma metra",
      "W moim miescie nie ma metra"
    ],
    "acceptedFr": [
      "Dans ma ville il n'y a pas de métro",
      "Dans ma ville il n'y a pas de metro"
    ],
    "distractorsPl": [
      "W moim mieście jest metro.",
      "W moim mieście nie ma autobusów.",
      "Metro jest bardzo szybkie."
    ],
    "distractorsFr": [
      "Dans ma ville il y a le métro.",
      "Dans ma ville il n'y a pas de bus.",
      "Le métro est très rapide."
    ]
  },
  {
    "id": "tr-12-17",
    "date": "2026-11-12",
    "pl": "W twoim mieście nie ma tramwaju.",
    "fr": "Dans ta ville, il n'y a pas de tramway.",
    "category": "Voyage & Aéroport",
    "acceptedPl": [
      "W twoim mieście nie ma tramwaju",
      "W twoim miescie nie ma tramwaju"
    ],
    "acceptedFr": [
      "Dans ta ville il n'y a pas de tramway",
      "Dans ta ville il n'y a pas de tram"
    ],
    "distractorsPl": [
      "W twoim mieście jest tramwaj.",
      "Tramwaj jest za głośny.",
      "Lubię jeździć tramwajem."
    ],
    "distractorsFr": [
      "Dans ta ville il y a le tramway.",
      "Le tram est trop bruyant.",
      "J'aime prendre le tramway."
    ]
  },
  {
    "id": "tr-12-18",
    "date": "2026-11-12",
    "pl": "jeździć",
    "fr": "aller, circuler (en véhicule)",
    "category": "Voyage & Aéroport",
    "acceptedPl": [
      "jeździć",
      "jezdzic"
    ],
    "acceptedFr": [
      "circuler",
      "aller en véhicule",
      "rouler",
      "prendre les transports"
    ],
    "distractorsPl": [
      "iść",
      "chodzić",
      "biegać"
    ],
    "distractorsFr": [
      "aller à pied (unidirectionnel)",
      "marcher à pied (habituel)",
      "courir"
    ]
  },
  {
    "id": "food-12-1",
    "date": "2026-11-12",
    "pl": "słodkie śniadanie",
    "fr": "un petit-déjeuner sucré",
    "category": "Nourriture & Café",
    "acceptedPl": [
      "słodkie śniadanie",
      "slodkie sniadanie"
    ],
    "acceptedFr": [
      "un petit-déjeuner sucré",
      "petit-déjeuner sucré",
      "un petit déjeuner sucré"
    ],
    "distractorsPl": [
      "słone śniadanie",
      "małe śniadanie",
      "ciepły obiad"
    ],
    "distractorsFr": [
      "un petit-déjeuner salé",
      "un petit déjeuner léger",
      "un déjeuner chaud"
    ]
  },
  {
    "id": "food-12-2",
    "date": "2026-11-12",
    "pl": "baton proteinowy",
    "fr": "barre protéinée",
    "category": "Nourriture & Café",
    "acceptedPl": [
      "baton proteinowy"
    ],
    "acceptedFr": [
      "barre protéinée",
      "une barre protéinée",
      "barre proteinee"
    ],
    "distractorsPl": [
      "czekolada z mlekiem",
      "słodkie ciastko",
      "owocowy sok"
    ],
    "distractorsFr": [
      "chocolat au lait",
      "biscuit sucré",
      "jus de fruits"
    ]
  },
  {
    "id": "food-12-3",
    "date": "2026-11-12",
    "pl": "piekarnia",
    "fr": "boulangerie",
    "category": "Nourriture & Café",
    "acceptedPl": [
      "piekarnia"
    ],
    "acceptedFr": [
      "boulangerie",
      "la boulangerie",
      "une boulangerie"
    ],
    "distractorsPl": [
      "cukiernia",
      "kawiarnia",
      "restauracja"
    ],
    "distractorsFr": [
      "pâtisserie",
      "café",
      "restaurant"
    ]
  },
  {
    "id": "food-12-4",
    "date": "2026-11-12",
    "pl": "Kupiłem trzysta gram chleba.",
    "fr": "J'ai acheté trois cents grammes de pain.",
    "category": "Nourriture & Café",
    "acceptedPl": [
      "Kupiłem trzysta gram chleba",
      "Kupilem trzysta gram chleba",
      "Kupiłem 300 gram chleba"
    ],
    "acceptedFr": [
      "J'ai acheté trois cents grammes de pain",
      "J'ai acheté 300 grammes de pain"
    ],
    "distractorsPl": [
      "Kupiłem jeden bochenek chleba.",
      "Kupiłem kilogram jabłek.",
      "Poproszę trzysta gram sera."
    ],
    "distractorsFr": [
      "J'ai acheté une miche de pain.",
      "J'ai acheté un kilo de pommes.",
      "300 grammes de fromage s'il vous plaît."
    ]
  },
  {
    "id": "food-12-5",
    "date": "2026-11-12",
    "pl": "parówka",
    "fr": "saucisse de Francfort, knacki",
    "category": "Nourriture & Café",
    "acceptedPl": [
      "parówka",
      "parowka"
    ],
    "acceptedFr": [
      "saucisse",
      "knacki",
      "une saucisse"
    ],
    "distractorsPl": [
      "kiełbasa",
      "szynka",
      "kotlet"
    ],
    "distractorsFr": [
      "grosse saucisse polonaise",
      "jambon",
      "côtelette"
    ]
  },
  {
    "id": "food-12-6",
    "date": "2026-11-12",
    "pl": "parówki",
    "fr": "saucisses, knackis",
    "category": "Nourriture & Café",
    "acceptedPl": [
      "parówki",
      "parowki"
    ],
    "acceptedFr": [
      "saucisses",
      "les saucisses",
      "knackis",
      "des saucisses"
    ],
    "distractorsPl": [
      "jajka",
      "kanapki",
      "kluski"
    ],
    "distractorsFr": [
      "œufs",
      "sandwichs",
      "quenelles"
    ]
  },
  {
    "id": "food-12-7",
    "date": "2026-11-12",
    "pl": "miód",
    "fr": "le miel",
    "category": "Nourriture & Café",
    "acceptedPl": [
      "miód",
      "miod"
    ],
    "acceptedFr": [
      "miel",
      "le miel",
      "du miel"
    ],
    "distractorsPl": [
      "cukier",
      "dżem",
      "masło"
    ],
    "distractorsFr": [
      "sucre",
      "confiture",
      "beurre"
    ]
  },
  {
    "id": "food-12-8",
    "date": "2026-11-12",
    "pl": "jajecznica",
    "fr": "les œufs brouillés",
    "category": "Nourriture & Café",
    "acceptedPl": [
      "jajecznica"
    ],
    "acceptedFr": [
      "œufs brouillés",
      "oeufs brouilles",
      "des œufs brouillés"
    ],
    "distractorsPl": [
      "jajko na twardo",
      "omlet",
      "naleśniki"
    ],
    "distractorsFr": [
      "œuf dur",
      "omelette",
      "crêpes"
    ]
  },
  {
    "id": "food-12-9",
    "date": "2026-11-12",
    "pl": "szynka",
    "fr": "le jambon",
    "category": "Nourriture & Café",
    "acceptedPl": [
      "szynka"
    ],
    "acceptedFr": [
      "jambon",
      "le jambon",
      "du jambon"
    ],
    "distractorsPl": [
      "ser",
      "kurczak",
      "wołowina"
    ],
    "distractorsFr": [
      "fromage",
      "poulet",
      "bœuf"
    ]
  },
  {
    "id": "food-12-10",
    "date": "2026-11-12",
    "pl": "burak",
    "fr": "la betterave",
    "category": "Nourriture & Café",
    "acceptedPl": [
      "burak"
    ],
    "acceptedFr": [
      "betterave",
      "la betterave",
      "une betterave"
    ],
    "distractorsPl": [
      "marchewka",
      "ziemniak",
      "ogórek"
    ],
    "distractorsFr": [
      "carotte",
      "pomme de terre",
      "concombre"
    ]
  },
  {
    "id": "food-12-11",
    "date": "2026-11-12",
    "pl": "buraki",
    "fr": "les betteraves",
    "category": "Nourriture & Café",
    "acceptedPl": [
      "buraki"
    ],
    "acceptedFr": [
      "betteraves",
      "les betteraves",
      "des betteraves"
    ],
    "distractorsPl": [
      "pomidory",
      "ogórki",
      "truskawki"
    ],
    "distractorsFr": [
      "tomates",
      "concombres",
      "fraises"
    ]
  },
  {
    "id": "food-12-12",
    "date": "2026-11-12",
    "pl": "żurek",
    "fr": "soupe traditionnelle aigrelette au levain de seigle avec saucisse et œuf",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "żurek",
      "zurek"
    ],
    "acceptedFr": [
      "żurek",
      "zurek",
      "soupe aigrelette polonaise",
      "soupe de seigle"
    ],
    "distractorsPl": [
      "barszcz",
      "rosół",
      "zupa pomidorowa"
    ],
    "distractorsFr": [
      "bortsch",
      "bouillon de poulet",
      "soupe à la tomate"
    ]
  },
  {
    "id": "food-12-13",
    "date": "2026-11-12",
    "pl": "mizeria",
    "fr": "salade de concombres râpés à la crème ou au yaourt",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "mizeria"
    ],
    "acceptedFr": [
      "mizeria",
      "salade de concombres",
      "salade de concombre à la crème"
    ],
    "distractorsPl": [
      "sałatka grecka",
      "surówka z marchwi",
      "kapusta kiszona"
    ],
    "distractorsFr": [
      "salade grecque",
      "salade de carottes râpées",
      "choucroute crue"
    ]
  },
  {
    "id": "food-12-14",
    "date": "2026-11-12",
    "pl": "bigos",
    "fr": "ragoût traditionnel polonais de choucroute mijotée aux viandes et champignons",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "bigos"
    ],
    "acceptedFr": [
      "bigos",
      "choucroute polonaise",
      "choucroute garnie polonaise"
    ],
    "distractorsPl": [
      "gołąbki",
      "pierogi",
      "gulasz"
    ],
    "distractorsFr": [
      "choux farcis",
      "raviolis polonais",
      "goulasch"
    ]
  },
  {
    "id": "food-12-15",
    "date": "2026-11-12",
    "pl": "gołąbki",
    "fr": "choux farcis à la viande et au riz, nappés de sauce tomate",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "gołąbki",
      "golabki"
    ],
    "acceptedFr": [
      "gołąbki",
      "golabki",
      "choux farcis",
      "les choux farcis"
    ],
    "distractorsPl": [
      "pierogi ruskie",
      "rolada śląska",
      "kotlet schabowy"
    ],
    "distractorsFr": [
      "raviolis polonais",
      "roulé silésien",
      "côtelette de porc"
    ]
  },
  {
    "id": "food-12-16",
    "date": "2026-11-12",
    "pl": "rosół",
    "fr": "bouillon de volaille traditionnel polonais servi avec des vermicelles",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "rosół",
      "rosol"
    ],
    "acceptedFr": [
      "rosół",
      "rosol",
      "bouillon de volaille",
      "bouillon de poulet"
    ],
    "distractorsPl": [
      "żurek",
      "barszcz czerwony",
      "zupa grzybowa"
    ],
    "distractorsFr": [
      "żurek",
      "bortsch rouge",
      "soupe aux champignons"
    ]
  },
  {
    "id": "food-12-17",
    "date": "2026-11-12",
    "pl": "rolada z kluskami śląskimi",
    "fr": "roulé de bœuf farci accompagné de quenelles silésiennes",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "rolada z kluskami śląskimi",
      "rolada z kluskami slaskimi"
    ],
    "acceptedFr": [
      "roulé de bœuf avec quenelles silésiennes",
      "roulé silésien",
      "rolada avec kluski"
    ],
    "distractorsPl": [
      "kotlet schabowy z ziemniakami",
      "placki ziemniaczane ze śmietaną",
      "bigos z kiełbasą"
    ],
    "distractorsFr": [
      "escalope panée avec pommes de terre",
      "galettes de pommes de terre à la crème",
      "bigos avec saucisse"
    ]
  },
  {
    "id": "food-12-18",
    "date": "2026-11-12",
    "pl": "placki ziemniaczane",
    "fr": "galettes / criques de pommes de terre râpées frites",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "placki ziemniaczane"
    ],
    "acceptedFr": [
      "galettes de pommes de terre",
      "criques de pommes de terre",
      "placki ziemniaczane"
    ],
    "distractorsPl": [
      "frytki",
      "puree ziemniaczane",
      "naleśniki"
    ],
    "distractorsFr": [
      "frites",
      "purée de pommes de terre",
      "crêpes"
    ]
  },
  {
    "id": "food-12-19",
    "date": "2026-11-12",
    "pl": "barszcz z krokietem",
    "fr": "bortsch rouge de betteraves servi avec une croquette chaude roulée",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "barszcz z krokietem"
    ],
    "acceptedFr": [
      "bortsch avec croquette",
      "barszcz avec croquette",
      "bortsch de betteraves avec croquette"
    ],
    "distractorsPl": [
      "żurek z jajkiem",
      "rosół z makaronem",
      "zupa ogórkowa"
    ],
    "distractorsFr": [
      "żurek avec œuf",
      "bouillon aux vermicelles",
      "soupe aux concombres marinés"
    ]
  },
  {
    "id": "food-12-20",
    "date": "2026-11-12",
    "pl": "kotlet de volaille",
    "fr": "suprême de volaille pané roulé autour d'un cœur de beurre persillé fondu",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "kotlet de volaille",
      "de volaille"
    ],
    "acceptedFr": [
      "kotlet de volaille",
      "poulet à la kiev",
      "filet de poulet pané au beurre"
    ],
    "distractorsPl": [
      "kotlet schabowy",
      "pieczony kurczak",
      "rolada wołowa"
    ],
    "distractorsFr": [
      "côtelette de porc panée",
      "poulet rôti",
      "roulé de bœuf"
    ]
  },
  {
    "id": "food-12-21",
    "date": "2026-11-12",
    "pl": "pierogi ruskie",
    "fr": "raviolis au fromage blanc et pommes de terre",
    "category": "Culture & Traditions",
    "acceptedPl": [
      "pierogi ruskie"
    ],
    "acceptedFr": [
      "pierogi ruskie",
      "raviolis au fromage et pommes de terre",
      "pierogis russes"
    ],
    "distractorsPl": [
      "pierogi z mięsem",
      "pierogi z kapustą i grzybami",
      "pierogi z jagodami"
    ],
    "distractorsFr": [
      "raviolis à la viande",
      "raviolis au chou et champignons",
      "raviolis aux myrtilles"
    ]
  },
  {
    "id": "food-12-22",
    "date": "2026-11-12",
    "pl": "twarożek z chlebem",
    "fr": "fromage blanc frais assaisonné avec du pain",
    "category": "Nourriture & Café",
    "acceptedPl": [
      "twarożek z chlebem",
      "twarozek z chlebem"
    ],
    "acceptedFr": [
      "fromage blanc avec du pain",
      "fromage blanc et pain",
      "twarożek avec pain"
    ],
    "distractorsPl": [
      "kanapka z serem żółtym",
      "jajecznica na maśle",
      "chleb z dżemem"
    ],
    "distractorsFr": [
      "tartine au fromage à pâte dure",
      "œufs brouillés au beurre",
      "tartine de confiture"
    ]
  },
  {
    "id": "food-12-23",
    "date": "2026-11-12",
    "pl": "kanapka z serem",
    "fr": "sandwich au fromage",
    "category": "Nourriture & Café",
    "acceptedPl": [
      "kanapka z serem"
    ],
    "acceptedFr": [
      "sandwich au fromage",
      "tartine au fromage"
    ],
    "distractorsPl": [
      "kanapka z szynką",
      "tost z masłem",
      "bułka z dżemem"
    ],
    "distractorsFr": [
      "sandwich au jambon",
      "toast au beurre",
      "pain au lait à la confiture"
    ]
  },
  {
    "id": "food-12-24",
    "date": "2026-11-12",
    "pl": "kanapka z szynką",
    "fr": "sandwich au jambon",
    "category": "Nourriture & Café",
    "acceptedPl": [
      "kanapka z szynką",
      "kanapka z szynka"
    ],
    "acceptedFr": [
      "sandwich au jambon",
      "tartine au jambon"
    ],
    "distractorsPl": [
      "kanapka z serem",
      "parówki z chlebem",
      "jajecznica z boczkiem"
    ],
    "distractorsFr": [
      "sandwich au fromage",
      "knackis avec du pain",
      "œufs brouillés au bacon"
    ]
  },
  {
    "id": "food-12-25",
    "date": "2026-11-12",
    "pl": "sałatka grecka",
    "fr": "salade grecque",
    "category": "Nourriture & Café",
    "acceptedPl": [
      "sałatka grecka",
      "salatka grecka"
    ],
    "acceptedFr": [
      "salade grecque",
      "la salade grecque"
    ],
    "distractorsPl": [
      "mizeria",
      "surówka z białej kapusty",
      "sałatka jarzynowa"
    ],
    "distractorsFr": [
      "salade de concombres",
      "crudités de chou blanc",
      "salade macédoine polonaise"
    ]
  },
  {
    "id": "food-12-26",
    "date": "2026-11-12",
    "pl": "woleć",
    "fr": "préférer",
    "category": "Expressions & Phrases",
    "acceptedPl": [
      "woleć",
      "wolec"
    ],
    "acceptedFr": [
      "préférer",
      "preferer",
      "aimer mieux"
    ],
    "distractorsPl": [
      "lubić",
      "chcieć",
      "musieć"
    ],
    "distractorsFr": [
      "aimer",
      "vouloir",
      "devoir"
    ]
  },
  {
    "id": "food-12-27",
    "date": "2026-11-12",
    "pl": "Wolisz psy czy koty?",
    "fr": "Préfères-tu les chiens ou les chats ?",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "Wolisz psy czy koty?"
    ],
    "acceptedFr": [
      "Préfères-tu les chiens ou les chats ?",
      "Tu préfères les chiens ou les chats ?"
    ],
    "distractorsPl": [
      "Masz psa czy kota?",
      "Lubisz zwierzęta domowe?",
      "Kiedy wyprowadzasz psa?"
    ],
    "distractorsFr": [
      "As-tu un chien ou un chat ?",
      "Aimes-tu les animaux de compagnie ?",
      "Quand promènes-tu le chien ?"
    ]
  },
  {
    "id": "food-12-28",
    "date": "2026-11-12",
    "pl": "Czy wolisz kawę czy herbatę?",
    "fr": "Préfères-tu le café ou le thé ?",
    "category": "Nourriture & Café",
    "acceptedPl": [
      "Czy wolisz kawę czy herbatę?",
      "Czy wolisz kawe czy herbate?"
    ],
    "acceptedFr": [
      "Préfères-tu le café ou le thé ?",
      "Tu préfères le café ou le thé ?"
    ],
    "distractorsPl": [
      "Czy pijesz kawę rano?",
      "Poproszę kawę z mlekiem.",
      "Ile kosztuje herbata?"
    ],
    "distractorsFr": [
      "Bois-tu du café le matin ?",
      "Un café au lait s'il vous plaît.",
      "Combien coûte le thé ?"
    ]
  },
  {
    "id": "food-12-29",
    "date": "2026-11-12",
    "pl": "Wolę kawę niż herbatę.",
    "fr": "Je préfère le café au thé.",
    "category": "Nourriture & Café",
    "acceptedPl": [
      "Wolę kawę niż herbatę",
      "Wole kawe niz herbate"
    ],
    "acceptedFr": [
      "Je préfère le café au thé",
      "Je préfère le café plutôt que le thé",
      "Je prefere le cafe au the"
    ],
    "distractorsPl": [
      "Nie piję kawy ani herbaty.",
      "Zawsze rano piję sok.",
      "Lubię gorącą herbatę."
    ],
    "distractorsFr": [
      "Je ne bois ni café ni thé.",
      "Je bois toujours du jus le matin.",
      "J'aime le thé brûlant."
    ]
  },
  {
    "id": "nat-12-1",
    "date": "2026-11-12",
    "pl": "góra",
    "fr": "la montagne",
    "category": "Voyage & Aéroport",
    "acceptedPl": [
      "góra",
      "gora"
    ],
    "acceptedFr": [
      "montagne",
      "la montagne",
      "une montagne"
    ],
    "distractorsPl": [
      "morze",
      "jezioro",
      "rzeka"
    ],
    "distractorsFr": [
      "mer",
      "lac",
      "fleuve"
    ]
  },
  {
    "id": "nat-12-2",
    "date": "2026-11-12",
    "pl": "góry",
    "fr": "les montagnes",
    "category": "Voyage & Aéroport",
    "acceptedPl": [
      "góry",
      "gory"
    ],
    "acceptedFr": [
      "montagnes",
      "les montagnes",
      "des montagnes"
    ],
    "distractorsPl": [
      "lasy",
      "jeziora",
      "miasta"
    ],
    "distractorsFr": [
      "forêts",
      "lacs",
      "villes"
    ]
  },
  {
    "id": "nat-12-3",
    "date": "2026-11-12",
    "pl": "Jestem w górach.",
    "fr": "Je suis à la montagne.",
    "category": "Voyage & Aéroport",
    "acceptedPl": [
      "Jestem w górach",
      "Jestem w gorach"
    ],
    "acceptedFr": [
      "Je suis à la montagne",
      "Je suis a la montagne",
      "Je suis dans les montagnes"
    ],
    "distractorsPl": [
      "Jadę nad morze.",
      "Mieszkam w mieście.",
      "Odpoczywam nad jeziorem."
    ],
    "distractorsFr": [
      "Je vais à la mer.",
      "J'habite en ville.",
      "Je me repose au bord du lac."
    ]
  },
  {
    "id": "nat-12-4",
    "date": "2026-11-12",
    "pl": "Oni chodzą po górach.",
    "fr": "Ils marchent en montagne / font de la randonnée en montagne.",
    "category": "Voyage & Aéroport",
    "acceptedPl": [
      "Oni chodzą po górach",
      "Oni chodza po gorach"
    ],
    "acceptedFr": [
      "Ils marchent en montagne",
      "Ils font de la randonnée dans les montagnes",
      "Ils se promènent en montagne"
    ],
    "distractorsPl": [
      "Oni jeżdżą na nartach.",
      "Oni śpią w namiocie.",
      "Oni pływają w jeziorze."
    ],
    "distractorsFr": [
      "Ils font du ski.",
      "Ils dorment sous la tente.",
      "Ils nagent dans le lac."
    ]
  },
  {
    "id": "nat-12-5",
    "date": "2026-11-12",
    "pl": "wodospad",
    "fr": "la cascade, la chute d'eau",
    "category": "Voyage & Aéroport",
    "acceptedPl": [
      "wodospad"
    ],
    "acceptedFr": [
      "cascade",
      "la cascade",
      "chute d'eau",
      "une cascade"
    ],
    "distractorsPl": [
      "rzeka",
      "jezioro",
      "morze"
    ],
    "distractorsFr": [
      "rivière",
      "lac",
      "mer"
    ]
  },
  {
    "id": "nat-12-6",
    "date": "2026-11-12",
    "pl": "spadać",
    "fr": "tomber, chuter",
    "category": "Expressions & Phrases",
    "acceptedPl": [
      "spadać",
      "spadac"
    ],
    "acceptedFr": [
      "tomber",
      "chuter"
    ],
    "distractorsPl": [
      "rosnąć",
      "płynąć",
      "chodzić"
    ],
    "distractorsFr": [
      "grandir",
      "couler / nager",
      "marcher"
    ]
  },
  {
    "id": "nat-12-7",
    "date": "2026-11-12",
    "pl": "Oni są nad jeziorem.",
    "fr": "Ils sont au bord du lac.",
    "category": "Voyage & Aéroport",
    "acceptedPl": [
      "Oni są nad jeziorem",
      "Oni sa nad jeziorem"
    ],
    "acceptedFr": [
      "Ils sont au bord du lac",
      "Ils sont près du lac"
    ],
    "distractorsPl": [
      "Oni są w górach.",
      "Oni jadą nad morze.",
      "Oni pływają w rzece."
    ],
    "distractorsFr": [
      "Ils sont à la montagne.",
      "Ils vont à la mer.",
      "Ils nagent dans la rivière."
    ]
  },
  {
    "id": "nat-12-8",
    "date": "2026-11-12",
    "pl": "namiot",
    "fr": "la tente",
    "category": "Voyage & Aéroport",
    "acceptedPl": [
      "namiot"
    ],
    "acceptedFr": [
      "tente",
      "la tente",
      "une tente"
    ],
    "distractorsPl": [
      "hotel",
      "pokój",
      "dom"
    ],
    "distractorsFr": [
      "hôtel",
      "chambre",
      "maison"
    ]
  },
  {
    "id": "nat-12-9",
    "date": "2026-11-12",
    "pl": "Oni śpią w namiocie.",
    "fr": "Ils dorment sous la tente.",
    "category": "Voyage & Aéroport",
    "acceptedPl": [
      "Oni śpią w namiocie",
      "Oni spia w namiocie"
    ],
    "acceptedFr": [
      "Ils dorment dans la tente",
      "Ils dorment sous la tente"
    ],
    "distractorsPl": [
      "Oni odpoczywają w hotelu.",
      "Oni stawiają namiot.",
      "Oni śpią w domu."
    ],
    "distractorsFr": [
      "Ils se reposent à l'hôtel.",
      "Ils montent la tente.",
      "Ils dorment à la maison."
    ]
  },
  {
    "id": "nat-12-10",
    "date": "2026-11-12",
    "pl": "Lubisz spać w namiocie?",
    "fr": "Aimes-tu dormir sous la tente ?",
    "category": "Voyage & Aéroport",
    "acceptedPl": [
      "Lubisz spać w namiocie?",
      "Lubisz spac w namiocie?"
    ],
    "acceptedFr": [
      "Aimes-tu dormir sous la tente ?",
      "Tu aimes dormir dans une tente ?"
    ],
    "distractorsPl": [
      "Gdzie kupiłeś namiot?",
      "Kiedy jedziesz na kemping?",
      "Masz duży namiot?"
    ],
    "distractorsFr": [
      "Où as-tu acheté la tente ?",
      "Quand pars-tu en camping ?",
      "As-tu une grande tente ?"
    ]
  },
  {
    "id": "nat-12-11",
    "date": "2026-11-12",
    "pl": "Często śpisz w namiocie?",
    "fr": "Dors-tu souvent sous la tente ?",
    "category": "Voyage & Aéroport",
    "acceptedPl": [
      "Często śpisz w namiocie?",
      "Czesto spisz w namiocie?"
    ],
    "acceptedFr": [
      "Dors-tu souvent sous la tente ?",
      "Tu dors souvent dans la tente ?"
    ],
    "distractorsPl": [
      "Rzadko odpoczywasz w weekend?",
      "Czy masz śpiwór?",
      "Gdzie lubisz biwakować?"
    ],
    "distractorsFr": [
      "Te reposes-tu rarement le week-end ?",
      "As-tu un sac de couchage ?",
      "Où aimes-tu bivouaquer ?"
    ]
  },
  {
    "id": "nat-12-12",
    "date": "2026-11-12",
    "pl": "Nie, nie często śpię w namiocie.",
    "fr": "Non, je ne dors pas souvent sous la tente.",
    "category": "Voyage & Aéroport",
    "acceptedPl": [
      "Nie, nie często śpię w namiocie",
      "Nie, nie czesto spie w namiocie"
    ],
    "acceptedFr": [
      "Non je ne dors pas souvent sous la tente",
      "Non, je ne dors pas souvent en tente"
    ],
    "distractorsPl": [
      "Tak, śpię w namiocie każdego lata.",
      "Wolę spać w dobrym hotelu.",
      "Nigdy nie byłem pod namiotem."
    ],
    "distractorsFr": [
      "Oui je dors sous la tente chaque été.",
      "Je préfère dormir dans un bon hôtel.",
      "Je n'ai jamais fait de camping."
    ]
  },
  {
    "id": "nat-12-13",
    "date": "2026-11-12",
    "pl": "spać",
    "fr": "dormir",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "spać",
      "spac"
    ],
    "acceptedFr": [
      "dormir"
    ],
    "distractorsPl": [
      "odpoczywać",
      "wstawać",
      "budzić się"
    ],
    "distractorsFr": [
      "se reposer",
      "se lever",
      "se réveiller"
    ]
  },
  {
    "id": "phr-12-1",
    "date": "2026-11-12",
    "pl": "Wczoraj był dzień wolny.",
    "fr": "Hier était un jour férié / un jour de congé.",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "Wczoraj był dzień wolny",
      "Wczoraj byl dzien wolny"
    ],
    "acceptedFr": [
      "Hier était un jour férié",
      "Hier c'était un jour férié",
      "Hier etait un jour ferie",
      "Hier était un jour de congé"
    ],
    "distractorsPl": [
      "Dzisiaj jest dzień wolny.",
      "Jutro będę pracować.",
      "W weekend mam wolne."
    ],
    "distractorsFr": [
      "Aujourd'hui est un jour férié.",
      "Demain je vais travailler.",
      "Pendant le week-end j'ai quartier libre."
    ]
  },
  {
    "id": "phr-12-2",
    "date": "2026-11-12",
    "pl": "I co robiłeś?",
    "fr": "Et qu'as-tu fait ?",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "I co robiłeś?",
      "I co robiles?"
    ],
    "acceptedFr": [
      "Et qu'as-tu fait ?",
      "Et qu'est-ce que tu as fait ?",
      "Et tu as fait quoi ?"
    ],
    "distractorsPl": [
      "Gdzie byłeś?",
      "Z kim rozmawiałeś?",
      "O której wróciłeś?"
    ],
    "distractorsFr": [
      "Où étais-tu ?",
      "Avec qui as-tu parlé ?",
      "À quelle heure es-tu rentré ?"
    ]
  },
  {
    "id": "phr-12-3",
    "date": "2026-11-12",
    "pl": "Nic nie robiłem.",
    "fr": "Je n'ai rien fait.",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "Nic nie robiłem",
      "Nic nie robilem"
    ],
    "acceptedFr": [
      "Je n'ai rien fait",
      "Je n'ai rien fait du tout"
    ],
    "distractorsPl": [
      "Cały dzień pracowałem.",
      "Byłem u rodziny.",
      "Robiłem zakupy."
    ],
    "distractorsFr": [
      "J'ai travaillé toute la journée.",
      "J'étais dans ma famille.",
      "J'ai fait les courses."
    ]
  },
  {
    "id": "phr-12-4",
    "date": "2026-11-12",
    "pl": "Piłeś kawę?",
    "fr": "As-tu bu du café ?",
    "category": "Nourriture & Café",
    "acceptedPl": [
      "Piłeś kawę?",
      "Piles kawe?"
    ],
    "acceptedFr": [
      "As-tu bu du café ?",
      "Tu as bu du café ?"
    ],
    "distractorsPl": [
      "Jadłeś śniadanie?",
      "Chcesz herbatę?",
      "Lubisz kawę?"
    ],
    "distractorsFr": [
      "As-tu pris ton petit-déjeuner ?",
      "Tu veux du thé ?",
      "Aimes-tu le café ?"
    ]
  },
  {
    "id": "phr-12-5",
    "date": "2026-11-12",
    "pl": "Jaką kawę pijesz?",
    "fr": "Quel café bois-tu ?",
    "category": "Nourriture & Café",
    "acceptedPl": [
      "Jaką kawę pijesz?",
      "Jaka kawe pijesz?"
    ],
    "acceptedFr": [
      "Quel café bois-tu ?",
      "Tu bois quel café ?"
    ],
    "distractorsPl": [
      "Ile kaw pijesz?",
      "O której pijesz kawę?",
      "Gdzie kupujesz kawę?"
    ],
    "distractorsFr": [
      "Combien de cafés bois-tu ?",
      "À quelle heure bois-tu du café ?",
      "Où achètes-tu le café ?"
    ]
  },
  {
    "id": "phr-12-6",
    "date": "2026-11-12",
    "pl": "Szukam piekarni niedaleko domu.",
    "fr": "Je cherche une boulangerie près de chez moi / de la maison.",
    "category": "Nourriture & Café",
    "acceptedPl": [
      "Szukam piekarni niedaleko domu"
    ],
    "acceptedFr": [
      "Je cherche une boulangerie près de chez moi",
      "Je cherche une boulangerie près de la maison"
    ],
    "distractorsPl": [
      "Gdzie jest najbliższa piekarnia?",
      "Kupuję świeży chleb w sklepie.",
      "Piekarnia jest po prawej stronie."
    ],
    "distractorsFr": [
      "Où est la boulangerie la plus proche ?",
      "J'achète du pain frais au magasin.",
      "La boulangerie est à droite."
    ]
  },
  {
    "id": "phr-12-7",
    "date": "2026-11-12",
    "pl": "Czy potrzebujesz kawy?",
    "fr": "As-tu besoin d'un café ?",
    "category": "Nourriture & Café",
    "acceptedPl": [
      "Czy potrzebujesz kawy?"
    ],
    "acceptedFr": [
      "As-tu besoin d'un café ?",
      "Tu as besoin d'un café ?",
      "Avez-vous besoin de café ?"
    ],
    "distractorsPl": [
      "Czy masz ochotę na kawę?",
      "Czy pijesz kawę bez cukru?",
      "Kto zrobi kawę?"
    ],
    "distractorsFr": [
      "As-tu envie d'un café ?",
      "Bois-tu le café sans sucre ?",
      "Qui va faire le café ?"
    ]
  },
  {
    "id": "phr-12-8",
    "date": "2026-11-12",
    "pl": "Jeszcze nie jadłem śniadania.",
    "fr": "Je n'ai pas encore pris de petit-déjeuner.",
    "category": "Nourriture & Café",
    "acceptedPl": [
      "Jeszcze nie jadłem śniadania",
      "Jeszcze nie jadlem sniadania"
    ],
    "acceptedFr": [
      "Je n'ai pas encore pris de petit-déjeuner",
      "Je n'ai pas encore mangé de petit-déjeuner"
    ],
    "distractorsPl": [
      "Zjadłem już małe śniadanie.",
      "Nie chcę dzisiaj śniadania.",
      "Śniadanie było bardzo dobre."
    ],
    "distractorsFr": [
      "J'ai déjà pris un petit déjeuner.",
      "Je ne veux pas de petit-déjeuner aujourd'hui.",
      "Le petit-déjeuner était très bon."
    ]
  },
  {
    "id": "phr-12-9",
    "date": "2026-11-12",
    "pl": "Nie wiem, co jest w torbie.",
    "fr": "Je ne sais pas ce qu'il y a dans le sac.",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "Nie wiem, co jest w torbie",
      "Nie wiem co jest w torbie"
    ],
    "acceptedFr": [
      "Je ne sais pas ce qu'il y a dans le sac",
      "Je ne sais pas ce qui est dans le sac"
    ],
    "distractorsPl": [
      "Gdzie położyłeś moją torbę?",
      "Moja torba jest czarna.",
      "W torbie są książki i portfel."
    ],
    "distractorsFr": [
      "Où as-tu posé mon sac ?",
      "Mon sac est noir.",
      "Dans le sac il y a des livres et un portefeuille."
    ]
  },
  {
    "id": "phr-12-10",
    "date": "2026-11-12",
    "pl": "Ten kościół jest niedaleko banku.",
    "fr": "Cette église est près de la banque.",
    "category": "Voyage & Aéroport",
    "acceptedPl": [
      "Ten kościół jest niedaleko banku",
      "Ten kosciol jest niedaleko banku"
    ],
    "acceptedFr": [
      "Cette église est près de la banque",
      "Cette église est non loin de la banque"
    ],
    "distractorsPl": [
      "Obok kościoła jest piekarnia.",
      "Szukam banku i kościoła.",
      "Bank jest zamknięty dzisiaj."
    ],
    "distractorsFr": [
      "À côté de l'église il y a une boulangerie.",
      "Je cherche une banque et une église.",
      "La banque est fermée aujourd'hui."
    ]
  },
  {
    "id": "phr-12-11",
    "date": "2026-11-12",
    "pl": "kość",
    "fr": "l'os",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "kość",
      "kosc"
    ],
    "acceptedFr": [
      "os",
      "l'os",
      "un os"
    ],
    "distractorsPl": [
      "kościół",
      "mięso",
      "ząb"
    ],
    "distractorsFr": [
      "église",
      "viande",
      "dent"
    ]
  },
  {
    "id": "phr-12-12",
    "date": "2026-11-12",
    "pl": "Potrzebuję książki i długopisu.",
    "fr": "J'ai besoin d'un livre et d'un stylo.",
    "category": "Expressions & Phrases",
    "acceptedPl": [
      "Potrzebuję książki i długopisu",
      "Potrzebuje ksiazki i dlugopisu"
    ],
    "acceptedFr": [
      "J'ai besoin d'un livre et d'un stylo",
      "J'ai besoin d'un livre et de stylo"
    ],
    "distractorsPl": [
      "Mam książkę i długopis w plecaku.",
      "Gdzie kupiłeś ten długopis?",
      "Czytasz ciekawą książkę."
    ],
    "distractorsFr": [
      "J'ai un livre et un stylo dans mon sac à dos.",
      "Où as-tu acheté ce stylo ?",
      "Tu lis un livre intéressant."
    ]
  },
  {
    "id": "phr-12-13",
    "date": "2026-11-12",
    "pl": "bezdomny",
    "fr": "sans-abri / SDF (masculin)",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "bezdomny"
    ],
    "acceptedFr": [
      "sans-abri",
      "SDF",
      "sans abri",
      "un sans-abri"
    ],
    "distractorsPl": [
      "biedny",
      "zmęczony",
      "samotny"
    ],
    "distractorsFr": [
      "pauvre",
      "fatigué",
      "seul"
    ]
  },
  {
    "id": "phr-12-14",
    "date": "2026-11-12",
    "pl": "na ulicy",
    "fr": "dans la rue",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "na ulicy"
    ],
    "acceptedFr": [
      "dans la rue",
      "sur la rue"
    ],
    "distractorsPl": [
      "w domu",
      "na placu",
      "w sklepie"
    ],
    "distractorsFr": [
      "à la maison",
      "sur la place",
      "au magasin"
    ]
  },
  {
    "id": "phr-12-15",
    "date": "2026-11-12",
    "pl": "przed kawiarnią",
    "fr": "devant le café",
    "category": "Nourriture & Café",
    "acceptedPl": [
      "przed kawiarnią",
      "przed kawiarnia"
    ],
    "acceptedFr": [
      "devant le café",
      "devant le salon de café"
    ],
    "distractorsPl": [
      "w kawiarni",
      "obok kawiarni",
      "za kawiarnią"
    ],
    "distractorsFr": [
      "dans le café",
      "à côté du café",
      "derrière le café"
    ]
  },
  {
    "id": "phr-12-16",
    "date": "2026-11-12",
    "pl": "On odpoczywa.",
    "fr": "Il se repose.",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "On odpoczywa"
    ],
    "acceptedFr": [
      "Il se repose",
      "Il est en train de se reposer"
    ],
    "distractorsPl": [
      "On pracuje w biurze.",
      "On śpi w łóżku.",
      "On czeka na autobus."
    ],
    "distractorsFr": [
      "Il travaille au bureau.",
      "Il dort dans le lit.",
      "Il attend le bus."
    ]
  },
  {
    "id": "phr-12-17",
    "date": "2026-11-12",
    "pl": "Wczoraj odpoczywałeś?",
    "fr": "Tu t'es reposé hier ?",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "Wczoraj odpoczywałeś?",
      "Wczoraj odpoczywales?"
    ],
    "acceptedFr": [
      "Tu t'es reposé hier ?",
      "T'es-tu reposé hier ?"
    ],
    "distractorsPl": [
      "Dużo pracowałeś wczoraj?",
      "Co robiłeś w weekend?",
      "O której poszedłeś spać?"
    ],
    "distractorsFr": [
      "As-tu beaucoup travaillé hier ?",
      "Qu'as-tu fait ce week-end ?",
      "À quelle heure es-tu allé dormir ?"
    ]
  },
  {
    "id": "phr-12-18",
    "date": "2026-11-12",
    "pl": "odpoczywać",
    "fr": "se reposer",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "odpoczywać",
      "odpoczywac"
    ],
    "acceptedFr": [
      "se reposer",
      "se détendre"
    ],
    "distractorsPl": [
      "pracować",
      "uczyć się",
      "podróżować"
    ],
    "distractorsFr": [
      "travailler",
      "étudier / apprendre",
      "voyager"
    ]
  },
  {
    "id": "phr-12-19",
    "date": "2026-11-12",
    "pl": "często",
    "fr": "souvent",
    "category": "Adjectifs",
    "acceptedPl": [
      "często",
      "czesto"
    ],
    "acceptedFr": [
      "souvent"
    ],
    "distractorsPl": [
      "rzadko",
      "zawsze",
      "nigdy"
    ],
    "distractorsFr": [
      "rarement",
      "toujours",
      "jamais"
    ]
  },
  {
    "id": "phr-12-20",
    "date": "2026-11-12",
    "pl": "rzadko",
    "fr": "rarement",
    "category": "Adjectifs",
    "acceptedPl": [
      "rzadko"
    ],
    "acceptedFr": [
      "rarement"
    ],
    "distractorsPl": [
      "często",
      "zwykle",
      "czasem"
    ],
    "distractorsFr": [
      "souvent",
      "d'habitude",
      "parfois"
    ]
  },
  {
    "id": "phr-12-21",
    "date": "2026-11-12",
    "pl": "zawsze",
    "fr": "toujours",
    "category": "Adjectifs",
    "acceptedPl": [
      "zawsze"
    ],
    "acceptedFr": [
      "toujours"
    ],
    "distractorsPl": [
      "nigdy",
      "czasami",
      "często"
    ],
    "distractorsFr": [
      "jamais",
      "parfois",
      "souvent"
    ]
  },
  {
    "id": "phr-12-22",
    "date": "2026-11-12",
    "pl": "od czasu do czasu",
    "fr": "de temps en temps",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "od czasu do czasu"
    ],
    "acceptedFr": [
      "de temps en temps",
      "parfois"
    ],
    "distractorsPl": [
      "cały dzień",
      "zawsze rano",
      "bardzo często"
    ],
    "distractorsFr": [
      "toute la journée",
      "toujours le matin",
      "très souvent"
    ]
  },
  {
    "id": "phr-12-23",
    "date": "2026-11-12",
    "pl": "burza",
    "fr": "la tempête, l'orage",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "burza"
    ],
    "acceptedFr": [
      "orage",
      "tempête",
      "un orage",
      "une tempête",
      "tempete"
    ],
    "distractorsPl": [
      "deszcz",
      "wiatr",
      "chmura"
    ],
    "distractorsFr": [
      "pluie",
      "vent",
      "nuage"
    ]
  },
  // ==========================================
  // 20. COURS DU 17/11/2026 (MAGASIN DE VÊTEMENTS, PHARMACIE & SANTÉ)
  // ==========================================
  {
    "id": "phr-17-1",
    "date": "2026-11-17",
    "pl": "poszedłem",
    "fr": "je suis allé (homme)",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "poszedłem",
      "poszedlem"
    ],
    "acceptedFr": [
      "je suis allé",
      "je suis alle",
      "je suis parti"
    ],
    "distractorsPl": [
      "poszłam",
      "poszliśmy",
      "idę"
    ],
    "distractorsFr": [
      "je suis allée (femme)",
      "nous sommes allés",
      "je vais"
    ]
  },
  {
    "id": "phr-17-2",
    "date": "2026-11-17",
    "pl": "poszedłem do supermarketu",
    "fr": "je suis allé au supermarché",
    "category": "Voyage & Aéroport",
    "acceptedPl": [
      "poszedłem do supermarketu",
      "poszedlem do supermarketu"
    ],
    "acceptedFr": [
      "je suis allé au supermarché",
      "je suis alle au supermarche"
    ],
    "distractorsPl": [
      "idę do biura",
      "jestem w sklepie",
      "wracam z pracy"
    ],
    "distractorsFr": [
      "je vais au bureau",
      "je suis au magasin",
      "je rentre du travail"
    ]
  },
  {
    "id": "phr-17-3",
    "date": "2026-11-17",
    "pl": "I co kupiłeś?",
    "fr": "Et qu'as-tu acheté ?",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "I co kupiłeś?",
      "I co kupiles?"
    ],
    "acceptedFr": [
      "Et qu'as-tu acheté ?",
      "Et qu'est-ce que tu as acheté ?",
      "Et tu as acheté quoi ?"
    ],
    "distractorsPl": [
      "Gdzie to kupiłeś?",
      "Ile zapłaciłeś?",
      "Co tam widziałeś?"
    ],
    "distractorsFr": [
      "Où as-tu acheté ça ?",
      "Combien as-tu payé ?",
      "Qu'as-tu vu là-bas ?"
    ]
  },
  {
    "id": "food-17-1",
    "date": "2026-11-17",
    "pl": "jeżyki",
    "fr": "petits hérissons (biscuits polonais au caramel et chocolat)",
    "category": "Nourriture & Café",
    "acceptedPl": [
      "jeżyki",
      "jezyki"
    ],
    "acceptedFr": [
      "petits hérissons",
      "biscuits jeżyki",
      "biscuits polonais"
    ],
    "distractorsPl": [
      "ciastka",
      "pierniki",
      "cukierki"
    ],
    "distractorsFr": [
      "petits gâteaux",
      "pains d'épices",
      "bonbons"
    ]
  },
  {
    "id": "food-17-2",
    "date": "2026-11-17",
    "pl": "Kupiłem wódkę.",
    "fr": "J'ai acheté de la vodka.",
    "category": "Nourriture & Café",
    "acceptedPl": [
      "Kupiłem wódkę",
      "Kupilem wodke",
      "Kupiłem wódkę.",
      "Kupilem wodke."
    ],
    "acceptedFr": [
      "J'ai acheté de la vodka",
      "J'ai acheté une bouteille de vodka"
    ],
    "distractorsPl": [
      "Kupiłem piwo.",
      "Kupiłem czerwone wino.",
      "Poproszę sok."
    ],
    "distractorsFr": [
      "J'ai acheté de la bière.",
      "J'ai acheté du vin rouge.",
      "Un jus s'il vous plaît."
    ]
  },
  {
    "id": "food-17-3",
    "date": "2026-11-17",
    "pl": "słodki",
    "fr": "sucré",
    "category": "Adjectifs",
    "acceptedPl": [
      "słodki",
      "slodki"
    ],
    "acceptedFr": [
      "sucré",
      "sucre",
      "doux"
    ],
    "distractorsPl": [
      "słony",
      "gorzki",
      "kwaśny"
    ],
    "distractorsFr": [
      "salé",
      "amer",
      "acide"
    ]
  },
  {
    "id": "food-17-4",
    "date": "2026-11-17",
    "pl": "Wolę słodkie śniadanie z miodem.",
    "fr": "Je préfère un petit-déjeuner sucré avec du miel.",
    "category": "Nourriture & Café",
    "acceptedPl": [
      "Wolę słodkie śniadanie z miodem",
      "Wole slodkie sniadanie z miodem"
    ],
    "acceptedFr": [
      "Je préfère un petit-déjeuner sucré avec du miel",
      "Je prefere un petit dejeuner sucre avec du miel"
    ],
    "distractorsPl": [
      "Jem kanapkę z serem i szynką.",
      "Piję czarną kawę bez cukru.",
      "Wolę jajecznicę na maśle."
    ],
    "distractorsFr": [
      "Je mange un sandwich fromage et jambon.",
      "Je bois du café noir sans sucre.",
      "Je préfère des œufs brouillés au beurre."
    ]
  },
  {
    "id": "food-17-5",
    "date": "2026-11-17",
    "pl": "Piłeś już kawę dziś?",
    "fr": "As-tu déjà bu un café aujourd'hui ?",
    "category": "Nourriture & Café",
    "acceptedPl": [
      "Piłeś już kawę dziś?",
      "Piles juz kawe dzis?"
    ],
    "acceptedFr": [
      "As-tu déjà bu un café aujourd'hui ?",
      "Tu as déjà bu du café aujourd'hui ?"
    ],
    "distractorsPl": [
      "Chcesz jeszcze jedną herbatę?",
      "O której pijesz kawę?",
      "Gdzie kupiłeś tę kawę?"
    ],
    "distractorsFr": [
      "Tu veux un autre thé ?",
      "À quelle heure bois-tu du café ?",
      "Où as-tu acheté ce café ?"
    ]
  },
  {
    "id": "vet-17-1",
    "date": "2026-11-17",
    "pl": "Co masz na sobie dzisiaj?",
    "fr": "Que portes-tu aujourd'hui ?",
    "category": "Vêtements & Mode",
    "acceptedPl": [
      "Co masz na sobie dzisiaj?"
    ],
    "acceptedFr": [
      "Que portes-tu aujourd'hui ?",
      "Qu'est-ce que tu portes aujourd'hui ?",
      "Tu portes quoi aujourd'hui ?"
    ],
    "distractorsPl": [
      "Co kupiłeś w sklepie?",
      "Gdzie są twoje ubrania?",
      "Jaki jest twój rozmiar?"
    ],
    "distractorsFr": [
      "Qu'as-tu acheté au magasin ?",
      "Où sont tes vêtements ?",
      "Quelle est ta taille ?"
    ]
  },
  {
    "id": "vet-17-2",
    "date": "2026-11-17",
    "pl": "Jakie ubrania?",
    "fr": "Quels vêtements ?",
    "category": "Vêtements & Mode",
    "acceptedPl": [
      "Jakie ubrania?",
      "Jakie ubrania"
    ],
    "acceptedFr": [
      "Quels vêtements ?",
      "Quels vêtements"
    ],
    "distractorsPl": [
      "Jakie buty?",
      "Jaki kolor?",
      "Ile kosztują?"
    ],
    "distractorsFr": [
      "Quelles chaussures ?",
      "Quelle couleur ?",
      "Combien coûtent-ils ?"
    ]
  },
  {
    "id": "phr-17-4",
    "date": "2026-11-17",
    "pl": "Możesz powtórzyć?",
    "fr": "Peux-tu répéter ?",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "Możesz powtórzyć?",
      "Mozesz powtorzyc?"
    ],
    "acceptedFr": [
      "Peux-tu répéter ?",
      "Tu peux répéter ?",
      "Pouvez-vous répéter ?"
    ],
    "distractorsPl": [
      "Czy rozumiesz?",
      "Mów wolniej, proszę.",
      "Co powiedziałeś?"
    ],
    "distractorsFr": [
      "Comprends-tu ?",
      "Parle plus lentement s'il te plaît.",
      "Qu'as-tu dit ?"
    ]
  },
  {
    "id": "vet-17-3",
    "date": "2026-11-17",
    "pl": "jeansy",
    "fr": "le jean, les jeans",
    "category": "Vêtements & Mode",
    "acceptedPl": [
      "jeansy",
      "dżinsy",
      "dzinsy"
    ],
    "acceptedFr": [
      "jean",
      "le jean",
      "les jeans",
      "un jean"
    ],
    "distractorsPl": [
      "spodnie",
      "szorty",
      "szpilki"
    ],
    "distractorsFr": [
      "pantalon classique",
      "shorts",
      "talons aiguilles"
    ]
  },
  {
    "id": "vet-17-4",
    "date": "2026-11-17",
    "pl": "okulary",
    "fr": "les lunettes",
    "category": "Vêtements & Mode",
    "acceptedPl": [
      "okulary"
    ],
    "acceptedFr": [
      "lunettes",
      "les lunettes",
      "des lunettes"
    ],
    "distractorsPl": [
      "zegarek",
      "pasek",
      "kapelusz"
    ],
    "distractorsFr": [
      "montre",
      "ceinture",
      "chapeau"
    ]
  },
  {
    "id": "vet-17-5",
    "date": "2026-11-17",
    "pl": "spodnie dżinsowe",
    "fr": "pantalon en jean",
    "category": "Vêtements & Mode",
    "acceptedPl": [
      "spodnie dżinsowe",
      "spodnie dzinsowe"
    ],
    "acceptedFr": [
      "pantalon en jean",
      "un pantalon en jean",
      "pantalon jean"
    ],
    "distractorsPl": [
      "spodnie czarne",
      "krótkie spodenki",
      "długa spódnica"
    ],
    "distractorsFr": [
      "pantalon noir",
      "short court",
      "jupe longue"
    ]
  },
  {
    "id": "vet-17-6",
    "date": "2026-11-17",
    "pl": "żakiet",
    "fr": "veste de tailleur, blazer",
    "category": "Vêtements & Mode",
    "acceptedPl": [
      "żakiet",
      "zakiet"
    ],
    "acceptedFr": [
      "veste de tailleur",
      "blazer",
      "veste"
    ],
    "distractorsPl": [
      "marynarka",
      "kurtka",
      "płaszcz"
    ],
    "distractorsFr": [
      "veste de costume",
      "blouson",
      "manteau"
    ]
  },
  {
    "id": "vet-17-7",
    "date": "2026-11-17",
    "pl": "kostium damski",
    "fr": "tailleur femme",
    "category": "Vêtements & Mode",
    "acceptedPl": [
      "kostium damski"
    ],
    "acceptedFr": [
      "tailleur femme",
      "tailleur pour femme",
      "un tailleur"
    ],
    "distractorsPl": [
      "garnitur",
      "sukienka",
      "spódnica"
    ],
    "distractorsFr": [
      "costume homme",
      "robe",
      "jupe"
    ]
  },
  {
    "id": "vet-17-8",
    "date": "2026-11-17",
    "pl": "garnitur",
    "fr": "costume (homme)",
    "category": "Vêtements & Mode",
    "acceptedPl": [
      "garnitur"
    ],
    "acceptedFr": [
      "costume",
      "le costume",
      "un costume"
    ],
    "distractorsPl": [
      "krawat",
      "marynarka",
      "koszula"
    ],
    "distractorsFr": [
      "cravate",
      "veste",
      "chemise"
    ]
  },
  {
    "id": "vet-17-9",
    "date": "2026-11-17",
    "pl": "podkoszulek",
    "fr": "maillot de corps, tricot de peau",
    "category": "Vêtements & Mode",
    "acceptedPl": [
      "podkoszulek"
    ],
    "acceptedFr": [
      "maillot de corps",
      "tricot de peau",
      "débardeur"
    ],
    "distractorsPl": [
      "koszulka",
      "koszula",
      "bluzka"
    ],
    "distractorsFr": [
      "tee-shirt",
      "chemise",
      "blouse"
    ]
  },
  {
    "id": "vet-17-10",
    "date": "2026-11-17",
    "pl": "w kwiaty",
    "fr": "à fleurs, à motif fleuri",
    "category": "Vêtements & Mode",
    "acceptedPl": [
      "w kwiaty",
      "w kwiatki"
    ],
    "acceptedFr": [
      "à fleurs",
      "a fleurs",
      "à motif fleuri",
      "fleuri"
    ],
    "distractorsPl": [
      "w paski",
      "w kropki",
      "czarny"
    ],
    "distractorsFr": [
      "à rayures",
      "à pois",
      "noir uni"
    ]
  },
  {
    "id": "adj-17-1",
    "date": "2026-11-17",
    "pl": "szeroki",
    "fr": "large",
    "category": "Adjectifs",
    "acceptedPl": [
      "szeroki"
    ],
    "acceptedFr": [
      "large"
    ],
    "distractorsPl": [
      "wąski",
      "długi",
      "krótki"
    ],
    "distractorsFr": [
      "étroit",
      "long",
      "court"
    ]
  },
  {
    "id": "adj-17-2",
    "date": "2026-11-17",
    "pl": "wąski",
    "fr": "étroit",
    "category": "Adjectifs",
    "acceptedPl": [
      "wąski",
      "waski"
    ],
    "acceptedFr": [
      "étroit",
      "etroit"
    ],
    "distractorsPl": [
      "szeroki",
      "duży",
      "gruby"
    ],
    "distractorsFr": [
      "large",
      "grand",
      "épais"
    ]
  },
  {
    "id": "adj-17-3",
    "date": "2026-11-17",
    "pl": "modny",
    "fr": "à la mode, branché",
    "category": "Adjectifs",
    "acceptedPl": [
      "modny"
    ],
    "acceptedFr": [
      "à la mode",
      "a la mode",
      "tendance",
      "branché"
    ],
    "distractorsPl": [
      "niemodny",
      "stary",
      "brzydki"
    ],
    "distractorsFr": [
      "démodé",
      "vieux",
      "laid"
    ]
  },
  {
    "id": "adj-17-4",
    "date": "2026-11-17",
    "pl": "niemodny",
    "fr": "démodé, passé de mode",
    "category": "Adjectifs",
    "acceptedPl": [
      "niemodny"
    ],
    "acceptedFr": [
      "démodé",
      "demode",
      "passé de mode"
    ],
    "distractorsPl": [
      "modny",
      "nowy",
      "elegancki"
    ],
    "distractorsFr": [
      "à la mode",
      "nouveau",
      "élégant"
    ]
  },
  {
    "id": "phr-17-5",
    "date": "2026-11-17",
    "pl": "Mamy to, co Ci się podoba.",
    "fr": "Nous avons ce qui te plaît.",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "Mamy to, co Ci się podoba",
      "Mamy to, co ci sie podoba"
    ],
    "acceptedFr": [
      "Nous avons ce qui te plaît",
      "Nous avons ce qui vous plaît",
      "On a ce qui te plait"
    ],
    "distractorsPl": [
      "Kupujemy nowe ubrania.",
      "To jest za drogie dla ciebie.",
      "Co chcesz zamówić dzisiaj?"
    ],
    "distractorsFr": [
      "Nous achetons de nouveaux vêtements.",
      "C'est trop cher pour toi.",
      "Que veux-tu commander aujourd'hui ?"
    ]
  },
  {
    "id": "vet-17-11",
    "date": "2026-11-17",
    "pl": "zobaczyć",
    "fr": "voir, regarder",
    "category": "Expressions & Phrases",
    "acceptedPl": [
      "zobaczyć",
      "zobaczyc"
    ],
    "acceptedFr": [
      "voir",
      "regarder"
    ],
    "distractorsPl": [
      "kupić",
      "przymierzyć",
      "nosić"
    ],
    "distractorsFr": [
      "acheter",
      "essayer",
      "porter"
    ]
  },
  {
    "id": "vet-17-12",
    "date": "2026-11-17",
    "pl": "Czy mogę zobaczyć ten zielony sweter?",
    "fr": "Puis-je voir ce pull vert ?",
    "category": "Vêtements & Mode",
    "acceptedPl": [
      "Czy mogę zobaczyć ten zielony sweter?",
      "Czy moge zobaczyc ten zielony sweter?"
    ],
    "acceptedFr": [
      "Puis-je voir ce pull vert ?",
      "Est-ce que je peux voir ce pull vert ?"
    ],
    "distractorsPl": [
      "Czy mogę przymierzyć tę sukienkę?",
      "Ile kosztuje ta zielona kurtka?",
      "Gdzie są ciepłe swetry?"
    ],
    "distractorsFr": [
      "Puis-je essayer cette robe ?",
      "Combien coûte cette veste verte ?",
      "Où sont les pulls chauds ?"
    ]
  },
  {
    "id": "vet-17-13",
    "date": "2026-11-17",
    "pl": "rozmiar",
    "fr": "la taille, la pointure",
    "category": "Vêtements & Mode",
    "acceptedPl": [
      "rozmiar"
    ],
    "acceptedFr": [
      "taille",
      "la taille",
      "pointure"
    ],
    "distractorsPl": [
      "kolor",
      "cena",
      "materiał"
    ],
    "distractorsFr": [
      "couleur",
      "prix",
      "matière"
    ]
  },
  {
    "id": "vet-17-14",
    "date": "2026-11-17",
    "pl": "Jaki rozmiar?",
    "fr": "Quelle taille ?",
    "category": "Vêtements & Mode",
    "acceptedPl": [
      "Jaki rozmiar?",
      "Jaki rozmiar"
    ],
    "acceptedFr": [
      "Quelle taille ?",
      "Quelle pointure ?"
    ],
    "distractorsPl": [
      "Jaki kolor?",
      "Ile to kosztuje?",
      "Jaki model?"
    ],
    "distractorsFr": [
      "Quelle couleur ?",
      "Combien ça coûte ?",
      "Quel modèle ?"
    ]
  },
  {
    "id": "vet-17-15",
    "date": "2026-11-17",
    "pl": "przymierzyć",
    "fr": "essayer (un vêtement)",
    "category": "Vêtements & Mode",
    "acceptedPl": [
      "przymierzyć",
      "przymierzyc"
    ],
    "acceptedFr": [
      "essayer",
      "essayer un vêtement"
    ],
    "distractorsPl": [
      "kupić",
      "sprzedać",
      "zapłacić"
    ],
    "distractorsFr": [
      "acheter",
      "vendre",
      "payer"
    ]
  },
  {
    "id": "vet-17-16",
    "date": "2026-11-17",
    "pl": "Czy mogę przymierzyć?",
    "fr": "Puis-je essayer ?",
    "category": "Vêtements & Mode",
    "acceptedPl": [
      "Czy mogę przymierzyć?",
      "Czy moge przymierzyc?"
    ],
    "acceptedFr": [
      "Puis-je essayer ?",
      "Est-ce que je peux essayer ?",
      "Je peux essayer ?"
    ],
    "distractorsPl": [
      "Czy mogę zapłacić kartą?",
      "Gdzie jest kasa?",
      "Czy to jest w promocji?"
    ],
    "distractorsFr": [
      "Puis-je payer par carte ?",
      "Où est la caisse ?",
      "Est-ce en promotion ?"
    ]
  },
  {
    "id": "vet-17-17",
    "date": "2026-11-17",
    "pl": "przymierzalnia",
    "fr": "la cabine d'essayage",
    "category": "Vêtements & Mode",
    "acceptedPl": [
      "przymierzalnia"
    ],
    "acceptedFr": [
      "cabine d'essayage",
      "la cabine d'essayage",
      "cabine"
    ],
    "distractorsPl": [
      "kasa",
      "toaleta",
      "wejście"
    ],
    "distractorsFr": [
      "caisse",
      "toilettes",
      "entrée"
    ]
  },
  {
    "id": "phr-17-6",
    "date": "2026-11-17",
    "pl": "oczywiście",
    "fr": "bien sûr, évidemment",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "oczywiście",
      "oczywiscie"
    ],
    "acceptedFr": [
      "bien sûr",
      "bien sur",
      "évidemment",
      "naturellement"
    ],
    "distractorsPl": [
      "być może",
      "na pewno nie",
      "niestety"
    ],
    "distractorsFr": [
      "peut-être",
      "certainement pas",
      "malheureusement"
    ]
  },
  {
    "id": "adj-17-5",
    "date": "2026-11-17",
    "pl": "za duży",
    "fr": "trop grand",
    "category": "Adjectifs",
    "acceptedPl": [
      "za duży",
      "za duzy"
    ],
    "acceptedFr": [
      "trop grand"
    ],
    "distractorsPl": [
      "za mały",
      "za wąski",
      "idealny"
    ],
    "distractorsFr": [
      "trop petit",
      "trop étroit",
      "parfait"
    ]
  },
  {
    "id": "adj-17-6",
    "date": "2026-11-17",
    "pl": "mniejszy",
    "fr": "plus petit",
    "category": "Adjectifs",
    "acceptedPl": [
      "mniejszy"
    ],
    "acceptedFr": [
      "plus petit"
    ],
    "distractorsPl": [
      "większy",
      "tańszy",
      "lepszy"
    ],
    "distractorsFr": [
      "plus grand",
      "moins cher",
      "meilleur"
    ]
  },
  {
    "id": "vet-17-18",
    "date": "2026-11-17",
    "pl": "Czy jest mniejszy?",
    "fr": "Y en a-t-il un plus petit ?",
    "category": "Vêtements & Mode",
    "acceptedPl": [
      "Czy jest mniejszy?"
    ],
    "acceptedFr": [
      "Y en a-t-il un plus petit ?",
      "Est-ce qu'il y en a un plus petit ?"
    ],
    "distractorsPl": [
      "Czy jest większy?",
      "Czy jest inny kolor?",
      "Ile kosztuje ten rozmiar?"
    ],
    "distractorsFr": [
      "Y en a-t-il un plus grand ?",
      "Y a-t-il une autre couleur ?",
      "Combien coûte cette taille ?"
    ]
  },
  {
    "id": "adj-17-7",
    "date": "2026-11-17",
    "pl": "tańszy",
    "fr": "moins cher",
    "category": "Adjectifs",
    "acceptedPl": [
      "tańszy",
      "tanszy"
    ],
    "acceptedFr": [
      "moins cher",
      "meilleur marché"
    ],
    "distractorsPl": [
      "droższy",
      "mniejszy",
      "większy"
    ],
    "distractorsFr": [
      "plus cher",
      "plus petit",
      "plus grand"
    ]
  },
  {
    "id": "vet-17-19",
    "date": "2026-11-17",
    "pl": "Czy są tańsze swetry?",
    "fr": "Y a-t-il des pulls moins chers ?",
    "category": "Vêtements & Mode",
    "acceptedPl": [
      "Czy są tańsze swetry?",
      "Czy sa tansze swetry?"
    ],
    "acceptedFr": [
      "Y a-t-il des pulls moins chers ?",
      "Est-ce qu'il y a des pulls moins chers ?"
    ],
    "distractorsPl": [
      "Czy ten sweter jest w promocji?",
      "Czy macie swetry wełniane?",
      "Gdzie wiszą męskie swetry?"
    ],
    "distractorsFr": [
      "Ce pull est-il en promotion ?",
      "Avez-vous des pulls en laine ?",
      "Où sont accrochés les pulls homme ?"
    ]
  },
  {
    "id": "adj-17-8",
    "date": "2026-11-17",
    "pl": "za drogi",
    "fr": "trop cher",
    "category": "Adjectifs",
    "acceptedPl": [
      "za drogi"
    ],
    "acceptedFr": [
      "trop cher"
    ],
    "distractorsPl": [
      "bardzo tani",
      "w sam raz",
      "za mały"
    ],
    "distractorsFr": [
      "très bon marché",
      "juste comme il faut",
      "trop petit"
    ]
  },
  {
    "id": "phr-17-7",
    "date": "2026-11-17",
    "pl": "Niestety nie ma.",
    "fr": "Malheureusement il n'y en a pas.",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "Niestety nie ma",
      "Niestety nie ma."
    ],
    "acceptedFr": [
      "Malheureusement il n'y en a pas",
      "Malheureusement il n'y a pas",
      "Non désolé il n'y en a pas"
    ],
    "distractorsPl": [
      "Oczywiście, proszę.",
      "Jest tam na półce.",
      "Zostały tylko dwa."
    ],
    "distractorsFr": [
      "Bien sûr, tenez.",
      "Il est là-bas sur l'étagère.",
      "Il n'en reste que deux."
    ]
  },
  {
    "id": "med-17-1",
    "date": "2026-11-17",
    "pl": "apteka",
    "fr": "la pharmacie",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "apteka"
    ],
    "acceptedFr": [
      "pharmacie",
      "la pharmacie",
      "une pharmacie"
    ],
    "distractorsPl": [
      "szpital",
      "przychodnia",
      "piekarnia"
    ],
    "distractorsFr": [
      "hôpital",
      "dispensaire médical",
      "boulangerie"
    ]
  },
  {
    "id": "med-17-2",
    "date": "2026-11-17",
    "pl": "w aptece",
    "fr": "à la pharmacie",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "w aptece"
    ],
    "acceptedFr": [
      "à la pharmacie",
      "a la pharmacie",
      "dans la pharmacie"
    ],
    "distractorsPl": [
      "w szpitalu",
      "u lekarza",
      "w sklepie"
    ],
    "distractorsFr": [
      "à l'hôpital",
      "chez le médecin",
      "au magasin"
    ]
  },
  {
    "id": "med-17-3",
    "date": "2026-11-17",
    "pl": "farmaceuta",
    "fr": "le pharmacien",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "farmaceuta"
    ],
    "acceptedFr": [
      "pharmacien",
      "le pharmacien",
      "un pharmacien"
    ],
    "distractorsPl": [
      "lekarz",
      "pacjent",
      "kelner"
    ],
    "distractorsFr": [
      "médecin",
      "patient",
      "serveur"
    ]
  },
  {
    "id": "med-17-4",
    "date": "2026-11-17",
    "pl": "kaszel",
    "fr": "la toux",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "kaszel"
    ],
    "acceptedFr": [
      "toux",
      "la toux",
      "une toux"
    ],
    "distractorsPl": [
      "katar",
      "gorączka",
      "ból"
    ],
    "distractorsFr": [
      "rhume",
      "fièvre",
      "douleur"
    ]
  },
  {
    "id": "med-17-5",
    "date": "2026-11-17",
    "pl": "Mam kaszel.",
    "fr": "Je tousse / J'ai une toux.",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "Mam kaszel",
      "Mam kaszel."
    ],
    "acceptedFr": [
      "Je tousse",
      "J'ai une toux",
      "J'ai de la toux"
    ],
    "distractorsPl": [
      "Boli mnie gardło.",
      "Mam gorączkę.",
      "Jestem zmęczony."
    ],
    "distractorsFr": [
      "J'ai mal à la gorge.",
      "J'ai de la fièvre.",
      "Je suis fatigué."
    ]
  },
  {
    "id": "med-17-6",
    "date": "2026-11-17",
    "pl": "Od kiedy?",
    "fr": "Depuis quand ?",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "Od kiedy?",
      "Od kiedy"
    ],
    "acceptedFr": [
      "Depuis quand ?",
      "Depuis quand"
    ],
    "distractorsPl": [
      "Do kiedy?",
      "O której godzinie?",
      "Jak długo?"
    ],
    "distractorsFr": [
      "Jusqu'à quand ?",
      "À quelle heure ?",
      "Combien de temps ?"
    ]
  },
  {
    "id": "med-17-7",
    "date": "2026-11-17",
    "pl": "od dwóch dni",
    "fr": "depuis deux jours",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "od dwóch dni",
      "od dwoch dni"
    ],
    "acceptedFr": [
      "depuis deux jours"
    ],
    "distractorsPl": [
      "od trzech dni",
      "od wczoraj",
      "dwa dni temu"
    ],
    "distractorsFr": [
      "depuis trois jours",
      "depuis hier",
      "il y a deux jours"
    ]
  },
  {
    "id": "med-17-8",
    "date": "2026-11-17",
    "pl": "od trzech dni",
    "fr": "depuis trois jours",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "od trzech dni"
    ],
    "acceptedFr": [
      "depuis trois jours"
    ],
    "distractorsPl": [
      "od czterech dni",
      "od tygodnia",
      "trzy dni temu"
    ],
    "distractorsFr": [
      "depuis quatre jours",
      "depuis une semaine",
      "il y a trois jours"
    ]
  },
  {
    "id": "med-17-9",
    "date": "2026-11-17",
    "pl": "od pięciu dni",
    "fr": "depuis cinq jours",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "od pięciu dni",
      "od pieciu dni"
    ],
    "acceptedFr": [
      "depuis cinq jours"
    ],
    "distractorsPl": [
      "od sześciu dni",
      "od dziesięciu dni",
      "pięć dni temu"
    ],
    "distractorsFr": [
      "depuis six jours",
      "depuis dix jours",
      "il y a cinq jours"
    ]
  },
  {
    "id": "med-17-10",
    "date": "2026-11-17",
    "pl": "gorączka",
    "fr": "la fièvre",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "gorączka",
      "goraczka"
    ],
    "acceptedFr": [
      "fièvre",
      "la fièvre",
      "de la fièvre",
      "fievre"
    ],
    "distractorsPl": [
      "temperatura",
      "katar",
      "syrop"
    ],
    "distractorsFr": [
      "température",
      "rhume",
      "sirop"
    ]
  },
  {
    "id": "med-17-11",
    "date": "2026-11-17",
    "pl": "Czy ma pan gorączkę?",
    "fr": "Avez-vous de la fièvre ? (à un homme)",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "Czy ma pan gorączkę?",
      "Czy ma pan goraczke?"
    ],
    "acceptedFr": [
      "Avez-vous de la fièvre ?",
      "Vous avez de la fièvre ?",
      "As-tu de la fièvre ?"
    ],
    "distractorsPl": [
      "Czy ma pan receptę?",
      "Czy boli pana głowa?",
      "Od kiedy pan kaszle?"
    ],
    "distractorsFr": [
      "Avez-vous une ordonnance ?",
      "Avez-vous mal à la tête ?",
      "Depuis quand toussez-vous ?"
    ]
  },
  {
    "id": "med-17-12",
    "date": "2026-11-17",
    "pl": "Nie, nie mam gorączki.",
    "fr": "Non, je n'ai pas de fièvre.",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "Nie, nie mam gorączki",
      "Nie, nie mam goraczki"
    ],
    "acceptedFr": [
      "Non je n'ai pas de fièvre",
      "Non, je n'ai pas de fievre"
    ],
    "distractorsPl": [
      "Tak, mam wysoką gorączkę.",
      "Mam małą temperaturę.",
      "Czuję się bardzo źle."
    ],
    "distractorsFr": [
      "Oui j'ai une forte fièvre.",
      "J'ai un peu de température.",
      "Je me sens très mal."
    ]
  },
  {
    "id": "med-17-13",
    "date": "2026-11-17",
    "pl": "Mam temperaturę.",
    "fr": "J'ai de la température.",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "Mam temperaturę",
      "Mam temperature"
    ],
    "acceptedFr": [
      "J'ai de la température",
      "J'ai de la fievre"
    ],
    "distractorsPl": [
      "Jest mi zimno.",
      "Mam 36 stopni.",
      "Nie mam termometru."
    ],
    "distractorsFr": [
      "J'ai froid.",
      "J'ai 36 degrés.",
      "Je n'ai pas de thermomètre."
    ]
  },
  {
    "id": "med-17-14",
    "date": "2026-11-17",
    "pl": "syrop",
    "fr": "le sirop",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "syrop"
    ],
    "acceptedFr": [
      "sirop",
      "le sirop",
      "du sirop"
    ],
    "distractorsPl": [
      "tabletki",
      "krople",
      "herbata"
    ],
    "distractorsFr": [
      "comprimés",
      "gouttes",
      "thé"
    ]
  },
  {
    "id": "med-17-15",
    "date": "2026-11-17",
    "pl": "tabletki",
    "fr": "les comprimés, les pastilles",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "tabletki"
    ],
    "acceptedFr": [
      "comprimés",
      "les comprimés",
      "pastilles",
      "des cachets"
    ],
    "distractorsPl": [
      "syrop",
      "witamina",
      "recepta"
    ],
    "distractorsFr": [
      "sirop",
      "vitamine",
      "ordonnance"
    ]
  },
  {
    "id": "med-17-16",
    "date": "2026-11-17",
    "pl": "ból",
    "fr": "la douleur, le mal",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "ból",
      "bol"
    ],
    "acceptedFr": [
      "douleur",
      "la douleur",
      "mal",
      "le mal"
    ],
    "distractorsPl": [
      "choroba",
      "lek",
      "gorączka"
    ],
    "distractorsFr": [
      "maladie",
      "médicament",
      "fièvre"
    ]
  },
  {
    "id": "med-17-17",
    "date": "2026-11-17",
    "pl": "ból głowy",
    "fr": "mal de tête",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "ból głowy",
      "bol glowy"
    ],
    "acceptedFr": [
      "mal de tête",
      "mal de tete",
      "le mal de tête"
    ],
    "distractorsPl": [
      "ból gardła",
      "ból brzucha",
      "ból zęba"
    ],
    "distractorsFr": [
      "mal de gorge",
      "mal de ventre",
      "mal de dent"
    ]
  },
  {
    "id": "med-17-18",
    "date": "2026-11-17",
    "pl": "gardło",
    "fr": "la gorge",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "gardło",
      "gardlo"
    ],
    "acceptedFr": [
      "gorge",
      "la gorge"
    ],
    "distractorsPl": [
      "głowa",
      "ucho",
      "nos"
    ],
    "distractorsFr": [
      "tête",
      "oreille",
      "nez"
    ]
  },
  {
    "id": "med-17-19",
    "date": "2026-11-17",
    "pl": "ból gardła",
    "fr": "mal de gorge",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "ból gardła",
      "bol gardla"
    ],
    "acceptedFr": [
      "mal de gorge",
      "le mal de gorge"
    ],
    "distractorsPl": [
      "ból głowy",
      "kaszel",
      "gorączka"
    ],
    "distractorsFr": [
      "mal de tête",
      "toux",
      "fièvre"
    ]
  },
  {
    "id": "med-17-20",
    "date": "2026-11-17",
    "pl": "potwierdzenie",
    "fr": "la confirmation, le reçu",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "potwierdzenie"
    ],
    "acceptedFr": [
      "confirmation",
      "reçu",
      "le reçu",
      "la confirmation"
    ],
    "distractorsPl": [
      "paragon",
      "faktura",
      "recepta"
    ],
    "distractorsFr": [
      "ticket de caisse",
      "facture",
      "ordonnance"
    ]
  },
  {
    "id": "med-17-21",
    "date": "2026-11-17",
    "pl": "Drukować potwierdzenie?",
    "fr": "Imprimer le reçu ?",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "Drukować potwierdzenie?",
      "Drukowac potwierdzenie?"
    ],
    "acceptedFr": [
      "Imprimer le reçu ?",
      "Faut-il imprimer le reçu ?"
    ],
    "distractorsPl": [
      "Dać paragon?",
      "Płaci pan kartą?",
      "Czy to wszystko?"
    ],
    "distractorsFr": [
      "Donner le ticket de caisse ?",
      "Payez-vous par carte ?",
      "Est-ce tout ?"
    ]
  },
  {
    "id": "med-17-22",
    "date": "2026-11-17",
    "pl": "paragon",
    "fr": "le ticket de caisse",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "paragon"
    ],
    "acceptedFr": [
      "ticket de caisse",
      "le ticket de caisse",
      "ticket"
    ],
    "distractorsPl": [
      "bilet",
      "rachunek",
      "pieniądze"
    ],
    "distractorsFr": [
      "ticket de transport",
      "addition / compte",
      "argent"
    ]
  },
  {
    "id": "med-17-23",
    "date": "2026-11-17",
    "pl": "Dać paragon?",
    "fr": "Voulez-vous le ticket de caisse ?",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "Dać paragon?",
      "Dac paragon?"
    ],
    "acceptedFr": [
      "Voulez-vous le ticket de caisse ?",
      "Donner le ticket de caisse ?"
    ],
    "distractorsPl": [
      "Drukować potwierdzenie?",
      "Czy ma pan kartę?",
      "Ile reszty?"
    ],
    "distractorsFr": [
      "Imprimer le reçu ?",
      "Avez-vous la carte ?",
      "Combien de monnaie ?"
    ]
  },
  {
    "id": "phr-17-8",
    "date": "2026-11-17",
    "pl": "Wczoraj nic nie robiłem, bo był dzień wolny.",
    "fr": "Hier je n'ai rien fait, car c'était un jour férié.",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "Wczoraj nic nie robiłem, bo był dzień wolny",
      "Wczoraj nic nie robilem, bo byl dzien wolny"
    ],
    "acceptedFr": [
      "Hier je n'ai rien fait car c'était un jour férié",
      "Hier je n'ai rien fait parce que c'était un jour férié"
    ],
    "distractorsPl": [
      "Dzisiaj odpoczywam w domu.",
      "Jutro będę miał dużo pracy.",
      "W weekend pracowałem w biurze."
    ],
    "distractorsFr": [
      "Aujourd'hui je me repose à la maison.",
      "Demain j'aurai beaucoup de travail.",
      "Pendant le week-end j'ai travaillé au bureau."
    ]
  },
  {
    "id": "tr-17-1",
    "date": "2026-11-17",
    "pl": "Jak jedziesz do biura: samochodem czy metrem?",
    "fr": "Comment vas-tu au bureau : en voiture ou en métro ?",
    "category": "Voyage & Aéroport",
    "acceptedPl": [
      "Jak jedziesz do biura: samochodem czy metrem?",
      "Jak jedziesz do biura samochodem czy metrem?"
    ],
    "acceptedFr": [
      "Comment vas-tu au bureau en voiture ou en métro ?",
      "Comment vas-tu au bureau : en voiture ou en métro ?"
    ],
    "distractorsPl": [
      "O której godzinie jedziesz do biura?",
      "Ile czasu jedziesz autobusem?",
      "Czy twoje biuro jest daleko?"
    ],
    "distractorsFr": [
      "À quelle heure vas-tu au bureau ?",
      "Combien de temps mets-tu en bus ?",
      "Ton bureau est-il loin ?"
    ]
  },
  {
    "id": "tr-17-2",
    "date": "2026-11-17",
    "pl": "Moje biuro jest piętnaście minut od mojego domu.",
    "fr": "Mon bureau est à quinze minutes de chez moi.",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "Moje biuro jest piętnaście minut od mojego domu",
      "Moje biuro jest pietnascie minut od mojego domu"
    ],
    "acceptedFr": [
      "Mon bureau est à quinze minutes de chez moi",
      "Mon bureau est à 15 minutes de chez moi"
    ],
    "distractorsPl": [
      "Mój dom jest bardzo blisko biura.",
      "Do pracy jadę pół godziny.",
      "Pracuję zdalnie z domu."
    ],
    "distractorsFr": [
      "Ma maison est très près du bureau.",
      "Je mets une demi-heure pour aller au travail.",
      "Je télétravaille depuis chez moi."
    ]
  },
  {
    "id": "phr-17-9",
    "date": "2026-11-17",
    "pl": "ode mnie",
    "fr": "de chez moi, de moi",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "ode mnie"
    ],
    "acceptedFr": [
      "de chez moi",
      "de moi"
    ],
    "distractorsPl": [
      "od ciebie",
      "do mnie",
      "u mnie"
    ],
    "distractorsFr": [
      "de chez toi",
      "vers moi / chez moi",
      "chez moi (statique)"
    ]
  },
  {
    "id": "phr-17-10",
    "date": "2026-11-17",
    "pl": "od ciebie",
    "fr": "de chez toi, de toi",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "od ciebie"
    ],
    "acceptedFr": [
      "de chez toi",
      "de toi"
    ],
    "distractorsPl": [
      "ode mnie",
      "do ciebie",
      "u ciebie"
    ],
    "distractorsFr": [
      "de chez moi",
      "vers chez toi",
      "chez toi (statique)"
    ]
  },
  {
    "id": "phr-17-11",
    "date": "2026-11-17",
    "pl": "Odpoczywają przed restauracją, na ulicy.",
    "fr": "Ils se reposent devant un restaurant, dans la rue.",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "Odpoczywają przed restauracją, na ulicy",
      "Odpoczywaja przed restauracja, na ulicy"
    ],
    "acceptedFr": [
      "Ils se reposent devant un restaurant dans la rue"
    ],
    "distractorsPl": [
      "Jedzą obiad w restauracji.",
      "Czekają na stolik w kawiarni.",
      "Spacerują po starym mieście."
    ],
    "distractorsFr": [
      "Ils déjeunent au restaurant.",
      "Ils attendent une table au café.",
      "Ils se promènent dans la vieille ville."
    ]
  },
  {
    "id": "phr-17-12",
    "date": "2026-11-17",
    "pl": "oni czytają",
    "fr": "ils lisent",
    "category": "Phrases & Quotidien",
    "acceptedPl": [
      "oni czytają",
      "oni czytaja"
    ],
    "acceptedFr": [
      "ils lisent",
      "elles lisent"
    ],
    "distractorsPl": [
      "oni piszą",
      "oni mówią",
      "oni śpią"
    ],
    "distractorsFr": [
      "ils écrivent",
      "ils parlent",
      "ils dorment"
    ]
  },
  {
    "id": "nat-17-1",
    "date": "2026-11-17",
    "pl": "Lubisz spać w namiocie blisko jeziora?",
    "fr": "Aimes-tu dormir dans une tente près d'un lac ?",
    "category": "Voyage & Aéroport",
    "acceptedPl": [
      "Lubisz spać w namiocie blisko jeziora?",
      "Lubisz spac w namiocie blisko jeziora?"
    ],
    "acceptedFr": [
      "Aimes-tu dormir dans une tente près d'un lac ?",
      "Tu aimes dormir en tente près du lac ?"
    ],
    "distractorsPl": [
      "Często jeździsz nad morze?",
      "Lubisz chodzić po górach?",
      "Gdzie kupiłeś ten namiot?"
    ],
    "distractorsFr": [
      "Vas-tu souvent à la mer ?",
      "Aimes-tu marcher en montagne ?",
      "Où as-tu acheté cette tente ?"
    ]
  },
  {
    "id": "nat-17-2",
    "date": "2026-11-17",
    "pl": "blisko jeziora",
    "fr": "près du lac",
    "category": "Voyage & Aéroport",
    "acceptedPl": [
      "blisko jeziora"
    ],
    "acceptedFr": [
      "près du lac",
      "pres du lac",
      "proche du lac"
    ],
    "distractorsPl": [
      "nad morzem",
      "w górach",
      "daleko od wody"
    ],
    "distractorsFr": [
      "au bord de la mer",
      "en montagne",
      "loin de l'eau"
    ]
  },
  {
    "id": "nat-17-3",
    "date": "2026-11-17",
    "pl": "spaść",
    "fr": "tomber, chuter (d'en haut)",
    "category": "Expressions & Phrases",
    "acceptedPl": [
      "spaść",
      "spasc"
    ],
    "acceptedFr": [
      "tomber",
      "chuter"
    ],
    "distractorsPl": [
      "spać",
      "wstać",
      "biec"
    ],
    "distractorsFr": [
      "dormir",
      "se lever",
      "courir"
    ]
  },
  {
    "id": "tr-17-3",
    "date": "2026-11-17",
    "pl": "W moim mieście nie ma metra, ale są autobusy i tramwaje.",
    "fr": "Dans ma ville il n'y a pas de métro, mais il y a des bus et des tramways.",
    "category": "Voyage & Aéroport",
    "acceptedPl": [
      "W moim mieście nie ma metra, ale są autobusy i tramwaje",
      "W moim miescie nie ma metra, ale sa autobusy i tramwaje"
    ],
    "acceptedFr": [
      "Dans ma ville il n'y a pas de métro mais il y a des bus et des tramways"
    ],
    "distractorsPl": [
      "W moim mieście jest tylko jedna linia metra.",
      "Tramwaje i autobusy są za drogie.",
      "Codziennie jeżdżę samochodem do centrum."
    ],
    "distractorsFr": [
      "Dans ma ville il n'y a qu'une seule ligne de métro.",
      "Les trams et bus sont trop chers.",
      "Je vais tous les jours en voiture au centre."
    ]
  }
];

const CASE_CHALLENGES = [
  // ------------------------------------------
  // 1. BIERNIK (ACCUSATIF)
  // Rôle : Complément d'Objet Direct (COD)
  // Verbes clés : poproszę, mieć, lubić, chcieć, czytać, jeść, pić, zamawiać...
  // Règle générale :
  // - Féminin singulier en -a -> -ę
  // - Masculin animé (personne, animal) -> -a
  // - Masculin inanimé & Neutre -> invariable (forme identique au nominatif)
  // ------------------------------------------
  {
    id: "case-b-1",
    date: "2026-10-19",
    caseName: "Biernik",
    caseLabelFr: "Accusatif (Biernik)",
    caseBadgeClass: "case-biernik",
    sentenceBefore: "Poproszę kaw",
    sentenceAfter: ", proszę.",
    gapWord: "kawa",
    gender: "féminin",
    correctEnding: "-ę",
    fullCorrectWord: "kawę",
    fullSentence: "Poproszę kawę, proszę.",
    translationFr: "Un café, s'il vous plaît.",
    ruleExplanation: "Après <strong>Poproszę</strong> (verbe demandant un COD), on emploie l'<strong>Accusatif (Biernik)</strong>. Pour un nom féminin singulier se terminant par <em>-a</em>, la terminaison devient <strong>-ę</strong> (kawa &rarr; kawę).",
    options: [
      { ending: "-ę", word: "kawę", isCorrect: true, note: "Accusatif (Biernik)" },
      { ending: "-ą", word: "kawą", isCorrect: false, note: "Instrumental (-ą)" },
      { ending: "-y", word: "kawy", isCorrect: false, note: "Génitif (-y)" },
      { ending: "-ie", word: "kawie", isCorrect: false, note: "Locatif / Datif (-ie)" }
    ]
  },
  {
    id: "case-b-2",
    date: "2026-10-19",
    caseName: "Biernik",
    caseLabelFr: "Accusatif (Biernik)",
    caseBadgeClass: "case-biernik",
    sentenceBefore: "Chciałbym herbat",
    sentenceAfter: " z cytryną.",
    gapWord: "herbata",
    gender: "féminin",
    correctEnding: "-ę",
    fullCorrectWord: "herbatę",
    fullSentence: "Chciałbym herbatę z cytryną.",
    translationFr: "Je voudrais un thé au citron.",
    ruleExplanation: "Après <strong>Chciałbym / Chciałabym</strong> (je voudrais), l'objet demandé est à l'<strong>Accusatif (Biernik)</strong>. Le nom féminin <em>herbata</em> prend la terminaison <strong>-ę</strong>.",
    options: [
      { ending: "-ę", word: "herbatę", isCorrect: true, note: "Accusatif (Biernik)" },
      { ending: "-ą", word: "herbatą", isCorrect: false, note: "Instrumental (-ą)" },
      { ending: "-y", word: "herbaty", isCorrect: false, note: "Génitif (-y)" },
      { ending: "-ie", word: "herbacie", isCorrect: false, note: "Locatif (-ie)" }
    ]
  },
  {
    id: "case-b-3",
    date: "2026-10-19",
    caseName: "Biernik",
    caseLabelFr: "Accusatif (Biernik)",
    caseBadgeClass: "case-biernik",
    sentenceBefore: "Poproszę zup",
    sentenceAfter: " i chleb.",
    gapWord: "zupa",
    gender: "féminin",
    correctEnding: "-ę",
    fullCorrectWord: "zupę",
    fullSentence: "Poproszę zupę i chleb.",
    translationFr: "Une soupe et du pain, s'il vous plaît.",
    ruleExplanation: "Au restaurant, pour commander avec <strong>Poproszę</strong>, le nom féminin <em>zupa</em> passe à l'<strong>Accusatif</strong> en prenant la terminaison <strong>-ę</strong>.",
    options: [
      { ending: "-ę", word: "zupę", isCorrect: true, note: "Accusatif (Biernik)" },
      { ending: "-ą", word: "zupą", isCorrect: false, note: "Instrumental (-ą)" },
      { ending: "-y", word: "zupy", isCorrect: false, note: "Génitif (-y)" },
      { ending: "-ie", word: "zupie", isCorrect: false, note: "Locatif (-ie)" }
    ]
  },
  {
    id: "case-b-4",
    date: "2026-10-19",
    caseName: "Biernik",
    caseLabelFr: "Accusatif (Biernik)",
    caseBadgeClass: "case-biernik",
    sentenceBefore: "Poproszę wod",
    sentenceAfter: " niegazowaną.",
    gapWord: "woda",
    gender: "féminin",
    correctEnding: "-ę",
    fullCorrectWord: "wodę",
    fullSentence: "Poproszę wodę niegazowaną.",
    translationFr: "De l'eau plate, s'il vous plaît.",
    ruleExplanation: "<em>Woda</em> est un nom féminin. À l'<strong>Accusatif (Biernik)</strong>, il se termine en <strong>-ę</strong> (wodę). Notez aussi l'adjectif qui prend <em>-ą</em> : <em>niegazowaną</em>.",
    options: [
      { ending: "-ę", word: "wodę", isCorrect: true, note: "Accusatif (Biernik)" },
      { ending: "-ą", word: "wodą", isCorrect: false, note: "Instrumental (-ą)" },
      { ending: "-y", word: "wody", isCorrect: false, note: "Génitif (-y)" },
      { ending: "-zie", word: "wodzie", isCorrect: false, note: "Locatif (-zie)" }
    ]
  },
  {
    id: "case-b-5",
    date: "2026-10-19",
    caseName: "Biernik",
    caseLabelFr: "Accusatif (Biernik)",
    caseBadgeClass: "case-biernik",
    sentenceBefore: "Czy ma pani rezerwacj",
    sentenceAfter: "?",
    gapWord: "rezerwacja",
    gender: "féminin",
    correctEnding: "-ę",
    fullCorrectWord: "rezerwację",
    fullSentence: "Czy ma pani rezerwację?",
    translationFr: "Avez-vous une réservation ?",
    ruleExplanation: "Après le verbe <strong>mieć</strong> (avoir) à la forme affirmative, on emploie l'<strong>Accusatif (Biernik)</strong>. Le nom féminin <em>rezerwacja</em> devient <strong>rezerwację</strong>.",
    options: [
      { ending: "-ę", word: "rezerwację", isCorrect: true, note: "Accusatif (Biernik)" },
      { ending: "-ą", word: "rezerwacją", isCorrect: false, note: "Instrumental (-ą)" },
      { ending: "-i", word: "rezerwacji", isCorrect: false, note: "Génitif (-i)" },
      { ending: "-o", word: "rezerwacjo", isCorrect: false, note: "Vocatif (-o)" }
    ]
  },
  {
    id: "case-b-6",
    date: "2026-10-19",
    caseName: "Biernik",
    caseLabelFr: "Accusatif (Biernik)",
    caseBadgeClass: "case-biernik",
    sentenceBefore: "Proszę położyć walizk",
    sentenceAfter: " tutaj.",
    gapWord: "walizka",
    gender: "féminin",
    correctEnding: "-ę",
    fullCorrectWord: "walizkę",
    fullSentence: "Proszę położyć walizkę tutaj.",
    translationFr: "Veuillez poser la valise ici.",
    ruleExplanation: "Le verbe d'action <strong>położyć</strong> (poser) régit un COD à l'<strong>Accusatif</strong>. Le féminin <em>walizka</em> prend donc la terminaison <strong>-ę</strong>.",
    options: [
      { ending: "-ę", word: "walizkę", isCorrect: true, note: "Accusatif (Biernik)" },
      { ending: "-ą", word: "walizką", isCorrect: false, note: "Instrumental (-ą)" },
      { ending: "-i", word: "walizki", isCorrect: false, note: "Génitif (-i)" },
      { ending: "-ce", word: "walizce", isCorrect: false, note: "Locatif (-ce)" }
    ]
  },
  {
    id: "case-b-7",
    date: "2026-10-19",
    caseName: "Biernik",
    caseLabelFr: "Accusatif (Biernik)",
    caseBadgeClass: "case-biernik",
    sentenceBefore: "Mam syn",
    sentenceAfter: " i córkę.",
    gapWord: "syn",
    gender: "masculin animé",
    correctEnding: "-a",
    fullCorrectWord: "syna",
    fullSentence: "Mam syna i córkę.",
    translationFr: "J'ai un fils et une fille.",
    ruleExplanation: "<strong>Règle clé du polonais :</strong> Pour les noms <em>masculins animés</em> (êtres vivants, personnes, animaux), l'<strong>Accusatif (Biernik)</strong> prend la terminaison <strong>-a</strong> (syn &rarr; syna, brat &rarr; brata).",
    options: [
      { ending: "-a", word: "syna", isCorrect: true, note: "Accusatif masc. animé (-a)" },
      { ending: "-em", word: "synem", isCorrect: false, note: "Instrumental (-em)" },
      { ending: "-owi", word: "synowi", isCorrect: false, note: "Datif (-owi)" },
      { ending: "-ie", word: "synie", isCorrect: false, note: "Locatif (-ie)" }
    ]
  },
  {
    id: "case-b-8",
    date: "2026-10-19",
    caseName: "Biernik",
    caseLabelFr: "Accusatif (Biernik)",
    caseBadgeClass: "case-biernik",
    sentenceBefore: "Mam starszego brat",
    sentenceAfter: ".",
    gapWord: "brat",
    gender: "masculin animé",
    correctEnding: "-a",
    fullCorrectWord: "brata",
    fullSentence: "Mam starszego brata.",
    translationFr: "J'ai un frère aîné.",
    ruleExplanation: "Après <em>mam</em>, <em>brat</em> étant un nom masculin animé (personne), il prend la désinence <strong>-a</strong> à l'<strong>Accusatif</strong> (Mam brata).",
    options: [
      { ending: "-a", word: "brata", isCorrect: true, note: "Accusatif masc. animé (-a)" },
      { ending: "-em", word: "bratem", isCorrect: false, note: "Instrumental (-em)" },
      { ending: "-u", word: "bratu", isCorrect: false, note: "Datif / Locatif (-u)" },
      { ending: "-owi", word: "bratowi", isCorrect: false, note: "Datif (-owi)" }
    ]
  },
  {
    id: "case-b-9",
    date: "2026-10-19",
    caseName: "Biernik",
    caseLabelFr: "Accusatif (Biernik)",
    caseBadgeClass: "case-biernik",
    sentenceBefore: "Mam ps",
    sentenceAfter: " i kota.",
    gapWord: "pies",
    gender: "masculin animé (animal)",
    correctEnding: "-a",
    fullCorrectWord: "psa",
    fullSentence: "Mam psa i kota.",
    translationFr: "J'ai un chien et un chat.",
    ruleExplanation: "Pour les animaux au masculin singulier (masculin animé), l'<strong>Accusatif</strong> prend <strong>-a</strong> : <em>pies</em> devient <strong>psa</strong> (avec chute du 'ie').",
    options: [
      { ending: "-a", word: "psa", isCorrect: true, note: "Accusatif masc. animé (-a)" },
      { ending: "-em", word: "psem", isCorrect: false, note: "Instrumental (-em)" },
      { ending: "-owi", word: "psowi", isCorrect: false, note: "Datif (-owi)" },
      { ending: "-ie", word: "psie", isCorrect: false, note: "Locatif (-ie)" }
    ]
  },
  {
    id: "case-b-10",
    date: "2026-10-19",
    caseName: "Biernik",
    caseLabelFr: "Accusatif (Biernik)",
    caseBadgeClass: "case-biernik",
    sentenceBefore: "Czytam ciekawą książk",
    sentenceAfter: ".",
    gapWord: "książka",
    gender: "féminin",
    correctEnding: "-ę",
    fullCorrectWord: "książkę",
    fullSentence: "Czytam ciekawą książkę.",
    translationFr: "Je lis un livre intéressant.",
    ruleExplanation: "Après le verbe <em>czytam</em> (je lis), le nom féminin <em>książka</em> prend la terminaison d'<strong>Accusatif</strong> <strong>-ę</strong>.",
    options: [
      { ending: "-ę", word: "książkę", isCorrect: true, note: "Accusatif (Biernik)" },
      { ending: "-ą", word: "książką", isCorrect: false, note: "Instrumental (-ą)" },
      { ending: "-i", word: "książki", isCorrect: false, note: "Génitif (-i)" },
      { ending: "-ce", word: "książce", isCorrect: false, note: "Locatif (-ce)" }
    ]
  },
  {
    id: "case-b-11",
    date: "2026-10-19",
    caseName: "Biernik",
    caseLabelFr: "Accusatif (Biernik)",
    caseBadgeClass: "case-biernik",
    sentenceBefore: "Chcę wysłać paczk",
    sentenceAfter: " do Polski.",
    gapWord: "paczka",
    gender: "féminin",
    correctEnding: "-ę",
    fullCorrectWord: "paczkę",
    fullSentence: "Chcę wysłać paczkę do Polski.",
    translationFr: "Je veux envoyer un colis en Pologne.",
    ruleExplanation: "Après <em>wysłać</em> (envoyer), le nom féminin <em>paczka</em> est COD et prend <strong>-ę</strong> à l'<strong>Accusatif</strong>.",
    options: [
      { ending: "-ę", word: "paczkę", isCorrect: true, note: "Accusatif (Biernik)" },
      { ending: "-ą", word: "paczką", isCorrect: false, note: "Instrumental (-ą)" },
      { ending: "-i", word: "paczki", isCorrect: false, note: "Génitif (-i)" },
      { ending: "-ce", word: "paczce", isCorrect: false, note: "Locatif (-ce)" }
    ]
  },
  {
    id: "case-b-12",
    date: "2026-10-19",
    caseName: "Biernik",
    caseLabelFr: "Accusatif (Biernik)",
    caseBadgeClass: "case-biernik",
    sentenceBefore: "Jem świeże jabłk",
    sentenceAfter: ".",
    gapWord: "jabłko",
    gender: "neutre",
    correctEnding: "-o",
    fullCorrectWord: "jabłko",
    fullSentence: "Jem świeże jabłko.",
    translationFr: "Je mange une pomme fraîche.",
    ruleExplanation: "<strong>Règle des noms neutres :</strong> À l'<strong>Accusatif (Biernik)</strong>, tous les noms neutres singuliers restent <strong>identiques au Nominatif</strong> (jabłko &rarr; jabłko, mleko &rarr; mleko).",
    options: [
      { ending: "-o", word: "jabłko", isCorrect: true, note: "Accusatif neutre (identique)" },
      { ending: "-a", word: "jabłka", isCorrect: false, note: "Génitif (-a)" },
      { ending: "-iem", word: "jabłkiem", isCorrect: false, note: "Instrumental (-iem)" },
      { ending: "-u", word: "jabłku", isCorrect: false, note: "Locatif (-u)" }
    ]
  },

  // ------------------------------------------
  // 2. NARZĘDNIK (INSTRUMENTAL)
  // Rôle : Moyen, accompagnement avec 'z' (avec), profession / nationalité avec 'być'
  // Règle générale :
  // - Féminin singulier -> -ą
  // - Masculin & Neutre singulier -> -em (ou -iem après k/g)
  // ------------------------------------------
  {
    id: "case-n-1",
    date: "2026-10-19",
    caseName: "Narzędnik",
    caseLabelFr: "Instrumental (Narzędnik)",
    caseBadgeClass: "case-narzednik",
    sentenceBefore: "Poproszę kawę z mlek",
    sentenceAfter: ".",
    gapWord: "mleko",
    gender: "neutre",
    correctEnding: "-iem",
    fullCorrectWord: "mlekiem",
    fullSentence: "Poproszę kawę z mlekiem.",
    translationFr: "Un café au lait, s'il vous plaît.",
    ruleExplanation: "Après la préposition <strong>z / ze</strong> (avec), on utilise toujours le <strong>Narzędnik (Instrumental)</strong>. Le nom neutre <em>mleko</em> (terminé par 'k') prend la terminaison <strong>-iem</strong>.",
    options: [
      { ending: "-iem", word: "mlekiem", isCorrect: true, note: "Instrumental neutre (-iem)" },
      { ending: "-a", word: "mleka", isCorrect: false, note: "Génitif (-a)" },
      { ending: "-u", word: "mleku", isCorrect: false, note: "Locatif (-u)" },
      { ending: "-o", word: "mleko", isCorrect: false, note: "Nominatif (-o)" }
    ]
  },
  {
    id: "case-n-2",
    date: "2026-10-19",
    caseName: "Narzędnik",
    caseLabelFr: "Instrumental (Narzędnik)",
    caseBadgeClass: "case-narzednik",
    sentenceBefore: "Piję herbatę z cukr",
    sentenceAfter: ".",
    gapWord: "cukier",
    gender: "masculin inanimé",
    correctEnding: "-em",
    fullCorrectWord: "cukrem",
    fullSentence: "Piję herbatę z cukrem.",
    translationFr: "Je bois du thé avec du sucre.",
    ruleExplanation: "Après <strong>z</strong> (avec), le nom masculin <em>cukier</em> se met à l'<strong>Instrumental (Narzędnik)</strong> en prenant la terminaison <strong>-em</strong> (avec perte du 'e' mobile : cukier &rarr; cukrem).",
    options: [
      { ending: "-em", word: "cukrem", isCorrect: true, note: "Instrumental masculin (-em)" },
      { ending: "-u", word: "cukru", isCorrect: false, note: "Génitif (-u)" },
      { ending: "Ø", word: "cukier", isCorrect: false, note: "Nominatif (forme de base)" },
      { ending: "-ze", word: "cukrze", isCorrect: false, note: "Locatif (-ze)" }
    ]
  },
  {
    id: "case-n-3",
    date: "2026-10-19",
    caseName: "Narzędnik",
    caseLabelFr: "Instrumental (Narzędnik)",
    caseBadgeClass: "case-narzednik",
    sentenceBefore: "Poproszę herbatę z cytryn",
    sentenceAfter: ".",
    gapWord: "cytryna",
    gender: "féminin",
    correctEnding: "-ą",
    fullCorrectWord: "cytryną",
    fullSentence: "Poproszę herbatę z cytryną.",
    translationFr: "Un thé avec du citron, s'il vous plaît.",
    ruleExplanation: "Après <strong>z</strong> (avec), tous les noms féminins singuliers prennent la terminaison d'<strong>Instrumental</strong> <strong>-ą</strong> (cytryna &rarr; cytryną). Ne confondez pas avec l'accusatif <em>-ę</em> !",
    options: [
      { ending: "-ą", word: "cytryną", isCorrect: true, note: "Instrumental féminin (-ą)" },
      { ending: "-ę", word: "cytrynę", isCorrect: false, note: "Accusatif (-ę)" },
      { ending: "-y", word: "cytryny", isCorrect: false, note: "Génitif (-y)" },
      { ending: "-ie", word: "cytrynie", isCorrect: false, note: "Locatif (-ie)" }
    ]
  },
  {
    id: "case-n-4",
    date: "2026-10-19",
    caseName: "Narzędnik",
    caseLabelFr: "Instrumental (Narzędnik)",
    caseBadgeClass: "case-narzednik",
    sentenceBefore: "Idę na spacer z brat",
    sentenceAfter: ".",
    gapWord: "brat",
    gender: "masculin animé",
    correctEnding: "-em",
    fullCorrectWord: "bratem",
    fullSentence: "Idę na spacer z bratem.",
    translationFr: "Je vais me promener avec mon frère.",
    ruleExplanation: "Pour exprimer l'accompagnement (avec qqn), <strong>z + Instrumental</strong> : les noms masculins prennent <strong>-em</strong> (brat &rarr; bratem, syn &rarr; synem).",
    options: [
      { ending: "-em", word: "bratem", isCorrect: true, note: "Instrumental masculin (-em)" },
      { ending: "-a", word: "brata", isCorrect: false, note: "Accusatif / Génitif (-a)" },
      { ending: "-owi", word: "bratowi", isCorrect: false, note: "Datif (-owi)" },
      { ending: "-u", word: "bratu", isCorrect: false, note: "Locatif (-u)" }
    ]
  },
  {
    id: "case-n-5",
    date: "2026-10-19",
    caseName: "Narzędnik",
    caseLabelFr: "Instrumental (Narzędnik)",
    caseBadgeClass: "case-narzednik",
    sentenceBefore: "Rozmawiam z siostr",
    sentenceAfter: ".",
    gapWord: "siostra",
    gender: "féminin",
    correctEnding: "-ą",
    fullCorrectWord: "siostrą",
    fullSentence: "Rozmawiam z siostrą.",
    translationFr: "Je discute avec ma sœur.",
    ruleExplanation: "Après la préposition <strong>z</strong> (avec), le nom féminin <em>siostra</em> prend la terminaison <strong>-ą</strong> du <strong>Narzędnik</strong>.",
    options: [
      { ending: "-ą", word: "siostrą", isCorrect: true, note: "Instrumental féminin (-ą)" },
      { ending: "-ę", word: "siostrę", isCorrect: false, note: "Accusatif (-ę)" },
      { ending: "-y", word: "siostry", isCorrect: false, note: "Génitif (-y)" },
      { ending: "-ze", word: "siostrze", isCorrect: false, note: "Locatif / Datif (-ze)" }
    ]
  },
  {
    id: "case-n-6",
    date: "2026-10-19",
    caseName: "Narzędnik",
    caseLabelFr: "Instrumental (Narzędnik)",
    caseBadgeClass: "case-narzednik",
    sentenceBefore: "Jestem Francuz",
    sentenceAfter: ".",
    gapWord: "Francuz",
    gender: "masculin",
    correctEnding: "-em",
    fullCorrectWord: "Francuzem",
    fullSentence: "Jestem Francuzem.",
    translationFr: "Je suis français.",
    ruleExplanation: "En polonais, pour exprimer la nationalité ou la profession après le verbe <strong>być</strong> (être), on utilise obligatoirement le <strong>Narzędnik</strong> : Francuz &rarr; <strong>Francuzem</strong>.",
    options: [
      { ending: "-em", word: "Francuzem", isCorrect: true, note: "Instrumental (après być)" },
      { ending: "-a", word: "Francuza", isCorrect: false, note: "Génitif (-a)" },
      { ending: "-owi", word: "Francuzowi", isCorrect: false, note: "Datif (-owi)" },
      { ending: "-ie", word: "Francuzie", isCorrect: false, note: "Locatif (-ie)" }
    ]
  },
  {
    id: "case-n-7",
    date: "2026-10-19",
    caseName: "Narzędnik",
    caseLabelFr: "Instrumental (Narzędnik)",
    caseBadgeClass: "case-narzednik",
    sentenceBefore: "Mój przyjaciel jest Polak",
    sentenceAfter: ".",
    gapWord: "Polak",
    gender: "masculin",
    correctEnding: "-iem",
    fullCorrectWord: "Polakiem",
    fullSentence: "Mój przyjaciel jest Polakiem.",
    translationFr: "Mon ami est polonais.",
    ruleExplanation: "Après <em>być</em>, le nom <em>Polak</em> se met au Narzędnik. Comme il se termine par la consonne vélaire 'k', il prend la terminaison <strong>-iem</strong> (Polakiem).",
    options: [
      { ending: "-iem", word: "Polakiem", isCorrect: true, note: "Instrumental après k (-iem)" },
      { ending: "-em", word: "Polakem", isCorrect: false, note: "Erreur phonétique (sans i)" },
      { ending: "-a", word: "Polaka", isCorrect: false, note: "Génitif (-a)" },
      { ending: "-u", word: "Polaku", isCorrect: false, note: "Locatif (-u)" }
    ]
  },
  {
    id: "case-n-8",
    date: "2026-10-19",
    caseName: "Narzędnik",
    caseLabelFr: "Instrumental (Narzędnik)",
    caseBadgeClass: "case-narzednik",
    sentenceBefore: "Ona jest nauczycielk",
    sentenceAfter: ".",
    gapWord: "nauczycielka",
    gender: "féminin",
    correctEnding: "-ą",
    fullCorrectWord: "nauczycielką",
    fullSentence: "Ona jest nauczycielką.",
    translationFr: "Elle est professeure.",
    ruleExplanation: "Pour une profession féminine après le verbe <em>być</em> (être), on utilise le Narzędnik avec la terminaison <strong>-ą</strong> (nauczycielka &rarr; nauczycielką).",
    options: [
      { ending: "-ą", word: "nauczycielką", isCorrect: true, note: "Instrumental féminin (-ą)" },
      { ending: "-ę", word: "nauczycielkę", isCorrect: false, note: "Accusatif (-ę)" },
      { ending: "-i", word: "nauczycielki", isCorrect: false, note: "Génitif (-i)" },
      { ending: "-ce", word: "nauczycielce", isCorrect: false, note: "Locatif (-ce)" }
    ]
  },

  // ------------------------------------------
  // 3. MIEJSCOWNIK (LOCATIF)
  // Rôle : Lieu statique où l'on se trouve
  // Prépositions exclusives : w / we (dans/en), na (à/sur), o (sur/à propos de), przy (près de)
  // Règle générale :
  // - -e avec adoucissement consonne (k->c, t->ci, r->rz...)
  // - -u pour les neutres en -o, masculins doux ou en k/g/ch
  // - -i / -y pour les féminins doux
  // ------------------------------------------
  {
    id: "case-m-1",
    date: "2026-10-19",
    caseName: "Miejscownik",
    caseLabelFr: "Locatif (Miejscownik)",
    caseBadgeClass: "case-miejscownik",
    sentenceBefore: "Mieszkam w Polsc",
    sentenceAfter: ".",
    gapWord: "Polska",
    gender: "féminin",
    correctEnding: "-e",
    fullCorrectWord: "Polsce",
    fullSentence: "Mieszkam w Polsce.",
    translationFr: "J'habite en Pologne.",
    ruleExplanation: "La préposition <strong>w</strong> (dans/en) sans mouvement exige le <strong>Miejscownik (Locatif)</strong>. Le 'k' de <em>Polska</em> s'adoucit en 'c' devant la terminaison <strong>-e</strong> : Polska &rarr; <strong>w Polsce</strong>.",
    options: [
      { ending: "-e", word: "Polsce", isCorrect: true, note: "Locatif (k &rarr; c + e)" },
      { ending: "-i", word: "Polski", isCorrect: false, note: "Génitif (-i)" },
      { ending: "-ę", word: "Polskę", isCorrect: false, note: "Accusatif (-ę)" },
      { ending: "-ą", word: "Polską", isCorrect: false, note: "Instrumental (-ą)" }
    ]
  },
  {
    id: "case-m-2",
    date: "2026-10-19",
    caseName: "Miejscownik",
    caseLabelFr: "Locatif (Miejscownik)",
    caseBadgeClass: "case-miejscownik",
    sentenceBefore: "Mieszkam w Paryż",
    sentenceAfter: ".",
    gapWord: "Paryż",
    gender: "masculin",
    correctEnding: "-u",
    fullCorrectWord: "Paryżu",
    fullSentence: "Mieszkam w Paryżu.",
    translationFr: "J'habite à Paris.",
    ruleExplanation: "Pour les noms de villes masculins terminés par une consonne chuintante comme 'ż', le <strong>Miejscownik</strong> prend la terminaison <strong>-u</strong> : w Paryżu.",
    options: [
      { ending: "-u", word: "Paryżu", isCorrect: true, note: "Locatif masculin (-u)" },
      { ending: "-e", word: "Paryże", isCorrect: false, note: "Pluriel nominatif (-e)" },
      { ending: "-a", word: "Paryża", isCorrect: false, note: "Génitif (-a)" },
      { ending: "-em", word: "Paryżem", isCorrect: false, note: "Instrumental (-em)" }
    ]
  },
  {
    id: "case-m-3",
    date: "2026-10-19",
    caseName: "Miejscownik",
    caseLabelFr: "Locatif (Miejscownik)",
    caseBadgeClass: "case-miejscownik",
    sentenceBefore: "Mieszkam niedaleko Nice",
    sentenceAfter: ".",
    gapWord: "Nicea",
    gender: "féminin",
    correctEnding: "-i",
    fullCorrectWord: "Nicei",
    fullSentence: "Mieszkam niedaleko Nicei.",
    translationFr: "J'habite près de Nice.",
    ruleExplanation: "Après la préposition <em>niedaleko</em> (près de), ou pour le locatif en 'w Nicei', le nom féminin <em>Nicea</em> prend la terminaison <strong>-i</strong>.",
    options: [
      { ending: "-i", word: "Nicei", isCorrect: true, note: "Terminaison régulière (-i)" },
      { ending: "-a", word: "Nicea", isCorrect: false, note: "Nominatif (-a)" },
      { ending: "-ę", word: "Niceę", isCorrect: false, note: "Accusatif (-ę)" },
      { ending: "-ą", word: "Niceą", isCorrect: false, note: "Instrumental (-ą)" }
    ]
  },
  {
    id: "case-m-4",
    date: "2026-10-19",
    caseName: "Miejscownik",
    caseLabelFr: "Locatif (Miejscownik)",
    caseBadgeClass: "case-miejscownik",
    sentenceBefore: "Jestem na lotnisk",
    sentenceAfter: ".",
    gapWord: "lotnisko",
    gender: "neutre",
    correctEnding: "-u",
    fullCorrectWord: "lotnisku",
    fullSentence: "Jestem na lotnisku.",
    translationFr: "Je suis à l'aéroport.",
    ruleExplanation: "Avec la préposition <strong>na</strong> (à/sur) indiquant le lieu où l'on se trouve, les noms neutres en <em>-o</em> prennent la terminaison <strong>-u</strong> au <strong>Miejscownik</strong> (lotnisko &rarr; na lotnisku).",
    options: [
      { ending: "-u", word: "lotnisku", isCorrect: true, note: "Locatif neutre (-u)" },
      { ending: "-o", word: "lotnisko", isCorrect: false, note: "Nominatif (-o)" },
      { ending: "-a", word: "lotniska", isCorrect: false, note: "Génitif (-a)" },
      { ending: "-iem", word: "lotniskiem", isCorrect: false, note: "Instrumental (-iem)" }
    ]
  },
  {
    id: "case-m-5",
    date: "2026-10-19",
    caseName: "Miejscownik",
    caseLabelFr: "Locatif (Miejscownik)",
    caseBadgeClass: "case-miejscownik",
    sentenceBefore: "Kupuję znaczki na poczc",
    sentenceAfter: ".",
    gapWord: "poczta",
    gender: "féminin",
    correctEnding: "-ie",
    fullCorrectWord: "poczcie",
    fullSentence: "Kupuję znaczki na poczcie.",
    translationFr: "J'achète des timbres à la poste.",
    ruleExplanation: "Pour indiquer le lieu 'à la poste' (<strong>na + Miejscownik</strong>), la consonne 't' de <em>poczta</em> s'adoucit en 'ci' devant <strong>-e</strong> : poczta &rarr; <strong>na poczcie</strong>.",
    options: [
      { ending: "-ie", word: "poczcie", isCorrect: true, note: "Locatif (t &rarr; ci + e)" },
      { ending: "-y", word: "poczty", isCorrect: false, note: "Génitif (-y)" },
      { ending: "-ę", word: "pocztę", isCorrect: false, note: "Accusatif (-ę)" },
      { ending: "-ą", word: "pocztą", isCorrect: false, note: "Instrumental (-ą)" }
    ]
  },
  {
    id: "case-m-6",
    date: "2026-10-19",
    caseName: "Miejscownik",
    caseLabelFr: "Locatif (Miejscownik)",
    caseBadgeClass: "case-miejscownik",
    sentenceBefore: "Spotkajmy się w kawiarn",
    sentenceAfter: ".",
    gapWord: "kawiarnia",
    gender: "féminin",
    correctEnding: "-i",
    fullCorrectWord: "kawiarni",
    fullSentence: "Spotkajmy się w kawiarni.",
    translationFr: "Retrouvons-nous au café.",
    ruleExplanation: "Avec <strong>w</strong> (dans), les noms féminins en <em>-nia</em> font leur <strong>Locatif</strong> en <strong>-i</strong> : kawiarnia &rarr; <strong>w kawiarni</strong>.",
    options: [
      { ending: "-i", word: "kawiarni", isCorrect: true, note: "Locatif doux (-i)" },
      { ending: "-e", word: "kawiarnie", isCorrect: false, note: "Pluriel nominatif" },
      { ending: "-ę", word: "kawiarnię", isCorrect: false, note: "Accusatif (-ę)" },
      { ending: "-ą", word: "kawiarnią", isCorrect: false, note: "Instrumental (-ą)" }
    ]
  },
  {
    id: "case-m-7",
    date: "2026-10-19",
    caseName: "Miejscownik",
    caseLabelFr: "Locatif (Miejscownik)",
    caseBadgeClass: "case-miejscownik",
    sentenceBefore: "Pracuję w biurz",
    sentenceAfter: ".",
    gapWord: "biuro",
    gender: "neutre",
    correctEnding: "-e",
    fullCorrectWord: "biurze",
    fullSentence: "Pracuję w biurze.",
    translationFr: "Je travaille au bureau.",
    ruleExplanation: "Au <strong>Miejscownik</strong>, la consonne 'r' du neutre <em>biuro</em> s'adoucit en 'rz' devant la terminaison <strong>-e</strong> : biuro &rarr; <strong>w biurze</strong>.",
    options: [
      { ending: "-e", word: "biurze", isCorrect: true, note: "Locatif (r &rarr; rz + e)" },
      { ending: "-u", word: "biuru", isCorrect: false, note: "Datif (-u)" },
      { ending: "-a", word: "biura", isCorrect: false, note: "Génitif (-a)" },
      { ending: "-em", word: "biurem", isCorrect: false, note: "Instrumental (-em)" }
    ]
  },
  {
    id: "case-m-8",
    date: "2026-10-19",
    caseName: "Miejscownik",
    caseLabelFr: "Locatif (Miejscownik)",
    caseBadgeClass: "case-miejscownik",
    sentenceBefore: "Książka leży na stolik",
    sentenceAfter: ".",
    gapWord: "stolik",
    gender: "masculin",
    correctEnding: "-u",
    fullCorrectWord: "stoliku",
    fullSentence: "Książka leży na stoliku.",
    translationFr: "Le livre est posé sur la table.",
    ruleExplanation: "Les noms masculins terminés par 'k' (comme <em>stolik</em>) prennent la terminaison <strong>-u</strong> au <strong>Miejscownik</strong> (na stoliku).",
    options: [
      { ending: "-u", word: "stoliku", isCorrect: true, note: "Locatif masc. en -k (-u)" },
      { ending: "Ø", word: "stolik", isCorrect: false, note: "Nominatif (forme de base)" },
      { ending: "-a", word: "stolika", isCorrect: false, note: "Génitif (-a)" },
      { ending: "-em", word: "stolikiem", isCorrect: false, note: "Instrumental (-em)" }
    ]
  },

  // ------------------------------------------
  // 4. DOPEŁNIACZ (GÉNITIF)
  // Rôle : Négation (nie mam...), provenance (do, z, od), exclusion (bez), possession
  // Règle générale :
  // - Féminin singulier -> -y / -i
  // - Masculin inanimé / abstrait -> -u (ou -a pour les objets concrets)
  // - Masculin animé & Neutre -> -a
  // ------------------------------------------
  {
    id: "case-d-1",
    date: "2026-10-19",
    caseName: "Dopełniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "Nie mam bagaż",
    sentenceAfter: ".",
    gapWord: "bagaż",
    gender: "masculin inanimé",
    correctEnding: "-u",
    fullCorrectWord: "bagażu",
    fullSentence: "Nie mam bagażu.",
    translationFr: "Je n'ai pas de bagage.",
    ruleExplanation: "<strong>Règle fondamentale : La négation entraîne TOUJOURS le Dopełniacz (Génitif) !</strong> À la forme affirmative, on dit <em>Mam bagaż</em> (Biernik). À la forme négative, cela devient obligatoirement <em>Nie mam <strong>bagażu</strong></em> (Dopełniacz en -u).",
    options: [
      { ending: "-u", word: "bagażu", isCorrect: true, note: "Génitif de négation (-u)" },
      { ending: "Ø", word: "bagaż", isCorrect: false, note: "Nominatif / Biernik affirmatif" },
      { ending: "-em", word: "bagażem", isCorrect: false, note: "Instrumental (-em)" },
      { ending: "-e", word: "bagaże", isCorrect: false, note: "Pluriel nominatif" }
    ]
  },
  {
    id: "case-d-2",
    date: "2026-10-19",
    caseName: "Dopełniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "Niestety, nie mam czas",
    sentenceAfter: ".",
    gapWord: "czas",
    gender: "masculin abstrait",
    correctEnding: "-u",
    fullCorrectWord: "czasu",
    fullSentence: "Niestety, nie mam czasu.",
    translationFr: "Malheureusement, je n'ai pas le temps.",
    ruleExplanation: "Avec la négation <strong>nie mam</strong>, le nom masculin abstrait <em>czas</em> passe au <strong>Dopełniacz</strong> et prend la désinence <strong>-u</strong> : <em>nie mam czasu</em>.",
    options: [
      { ending: "-u", word: "czasu", isCorrect: true, note: "Génitif de négation (-u)" },
      { ending: "Ø", word: "czas", isCorrect: false, note: "Nominatif / Biernik affirmatif" },
      { ending: "-em", word: "czasem", isCorrect: false, note: "Instrumental (= parfois)" },
      { ending: "-ie", word: "czasie", isCorrect: false, note: "Locatif (-ie)" }
    ]
  },
  {
    id: "case-d-3",
    date: "2026-10-19",
    caseName: "Dopełniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "Nie mam brat",
    sentenceAfter: ", mam tylko siostrę.",
    gapWord: "brat",
    gender: "masculin animé",
    correctEnding: "-a",
    fullCorrectWord: "brata",
    fullSentence: "Nie mam brata, mam tylko siostrę.",
    translationFr: "Je n'ai pas de frère, j'ai seulement une sœur.",
    ruleExplanation: "Sous l'effet de la négation <strong>nie mam</strong>, le nom <em>brat</em> passe au <strong>Génitif (Dopełniacz)</strong> et prend la terminaison <strong>-a</strong>.",
    options: [
      { ending: "-a", word: "brata", isCorrect: true, note: "Génitif masculin (-a)" },
      { ending: "-u", word: "bratu", isCorrect: false, note: "Datif (-u)" },
      { ending: "-em", word: "bratem", isCorrect: false, note: "Instrumental (-em)" },
      { ending: "-owi", word: "bratowi", isCorrect: false, note: "Datif (-owi)" }
    ]
  },
  {
    id: "case-d-4",
    date: "2026-10-19",
    caseName: "Dopełniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "Nie lubię kaw",
    sentenceAfter: ".",
    gapWord: "kawa",
    gender: "féminin",
    correctEnding: "-y",
    fullCorrectWord: "kawy",
    fullSentence: "Nie lubię kawy.",
    translationFr: "Je n'aime pas le café.",
    ruleExplanation: "Comparez bien : à l'affirmatif, <em>Lubię kawę</em> (Biernik en -ę). Mais dès qu'il y a la négation <strong>Nie lubię</strong>, le verbe exige le <strong>Dopełniacz (Génitif)</strong> : kawa prend <strong>-y</strong> (kawy) !",
    options: [
      { ending: "-y", word: "kawy", isCorrect: true, note: "Génitif de négation (-y)" },
      { ending: "-ę", word: "kawę", isCorrect: false, note: "Accusatif affirmatif (-ę)" },
      { ending: "-ą", word: "kawą", isCorrect: false, note: "Instrumental (-ą)" },
      { ending: "-ie", word: "kawie", isCorrect: false, note: "Locatif (-ie)" }
    ]
  },
  {
    id: "case-d-5",
    date: "2026-10-19",
    caseName: "Dopełniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "Rano nie piję herbat",
    sentenceAfter: ".",
    gapWord: "herbata",
    gender: "féminin",
    correctEnding: "-y",
    fullCorrectWord: "herbaty",
    fullSentence: "Rano nie piję herbaty.",
    translationFr: "Le matin, je ne bois pas de thé.",
    ruleExplanation: "La négation <strong>nie piję</strong> transforme le complément en <strong>Génitif</strong> : <em>herbata</em> devient <strong>herbaty</strong> (au lieu de <em>herbatę</em> à l'affirmatif).",
    options: [
      { ending: "-y", word: "herbaty", isCorrect: true, note: "Génitif de négation (-y)" },
      { ending: "-ę", word: "herbatę", isCorrect: false, note: "Accusatif affirmatif (-ę)" },
      { ending: "-ą", word: "herbatą", isCorrect: false, note: "Instrumental (-ą)" },
      { ending: "-ie", word: "herbacie", isCorrect: false, note: "Locatif (-ie)" }
    ]
  },
  {
    id: "case-d-6",
    date: "2026-10-19",
    caseName: "Dopełniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "Poproszę kawę bez cukr",
    sentenceAfter: ".",
    gapWord: "cukier",
    gender: "masculin",
    correctEnding: "-u",
    fullCorrectWord: "cukru",
    fullSentence: "Poproszę kawę bez cukru.",
    translationFr: "Un café sans sucre, s'il vous plaît.",
    ruleExplanation: "La préposition <strong>bez</strong> (sans) exige toujours le <strong>Dopełniacz (Génitif)</strong>. Le masculin <em>cukier</em> devient <strong>cukru</strong> (avec chute du e).",
    options: [
      { ending: "-u", word: "cukru", isCorrect: true, note: "Génitif après bez (-u)" },
      { ending: "-em", word: "cukrem", isCorrect: false, note: "Instrumental (avec z)" },
      { ending: "Ø", word: "cukier", isCorrect: false, note: "Nominatif (forme de base)" },
      { ending: "-ze", word: "cukrze", isCorrect: false, note: "Locatif (-ze)" }
    ]
  },
  {
    id: "case-d-7",
    date: "2026-10-19",
    caseName: "Dopełniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "Piję herbatę bez cytryn",
    sentenceAfter: ".",
    gapWord: "cytryna",
    gender: "féminin",
    correctEnding: "-y",
    fullCorrectWord: "cytryny",
    fullSentence: "Piję herbatę bez cytryny.",
    translationFr: "Je bois du thé sans citron.",
    ruleExplanation: "Après <strong>bez</strong> (sans), le nom féminin <em>cytryna</em> prend la désinence de <strong>Génitif</strong> <strong>-y</strong> (bez cytryny). Comparez avec : <em>z cytryną</em> (Instrumental en -ą) !",
    options: [
      { ending: "-y", word: "cytryny", isCorrect: true, note: "Génitif après bez (-y)" },
      { ending: "-ą", word: "cytryną", isCorrect: false, note: "Instrumental avec z (-ą)" },
      { ending: "-ę", word: "cytrynę", isCorrect: false, note: "Accusatif (-ę)" },
      { ending: "-ie", word: "cytrynie", isCorrect: false, note: "Locatif (-ie)" }
    ]
  },
  {
    id: "case-d-8",
    date: "2026-10-19",
    caseName: "Dopełniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "Kawa bez mlek",
    sentenceAfter: ", proszę.",
    gapWord: "mleko",
    gender: "neutre",
    correctEnding: "-a",
    fullCorrectWord: "mleka",
    fullSentence: "Kawa bez mleka, proszę.",
    translationFr: "Un café sans lait, s'il vous plaît.",
    ruleExplanation: "Après <strong>bez</strong> (sans), les noms neutres prennent la terminaison de <strong>Génitif</strong> <strong>-a</strong> : mleko &rarr; <strong>bez mleka</strong> (alors qu'avec 'z' on a <em>z mlekiem</em>).",
    options: [
      { ending: "-a", word: "mleka", isCorrect: true, note: "Génitif neutre (-a)" },
      { ending: "-iem", word: "mlekiem", isCorrect: false, note: "Instrumental avec z (-iem)" },
      { ending: "-u", word: "mleku", isCorrect: false, note: "Locatif (-u)" },
      { ending: "-o", word: "mleko", isCorrect: false, note: "Nominatif (-o)" }
    ]
  },
  {
    id: "case-d-9",
    date: "2026-10-19",
    caseName: "Dopełniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "Jutro lecę do Paryż",
    sentenceAfter: ".",
    gapWord: "Paryż",
    gender: "masculin",
    correctEnding: "-a",
    fullCorrectWord: "Paryża",
    fullSentence: "Jutro lecę do Paryża.",
    translationFr: "Demain, je m'envole pour Paris.",
    ruleExplanation: "La préposition <strong>do</strong> (vers / en direction de) régit toujours le <strong>Dopełniacz (Génitif)</strong>. Les noms de villes masculins prennent généralement <strong>-a</strong> : do Paryża, do Berlina.",
    options: [
      { ending: "-a", word: "Paryża", isCorrect: true, note: "Génitif de direction (-a)" },
      { ending: "-u", word: "Paryżu", isCorrect: false, note: "Locatif statique 'w' (-u)" },
      { ending: "-em", word: "Paryżem", isCorrect: false, note: "Instrumental (-em)" },
      { ending: "Ø", word: "Paryż", isCorrect: false, note: "Nominatif (forme de base)" }
    ]
  },
  {
    id: "case-d-10",
    date: "2026-10-19",
    caseName: "Dopełniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "Chcę wysłać list do Francj",
    sentenceAfter: ".",
    gapWord: "Francja",
    gender: "féminin",
    correctEnding: "-i",
    fullCorrectWord: "Francji",
    fullSentence: "Chcę wysłać list do Francji.",
    translationFr: "Je veux envoyer une lettre en France.",
    ruleExplanation: "Après la préposition <strong>do</strong> (vers/en), les pays féminins en <em>-ja</em> prennent la terminaison de <strong>Génitif</strong> <strong>-i</strong> : Francja &rarr; <strong>do Francji</strong>.",
    options: [
      { ending: "-i", word: "Francji", isCorrect: true, note: "Génitif après do (-i)" },
      { ending: "-ę", word: "Francję", isCorrect: false, note: "Accusatif (-ę)" },
      { ending: "-ą", word: "Francją", isCorrect: false, note: "Instrumental (-ą)" },
      { ending: "-e", word: "Francje", isCorrect: false, note: "Pluriel nominatif" }
    ]
  },
  {
    id: "case-d-11",
    date: "2026-10-19",
    caseName: "Dopełniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "Wracam do Polsk",
    sentenceAfter: ".",
    gapWord: "Polska",
    gender: "féminin",
    correctEnding: "-i",
    fullCorrectWord: "Polski",
    fullSentence: "Wracam do Polski.",
    translationFr: "Je rentre en Pologne.",
    ruleExplanation: "Pour le mouvement vers un pays (<strong>do + Génitif</strong>), <em>Polska</em> prend <strong>-i</strong> : <strong>do Polski</strong>. À ne pas confondre avec le lieu statique : <em>w Polsce</em> (Locatif) !",
    options: [
      { ending: "-i", word: "Polski", isCorrect: true, note: "Génitif après do (-i)" },
      { ending: "-e", word: "Polsce", isCorrect: false, note: "Locatif statique 'w' (-e)" },
      { ending: "-ę", word: "Polskę", isCorrect: false, note: "Accusatif (-ę)" },
      { ending: "-ą", word: "Polską", isCorrect: false, note: "Instrumental (-ą)" }
    ]
  },
  {
    id: "case-d-12",
    date: "2026-10-19",
    caseName: "Dopełniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "Stolik dla ilu os",
    sentenceAfter: "?",
    gapWord: "osoba",
    gender: "féminin pluriel",
    correctEnding: "-ób",
    fullCorrectWord: "osób",
    fullSentence: "Stolik dla ilu osób?",
    translationFr: "Une table pour combien de personnes ?",
    ruleExplanation: "Après la préposition <strong>dla</strong> (pour) et après le mot de quantité <strong>ilu</strong> (combien), le nom passe au <strong>Génitif pluriel</strong> : <em>osoba</em> devient <strong>osób</strong> (avec alternance o &rarr; ó et désinence zéro).",
    options: [
      { ending: "-ób", word: "osób", isCorrect: true, note: "Génitif pluriel irrégulier (-ób)" },
      { ending: "-om", word: "osobom", isCorrect: false, note: "Datif pluriel (-om)" },
      { ending: "-y", word: "osoby", isCorrect: false, note: "Génitif singulier (-y)" },
      { ending: "-ach", word: "osobach", isCorrect: false, note: "Locatif pluriel (-ach)" }
    ]
  },
  {
    id: "case-b-13",
    date: "2026-10-19",
    caseName: "Biernik",
    caseLabelFr: "Accusatif (Biernik)",
    caseBadgeClass: "case-biernik",
    sentenceBefore: "Kelnerka nosi niebieską i żółtą sukienk",
    sentenceAfter: ".",
    gapWord: "sukienka",
    gender: "féminin",
    correctEnding: "-ę",
    fullCorrectWord: "sukienkę",
    fullSentence: "Kelnerka nosi niebieską i żółtą sukienkę.",
    translationFr: "La serveuse porte une robe bleue et jaune.",
    ruleExplanation: "Après le verbe <strong>nosić</strong> (porter des vêtements), le COD passe à l'<strong>Accusatif (Biernik)</strong>. Pour un nom féminin en <em>-a</em>, la terminaison devient <strong>-ę</strong> : <em>sukienka</em> &rarr; <strong>sukienkę</strong>.",
    options: [
      { ending: "-ę", word: "sukienkę", isCorrect: true, note: "Accusatif COD (-ę)" },
      { ending: "-ą", word: "sukienką", isCorrect: false, note: "Instrumental (-ą)" },
      { ending: "-i", word: "sukienki", isCorrect: false, note: "Génitif singulier (-i)" },
      { ending: "-ie", word: "sukience", isCorrect: false, note: "Locatif / Datif (-e)" }
    ]
  },
  {
    id: "case-b-14",
    date: "2026-10-19",
    caseName: "Biernik",
    caseLabelFr: "Accusatif (Biernik)",
    caseBadgeClass: "case-biernik",
    sentenceBefore: "Proszę jechać na ulic",
    sentenceAfter: " Lipową.",
    gapWord: "ulica",
    gender: "féminin",
    correctEnding: "-ę",
    fullCorrectWord: "ulicę",
    fullSentence: "Proszę jechać na ulicę Lipową.",
    translationFr: "S'il vous plaît, allez rue Lipowa.",
    ruleExplanation: "Après <strong>jechać na + destination</strong> (mouvement ou direction vers un lieu), on emploie l'<strong>Accusatif</strong> : <em>ulica Lipowa</em> &rarr; <strong>na ulicę Lipową</strong>.",
    options: [
      { ending: "-ę", word: "ulicę", isCorrect: true, note: "Accusatif de mouvement (-ę)" },
      { ending: "-y", word: "ulicy", isCorrect: false, note: "Génitif singulier (-y)" },
      { ending: "-ą", word: "ulicą", isCorrect: false, note: "Instrumental (-ą)" },
      { ending: "-e", word: "ulice", isCorrect: false, note: "Nominatif pluriel (-e)" }
    ]
  },
  {
    id: "case-d-13",
    date: "2026-10-19",
    caseName: "Dopełniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "Potrzebuje Pan pomoc",
    sentenceAfter: "?",
    gapWord: "pomoc",
    gender: "féminin (se terminant par consonne)",
    correctEnding: "-y",
    fullCorrectWord: "pomocy",
    fullSentence: "Potrzebuje Pan pomocy?",
    translationFr: "Avez-vous besoin d'aide ?",
    ruleExplanation: "En polonais, le verbe <strong>potrzebować</strong> (avoir besoin de) régit toujours le <strong>Génitif (Dopełniacz)</strong> : le féminin <em>pomoc</em> prend la désinence <strong>-y</strong> : <strong>pomocy</strong>.",
    options: [
      { ending: "-y", word: "pomocy", isCorrect: true, note: "Génitif après potrzebować (-y)" },
      { ending: "-ą", word: "pomocą", isCorrect: false, note: "Instrumental (-ą)" },
      { ending: "-e", word: "pomoce", isCorrect: false, note: "Pluriel (-e)" },
      { ending: "-i", word: "pomoci", isCorrect: false, note: "Désinence palatale non applicable" }
    ]
  },

  // ------------------------------------------
  // NOUVELLES PHRASES : MIEJSCOWNIK (LOCATIF)
  // ------------------------------------------
  {
    id: "case-m-9",
    date: "2026-10-19",
    caseName: "Miejscownik",
    caseLabelFr: "Locatif (Miejscownik)",
    caseBadgeClass: "case-miejscownik",
    sentenceBefore: "Spotykamy się w kawiarn",
    sentenceAfter: ".",
    gapWord: "kawiarnia",
    gender: "féminin",
    correctEnding: "-i",
    fullCorrectWord: "kawiarni",
    fullSentence: "Spotykamy się w kawiarni.",
    translationFr: "Nous nous retrouvons au café.",
    ruleExplanation: "Après la préposition statique <strong>w</strong> (dans), les noms féminins terminés par <em>-ia</em> prennent la terminaison <strong>-i</strong> au Locatif : <em>kawiarnia</em> &rarr; <strong>w kawiarni</strong>.",
    options: [
      { ending: "-i", word: "kawiarni", isCorrect: true, note: "Locatif après 'w' (-i)" },
      { ending: "-ę", word: "kawiarnię", isCorrect: false, note: "Accusatif (-ę)" },
      { ending: "-ą", word: "kawiarnią", isCorrect: false, note: "Instrumental (-ą)" },
      { ending: "-e", word: "kawiarnie", isCorrect: false, note: "Nominatif pluriel (-e)" }
    ]
  },
  {
    id: "case-m-10",
    date: "2026-10-19",
    caseName: "Miejscownik",
    caseLabelFr: "Locatif (Miejscownik)",
    caseBadgeClass: "case-miejscownik",
    sentenceBefore: "Czekam na pana w hotel",
    sentenceAfter: ".",
    gapWord: "hotel",
    gender: "masculin inanimé",
    correctEnding: "-u",
    fullCorrectWord: "hotelu",
    fullSentence: "Czekam na pana w hotelu.",
    translationFr: "Je vous attends à l'hôtel.",
    ruleExplanation: "Pour de nombreux noms masculins inanimés en consonne (notamment d'origine étrangère ou terminés par consonne molle/durcie), le Locatif après <strong>w</strong> prend <strong>-u</strong> : <em>hotel</em> &rarr; <strong>w hotelu</strong>.",
    options: [
      { ending: "-u", word: "hotelu", isCorrect: true, note: "Locatif après 'w' (-u)" },
      { ending: "-em", word: "hotelem", isCorrect: false, note: "Instrumental (-em)" },
      { ending: "-e", word: "hotele", isCorrect: false, note: "Nominatif pluriel (-e)" },
      { ending: "-owi", word: "hotelowi", isCorrect: false, note: "Datif singulier (-owi)" }
    ]
  },
  {
    id: "case-m-11",
    date: "2026-10-19",
    caseName: "Miejscownik",
    caseLabelFr: "Locatif (Miejscownik)",
    caseBadgeClass: "case-miejscownik",
    sentenceBefore: "Jesteśmy teraz w kin",
    sentenceAfter: ".",
    gapWord: "kino",
    gender: "neutre",
    correctEnding: "-ie",
    fullCorrectWord: "kinie",
    fullSentence: "Jesteśmy teraz w kinie.",
    translationFr: "Nous sommes maintenant au cinéma.",
    ruleExplanation: "Pour le nom neutre <em>kino</em>, la consonne <em>n</em> s'adoucit en <em>ni</em> devant la désinence de Locatif <strong>-e</strong> : <em>kino</em> &rarr; <strong>w kinie</strong>.",
    options: [
      { ending: "-ie", word: "kinie", isCorrect: true, note: "Locatif régulier (-ie)" },
      { ending: "-em", word: "kinem", isCorrect: false, note: "Instrumental (-em)" },
      { ending: "-u", word: "kinu", isCorrect: false, note: "Datif singulier (-u)" },
      { ending: "-a", word: "kina", isCorrect: false, note: "Génitif singulier (-a)" }
    ]
  },
  {
    id: "case-m-12",
    date: "2026-10-19",
    caseName: "Miejscownik",
    caseLabelFr: "Locatif (Miejscownik)",
    caseBadgeClass: "case-miejscownik",
    sentenceBefore: "Książka leży na stol",
    sentenceAfter: ".",
    gapWord: "stół",
    gender: "masculin inanimé",
    correctEnding: "-e",
    fullCorrectWord: "stole",
    fullSentence: "Książka leży na stole.",
    translationFr: "Le livre est posé sur la table.",
    ruleExplanation: "Après la préposition statique <strong>na</strong> (sur), le nom masculin <em>stół</em> subit une alternance vocalique <em>ó &rarr; o</em> et la palatalisation de <em>ł &rarr; l</em> devant la terminaison <strong>-e</strong> : <em>stół</em> &rarr; <strong>na stole</strong>.",
    options: [
      { ending: "-e", word: "stole", isCorrect: true, note: "Locatif avec alternance ó/o (-e)" },
      { ending: "-em", word: "stołem", isCorrect: false, note: "Instrumental (-em)" },
      { ending: "-u", word: "stołu", isCorrect: false, note: "Génitif singulier (-u)" },
      { ending: "-owi", word: "stołowi", isCorrect: false, note: "Datif singulier (-owi)" }
    ]
  },
  {
    id: "case-m-13",
    date: "2026-10-19",
    caseName: "Miejscownik",
    caseLabelFr: "Locatif (Miejscownik)",
    caseBadgeClass: "case-miejscownik",
    sentenceBefore: "Rozmawiamy o nowym film",
    sentenceAfter: ".",
    gapWord: "film",
    gender: "masculin inanimé",
    correctEnding: "-ie",
    fullCorrectWord: "filmie",
    fullSentence: "Rozmawiamy o nowym filmie.",
    translationFr: "Nous parlons du nouveau film.",
    ruleExplanation: "Après la préposition <strong>o</strong> (au sujet de, à propos de), on emploie toujours le <strong>Locatif</strong> : <em>film</em> prend la terminaison <strong>-ie</strong> : <strong>o filmie</strong>.",
    options: [
      { ending: "-ie", word: "filmie", isCorrect: true, note: "Locatif après 'o' (-ie)" },
      { ending: "-em", word: "filmem", isCorrect: false, note: "Instrumental (-em)" },
      { ending: "-u", word: "filmu", isCorrect: false, note: "Génitif singulier (-u)" },
      { ending: "-owi", word: "filmowi", isCorrect: false, note: "Datif singulier (-owi)" }
    ]
  },
  {
    id: "case-m-14",
    date: "2026-10-19",
    caseName: "Miejscownik",
    caseLabelFr: "Locatif (Miejscownik)",
    caseBadgeClass: "case-miejscownik",
    sentenceBefore: "Mój brat pracuje w biurz",
    sentenceAfter: ".",
    gapWord: "biuro",
    gender: "neutre",
    correctEnding: "-e",
    fullCorrectWord: "biurze",
    fullSentence: "Mój brat pracuje w biurze.",
    translationFr: "Mon frère travaille au bureau.",
    ruleExplanation: "Pour le nom neutre <em>biuro</em>, la consonne <em>r</em> s'adoucit en <em>rz</em> devant la terminaison de Locatif <strong>-e</strong> : <em>biuro</em> &rarr; <strong>w biurze</strong>.",
    options: [
      { ending: "-e", word: "biurze", isCorrect: true, note: "Locatif avec alternance r/rz (-e)" },
      { ending: "-em", word: "biurem", isCorrect: false, note: "Instrumental (-em)" },
      { ending: "-u", word: "biuru", isCorrect: false, note: "Datif singulier (-u)" },
      { ending: "-a", word: "biura", isCorrect: false, note: "Génitif singulier (-a)" }
    ]
  },
  {
    id: "case-m-15",
    date: "2026-10-19",
    caseName: "Miejscownik",
    caseLabelFr: "Locatif (Miejscownik)",
    caseBadgeClass: "case-miejscownik",
    sentenceBefore: "Mój syn studiuje na uniwersyteci",
    sentenceAfter: ".",
    gapWord: "uniwersytet",
    gender: "masculin inanimé",
    correctEnding: "-e",
    fullCorrectWord: "uniwersytecie",
    fullSentence: "Mój syn studiuje na uniwersytecie.",
    translationFr: "Mon fils étudie à l'université.",
    ruleExplanation: "Après la préposition <strong>na</strong> pour désigner l'institution, le nom masculin <em>uniwersytet</em> voit son <em>t</em> final se palataliser en <em>ci</em> devant <strong>-e</strong> : <strong>na uniwersytecie</strong>.",
    options: [
      { ending: "-e", word: "uniwersytecie", isCorrect: true, note: "Locatif avec palatalisation t/ci (-e)" },
      { ending: "-em", word: "uniwersytetem", isCorrect: false, note: "Instrumental (-em)" },
      { ending: "-u", word: "uniwersytetu", isCorrect: false, note: "Génitif singulier (-u)" },
      { ending: "-owi", word: "uniwersytetowi", isCorrect: false, note: "Datif singulier (-owi)" }
    ]
  },
  {
    id: "case-m-16",
    date: "2026-10-19",
    caseName: "Miejscownik",
    caseLabelFr: "Locatif (Miejscownik)",
    caseBadgeClass: "case-miejscownik",
    sentenceBefore: "Czekam na ciebie na stacj",
    sentenceAfter: ".",
    gapWord: "stacja",
    gender: "féminin",
    correctEnding: "-i",
    fullCorrectWord: "stacji",
    fullSentence: "Czekam na ciebie na stacji.",
    translationFr: "Je t'attends à la gare.",
    ruleExplanation: "Après la préposition statique <strong>na</strong> (à la gare), les noms féminins en <em>-cja</em> prennent la terminaison de Locatif <strong>-i</strong> : <em>stacja</em> &rarr; <strong>na stacji</strong>.",
    options: [
      { ending: "-i", word: "stacji", isCorrect: true, note: "Locatif après 'na' (-i)" },
      { ending: "-ę", word: "stację", isCorrect: false, note: "Accusatif de mouvement (-ę)" },
      { ending: "-ą", word: "stacją", isCorrect: false, note: "Instrumental (-ą)" },
      { ending: "-e", word: "stacje", isCorrect: false, note: "Nominatif pluriel (-e)" }
    ]
  },
  {
    id: "case-m-17",
    date: "2026-10-19",
    caseName: "Miejscownik",
    caseLabelFr: "Locatif (Miejscownik)",
    caseBadgeClass: "case-miejscownik",
    sentenceBefore: "Klucze i portfel są w plecak",
    sentenceAfter: ".",
    gapWord: "plecak",
    gender: "masculin inanimé",
    correctEnding: "-u",
    fullCorrectWord: "plecaku",
    fullSentence: "Klucze i portfel są w plecaku.",
    translationFr: "Les clés et le portefeuille sont dans le sac à dos.",
    ruleExplanation: "Pour les noms masculins se terminant par une consonne vélaire (<em>k, g, ch</em>), le Locatif prend systématiquement la terminaison <strong>-u</strong> : <em>plecak</em> &rarr; <strong>w plecaku</strong>.",
    options: [
      { ending: "-u", word: "plecaku", isCorrect: true, note: "Locatif pour les mots en -k (-u)" },
      { ending: "-iem", word: "plecakiem", isCorrect: false, note: "Instrumental (-iem)" },
      { ending: "-a", word: "plecaka", isCorrect: false, note: "Génitif singulier (-a)" },
      { ending: "-e", word: "plecace", isCorrect: false, note: "Forme inexistante" }
    ]
  },

  // ------------------------------------------
  // NOUVELLES PHRASES : NARZĘDNIK (INSTRUMENTAL)
  // ------------------------------------------
  {
    id: "case-n-9",
    date: "2026-10-19",
    caseName: "Narzednik",
    caseLabelFr: "Instrumental (Narzędnik)",
    caseBadgeClass: "case-narzednik",
    sentenceBefore: "Poproszę kanapkę z ser",
    sentenceAfter: ".",
    gapWord: "ser",
    gender: "masculin inanimé",
    correctEnding: "-em",
    fullCorrectWord: "serem",
    fullSentence: "Poproszę kanapkę z serem.",
    translationFr: "Un sandwich au fromage, s'il vous plaît.",
    ruleExplanation: "Après la préposition <strong>z</strong> (avec), les noms masculins singuliers prennent la terminaison d'Instrumental <strong>-em</strong> : <em>ser</em> &rarr; <strong>z serem</strong>.",
    options: [
      { ending: "-em", word: "serem", isCorrect: true, note: "Instrumental après 'z' (-em)" },
      { ending: "-a", word: "sera", isCorrect: false, note: "Génitif singulier (-a)" },
      { ending: "-ze", word: "serze", isCorrect: false, note: "Locatif singulier (-e)" },
      { ending: "-owi", word: "serowi", isCorrect: false, note: "Datif singulier (-owi)" }
    ]
  },
  {
    id: "case-n-10",
    date: "2026-10-19",
    caseName: "Narzednik",
    caseLabelFr: "Instrumental (Narzędnik)",
    caseBadgeClass: "case-narzednik",
    sentenceBefore: "Lubię gorącą herbatę z cytryn",
    sentenceAfter: ".",
    gapWord: "cytryna",
    gender: "féminin",
    correctEnding: "-ą",
    fullCorrectWord: "cytryną",
    fullSentence: "Lubię gorącą herbatę z cytryną.",
    translationFr: "J'aime le thé chaud avec du citron.",
    ruleExplanation: "Après la préposition <strong>z</strong> (avec), les noms féminins singuliers prennent la désinence nasale <strong>-ą</strong> à l'Instrumental : <em>cytryna</em> &rarr; <strong>z cytryną</strong>.",
    options: [
      { ending: "-ą", word: "cytryną", isCorrect: true, note: "Instrumental féminin régulier (-ą)" },
      { ending: "-ę", word: "cytrynę", isCorrect: false, note: "Accusatif singulier (-ę)" },
      { ending: "-y", word: "cytryny", isCorrect: false, note: "Génitif singulier (-y)" },
      { ending: "-ie", word: "cytrynie", isCorrect: false, note: "Locatif singulier (-ie)" }
    ]
  },
  {
    id: "case-n-11",
    date: "2026-10-19",
    caseName: "Narzednik",
    caseLabelFr: "Instrumental (Narzędnik)",
    caseBadgeClass: "case-narzednik",
    sentenceBefore: "Mój ojciec jest dobrym kierowc",
    sentenceAfter: ".",
    gapWord: "kierowca",
    gender: "masculin (terminé en -a)",
    correctEnding: "-ą",
    fullCorrectWord: "kierowcą",
    fullSentence: "Mój ojciec jest dobrym kierowcą.",
    translationFr: "Mon père est un bon conducteur / chauffeur.",
    ruleExplanation: "Après le verbe <strong>być</strong> (être) pour exprimer un métier ou un statut, on emploie l'<strong>Instrumental</strong>. Bien que masculin, <em>kierowca</em> se terminant par <em>-a</em> suit la désinence <strong>-ą</strong> : <strong>kierowcą</strong>.",
    options: [
      { ending: "-ą", word: "kierowcą", isCorrect: true, note: "Instrumental des masculins en -a (-ą)" },
      { ending: "-em", word: "kierowcem", isCorrect: false, note: "Désinence masculine standard" },
      { ending: "-ę", word: "kierowcę", isCorrect: false, note: "Accusatif singulier (-ę)" },
      { ending: "-y", word: "kierowcy", isCorrect: false, note: "Génitif singulier (-y)" }
    ]
  },
  {
    id: "case-n-12",
    date: "2026-10-19",
    caseName: "Narzednik",
    caseLabelFr: "Instrumental (Narzędnik)",
    caseBadgeClass: "case-narzednik",
    sentenceBefore: "Marek jest pilnym student",
    sentenceAfter: ".",
    gapWord: "student",
    gender: "masculin",
    correctEnding: "-em",
    fullCorrectWord: "studentem",
    fullSentence: "Marek jest pilnym studentem.",
    translationFr: "Marek est un étudiant appliqué.",
    ruleExplanation: "Après le verbe d'état <strong>być</strong> (être), la profession ou la condition passe à l'<strong>Instrumental</strong> : <em>student</em> &rarr; <strong>studentem</strong> (adjectif accordé : <em>pilnym</em>).",
    options: [
      { ending: "-em", word: "studentem", isCorrect: true, note: "Instrumental masculin régulier (-em)" },
      { ending: "-a", word: "studenta", isCorrect: false, note: "Génitif / Accusatif (-a)" },
      { ending: "-cie", word: "studencie", isCorrect: false, note: "Locatif singulier (-e)" },
      { ending: "-owi", word: "studentowi", isCorrect: false, note: "Datif singulier (-owi)" }
    ]
  },
  {
    id: "case-n-13",
    date: "2026-10-19",
    caseName: "Narzednik",
    caseLabelFr: "Instrumental (Narzędnik)",
    caseBadgeClass: "case-narzednik",
    sentenceBefore: "Bardzo interesuję się sport",
    sentenceAfter: ".",
    gapWord: "sport",
    gender: "masculin inanimé",
    correctEnding: "-em",
    fullCorrectWord: "sportem",
    fullSentence: "Bardzo interesuję się sportem.",
    translationFr: "Je m'intéresse beaucoup au sport.",
    ruleExplanation: "Le verbe <strong>interesować się</strong> (s'intéresser à) se construit obligatoirement avec l'<strong>Instrumental (Narzędnik)</strong> : <em>sport</em> &rarr; <strong>sportem</strong>.",
    options: [
      { ending: "-em", word: "sportem", isCorrect: true, note: "Instrumental après interesować się (-em)" },
      { ending: "-u", word: "sportu", isCorrect: false, note: "Génitif singulier (-u)" },
      { ending: "-cie", word: "sporcie", isCorrect: false, note: "Locatif singulier (-e)" },
      { ending: "-a", word: "sporta", isCorrect: false, note: "Désinence erronée" }
    ]
  },
  {
    id: "case-n-14",
    date: "2026-10-19",
    caseName: "Narzednik",
    caseLabelFr: "Instrumental (Narzędnik)",
    caseBadgeClass: "case-narzednik",
    sentenceBefore: "Codziennie rano jeżdżę do biura autobus",
    sentenceAfter: ".",
    gapWord: "autobus",
    gender: "masculin inanimé",
    correctEnding: "-em",
    fullCorrectWord: "autobusem",
    fullSentence: "Codziennie rano jeżdżę do biura autobusem.",
    translationFr: "Tous les matins je vais au bureau en bus.",
    ruleExplanation: "En polonais, le moyen de transport utilisé pour se déplacer se met directement à l'<strong>Instrumental sans préposition</strong> : <em>autobus</em> &rarr; <strong>autobusem</strong>.",
    options: [
      { ending: "-em", word: "autobusem", isCorrect: true, note: "Instrumental de moyen de transport (-em)" },
      { ending: "-ie", word: "autobusie", isCorrect: false, note: "Locatif après 'w' (-ie)" },
      { ending: "-u", word: "autobusu", isCorrect: false, note: "Génitif singulier (-u)" },
      { ending: "-y", word: "autobusy", isCorrect: false, note: "Nominatif pluriel (-y)" }
    ]
  },
  {
    id: "case-n-15",
    date: "2026-10-19",
    caseName: "Narzednik",
    caseLabelFr: "Instrumental (Narzędnik)",
    caseBadgeClass: "case-narzednik",
    sentenceBefore: "Do Poznania najchętniej jeżdżę pociąg",
    sentenceAfter: ".",
    gapWord: "pociąg",
    gender: "masculin inanimé",
    correctEnding: "-iem",
    fullCorrectWord: "pociągiem",
    fullSentence: "Do Poznania najchętniej jeżdżę pociągiem.",
    translationFr: "Pour Poznań, je voyage de préférence en train.",
    ruleExplanation: "À l'Instrumental, les noms masculins terminés par <em>-k</em> ou <em>-g</em> prennent la désinence adoucie <strong>-iem</strong> : <em>pociąg</em> &rarr; <strong>pociągiem</strong>.",
    options: [
      { ending: "-iem", word: "pociągiem", isCorrect: true, note: "Instrumental adouci après g (-iem)" },
      { ending: "-em", word: "pociągem", isCorrect: false, note: "Graphie sans adoucissement i" },
      { ending: "-u", word: "pociągu", isCorrect: false, note: "Génitif / Locatif (-u)" },
      { ending: "-a", word: "pociąga", isCorrect: false, note: "Forme erronée" }
    ]
  },
  {
    id: "case-n-16",
    date: "2026-10-19",
    caseName: "Narzednik",
    caseLabelFr: "Instrumental (Narzędnik)",
    caseBadgeClass: "case-narzednik",
    sentenceBefore: "Właśnie rozmawiam przez telefon z brac",
    sentenceAfter: ".",
    gapWord: "brat",
    gender: "masculin",
    correctEnding: "-em",
    fullCorrectWord: "bratem",
    fullSentence: "Właśnie rozmawiam przez telefon z bratem.",
    translationFr: "Je suis justement en train de parler au téléphone avec mon frère.",
    ruleExplanation: "Après la préposition <strong>z</strong> (avec), les noms masculins prennent <strong>-em</strong> : <em>brat</em> &rarr; <strong>z bratem</strong>.",
    options: [
      { ending: "-em", word: "bratem", isCorrect: true, note: "Instrumental après 'z' (-em)" },
      { ending: "-a", word: "brata", isCorrect: false, note: "Génitif / Accusatif (-a)" },
      { ending: "-u", word: "bratu", isCorrect: false, note: "Datif singulier (-u)" },
      { ending: "-ie", word: "bracie", isCorrect: false, note: "Locatif singulier (-ie)" }
    ]
  },
  {
    id: "case-n-17",
    date: "2026-10-19",
    caseName: "Narzednik",
    caseLabelFr: "Instrumental (Narzędnik)",
    caseBadgeClass: "case-narzednik",
    sentenceBefore: "Wieczorem idę na spacer z ps",
    sentenceAfter: ".",
    gapWord: "pies",
    gender: "masculin animé",
    correctEnding: "-em",
    fullCorrectWord: "psem",
    fullSentence: "Wieczorem idę na spacer z psem.",
    translationFr: "Le soir, je vais me promener avec le chien.",
    ruleExplanation: "Le mot masculin irrégulier <em>pies</em> perd son <em>e</em> mobile lors de la déclinaison et prend la terminaison d'Instrumental <strong>-em</strong> après <strong>z</strong> : <em>pies</em> &rarr; <strong>z psem</strong>.",
    options: [
      { ending: "-em", word: "psem", isCorrect: true, note: "Instrumental avec e mobile (-em)" },
      { ending: "-esem", word: "piesem", isCorrect: false, note: "Forme sans contraction" },
      { ending: "-a", word: "psa", isCorrect: false, note: "Génitif / Accusatif (-a)" },
      { ending: "-ie", word: "psie", isCorrect: false, note: "Locatif singulier (-ie)" }
    ]
  },

  // ------------------------------------------
  // NOUVELLES PHRASES : BIERNIK (ACCUSATIF)
  // ------------------------------------------
  {
    id: "case-b-15",
    date: "2026-10-19",
    caseName: "Biernik",
    caseLabelFr: "Accusatif (Biernik)",
    caseBadgeClass: "case-biernik",
    sentenceBefore: "W upalny dzień chętnie piję zimną wod",
    sentenceAfter: ".",
    gapWord: "woda",
    gender: "féminin",
    correctEnding: "-ę",
    fullCorrectWord: "wodę",
    fullSentence: "W upalny dzień chętnie piję zimną wodę.",
    translationFr: "Les jours de chaleur, je bois volontiers de l'eau fraîche.",
    ruleExplanation: "Après le verbe transitif <strong>pić</strong> (boire), le complément d'objet direct est à l'<strong>Accusatif (Biernik)</strong>. Pour un nom féminin en <em>-a</em>, la terminaison est <strong>-ę</strong> : <em>woda</em> &rarr; <strong>wodę</strong>.",
    options: [
      { ending: "-ę", word: "wodę", isCorrect: true, note: "Accusatif féminin COD (-ę)" },
      { ending: "-ą", word: "wodą", isCorrect: false, note: "Instrumental (-ą)" },
      { ending: "-y", word: "wody", isCorrect: false, note: "Génitif singulier (-y)" },
      { ending: "-zie", word: "wodzie", isCorrect: false, note: "Locatif singulier (-ie)" }
    ]
  },
  {
    id: "case-b-16",
    date: "2026-10-19",
    caseName: "Biernik",
    caseLabelFr: "Accusatif (Biernik)",
    caseBadgeClass: "case-biernik",
    sentenceBefore: "Kelner przynosi pyszną pizz",
    sentenceAfter: ".",
    gapWord: "pizza",
    gender: "féminin",
    correctEnding: "-ę",
    fullCorrectWord: "pizzę",
    fullSentence: "Kelner przynosi pyszną pizzę.",
    translationFr: "Le serveur apporte une délicieuse pizza.",
    ruleExplanation: "Le COD du verbe <strong>przynosić</strong> (apporter) se met à l'<strong>Accusatif</strong> : le féminin en <em>-a</em> devient <strong>-ę</strong> : <em>pizza</em> &rarr; <strong>pizzę</strong>.",
    options: [
      { ending: "-ę", word: "pizzę", isCorrect: true, note: "Accusatif féminin COD (-ę)" },
      { ending: "-ą", word: "pizzą", isCorrect: false, note: "Instrumental (-ą)" },
      { ending: "-y", word: "pizzy", isCorrect: false, note: "Génitif singulier (-y)" },
      { ending: "-ie", word: "pizzie", isCorrect: false, note: "Locatif singulier (-ie)" }
    ]
  },
  {
    id: "case-b-17",
    date: "2026-10-19",
    caseName: "Biernik",
    caseLabelFr: "Accusatif (Biernik)",
    caseBadgeClass: "case-biernik",
    sentenceBefore: "W pociągu czytam ciekawą książk",
    sentenceAfter: ".",
    gapWord: "książka",
    gender: "féminin",
    correctEnding: "-ę",
    fullCorrectWord: "książkę",
    fullSentence: "W pociągu czytam ciekawą książkę.",
    translationFr: "Dans le train, je lis un livre intéressant.",
    ruleExplanation: "Après le verbe <strong>czytać</strong> (lire), le COD féminin prend la terminaison d'Accusatif <strong>-ę</strong> : <em>książka</em> &rarr; <strong>książkę</strong> (accordé avec <em>ciekawą</em>).",
    options: [
      { ending: "-ę", word: "książkę", isCorrect: true, note: "Accusatif féminin COD (-ę)" },
      { ending: "-ą", word: "książką", isCorrect: false, note: "Instrumental (-ą)" },
      { ending: "-i", word: "książki", isCorrect: false, note: "Génitif singulier (-i)" },
      { ending: "-ce", word: "książce", isCorrect: false, note: "Locatif / Datif (-e)" }
    ]
  },
  {
    id: "case-b-18",
    date: "2026-10-19",
    caseName: "Biernik",
    caseLabelFr: "Accusatif (Biernik)",
    caseBadgeClass: "case-biernik",
    sentenceBefore: "W kawiarni widzę twojego brat",
    sentenceAfter: ".",
    gapWord: "brat",
    gender: "masculin animé (personne)",
    correctEnding: "-a",
    fullCorrectWord: "brata",
    fullSentence: "W kawiarni widzę twojego brata.",
    translationFr: "Au café, je vois ton frère.",
    ruleExplanation: "À l'Accusatif singulier, les noms <strong>masculins animés</strong> (personnes et animaux) prennent la même terminaison que le Génitif : la désinence <strong>-a</strong> : <em>brat</em> &rarr; <strong>widzę brata</strong>.",
    options: [
      { ending: "-a", word: "brata", isCorrect: true, note: "Accusatif masculin animé (-a)" },
      { ending: "-em", word: "bratem", isCorrect: false, note: "Instrumental (-em)" },
      { ending: "", word: "brat", isCorrect: false, note: "Nominatif / Masculin inanimé" },
      { ending: "-u", word: "bratu", isCorrect: false, note: "Datif singulier (-u)" }
    ]
  },
  {
    id: "case-b-19",
    date: "2026-10-19",
    caseName: "Biernik",
    caseLabelFr: "Accusatif (Biernik)",
    caseBadgeClass: "case-biernik",
    sentenceBefore: "Pracownik lotniska sprawdza mój paszport",
    sentenceAfter: ".",
    gapWord: "paszport",
    gender: "masculin inanimé (objet)",
    correctEnding: "",
    fullCorrectWord: "paszport",
    fullSentence: "Pracownik lotniska sprawdza mój paszport.",
    translationFr: "L'employé de l'aéroport vérifie mon passeport.",
    ruleExplanation: "Pour les noms <strong>masculins inanimés</strong> (objets, lieux, concepts), la forme d'<strong>Accusatif est identique au Nominatif</strong> (désinence zéro) : <em>paszport</em> &rarr; <strong>paszport</strong>.",
    options: [
      { ending: "invariable", word: "paszport", isCorrect: true, note: "Accusatif inanimé = Nominatif" },
      { ending: "-u", word: "paszportu", isCorrect: false, note: "Génitif singulier (-u)" },
      { ending: "-em", word: "paszportem", isCorrect: false, note: "Instrumental (-em)" },
      { ending: "-cie", word: "paszporcie", isCorrect: false, note: "Locatif singulier (-ie)" }
    ]
  },
  {
    id: "case-b-20",
    date: "2026-10-19",
    caseName: "Biernik",
    caseLabelFr: "Accusatif (Biernik)",
    caseBadgeClass: "case-biernik",
    sentenceBefore: "Jutro w południe jadę na lotnisk",
    sentenceAfter: ".",
    gapWord: "lotnisko",
    gender: "neutre",
    correctEnding: "-o",
    fullCorrectWord: "lotnisko",
    fullSentence: "Jutro w południe jadę na lotnisko.",
    translationFr: "Demain à midi je vais à l'aéroport.",
    ruleExplanation: "Après <strong>na + mouvement</strong> (destination), on utilise l'Accusatif. Pour les noms <strong>neutres</strong>, l'Accusatif reste identique au Nominatif : <strong>na lotnisko</strong> (à ne pas confondre avec le lieu statique : <em>na lotnisku</em> au Locatif !).",
    options: [
      { ending: "-o", word: "lotnisko", isCorrect: true, note: "Accusatif neutre de direction (-o)" },
      { ending: "-u", word: "lotnisku", isCorrect: false, note: "Locatif statique 'na' (-u)" },
      { ending: "-em", word: "lotniskiem", isCorrect: false, note: "Instrumental (-em)" },
      { ending: "-a", word: "lotniska", isCorrect: false, note: "Génitif singulier (-a)" }
    ]
  },

  // ------------------------------------------
  // NOUVELLES PHRASES : DOPEŁNIACZ (GÉNITIF)
  // ------------------------------------------
  {
    id: "case-d-14",
    date: "2026-10-19",
    caseName: "Dopelniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "Rano nie piję kaw",
    sentenceAfter: ".",
    gapWord: "kawa",
    gender: "féminin",
    correctEnding: "-y",
    fullCorrectWord: "kawy",
    fullSentence: "Rano nie piję kawy.",
    translationFr: "Le matin, je ne bois pas de café.",
    ruleExplanation: "Règle clé en polonais : <strong>la négation d'une phrase transitive transforme l'Accusatif en Génitif (Dopełniacz)</strong>. Affirmation : <em>piję kawę</em> (Accusatif) &rarr; Négation : <strong>nie piję kawy</strong> (Génitif en -y).",
    options: [
      { ending: "-y", word: "kawy", isCorrect: true, note: "Génitif après négation (-y)" },
      { ending: "-ę", word: "kawę", isCorrect: false, note: "Accusatif affirmatif (-ę)" },
      { ending: "-ą", word: "kawą", isCorrect: false, note: "Instrumental (-ą)" },
      { ending: "-ie", word: "kawie", isCorrect: false, note: "Locatif / Datif (-ie)" }
    ]
  },
  {
    id: "case-d-15",
    date: "2026-10-19",
    caseName: "Dopelniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "Niestety dzisiaj nie mam czas",
    sentenceAfter: ".",
    gapWord: "czas",
    gender: "masculin inanimé",
    correctEnding: "-u",
    fullCorrectWord: "czasu",
    fullSentence: "Niestety dzisiaj nie mam czasu.",
    translationFr: "Malheureusement aujourd'hui je n'ai pas le temps.",
    ruleExplanation: "Après la négation <strong>nie mam</strong> (je n'ai pas), le nom abstrait masculin <em>czas</em> passe au Génitif et prend la désinence <strong>-u</strong> : <strong>nie mam czasu</strong>.",
    options: [
      { ending: "-u", word: "czasu", isCorrect: true, note: "Génitif après négation (-u)" },
      { ending: "", word: "czas", isCorrect: false, note: "Nominatif / Accusatif" },
      { ending: "-em", word: "czasem", isCorrect: false, note: "Instrumental (-em)" },
      { ending: "-ie", word: "czasie", isCorrect: false, note: "Locatif singulier (-ie)" }
    ]
  },
  {
    id: "case-d-16",
    date: "2026-10-19",
    caseName: "Dopelniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "Poproszę szklankę zimnej wod",
    sentenceAfter: ".",
    gapWord: "woda",
    gender: "féminin",
    correctEnding: "-y",
    fullCorrectWord: "wody",
    fullSentence: "Poproszę szklankę zimnej wody.",
    translationFr: "Un verre d'eau fraîche, s'il vous plaît.",
    ruleExplanation: "Après un substantif de quantité ou de récipient (comme <em>szklanka, butelka, litr</em>), le contenu s'exprime au <strong>Génitif</strong> : <em>woda</em> &rarr; <strong>szklankę wody</strong>.",
    options: [
      { ending: "-y", word: "wody", isCorrect: true, note: "Génitif de quantité (-y)" },
      { ending: "-ę", word: "wodę", isCorrect: false, note: "Accusatif singulier (-ę)" },
      { ending: "-ą", word: "wodą", isCorrect: false, note: "Instrumental (-ą)" },
      { ending: "-zie", word: "wodzie", isCorrect: false, note: "Locatif singulier (-ie)" }
    ]
  },
  {
    id: "case-d-17",
    date: "2026-10-19",
    caseName: "Dopelniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "W kawiarni nie ma już ciast",
    sentenceAfter: " czekoladowego.",
    gapWord: "ciasto",
    gender: "neutre",
    correctEnding: "-a",
    fullCorrectWord: "ciasta",
    fullSentence: "W kawiarni nie ma już ciasta czekoladowego.",
    translationFr: "Au café, il n'y a plus de gâteau au chocolat.",
    ruleExplanation: "La locution d'absence <strong>nie ma</strong> (il n'y a pas) impose obligatoirement le <strong>Génitif</strong>. Pour un nom neutre en <em>-o</em>, la désinence est <strong>-a</strong> : <em>ciasto</em> &rarr; <strong>nie ma ciasta</strong>.",
    options: [
      { ending: "-a", word: "ciasta", isCorrect: true, note: "Génitif après 'nie ma' (-a)" },
      { ending: "-o", word: "ciasto", isCorrect: false, note: "Nominatif / Accusatif (-o)" },
      { ending: "-em", word: "ciastem", isCorrect: false, note: "Instrumental (-em)" },
      { ending: "-cie", word: "cieście", isCorrect: false, note: "Locatif singulier (-ie)" }
    ]
  },
  {
    id: "case-d-18",
    date: "2026-10-19",
    caseName: "Dopelniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "Kupiłem prezent dla mojej siostr",
    sentenceAfter: ".",
    gapWord: "siostra",
    gender: "féminin",
    correctEnding: "-y",
    fullCorrectWord: "siostry",
    fullSentence: "Kupiłem prezent dla mojej siostry.",
    translationFr: "J'ai acheté un cadeau pour ma sœur.",
    ruleExplanation: "La préposition <strong>dla</strong> (pour le destinataire) exige systématiquement le <strong>Génitif (Dopełniacz)</strong> : le nom féminin <em>siostra</em> prend <strong>-y</strong> : <strong>dla siostry</strong>.",
    options: [
      { ending: "-y", word: "siostry", isCorrect: true, note: "Génitif après 'dla' (-y)" },
      { ending: "-ę", word: "siostrę", isCorrect: false, note: "Accusatif singulier (-ę)" },
      { ending: "-ą", word: "siostrą", isCorrect: false, note: "Instrumental (-ą)" },
      { ending: "-ze", word: "siostrze", isCorrect: false, note: "Datif / Locatif (-e)" }
    ]
  },
  {
    id: "case-d-19",
    date: "2026-10-19",
    caseName: "Dopelniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "Jest już późno, wracam do dom",
    sentenceAfter: ".",
    gapWord: "dom",
    gender: "masculin inanimé",
    correctEnding: "-u",
    fullCorrectWord: "domu",
    fullSentence: "Jest już późno, wracam do domu.",
    translationFr: "Il est déjà tard, je rentre à la maison.",
    ruleExplanation: "Après la préposition <strong>do</strong> (vers / à), on utilise le <strong>Génitif</strong>. Pour le nom masculin <em>dom</em>, la terminaison est <strong>-u</strong> : <strong>do domu</strong>.",
    options: [
      { ending: "-u", word: "domu", isCorrect: true, note: "Génitif après 'do' (-u)" },
      { ending: "", word: "dom", isCorrect: false, note: "Nominatif / Accusatif" },
      { ending: "-em", word: "domem", isCorrect: false, note: "Instrumental (-em)" },
      { ending: "-owi", word: "domowi", isCorrect: false, note: "Datif singulier (-owi)" }
    ]
  },

  // ------------------------------------------
  // DÉFIS ADJECTIFS (BIERNIK, NARZĘDNIK, MIEJSCOWNIK, DOPEŁNIACZ)
  // ------------------------------------------
  {
    id: "case-adj-b-1",
    date: "2026-10-27",
    caseName: "Biernik",
    caseLabelFr: "Accusatif (Biernik)",
    caseBadgeClass: "case-biernik",
    sentenceBefore: "Poproszę czarn",
    sentenceAfter: " kawę, bez mleka.",
    gapWord: "czarny",
    gapWordMeaning: "noir",
    targetType: "adjective",
    gender: "adjectif féminin",
    correctEnding: "-ą",
    fullCorrectWord: "czarną",
    fullSentence: "Poproszę czarną kawę, bez mleka.",
    translationFr: "Un café noir, sans lait, s'il vous plaît.",
    ruleExplanation: "À l'<strong>Accusatif singulier</strong>, l'adjectif féminin prend la terminaison nasale <strong>-ą</strong> (contrairement au nom qui prend <em>-ę</em>) : <em>czarny</em> &rarr; <strong>czarną kawę</strong>.",
    options: [
      { ending: "-ą", word: "czarną", isCorrect: true, note: "Accusatif adjectif féminin (-ą)" },
      { ending: "-ę", word: "czarnę", isCorrect: false, note: "Désinence du nom appliquée à tort à l'adjectif" },
      { ending: "-ej", word: "czarnej", isCorrect: false, note: "Génitif / Locatif féminin (-ej)" },
      { ending: "-a", word: "czarna", isCorrect: false, note: "Nominatif féminin (-a)" }
    ]
  },
  {
    id: "case-adj-b-2",
    date: "2026-10-27",
    caseName: "Biernik",
    caseLabelFr: "Accusatif (Biernik)",
    caseBadgeClass: "case-biernik",
    sentenceBefore: "W kawiarni spotykam twojego dobr",
    sentenceAfter: " brata.",
    gapWord: "dobry",
    gapWordMeaning: "bon / cher",
    targetType: "adjective",
    gender: "adjectif masculin animé",
    correctEnding: "-ego",
    fullCorrectWord: "dobrego",
    fullSentence: "W kawiarni spotykam twojego dobrego brata.",
    translationFr: "Au café, je rencontre ton bon frère.",
    ruleExplanation: "Pour les <strong>masculins animés</strong> (personnes et animaux) à l'Accusatif, l'adjectif prend la même terminaison qu'au Génitif : <strong>-ego</strong> (<em>dobrego brata</em>).",
    options: [
      { ending: "-ego", word: "dobrego", isCorrect: true, note: "Accusatif masculin animé (-ego)" },
      { ending: "-y", word: "dobry", isCorrect: false, note: "Nominatif / Masculin inanimé" },
      { ending: "-ym", word: "dobrym", isCorrect: false, note: "Instrumental / Locatif (-ym)" },
      { ending: "-emu", word: "dobremu", isCorrect: false, note: "Datif masculin (-emu)" }
    ]
  },
  {
    id: "case-adj-b-3",
    date: "2026-10-27",
    caseName: "Biernik",
    caseLabelFr: "Accusatif (Biernik)",
    caseBadgeClass: "case-biernik",
    sentenceBefore: "Kupuję now",
    sentenceAfter: " plecak na podróż.",
    gapWord: "nowy",
    gapWordMeaning: "nouveau / neuf",
    targetType: "adjective",
    gender: "adjectif masculin inanimé",
    correctEnding: "-y",
    fullCorrectWord: "nowy",
    fullSentence: "Kupuję nowy plecak na podróż.",
    translationFr: "J'achète un nouveau sac à dos pour le voyage.",
    ruleExplanation: "Pour les <strong>masculins inanimés</strong> (objets, concepts), l'adjectif à l'Accusatif est <strong>identique au Nominatif</strong> : <em>nowy</em> &rarr; <strong>nowy plecak</strong>.",
    options: [
      { ending: "-y", word: "nowy", isCorrect: true, note: "Accusatif masculin inanimé = Nominatif" },
      { ending: "-ego", word: "nowego", isCorrect: false, note: "Accusatif animé / Génitif (-ego)" },
      { ending: "-ym", word: "nowym", isCorrect: false, note: "Instrumental (-ym)" },
      { ending: "-a", word: "nowa", isCorrect: false, note: "Féminin (-a)" }
    ]
  },
  {
    id: "case-adj-b-4",
    date: "2026-10-27",
    caseName: "Biernik",
    caseLabelFr: "Accusatif (Biernik)",
    caseBadgeClass: "case-biernik",
    sentenceBefore: "W upalny dzień chętnie piję zimn",
    sentenceAfter: " piwo.",
    gapWord: "zimny",
    gapWordMeaning: "froid / frais",
    targetType: "adjective",
    gender: "adjectif neutre",
    correctEnding: "-e",
    fullCorrectWord: "zimne",
    fullSentence: "W upalny dzień chętnie piję zimne piwo.",
    translationFr: "Les jours de chaleur, je bois volontiers une bière fraîche.",
    ruleExplanation: "Pour les noms <strong>neutres</strong>, l'adjectif à l'Accusatif reste <strong>identique au Nominatif</strong> en <strong>-e</strong> : <em>zimny</em> &rarr; <strong>zimne piwo</strong>.",
    options: [
      { ending: "-e", word: "zimne", isCorrect: true, note: "Accusatif neutre (-e)" },
      { ending: "-ą", word: "zimną", isCorrect: false, note: "Féminin accusatif (-ą)" },
      { ending: "-ego", word: "zimnego", isCorrect: false, note: "Génitif neutre (-ego)" },
      { ending: "-ym", word: "zimnym", isCorrect: false, note: "Instrumental (-ym)" }
    ]
  },
  {
    id: "case-adj-n-1",
    date: "2026-10-27",
    caseName: "Narzednik",
    caseLabelFr: "Instrumental (Narzędnik)",
    caseBadgeClass: "case-narzednik",
    sentenceBefore: "Rozmawiam z moją dobr",
    sentenceAfter: " przyjaciółką.",
    gapWord: "dobry",
    gapWordMeaning: "bon / cher",
    targetType: "adjective",
    gender: "adjectif féminin",
    correctEnding: "-ą",
    fullCorrectWord: "dobrą",
    fullSentence: "Rozmawiam z moją dobrą przyjaciółką.",
    translationFr: "Je discute avec ma bonne amie.",
    ruleExplanation: "À l'<strong>Instrumental singulier</strong> féminin, l'adjectif et le nom riment tous deux en <strong>-ą</strong> : <em>dobry</em> &rarr; <strong>z dobrą przyjaciółką</strong>.",
    options: [
      { ending: "-ą", word: "dobrą", isCorrect: true, note: "Instrumental féminin régulier (-ą)" },
      { ending: "-ej", word: "dobrej", isCorrect: false, note: "Génitif / Locatif (-ej)" },
      { ending: "-ym", word: "dobrym", isCorrect: false, note: "Masculin / Neutre (-ym)" },
      { ending: "-e", word: "dobre", isCorrect: false, note: "Neutre / Pluriel" }
    ]
  },
  {
    id: "case-adj-n-2",
    date: "2026-10-27",
    caseName: "Narzednik",
    caseLabelFr: "Instrumental (Narzędnik)",
    caseBadgeClass: "case-narzednik",
    sentenceBefore: "Poproszę kawę z ciepł",
    sentenceAfter: " mlekiem.",
    gapWord: "ciepły",
    gapWordMeaning: "chaud / tiède",
    targetType: "adjective",
    gender: "adjectif neutre",
    correctEnding: "-ym",
    fullCorrectWord: "ciepłym",
    fullSentence: "Poproszę kawę z ciepłym mlekiem.",
    translationFr: "Un café avec du lait tiède, s'il vous plaît.",
    ruleExplanation: "À l'<strong>Instrumental</strong> masculin et neutre après <em>z</em> (avec), l'adjectif prend la terminaison <strong>-ym</strong> (ou <em>-im</em> après k/g) : <em>ciepły</em> &rarr; <strong>z ciepłym mlekiem</strong>.",
    options: [
      { ending: "-ym", word: "ciepłym", isCorrect: true, note: "Instrumental masculin/neutre (-ym)" },
      { ending: "-em", word: "ciepłem", isCorrect: false, note: "Désinence du nom appliquée à tort à l'adjectif" },
      { ending: "-ego", word: "ciepłego", isCorrect: false, note: "Génitif (-ego)" },
      { ending: "-ą", word: "ciepłą", isCorrect: false, note: "Féminin (-ą)" }
    ]
  },
  {
    id: "case-adj-n-3",
    date: "2026-10-27",
    caseName: "Narzednik",
    caseLabelFr: "Instrumental (Narzędnik)",
    caseBadgeClass: "case-narzednik",
    sentenceBefore: "Mój wujek jest bardzo mił",
    sentenceAfter: " kierowcą.",
    gapWord: "miły",
    gapWordMeaning: "aimable / gentil",
    targetType: "adjective",
    gender: "adjectif masculin",
    correctEnding: "-ym",
    fullCorrectWord: "miłym",
    fullSentence: "Mój wujek jest bardzo miłym kierowcą.",
    translationFr: "Mon oncle est un chauffeur très aimable.",
    ruleExplanation: "Après le verbe <em>być</em>, même si le nom masculin en <em>-a</em> (kierowca) prend <em>-ą</em>, l'adjectif masculin garde sa terminaison régulière d'Instrumental <strong>-ym</strong> : <strong>miłym kierowcą</strong>.",
    options: [
      { ending: "-ym", word: "miłym", isCorrect: true, note: "Instrumental adjectif masculin (-ym)" },
      { ending: "-ą", word: "miłą", isCorrect: false, note: "Accord faussé par la terminaison en -a du nom" },
      { ending: "-ego", word: "miłego", isCorrect: false, note: "Génitif (-ego)" },
      { ending: "-y", word: "miły", isCorrect: false, note: "Nominatif (-y)" }
    ]
  },
  {
    id: "case-adj-m-1",
    date: "2026-10-27",
    caseName: "Miejscownik",
    caseLabelFr: "Locatif (Miejscownik)",
    caseBadgeClass: "case-miejscownik",
    sentenceBefore: "Mieszkam w mał",
    sentenceAfter: " kawalerce w centrum.",
    gapWord: "mały",
    gapWordMeaning: "petit",
    targetType: "adjective",
    gender: "adjectif féminin",
    correctEnding: "-ej",
    fullCorrectWord: "małej",
    fullSentence: "Mieszkam w małej kawalerce w centrum.",
    translationFr: "J'habite dans un petit studio en centre-ville.",
    ruleExplanation: "Au <strong>Locatif singulier</strong> féminin après <em>w / na</em>, l'adjectif prend la terminaison <strong>-ej</strong> : <em>mały</em> &rarr; <strong>w małej kawalerce</strong>.",
    options: [
      { ending: "-ej", word: "małej", isCorrect: true, note: "Locatif adjectif féminin (-ej)" },
      { ending: "-ą", word: "małą", isCorrect: false, note: "Accusatif / Instrumental (-ą)" },
      { ending: "-e", word: "małe", isCorrect: false, note: "Neutre / Pluriel" },
      { ending: "-ym", word: "małym", isCorrect: false, note: "Masculin / Neutre (-ym)" }
    ]
  },
  {
    id: "case-adj-m-2",
    date: "2026-10-27",
    caseName: "Miejscownik",
    caseLabelFr: "Locatif (Miejscownik)",
    caseBadgeClass: "case-miejscownik",
    sentenceBefore: "Klucze leżą na duż",
    sentenceAfter: " stole.",
    gapWord: "duży",
    gapWordMeaning: "grand",
    targetType: "adjective",
    gender: "adjectif masculin",
    correctEnding: "-ym",
    fullCorrectWord: "dużym",
    fullSentence: "Klucze leżą na dużym stole.",
    translationFr: "Les clés sont posées sur la grande table.",
    ruleExplanation: "Au <strong>Locatif singulier</strong> masculin et neutre (après <em>na, w, o</em>), l'adjectif prend la terminaison <strong>-ym</strong> : <em>duży</em> &rarr; <strong>na dużym stole</strong>.",
    options: [
      { ending: "-ym", word: "dużym", isCorrect: true, note: "Locatif adjectif masculin/neutre (-ym)" },
      { ending: "-em", word: "dużem", isCorrect: false, note: "Forme inexistante" },
      { ending: "-ego", word: "dużego", isCorrect: false, note: "Génitif (-ego)" },
      { ending: "-ej", word: "dużej", isCorrect: false, note: "Féminin (-ej)" }
    ]
  },
  {
    id: "case-adj-m-3",
    date: "2026-10-27",
    caseName: "Miejscownik",
    caseLabelFr: "Locatif (Miejscownik)",
    caseBadgeClass: "case-miejscownik",
    sentenceBefore: "Spotkanie odbywa się w now",
    sentenceAfter: " muzeum.",
    gapWord: "nowy",
    gapWordMeaning: "nouveau",
    targetType: "adjective",
    gender: "adjectif neutre",
    correctEnding: "-ym",
    fullCorrectWord: "nowym",
    fullSentence: "Spotkanie odbywa się w nowym muzeum.",
    translationFr: "La réunion a lieu dans le nouveau musée.",
    ruleExplanation: "Même si le mot <em>muzeum</em> reste invariable au singulier, l'adjectif neutre qui l'accompagne s'accorde au Locatif avec <strong>-ym</strong> : <strong>w nowym muzeum</strong>.",
    options: [
      { ending: "-ym", word: "nowym", isCorrect: true, note: "Locatif adjectif neutre (-ym)" },
      { ending: "-e", word: "nowe", isCorrect: false, note: "Nominatif neutre (-e)" },
      { ending: "-ego", word: "nowego", isCorrect: false, note: "Génitif neutre (-ego)" },
      { ending: "-ej", word: "nowej", isCorrect: false, note: "Féminin (-ej)" }
    ]
  },
  {
    id: "case-adj-d-1",
    date: "2026-10-27",
    caseName: "Dopelniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "Rano nie piję zimn",
    sentenceAfter: " kawy.",
    gapWord: "zimny",
    gapWordMeaning: "froid",
    targetType: "adjective",
    gender: "adjectif féminin",
    correctEnding: "-ej",
    fullCorrectWord: "zimnej",
    fullSentence: "Rano nie piję zimnej kawy.",
    translationFr: "Le matin, je ne bois pas de café froid.",
    ruleExplanation: "Au <strong>Génitif singulier</strong> féminin (après négation, <em>do, bez, dla</em>), l'adjectif prend la terminaison <strong>-ej</strong> : <em>zimny</em> &rarr; <strong>zimnej kawy</strong>.",
    options: [
      { ending: "-ej", word: "zimnej", isCorrect: true, note: "Génitif adjectif féminin (-ej)" },
      { ending: "-ą", word: "zimną", isCorrect: false, note: "Accusatif / Instrumental (-ą)" },
      { ending: "-a", word: "zimna", isCorrect: false, note: "Nominatif (-a)" },
      { ending: "-ego", word: "zimnego", isCorrect: false, note: "Masculin / Neutre (-ego)" }
    ]
  },
  {
    id: "case-adj-d-2",
    date: "2026-10-27",
    caseName: "Dopelniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "Dzisiaj niestety nie mam woln",
    sentenceAfter: " czasu.",
    gapWord: "wolny",
    gapWordMeaning: "libre",
    targetType: "adjective",
    gender: "adjectif masculin",
    correctEnding: "-ego",
    fullCorrectWord: "wolnego",
    fullSentence: "Dzisiaj niestety nie mam wolnego czasu.",
    translationFr: "Aujourd'hui malheureusement je n'ai pas de temps libre.",
    ruleExplanation: "Au <strong>Génitif singulier</strong> masculin et neutre, l'adjectif prend la terminaison <strong>-ego</strong> : <em>wolny</em> &rarr; <strong>wolnego czasu</strong>.",
    options: [
      { ending: "-ego", word: "wolnego", isCorrect: true, note: "Génitif adjectif masculin (-ego)" },
      { ending: "-y", word: "wolny", isCorrect: false, note: "Nominatif (-y)" },
      { ending: "-ym", word: "wolnym", isCorrect: false, note: "Instrumental / Locatif (-ym)" },
      { ending: "-ej", word: "wolnej", isCorrect: false, note: "Féminin (-ej)" }
    ]
  },
  {
    id: "case-adj-d-3",
    date: "2026-10-27",
    caseName: "Dopelniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "W kawiarni nie ma już śwież",
    sentenceAfter: " ciasta.",
    gapWord: "świeży",
    gapWordMeaning: "frais",
    targetType: "adjective",
    gender: "adjectif neutre",
    correctEnding: "-ego",
    fullCorrectWord: "świeżego",
    fullSentence: "W kawiarni nie ma już świeżego ciasta.",
    translationFr: "Au café, il n'y a plus de gâteau frais.",
    ruleExplanation: "Après la formule d'absence <em>nie ma</em>, l'adjectif neutre passe au Génitif avec la désinence <strong>-ego</strong> : <em>świeży</em> &rarr; <strong>świeżego ciasta</strong>.",
    options: [
      { ending: "-ego", word: "świeżego", isCorrect: true, note: "Génitif neutre (-ego)" },
      { ending: "-e", word: "świeże", isCorrect: false, note: "Nominatif neutre (-e)" },
      { ending: "-ym", word: "świeżym", isCorrect: false, note: "Instrumental (-ym)" },
      { ending: "-ej", word: "świeżej", isCorrect: false, note: "Féminin (-ej)" }
    ]
  },

  // ------------------------------------------
  // DÉFIS PLURIELS (NOMS ET ADJECTIFS)
  // ------------------------------------------
  {
    id: "case-pl-b-1",
    date: "2026-10-27",
    caseName: "Biernik",
    caseLabelFr: "Accusatif (Biernik)",
    caseBadgeClass: "case-biernik",
    sentenceBefore: "Na lotnisko zabieram dwie duż",
    sentenceAfter: " walizki.",
    gapWord: "duży",
    gapWordMeaning: "grand",
    targetType: "adjective",
    isPlural: true,
    gender: "adjectif pluriel non-viril",
    correctEnding: "-e",
    fullCorrectWord: "duże",
    fullSentence: "Na lotnisko zabieram dwie duże walizki.",
    translationFr: "J'emporte deux grandes valises à l'aéroport.",
    ruleExplanation: "À l'<strong>Accusatif pluriel</strong> non-viril (objets, femmes, animaux), l'adjectif prend la terminaison <strong>-e</strong> : <em>duży</em> &rarr; <strong>duże walizki</strong>.",
    options: [
      { ending: "-e", word: "duże", isCorrect: true, note: "Accusatif pluriel non-viril (-e)" },
      { ending: "-ych", word: "dużych", isCorrect: false, note: "Génitif / Locatif pluriel (-ych)" },
      { ending: "-ą", word: "dużą", isCorrect: false, note: "Féminin singulier (-ą)" },
      { ending: "-ymi", word: "dużymi", isCorrect: false, note: "Instrumental pluriel (-ymi)" }
    ]
  },
  {
    id: "case-pl-b-2",
    date: "2026-10-27",
    caseName: "Biernik",
    caseLabelFr: "Accusatif (Biernik)",
    caseBadgeClass: "case-biernik",
    sentenceBefore: "Poproszę dwa bilet",
    sentenceAfter: " do Paryża.",
    gapWord: "bilet",
    gapWordMeaning: "billet",
    targetType: "noun",
    isPlural: true,
    gender: "nom masculin pluriel",
    correctEnding: "-y",
    fullCorrectWord: "bilety",
    fullSentence: "Poproszę dwa bilety do Paryża.",
    translationFr: "Deux billets pour Paris, s'il vous plaît.",
    ruleExplanation: "Après le chiffre <em>dwa</em> (deux) pour un masculin inanimé, le nom prend la forme du Nominatif/Accusatif pluriel en <strong>-y</strong> : <em>bilet</em> &rarr; <strong>dwa bilety</strong>.",
    options: [
      { ending: "-y", word: "bilety", isCorrect: true, note: "Accusatif pluriel inanimé (-y)" },
      { ending: "-ów", word: "biletów", isCorrect: false, note: "Génitif pluriel (pour 5 et plus) (-ów)" },
      { ending: "-e", word: "bilete", isCorrect: false, note: "Désinence erronée" },
      { ending: "-ach", word: "biletach", isCorrect: false, note: "Locatif pluriel (-ach)" }
    ]
  },
  {
    id: "case-pl-n-1",
    date: "2026-10-27",
    caseName: "Narzednik",
    caseLabelFr: "Instrumental (Narzędnik)",
    caseBadgeClass: "case-narzednik",
    sentenceBefore: "Mój profesor rozmawia ze student",
    sentenceAfter: ".",
    gapWord: "student",
    gapWordMeaning: "étudiant",
    targetType: "noun",
    isPlural: true,
    gender: "nom pluriel",
    correctEnding: "-ami",
    fullCorrectWord: "studentami",
    fullSentence: "Mój profesor rozmawia ze studentami.",
    translationFr: "Mon professeur discute avec les étudiants.",
    ruleExplanation: "À l'<strong>Instrumental pluriel</strong>, la terminaison universelle pour quasiment tous les noms (masculins, féminins, neutres) est <strong>-ami</strong> : <em>student</em> &rarr; <strong>ze studentami</strong>.",
    options: [
      { ending: "-ami", word: "studentami", isCorrect: true, note: "Instrumental pluriel régulier (-ami)" },
      { ending: "-om", word: "studentom", isCorrect: false, note: "Datif pluriel (-om)" },
      { ending: "-ów", word: "studentów", isCorrect: false, note: "Génitif pluriel (-ów)" },
      { ending: "-ach", word: "studentach", isCorrect: false, note: "Locatif pluriel (-ach)" }
    ]
  },
  {
    id: "case-pl-n-2",
    date: "2026-10-27",
    caseName: "Narzednik",
    caseLabelFr: "Instrumental (Narzędnik)",
    caseBadgeClass: "case-narzednik",
    sentenceBefore: "Po Polsce najchętniej podróżuję pociąg",
    sentenceAfter: ".",
    gapWord: "pociąg",
    gapWordMeaning: "train",
    targetType: "noun",
    isPlural: true,
    gender: "nom masculin pluriel",
    correctEnding: "-ami",
    fullCorrectWord: "pociągami",
    fullSentence: "Po Polsce najchętniej podróżuję pociągami.",
    translationFr: "En Pologne, je voyage de préférence en train (par les trains).",
    ruleExplanation: "À l'<strong>Instrumental pluriel</strong>, le moyen de transport prend la terminaison <strong>-ami</strong> : <em>pociąg</em> &rarr; <strong>pociągami</strong>.",
    options: [
      { ending: "-ami", word: "pociągami", isCorrect: true, note: "Instrumental pluriel (-ami)" },
      { ending: "-ach", word: "pociągach", isCorrect: false, note: "Locatif pluriel (-ach)" },
      { ending: "-ów", word: "pociągów", isCorrect: false, note: "Génitif pluriel (-ów)" },
      { ending: "-om", word: "pociągom", isCorrect: false, note: "Datif pluriel (-om)" }
    ]
  },
  {
    id: "case-pl-n-3",
    date: "2026-10-27",
    caseName: "Narzednik",
    caseLabelFr: "Instrumental (Narzędnik)",
    caseBadgeClass: "case-narzednik",
    sentenceBefore: "Spotykam się z now",
    sentenceAfter: " przyjaciółmi.",
    gapWord: "nowy",
    gapWordMeaning: "nouveau",
    targetType: "adjective",
    isPlural: true,
    gender: "adjectif pluriel",
    correctEnding: "-ymi",
    fullCorrectWord: "nowymi",
    fullSentence: "Spotykam się z nowymi przyjaciółmi.",
    translationFr: "Je retrouve de nouveaux amis.",
    ruleExplanation: "À l'<strong>Instrumental pluriel</strong>, les adjectifs prennent la terminaison <strong>-ymi</strong> (ou <em>-imi</em> après k/g) : <em>nowy</em> &rarr; <strong>z nowymi przyjaciółmi</strong>.",
    options: [
      { ending: "-ymi", word: "nowymi", isCorrect: true, note: "Instrumental adjectif pluriel (-ymi)" },
      { ending: "-ych", word: "nowych", isCorrect: false, note: "Génitif / Locatif pluriel (-ych)" },
      { ending: "-ami", word: "nowami", isCorrect: false, note: "Désinence du nom appliquée à tort à l'adjectif" },
      { ending: "-ym", word: "nowym", isCorrect: false, note: "Singulier (-ym)" }
    ]
  },
  {
    id: "case-pl-m-1",
    date: "2026-10-27",
    caseName: "Miejscownik",
    caseLabelFr: "Locatif (Miejscownik)",
    caseBadgeClass: "case-miejscownik",
    sentenceBefore: "Często śpię w tanich hotel",
    sentenceAfter: ".",
    gapWord: "hotel",
    gapWordMeaning: "hôtel",
    targetType: "noun",
    isPlural: true,
    gender: "nom masculin pluriel",
    correctEnding: "-ach",
    fullCorrectWord: "hotelach",
    fullSentence: "Często śpię w tanich hotelach.",
    translationFr: "Je dors souvent dans des hôtels bon marché.",
    ruleExplanation: "Au <strong>Locatif pluriel</strong>, la terminaison universelle pour tous les noms (masculins, féminins, neutres) après <em>w / na</em> est <strong>-ach</strong> : <em>hotel</em> &rarr; <strong>w hotelach</strong>.",
    options: [
      { ending: "-ach", word: "hotelach", isCorrect: true, note: "Locatif pluriel universel (-ach)" },
      { ending: "-ami", word: "hotelami", isCorrect: false, note: "Instrumental pluriel (-ami)" },
      { ending: "-ów", word: "hotelów", isCorrect: false, note: "Génitif pluriel (-ów)" },
      { ending: "-om", word: "hotelom", isCorrect: false, note: "Datif pluriel (-om)" }
    ]
  },
  {
    id: "case-pl-m-2",
    date: "2026-10-27",
    caseName: "Miejscownik",
    caseLabelFr: "Locatif (Miejscownik)",
    caseBadgeClass: "case-miejscownik",
    sentenceBefore: "Rozmawiamy o polskich tradycj",
    sentenceAfter: ".",
    gapWord: "tradycja",
    gapWordMeaning: "tradition",
    targetType: "noun",
    isPlural: true,
    gender: "nom féminin pluriel",
    correctEnding: "-ach",
    fullCorrectWord: "tradycjach",
    fullSentence: "Rozmawiamy o polskich tradycjach.",
    translationFr: "Nous parlons des traditions polonaises.",
    ruleExplanation: "Après la préposition <em>o</em> (à propos de), le nom féminin au Locatif pluriel prend toujours <strong>-ach</strong> : <em>tradycja</em> &rarr; <strong>o tradycjach</strong>.",
    options: [
      { ending: "-ach", word: "tradycjach", isCorrect: true, note: "Locatif pluriel (-ach)" },
      { ending: "-ami", word: "tradycjami", isCorrect: false, note: "Instrumental pluriel (-ami)" },
      { ending: "-i", word: "tradycji", isCorrect: false, note: "Génitif / Locatif singulier (-i)" },
      { ending: "-e", word: "tradycje", isCorrect: false, note: "Nominatif pluriel (-e)" }
    ]
  },
  {
    id: "case-pl-m-3",
    date: "2026-10-27",
    caseName: "Miejscownik",
    caseLabelFr: "Locatif (Miejscownik)",
    caseBadgeClass: "case-miejscownik",
    sentenceBefore: "Mieszkamy w dobr",
    sentenceAfter: " hotelach.",
    gapWord: "dobry",
    gapWordMeaning: "bon",
    targetType: "adjective",
    isPlural: true,
    gender: "adjectif pluriel",
    correctEnding: "-ych",
    fullCorrectWord: "dobrych",
    fullSentence: "Mieszkamy w dobrych hotelach.",
    translationFr: "Nous logeons dans de bons hôtels.",
    ruleExplanation: "Au <strong>Locatif pluriel</strong>, les adjectifs prennent la terminaison <strong>-ych</strong> (ou <em>-ich</em>) : <em>dobry</em> &rarr; <strong>w dobrych hotelach</strong>.",
    options: [
      { ending: "-ych", word: "dobrych", isCorrect: true, note: "Locatif adjectif pluriel (-ych)" },
      { ending: "-ach", word: "dobrach", isCorrect: false, note: "Désinence du nom appliquée à tort" },
      { ending: "-ymi", word: "dobrymi", isCorrect: false, note: "Instrumental pluriel (-ymi)" },
      { ending: "-ym", word: "dobrym", isCorrect: false, note: "Singulier (-ym)" }
    ]
  },
  {
    id: "case-pl-d-1",
    date: "2026-10-27",
    caseName: "Dopelniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "W kasie nie ma już wolnych bilet",
    sentenceAfter: ".",
    gapWord: "bilet",
    gapWordMeaning: "billet",
    targetType: "noun",
    isPlural: true,
    gender: "nom masculin pluriel",
    correctEnding: "-ów",
    fullCorrectWord: "biletów",
    fullSentence: "W kasie nie ma już wolnych biletów.",
    translationFr: "Au guichet, il n'y a plus de billets disponibles.",
    ruleExplanation: "Au <strong>Génitif pluriel</strong> après <em>nie ma</em>, la majorité des noms masculins prennent la terminaison <strong>-ów</strong> : <em>bilet</em> &rarr; <strong>nie ma biletów</strong>.",
    options: [
      { ending: "-ów", word: "biletów", isCorrect: true, note: "Génitif pluriel masculin (-ów)" },
      { ending: "-y", word: "bilety", isCorrect: false, note: "Nominatif / Accusatif pluriel (-y)" },
      { ending: "-ach", word: "biletach", isCorrect: false, note: "Locatif pluriel (-ach)" },
      { ending: "-om", word: "biletom", isCorrect: false, note: "Datif pluriel (-om)" }
    ]
  },
  {
    id: "case-pl-d-2",
    date: "2026-10-27",
    caseName: "Dopelniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "Poproszę dwa kilogramy jabł",
    sentenceAfter: ".",
    gapWord: "jabłko",
    gapWordMeaning: "pomme",
    targetType: "noun",
    isPlural: true,
    gender: "nom neutre pluriel",
    correctEnding: "-ek",
    fullCorrectWord: "jabłek",
    fullSentence: "Poproszę dwa kilogramy jabłek.",
    translationFr: "Deux kilos de pommes, s'il vous plaît.",
    ruleExplanation: "Après une unité de quantité (<em>dwa kilogramy</em>), le Génitif pluriel des neutres et féminins prend très souvent la <strong>désinence zéro</strong> avec insertion d'un <em>e</em> euphonique : <em>jabłko</em> &rarr; <strong>jabłek</strong>.",
    options: [
      { ending: "-ek", word: "jabłek", isCorrect: true, note: "Génitif pluriel désinence zéro (-ek)" },
      { ending: "-ków", word: "jabłków", isCorrect: false, note: "Désinence masculine appliquée à tort" },
      { ending: "-ka", word: "jabłka", isCorrect: false, note: "Nominatif pluriel (-a)" },
      { ending: "-kach", word: "jabłkach", isCorrect: false, note: "Locatif pluriel (-ach)" }
    ]
  },
  {
    id: "case-pl-d-3",
    date: "2026-10-27",
    caseName: "Dopelniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "W restauracji nie ma już woln",
    sentenceAfter: " stolików.",
    gapWord: "wolny",
    gapWordMeaning: "libre / disponible",
    targetType: "adjective",
    isPlural: true,
    gender: "adjectif pluriel",
    correctEnding: "-ych",
    fullCorrectWord: "wolnych",
    fullSentence: "W restauracji nie ma już wolnych stolików.",
    translationFr: "Au restaurant, il n'y a plus de tables libres.",
    ruleExplanation: "Au <strong>Génitif pluriel</strong> après <em>nie ma</em>, les adjectifs prennent la terminaison <strong>-ych</strong> (ou <em>-ich</em>) : <em>wolny</em> &rarr; <strong>wolnych stolików</strong>.",
    options: [
      { ending: "-ych", word: "wolnych", isCorrect: true, note: "Génitif adjectif pluriel (-ych)" },
      { ending: "-e", word: "wolne", isCorrect: false, note: "Nominatif pluriel (-e)" },
      { ending: "-ów", word: "wolnów", isCorrect: false, note: "Désinence du nom appliquée à l'adjectif" },
      { ending: "-ymi", word: "wolnymi", isCorrect: false, note: "Instrumental pluriel (-ymi)" }
    ]
  },
  {
    id: "case-pl-b-3",
    date: "2026-10-27",
    caseName: "Biernik",
    caseLabelFr: "Accusatif (Biernik)",
    caseBadgeClass: "case-biernik",
    sentenceBefore: "W auli uniwersytetu widzę now",
    sentenceAfter: " studentów.",
    gapWord: "nowy",
    gapWordMeaning: "nouveau",
    targetType: "adjective",
    isPlural: true,
    gender: "adjectif pluriel viril (masculin personnel)",
    correctEnding: "-ych",
    fullCorrectWord: "nowych",
    fullSentence: "W auli uniwersytetu widzę nowych studentów.",
    translationFr: "Dans l'amphithéâtre de l'université, je vois de nouveaux étudiants.",
    ruleExplanation: "À l'<strong>Accusatif pluriel viril</strong> (hommes ou groupes contenant au moins un homme), l'adjectif prend la même désinence qu'au Génitif pluriel : <strong>-ych / -ich</strong> : <em>nowy</em> &rarr; <strong>nowych studentów</strong> (contrairement au non-viril qui prendrait <em>-e</em> : <em>nowe walizki</em>).",
    options: [
      { ending: "-ych", word: "nowych", isCorrect: true, note: "Accusatif pluriel viril = Génitif (-ych)" },
      { ending: "-e", word: "nowe", isCorrect: false, note: "Accusatif pluriel non-viril (choses, femmes)" },
      { ending: "-ymi", word: "nowymi", isCorrect: false, note: "Instrumental pluriel (-ymi)" },
      { ending: "-ego", word: "nowego", isCorrect: false, note: "Singulier animé (-ego)" }
    ]
  },
  {
    id: "case-pl-b-4",
    date: "2026-10-27",
    caseName: "Biernik",
    caseLabelFr: "Accusatif (Biernik)",
    caseBadgeClass: "case-biernik",
    sentenceBefore: "Znam tych dwóch sympatycznych Polak",
    sentenceAfter: ".",
    gapWord: "Polak",
    gapWordMeaning: "Polonais (personne)",
    targetType: "noun",
    isPlural: true,
    gender: "nom masculin viril pluriel",
    correctEnding: "-ów",
    fullCorrectWord: "Polaków",
    fullSentence: "Znam tych dwóch sympatycznych Polaków.",
    translationFr: "Je connais ces deux Polonais sympathiques.",
    ruleExplanation: "À l'<strong>Accusatif pluriel</strong>, les noms masculins personnels (pluriel viril) prennent la terminaison de Génitif pluriel <strong>-ów</strong> : <em>Polak</em> &rarr; <strong>Polaków</strong> (<em>Znam tych Polaków</em>).",
    options: [
      { ending: "-ów", word: "Polaków", isCorrect: true, note: "Accusatif pluriel viril = Génitif (-ów)" },
      { ending: "-y", word: "Polacy", isCorrect: false, note: "Nominatif pluriel viril (Polacy)" },
      { ending: "-ami", word: "Polakami", isCorrect: false, note: "Instrumental pluriel (-ami)" },
      { ending: "-ach", word: "Polakach", isCorrect: false, note: "Locatif pluriel (-ach)" }
    ]
  },
  // ----------------------------------------------------
  // NOUVEAUX DÉFIS : DOPELNIACZ PLURIEL & SINGULIER, ET PLURIELS TOUS CAS
  // ----------------------------------------------------
  {
    id: "case-pl-d-4",
    date: "2026-10-27",
    caseName: "Dopelniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "W tym hotelu nie ma już wolnych pokoj",
    sentenceAfter: ".",
    gapWord: "pokój",
    gapWordMeaning: "chambre",
    targetType: "noun",
    isPlural: true,
    gender: "nom masculin pluriel",
    correctEnding: "-ów",
    fullCorrectWord: "pokojów",
    fullSentence: "W tym hotelu nie ma już wolnych pokojów.",
    translationFr: "Dans cet hôtel, il n'y a plus de chambres libres.",
    ruleExplanation: "Au <strong>Génitif pluriel</strong> après <em>nie ma</em>, les noms masculins prennent régulièrement la terminaison <strong>-ów</strong> (ou <em>-i</em>) : <em>pokój</em> &rarr; <strong>pokojów</strong> (ou <em>pokoi</em>).",
    options: [
      { ending: "-ów", word: "pokojów", isCorrect: true, note: "Génitif pluriel masculin (-ów)" },
      { ending: "-e", word: "pokoje", isCorrect: false, note: "Nominatif / Accusatif pluriel (-e)" },
      { ending: "-ach", word: "pokojach", isCorrect: false, note: "Locatif pluriel (-ach)" },
      { ending: "-ami", word: "pokojami", isCorrect: false, note: "Instrumental pluriel (-ami)" }
    ]
  },
  {
    id: "case-pl-d-5",
    date: "2026-10-27",
    caseName: "Dopelniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "Na parkingu nie widzę żadnych samochod",
    sentenceAfter: ".",
    gapWord: "samochód",
    gapWordMeaning: "voiture",
    targetType: "noun",
    isPlural: true,
    gender: "nom masculin pluriel",
    correctEnding: "-ów",
    fullCorrectWord: "samochodów",
    fullSentence: "Na parkingu nie widzę żadnych samochodów.",
    translationFr: "Sur le parking, je ne vois aucune voiture.",
    ruleExplanation: "Après la négation <em>nie widzę</em>, l'objet passe au Génitif. Au pluriel masculin, la terminaison régulière est <strong>-ów</strong> (avec alternance ó &rarr; o) : <em>samochód</em> &rarr; <strong>samochodów</strong>.",
    options: [
      { ending: "-ów", word: "samochodów", isCorrect: true, note: "Génitif pluriel masculin (-ów avec ó &rarr; o)" },
      { ending: "-y", word: "samochody", isCorrect: false, note: "Nominatif / Accusatif pluriel non-viril" },
      { ending: "-ach", word: "samochodach", isCorrect: false, note: "Locatif pluriel (-ach)" },
      { ending: "-ami", word: "samochodami", isCorrect: false, note: "Instrumental pluriel (-ami)" }
    ]
  },
  {
    id: "case-pl-d-6",
    date: "2026-10-27",
    caseName: "Dopelniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "W tej małej bibliotece nie ma ciekawych ksiązk",
    sentenceAfter: ".",
    gapWord: "książka",
    gapWordMeaning: "livre",
    targetType: "noun",
    isPlural: true,
    gender: "nom féminin pluriel",
    correctEnding: "-ek",
    fullCorrectWord: "książek",
    fullSentence: "W tej małej bibliotece nie ma ciekawych książek.",
    translationFr: "Dans cette petite bibliothèque, il n'y a pas de livres intéressants.",
    ruleExplanation: "Au <strong>Génitif pluriel</strong> après <em>nie ma</em>, la majorité des noms féminins en <em>-ka</em> perdent leur voyelle finale (désinence zéro <strong>-ø</strong>) et insèrent un <strong>-e-</strong> mobile pour faciliter la prononciation : <em>książka</em> &rarr; <strong>książek</strong>.",
    options: [
      { ending: "-ek", word: "książek", isCorrect: true, note: "Génitif pluriel désinence zéro avec e mobile" },
      { ending: "-ków", word: "książków", isCorrect: false, note: "Désinence masculine appliquée à tort" },
      { ending: "-ki", word: "książki", isCorrect: false, note: "Nominatif / Accusatif pluriel (-i)" },
      { ending: "-kach", word: "książkach", isCorrect: false, note: "Locatif pluriel (-ach)" }
    ]
  },
  {
    id: "case-pl-d-7",
    date: "2026-10-27",
    caseName: "Dopelniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "W naszej grupie językowej uczy się pięć kobiet",
    sentenceAfter: ".",
    gapWord: "kobieta",
    gapWordMeaning: "femme",
    targetType: "noun",
    isPlural: true,
    gender: "nom féminin pluriel",
    correctEnding: "-ø",
    fullCorrectWord: "kobiet",
    fullSentence: "W naszej grupie językowej uczy się pięć kobiet.",
    translationFr: "Dans notre groupe de langue, cinq femmes étudient.",
    ruleExplanation: "Après les nombres cardinaux de 5 et plus (<em>pięć</em>), le nom se met au <strong>Génitif pluriel</strong>. Pour les féminins en consonne simple + <em>-a</em>, c'est la <strong>désinence zéro (-ø)</strong> : <em>kobieta</em> &rarr; <strong>pięć kobiet</strong>.",
    options: [
      { ending: "-ø", word: "kobiet", isCorrect: true, note: "Génitif pluriel féminin (désinence zéro)" },
      { ending: "-y", word: "kobiety", isCorrect: false, note: "Nominatif pluriel ou Génitif singulier" },
      { ending: "-ów", word: "kobietów", isCorrect: false, note: "Désinence masculine appliquée à tort" },
      { ending: "-ami", word: "kobietami", isCorrect: false, note: "Instrumental pluriel (-ami)" }
    ]
  },
  {
    id: "case-pl-d-8",
    date: "2026-10-27",
    caseName: "Dopelniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "W tym starym zamku jest dużo dużych oki",
    sentenceAfter: ".",
    gapWord: "okno",
    gapWordMeaning: "fenêtre",
    targetType: "noun",
    isPlural: true,
    gender: "nom neutre pluriel",
    correctEnding: "-ien",
    fullCorrectWord: "okien",
    fullSentence: "W tym starym zamku jest dużo dużych okien.",
    translationFr: "Dans ce vieux château, il y a beaucoup de grandes fenêtres.",
    ruleExplanation: "Après les adverbes de quantité comme <em>dużo</em>, on emploie le <strong>Génitif pluriel</strong>. Les noms neutres en <em>-o</em> prennent la <strong>désinence zéro</strong> avec <em>-e-</em> euphonique (ici <em>-ien</em> après <em>k</em>) : <em>okno</em> &rarr; <strong>okien</strong>.",
    options: [
      { ending: "-ien", word: "okien", isCorrect: true, note: "Génitif pluriel neutre désinence zéro (okien)" },
      { ending: "-na", word: "okna", isCorrect: false, note: "Nominatif / Accusatif pluriel neutre (-a)" },
      { ending: "-nów", word: "oknów", isCorrect: false, note: "Désinence masculine appliquée à tort" },
      { ending: "-nach", word: "oknach", isCorrect: false, note: "Locatif pluriel (-ach)" }
    ]
  },
  {
    id: "case-pl-d-9",
    date: "2026-10-27",
    caseName: "Dopelniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "Proszę powtórzyć tych kilka sł",
    sentenceAfter: ".",
    gapWord: "słowo",
    gapWordMeaning: "mot",
    targetType: "noun",
    isPlural: true,
    gender: "nom neutre pluriel",
    correctEnding: "-ów",
    fullCorrectWord: "słów",
    fullSentence: "Proszę powtórzyć tych kilka słów.",
    translationFr: "Veuillez répéter ces quelques mots.",
    ruleExplanation: "Après <em>kilka</em> (quelques), le nom prend le Génitif pluriel. Bien que neutre en <em>-o</em>, <em>słowo</em> prend exceptionnellement la terminaison <strong>-ów</strong> : <em>słowo</em> &rarr; <strong>słów</strong>.",
    options: [
      { ending: "-ów", word: "słów", isCorrect: true, note: "Génitif pluriel exceptionnel en -ów (słów)" },
      { ending: "-a", word: "słowa", isCorrect: false, note: "Nominatif pluriel neutre (-a)" },
      { ending: "-ø", word: "słow", isCorrect: false, note: "Sans l'accent ó" },
      { ending: "-ami", word: "słowami", isCorrect: false, note: "Instrumental pluriel (-ami)" }
    ]
  },
  {
    id: "case-pl-d-10",
    date: "2026-10-27",
    caseName: "Dopelniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "Niestety, nie mamy już żadnych pieniędz",
    sentenceAfter: ".",
    gapWord: "pieniądze",
    gapWordMeaning: "argent",
    targetType: "noun",
    isPlural: true,
    gender: "nom pluriel irrégulier",
    correctEnding: "-y",
    fullCorrectWord: "pieniędzy",
    fullSentence: "Niestety, nie mamy już żadnych pieniędzy.",
    translationFr: "Malheureusement, nous n'avons plus d'argent du tout.",
    ruleExplanation: "Le mot <em>pieniądze</em> (argent) est un plurale tantum très fréquent. Au <strong>Génitif pluriel</strong> (notamment après la négation <em>nie mamy</em>), sa forme irrégulière est <strong>pieniędzy</strong>.",
    options: [
      { ending: "-y", word: "pieniędzy", isCorrect: true, note: "Génitif pluriel irrégulier (pieniędzy)" },
      { ending: "-e", word: "pieniądze", isCorrect: false, note: "Nominatif / Accusatif pluriel" },
      { ending: "-ów", word: "pieniądzów", isCorrect: false, note: "Forme incorrecte" },
      { ending: "-ami", word: "pieniędzmi", isCorrect: false, note: "Instrumental pluriel (pieniędzmi)" }
    ]
  },
  {
    id: "case-pl-d-11",
    date: "2026-10-27",
    caseName: "Dopelniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "Na placu zabaw nie ma dzisiaj dziec",
    sentenceAfter: ".",
    gapWord: "dziecko",
    gapWordMeaning: "enfant",
    targetType: "noun",
    isPlural: true,
    gender: "nom pluriel irrégulier",
    correctEnding: "-i",
    fullCorrectWord: "dzieci",
    fullSentence: "Na placu zabaw nie ma dzisiaj dzieci.",
    translationFr: "Sur l'aire de jeux, il n'y a pas d'enfants aujourd'hui.",
    ruleExplanation: "Le nom neutre <em>dziecko</em> a un pluriel irrégulier : <em>dzieci</em>. Au <strong>Génitif pluriel</strong> (après <em>nie ma</em>), la forme reste <strong>dzieci</strong> (identique au Nominatif pluriel) : <em>nie ma dzieci</em>.",
    options: [
      { ending: "-i", word: "dzieci", isCorrect: true, note: "Génitif pluriel irrégulier (dzieci)" },
      { ending: "-cków", word: "dziecków", isCorrect: false, note: "Forme inexistante" },
      { ending: "-ciom", word: "dzieciom", isCorrect: false, note: "Datif pluriel (-om)" },
      { ending: "-ciami", word: "dziećmi", isCorrect: false, note: "Instrumental pluriel (dziećmi)" }
    ]
  },
  {
    id: "case-pl-d-12",
    date: "2026-10-27",
    caseName: "Dopelniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "W centrum miasta jest teraz bardzo dużo ludz",
    sentenceAfter: ".",
    gapWord: "człowiek / ludzie",
    gapWordMeaning: "gens / personnes",
    targetType: "noun",
    isPlural: true,
    gender: "nom masculin viril pluriel irrégulier",
    correctEnding: "-i",
    fullCorrectWord: "ludzi",
    fullSentence: "W centrum miasta jest teraz bardzo dużo ludzi.",
    translationFr: "Au centre-ville, il y a beaucoup de monde maintenant.",
    ruleExplanation: "Le pluriel de <em>człowiek</em> est <em>ludzie</em>. Au <strong>Génitif pluriel</strong> (après les quantités comme <em>dużo</em>, <em>mało</em>), sa forme est <strong>ludzi</strong> : <em>dużo ludzi</em>.",
    options: [
      { ending: "-i", word: "ludzi", isCorrect: true, note: "Génitif pluriel irrégulier (ludzi)" },
      { ending: "-e", word: "ludzie", isCorrect: false, note: "Nominatif pluriel viril (ludzie)" },
      { ending: "-ów", word: "ludziów", isCorrect: false, note: "Forme incorrecte" },
      { ending: "-mi", word: "ludźmi", isCorrect: false, note: "Instrumental pluriel (ludźmi)" }
    ]
  },
  {
    id: "case-pl-d-13",
    date: "2026-10-27",
    caseName: "Dopelniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "Uczymy się języka polskiego od sześciu miesięc",
    sentenceAfter: ".",
    gapWord: "miesiąc",
    gapWordMeaning: "mois",
    targetType: "noun",
    isPlural: true,
    gender: "nom masculin pluriel",
    correctEnding: "-y",
    fullCorrectWord: "miesięcy",
    fullSentence: "Uczymy się języka polskiego od sześciu miesięcy.",
    translationFr: "Nous apprenons le polonais depuis six mois.",
    ruleExplanation: "Après la préposition <em>od</em> (qui exige le Génitif) et le nombre <em>sześć</em>, les noms masculins se terminant par la consonne affriquée <em>-c</em> prennent la terminaison <strong>-y</strong> : <em>miesiąc</em> &rarr; <strong>miesięcy</strong>.",
    options: [
      { ending: "-y", word: "miesięcy", isCorrect: true, note: "Génitif pluriel en -y après consonne affriquée" },
      { ending: "-ów", word: "miesiąców", isCorrect: false, note: "Terminaison -ów erronée après -c" },
      { ending: "-e", word: "miesiące", isCorrect: false, note: "Nominatif / Accusatif pluriel (-e)" },
      { ending: "-ami", word: "miesiącami", isCorrect: false, note: "Instrumental pluriel (-ami)" }
    ]
  },
  {
    id: "case-pl-d-14",
    date: "2026-10-27",
    caseName: "Dopelniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "Wakacje zaczynają się za kilka d",
    sentenceAfter: ".",
    gapWord: "dzień",
    gapWordMeaning: "jour",
    targetType: "noun",
    isPlural: true,
    gender: "nom masculin pluriel",
    correctEnding: "-ni",
    fullCorrectWord: "dni",
    fullSentence: "Wakacje zaczynają się za kilka dni.",
    translationFr: "Les vacances commencent dans quelques jours.",
    ruleExplanation: "Après <em>kilka</em> (Génitif pluriel), le nom masculin <em>dzień</em> a pour Génitif pluriel <strong>dni</strong> (ou <em>dniów</em> très rare/archaïque) : <em>kilka dni</em>.",
    options: [
      { ending: "-ni", word: "dni", isCorrect: true, note: "Génitif pluriel irrégulier (dni)" },
      { ending: "-nie", word: "dnie", isCorrect: false, note: "Nominatif pluriel poétique" },
      { ending: "-niów", word: "dniów", isCorrect: false, note: "Forme obsolète" },
      { ending: "-niami", word: "dniami", isCorrect: false, note: "Instrumental pluriel (-ami)" }
    ]
  },
  {
    id: "case-pl-d-15",
    date: "2026-10-27",
    caseName: "Dopelniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "W tym supermarkecie brakuje dobr",
    sentenceAfter: " owoców.",
    gapWord: "dobry",
    gapWordMeaning: "bon",
    targetType: "adjective",
    isPlural: true,
    gender: "adjectif pluriel",
    correctEnding: "-ych",
    fullCorrectWord: "dobrych",
    fullSentence: "W tym supermarkecie brakuje dobrych owoców.",
    translationFr: "Dans ce supermarché, il manque de bons fruits.",
    ruleExplanation: "Le verbe <em>brakować</em> exige le Génitif. Au pluriel, tous les adjectifs (masculin, féminin, neutre) prennent la terminaison <strong>-ych</strong> (ou <em>-ich</em>) : <em>dobry</em> &rarr; <strong>dobrych</strong>.",
    options: [
      { ending: "-ych", word: "dobrych", isCorrect: true, note: "Génitif pluriel adjectif (-ych)" },
      { ending: "-e", word: "dobre", isCorrect: false, note: "Nominatif / Accusatif pluriel (-e)" },
      { ending: "-ymi", word: "dobrymi", isCorrect: false, note: "Instrumental pluriel (-ymi)" },
      { ending: "-ego", word: "dobrego", isCorrect: false, note: "Génitif singulier masculin/neutre (-ego)" }
    ]
  },
  {
    id: "case-pl-d-16",
    date: "2026-10-27",
    caseName: "Dopelniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "Uczymy się nazw polsk",
    sentenceAfter: " rzek i jezior.",
    gapWord: "polski",
    gapWordMeaning: "polonais",
    targetType: "adjective",
    isPlural: true,
    gender: "adjectif pluriel",
    correctEnding: "-ich",
    fullCorrectWord: "polskich",
    fullSentence: "Uczymy się nazw polskich rzek i jezior.",
    translationFr: "Nous apprenons les noms des fleuves et lacs polonais.",
    ruleExplanation: "Au <strong>Génitif pluriel</strong>, les adjectifs dont le radical se termine par <strong>k</strong> ou <strong>g</strong> prennent la terminaison adoucie <strong>-ich</strong> : <em>polski</em> &rarr; <strong>polskich</strong>.",
    options: [
      { ending: "-ich", word: "polskich", isCorrect: true, note: "Génitif pluriel en -ich (après k/g)" },
      { ending: "-ych", word: "polskych", isCorrect: false, note: "Orthographe erronée (y après k)" },
      { ending: "-ie", word: "polskie", isCorrect: false, note: "Nominatif pluriel non-viril" },
      { ending: "-imi", word: "polskimi", isCorrect: false, note: "Instrumental pluriel (-imi)" }
    ]
  },
  {
    id: "case-pl-d-17",
    date: "2026-10-27",
    caseName: "Dopelniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "Nie zabieram ze sobą zbyt wielu rzecz",
    sentenceAfter: ".",
    gapWord: "rzecz",
    gapWordMeaning: "chose / affaire",
    targetType: "noun",
    isPlural: true,
    gender: "nom féminin pluriel",
    correctEnding: "-y",
    fullCorrectWord: "rzeczy",
    fullSentence: "Nie zabieram ze sobą zbyt wielu rzeczy.",
    translationFr: "Je n'emporte pas trop d'affaires avec moi.",
    ruleExplanation: "Après les adverbes de quantité comme <em>wielu</em> (beaucoup de), le Génitif pluriel des noms féminins terminés par une consonne molle ou chuintante (comme <em>rzecz</em>, <em>noc</em>) prend <strong>-y</strong> ou <strong>-i</strong> : <em>rzecz</em> &rarr; <strong>rzeczy</strong>.",
    options: [
      { ending: "-y", word: "rzeczy", isCorrect: true, note: "Génitif pluriel féminin en consonne (-y)" },
      { ending: "-ów", word: "rzeczów", isCorrect: false, note: "Désinence masculine appliquée à tort" },
      { ending: "-ø", word: "rzecz", isCorrect: false, note: "Forme du singulier" },
      { ending: "-ami", word: "rzeczami", isCorrect: false, note: "Instrumental pluriel (-ami)" }
    ]
  },
  {
    id: "case-pl-d-18",
    date: "2026-10-27",
    caseName: "Dopelniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "Nasze spotkanie trwało ponad pięć godzin",
    sentenceAfter: ".",
    gapWord: "godzina",
    gapWordMeaning: "heure",
    targetType: "noun",
    isPlural: true,
    gender: "nom féminin pluriel",
    correctEnding: "-ø",
    fullCorrectWord: "godzin",
    fullSentence: "Nasze spotkanie trwało ponad pięć godzin.",
    translationFr: "Notre réunion a duré plus de cinq heures.",
    ruleExplanation: "Avec les nombres cardinaux de 5 et plus (<em>pięć, sześć...</em>), le nom se décline obligatoirement au <strong>Génitif pluriel</strong> : <em>godzina</em> perd son <em>-a</em> (désinence zéro) &rarr; <strong>godzin</strong>.",
    options: [
      { ending: "-ø", word: "godzin", isCorrect: true, note: "Génitif pluriel féminin (désinence zéro -ø)" },
      { ending: "-y", word: "godziny", isCorrect: false, note: "Génitif singulier ou pluriel avec 2, 3, 4" },
      { ending: "-ów", word: "godzinów", isCorrect: false, note: "Désinence masculine appliquée à tort" },
      { ending: "-ach", word: "godzinach", isCorrect: false, note: "Locatif pluriel (-ach)" }
    ]
  },
  {
    id: "case-d-20",
    date: "2026-10-19",
    caseName: "Dopelniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "Dziś rano nie piłem gorącej kaw",
    sentenceAfter: ".",
    gapWord: "kawa",
    gapWordMeaning: "café",
    targetType: "noun",
    isPlural: false,
    gender: "nom féminin singulier",
    correctEnding: "-y",
    fullCorrectWord: "kawy",
    fullSentence: "Dziś rano nie piłem gorącej kawy.",
    translationFr: "Ce matin, je n'ai pas bu de café chaud.",
    ruleExplanation: "À la forme négative (<em>nie piłem</em>), le complément d'objet direct passe de l'Accusatif au <strong>Génitif</strong>. Les noms féminins en <em>-a</em> prennent la terminaison <strong>-y</strong> (ou <em>-i</em>) : <em>kawa</em> &rarr; <strong>kawy</strong>.",
    options: [
      { ending: "-y", word: "kawy", isCorrect: true, note: "Génitif singulier féminin après négation (-y)" },
      { ending: "-ę", word: "kawę", isCorrect: false, note: "Accusatif singulier (phrase affirmative)" },
      { ending: "-ą", word: "kawą", isCorrect: false, note: "Instrumental singulier (-ą)" },
      { ending: "-ie", word: "kawie", isCorrect: false, note: "Locatif / Datif singulier (-ie)" }
    ]
  },
  {
    id: "case-d-21",
    date: "2026-10-19",
    caseName: "Dopelniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "Przepraszam, szukam dobr",
    sentenceAfter: " przewodnika po Krakowie.",
    gapWord: "dobry",
    gapWordMeaning: "bon",
    targetType: "adjective",
    isPlural: false,
    gender: "adjectif masculin singulier",
    correctEnding: "-ego",
    fullCorrectWord: "dobrego",
    fullSentence: "Przepraszam, szukam dobrego przewodnika po Krakowie.",
    translationFr: "Pardon, je cherche un bon guide sur Cracovie.",
    ruleExplanation: "Le verbe <em>szukać</em> régit obligatoirement le <strong>Génitif</strong> (et non l'Accusatif). À l'adjectif masculin singulier, la terminaison est <strong>-ego</strong> : <em>dobry</em> &rarr; <strong>dobrego</strong>.",
    options: [
      { ending: "-ego", word: "dobrego", isCorrect: true, note: "Génitif singulier adjectif (-ego avec szukać)" },
      { ending: "-y", word: "dobry", isCorrect: false, note: "Nominatif singulier" },
      { ending: "-ym", word: "dobrym", isCorrect: false, note: "Instrumental / Locatif singulier" },
      { ending: "-emu", word: "dobremu", isCorrect: false, note: "Datif singulier (-emu)" }
    ]
  },
  {
    id: "case-d-22",
    date: "2026-10-19",
    caseName: "Dopelniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "Do herbaty zawsze dodaję plasterek cytryn",
    sentenceAfter: ".",
    gapWord: "cytryna",
    gapWordMeaning: "citron",
    targetType: "noun",
    isPlural: false,
    gender: "nom féminin singulier",
    correctEnding: "-y",
    fullCorrectWord: "cytryny",
    fullSentence: "Do herbaty zawsze dodaję plasterek cytryny.",
    translationFr: "Dans le thé, j'ajoute toujours une tranche de citron.",
    ruleExplanation: "Le complément du nom exprimant la quantité ou la matière (<em>plasterek...</em> = une tranche de...) se met au <strong>Génitif</strong> : <em>cytryna</em> &rarr; <strong>cytryny</strong>.",
    options: [
      { ending: "-y", word: "cytryny", isCorrect: true, note: "Génitif singulier féminin (-y)" },
      { ending: "-ę", word: "cytrynę", isCorrect: false, note: "Accusatif singulier (-ę)" },
      { ending: "-ie", word: "cytrynie", isCorrect: false, note: "Locatif singulier (-ie)" },
      { ending: "-ą", word: "cytryną", isCorrect: false, note: "Instrumental singulier (-ą)" }
    ]
  },
  {
    id: "case-d-23",
    date: "2026-10-19",
    caseName: "Dopelniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "Idę właśnie do lekarz",
    sentenceAfter: ".",
    gapWord: "lekarz",
    gapWordMeaning: "médecin",
    targetType: "noun",
    isPlural: false,
    gender: "nom masculin animé singulier",
    correctEnding: "-a",
    fullCorrectWord: "lekarza",
    fullSentence: "Idę właśnie do lekarza.",
    translationFr: "Je vais justement chez le médecin.",
    ruleExplanation: "La préposition <em>do</em> (direction vers) exige toujours le <strong>Génitif</strong>. Les noms masculins animés de personnes prennent la terminaison <strong>-a</strong> : <em>lekarz</em> &rarr; <strong>lekarza</strong>.",
    options: [
      { ending: "-a", word: "lekarza", isCorrect: true, note: "Génitif masculin animé après la préposition do (-a)" },
      { ending: "-em", word: "lekarzem", isCorrect: false, note: "Instrumental singulier (-em)" },
      { ending: "-owi", word: "lekarzowi", isCorrect: false, note: "Datif singulier (-owi)" },
      { ending: "-u", word: "lekarzu", isCorrect: false, note: "Locatif / Vocatif singulier (-u)" }
    ]
  },
  {
    id: "case-d-24",
    date: "2026-10-19",
    caseName: "Dopelniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "Czy wracasz prosto ze szkoł",
    sentenceAfter: "?",
    gapWord: "szkoła",
    gapWordMeaning: "école",
    targetType: "noun",
    isPlural: false,
    gender: "nom féminin singulier",
    correctEnding: "-y",
    fullCorrectWord: "szkoły",
    fullSentence: "Czy wracasz prosto ze szkoły?",
    translationFr: "Est-ce que tu rentres directement de l'école ?",
    ruleExplanation: "La préposition <em>z / ze</em> (provenance) exige le <strong>Génitif</strong> : <em>szkoła</em> &rarr; <strong>ze szkoły</strong>.",
    options: [
      { ending: "-y", word: "szkoły", isCorrect: true, note: "Génitif singulier féminin après z/ze (-y)" },
      { ending: "-ę", word: "szkołę", isCorrect: false, note: "Accusatif singulier (-ę)" },
      { ending: "-e", word: "szkole", isCorrect: false, note: "Locatif singulier (w szkole)" },
      { ending: "-ą", word: "szkołą", isCorrect: false, note: "Instrumental singulier (-ą)" }
    ]
  },
  {
    id: "case-d-25",
    date: "2026-10-19",
    caseName: "Dopelniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "Piję czarną kawę bez cukr",
    sentenceAfter: ".",
    gapWord: "cukier",
    gapWordMeaning: "sucre",
    targetType: "noun",
    isPlural: false,
    gender: "nom masculin inanimé singulier",
    correctEnding: "-u",
    fullCorrectWord: "cukru",
    fullSentence: "Piję czarną kawę bez cukru.",
    translationFr: "Je bois du café noir sans sucre.",
    ruleExplanation: "La préposition <em>bez</em> (sans) exige le <strong>Génitif</strong>. Pour les substances, matières et masses masculines, la terminaison est presque toujours <strong>-u</strong> (avec perte du <em>e</em> mobile) : <em>cukier</em> &rarr; <strong>cukru</strong>.",
    options: [
      { ending: "-u", word: "cukru", isCorrect: true, note: "Génitif singulier masculin de matière (-u sans e)" },
      { ending: "-a", word: "cukra", isCorrect: false, note: "Terminaison -a inadaptée aux matières" },
      { ending: "-em", word: "cukrem", isCorrect: false, note: "Instrumental singulier (-em)" },
      { ending: "-ze", word: "cukrze", isCorrect: false, note: "Locatif singulier (-e)" }
    ]
  },
  {
    id: "case-d-26",
    date: "2026-10-19",
    caseName: "Dopelniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "Ten piękny prezent jest dla mojego brat",
    sentenceAfter: ".",
    gapWord: "brat",
    gapWordMeaning: "frère",
    targetType: "noun",
    isPlural: false,
    gender: "nom masculin animé singulier",
    correctEnding: "-a",
    fullCorrectWord: "brata",
    fullSentence: "Ten piękny prezent jest dla mojego brata.",
    translationFr: "Ce beau cadeau est pour mon frère.",
    ruleExplanation: "La préposition <em>dla</em> (pour) régit le <strong>Génitif</strong>. Les noms masculins de personnes prennent <strong>-a</strong> : <em>brat</em> &rarr; <strong>dla brata</strong>.",
    options: [
      { ending: "-a", word: "brata", isCorrect: true, note: "Génitif singulier masculin animé après dla (-a)" },
      { ending: "-em", word: "bratem", isCorrect: false, note: "Instrumental singulier (-em)" },
      { ending: "-u", word: "bratu", isCorrect: false, note: "Datif singulier (-u)" },
      { ending: "-ie", word: "bracie", isCorrect: false, note: "Locatif / Vocatif singulier (-e)" }
    ]
  },
  {
    id: "case-d-27",
    date: "2026-10-19",
    caseName: "Dopelniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "Nasz mały pies bardzo boi się burz",
    sentenceAfter: ".",
    gapWord: "burza",
    gapWordMeaning: "orage",
    targetType: "noun",
    isPlural: false,
    gender: "nom féminin singulier",
    correctEnding: "-y",
    fullCorrectWord: "burzy",
    fullSentence: "Nasz mały pies bardzo boi się burzy.",
    translationFr: "Notre petit chien a très peur de l'orage.",
    ruleExplanation: "Le verbe <em>bać się</em> (avoir peur de) est suivi obligatoirement du <strong>Génitif</strong>. Les féminins dont le radical se termine par une chuintante prennent <strong>-y</strong> : <em>burza</em> &rarr; <strong>burzy</strong>.",
    options: [
      { ending: "-y", word: "burzy", isCorrect: true, note: "Génitif singulier féminin après bać się (-y)" },
      { ending: "-ę", word: "burzę", isCorrect: false, note: "Accusatif singulier (-ę)" },
      { ending: "-ą", word: "burzą", isCorrect: false, note: "Instrumental singulier (-ą)" },
      { ending: "-e", word: "burze", isCorrect: false, note: "Nominatif pluriel (-e)" }
    ]
  },
  {
    id: "case-d-28",
    date: "2026-10-19",
    caseName: "Dopelniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "Do zupy potrzebuję jednego śwież",
    sentenceAfter: " jajka.",
    gapWord: "świeży",
    gapWordMeaning: "frais",
    targetType: "adjective",
    isPlural: false,
    gender: "adjectif neutre singulier",
    correctEnding: "-ego",
    fullCorrectWord: "świeżego",
    fullSentence: "Do zupy potrzebuję jednego świeżego jajka.",
    translationFr: "Pour la soupe, j'ai besoin d'un œuf frais.",
    ruleExplanation: "Le verbe <em>potrzebować</em> (avoir besoin de) exige le <strong>Génitif</strong>. À l'adjectif neutre singulier, la terminaison de Génitif est <strong>-ego</strong> : <em>świeży</em> &rarr; <strong>świeżego</strong>.",
    options: [
      { ending: "-ego", word: "świeżego", isCorrect: true, note: "Génitif singulier adjectif neutre (-ego)" },
      { ending: "-e", word: "świeże", isCorrect: false, note: "Nominatif / Accusatif neutre (-e)" },
      { ending: "-ym", word: "świeżym", isCorrect: false, note: "Instrumental / Locatif neutre (-ym)" },
      { ending: "-ej", word: "świeżej", isCorrect: false, note: "Génitif féminin (-ej)" }
    ]
  },
  {
    id: "case-d-29",
    date: "2026-10-19",
    caseName: "Dopelniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "Ta sukienka jest z naturaln",
    sentenceAfter: " jedwabiu.",
    gapWord: "naturalny",
    gapWordMeaning: "naturel",
    targetType: "adjective",
    isPlural: false,
    gender: "adjectif masculin inanimé singulier",
    correctEnding: "-ego",
    fullCorrectWord: "naturalnego",
    fullSentence: "Ta sukienka jest z naturalnego jedwabiu.",
    translationFr: "Cette robe est en soie naturelle.",
    ruleExplanation: "La préposition de matière <em>z</em> régit le <strong>Génitif</strong>. L'adjectif masculin s'accorde au Génitif avec la terminaison <strong>-ego</strong> : <em>naturalny</em> &rarr; <strong>naturalnego</strong>.",
    options: [
      { ending: "-ego", word: "naturalnego", isCorrect: true, note: "Génitif singulier adjectif masculin (-ego)" },
      { ending: "-y", word: "naturalny", isCorrect: false, note: "Nominatif singulier masculin" },
      { ending: "-ym", word: "naturalnym", isCorrect: false, note: "Instrumental / Locatif (-ym)" },
      { ending: "-ej", word: "naturalnej", isCorrect: false, note: "Génitif féminin (-ej)" }
    ]
  },
  {
    id: "case-pl-b-5",
    date: "2026-10-27",
    caseName: "Biernik",
    caseLabelFr: "Accusatif (Biernik)",
    caseBadgeClass: "case-biernik",
    sentenceBefore: "Codziennie spotykam moich now",
    sentenceAfter: " sąsiadów.",
    gapWord: "nowy",
    gapWordMeaning: "nouveau",
    targetType: "adjective",
    isPlural: true,
    gender: "adjectif pluriel viril",
    correctEnding: "-ych",
    fullCorrectWord: "nowych",
    fullSentence: "Codziennie spotykam moich nowych sąsiadów.",
    translationFr: "Tous les jours, je croise mes nouveaux voisins.",
    ruleExplanation: "À l'<strong>Accusatif pluriel viril</strong> (personnes masculines), l'adjectif prend la terminaison identique au Génitif pluriel : <strong>-ych</strong> : <em>nowy</em> &rarr; <strong>nowych sąsiadów</strong>.",
    options: [
      { ending: "-ych", word: "nowych", isCorrect: true, note: "Accusatif pluriel viril adjectif = Génitif (-ych)" },
      { ending: "-e", word: "nowe", isCorrect: false, note: "Accusatif pluriel non-viril (-e)" },
      { ending: "-ymi", word: "nowymi", isCorrect: false, note: "Instrumental pluriel (-ymi)" },
      { ending: "-i", word: "nowi", isCorrect: false, note: "Nominatif pluriel viril (nowi)" }
    ]
  },
  {
    id: "case-pl-b-6",
    date: "2026-10-27",
    caseName: "Biernik",
    caseLabelFr: "Accusatif (Biernik)",
    caseBadgeClass: "case-biernik",
    sentenceBefore: "Serdecznie pozdrawiam twoich mił",
    sentenceAfter: " rodziców.",
    gapWord: "miły",
    gapWordMeaning: "gentil / aimable",
    targetType: "adjective",
    isPlural: true,
    gender: "adjectif pluriel viril",
    correctEnding: "-ych",
    fullCorrectWord: "miłych",
    fullSentence: "Serdecznie pozdrawiam twoich miłych rodziców.",
    translationFr: "Je salue chaleureusement tes gentils parents.",
    ruleExplanation: "Les parents (<em>rodzice</em>) forment un groupe viril (contenant des hommes). À l'Accusatif pluriel, l'adjectif prend donc <strong>-ych</strong> : <em>miły</em> &rarr; <strong>miłych</strong>.",
    options: [
      { ending: "-ych", word: "miłych", isCorrect: true, note: "Accusatif pluriel viril adjectif (-ych)" },
      { ending: "-e", word: "miłe", isCorrect: false, note: "Accusatif pluriel non-viril (-e)" },
      { ending: "-i", word: "mili", isCorrect: false, note: "Nominatif pluriel viril (mili)" },
      { ending: "-ymi", word: "miłymi", isCorrect: false, note: "Instrumental pluriel (-ymi)" }
    ]
  },
  {
    id: "case-pl-b-7",
    date: "2026-10-27",
    caseName: "Biernik",
    caseLabelFr: "Accusatif (Biernik)",
    caseBadgeClass: "case-biernik",
    sentenceBefore: "W kinie widzieliśmy znanych aktor",
    sentenceAfter: ".",
    gapWord: "aktor",
    gapWordMeaning: "acteur",
    targetType: "noun",
    isPlural: true,
    gender: "nom masculin viril pluriel",
    correctEnding: "-ów",
    fullCorrectWord: "aktorów",
    fullSentence: "W kinie widzieliśmy znanych aktorów.",
    translationFr: "Au cinéma, nous avons vu des acteurs connus.",
    ruleExplanation: "À l'<strong>Accusatif pluriel viril</strong>, les noms d'hommes s'alignent sur le Génitif pluriel en <strong>-ów</strong> : <em>aktor</em> &rarr; <strong>aktorów</strong>.",
    options: [
      { ending: "-ów", word: "aktorów", isCorrect: true, note: "Accusatif pluriel viril nom (-ów)" },
      { ending: "-y", word: "aktorzy", isCorrect: false, note: "Nominatif pluriel viril (aktorzy)" },
      { ending: "-ami", word: "aktorami", isCorrect: false, note: "Instrumental pluriel (-ami)" },
      { ending: "-ach", word: "aktorach", isCorrect: false, note: "Locatif pluriel (-ach)" }
    ]
  },
  {
    id: "case-pl-b-8",
    date: "2026-10-27",
    caseName: "Biernik",
    caseLabelFr: "Accusatif (Biernik)",
    caseBadgeClass: "case-biernik",
    sentenceBefore: "Kupuję na targu śwież",
    sentenceAfter: " warzywa.",
    gapWord: "świeży",
    gapWordMeaning: "frais",
    targetType: "adjective",
    isPlural: true,
    gender: "adjectif pluriel non-viril",
    correctEnding: "-e",
    fullCorrectWord: "świeże",
    fullSentence: "Kupuję na targu świeże warzywa.",
    translationFr: "J'achète des légumes frais au marché.",
    ruleExplanation: "Pour tous les pluriels non-virils (objets, plantes, neutres comme <em>warzywa</em>), l'Accusatif est identique au Nominatif : l'adjectif se termine par <strong>-e</strong> : <em>świeży</em> &rarr; <strong>świeże</strong>.",
    options: [
      { ending: "-e", word: "świeże", isCorrect: true, note: "Accusatif pluriel non-viril adjectif (-e)" },
      { ending: "-ych", word: "świeżych", isCorrect: false, note: "Génitif ou viril pluriel (-ych)" },
      { ending: "-ą", word: "świeżą", isCorrect: false, note: "Accusatif singulier féminin (-ą)" },
      { ending: "-ymi", word: "świeżymi", isCorrect: false, note: "Instrumental pluriel (-ymi)" }
    ]
  },
  {
    id: "case-pl-b-9",
    date: "2026-10-27",
    caseName: "Biernik",
    caseLabelFr: "Accusatif (Biernik)",
    caseBadgeClass: "case-biernik",
    sentenceBefore: "Pakuję do walizki letni",
    sentenceAfter: " koszule.",
    gapWord: "letni",
    gapWordMeaning: "d'été / estival",
    targetType: "adjective",
    isPlural: true,
    gender: "adjectif pluriel non-viril",
    correctEnding: "-e",
    fullCorrectWord: "letnie",
    fullSentence: "Pakuję do walizki letnie koszule.",
    translationFr: "Je range des chemises d'été dans la valise.",
    ruleExplanation: "À l'Accusatif pluriel non-viril (choses féminines comme <em>koszule</em>), l'adjectif prend la terminaison <strong>-e</strong> : <em>letni</em> &rarr; <strong>letnie</strong>.",
    options: [
      { ending: "-e", word: "letnie", isCorrect: true, note: "Accusatif pluriel non-viril adjectif (-e)" },
      { ending: "-ich", word: "letnich", isCorrect: false, note: "Génitif pluriel (-ich)" },
      { ending: "-ą", word: "letnią", isCorrect: false, note: "Accusatif singulier féminin (-ą)" },
      { ending: "-imi", word: "letnimi", isCorrect: false, note: "Instrumental pluriel (-imi)" }
    ]
  },
  {
    id: "case-pl-b-10",
    date: "2026-10-27",
    caseName: "Biernik",
    caseLabelFr: "Accusatif (Biernik)",
    caseBadgeClass: "case-biernik",
    sentenceBefore: "W lesie zbieramy czarn",
    sentenceAfter: " jagody.",
    gapWord: "czarny",
    gapWordMeaning: "noir",
    targetType: "adjective",
    isPlural: true,
    gender: "adjectif pluriel non-viril",
    correctEnding: "-e",
    fullCorrectWord: "czarne",
    fullSentence: "W lesie zbieramy czarne jagody.",
    translationFr: "Dans la forêt, nous ramassons des myrtilles (baies noires).",
    ruleExplanation: "Les baies (<em>jagody</em>) sont non-viriles. À l'Accusatif pluriel, l'adjectif prend <strong>-e</strong> : <em>czarny</em> &rarr; <strong>czarne jagody</strong>.",
    options: [
      { ending: "-e", word: "czarne", isCorrect: true, note: "Accusatif pluriel non-viril adjectif (-e)" },
      { ending: "-ych", word: "czarnych", isCorrect: false, note: "Génitif pluriel (-ych)" },
      { ending: "-ą", word: "czarną", isCorrect: false, note: "Accusatif singulier féminin (-ą)" },
      { ending: "-ymi", word: "czarnymi", isCorrect: false, note: "Instrumental pluriel (-ymi)" }
    ]
  },
  {
    id: "case-pl-n-4",
    date: "2026-10-27",
    caseName: "Narzednik",
    caseLabelFr: "Instrumental (Narzędnik)",
    caseBadgeClass: "case-narzednik",
    sentenceBefore: "Rozmawiam z moimi dobr",
    sentenceAfter: " koleżankami.",
    gapWord: "dobry",
    gapWordMeaning: "bon",
    targetType: "adjective",
    isPlural: true,
    gender: "adjectif pluriel",
    correctEnding: "-ymi",
    fullCorrectWord: "dobrymi",
    fullSentence: "Rozmawiam z moimi dobrymi koleżankami.",
    translationFr: "Je discute avec mes bonnes collègues.",
    ruleExplanation: "À l'<strong>Instrumental pluriel</strong> avec <em>z</em> (avec), tous les adjectifs prennent la terminaison <strong>-ymi</strong> (ou <em>-imi</em> après k/g) : <em>dobry</em> &rarr; <strong>dobrymi</strong>.",
    options: [
      { ending: "-ymi", word: "dobrymi", isCorrect: true, note: "Instrumental pluriel adjectif (-ymi)" },
      { ending: "-ych", word: "dobrych", isCorrect: false, note: "Génitif / Locatif pluriel (-ych)" },
      { ending: "-ą", word: "dobrą", isCorrect: false, note: "Instrumental singulier féminin (-ą)" },
      { ending: "-e", word: "dobre", isCorrect: false, note: "Nominatif pluriel (-e)" }
    ]
  },
  {
    id: "case-pl-n-5",
    date: "2026-10-27",
    caseName: "Narzednik",
    caseLabelFr: "Instrumental (Narzędnik)",
    caseBadgeClass: "case-narzednik",
    sentenceBefore: "Często spaceruję z mał",
    sentenceAfter: " psami po parku.",
    gapWord: "mały",
    gapWordMeaning: "petit",
    targetType: "adjective",
    isPlural: true,
    gender: "adjectif pluriel",
    correctEnding: "-ymi",
    fullCorrectWord: "małymi",
    fullSentence: "Często spaceruję z małymi psami po parku.",
    translationFr: "Je me promène souvent avec des petits chiens dans le parc.",
    ruleExplanation: "À l'<strong>Instrumental pluriel</strong>, l'adjectif prend la terminaison universelle <strong>-ymi</strong> : <em>mały</em> &rarr; <strong>małymi</strong>.",
    options: [
      { ending: "-ymi", word: "małymi", isCorrect: true, note: "Instrumental pluriel adjectif (-ymi)" },
      { ending: "-ych", word: "małych", isCorrect: false, note: "Génitif pluriel (-ych)" },
      { ending: "-ym", word: "małym", isCorrect: false, note: "Instrumental singulier (-ym)" },
      { ending: "-e", word: "małe", isCorrect: false, note: "Nominatif pluriel (-e)" }
    ]
  },
  {
    id: "case-pl-n-6",
    date: "2026-10-27",
    caseName: "Narzednik",
    caseLabelFr: "Instrumental (Narzędnik)",
    caseBadgeClass: "case-narzednik",
    sentenceBefore: "Pijemy herbatę ze świeżymi owoc",
    sentenceAfter: ".",
    gapWord: "owoc",
    gapWordMeaning: "fruit",
    targetType: "noun",
    isPlural: true,
    gender: "nom masculin pluriel",
    correctEnding: "-ami",
    fullCorrectWord: "owocami",
    fullSentence: "Pijemy herbatę ze świeżymi owocami.",
    translationFr: "Nous buvons du thé avec des fruits frais.",
    ruleExplanation: "À l'<strong>Instrumental pluriel</strong> après <em>z / ze</em> (avec), la grande majorité des noms (tous genres) prennent <strong>-ami</strong> : <em>owoc</em> &rarr; <strong>owocami</strong>.",
    options: [
      { ending: "-ami", word: "owocami", isCorrect: true, note: "Instrumental pluriel régulier (-ami)" },
      { ending: "-ach", word: "owocach", isCorrect: false, note: "Locatif pluriel (-ach)" },
      { ending: "-ów", word: "owoców", isCorrect: false, note: "Génitif pluriel (-ów)" },
      { ending: "-om", word: "owocom", isCorrect: false, note: "Datif pluriel (-om)" }
    ]
  },
  {
    id: "case-pl-n-7",
    date: "2026-10-27",
    caseName: "Narzednik",
    caseLabelFr: "Instrumental (Narzędnik)",
    caseBadgeClass: "case-narzednik",
    sentenceBefore: "Rozmawiamy z nowymi sąsiad",
    sentenceAfter: ".",
    gapWord: "sąsiad",
    gapWordMeaning: "voisin",
    targetType: "noun",
    isPlural: true,
    gender: "nom masculin viril pluriel",
    correctEnding: "-ami",
    fullCorrectWord: "sąsiadami",
    fullSentence: "Rozmawiamy z nowymi sąsiadami.",
    translationFr: "Nous discutons avec nos nouveaux voisins.",
    ruleExplanation: "À l'<strong>Instrumental pluriel</strong>, les noms masculins de personnes prennent régulièrement la désinence <strong>-ami</strong> : <em>sąsiad</em> &rarr; <strong>z sąsiadami</strong>.",
    options: [
      { ending: "-ami", word: "sąsiadami", isCorrect: true, note: "Instrumental pluriel universel (-ami)" },
      { ending: "-ach", word: "sąsiadach", isCorrect: false, note: "Locatif pluriel (-ach)" },
      { ending: "-ów", word: "sąsiadów", isCorrect: false, note: "Génitif pluriel (-ów)" },
      { ending: "-om", word: "sąsiadom", isCorrect: false, note: "Datif pluriel (-om)" }
    ]
  },
  {
    id: "case-pl-n-8",
    date: "2026-10-27",
    caseName: "Narzednik",
    caseLabelFr: "Instrumental (Narzędnik)",
    caseBadgeClass: "case-narzednik",
    sentenceBefore: "Rodzice bawią się z własnymi dzieć",
    sentenceAfter: ".",
    gapWord: "dziecko",
    gapWordMeaning: "enfant",
    targetType: "noun",
    isPlural: true,
    gender: "nom pluriel irrégulier",
    correctEnding: "-mi",
    fullCorrectWord: "dziećmi",
    fullSentence: "Rodzice bawią się z własnymi dziećmi.",
    translationFr: "Les parents jouent avec leurs propres enfants.",
    ruleExplanation: "Forme irrégulière très importante : à l'Instrumental pluriel, <em>dziecko</em> devient <strong>dziećmi</strong> (désinence courte <strong>-mi</strong> avec adoucissement du ć) : <em>z dziećmi</em>.",
    options: [
      { ending: "-mi", word: "dziećmi", isCorrect: true, note: "Instrumental pluriel irrégulier en -mi (dziećmi)" },
      { ending: "-ami", word: "dzieciami", isCorrect: false, note: "Forme régulière incorrecte" },
      { ending: "-ach", word: "dzieciach", isCorrect: false, note: "Locatif pluriel (-ach)" },
      { ending: "-om", word: "dzieciom", isCorrect: false, note: "Datif pluriel (-om)" }
    ]
  },
  {
    id: "case-pl-n-9",
    date: "2026-10-27",
    caseName: "Narzednik",
    caseLabelFr: "Instrumental (Narzędnik)",
    caseBadgeClass: "case-narzednik",
    sentenceBefore: "Lubię pracować z młodymi ludź",
    sentenceAfter: ".",
    gapWord: "człowiek / ludzie",
    gapWordMeaning: "gens / personnes",
    targetType: "noun",
    isPlural: true,
    gender: "nom pluriel irrégulier",
    correctEnding: "-mi",
    fullCorrectWord: "ludźmi",
    fullSentence: "Lubię pracować z młodymi ludźmi.",
    translationFr: "J'aime travailler avec des jeunes (gens).",
    ruleExplanation: "Autre forme irrégulière essentielle : à l'Instrumental pluriel, <em>ludzie</em> devient <strong>ludźmi</strong> (désinence courte <strong>-mi</strong>) : <em>z ludźmi</em>.",
    options: [
      { ending: "-mi", word: "ludźmi", isCorrect: true, note: "Instrumental pluriel irrégulier en -mi (ludźmi)" },
      { ending: "-ami", word: "ludziami", isCorrect: false, note: "Forme incorrecte" },
      { ending: "-ach", word: "ludziach", isCorrect: false, note: "Locatif pluriel (-ach)" },
      { ending: "-ów", word: "ludziów", isCorrect: false, note: "Forme erronée" }
    ]
  },
  {
    id: "case-pl-n-10",
    date: "2026-10-27",
    caseName: "Narzednik",
    caseLabelFr: "Instrumental (Narzędnik)",
    caseBadgeClass: "case-narzednik",
    sentenceBefore: "Interesuję się obc",
    sentenceAfter: " językami.",
    gapWord: "obcy",
    gapWordMeaning: "étranger",
    targetType: "adjective",
    isPlural: true,
    gender: "adjectif pluriel",
    correctEnding: "-ymi",
    fullCorrectWord: "obcymi",
    fullSentence: "Interesuję się obcymi językami.",
    translationFr: "Je m'intéresse aux langues étrangères.",
    ruleExplanation: "L'expression <em>interesować się</em> régit l'<strong>Instrumental</strong> sans préposition. Au pluriel, l'adjectif prend <strong>-ymi</strong> : <em>obcy</em> &rarr; <strong>obcymi językami</strong>.",
    options: [
      { ending: "-ymi", word: "obcymi", isCorrect: true, note: "Instrumental pluriel adjectif (-ymi)" },
      { ending: "-ych", word: "obcych", isCorrect: false, note: "Génitif pluriel (-ych)" },
      { ending: "-e", word: "obce", isCorrect: false, note: "Nominatif pluriel (-e)" },
      { ending: "-ym", word: "obcym", isCorrect: false, note: "Instrumental singulier (-ym)" }
    ]
  },
  {
    id: "case-pl-m-4",
    date: "2026-10-27",
    caseName: "Miejscownik",
    caseLabelFr: "Locatif (Miejscownik)",
    caseBadgeClass: "case-miejscownik",
    sentenceBefore: "Mieszkamy w dużych miast",
    sentenceAfter: ".",
    gapWord: "miasto",
    gapWordMeaning: "ville",
    targetType: "noun",
    isPlural: true,
    gender: "nom neutre pluriel",
    correctEnding: "-ach",
    fullCorrectWord: "miastach",
    fullSentence: "Mieszkamy w dużych miastach.",
    translationFr: "Nous habitons dans de grandes villes.",
    ruleExplanation: "Au <strong>Locatif pluriel</strong> avec <em>w</em> (dans), la règle est universelle et sans exception : TOUS les noms prennent <strong>-ach</strong> : <em>miasto</em> &rarr; <strong>miastach</strong>.",
    options: [
      { ending: "-ach", word: "miastach", isCorrect: true, note: "Locatif pluriel universel nom (-ach)" },
      { ending: "-ami", word: "miastami", isCorrect: false, note: "Instrumental pluriel (-ami)" },
      { ending: "-om", word: "miastom", isCorrect: false, note: "Datif pluriel (-om)" },
      { ending: "-a", word: "miasta", isCorrect: false, note: "Nominatif pluriel neutre (-a)" }
    ]
  },
  {
    id: "case-pl-m-5",
    date: "2026-10-27",
    caseName: "Miejscownik",
    caseLabelFr: "Locatif (Miejscownik)",
    caseBadgeClass: "case-miejscownik",
    sentenceBefore: "Rozmawiamy o naszych polsk",
    sentenceAfter: " przyjaciołach.",
    gapWord: "polski",
    gapWordMeaning: "polonais",
    targetType: "adjective",
    isPlural: true,
    gender: "adjectif pluriel",
    correctEnding: "-ich",
    fullCorrectWord: "polskich",
    fullSentence: "Rozmawiamy o naszych polskich przyjaciołach.",
    translationFr: "Nous parlons de nos amis polonais.",
    ruleExplanation: "Au <strong>Locatif pluriel</strong>, les adjectifs prennent la terminaison <strong>-ych</strong>, ou <strong>-ich</strong> après un radical en <em>k</em> ou <em>g</em> : <em>polski</em> &rarr; <strong>polskich</strong>.",
    options: [
      { ending: "-ich", word: "polskich", isCorrect: true, note: "Locatif pluriel adjectif en -ich (après k/g)" },
      { ending: "-ych", word: "polskych", isCorrect: false, note: "Orthographe erronée (y après k)" },
      { ending: "-imi", word: "polskimi", isCorrect: false, note: "Instrumental pluriel (-imi)" },
      { ending: "-ie", word: "polskie", isCorrect: false, note: "Nominatif pluriel non-viril" }
    ]
  },
  {
    id: "case-pl-m-6",
    date: "2026-10-27",
    caseName: "Miejscownik",
    caseLabelFr: "Locatif (Miejscownik)",
    caseBadgeClass: "case-miejscownik",
    sentenceBefore: "Na ulic",
    sentenceAfter: " Warszawy jest zawsze duży ruch.",
    gapWord: "ulica",
    gapWordMeaning: "rue",
    targetType: "noun",
    isPlural: true,
    gender: "nom féminin pluriel",
    correctEnding: "-ach",
    fullCorrectWord: "ulicach",
    fullSentence: "Na ulicach Warszawy jest zawsze duży ruch.",
    translationFr: "Dans les rues de Varsovie, il y a toujours beaucoup de circulation.",
    ruleExplanation: "Au <strong>Locatif pluriel</strong> après <em>na</em> (dans/sur), la terminaison nominale est invariablement <strong>-ach</strong> pour tous les genres : <em>ulica</em> &rarr; <strong>na ulicach</strong>.",
    options: [
      { ending: "-ach", word: "ulicach", isCorrect: true, note: "Locatif pluriel universel nom (-ach)" },
      { ending: "-ami", word: "ulicami", isCorrect: false, note: "Instrumental pluriel (-ami)" },
      { ending: "-e", word: "ulice", isCorrect: false, note: "Nominatif pluriel (-e)" },
      { ending: "-y", word: "ulicy", isCorrect: false, note: "Locatif singulier (na ulicy)" }
    ]
  },
  {
    id: "case-pl-m-7",
    date: "2026-10-27",
    caseName: "Miejscownik",
    caseLabelFr: "Locatif (Miejscownik)",
    caseBadgeClass: "case-miejscownik",
    sentenceBefore: "W tych now",
    sentenceAfter: " mieszkaniach jest bardzo cicho.",
    gapWord: "nowy",
    gapWordMeaning: "nouveau",
    targetType: "adjective",
    isPlural: true,
    gender: "adjectif pluriel",
    correctEnding: "-ych",
    fullCorrectWord: "nowych",
    fullSentence: "W tych nowych mieszkaniach jest bardzo cicho.",
    translationFr: "Dans ces nouveaux appartements, c'est très calme.",
    ruleExplanation: "Au <strong>Locatif pluriel</strong>, les adjectifs prennent la terminaison <strong>-ych</strong> pour tous les genres : <em>nowy</em> &rarr; <strong>w nowych mieszkaniach</strong>.",
    options: [
      { ending: "-ych", word: "nowych", isCorrect: true, note: "Locatif pluriel adjectif (-ych)" },
      { ending: "-ymi", word: "nowymi", isCorrect: false, note: "Instrumental pluriel (-ymi)" },
      { ending: "-e", word: "nowe", isCorrect: false, note: "Nominatif pluriel (-e)" },
      { ending: "-ym", word: "nowym", isCorrect: false, note: "Locatif singulier neutre (-ym)" }
    ]
  },
  {
    id: "case-pl-m-8",
    date: "2026-10-27",
    caseName: "Miejscownik",
    caseLabelFr: "Locatif (Miejscownik)",
    caseBadgeClass: "case-miejscownik",
    sentenceBefore: "W naszych gór",
    sentenceAfter: " leży jeszcze śnieg.",
    gapWord: "góra",
    gapWordMeaning: "montagne",
    targetType: "noun",
    isPlural: true,
    gender: "nom féminin pluriel",
    correctEnding: "-ach",
    fullCorrectWord: "górach",
    fullSentence: "W naszych górach leży jeszcze śnieg.",
    translationFr: "Dans nos montagnes, il y a encore de la neige.",
    ruleExplanation: "Au <strong>Locatif pluriel</strong> (ici avec <em>w górach</em> = en montagne), la terminaison nominale est toujours <strong>-ach</strong> : <em>góra</em> &rarr; <strong>górach</strong>.",
    options: [
      { ending: "-ach", word: "górach", isCorrect: true, note: "Locatif pluriel universel nom (-ach)" },
      { ending: "-ami", word: "górami", isCorrect: false, note: "Instrumental pluriel (-ami)" },
      { ending: "-ze", word: "górze", isCorrect: false, note: "Locatif singulier (na górze)" },
      { ending: "-om", word: "górom", isCorrect: false, note: "Datif pluriel (-om)" }
    ]
  },
  {
    id: "case-pl-m-9",
    date: "2026-10-27",
    caseName: "Miejscownik",
    caseLabelFr: "Locatif (Miejscownik)",
    caseBadgeClass: "case-miejscownik",
    sentenceBefore: "Myślę często o moich starych przyjacioł",
    sentenceAfter: ".",
    gapWord: "przyjaciel",
    gapWordMeaning: "ami",
    targetType: "noun",
    isPlural: true,
    gender: "nom masculin viril pluriel",
    correctEnding: "-ach",
    fullCorrectWord: "przyjaciołach",
    fullSentence: "Myślę często o moich starych przyjaciołach.",
    translationFr: "Je pense souvent à mes vieux amis.",
    ruleExplanation: "Le mot <em>przyjaciel</em> a pour radical pluriel <em>przyjacioł-</em>. Au <strong>Locatif pluriel</strong> après <em>o</em> (à propos de), il prend régulièrement la terminaison <strong>-ach</strong> : <strong>przyjaciołach</strong>.",
    options: [
      { ending: "-ach", word: "przyjaciołach", isCorrect: true, note: "Locatif pluriel nom (-ach)" },
      { ending: "-ami", word: "przyjaciółmi", isCorrect: false, note: "Instrumental pluriel irrégulier" },
      { ending: "-ół", word: "przyjaciół", isCorrect: false, note: "Génitif pluriel (przyjaciół)" },
      { ending: "-om", word: "przyjaciołom", isCorrect: false, note: "Datif pluriel (-om)" }
    ]
  },
  {
    id: "case-pl-m-10",
    date: "2026-10-27",
    caseName: "Miejscownik",
    caseLabelFr: "Locatif (Miejscownik)",
    caseBadgeClass: "case-miejscownik",
    sentenceBefore: "W wielu europejsk",
    sentenceAfter: " krajach ludzie jeżdżą rowerami.",
    gapWord: "europejski",
    gapWordMeaning: "européen",
    targetType: "adjective",
    isPlural: true,
    gender: "adjectif pluriel",
    correctEnding: "-ich",
    fullCorrectWord: "europejskich",
    fullSentence: "W wielu europejskich krajach ludzie jeżdżą rowerami.",
    translationFr: "Dans beaucoup de pays européens, les gens se déplacent à vélo.",
    ruleExplanation: "Au <strong>Locatif pluriel</strong>, l'adjectif s'accordant avec <em>krajach</em> prend <strong>-ich</strong> en raison de la consonne <em>k</em> : <em>europejski</em> &rarr; <strong>europejskich</strong>.",
    options: [
      { ending: "-ich", word: "europejskich", isCorrect: true, note: "Locatif pluriel adjectif en -ich (après k/g)" },
      { ending: "-ych", word: "europejskych", isCorrect: false, note: "Orthographe erronée (y après k)" },
      { ending: "-imi", word: "europejskimi", isCorrect: false, note: "Instrumental pluriel (-imi)" },
      { ending: "-ie", word: "europejskie", isCorrect: false, note: "Nominatif pluriel (-e)" }
    ]
  },
  // ----------------------------------------------------
  // DÉFIS DU COURS DU 27.10 (PRZYPADKI)
  // ----------------------------------------------------
  {
    id: "case-d-30",
    date: "2026-10-19",
    caseName: "Dopelniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "Czy potrzebuje pani pomoc",
    sentenceAfter: "?",
    gapWord: "pomoc",
    gapWordMeaning: "aide",
    targetType: "noun",
    isPlural: false,
    gender: "nom féminin singulier",
    correctEnding: "-y",
    fullCorrectWord: "pomocy",
    fullSentence: "Czy potrzebuje pani pomocy?",
    translationFr: "Avez-vous besoin d'aide, madame ?",
    ruleExplanation: "Le verbe <em>potrzebować</em> (avoir besoin de) exige obligatoirement le <strong>Génitif</strong>. Pour le nom féminin <em>pomoc</em> (terminé par une consonne affriquée), la terminaison de Génitif singulier est <strong>-y</strong> : <em>pomoc</em> &rarr; <strong>pomocy</strong>.",
    options: [
      { ending: "-y", word: "pomocy", isCorrect: true, note: "Génitif singulier féminin après potrzebować (-y)" },
      { ending: "-ę", word: "pomocę", isCorrect: false, note: "Terminaison erronée" },
      { ending: "-ą", word: "pomocą", isCorrect: false, note: "Instrumental singulier (-ą)" },
      { ending: "-ø", word: "pomoc", isCorrect: false, note: "Nominatif / Accusatif singulier" }
    ]
  },
  {
    id: "case-d-31",
    date: "2026-10-19",
    caseName: "Dopelniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "Wejście jest po lewej stronie, niedaleko wyjści",
    sentenceAfter: ".",
    gapWord: "wyjście",
    gapWordMeaning: "sortie",
    targetType: "noun",
    isPlural: false,
    gender: "nom neutre singulier",
    correctEnding: "-a",
    fullCorrectWord: "wyjścia",
    fullSentence: "Wejście jest po lewej stronie, niedaleko wyjścia.",
    translationFr: "L'entrée est à gauche, près de la sortie.",
    ruleExplanation: "La préposition <em>niedaleko</em> (près de, pas loin de) exige toujours le <strong>Génitif</strong>. Les noms neutres en <em>-e</em> prennent régulièrement la terminaison <strong>-a</strong> : <em>wyjście</em> &rarr; <strong>wyjścia</strong>.",
    options: [
      { ending: "-a", word: "wyjścia", isCorrect: true, note: "Génitif singulier neutre après niedaleko (-a)" },
      { ending: "-e", word: "wyjście", isCorrect: false, note: "Nominatif / Accusatif singulier" },
      { ending: "-em", word: "wyjściem", isCorrect: false, note: "Instrumental singulier (-em)" },
      { ending: "-u", word: "wyjściu", isCorrect: false, note: "Locatif / Datif singulier (-u)" }
    ]
  },
  {
    id: "case-d-32",
    date: "2026-10-19",
    caseName: "Dopelniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "Od trzech miesięcy uczę się języka polskieg",
    sentenceAfter: ".",
    gapWord: "polski",
    gapWordMeaning: "polonais",
    targetType: "adjective",
    isPlural: false,
    gender: "adjectif masculin singulier",
    correctEnding: "-ego",
    fullCorrectWord: "polskiego",
    fullSentence: "Od trzech miesięcy uczę się języka polskiego.",
    translationFr: "Depuis trois mois, j'apprends la langue polonaise.",
    ruleExplanation: "Le verbe pronominal <em>uczyć się</em> (apprendre, étudier) régit le <strong>Génitif</strong>. L'adjectif masculin singulier prend la terminaison <strong>-ego</strong> : <em>polski</em> &rarr; <strong>języka polskiego</strong>.",
    options: [
      { ending: "-ego", word: "polskiego", isCorrect: true, note: "Génitif singulier adjectif masculin après uczyć się (-ego)" },
      { ending: "-i", word: "polski", isCorrect: false, note: "Nominatif / Accusatif singulier masculin inanimé" },
      { ending: "-im", word: "polskim", isCorrect: false, note: "Instrumental / Locatif singulier (-im)" },
      { ending: "-emu", word: "polskiemu", isCorrect: false, note: "Datif singulier (-emu)" }
    ]
  },
  {
    id: "case-b-36",
    date: "2026-10-19",
    caseName: "Biernik",
    caseLabelFr: "Accusatif (Biernik)",
    caseBadgeClass: "case-biernik",
    sentenceBefore: "Dzień dobry, chciałbym jechać na alej",
    sentenceAfter: " Niezależności, proszę.",
    gapWord: "aleja",
    gapWordMeaning: "avenue, allée",
    targetType: "noun",
    isPlural: false,
    gender: "nom féminin singulier",
    correctEnding: "-ę",
    fullCorrectWord: "aleję",
    fullSentence: "Dzień dobry, chciałbym jechać na aleję Niezależności, proszę.",
    translationFr: "Bonjour, je voudrais aller à l'avenue de l'Indépendance, s'il vous plaît.",
    ruleExplanation: "Avec un verbe de mouvement (<em>jechać</em>) et la préposition <strong>na</strong> indiquant la direction, on emploie l'<strong>Accusatif</strong> (Biernik). Les noms féminins en <em>-a</em> prennent la terminaison <strong>-ę</strong> : <em>aleja</em> &rarr; <strong>na aleję</strong>.",
    options: [
      { ending: "-ę", word: "aleję", isCorrect: true, note: "Accusatif singulier féminin de direction (-ę)" },
      { ending: "-i", word: "alei", isCorrect: false, note: "Génitif ou Locatif singulier" },
      { ending: "-ą", word: "aleją", isCorrect: false, note: "Instrumental singulier (-ą)" },
      { ending: "-a", word: "aleja", isCorrect: false, note: "Nominatif singulier (-a)" }
    ]
  },
  {
    id: "case-b-37",
    date: "2026-10-19",
    caseName: "Biernik",
    caseLabelFr: "Accusatif (Biernik)",
    caseBadgeClass: "case-biernik",
    sentenceBefore: "Ile kosztuje przejazd na ulic",
    sentenceAfter: " Lipową?",
    gapWord: "ulica",
    gapWordMeaning: "rue",
    targetType: "noun",
    isPlural: false,
    gender: "nom féminin singulier",
    correctEnding: "-ę",
    fullCorrectWord: "ulicę",
    fullSentence: "Ile kosztuje przejazd na ulicę Lipową?",
    translationFr: "Combien coûte le trajet jusqu'à la rue Lipowa ?",
    ruleExplanation: "Après la préposition <strong>na</strong> exprimant la destination d'un trajet (<em>przejazd na...</em>), le nom féminin se met à l'<strong>Accusatif</strong> en <strong>-ę</strong> : <em>ulica</em> &rarr; <strong>na ulicę Lipową</strong>.",
    options: [
      { ending: "-ę", word: "ulicę", isCorrect: true, note: "Accusatif singulier féminin de destination (-ę)" },
      { ending: "-y", word: "ulicy", isCorrect: false, note: "Génitif ou Locatif singulier (na ulicy = dans la rue, statique)" },
      { ending: "-ą", word: "ulicą", isCorrect: false, note: "Instrumental singulier (-ą)" },
      { ending: "-e", word: "ulice", isCorrect: false, note: "Nominatif / Accusatif pluriel (-e)" }
    ]
  },
  {
    id: "case-b-38",
    date: "2026-10-19",
    caseName: "Biernik",
    caseLabelFr: "Accusatif (Biernik)",
    caseBadgeClass: "case-biernik",
    sentenceBefore: "Uczę się polskiego, bo mam polsk",
    sentenceAfter: " dziewczynę.",
    gapWord: "polski",
    gapWordMeaning: "polonais",
    targetType: "adjective",
    isPlural: false,
    gender: "adjectif féminin singulier",
    correctEnding: "-ą",
    fullCorrectWord: "polską",
    fullSentence: "Uczę się polskiego, bo mam polską dziewczynę.",
    translationFr: "J'apprends le polonais parce que j'ai une copine polonaise.",
    ruleExplanation: "Après le verbe de possession <em>mieć</em> (avoir), le COD se décline à l'<strong>Accusatif</strong> (Biernik). L'adjectif féminin s'accorde avec <em>dziewczynę</em> et prend la terminaison <strong>-ą</strong> : <em>polska</em> &rarr; <strong>polską dziewczynę</strong>.",
    options: [
      { ending: "-ą", word: "polską", isCorrect: true, note: "Accusatif singulier féminin adjectif (-ą)" },
      { ending: "-ej", word: "polskiej", isCorrect: false, note: "Génitif / Locatif féminin (-ej)" },
      { ending: "-a", word: "polska", isCorrect: false, note: "Nominatif féminin (-a)" },
      { ending: "-e", word: "polskie", isCorrect: false, note: "Neutre ou pluriel non-viril" }
    ]
  },
  {
    id: "case-m-32",
    date: "2026-10-19",
    caseName: "Miejscownik",
    caseLabelFr: "Locatif (Miejscownik)",
    caseBadgeClass: "case-miejscownik",
    sentenceBefore: "W zeszłym roku byłem we Wrocław",
    sentenceAfter: " i w Krakowie.",
    gapWord: "Wrocław",
    gapWordMeaning: "Wrocław (ville de Pologne)",
    targetType: "noun",
    isPlural: false,
    gender: "nom masculin inanimé singulier",
    correctEnding: "-iu",
    fullCorrectWord: "Wrocławiu",
    fullSentence: "W zeszłym roku byłem we Wrocławiu i w Krakowie.",
    translationFr: "L'année dernière, je suis allé à Wrocław et à Cracovie.",
    ruleExplanation: "Pour exprimer le lieu où l'on se trouve avec <em>w / we</em>, on utilise le <strong>Locatif</strong> (Miejscownik). Les noms masculins terminés par la consonne douce <em>-w</em> prennent la terminaison <strong>-iu</strong> : <em>Wrocław</em> &rarr; <strong>we Wrocławiu</strong>.",
    options: [
      { ending: "-iu", word: "Wrocławiu", isCorrect: true, note: "Locatif singulier masculin en consonne douce (-iu)" },
      { ending: "-ie", word: "Wrocławie", isCorrect: false, note: "Forme incorrecte" },
      { ending: "-a", word: "Wrocławia", isCorrect: false, note: "Génitif singulier (-a)" },
      { ending: "-em", word: "Wrocławiem", isCorrect: false, note: "Instrumental singulier (-em)" }
    ]
  },
  {
    id: "case-n-18",
    date: "2026-10-19",
    caseName: "Narzednik",
    caseLabelFr: "Instrumental (Narzędnik)",
    caseBadgeClass: "case-narzednik",
    sentenceBefore: "Na obiad lubię jeść pierogi z kapust",
    sentenceAfter: " i mięsem.",
    gapWord: "kapusta",
    gapWordMeaning: "chou",
    targetType: "noun",
    isPlural: false,
    gender: "nom féminin singulier",
    correctEnding: "-ą",
    fullCorrectWord: "kapustą",
    fullSentence: "Na obiad lubię jeść pierogi z kapustą i mięsem.",
    translationFr: "Pour le déjeuner, j'aime manger des pierogi au chou et à la viande.",
    ruleExplanation: "La préposition <em>z / ze</em> (avec, à la garniture de) exige l'<strong>Instrumental</strong> (Narzędnik). Les noms féminins se terminent invariablement par <strong>-ą</strong> : <em>kapusta</em> &rarr; <strong>z kapustą</strong>.",
    options: [
      { ending: "-ą", word: "kapustą", isCorrect: true, note: "Instrumental singulier féminin après z (-ą)" },
      { ending: "-y", word: "kapusty", isCorrect: false, note: "Génitif singulier (-y)" },
      { ending: "-ę", word: "kapustę", isCorrect: false, note: "Accusatif singulier (-ę)" },
      { ending: "-ie", word: "kapuście", isCorrect: false, note: "Locatif singulier (-ie)" }
    ]
  },
  {
    id: "case-d-33",
    date: "2026-10-29",
    caseName: "Dopelniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "Dzień dobry. Szukam chleb",
    sentenceAfter: ".",
    gapWord: "chleb",
    gapWordMeaning: "pain",
    targetType: "noun",
    isPlural: false,
    gender: "nom masculin inanimé singulier",
    correctEnding: "-a",
    fullCorrectWord: "chleba",
    fullSentence: "Dzień dobry. Szukam chleba.",
    translationFr: "Bonjour. Je cherche du pain.",
    ruleExplanation: "Le verbe <strong>szukać</strong> (chercher) exige systématiquement le <strong>Génitif</strong> (Dopełniacz). Les noms masculins inanimés prennent le plus souvent la désinence <strong>-a</strong> : <em>chleb</em> &rarr; <strong>chleba</strong>.",
    options: [
      {
        ending: "-a",
        word: "chleba",
        isCorrect: true,
        note: "Génitif singulier après szukać (-a)"
      },
      {
        ending: "-u",
        word: "chlebu",
        isCorrect: false,
        note: "Datif singulier (-u)"
      },
      {
        ending: "-em",
        word: "chlebem",
        isCorrect: false,
        note: "Instrumental singulier (-em)"
      },
      {
        ending: "-ie",
        word: "chlebie",
        isCorrect: false,
        note: "Locatif singulier (-ie)"
      }
    ]
  },
  {
    id: "case-pl-d-19",
    date: "2026-10-29",
    caseName: "Dopelniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "Klientka mówi w sklepie: przepraszam, szukam truskawe",
    sentenceAfter: ".",
    gapWord: "truskawki",
    gapWordMeaning: "fraises",
    targetType: "noun",
    isPlural: true,
    gender: "nom féminin pluriel",
    correctEnding: "-k",
    fullCorrectWord: "truskawek",
    fullSentence: "Klientka mówi w sklepie: przepraszam, szukam truskawek.",
    translationFr: "La cliente dit dans le magasin : excusez-moi, je cherche des fraises.",
    ruleExplanation: "Avec <em>szukać</em>, le complément est au <strong>Génitif</strong>. Pour un nom féminin pluriel en <em>-ka</em> (<em>truskawka</em> &rarr; <em>truskawki</em>), le génitif pluriel perd sa terminaison et insère une voyelle mobile <strong>-e-</strong> euphonique avant le <em>-k</em> : <strong>truskawek</strong>.",
    options: [
      {
        ending: "-ek",
        word: "truskawek",
        isCorrect: true,
        note: "Génitif pluriel féminin à désinence zéro avec e mobile (-ek)"
      },
      {
        ending: "-ki",
        word: "truskawki",
        isCorrect: false,
        note: "Nominatif / Accusatif pluriel (-i)"
      },
      {
        ending: "-ków",
        word: "truskawków",
        isCorrect: false,
        note: "Désinence masculine (-ów)"
      },
      {
        ending: "-kom",
        word: "truskawkom",
        isCorrect: false,
        note: "Datif pluriel (-om)"
      }
    ]
  },
  {
    id: "case-pl-d-20",
    date: "2026-10-29",
    caseName: "Dopelniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "Gdzie są owoce? Owoce są obok warzy",
    sentenceAfter: ".",
    gapWord: "warzywa",
    gapWordMeaning: "légumes",
    targetType: "noun",
    isPlural: true,
    gender: "nom neutre pluriel",
    correctEnding: "-w",
    fullCorrectWord: "warzyw",
    fullSentence: "Gdzie są owoce? Owoce są obok warzyw.",
    translationFr: "Où sont les fruits ? Les fruits sont à côté des légumes.",
    ruleExplanation: "La préposition de lieu <strong>obok</strong> (à côté de) régit obligatoirement le <strong>Génitif</strong> (Dopełniacz). Pour le nom pluriel <em>warzywa</em> (légumes), le génitif pluriel est à désinence zéro : <strong>warzyw</strong>.",
    options: [
      {
        ending: "-w",
        word: "warzyw",
        isCorrect: true,
        note: "Génitif pluriel après obok (désinence zéro -w)"
      },
      {
        ending: "-wa",
        word: "warzywa",
        isCorrect: false,
        note: "Nominatif / Accusatif pluriel (-a)"
      },
      {
        ending: "-wami",
        word: "warzywami",
        isCorrect: false,
        note: "Instrumental pluriel (-ami)"
      },
      {
        ending: "-wom",
        word: "warzywom",
        isCorrect: false,
        note: "Datif pluriel (-om)"
      }
    ]
  },
  {
    id: "case-n-19",
    date: "2026-10-29",
    caseName: "Narzednik",
    caseLabelFr: "Instrumental (Narzędnik)",
    caseBadgeClass: "case-narzednik",
    sentenceBefore: "Uczę się polskiego, bo moja dziewczyna jest Polk",
    sentenceAfter: ".",
    gapWord: "Polka",
    gapWordMeaning: "une Polonaise",
    targetType: "noun",
    isPlural: false,
    gender: "nom féminin singulier",
    correctEnding: "-ą",
    fullCorrectWord: "Polką",
    fullSentence: "Uczę się polskiego, bo moja dziewczyna jest Polką.",
    translationFr: "J'apprends le polonais car ma copine est polonaise.",
    ruleExplanation: "Après le verbe <em>być</em> (être) désignant une nationalité ou une identité, le nom se décline à l'<strong>Instrumental</strong> (Narzędnik). Les noms féminins singuliers prennent la terminaison <strong>-ą</strong> : <em>Polka</em> &rarr; <strong>Polką</strong>.",
    options: [
      {
        ending: "-ą",
        word: "Polką",
        isCorrect: true,
        note: "Instrumental singulier féminin d'identité (-ą)"
      },
      {
        ending: "-ę",
        word: "Polkę",
        isCorrect: false,
        note: "Accusatif singulier (-ę)"
      },
      {
        ending: "-i",
        word: "Polki",
        isCorrect: false,
        note: "Génitif singulier (-i)"
      },
      {
        ending: "-a",
        word: "Polka",
        isCorrect: false,
        note: "Nominatif de base (-a)"
      }
    ]
  },
  {
    id: "case-n-20",
    date: "2026-10-29",
    caseName: "Narzednik",
    caseLabelFr: "Instrumental (Narzędnik)",
    caseBadgeClass: "case-narzednik",
    sentenceBefore: "Niektórzy mówią, że pomidor jest owoc",
    sentenceAfter: ".",
    gapWord: "owoc",
    gapWordMeaning: "fruit",
    targetType: "noun",
    isPlural: false,
    gender: "nom masculin inanimé singulier",
    correctEnding: "-em",
    fullCorrectWord: "owocem",
    fullSentence: "Niektórzy mówią, że pomidor jest owocem.",
    translationFr: "Certains disent que la tomate est un fruit.",
    ruleExplanation: "Après <em>być</em> (<em>jest</em>), l'attribut prend l'<strong>Instrumental</strong>. Les noms masculins singuliers prennent la terminaison <strong>-em</strong> : <em>owoc</em> &rarr; <strong>owocem</strong>.",
    options: [
      {
        ending: "-em",
        word: "owocem",
        isCorrect: true,
        note: "Instrumental singulier masculin après być (-em)"
      },
      {
        ending: "-a",
        word: "owoca",
        isCorrect: false,
        note: "Génitif singulier (-a)"
      },
      {
        ending: "-u",
        word: "owocu",
        isCorrect: false,
        note: "Locatif singulier (-u)"
      },
      {
        ending: "-ie",
        word: "owocie",
        isCorrect: false,
        note: "Forme incorrecte"
      }
    ]
  },
  {
    id: "case-m-33",
    date: "2026-10-29",
    caseName: "Miejscownik",
    caseLabelFr: "Locatif (Miejscownik)",
    caseBadgeClass: "case-miejscownik",
    sentenceBefore: "Jestem z Francji, mieszkam w Paryż",
    sentenceAfter: ".",
    gapWord: "Paryż",
    gapWordMeaning: "Paris",
    targetType: "noun",
    isPlural: false,
    gender: "nom masculin inanimé singulier",
    correctEnding: "-u",
    fullCorrectWord: "Paryżu",
    fullSentence: "Jestem z Francji, mieszkam w Paryżu.",
    translationFr: "Je viens de France, j'habite à Paris.",
    ruleExplanation: "Pour exprimer le lieu où l'on habite avec la préposition <em>w</em> (dans / à), on emploie le <strong>Locatif</strong> (Miejscownik). Les noms masculins terminés par une consonne chuintante comme <em>-ż</em> prennent la terminaison <strong>-u</strong> : <em>Paryż</em> &rarr; <strong>w Paryżu</strong>.",
    options: [
      {
        ending: "-u",
        word: "Paryżu",
        isCorrect: true,
        note: "Locatif singulier masculin en consonne chuintante (-u)"
      },
      {
        ending: "-e",
        word: "Paryże",
        isCorrect: false,
        note: "Forme incorrecte"
      },
      {
        ending: "-em",
        word: "Paryżem",
        isCorrect: false,
        note: "Instrumental singulier (-em)"
      },
      {
        ending: "-a",
        word: "Paryża",
        isCorrect: false,
        note: "Génitif singulier (-a)"
      }
    ]
  },
  {
    id: "case-pl-d-21",
    date: "2026-10-29",
    caseName: "Dopelniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "Mam dużą rodzinę: mam dużo kuzyn",
    sentenceAfter: " i kuzynek.",
    gapWord: "kuzyn",
    gapWordMeaning: "cousin",
    targetType: "noun",
    isPlural: true,
    gender: "nom masculin personnel pluriel",
    correctEnding: "-ów",
    fullCorrectWord: "kuzynów",
    fullSentence: "Mam dużą rodzinę: mam dużo kuzynów i kuzynek.",
    translationFr: "J'ai une grande famille : j'ai beaucoup de cousins et de cousines.",
    ruleExplanation: "L'adverbe de quantité <strong>dużo</strong> (beaucoup de) régit le <strong>Génitif pluriel</strong>. Les noms masculins prennent régulièrement la terminaison <strong>-ów</strong> : <em>kuzyn</em> &rarr; <strong>kuzynów</strong>.",
    options: [
      {
        ending: "-ów",
        word: "kuzynów",
        isCorrect: true,
        note: "Génitif pluriel masculin régulier après dużo (-ów)"
      },
      {
        ending: "-i",
        word: "kuzyni",
        isCorrect: false,
        note: "Nominatif pluriel viril (-i)"
      },
      {
        ending: "-om",
        word: "kuzynom",
        isCorrect: false,
        note: "Datif pluriel (-om)"
      },
      {
        ending: "-ami",
        word: "kuzynami",
        isCorrect: false,
        note: "Instrumental pluriel (-ami)"
      }
    ]
  },
  {
    id: "case-d-34",
    date: "2026-10-29",
    caseName: "Dopelniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "Jak ma na imię mąż Ann",
    sentenceAfter: "?",
    gapWord: "Anna",
    gapWordMeaning: "Anna",
    targetType: "noun",
    isPlural: false,
    gender: "nom propre féminin singulier",
    correctEnding: "-y",
    fullCorrectWord: "Anny",
    fullSentence: "Jak ma na imię mąż Anny?",
    translationFr: "Comment s'appelle le mari d'Anna ?",
    ruleExplanation: "Pour exprimer la relation de possession (le mari <em>d'Anna</em>), on utilise le <strong>Génitif</strong> (Dopełniacz). Pour un prénom féminin en <em>-a</em> précédé d'une consonne dure, la désinence est <strong>-y</strong> : <em>Anna</em> &rarr; <strong>Anny</strong> (mąż Anny).",
    options: [
      {
        ending: "-y",
        word: "Anny",
        isCorrect: true,
        note: "Génitif singulier féminin de possession (-y)"
      },
      {
        ending: "-ie",
        word: "Annie",
        isCorrect: false,
        note: "Datif / Locatif singulier (-ie)"
      },
      {
        ending: "-ę",
        word: "Annę",
        isCorrect: false,
        note: "Accusatif singulier (-ę)"
      },
      {
        ending: "-ą",
        word: "Anną",
        isCorrect: false,
        note: "Instrumental singulier (-ą)"
      }
    ]
  },
  {
    id: "case-d-35",
    date: "2026-11-03",
    caseName: "Dopelniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "Mój brat mieszka po lewej stronie dom",
    sentenceAfter: ".",
    gapWord: "dom",
    gapWordMeaning: "maison",
    targetType: "noun",
    isPlural: false,
    gender: "nom masculin inanimé singulier",
    correctEnding: "-u",
    fullCorrectWord: "domu",
    fullSentence: "Mój brat mieszka po lewej stronie domu.",
    translationFr: "Mon frère habite à gauche de la maison.",
    ruleExplanation: "L'expression de localisation <strong>po lewej stronie</strong> (sur le côté gauche de) est obligatoirement suivie du <strong>Génitif</strong> (Dopełniacz). Les noms masculins inanimés prennent le plus souvent <em>-u</em> ou <em>-a</em> ; pour <em>dom</em>, le génitif régulier est <strong>domu</strong>.",
    options: [
      {
        ending: "-u",
        word: "domu",
        isCorrect: true,
        note: "Génitif singulier masculin après po lewej stronie (-u)"
      },
      {
        ending: "-a",
        word: "doma",
        isCorrect: false,
        note: "Forme incorrecte"
      },
      {
        ending: "-em",
        word: "domem",
        isCorrect: false,
        note: "Instrumental singulier (-em)"
      },
      {
        ending: "-ie",
        word: "domie",
        isCorrect: false,
        note: "Locatif désuet"
      }
    ]
  },
  {
    id: "case-d-36",
    date: "2026-11-03",
    caseName: "Dopelniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "Mąż Mari",
    sentenceAfter: " ma na imię Pierre.",
    gapWord: "Maria",
    gapWordMeaning: "Marie (Maria)",
    targetType: "noun",
    isPlural: false,
    gender: "nom propre féminin singulier",
    correctEnding: "-i",
    fullCorrectWord: "Marii",
    fullSentence: "Mąż Marii ma na imię Pierre.",
    translationFr: "Le mari de Marie s'appelle Pierre.",
    ruleExplanation: "Pour marquer la possession (le mari <em>de Marie</em>), on utilise le <strong>Génitif</strong>. Les prénoms et noms féminins terminés par <strong>-ia</strong> (comme <em>Maria, Zofia, Julia</em>) prennent un double <strong>-ii</strong> au génitif : <em>Maria</em> &rarr; <strong>Marii</strong>.",
    options: [
      {
        ending: "-i",
        word: "Marii",
        isCorrect: true,
        note: "Génitif singulier féminin des noms en -ia (-ii)"
      },
      {
        ending: "-y",
        word: "Mary",
        isCorrect: false,
        note: "Forme incorrecte"
      },
      {
        ending: "-ę",
        word: "Marię",
        isCorrect: false,
        note: "Accusatif singulier (-ę)"
      },
      {
        ending: "-ą",
        word: "Marią",
        isCorrect: false,
        note: "Instrumental singulier (-ą)"
      }
    ]
  },
  {
    id: "case-b-39",
    date: "2026-11-03",
    caseName: "Biernik",
    caseLabelFr: "Accusatif (Biernik)",
    caseBadgeClass: "case-biernik",
    sentenceBefore: "Mam dwóch braci i jedn",
    sentenceAfter: " siostrę.",
    gapWord: "jedna",
    gapWordMeaning: "une (adjectif numéral)",
    targetType: "adj",
    isPlural: false,
    gender: "adjectif féminin singulier",
    correctEnding: "-ą",
    fullCorrectWord: "jedną",
    fullSentence: "Mam dwóch braci i jedną siostrę.",
    translationFr: "J'ai deux frères et une sœur.",
    ruleExplanation: "Le verbe <strong>mieć (mam)</strong> régit l'<strong>Accusatif</strong> (Biernik). À l'accusatif féminin singulier, l'adjectif ou numéral prend <strong>-ą</strong> et le nom prend <strong>-ę</strong> : <em>jedna siostra</em> &rarr; <strong>jedną siostrę</strong>.",
    options: [
      {
        ending: "-ą",
        word: "jedną",
        isCorrect: true,
        note: "Accusatif singulier féminin après mam (-ą)"
      },
      {
        ending: "-a",
        word: "jedna",
        isCorrect: false,
        note: "Nominatif singulier (-a)"
      },
      {
        ending: "-ej",
        word: "jednej",
        isCorrect: false,
        note: "Génitif / Locatif singulier (-ej)"
      },
      {
        ending: "-e",
        word: "jedne",
        isCorrect: false,
        note: "Pluriel non-viril (-e)"
      }
    ]
  },
  {
    id: "case-pl-b-11",
    date: "2026-11-03",
    caseName: "Biernik",
    caseLabelFr: "Accusatif (Biernik)",
    caseBadgeClass: "case-biernik",
    sentenceBefore: "W mojej rodzinie mam dwóch brac",
    sentenceAfter: " i jedną siostrę.",
    gapWord: "bracia",
    gapWordMeaning: "frères (pluriel viril)",
    targetType: "noun",
    isPlural: true,
    gender: "nom masculin personnel pluriel",
    correctEnding: "-i",
    fullCorrectWord: "braci",
    fullSentence: "W mojej rodzinie mam dwóch braci i jedną siostrę.",
    translationFr: "Dans ma famille, j'ai deux frères et une sœur.",
    ruleExplanation: "Pour les êtres humains masculins (genre viril / masculin personnel), la règle fondamentale est <strong>Accusatif pluriel = Génitif pluriel</strong>. Le mot <em>brat</em> fait au génitif/accusatif pluriel <strong>braci</strong> (avec numéral viril : <em>dwóch braci</em>).",
    options: [
      {
        ending: "-i",
        word: "braci",
        isCorrect: true,
        note: "Accusatif pluriel viril égal au génitif (dwóch braci)"
      },
      {
        ending: "-ia",
        word: "bracia",
        isCorrect: false,
        note: "Nominatif pluriel viril (moi bracia)"
      },
      {
        ending: "-iów",
        word: "braciów",
        isCorrect: false,
        note: "Forme incorrecte"
      },
      {
        ending: "-iom",
        word: "braciom",
        isCorrect: false,
        note: "Datif pluriel (-om)"
      }
    ]
  },
  {
    id: "case-pl-d-22",
    date: "2026-11-03",
    caseName: "Dopelniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "Moja siostra ma trzydzieści pięć l",
    sentenceAfter: ".",
    gapWord: "rok",
    gapWordMeaning: "ans / années",
    targetType: "noun",
    isPlural: true,
    gender: "nom masculin inanimé pluriel",
    correctEnding: "-at",
    fullCorrectWord: "lat",
    fullSentence: "Moja siostra ma trzydzieści pięć lat.",
    translationFr: "Ma sœur a trente-cinq ans.",
    ruleExplanation: "Les nombres terminés par 5, 6, 7, 8, 9, 0 ainsi que 11 à 14 exigent le <strong>Génitif pluriel</strong>. Pour compter les années après ces nombres, le polonais emploie la forme irrégulière <strong>lat</strong> (<em>35 lat</em>).",
    options: [
      {
        ending: "-at",
        word: "lat",
        isCorrect: true,
        note: "Génitif pluriel irrégulier après 5-21, 25-31... (lat)"
      },
      {
        ending: "-ata",
        word: "lata",
        isCorrect: false,
        note: "Utilisé seulement après 2, 3, 4 et composés"
      },
      {
        ending: "-ok",
        word: "rok",
        isCorrect: false,
        note: "Singulier après 1 (1 rok)"
      },
      {
        ending: "-atów",
        word: "latów",
        isCorrect: false,
        note: "Forme inexistante"
      }
    ]
  },
  {
    id: "case-pl-d-23",
    date: "2026-11-03",
    caseName: "Biernik",
    caseLabelFr: "Accusatif / Nominatif (Pluriel)",
    caseBadgeClass: "case-biernik",
    sentenceBefore: "Moja ulubiona kuzynka ma dwadzieścia dwa lat",
    sentenceAfter: ".",
    gapWord: "rok",
    gapWordMeaning: "ans / années",
    targetType: "noun",
    isPlural: true,
    gender: "nom masculin inanimé pluriel",
    correctEnding: "-a",
    fullCorrectWord: "lata",
    fullSentence: "Moja ulubiona kuzynka ma dwadzieścia dwa lata.",
    translationFr: "Ma cousine préférée a vingt-deux ans.",
    ruleExplanation: "Les nombres composés se terminant par 2, 3 ou 4 (comme <em>22, 23, 24, 32</em>... sauf 12, 13, 14) régissent le <strong>Nominatif / Accusatif pluriel</strong>, donc <strong>lata</strong> : <em>dwadzieścia dwa lata</em>.",
    options: [
      {
        ending: "-a",
        word: "lata",
        isCorrect: true,
        note: "Accusatif/Nominatif pluriel après 2, 3, 4 et composés (lata)"
      },
      {
        ending: "-ø",
        word: "lat",
        isCorrect: false,
        note: "Génitif pluriel (après 5+)"
      },
      {
        ending: "-ok",
        word: "rok",
        isCorrect: false,
        note: "Singulier (1 rok)"
      },
      {
        ending: "-y",
        word: "roki",
        isCorrect: false,
        note: "Forme incorrecte"
      }
    ]
  },
  {
    id: "case-d-37",
    date: "2026-11-03",
    caseName: "Dopelniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "Dzień dobry, dzwonię w sprawie spotkani",
    sentenceAfter: " we wtorek.",
    gapWord: "spotkanie",
    gapWordMeaning: "réunion / rendez-vous",
    targetType: "noun",
    isPlural: false,
    gender: "nom neutre singulier",
    correctEnding: "-a",
    fullCorrectWord: "spotkania",
    fullSentence: "Dzień dobry, dzwonię w sprawie spotkania we wtorek.",
    translationFr: "Bonjour, j'appelle au sujet du rendez-vous de mardi.",
    ruleExplanation: "La locution prépositionnelle <strong>w sprawie</strong> (au sujet de, concernant) régit obligatoirement le <strong>Génitif</strong> (Dopełniacz). Les noms neutres en <em>-e</em> prennent la terminaison <strong>-a</strong> : <em>spotkanie</em> &rarr; <strong>spotkania</strong>.",
    options: [
      {
        ending: "-a",
        word: "spotkania",
        isCorrect: true,
        note: "Génitif singulier neutre après w sprawie (-a)"
      },
      {
        ending: "-u",
        word: "spotkaniu",
        isCorrect: false,
        note: "Locatif singulier (-u)"
      },
      {
        ending: "-em",
        word: "spotkaniem",
        isCorrect: false,
        note: "Instrumental singulier (-em)"
      },
      {
        ending: "-e",
        word: "spotkanie",
        isCorrect: false,
        note: "Nominatif singulier (-e)"
      }
    ]
  },
  {
    id: "case-m-34",
    date: "2026-11-03",
    caseName: "Miejscownik",
    caseLabelFr: "Locatif (Miejscownik)",
    caseBadgeClass: "case-miejscownik",
    sentenceBefore: "Niestety, nie mogę być na tym spotkani",
    sentenceAfter: ".",
    gapWord: "spotkanie",
    gapWordMeaning: "réunion / rendez-vous",
    targetType: "noun",
    isPlural: false,
    gender: "nom neutre singulier",
    correctEnding: "-u",
    fullCorrectWord: "spotkaniu",
    fullSentence: "Niestety, nie mogę być na tym spotkaniu.",
    translationFr: "Malheureusement, je ne peux pas être à ce rendez-vous.",
    ruleExplanation: "Pour exprimer la présence à un événement avec la préposition <strong>na</strong> (à / sur), on emploie le <strong>Locatif</strong> (Miejscownik). Les noms neutres terminés par <em>-e</em> précédé d'une consonne douce prennent la terminaison <strong>-u</strong> : <em>spotkanie</em> &rarr; <strong>na spotkaniu</strong>.",
    options: [
      {
        ending: "-u",
        word: "spotkaniu",
        isCorrect: true,
        note: "Locatif singulier neutre après na (-u)"
      },
      {
        ending: "-a",
        word: "spotkania",
        isCorrect: false,
        note: "Génitif singulier (-a)"
      },
      {
        ending: "-e",
        word: "spotkanie",
        isCorrect: false,
        note: "Nominatif / Accusatif (-e)"
      },
      {
        ending: "-em",
        word: "spotkaniem",
        isCorrect: false,
        note: "Instrumental singulier (-em)"
      }
    ]
  },
  {
    id: "case-b-40",
    date: "2026-11-03",
    caseName: "Biernik",
    caseLabelFr: "Accusatif (Biernik)",
    caseBadgeClass: "case-biernik",
    sentenceBefore: "Jeśli wtorek pani nie pasuje, proponuję środ",
    sentenceAfter: ".",
    gapWord: "środa",
    gapWordMeaning: "mercredi",
    targetType: "noun",
    isPlural: false,
    gender: "nom féminin singulier",
    correctEnding: "-ę",
    fullCorrectWord: "środę",
    fullSentence: "Jeśli wtorek pani nie pasuje, proponuję środę.",
    translationFr: "Si mardi ne vous convient pas, je propose mercredi.",
    ruleExplanation: "Le verbe <strong>proponować</strong> (proposer) exige un COD à l'<strong>Accusatif</strong> (Biernik). Les noms féminins singuliers en <em>-a</em> prennent la terminaison <strong>-ę</strong> : <em>środa</em> &rarr; <strong>środę</strong>.",
    options: [
      {
        ending: "-ę",
        word: "środę",
        isCorrect: true,
        note: "Accusatif singulier féminin après proponuję (-ę)"
      },
      {
        ending: "-y",
        word: "środy",
        isCorrect: false,
        note: "Génitif singulier (-y)"
      },
      {
        ending: "-ą",
        word: "środą",
        isCorrect: false,
        note: "Instrumental singulier (-ą)"
      },
      {
        ending: "-zie",
        word: "środzie",
        isCorrect: false,
        note: "Locatif singulier (-zie)"
      }
    ]
  },
  {
    id: "case-pl-d-24",
    date: "2026-11-03",
    caseName: "Dopelniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    caseBadgeClass: "case-dopelniacz",
    sentenceBefore: "Olej kosztuje pięć złot",
    sentenceAfter: " i osiemdziesiąt dziewięć groszy.",
    gapWord: "złoty",
    gapWordMeaning: "zloty (monnaie polonaise)",
    targetType: "noun",
    isPlural: true,
    gender: "nom masculin inanimé pluriel",
    correctEnding: "-ych",
    fullCorrectWord: "złotych",
    fullSentence: "Olej kosztuje pięć złotych i osiemdziesiąt dziewięć groszy.",
    translationFr: "L'huile coûte cinq zlotys et quatre-vingt-neuf groszy.",
    ruleExplanation: "Après les chiffres 5 et au-delà, les unités de monnaie prennent le <strong>Génitif pluriel</strong> : <em>złoty</em> (adjectif substantivé) devient <strong>złotych</strong> (-ych), et <em>grosz</em> devient <strong>groszy</strong> (-y). (1 złoty, 2-4 złote, 5+ złotych).",
    options: [
      {
        ending: "-ych",
        word: "złotych",
        isCorrect: true,
        note: "Génitif pluriel après 5+ (-ych)"
      },
      {
        ending: "-e",
        word: "złote",
        isCorrect: false,
        note: "Après 2, 3, 4 (2 złote)"
      },
      {
        ending: "-y",
        word: "złoty",
        isCorrect: false,
        note: "Singulier après 1 (1 złoty)"
      },
      {
        ending: "-om",
        word: "złotom",
        isCorrect: false,
        note: "Datif pluriel (-om)"
      }
    ]
  },
  {
    id: "case-b-41",
    date: "2026-11-03",
    caseName: "Biernik",
    caseLabelFr: "Accusatif (Biernik)",
    caseBadgeClass: "case-biernik",
    sentenceBefore: "Tak, w czwart",
    sentenceAfter: " mam czas o jedenastej.",
    gapWord: "czwartek",
    gapWordMeaning: "jeudi",
    targetType: "noun",
    isPlural: false,
    gender: "nom masculin inanimé singulier",
    correctEnding: "-ek",
    fullCorrectWord: "czwartek",
    fullSentence: "Tak, w czwartek mam czas o jedenastej.",
    translationFr: "Oui, le jeudi j'ai le temps à onze heures.",
    ruleExplanation: "Pour exprimer le jour précis où se tient un événement, on utilise la préposition <em>w / we</em> + <strong>Accusatif temporel</strong>. Pour les noms masculins inanimés, l'accusatif reste identique au nominatif : <em>czwartek</em> &rarr; <strong>w czwartek</strong> (alors que le féminin s'incline en <em>-ę</em> : <em>w środę</em>).",
    options: [
      {
        ending: "-ek",
        word: "czwartek",
        isCorrect: true,
        note: "Accusatif temporel masculin identique au nominatif (w czwartek)"
      },
      {
        ending: "-ku",
        word: "czwartku",
        isCorrect: false,
        note: "Génitif singulier (-u)"
      },
      {
        ending: "-kiem",
        word: "czwartkiem",
        isCorrect: false,
        note: "Instrumental singulier (-iem)"
      },
      {
        ending: "-ce",
        word: "czwartce",
        isCorrect: false,
        note: "Forme inexistante"
      }
    ]
  },
  {
    id: "case-adj-m-4",
    date: "2026-11-03",
    caseName: "Mianownik",
    caseLabelFr: "Nominatif (Mianownik)",
    caseBadgeClass: "case-mianownik",
    sentenceBefore: "Niestety w środę cały dzień jestem bardzo zajęt",
    sentenceAfter: ".",
    gapWord: "zajęty",
    gapWordMeaning: "occupé",
    targetType: "adj",
    isPlural: false,
    gender: "adjectif masculin singulier",
    correctEnding: "-y",
    fullCorrectWord: "zajęty",
    fullSentence: "Niestety w środę cały dzień jestem bardzo zajęty.",
    translationFr: "Malheureusement, mercredi toute la journée je suis très occupé.",
    ruleExplanation: "L'adjectif qualificatif décrivant un locuteur masculin singulier (Roman Styczeń) après le verbe d'état <em>być (jestem)</em> s'accorde au <strong>Nominatif singulier masculin</strong> avec la terminaison <strong>-y</strong> : <strong>zajęty</strong> (pour une femme : <em>zajęta</em>).",
    options: [
      {
        ending: "-y",
        word: "zajęty",
        isCorrect: true,
        note: "Nominatif singulier masculin (-y)"
      },
      {
        ending: "-a",
        word: "zajęta",
        isCorrect: false,
        note: "Nominatif singulier féminin (-a)"
      },
      {
        ending: "-ego",
        word: "zajętego",
        isCorrect: false,
        note: "Génitif / Accusatif masculin (-ego)"
      },
      {
        ending: "-e",
        word: "zajęte",
        isCorrect: false,
        note: "Neutre / Pluriel non-viril (-e)"
      }
    ]
  },
  // ------------------------------------------
  // NOUVEAUX DÉFIS DU 05/11/2026 (ACCUSATIF, LIEUX, TEMPS, NÉGATION)
  // ------------------------------------------
  {
    "id": "case-b-42",
    "date": "2026-11-05",
    "caseName": "Biernik",
    "caseLabelFr": "Accusatif (Biernik)",
    "caseBadgeClass": "case-biernik",
    "sentenceBefore": "We wtorek ona nosi niebiesk",
    "sentenceAfter": " sukienkę i białe buty.",
    "gapWord": "niebieska",
    "gapWordMeaning": "bleue",
    "targetType": "adjective",
    "isPlural": false,
    "gender": "adjectif féminin singulier",
    "correctEnding": "-ą",
    "fullCorrectWord": "niebieską",
    "fullSentence": "We wtorek ona nosi niebieską sukienkę i białe buty.",
    "translationFr": "Le mardi, elle porte une robe bleue et des chaussures blanches.",
    "ruleExplanation": "Le verbe <strong>nosić</strong> (porter un vêtement) régit l'<strong>Accusatif</strong> (Biernik). À l'accusatif féminin singulier, l'adjectif prend la terminaison <strong>-ą</strong> : <em>niebieska sukienka</em> &rarr; <strong>niebieską sukienkę</strong>.",
    "options": [
      {
        "ending": "-ą",
        "word": "niebieską",
        "isCorrect": true,
        "note": "Accusatif singulier féminin (-ą)"
      },
      {
        "ending": "-a",
        "word": "niebieska",
        "isCorrect": false,
        "note": "Nominatif singulier (-a)"
      },
      {
        "ending": "-ej",
        "word": "niebieskiej",
        "isCorrect": false,
        "note": "Génitif / Locatif singulier (-ej)"
      },
      {
        "ending": "-e",
        "word": "niebieskie",
        "isCorrect": false,
        "note": "Neutre / Pluriel non-viril (-e)"
      }
    ]
  },
  {
    "id": "case-b-43",
    "date": "2026-11-05",
    "caseName": "Biernik",
    "caseLabelFr": "Accusatif (Biernik)",
    "caseBadgeClass": "case-biernik",
    "sentenceBefore": "W poniedziałek noszę czarne spodnie i czerwony swet",
    "sentenceAfter": ".",
    "gapWord": "sweter",
    "gapWordMeaning": "pull / pull-over",
    "targetType": "noun",
    "isPlural": false,
    "gender": "nom masculin inanimé singulier",
    "correctEnding": "-er",
    "fullCorrectWord": "sweter",
    "fullSentence": "W poniedziałek noszę czarne spodnie i czerwony sweter.",
    "translationFr": "Le lundi, je porte un pantalon noir et un pull rouge.",
    "ruleExplanation": "Pour les noms masculins inanimés (objets, vêtements comme <em>sweter, płaszcz, szalik</em>), l'<strong>Accusatif singulier est identique au Nominatif</strong> : <em>sweter</em> &rarr; <strong>sweter</strong>.",
    "options": [
      {
        "ending": "-er",
        "word": "sweter",
        "isCorrect": true,
        "note": "Accusatif inanimé identique au nominatif"
      },
      {
        "ending": "-ra",
        "word": "swetra",
        "isCorrect": false,
        "note": "Génitif singulier (-a)"
      },
      {
        "ending": "-rem",
        "word": "swetrem",
        "isCorrect": false,
        "note": "Instrumental singulier (-em)"
      },
      {
        "ending": "-rze",
        "word": "swetrze",
        "isCorrect": false,
        "note": "Locatif singulier (-e)"
      }
    ]
  },
  {
    "id": "case-b-44",
    "date": "2026-11-05",
    "caseName": "Biernik",
    "caseLabelFr": "Accusatif (Biernik)",
    "caseBadgeClass": "case-biernik",
    "sentenceBefore": "Ona nosi czarne spodnie i biał",
    "sentenceAfter": " buty.",
    "gapWord": "białe",
    "gapWordMeaning": "blanches",
    "targetType": "adjective",
    "isPlural": true,
    "gender": "adjectif pluriel non-viril",
    "correctEnding": "-e",
    "fullCorrectWord": "białe",
    "fullSentence": "Ona nosi czarne spodnie i białe buty.",
    "translationFr": "Elle porte un pantalon noir et des chaussures blanches.",
    "ruleExplanation": "Pour les objets au pluriel non-viril (comme les chaussures <em>buty</em>), l'<strong>Accusatif pluriel est identique au Nominatif pluriel</strong> : terminaison en <strong>-e</strong> pour l'adjectif : <strong>białe buty</strong>.",
    "options": [
      {
        "ending": "-e",
        "word": "białe",
        "isCorrect": true,
        "note": "Accusatif pluriel non-viril (-e)"
      },
      {
        "ending": "-ych",
        "word": "białych",
        "isCorrect": false,
        "note": "Génitif / Locatif pluriel (-ych)"
      },
      {
        "ending": "-a",
        "word": "biała",
        "isCorrect": false,
        "note": "Féminin singulier (-a)"
      },
      {
        "ending": "-ymi",
        "word": "białymi",
        "isCorrect": false,
        "note": "Instrumental pluriel (-ymi)"
      }
    ]
  },
  {
    "id": "case-m-35",
    "date": "2026-11-05",
    "caseName": "Miejscownik",
    "caseLabelFr": "Locatif (Miejscownik)",
    "caseBadgeClass": "case-miejscownik",
    "sentenceBefore": "W środę mamy spotkanie o trzeci",
    "sentenceAfter": ".",
    "gapWord": "trzecia",
    "gapWordMeaning": "troisième (heure)",
    "targetType": "adjective",
    "isPlural": false,
    "gender": "ordinal féminin singulier",
    "correctEnding": "-ej",
    "fullCorrectWord": "trzeciej",
    "fullSentence": "W środę mamy spotkanie o trzeciej.",
    "translationFr": "Le mercredi, nous avons un rendez-vous à trois heures.",
    "ruleExplanation": "Pour exprimer l'heure à laquelle un événement a lieu, on emploie la préposition <strong>o</strong> + le <strong>Locatif de l'adjectif ordinal féminin</strong> (s'accordant avec le mot sous-entendu <em>godzina</em>) : terminaison <strong>-ej</strong> (<em>o pierwszej, o drugiej, o trzeciej</em>).",
    "options": [
      {
        "ending": "-ej",
        "word": "trzeciej",
        "isCorrect": true,
        "note": "Locatif temporel des heures après 'o' (-ej)"
      },
      {
        "ending": "-a",
        "word": "trzecia",
        "isCorrect": false,
        "note": "Nominatif singulier (-a)"
      },
      {
        "ending": "-ą",
        "word": "trzecią",
        "isCorrect": false,
        "note": "Accusatif / Instrumental (-ą)"
      },
      {
        "ending": "-e",
        "word": "trzecie",
        "isCorrect": false,
        "note": "Neutre singulier (-e)"
      }
    ]
  },
  {
    "id": "case-d-38",
    "date": "2026-11-05",
    "caseName": "Dopelniacz",
    "caseLabelFr": "Génitif (Dopełniacz)",
    "caseBadgeClass": "case-dopelniacz",
    "sentenceBefore": "Możesz dzwonić do Mari",
    "sentenceAfter": "? Chcę ją spotkać w piątek.",
    "gapWord": "Maria",
    "gapWordMeaning": "Marie (Maria)",
    "targetType": "noun",
    "isPlural": false,
    "gender": "nom propre féminin singulier",
    "correctEnding": "-i",
    "fullCorrectWord": "Marii",
    "fullSentence": "Możesz dzwonić do Marii? Chcę ją spotkać w piątek.",
    "translationFr": "Tu peux appeler Marie ? Je veux la rencontrer vendredi.",
    "ruleExplanation": "La préposition de direction <strong>do</strong> (vers / à) exige systématiquement le <strong>Génitif</strong>. Les prénoms féminins en <em>-ia</em> prennent la terminaison <strong>-ii</strong> : <em>Maria</em> &rarr; <strong>do Marii</strong>.",
    "options": [
      {
        "ending": "-i",
        "word": "Marii",
        "isCorrect": true,
        "note": "Génitif singulier féminin après 'do' (-ii)"
      },
      {
        "ending": "-ę",
        "word": "Marię",
        "isCorrect": false,
        "note": "Accusatif singulier (-ę)"
      },
      {
        "ending": "-ą",
        "word": "Marią",
        "isCorrect": false,
        "note": "Instrumental singulier (-ą)"
      },
      {
        "ending": "-a",
        "word": "Maria",
        "isCorrect": false,
        "note": "Nominatif de base (-a)"
      }
    ]
  },
  {
    "id": "case-b-45",
    "date": "2026-11-05",
    "caseName": "Biernik",
    "caseLabelFr": "Accusatif (Biernik)",
    "caseBadgeClass": "case-biernik",
    "sentenceBefore": "Bardzo lubię Annę i chcę ",
    "sentenceAfter": " spotkać w piątek.",
    "gapWord": "ją",
    "gapWordMeaning": "la (pronom personnel COD d'ona)",
    "targetType": "adjective",
    "isPlural": false,
    "gender": "pronom personnel féminin COD",
    "correctEnding": "-ą",
    "fullCorrectWord": "ją",
    "fullSentence": "Bardzo lubię Annę i chcę ją spotkać w piątek.",
    "translationFr": "J'aime beaucoup Anna et je veux la rencontrer vendredi.",
    "ruleExplanation": "Le verbe <em>spotkać</em> (rencontrer) demande un COD à l'<strong>Accusatif</strong> (Biernik). Le pronom personnel féminin <em>ona</em> (elle) devient <strong>ją</strong> à l'accusatif (forme courte non accentuée).",
    "options": [
      {
        "ending": "-ą",
        "word": "ją",
        "isCorrect": true,
        "note": "Pronom personnel féminin COD à l'accusatif (ją = la)"
      },
      {
        "ending": "-ej",
        "word": "jej",
        "isCorrect": false,
        "note": "Génitif / Datif (jej)"
      },
      {
        "ending": "-a",
        "word": "ona",
        "isCorrect": false,
        "note": "Pronom sujet nominatif"
      },
      {
        "ending": "-o",
        "word": "jego",
        "isCorrect": false,
        "note": "Masculin (le)"
      }
    ]
  },
  {
    "id": "case-m-36",
    "date": "2026-11-05",
    "caseName": "Miejscownik",
    "caseLabelFr": "Locatif (Miejscownik)",
    "caseBadgeClass": "case-miejscownik",
    "sentenceBefore": "W Dzień Wszystkich Świętych ludzie kładą kwiaty na grob",
    "sentenceAfter": " swoich bliskich.",
    "gapWord": "groby",
    "gapWordMeaning": "tombes",
    "targetType": "noun",
    "isPlural": true,
    "gender": "nom masculin inanimé pluriel",
    "correctEnding": "-ach",
    "fullCorrectWord": "grobach",
    "fullSentence": "W Dzień Wszystkich Świętych ludzie kładą kwiaty na grobach swoich bliskich.",
    "translationFr": "À la Toussaint, les gens posent des fleurs sur les tombes de leurs proches.",
    "ruleExplanation": "La préposition de localisation <strong>na</strong> (sur) régit le <strong>Locatif</strong> (Miejscownik). Au locatif pluriel, <strong>tous les genres</strong> prennent uniformément la terminaison <strong>-ach</strong> : <em>grób / groby</em> &rarr; <strong>na grobach</strong>.",
    "options": [
      {
        "ending": "-ach",
        "word": "grobach",
        "isCorrect": true,
        "note": "Locatif pluriel régulier universel (-ach)"
      },
      {
        "ending": "-ami",
        "word": "grobami",
        "isCorrect": false,
        "note": "Instrumental pluriel (-ami)"
      },
      {
        "ending": "-om",
        "word": "grobom",
        "isCorrect": false,
        "note": "Datif pluriel (-om)"
      },
      {
        "ending": "-ów",
        "word": "grobów",
        "isCorrect": false,
        "note": "Génitif pluriel (-ów)"
      }
    ]
  },
  {
    "id": "case-d-39",
    "date": "2026-11-05",
    "caseName": "Dopelniacz",
    "caseLabelFr": "Génitif (Dopełniacz)",
    "caseBadgeClass": "case-dopelniacz",
    "sentenceBefore": "Ludzie kładą kwiaty na grobach swo",
    "sentenceAfter": " bliskich.",
    "gapWord": "swoi",
    "gapWordMeaning": "leurs (propres)",
    "targetType": "adjective",
    "isPlural": true,
    "gender": "possessif réfléchi pluriel",
    "correctEnding": "-ich",
    "fullCorrectWord": "swoich",
    "fullSentence": "Ludzie kładą kwiaty na grobach swoich bliskich.",
    "translationFr": "Les gens posent des fleurs sur les tombes de leurs proches.",
    "ruleExplanation": "Le complément de possession 'de leurs proches' est au <strong>Génitif pluriel</strong>. L'adjectif possessif réfléchi prend la terminaison <strong>-ich</strong> : <em>swój</em> &rarr; <strong>swoich bliskich</strong>.",
    "options": [
      {
        "ending": "-ich",
        "word": "swoich",
        "isCorrect": true,
        "note": "Génitif pluriel réfléchi (-ich)"
      },
      {
        "ending": "-im",
        "word": "swoim",
        "isCorrect": false,
        "note": "Locatif masculin singulier"
      },
      {
        "ending": "-imi",
        "word": "swoimi",
        "isCorrect": false,
        "note": "Instrumental pluriel"
      },
      {
        "ending": "-e",
        "word": "swoje",
        "isCorrect": false,
        "note": "Accusatif non-viril"
      }
    ]
  },
  {
    "id": "case-d-40",
    "date": "2026-11-05",
    "caseName": "Dopelniacz",
    "caseLabelFr": "Génitif (Dopełniacz)",
    "caseBadgeClass": "case-dopelniacz",
    "sentenceBefore": "Dzień Wszystkich Świętych obchodzimy pierwsz",
    "sentenceAfter": " listopada.",
    "gapWord": "pierwszy",
    "gapWordMeaning": "premier (jour)",
    "targetType": "adjective",
    "isPlural": false,
    "gender": "ordinal masculin singulier",
    "correctEnding": "-ego",
    "fullCorrectWord": "pierwszego",
    "fullSentence": "Dzień Wszystkich Świętych obchodzimy pierwszego listopada.",
    "translationFr": "Nous célébrons la Toussaint le premier novembre.",
    "ruleExplanation": "Pour exprimer une date en polonais, le quantième et le mois se mettent systématiquement au <strong>Génitif temporel</strong> : l'adjectif ordinal masculin prend la terminaison <strong>-ego</strong> : <em>pierwszy</em> &rarr; <strong>pierwszego listopada</strong>.",
    "options": [
      {
        "ending": "-ego",
        "word": "pierwszego",
        "isCorrect": true,
        "note": "Génitif de date masculin (-ego)"
      },
      {
        "ending": "-y",
        "word": "pierwszy",
        "isCorrect": false,
        "note": "Nominatif de base (-y)"
      },
      {
        "ending": "-ym",
        "word": "pierwszym",
        "isCorrect": false,
        "note": "Locatif / Instrumental (-ym)"
      },
      {
        "ending": "-emu",
        "word": "pierwszemu",
        "isCorrect": false,
        "note": "Datif singulier (-emu)"
      }
    ]
  },
  {
    "id": "case-d-41",
    "date": "2026-11-05",
    "caseName": "Dopelniacz",
    "caseLabelFr": "Génitif (Dopełniacz)",
    "caseBadgeClass": "case-dopelniacz",
    "sentenceBefore": "Andrzejki obchodzimy trzydziest",
    "sentenceAfter": " listopada.",
    "gapWord": "trzydziesty",
    "gapWordMeaning": "trentième (jour)",
    "targetType": "adjective",
    "isPlural": false,
    "gender": "ordinal masculin singulier",
    "correctEnding": "-ego",
    "fullCorrectWord": "trzydziestego",
    "fullSentence": "Andrzejki obchodzimy trzydziestego listopada.",
    "translationFr": "Nous fêtons la Sainte-André le trente novembre.",
    "ruleExplanation": "Comme pour toutes les dates en polonais, on utilise le <strong>Génitif</strong> : <em>trzydziesty</em> (30e) prend la désinence <strong>-ego</strong> : <strong>trzydziestego listopada</strong>.",
    "options": [
      {
        "ending": "-ego",
        "word": "trzydziestego",
        "isCorrect": true,
        "note": "Génitif de date masculin (-ego)"
      },
      {
        "ending": "-y",
        "word": "trzydziesty",
        "isCorrect": false,
        "note": "Nominatif singulier (-y)"
      },
      {
        "ending": "-ym",
        "word": "trzydziestym",
        "isCorrect": false,
        "note": "Locatif / Instrumental (-ym)"
      },
      {
        "ending": "-a",
        "word": "trzydziesta",
        "isCorrect": false,
        "note": "Féminin singulier (-a)"
      }
    ]
  },
  {
    "id": "case-d-42",
    "date": "2026-11-05",
    "caseName": "Dopelniacz",
    "caseLabelFr": "Génitif (Dopełniacz)",
    "caseBadgeClass": "case-dopelniacz",
    "sentenceBefore": "Na cmentarzach jest dużo ludz",
    "sentenceAfter": " i pięknych świateł.",
    "gapWord": "ludzie",
    "gapWordMeaning": "gens / personnes",
    "targetType": "noun",
    "isPlural": true,
    "gender": "nom masculin personnel pluriel",
    "correctEnding": "-i",
    "fullCorrectWord": "ludzi",
    "fullSentence": "Na cmentarzach jest dużo ludzi i pięknych świateł.",
    "translationFr": "Dans les cimetières, il y a beaucoup de monde et de belles lumières.",
    "ruleExplanation": "L'adverbe de quantité <strong>dużo</strong> (beaucoup de) régit toujours le <strong>Génitif pluriel</strong>. Le nom irrégulier <em>ludzie</em> (les gens) prend la forme de génitif pluriel <strong>ludzi</strong>.",
    "options": [
      {
        "ending": "-i",
        "word": "ludzi",
        "isCorrect": true,
        "note": "Génitif pluriel irrégulier après dużo (ludzi)"
      },
      {
        "ending": "-ie",
        "word": "ludzie",
        "isCorrect": false,
        "note": "Nominatif pluriel (ludzie)"
      },
      {
        "ending": "-iom",
        "word": "ludziom",
        "isCorrect": false,
        "note": "Datif pluriel (-om)"
      },
      {
        "ending": "-iami",
        "word": "ludziami",
        "isCorrect": false,
        "note": "Forme incorrecte"
      }
    ]
  },
  {
    "id": "case-pl-d-25",
    "date": "2026-11-05",
    "caseName": "Dopelniacz",
    "caseLabelFr": "Génitif (Dopełniacz)",
    "caseBadgeClass": "case-dopelniacz",
    "sentenceBefore": "Na cmentarzu zapalono dużo piękn",
    "sentenceAfter": " świateł.",
    "gapWord": "piękne",
    "gapWordMeaning": "belles",
    "targetType": "adjective",
    "isPlural": true,
    "gender": "adjectif pluriel",
    "correctEnding": "-ych",
    "fullCorrectWord": "pięknych",
    "fullSentence": "Na cmentarzu zapalono dużo pięknych świateł.",
    "translationFr": "Au cimetière, on a allumé beaucoup de belles lumières.",
    "ruleExplanation": "Après <strong>dużo</strong>, l'adjectif qualificatif pluriel se décline au <strong>Génitif pluriel</strong> avec la désinence <strong>-ych</strong> : <em>piękne światła</em> &rarr; <strong>pięknych świateł</strong> (avec e mobile pour <em>światło</em> &rarr; <em>świateł</em>).",
    "options": [
      {
        "ending": "-ych",
        "word": "pięknych",
        "isCorrect": true,
        "note": "Génitif pluriel de l'adjectif après dużo (-ych)"
      },
      {
        "ending": "-e",
        "word": "piękne",
        "isCorrect": false,
        "note": "Nominatif pluriel (-e)"
      },
      {
        "ending": "-ymi",
        "word": "pięknymi",
        "isCorrect": false,
        "note": "Instrumental pluriel (-ymi)"
      },
      {
        "ending": "-ym",
        "word": "pięknym",
        "isCorrect": false,
        "note": "Datif pluriel (-ym)"
      }
    ]
  },
  // ------------------------------------------
  // NOUVEAUX DÉFIS DU 09/11/2026 (GÉNITIF, NÉGATION, VERBES & TEMPS)
  // ------------------------------------------
  {
    "id": "case-b-46",
    "date": "2026-11-09",
    "caseName": "Biernik",
    "caseLabelFr": "Accusatif (Biernik)",
    "caseBadgeClass": "case-biernik",
    "sentenceBefore": "Moja mama ma na sobie czarn",
    "sentenceAfter": " sukienkę, czerwone buty i białą torebkę.",
    "gapWord": "czarna",
    "gapWordMeaning": "noire (adj.)",
    "targetType": "adjectif",
    "isPlural": false,
    "gender": "féminin",
    "correctEnding": "-ą",
    "fullCorrectWord": "czarną",
    "fullSentence": "Moja mama ma na sobie czarną sukienkę, czerwone buty i białą torebkę.",
    "translationFr": "Ma mère porte une robe noire, des chaussures rouges et un sac blanc.",
    "ruleExplanation": "La locution <em>mieć na sobie</em> (porter sur soi) est suivie de l'<strong>Accusatif (Biernik)</strong> pour les vêtements portés. À l'accusatif singulier féminin, l'adjectif prend la terminaison nasale <strong>-ą</strong> (czarna &rarr; <strong>czarną</strong> sukienkę).",
    "options": [
      {
        "ending": "-ą",
        "word": "czarną",
        "isCorrect": true,
        "note": "Accusatif féminin régulier (-ą)"
      },
      {
        "ending": "-a",
        "word": "czarna",
        "isCorrect": false,
        "note": "Nominatif féminin (-a)"
      },
      {
        "ending": "-e",
        "word": "czarne",
        "isCorrect": false,
        "note": "Neutre / pluriel non-viril (-e)"
      },
      {
        "ending": "-ej",
        "word": "czarnej",
        "isCorrect": false,
        "note": "Génitif / Locatif féminin (-ej)"
      }
    ]
  },
  {
    "id": "case-b-47",
    "date": "2026-11-09",
    "caseName": "Biernik",
    "caseLabelFr": "Accusatif (Biernik)",
    "caseBadgeClass": "case-biernik",
    "sentenceBefore": "Ta kobieta ma na sobie niebiesk",
    "sentenceAfter": " spódnicę, biały sweter i czarne buty.",
    "gapWord": "niebieska",
    "gapWordMeaning": "bleue (adj.)",
    "targetType": "adjectif",
    "isPlural": false,
    "gender": "féminin",
    "correctEnding": "-ą",
    "fullCorrectWord": "niebieską",
    "fullSentence": "Ta kobieta ma na sobie niebieską spódnicę, biały sweter i czarne buty.",
    "translationFr": "Cette femme porte une jupe bleue, un pull blanc et des chaussures noires.",
    "ruleExplanation": "Pour un vêtement au féminin singulier après <em>mieć na sobie</em>, l'adjectif s'accorde au <strong>Biernik (Accusatif)</strong> avec la terminaison <strong>-ą</strong> (niebieska &rarr; <strong>niebieską</strong> spódnicę).",
    "options": [
      {
        "ending": "-ą",
        "word": "niebieską",
        "isCorrect": true,
        "note": "Accusatif féminin régulier (-ą)"
      },
      {
        "ending": "-a",
        "word": "niebieska",
        "isCorrect": false,
        "note": "Nominatif féminin (-a)"
      },
      {
        "ending": "-e",
        "word": "niebieskie",
        "isCorrect": false,
        "note": "Neutre / pluriel non-viril (-ie)"
      },
      {
        "ending": "-ej",
        "word": "niebieskiej",
        "isCorrect": false,
        "note": "Génitif / Locatif féminin (-ej)"
      }
    ]
  },
  {
    "id": "case-n-21",
    "date": "2026-11-09",
    "caseName": "Narzędnik",
    "caseLabelFr": "Instrumental (Narzędnik)",
    "caseBadgeClass": "case-narzednik",
    "sentenceBefore": "Młode dziewczyny chcą wiedzieć, kto będzie ich męż",
    "sentenceAfter": ".",
    "gapWord": "mąż",
    "gapWordMeaning": "mari (époux)",
    "targetType": "nom",
    "isPlural": false,
    "gender": "masculin",
    "correctEnding": "-em",
    "fullCorrectWord": "mężem",
    "fullSentence": "Młode dziewczyny chcą wiedzieć, kto będzie ich mężem.",
    "translationFr": "Les jeunes filles veulent savoir qui sera leur mari.",
    "ruleExplanation": "Après le verbe <em>być</em> (ici au futur : <em>będzie</em>), le nom indiquant un rôle, métier, état ou statut familial se décline obligatoirement au <strong>Narzędnik (Instrumental)</strong> : pour un masculin singulier régulier, la terminaison est <strong>-em</strong> (mąż &rarr; <strong>mężem</strong>).",
    "options": [
      {
        "ending": "-em",
        "word": "mężem",
        "isCorrect": true,
        "note": "Instrumental masculin régulier (-em)"
      },
      {
        "ending": "-a",
        "word": "męża",
        "isCorrect": false,
        "note": "Génitif / Accusatif masculin (-a)"
      },
      {
        "ending": "-owi",
        "word": "mężowi",
        "isCorrect": false,
        "note": "Datif masculin (-owi)"
      },
      {
        "ending": "-u",
        "word": "mężu",
        "isCorrect": false,
        "note": "Locatif masculin (-u)"
      }
    ]
  },
  {
    "id": "case-pl-n-11",
    "date": "2026-11-09",
    "caseName": "Narzędnik",
    "caseLabelFr": "Instrumental (Narzędnik Pluriel)",
    "caseBadgeClass": "case-narzednik",
    "sentenceBefore": "Trzydziestego listopada rodziny organizują imprezy z przyjaciół",
    "sentenceAfter": ".",
    "gapWord": "przyjaciele",
    "gapWordMeaning": "amis (pluriel)",
    "targetType": "nom",
    "isPlural": true,
    "gender": "masculin pluriel viril",
    "correctEnding": "-mi",
    "fullCorrectWord": "przyjaciółmi",
    "fullSentence": "Trzydziestego listopada rodziny organizują imprezy z przyjaciółmi.",
    "translationFr": "Le 30 novembre, les familles organisent des fêtes avec leurs amis.",
    "ruleExplanation": "La préposition <em>z / ze</em> (avec) exige l'<strong>Instrumental (Narzędnik)</strong>. Au pluriel, la terminaison universelle de l'instrumental est <strong>-ami</strong>, avec la forme douce irrégulière <strong>-mi</strong> pour <em>przyjaciele</em> &rarr; <strong>przyjaciółmi</strong>.",
    "options": [
      {
        "ending": "-mi",
        "word": "przyjaciółmi",
        "isCorrect": true,
        "note": "Instrumental pluriel doux irrégulier (-mi)"
      },
      {
        "ending": "-ów",
        "word": "przyjaciół",
        "isCorrect": false,
        "note": "Génitif pluriel (désinence zéro)"
      },
      {
        "ending": "-om",
        "word": "przyjaciołom",
        "isCorrect": false,
        "note": "Datif pluriel (-om)"
      },
      {
        "ending": "-ach",
        "word": "przyjaciołach",
        "isCorrect": false,
        "note": "Locatif pluriel (-ach)"
      }
    ]
  },
  {
    "id": "case-d-43",
    "date": "2026-11-09",
    "caseName": "Dopełniacz",
    "caseLabelFr": "Génitif (Dopełniacz)",
    "caseBadgeClass": "case-dopelniacz",
    "sentenceBefore": "Nie widzę kot",
    "sentenceAfter": " pod stołem.",
    "gapWord": "kot",
    "gapWordMeaning": "chat",
    "targetType": "nom",
    "isPlural": false,
    "gender": "masculin animé",
    "correctEnding": "-a",
    "fullCorrectWord": "kota",
    "fullSentence": "Nie widzę kota pod stołem.",
    "translationFr": "Je ne vois pas le chat sous la table.",
    "ruleExplanation": "<strong>Négation = Génitif obligatoire</strong> : Le verbe <em>widzieć</em> prend un COD à l'accusatif à la forme affirmative (<em>Widzę kota</em>), mais avec <em>nie</em>, le COD bascule impérativement au <strong>Génitif (Dopełniacz)</strong> : les masculins animés prennent <strong>-a</strong> (kot &rarr; <strong>kota</strong>).",
    "options": [
      {
        "ending": "-a",
        "word": "kota",
        "isCorrect": true,
        "note": "Génitif masculin animé (-a)"
      },
      {
        "ending": "-u",
        "word": "kotu",
        "isCorrect": false,
        "note": "Datif masculin (-u)"
      },
      {
        "ending": "-em",
        "word": "kotem",
        "isCorrect": false,
        "note": "Instrumental (-em)"
      },
      {
        "ending": "-e",
        "word": "kocie",
        "isCorrect": false,
        "note": "Locatif (-e)"
      }
    ]
  },
  {
    "id": "case-d-44",
    "date": "2026-11-09",
    "caseName": "Dopełniacz",
    "caseLabelFr": "Génitif (Dopełniacz)",
    "caseBadgeClass": "case-dopelniacz",
    "sentenceBefore": "Przepraszam, nie mam teraz czas",
    "sentenceAfter": ".",
    "gapWord": "czas",
    "gapWordMeaning": "temps (durée)",
    "targetType": "nom",
    "isPlural": false,
    "gender": "masculin inanimé / abstrait",
    "correctEnding": "-u",
    "fullCorrectWord": "czasu",
    "fullSentence": "Przepraszam, nie mam teraz czasu.",
    "translationFr": "Désolé, je n'ai pas le temps en ce moment.",
    "ruleExplanation": "L'absence et la négation avec <em>nie mam</em> entraînent le <strong>Génitif (Dopełniacz)</strong>. Pour les noms masculins inanimés abstraits (comme le temps, les sentiments), la terminaison du génitif est <strong>-u</strong> (czas &rarr; <strong>czasu</strong>).",
    "options": [
      {
        "ending": "-u",
        "word": "czasu",
        "isCorrect": true,
        "note": "Génitif masculin abstrait (-u)"
      },
      {
        "ending": "-a",
        "word": "czasa",
        "isCorrect": false,
        "note": "Forme inexistante (*czasa)"
      },
      {
        "ending": "-em",
        "word": "czasem",
        "isCorrect": false,
        "note": "Instrumental (parfois)"
      },
      {
        "ending": "-ie",
        "word": "czasie",
        "isCorrect": false,
        "note": "Locatif (-ie)"
      }
    ]
  },
  {
    "id": "case-d-45",
    "date": "2026-11-09",
    "caseName": "Dopełniacz",
    "caseLabelFr": "Génitif (Dopełniacz)",
    "caseBadgeClass": "case-dopelniacz",
    "sentenceBefore": "Nie mam jabłk",
    "sentenceAfter": " na drugie śniadanie.",
    "gapWord": "jabłko",
    "gapWordMeaning": "pomme (nom neutre)",
    "targetType": "nom",
    "isPlural": false,
    "gender": "neutre",
    "correctEnding": "-a",
    "fullCorrectWord": "jabłka",
    "fullSentence": "Nie mam jabłka na drugie śniadanie.",
    "translationFr": "Je n'ai pas de pomme pour le goûter / le second petit-déjeuner.",
    "ruleExplanation": "La négation <em>nie mam</em> exige le <strong>Génitif</strong>. Pour les noms neutres se terminant par <em>-o</em> ou <em>-e</em>, la terminaison au génitif singulier est <strong>-a</strong> (jabłko &rarr; <strong>jabłka</strong>, okno &rarr; <strong>okna</strong>).",
    "options": [
      {
        "ending": "-a",
        "word": "jabłka",
        "isCorrect": true,
        "note": "Génitif neutre régulier (-a)"
      },
      {
        "ending": "-o",
        "word": "jabłko",
        "isCorrect": false,
        "note": "Nominatif / Accusatif neutre (-o)"
      },
      {
        "ending": "-u",
        "word": "jabłku",
        "isCorrect": false,
        "note": "Datif / Locatif neutre (-u)"
      },
      {
        "ending": "-em",
        "word": "jabłkiem",
        "isCorrect": false,
        "note": "Instrumental neutre (-em)"
      }
    ]
  },
  {
    "id": "case-d-46",
    "date": "2026-11-09",
    "caseName": "Dopełniacz",
    "caseLabelFr": "Génitif (Dopełniacz)",
    "caseBadgeClass": "case-dopelniacz",
    "sentenceBefore": "Przepraszam, szukam kościoł",
    "sentenceAfter": " Mariackiego.",
    "gapWord": "kościół",
    "gapWordMeaning": "église",
    "targetType": "nom",
    "isPlural": false,
    "gender": "masculin inanimé",
    "correctEnding": "-a",
    "fullCorrectWord": "kościoła",
    "fullSentence": "Przepraszam, szukam kościoła Mariackiego.",
    "translationFr": "Pardonnez-moi, je cherche l'église Sainte-Marie.",
    "ruleExplanation": "Le verbe <strong>szukać</strong> (chercher) régit TOUJOURS le <strong>Génitif (Dopełniacz)</strong> en polonais. Le nom <em>kościół</em> prend exceptionnellement la terminaison <strong>-a</strong> avec alternance vocalique (kościół &rarr; <strong>kościoła</strong>).",
    "options": [
      {
        "ending": "-a",
        "word": "kościoła",
        "isCorrect": true,
        "note": "Génitif singulier (szukać + génitif)"
      },
      {
        "ending": "-u",
        "word": "kościołu",
        "isCorrect": false,
        "note": "Datif masculin (-u)"
      },
      {
        "ending": "-em",
        "word": "kościołem",
        "isCorrect": false,
        "note": "Instrumental masculin (-em)"
      },
      {
        "ending": "-e",
        "word": "kościele",
        "isCorrect": false,
        "note": "Locatif masculin (-e)"
      }
    ]
  },
  {
    "id": "case-d-47",
    "date": "2026-11-09",
    "caseName": "Dopełniacz",
    "caseLabelFr": "Génitif (Dopełniacz)",
    "caseBadgeClass": "case-dopelniacz",
    "sentenceBefore": "Pilnie potrzebuję bank",
    "sentenceAfter": " lub bankomatu.",
    "gapWord": "bank",
    "gapWordMeaning": "banque",
    "targetType": "nom",
    "isPlural": false,
    "gender": "masculin inanimé",
    "correctEnding": "-u",
    "fullCorrectWord": "banku",
    "fullSentence": "Pilnie potrzebuję banku lub bankomatu.",
    "translationFr": "J'ai un besoin urgent d'une banque ou d'un distributeur.",
    "ruleExplanation": "Le verbe <strong>potrzebować</strong> (avoir besoin de) exige impérativement le <strong>Génitif (Dopełniacz)</strong>. Pour <em>bank</em> (masculin inanimé d'emprunt), la désinence du génitif est <strong>-u</strong> (bank &rarr; <strong>banku</strong>).",
    "options": [
      {
        "ending": "-u",
        "word": "banku",
        "isCorrect": true,
        "note": "Génitif masculin inanimé (potrzebować + génitif)"
      },
      {
        "ending": "-a",
        "word": "banka",
        "isCorrect": false,
        "note": "Forme incorrecte (*banka)"
      },
      {
        "ending": "-em",
        "word": "bankiem",
        "isCorrect": false,
        "note": "Instrumental masculin (-em)"
      },
      {
        "ending": "-owi",
        "word": "bankowi",
        "isCorrect": false,
        "note": "Datif masculin (-owi)"
      }
    ]
  },
  {
    "id": "case-d-48",
    "date": "2026-11-09",
    "caseName": "Dopełniacz",
    "caseLabelFr": "Génitif (Dopełniacz)",
    "caseBadgeClass": "case-dopelniacz",
    "sentenceBefore": "Niestety w kuchni nie ma herbat",
    "sentenceAfter": ".",
    "gapWord": "herbata",
    "gapWordMeaning": "thé",
    "targetType": "nom",
    "isPlural": false,
    "gender": "féminin",
    "correctEnding": "-y",
    "fullCorrectWord": "herbaty",
    "fullSentence": "Niestety w kuchni nie ma herbaty.",
    "translationFr": "Malheureusement, dans la cuisine il n'y a pas de thé.",
    "ruleExplanation": "La formule d'absence <strong>nie ma</strong> (il n'y a pas) est systématiquement suivie du <strong>Génitif (Dopełniacz)</strong>. Pour les noms féminins singuliers terminés par une consonne dure + <em>-a</em>, la terminaison devient <strong>-y</strong> (herbata &rarr; <strong>herbaty</strong>).",
    "options": [
      {
        "ending": "-y",
        "word": "herbaty",
        "isCorrect": true,
        "note": "Génitif féminin dur (-y)"
      },
      {
        "ending": "-ę",
        "word": "herbatę",
        "isCorrect": false,
        "note": "Accusatif féminin (-ę, forme affirmative)"
      },
      {
        "ending": "-ie",
        "word": "herbacie",
        "isCorrect": false,
        "note": "Datif / Locatif féminin (-ie)"
      },
      {
        "ending": "-ą",
        "word": "herbatą",
        "isCorrect": false,
        "note": "Instrumental féminin (-ą)"
      }
    ]
  },
  {
    "id": "case-d-49",
    "date": "2026-11-09",
    "caseName": "Dopełniacz",
    "caseLabelFr": "Génitif (Dopełniacz)",
    "caseBadgeClass": "case-dopelniacz",
    "sentenceBefore": "Ona w ogóle nie pije kaw",
    "sentenceAfter": ".",
    "gapWord": "kawa",
    "gapWordMeaning": "café",
    "targetType": "nom",
    "isPlural": false,
    "gender": "féminin",
    "correctEnding": "-y",
    "fullCorrectWord": "kawy",
    "fullSentence": "Ona w ogóle nie pije kawy.",
    "translationFr": "Elle ne boit pas du tout de café.",
    "ruleExplanation": "À la forme affirmative : <em>Ona pije kawę</em> (Biernik en -ę). Mais avec la négation <em>nie pije</em>, le complément bascule obligatoirement au <strong>Génitif (Dopełniacz)</strong> en <strong>-y</strong> (kawa &rarr; <strong>kawy</strong>).",
    "options": [
      {
        "ending": "-y",
        "word": "kawy",
        "isCorrect": true,
        "note": "Génitif féminin de négation (-y)"
      },
      {
        "ending": "-ę",
        "word": "kawę",
        "isCorrect": false,
        "note": "Accusatif de l'affirmation (-ę)"
      },
      {
        "ending": "-ie",
        "word": "kawie",
        "isCorrect": false,
        "note": "Datif / Locatif féminin (-ie)"
      },
      {
        "ending": "-ą",
        "word": "kawą",
        "isCorrect": false,
        "note": "Instrumental féminin (-ą)"
      }
    ]
  },
  {
    "id": "case-d-50",
    "date": "2026-11-09",
    "caseName": "Dopełniacz",
    "caseLabelFr": "Génitif (Dopełniacz)",
    "caseBadgeClass": "case-dopelniacz",
    "sentenceBefore": "Jestem dziś zmęczony, nie mam energi",
    "sentenceAfter": ".",
    "gapWord": "energia",
    "gapWordMeaning": "énergie",
    "targetType": "nom",
    "isPlural": false,
    "gender": "féminin",
    "correctEnding": "-i",
    "fullCorrectWord": "energii",
    "fullSentence": "Jestem dziś zmęczony, nie mam energii.",
    "translationFr": "Je suis fatigué aujourd'hui, je n'ai pas d'énergie.",
    "ruleExplanation": "Après la négation <em>nie mam</em>, le nom féminin se met au Génitif. Pour les noms féminins en <em>-ia</em>, la terminaison est double <strong>-ii</strong> (energia &rarr; <strong>energii</strong>).",
    "options": [
      {
        "ending": "-i",
        "word": "energii",
        "isCorrect": true,
        "note": "Génitif féminin doux (-ii)"
      },
      {
        "ending": "-y",
        "word": "energy",
        "isCorrect": false,
        "note": "Orthographe impossible en polonais"
      },
      {
        "ending": "-ę",
        "word": "energię",
        "isCorrect": false,
        "note": "Accusatif féminin (-ę)"
      },
      {
        "ending": "-ą",
        "word": "energią",
        "isCorrect": false,
        "note": "Instrumental féminin (-ą)"
      }
    ]
  },
  {
    "id": "case-d-51",
    "date": "2026-11-09",
    "caseName": "Dopełniacz",
    "caseLabelFr": "Génitif (Dopełniacz)",
    "caseBadgeClass": "case-dopelniacz",
    "sentenceBefore": "Dziś jest sobota, więc mamy dużo czas",
    "sentenceAfter": ".",
    "gapWord": "czas",
    "gapWordMeaning": "temps (durée)",
    "targetType": "nom",
    "isPlural": false,
    "gender": "masculin inanimé",
    "correctEnding": "-u",
    "fullCorrectWord": "czasu",
    "fullSentence": "Dziś jest sobota, więc mamy dużo czasu.",
    "translationFr": "Aujourd'hui c'est samedi, donc nous avons beaucoup de temps.",
    "ruleExplanation": "Les adverbes de quantité comme <strong>dużo</strong> (beaucoup), <strong>mało</strong> (peu), <strong>trochę</strong> (un peu) sont obligatoirement complétés par le <strong>Génitif (Dopełniacz)</strong> : <em>dużo czasu</em>.",
    "options": [
      {
        "ending": "-u",
        "word": "czasu",
        "isCorrect": true,
        "note": "Génitif de quantité (-u)"
      },
      {
        "ending": "-a",
        "word": "czasa",
        "isCorrect": false,
        "note": "Terminaison inexistante"
      },
      {
        "ending": "-em",
        "word": "czasem",
        "isCorrect": false,
        "note": "Instrumental (parfois)"
      },
      {
        "ending": "-ie",
        "word": "czasie",
        "isCorrect": false,
        "note": "Locatif (-ie)"
      }
    ]
  },
  {
    "id": "case-d-52",
    "date": "2026-11-09",
    "caseName": "Dopełniacz",
    "caseLabelFr": "Génitif (Dopełniacz)",
    "caseBadgeClass": "case-dopelniacz",
    "sentenceBefore": "Poproszę trochę wod",
    "sentenceAfter": ", proszę.",
    "gapWord": "woda",
    "gapWordMeaning": "eau",
    "targetType": "nom",
    "isPlural": false,
    "gender": "féminin",
    "correctEnding": "-y",
    "fullCorrectWord": "wody",
    "fullSentence": "Poproszę trochę wody, proszę.",
    "translationFr": "Un peu d'eau, s'il vous plaît.",
    "ruleExplanation": "Après l'adverbe de quantité <strong>trochę</strong> (un peu de), le nom se met au <strong>Génitif</strong> : pour le nom féminin <em>woda</em>, la forme est <strong>wody</strong>.",
    "options": [
      {
        "ending": "-y",
        "word": "wody",
        "isCorrect": true,
        "note": "Génitif féminin de quantité (-y)"
      },
      {
        "ending": "-ę",
        "word": "wodę",
        "isCorrect": false,
        "note": "Accusatif COD sans quantité (wodę)"
      },
      {
        "ending": "-zie",
        "word": "wodzie",
        "isCorrect": false,
        "note": "Locatif féminin (-zie)"
      },
      {
        "ending": "-ą",
        "word": "wodą",
        "isCorrect": false,
        "note": "Instrumental féminin (-ą)"
      }
    ]
  },
  {
    "id": "case-d-53",
    "date": "2026-11-09",
    "caseName": "Dopełniacz",
    "caseLabelFr": "Génitif (Dopełniacz Pluriel)",
    "caseBadgeClass": "case-dopelniacz",
    "sentenceBefore": "Niestety nie mam pieniędz",
    "sentenceAfter": " na drogie wakacje.",
    "gapWord": "pieniądze",
    "gapWordMeaning": "argent (nom pluriel)",
    "targetType": "nom",
    "isPlural": true,
    "gender": "masculin pluriel non-viril",
    "correctEnding": "-y",
    "fullCorrectWord": "pieniędzy",
    "fullSentence": "Niestety nie mam pieniędzy na drogie wakacje.",
    "translationFr": "Malheureusement je n'ai pas d'argent pour des vacances coûteuses.",
    "ruleExplanation": "Le mot <em>pieniądze</em> (l'argent) est un pluriel tantum. À la négation <em>nie mam</em>, il se met au Génitif pluriel irrégulier très fréquent avec terminaison <strong>-y</strong> : <strong>pieniędzy</strong>.",
    "options": [
      {
        "ending": "-y",
        "word": "pieniędzy",
        "isCorrect": true,
        "note": "Génitif pluriel irrégulier (-y)"
      },
      {
        "ending": "-e",
        "word": "pieniądze",
        "isCorrect": false,
        "note": "Nominatif / Accusatif pluriel (-e)"
      },
      {
        "ending": "-ach",
        "word": "pieniądzach",
        "isCorrect": false,
        "note": "Locatif pluriel (-ach)"
      },
      {
        "ending": "-om",
        "word": "pieniądzom",
        "isCorrect": false,
        "note": "Datif pluriel (-om)"
      }
    ]
  },
  {
    "id": "case-d-54",
    "date": "2026-11-09",
    "caseName": "Dopełniacz",
    "caseLabelFr": "Génitif (Dopełniacz)",
    "caseBadgeClass": "case-dopelniacz",
    "sentenceBefore": "Jedenast",
    "sentenceAfter": " listopada obchodzimy Dzień Niepodległości.",
    "gapWord": "jedenasty",
    "gapWordMeaning": "onzième (date)",
    "targetType": "adjectif",
    "isPlural": false,
    "gender": "masculin",
    "correctEnding": "-ego",
    "fullCorrectWord": "Jedenastego",
    "fullSentence": "Jedenastego listopada obchodzimy Dzień Niepodległości.",
    "translationFr": "Le 11 novembre, nous célébrons la Fête de l'Indépendance.",
    "ruleExplanation": "En polonais, pour exprimer le jour du mois (« le 11 novembre »), l'adjectif ordinal du quantième se met TOUJOURS au <strong>Génitif singulier masculin (-ego)</strong> : <em>jedenasty</em> &rarr; <strong>jedenastego</strong> listopada.",
    "options": [
      {
        "ending": "-ego",
        "word": "Jedenastego",
        "isCorrect": true,
        "note": "Génitif de date temporel (-ego)"
      },
      {
        "ending": "-y",
        "word": "Jedenasty",
        "isCorrect": false,
        "note": "Nominatif singulier (-y)"
      },
      {
        "ending": "-ym",
        "word": "Jedenastym",
        "isCorrect": false,
        "note": "Locatif / Instrumental (-ym)"
      },
      {
        "ending": "-emu",
        "word": "Jedenastemu",
        "isCorrect": false,
        "note": "Datif masculin (-emu)"
      }
    ]
  },
  // ------------------------------------------
  // NOUVEAUX DÉFIS DU 12/11/2026 (TRANSPORTS INSTRUMENTAL, LIEUX LOCATIF & GÉNITIF)
  // ------------------------------------------
  {
    "id": "case-n-22",
    "date": "2026-11-12",
    "caseName": "Narzędnik",
    "caseLabelFr": "Instrumental (Narzędnik)",
    "caseBadgeClass": "case-narzednik",
    "sentenceBefore": "Jak jedziesz do biura? Zwykle jadę samochod",
    "sentenceAfter": ".",
    "gapWord": "samochód",
    "gapWordMeaning": "voiture",
    "targetType": "nom",
    "isPlural": false,
    "gender": "masculin inanimé",
    "correctEnding": "-em",
    "fullCorrectWord": "samochodem",
    "fullSentence": "Jak jedziesz do biura? Zwykle jadę samochodem.",
    "translationFr": "Comment vas-tu au bureau ? D'habitude j'y vais en voiture.",
    "ruleExplanation": "Pour exprimer le <strong>moyen de transport</strong> en polonais (en voiture, en bus, en train), on emploie obligatoirement le <strong>Narzędnik (Instrumental)</strong> sans préposition. Pour les noms masculins, la terminaison est <strong>-em</strong> (samochód &rarr; <strong>samochodem</strong>).",
    "options": [
      {
        "ending": "-em",
        "word": "samochodem",
        "isCorrect": true,
        "note": "Instrumental régulier du transport (-em)"
      },
      {
        "ending": "-u",
        "word": "samochodu",
        "isCorrect": false,
        "note": "Génitif masculin (-u)"
      },
      {
        "ending": "-zie",
        "word": "samochodzie",
        "isCorrect": false,
        "note": "Locatif masculin (-zie)"
      },
      {
        "ending": "-a",
        "word": "samochoda",
        "isCorrect": false,
        "note": "Forme inexistante"
      }
    ]
  },
  {
    "id": "case-n-23",
    "date": "2026-11-12",
    "caseName": "Narzędnik",
    "caseLabelFr": "Instrumental (Narzędnik)",
    "caseBadgeClass": "case-narzednik",
    "sentenceBefore": "Do centrum najszybciej dojedziesz metr",
    "sentenceAfter": ".",
    "gapWord": "metro",
    "gapWordMeaning": "métro",
    "targetType": "nom",
    "isPlural": false,
    "gender": "neutre",
    "correctEnding": "-em",
    "fullCorrectWord": "metrem",
    "fullSentence": "Do centrum najszybciej dojedziesz metrem.",
    "translationFr": "Pour aller au centre, tu arriveras le plus vite en métro.",
    "ruleExplanation": "Le moyen de transport se décline à l'<strong>Instrumental (Narzędnik)</strong>. Pour le mot neutre <em>metro</em>, la déclinaison donne la terminaison régulière <strong>-em</strong> (metro &rarr; <strong>metrem</strong>).",
    "options": [
      {
        "ending": "-em",
        "word": "metrem",
        "isCorrect": true,
        "note": "Instrumental régulier du moyen de transport (-em)"
      },
      {
        "ending": "-a",
        "word": "metra",
        "isCorrect": false,
        "note": "Génitif neutre de négation / absence (-a)"
      },
      {
        "ending": "-o",
        "word": "metro",
        "isCorrect": false,
        "note": "Nominatif / Accusatif (-o)"
      },
      {
        "ending": "-ze",
        "word": "metrze",
        "isCorrect": false,
        "note": "Locatif (-ze)"
      }
    ]
  },
  {
    "id": "case-n-24",
    "date": "2026-11-12",
    "caseName": "Narzędnik",
    "caseLabelFr": "Instrumental (Narzędnik)",
    "caseBadgeClass": "case-narzednik",
    "sentenceBefore": "Mój kolega codziennie jeździ do pracy rower",
    "sentenceAfter": ".",
    "gapWord": "rower",
    "gapWordMeaning": "vélo",
    "targetType": "nom",
    "isPlural": false,
    "gender": "masculin inanimé",
    "correctEnding": "-em",
    "fullCorrectWord": "rowerem",
    "fullSentence": "Mój kolega codziennie jeździ do pracy rowerem.",
    "translationFr": "Mon collègue va tous les jours au travail à vélo.",
    "ruleExplanation": "Le verbe <em>jeździć</em> (circuler / aller en moyen de transport) se combine avec l'<strong>Instrumental (Narzędnik)</strong> pour indiquer l'engin utilisé : <em>rower</em> &rarr; <strong>rowerem</strong>.",
    "options": [
      {
        "ending": "-em",
        "word": "rowerem",
        "isCorrect": true,
        "note": "Instrumental masculin régulier (-em)"
      },
      {
        "ending": "-u",
        "word": "roweru",
        "isCorrect": false,
        "note": "Génitif masculin (-u)"
      },
      {
        "ending": "-ze",
        "word": "rowerze",
        "isCorrect": false,
        "note": "Locatif masculin (-ze)"
      },
      {
        "ending": "-a",
        "word": "rowera",
        "isCorrect": false,
        "note": "Forme incorrecte"
      }
    ]
  },
  {
    "id": "case-n-25",
    "date": "2026-11-12",
    "caseName": "Narzędnik",
    "caseLabelFr": "Instrumental (Narzędnik)",
    "caseBadgeClass": "case-narzednik",
    "sentenceBefore": "Gdy pada deszcz, chętnie wracam taksówk",
    "sentenceAfter": ".",
    "gapWord": "taksówka",
    "gapWordMeaning": "taxi",
    "targetType": "nom",
    "isPlural": false,
    "gender": "féminin",
    "correctEnding": "-ą",
    "fullCorrectWord": "taksówką",
    "fullSentence": "Gdy pada deszcz, chętnie wracam taksówką.",
    "translationFr": "Quand il pleut, je rentre volontiers en taxi.",
    "ruleExplanation": "Pour un moyen de transport féminin en <em>-a</em>, la terminaison de l'<strong>Instrumental (Narzędnik)</strong> est la nasale <strong>-ą</strong> (taksówka &rarr; <strong>taksówką</strong>).",
    "options": [
      {
        "ending": "-ą",
        "word": "taksówką",
        "isCorrect": true,
        "note": "Instrumental féminin régulier (-ą)"
      },
      {
        "ending": "-ę",
        "word": "taksówkę",
        "isCorrect": false,
        "note": "Accusatif COD (-ę)"
      },
      {
        "ending": "-i",
        "word": "taksówki",
        "isCorrect": false,
        "note": "Génitif féminin (-i)"
      },
      {
        "ending": "-ce",
        "word": "taksówce",
        "isCorrect": false,
        "note": "Locatif / Datif féminin (-ce)"
      }
    ]
  },
  {
    "id": "case-n-26",
    "date": "2026-11-12",
    "caseName": "Narzędnik",
    "caseLabelFr": "Instrumental (Narzędnik)",
    "caseBadgeClass": "case-narzednik",
    "sentenceBefore": "W weekend oni odpoczywają nad jezior",
    "sentenceAfter": ".",
    "gapWord": "jezioro",
    "gapWordMeaning": "lac",
    "targetType": "nom",
    "isPlural": false,
    "gender": "neutre",
    "correctEnding": "-em",
    "fullCorrectWord": "jeziorem",
    "fullSentence": "W weekend oni odpoczywają nad jeziorem.",
    "translationFr": "Pendant le week-end, ils se reposent au bord du lac.",
    "ruleExplanation": "La préposition spatiale <strong>nad</strong> (au bord de, au-dessus de) régit l'<strong>Instrumental (Narzędnik)</strong> lorsqu'elle indique une situation sans déplacement. Pour le nom neutre <em>jezioro</em> : <strong>nad jeziorem</strong>.",
    "options": [
      {
        "ending": "-em",
        "word": "jeziorem",
        "isCorrect": true,
        "note": "Instrumental neutre régulier après nad (-em)"
      },
      {
        "ending": "-ze",
        "word": "jeziorze",
        "isCorrect": false,
        "note": "Locatif après w/na (-ze)"
      },
      {
        "ending": "-a",
        "word": "jeziora",
        "isCorrect": false,
        "note": "Génitif neutre (-a)"
      },
      {
        "ending": "-o",
        "word": "jezioro",
        "isCorrect": false,
        "note": "Nominatif / Accusatif (-o)"
      }
    ]
  },
  {
    "id": "case-n-27",
    "date": "2026-11-12",
    "caseName": "Narzędnik",
    "caseLabelFr": "Instrumental (Narzędnik)",
    "caseBadgeClass": "case-narzednik",
    "sentenceBefore": "Mężczyzna odpoczywa przed kawiarni",
    "sentenceAfter": ".",
    "gapWord": "kawiarnia",
    "gapWordMeaning": "café (établissement)",
    "targetType": "nom",
    "isPlural": false,
    "gender": "féminin",
    "correctEnding": "-ą",
    "fullCorrectWord": "kawiarnią",
    "fullSentence": "Mężczyzna odpoczywa przed kawiarnią.",
    "translationFr": "L'homme se repose devant le café.",
    "ruleExplanation": "La préposition <strong>przed</strong> (devant) régit l'<strong>Instrumental (Narzędnik)</strong> pour localiser une position statique. Pour un nom féminin singulier, la terminaison est <strong>-ą</strong> (kawiarnia &rarr; <strong>przed kawiarnią</strong>).",
    "options": [
      {
        "ending": "-ą",
        "word": "kawiarnią",
        "isCorrect": true,
        "note": "Instrumental féminin régulier après przed (-ą)"
      },
      {
        "ending": "-i",
        "word": "kawiarni",
        "isCorrect": false,
        "note": "Génitif / Locatif féminin (-i)"
      },
      {
        "ending": "-ę",
        "word": "kawiarnię",
        "isCorrect": false,
        "note": "Accusatif féminin (-ę)"
      },
      {
        "ending": "-e",
        "word": "kawiarnie",
        "isCorrect": false,
        "note": "Nominatif pluriel (-e)"
      }
    ]
  },
  {
    "id": "case-m-37",
    "date": "2026-11-12",
    "caseName": "Miejscownik",
    "caseLabelFr": "Locatif (Miejscownik)",
    "caseBadgeClass": "case-miejscownik",
    "sentenceBefore": "Podczas wyjazdu oni śpią w namioc",
    "sentenceAfter": ".",
    "gapWord": "namiot",
    "gapWordMeaning": "tente",
    "targetType": "nom",
    "isPlural": false,
    "gender": "masculin inanimé",
    "correctEnding": "-ie",
    "fullCorrectWord": "namiocie",
    "fullSentence": "Podczas wyjazdu oni śpią w namiocie.",
    "translationFr": "Pendant le voyage, ils dorment dans la tente / sous la tente.",
    "ruleExplanation": "La préposition <strong>w</strong> (dans) indiquant un lieu statique demande le <strong>Miejscownik (Locatif)</strong>. Le <em>t</em> final s'adoucit en <em>ci</em> avec la terminaison <strong>-e</strong> : namiot &rarr; <strong>w namiocie</strong>.",
    "options": [
      {
        "ending": "-ie",
        "word": "namiocie",
        "isCorrect": true,
        "note": "Locatif masculin avec alternance t -> ci (-ie)"
      },
      {
        "ending": "-u",
        "word": "namiotu",
        "isCorrect": false,
        "note": "Génitif masculin (-u)"
      },
      {
        "ending": "-em",
        "word": "namiotem",
        "isCorrect": false,
        "note": "Instrumental masculin (-em)"
      },
      {
        "ending": "-a",
        "word": "namiota",
        "isCorrect": false,
        "note": "Forme incorrecte"
      }
    ]
  },
  {
    "id": "case-m-38",
    "date": "2026-11-12",
    "caseName": "Miejscownik",
    "caseLabelFr": "Locatif (Miejscownik)",
    "caseBadgeClass": "case-miejscownik",
    "sentenceBefore": "Nie wiem, co jest w tej torb",
    "sentenceAfter": ".",
    "gapWord": "torba",
    "gapWordMeaning": "sac / sacoche",
    "targetType": "nom",
    "isPlural": false,
    "gender": "féminin",
    "correctEnding": "-ie",
    "fullCorrectWord": "torbie",
    "fullSentence": "Nie wiem, co jest w tej torbie.",
    "translationFr": "Je ne sais pas ce qu'il y a dans ce sac.",
    "ruleExplanation": "Pour exprimer le contenant statique après <em>w</em> (dans), on emploie le <strong>Locatif (Miejscownik)</strong>. Pour un nom féminin en consonne dure + <em>-a</em>, la terminaison est <strong>-ie</strong> avec adoucissement du <em>b</em> : torba &rarr; <strong>w torbie</strong>.",
    "options": [
      {
        "ending": "-ie",
        "word": "torbie",
        "isCorrect": true,
        "note": "Locatif féminin avec alternance b -> bi (-ie)"
      },
      {
        "ending": "-y",
        "word": "torby",
        "isCorrect": false,
        "note": "Génitif féminin (-y)"
      },
      {
        "ending": "-ę",
        "word": "torbę",
        "isCorrect": false,
        "note": "Accusatif féminin (-ę)"
      },
      {
        "ending": "-ą",
        "word": "torbą",
        "isCorrect": false,
        "note": "Instrumental féminin (-ą)"
      }
    ]
  },
  {
    "id": "case-m-39",
    "date": "2026-11-12",
    "caseName": "Miejscownik",
    "caseLabelFr": "Locatif (Miejscownik)",
    "caseBadgeClass": "case-miejscownik",
    "sentenceBefore": "Bezdomny mężczyzna siedzi na ulic",
    "sentenceAfter": ".",
    "gapWord": "ulica",
    "gapWordMeaning": "rue",
    "targetType": "nom",
    "isPlural": false,
    "gender": "féminin",
    "correctEnding": "-y",
    "fullCorrectWord": "ulicy",
    "fullSentence": "Bezdomny mężczyzna siedzi na ulicy.",
    "translationFr": "L'homme sans-abri est assis dans la rue.",
    "ruleExplanation": "La localisation sur une rue utilise <em>na</em> + <strong>Miejscownik (Locatif)</strong>. Après une consonne chuintante ou molle comme <em>c</em>, la terminaison du locatif féminin singulier est <strong>-y</strong> (ulica &rarr; <strong>na ulicy</strong>).",
    "options": [
      {
        "ending": "-y",
        "word": "ulicy",
        "isCorrect": true,
        "note": "Locatif féminin régulier après c (-y)"
      },
      {
        "ending": "-ę",
        "word": "ulicę",
        "isCorrect": false,
        "note": "Accusatif de direction (-ę)"
      },
      {
        "ending": "-ą",
        "word": "ulicą",
        "isCorrect": false,
        "note": "Instrumental de passage (-ą)"
      },
      {
        "ending": "-e",
        "word": "ulice",
        "isCorrect": false,
        "note": "Nominatif / Accusatif pluriel (-e)"
      }
    ]
  },
  {
    "id": "case-pl-m-11",
    "date": "2026-11-12",
    "caseName": "Miejscownik",
    "caseLabelFr": "Locatif (Miejscownik Pluriel)",
    "caseBadgeClass": "case-miejscownik",
    "sentenceBefore": "Latem bardzo chętnie chodzimy po gór",
    "sentenceAfter": ".",
    "gapWord": "góry",
    "gapWordMeaning": "montagnes (pluriel)",
    "targetType": "nom",
    "isPlural": true,
    "gender": "féminin pluriel non-viril",
    "correctEnding": "-ach",
    "fullCorrectWord": "górach",
    "fullSentence": "Latem bardzo chętnie chodzimy po górach.",
    "translationFr": "En été, nous aimons beaucoup marcher en montagne / faire de la randonnée en montagne.",
    "ruleExplanation": "La préposition <strong>po</strong> (à travers / dans) régissant le lieu d'activité s'emploie avec le <strong>Miejscownik (Locatif)</strong>. Au pluriel, la désinence universelle du locatif est <strong>-ach</strong> pour tous les genres : góry &rarr; <strong>po górach</strong> (ou <em>w górach</em>).",
    "options": [
      {
        "ending": "-ach",
        "word": "górach",
        "isCorrect": true,
        "note": "Locatif pluriel universel (-ach)"
      },
      {
        "ending": "-ami",
        "word": "górami",
        "isCorrect": false,
        "note": "Instrumental pluriel (-ami)"
      },
      {
        "ending": "-om",
        "word": "górom",
        "isCorrect": false,
        "note": "Datif pluriel (-om)"
      },
      {
        "ending": "-ów",
        "word": "górów",
        "isCorrect": false,
        "note": "Forme incorrecte (*górów)"
      }
    ]
  },
  {
    "id": "case-d-55",
    "date": "2026-11-12",
    "caseName": "Dopełniacz",
    "caseLabelFr": "Génitif (Dopełniacz)",
    "caseBadgeClass": "case-dopelniacz",
    "sentenceBefore": "Przepraszam, szukam piekarn",
    "sentenceAfter": " niedaleko domu.",
    "gapWord": "piekarnia",
    "gapWordMeaning": "boulangerie",
    "targetType": "nom",
    "isPlural": false,
    "gender": "féminin",
    "correctEnding": "-i",
    "fullCorrectWord": "piekarni",
    "fullSentence": "Przepraszam, szukam piekarni niedaleko domu.",
    "translationFr": "Excusez-moi, je cherche une boulangerie près de chez moi.",
    "ruleExplanation": "Le verbe <strong>szukać</strong> (chercher) est TOUJOURS suivi du <strong>Génitif (Dopełniacz)</strong>. Pour les noms féminins en <em>-ia</em>, la terminaison du génitif singulier est <strong>-i</strong> (piekarnia &rarr; <strong>piekarni</strong>).",
    "options": [
      {
        "ending": "-i",
        "word": "piekarni",
        "isCorrect": true,
        "note": "Génitif féminin doux (szukać + génitif)"
      },
      {
        "ending": "-ę",
        "word": "piekarnię",
        "isCorrect": false,
        "note": "Accusatif (-ę, incorrect après szukać)"
      },
      {
        "ending": "-ą",
        "word": "piekarnią",
        "isCorrect": false,
        "note": "Instrumental féminin (-ą)"
      },
      {
        "ending": "-a",
        "word": "piekarnia",
        "isCorrect": false,
        "note": "Nominatif singulier (-a)"
      }
    ]
  },
  {
    "id": "case-d-56",
    "date": "2026-11-12",
    "caseName": "Dopełniacz",
    "caseLabelFr": "Génitif (Dopełniacz)",
    "caseBadgeClass": "case-dopelniacz",
    "sentenceBefore": "Czy przed wyjściem potrzebujesz gorącej kaw",
    "sentenceAfter": "?",
    "gapWord": "kawa",
    "gapWordMeaning": "café",
    "targetType": "nom",
    "isPlural": false,
    "gender": "féminin",
    "correctEnding": "-y",
    "fullCorrectWord": "kawy",
    "fullSentence": "Czy przed wyjściem potrzebujesz gorącej kawy?",
    "translationFr": "As-tu besoin d'un café chaud avant de sortir ?",
    "ruleExplanation": "Le verbe <strong>potrzebować</strong> (avoir besoin de) régit systématiquement le <strong>Génitif (Dopełniacz)</strong>. Pour un féminin dur se terminant en <em>-a</em>, la terminaison est <strong>-y</strong> : <strong>potrzebujesz kawy</strong>.",
    "options": [
      {
        "ending": "-y",
        "word": "kawy",
        "isCorrect": true,
        "note": "Génitif féminin dur (potrzebować + génitif)"
      },
      {
        "ending": "-ę",
        "word": "kawę",
        "isCorrect": false,
        "note": "Accusatif (-ę, faux après potrzebować)"
      },
      {
        "ending": "-ie",
        "word": "kawie",
        "isCorrect": false,
        "note": "Datif / Locatif (-ie)"
      },
      {
        "ending": "-ą",
        "word": "kawą",
        "isCorrect": false,
        "note": "Instrumental (-ą)"
      }
    ]
  },
  {
    "id": "case-d-57",
    "date": "2026-11-12",
    "caseName": "Dopełniacz",
    "caseLabelFr": "Génitif (Dopełniacz)",
    "caseBadgeClass": "case-dopelniacz",
    "sentenceBefore": "Jestem głodny, bo jeszcze nie jadłem śniadani",
    "sentenceAfter": ".",
    "gapWord": "śniadanie",
    "gapWordMeaning": "petit-déjeuner",
    "targetType": "nom",
    "isPlural": false,
    "gender": "neutre",
    "correctEnding": "-a",
    "fullCorrectWord": "śniadania",
    "fullSentence": "Jestem głodny, bo jeszcze nie jadłem śniadania.",
    "translationFr": "J'ai faim, car je n'ai pas encore pris de petit-déjeuner.",
    "ruleExplanation": "À la forme affirmative : <em>Jadłem śniadanie</em> (Accusatif identique au Nominatif pour les neutres). Mais avec la négation <em>nie jadłem</em>, le complément bascule obligatoirement au <strong>Génitif</strong> avec terminaison <strong>-a</strong> : <strong>nie jadłem śniadania</strong>.",
    "options": [
      {
        "ending": "-a",
        "word": "śniadania",
        "isCorrect": true,
        "note": "Génitif neutre de négation (-a)"
      },
      {
        "ending": "-e",
        "word": "śniadanie",
        "isCorrect": false,
        "note": "Accusatif de l'affirmation (-e)"
      },
      {
        "ending": "-em",
        "word": "śniadaniem",
        "isCorrect": false,
        "note": "Instrumental neutre (-em)"
      },
      {
        "ending": "-u",
        "word": "śniadaniu",
        "isCorrect": false,
        "note": "Locatif neutre (-u)"
      }
    ]
  },
  {
    "id": "case-d-58",
    "date": "2026-11-12",
    "caseName": "Dopełniacz",
    "caseLabelFr": "Génitif (Dopełniacz)",
    "caseBadgeClass": "case-dopelniacz",
    "sentenceBefore": "Do lekcji pilnie potrzebuję nowej książk",
    "sentenceAfter": " i długopisu.",
    "gapWord": "książka",
    "gapWordMeaning": "livre",
    "targetType": "nom",
    "isPlural": false,
    "gender": "féminin",
    "correctEnding": "-i",
    "fullCorrectWord": "książki",
    "fullSentence": "Do lekcji pilnie potrzebuję nowej książki i długopisu.",
    "translationFr": "Pour la leçon, j'ai un besoin urgent d'un nouveau livre et d'un stylo.",
    "ruleExplanation": "Après <strong>potrzebować</strong>, le complément est au <strong>Génitif</strong>. Pour un nom féminin dont le radical se termine par <em>k</em> ou <em>g</em>, l'adoucissement phonétique exige <strong>-i</strong> et non pas *-y : książka &rarr; <strong>książki</strong>.",
    "options": [
      {
        "ending": "-i",
        "word": "książki",
        "isCorrect": true,
        "note": "Génitif féminin régulier après k (-i)"
      },
      {
        "ending": "-y",
        "word": "książky",
        "isCorrect": false,
        "note": "Orthographe polonaise impossible (*ky)"
      },
      {
        "ending": "-ę",
        "word": "książkę",
        "isCorrect": false,
        "note": "Accusatif féminin (-ę)"
      },
      {
        "ending": "-ą",
        "word": "książką",
        "isCorrect": false,
        "note": "Instrumental féminin (-ą)"
      }
    ]
  },
  {
    "id": "case-d-59",
    "date": "2026-11-12",
    "caseName": "Dopełniacz",
    "caseLabelFr": "Génitif (Dopełniacz)",
    "caseBadgeClass": "case-dopelniacz",
    "sentenceBefore": "W moim rodzinnym mieście niestety nie ma metr",
    "sentenceAfter": ".",
    "gapWord": "metro",
    "gapWordMeaning": "métro",
    "targetType": "nom",
    "isPlural": false,
    "gender": "neutre",
    "correctEnding": "-a",
    "fullCorrectWord": "metra",
    "fullSentence": "W moim rodzinnym mieście niestety nie ma metra.",
    "translationFr": "Dans ma ville natale, il n'y a malheureusement pas de métro.",
    "ruleExplanation": "La formule d'absence <strong>nie ma</strong> exige toujours le <strong>Génitif (Dopełniacz)</strong>. Pour les noms neutres en <em>-o</em>, la terminaison au génitif est <strong>-a</strong> : <strong>nie ma metra</strong>.",
    "options": [
      {
        "ending": "-a",
        "word": "metra",
        "isCorrect": true,
        "note": "Génitif neutre régulier d'absence (-a)"
      },
      {
        "ending": "-o",
        "word": "metro",
        "isCorrect": false,
        "note": "Nominatif invariable neutre (-o)"
      },
      {
        "ending": "-u",
        "word": "metru",
        "isCorrect": false,
        "note": "Datif neutre (-u)"
      },
      {
        "ending": "-em",
        "word": "metrem",
        "isCorrect": false,
        "note": "Instrumental du transport (-em)"
      }
    ]
  },
  {
    "id": "case-d-60",
    "date": "2026-11-12",
    "caseName": "Dopełniacz",
    "caseLabelFr": "Génitif (Dopełniacz)",
    "caseBadgeClass": "case-dopelniacz",
    "sentenceBefore": "W tej małej dzielnicy w ogóle nie ma tramwaj",
    "sentenceAfter": ".",
    "gapWord": "tramwaj",
    "gapWordMeaning": "tramway",
    "targetType": "nom",
    "isPlural": false,
    "gender": "masculin inanimé",
    "correctEnding": "-u",
    "fullCorrectWord": "tramwaju",
    "fullSentence": "W tej małej dzielnicy w ogóle nie ma tramwaju.",
    "translationFr": "Dans ce petit quartier, il n'y a pas du tout de tramway.",
    "ruleExplanation": "Après <strong>nie ma</strong> (absence), le nom masculin inanimé prend la terminaison de Génitif <strong>-u</strong> : <strong>nie ma tramwaju</strong>.",
    "options": [
      {
        "ending": "-u",
        "word": "tramwaju",
        "isCorrect": true,
        "note": "Génitif masculin inanimé d'absence (-u)"
      },
      {
        "ending": "-a",
        "word": "tramwaja",
        "isCorrect": false,
        "note": "Forme incorrecte"
      },
      {
        "ending": "-em",
        "word": "tramwajem",
        "isCorrect": false,
        "note": "Instrumental du transport (-em)"
      },
      {
        "ending": "-owi",
        "word": "tramwajowi",
        "isCorrect": false,
        "note": "Datif masculin (-owi)"
      }
    ]
  },
  // ------------------------------------------
  // NOUVEAUX DÉFIS DU 17/11/2026 (SANTÉ, APTEKA, SHOPPING & PRÉPOSITIONS)
  // ------------------------------------------
  {
    "id": "case-d-61",
    "date": "2026-11-17",
    "caseName": "Dopełniacz",
    "caseLabelFr": "Génitif (Dopełniacz)",
    "caseBadgeClass": "case-dopelniacz",
    "sentenceBefore": "Mam lekki kaszel, ale na szczęście nie mam gorączk",
    "sentenceAfter": ".",
    "gapWord": "gorączka",
    "gapWordMeaning": "fièvre",
    "targetType": "nom",
    "isPlural": false,
    "gender": "féminin",
    "correctEnding": "-i",
    "fullCorrectWord": "gorączki",
    "fullSentence": "Mam lekki kaszel, ale na szczęście nie mam gorączki.",
    "translationFr": "J'ai une légère toux, mais heureusement je n'ai pas de fièvre.",
    "ruleExplanation": "La formule négative <em>nie mam</em> est systématiquement suivie du <strong>Génitif (Dopełniacz)</strong>. Pour un nom féminin dont la consonne finale est <em>k</em> (gorączka), la désinence est adoucie en <strong>-i</strong> : <strong>nie mam gorączki</strong>.",
    "options": [
      {
        "ending": "-i",
        "word": "gorączki",
        "isCorrect": true,
        "note": "Génitif féminin régulier après k (-i)"
      },
      {
        "ending": "-ę",
        "word": "gorączkę",
        "isCorrect": false,
        "note": "Accusatif de l'affirmation (-ę)"
      },
      {
        "ending": "-y",
        "word": "gorączky",
        "isCorrect": false,
        "note": "Orthographe polonaise interdite (*ky)"
      },
      {
        "ending": "-ą",
        "word": "gorączką",
        "isCorrect": false,
        "note": "Instrumental féminin (-ą)"
      }
    ]
  },
  {
    "id": "case-d-62",
    "date": "2026-11-17",
    "caseName": "Dopełniacz",
    "caseLabelFr": "Génitif (Dopełniacz)",
    "caseBadgeClass": "case-dopelniacz",
    "sentenceBefore": "Panie doktorze, mam ten męczący kaszel od dwóch dn",
    "sentenceAfter": ".",
    "gapWord": "dzień",
    "gapWordMeaning": "jour",
    "targetType": "nom",
    "isPlural": true,
    "gender": "masculin inanimé",
    "correctEnding": "-i",
    "fullCorrectWord": "dni",
    "fullSentence": "Panie doktorze, mam ten męczący kaszel od dwóch dni.",
    "translationFr": "Docteur, j'ai cette toux fatigante depuis deux jours.",
    "ruleExplanation": "La préposition temporelle <strong>od</strong> (depuis) régit toujours le <strong>Génitif (Dopełniacz)</strong>. Après les nombres 2, 3, 4 au génitif (<em>dwóch, trzech, czterech</em>), la forme plurielle est <strong>dni</strong> (ou <em>dwa dni</em> au nominatif).",
    "options": [
      {
        "ending": "-i",
        "word": "dni",
        "isCorrect": true,
        "note": "Génitif pluriel après od dwóch (-i)"
      },
      {
        "ending": "-ia",
        "word": "dnia",
        "isCorrect": false,
        "note": "Génitif singulier (od jednego dnia)"
      },
      {
        "ending": "-iom",
        "word": "dniom",
        "isCorrect": false,
        "note": "Datif pluriel (-om)"
      },
      {
        "ending": "-iami",
        "word": "dniami",
        "isCorrect": false,
        "note": "Instrumental pluriel (-ami)"
      }
    ]
  },
  {
    "id": "case-d-63",
    "date": "2026-11-17",
    "caseName": "Dopełniacz",
    "caseLabelFr": "Génitif (Dopełniacz)",
    "caseBadgeClass": "case-dopelniacz",
    "sentenceBefore": "Od wczoraj mam silny ból gardł",
    "sentenceAfter": " i nie mogę mówić.",
    "gapWord": "gardło",
    "gapWordMeaning": "gorge",
    "targetType": "nom",
    "isPlural": false,
    "gender": "neutre",
    "correctEnding": "-a",
    "fullCorrectWord": "gardła",
    "fullSentence": "Od wczoraj mam silny ból gardła i nie mogę mówić.",
    "translationFr": "Depuis hier j'ai un fort mal de gorge et je ne peux pas parler.",
    "ruleExplanation": "Pour exprimer le complément du nom (la douleur *de* quelque chose : mal de tête, mal de gorge), on emploie le <strong>Génitif</strong>. Pour le mot neutre <em>gardło</em>, la terminaison est <strong>-a</strong> : <strong>ból gardła</strong> (de même que <em>ból głowy</em>).",
    "options": [
      {
        "ending": "-a",
        "word": "gardła",
        "isCorrect": true,
        "note": "Génitif neutre complément du nom (-a)"
      },
      {
        "ending": "-o",
        "word": "gardło",
        "isCorrect": false,
        "note": "Nominatif / Accusatif neutre (-o)"
      },
      {
        "ending": "-em",
        "word": "gardłem",
        "isCorrect": false,
        "note": "Instrumental neutre (-em)"
      },
      {
        "ending": "-u",
        "word": "gardłu",
        "isCorrect": false,
        "note": "Datif neutre (-u)"
      }
    ]
  },
  {
    "id": "case-d-64",
    "date": "2026-11-17",
    "caseName": "Dopełniacz",
    "caseLabelFr": "Génitif (Dopełniacz)",
    "caseBadgeClass": "case-dopelniacz",
    "sentenceBefore": "Moje nowe biuro jest zaledwie piętnaście minut od moj",
    "sentenceAfter": " domu.",
    "gapWord": "mój",
    "gapWordMeaning": "mon (adjectif possessif)",
    "targetType": "adjectif",
    "isPlural": false,
    "gender": "masculin",
    "correctEnding": "-ego",
    "fullCorrectWord": "mojego",
    "fullSentence": "Moje nowe biuro jest zaledwie piętnaście minut od mojego domu.",
    "translationFr": "Mon nouveau bureau est à seulement quinze minutes de ma maison.",
    "ruleExplanation": "La préposition <strong>od</strong> (à partir de, de) demande le <strong>Génitif (Dopełniacz)</strong>. L'adjectif possessif masculin singulier prend la désinence <strong>-ego</strong> : <strong>od mojego domu</strong>.",
    "options": [
      {
        "ending": "-ego",
        "word": "mojego",
        "isCorrect": true,
        "note": "Génitif masculin singulier (-ego)"
      },
      {
        "ending": "-im",
        "word": "moim",
        "isCorrect": false,
        "note": "Locatif / Instrumental (-im)"
      },
      {
        "ending": "-emu",
        "word": "mojemu",
        "isCorrect": false,
        "note": "Datif masculin (-emu)"
      },
      {
        "ending": "-a",
        "word": "moja",
        "isCorrect": false,
        "note": "Nominatif féminin (-a)"
      }
    ]
  },
  {
    "id": "case-d-65",
    "date": "2026-11-17",
    "caseName": "Dopełniacz",
    "caseLabelFr": "Génitif (Dopełniacz)",
    "caseBadgeClass": "case-dopelniacz",
    "sentenceBefore": "Latem chętnie rozbijamy namiot blisko czystego jezior",
    "sentenceAfter": ".",
    "gapWord": "jezioro",
    "gapWordMeaning": "lac",
    "targetType": "nom",
    "isPlural": false,
    "gender": "neutre",
    "correctEnding": "-a",
    "fullCorrectWord": "jeziora",
    "fullSentence": "Latem chętnie rozbijamy namiot blisko czystego jeziora.",
    "translationFr": "En été, nous montons volontiers la tente près d'un lac propre.",
    "ruleExplanation": "La préposition spatiale <strong>blisko</strong> (près de) régit toujours le <strong>Génitif (Dopełniacz)</strong>. Pour le nom neutre <em>jezioro</em>, la terminaison est <strong>-a</strong> : <strong>blisko jeziora</strong>.",
    "options": [
      {
        "ending": "-a",
        "word": "jeziora",
        "isCorrect": true,
        "note": "Génitif neutre régulier après blisko (-a)"
      },
      {
        "ending": "-em",
        "word": "jeziorem",
        "isCorrect": false,
        "note": "Instrumental après nad (-em)"
      },
      {
        "ending": "-ze",
        "word": "jeziorze",
        "isCorrect": false,
        "note": "Locatif après w/na (-ze)"
      },
      {
        "ending": "-o",
        "word": "jezioro",
        "isCorrect": false,
        "note": "Nominatif neutre (-o)"
      }
    ]
  },
  {
    "id": "case-d-66",
    "date": "2026-11-17",
    "caseName": "Dopełniacz",
    "caseLabelFr": "Génitif (Dopełniacz)",
    "caseBadgeClass": "case-dopelniacz",
    "sentenceBefore": "Wczoraj po pracy poszedłem do supermarket",
    "sentenceAfter": ".",
    "gapWord": "supermarket",
    "gapWordMeaning": "supermarché",
    "targetType": "nom",
    "isPlural": false,
    "gender": "masculin inanimé",
    "correctEnding": "-u",
    "fullCorrectWord": "supermarketu",
    "fullSentence": "Wczoraj po pracy poszedłem do supermarketu.",
    "translationFr": "Hier après le travail, je suis allé au supermarché.",
    "ruleExplanation": "La préposition de direction <strong>do</strong> (vers, à) régit le <strong>Génitif (Dopełniacz)</strong>. Pour un nom masculin inanimé d'origine étrangère ou désignant un lieu/édifice, la désinence est <strong>-u</strong> : <strong>do supermarketu</strong>.",
    "options": [
      {
        "ending": "-u",
        "word": "supermarketu",
        "isCorrect": true,
        "note": "Génitif masculin de lieu après do (-u)"
      },
      {
        "ending": "-a",
        "word": "supermarketa",
        "isCorrect": false,
        "note": "Forme incorrecte (*supermarketa)"
      },
      {
        "ending": "-em",
        "word": "supermarketem",
        "isCorrect": false,
        "note": "Instrumental (-em)"
      },
      {
        "ending": "-zie",
        "word": "supermarkecie",
        "isCorrect": false,
        "note": "Locatif après w (-ie)"
      }
    ]
  },
  {
    "id": "case-n-28",
    "date": "2026-11-17",
    "caseName": "Narzędnik",
    "caseLabelFr": "Instrumental (Narzędnik)",
    "caseBadgeClass": "case-narzednik",
    "sentenceBefore": "Rano wolę zjeść słodkie śniadanie z miod",
    "sentenceAfter": ".",
    "gapWord": "miód",
    "gapWordMeaning": "miel",
    "targetType": "nom",
    "isPlural": false,
    "gender": "masculin inanimé",
    "correctEnding": "-em",
    "fullCorrectWord": "miodem",
    "fullSentence": "Rano wolę zjeść słodkie śniadanie z miodem.",
    "translationFr": "Le matin je préfère prendre un petit-déjeuner sucré avec du miel.",
    "ruleExplanation": "La préposition <strong>z</strong> (avec) indiquant l'accompagnement ou l'ingrédient régit l'<strong>Instrumental (Narzędnik)</strong>. Pour un nom masculin singulier, la terminaison est <strong>-em</strong> : <em>miód</em> &rarr; <strong>z miodem</strong>.",
    "options": [
      {
        "ending": "-em",
        "word": "miodem",
        "isCorrect": true,
        "note": "Instrumental masculin régulier avec z (-em)"
      },
      {
        "ending": "-u",
        "word": "miodu",
        "isCorrect": false,
        "note": "Génitif masculin (-u)"
      },
      {
        "ending": "-zie",
        "word": "miodzie",
        "isCorrect": false,
        "note": "Locatif masculin (-zie)"
      },
      {
        "ending": "-a",
        "word": "mioda",
        "isCorrect": false,
        "note": "Forme incorrecte"
      }
    ]
  },
  {
    "id": "case-n-29",
    "date": "2026-11-17",
    "caseName": "Narzędnik",
    "caseLabelFr": "Instrumental (Narzędnik)",
    "caseBadgeClass": "case-narzednik",
    "sentenceBefore": "Oni chętnie odpoczywają przed restauracj",
    "sentenceAfter": ", na świeżym powietrzu.",
    "gapWord": "restauracja",
    "gapWordMeaning": "restaurant",
    "targetType": "nom",
    "isPlural": false,
    "gender": "féminin",
    "correctEnding": "-ą",
    "fullCorrectWord": "restauracją",
    "fullSentence": "Oni chętnie odpoczywają przed restauracją, na świeżym powietrzu.",
    "translationFr": "Ils se reposent volontiers devant le restaurant, en plein air.",
    "ruleExplanation": "La préposition de localisation statique <strong>przed</strong> (devant) exige l'<strong>Instrumental (Narzędnik)</strong>. Pour les noms féminins singuliers en <em>-a</em>, la terminaison est <strong>-ą</strong> : <strong>przed restauracją</strong>.",
    "options": [
      {
        "ending": "-ą",
        "word": "restauracją",
        "isCorrect": true,
        "note": "Instrumental féminin régulier après przed (-ą)"
      },
      {
        "ending": "-i",
        "word": "restauracji",
        "isCorrect": false,
        "note": "Génitif / Locatif féminin (-i)"
      },
      {
        "ending": "-ę",
        "word": "restaurację",
        "isCorrect": false,
        "note": "Accusatif de mouvement (-ę)"
      },
      {
        "ending": "-e",
        "word": "restauracje",
        "isCorrect": false,
        "note": "Pluriel nominatif (-e)"
      }
    ]
  },
  {
    "id": "case-b-48",
    "date": "2026-11-17",
    "caseName": "Biernik",
    "caseLabelFr": "Accusatif (Biernik)",
    "caseBadgeClass": "case-biernik",
    "sentenceBefore": "Czy w tym sklepie mogę zobaczyć ten zielon",
    "sentenceAfter": " sweter z wystawy?",
    "gapWord": "zielony",
    "gapWordMeaning": "vert (adjectif)",
    "targetType": "adjectif",
    "isPlural": false,
    "gender": "masculin inanimé",
    "correctEnding": "-y",
    "fullCorrectWord": "zielony",
    "fullSentence": "Czy w tym sklepie mogę zobaczyć ten zielony sweter z wystawy?",
    "translationFr": "Dans ce magasin, puis-je voir ce pull vert de la vitrine ?",
    "ruleExplanation": "Pour les compléments d'objet direct de genre <strong>masculin inanimé</strong> (objets, vêtements), le <strong>Biernik (Accusatif)</strong> est strictement identique au <strong>Mianownik (Nominatif)</strong> : <em>ten zielony sweter</em>.",
    "options": [
      {
        "ending": "-y",
        "word": "zielony",
        "isCorrect": true,
        "note": "Accusatif masculin inanimé identique au nominatif (-y)"
      },
      {
        "ending": "-ego",
        "word": "zielonego",
        "isCorrect": false,
        "note": "Accusatif masculin animé / Génitif (-ego)"
      },
      {
        "ending": "-ym",
        "word": "zielonym",
        "isCorrect": false,
        "note": "Locatif / Instrumental (-ym)"
      },
      {
        "ending": "-ą",
        "word": "zieloną",
        "isCorrect": false,
        "note": "Accusatif féminin (-ą)"
      }
    ]
  },
  {
    "id": "case-b-49",
    "date": "2026-11-17",
    "caseName": "Biernik",
    "caseLabelFr": "Accusatif (Biernik)",
    "caseBadgeClass": "case-biernik",
    "sentenceBefore": "Przepraszam, czy mogę przymierzyć ",
    "sentenceAfter": " czerwoną sukienkę?",
    "gapWord": "ta",
    "gapWordMeaning": "cette (démonstratif féminin)",
    "targetType": "pronom / déterminant",
    "isPlural": false,
    "gender": "féminin",
    "correctEnding": "-ę",
    "fullCorrectWord": "tę",
    "fullSentence": "Przepraszam, czy mogę przymierzyć tę czerwoną sukienkę?",
    "translationFr": "Pardonnez-moi, puis-je essayer cette robe rouge ?",
    "ruleExplanation": "Le déterminant démonstratif féminin <em>ta</em> prend la forme <strong>tę</strong> (ou familièrement <em>tą</em>) à l'<strong>Accusatif singulier (Biernik)</strong> pour s'accorder avec le COD : <strong>tę czerwoną sukienkę</strong>.",
    "options": [
      {
        "ending": "-ę",
        "word": "tę",
        "isCorrect": true,
        "note": "Accusatif féminin régulier (tę sukienkę)"
      },
      {
        "ending": "-a",
        "word": "ta",
        "isCorrect": false,
        "note": "Nominatif féminin (ta)"
      },
      {
        "ending": "-ej",
        "word": "tej",
        "isCorrect": false,
        "note": "Génitif / Locatif féminin (tej)"
      },
      {
        "ending": "-e",
        "word": "te",
        "isCorrect": false,
        "note": "Pluriel non-viril (te)"
      }
    ]
  },
  {
    "id": "case-b-50",
    "date": "2026-11-17",
    "caseName": "Biernik",
    "caseLabelFr": "Accusatif (Biernik)",
    "caseBadgeClass": "case-biernik",
    "sentenceBefore": "Wczoraj w supermarkecie kupiłem wódk",
    "sentenceAfter": " na weekendową imprezę.",
    "gapWord": "wódka",
    "gapWordMeaning": "vodka",
    "targetType": "nom",
    "isPlural": false,
    "gender": "féminin",
    "correctEnding": "-ę",
    "fullCorrectWord": "wódkę",
    "fullSentence": "Wczoraj w supermarkecie kupiłem wódkę na weekendową imprezę.",
    "translationFr": "Hier au supermarché j'ai acheté de la vodka pour la fête du week-end.",
    "ruleExplanation": "À la forme affirmative, le verbe transitif <em>kupić</em> régit l'<strong>Accusatif (Biernik)</strong>. Pour un nom féminin singulier terminé en <em>-a</em>, la terminaison est <strong>-ę</strong> : wódka &rarr; <strong>kupiłem wódkę</strong>.",
    "options": [
      {
        "ending": "-ę",
        "word": "wódkę",
        "isCorrect": true,
        "note": "Accusatif féminin régulier COD (-ę)"
      },
      {
        "ending": "-i",
        "word": "wódki",
        "isCorrect": false,
        "note": "Génitif féminin (-i)"
      },
      {
        "ending": "-ą",
        "word": "wódką",
        "isCorrect": false,
        "note": "Instrumental féminin (-ą)"
      },
      {
        "ending": "-ce",
        "word": "wódce",
        "isCorrect": false,
        "note": "Locatif / Datif féminin (-ce)"
      }
    ]
  },
  {
    "id": "case-m-40",
    "date": "2026-11-17",
    "caseName": "Miejscownik",
    "caseLabelFr": "Locatif (Miejscownik)",
    "caseBadgeClass": "case-miejscownik",
    "sentenceBefore": "Gdy mam ból gardła, natychmiast kupuję syrop w aptec",
    "sentenceAfter": ".",
    "gapWord": "apteka",
    "gapWordMeaning": "pharmacie",
    "targetType": "nom",
    "isPlural": false,
    "gender": "féminin",
    "correctEnding": "-e",
    "fullCorrectWord": "aptece",
    "fullSentence": "Gdy mam ból gardła, natychmiast kupuję syrop w aptece.",
    "translationFr": "Quand j'ai mal à la gorge, j'achète immédiatement du sirop à la pharmacie.",
    "ruleExplanation": "La localisation statique après <em>w</em> (dans / à) demande le <strong>Miejscownik (Locatif)</strong>. Le <em>k</em> dur final s'adoucit en <em>c</em> avec la terminaison <strong>-e</strong> : apteka &rarr; <strong>w aptece</strong>.",
    "options": [
      {
        "ending": "-e",
        "word": "aptece",
        "isCorrect": true,
        "note": "Locatif féminin avec alternance k -> c (-e)"
      },
      {
        "ending": "-i",
        "word": "apteki",
        "isCorrect": false,
        "note": "Génitif féminin (-i)"
      },
      {
        "ending": "-ę",
        "word": "aptekę",
        "isCorrect": false,
        "note": "Accusatif féminin (-ę)"
      },
      {
        "ending": "-ą",
        "word": "apteką",
        "isCorrect": false,
        "note": "Instrumental féminin (-ą)"
      }
    ]
  }
];

const POLISH_CASES_GUIDE = {
  Biernik: {
    id: "Biernik",
    caseName: "Biernik",
    title: "Biernik (Accusatif)",
    icon: "🏛️",
    badgeClass: "case-biernik",
    question: "Kogo? Co? (Qui ? Quoi ?)",
    summary: "Cas du Complément d'Objet Direct (COD) pour ce qu'on a, aime, boit, mange, veut, commande, et pour les destinations de mouvement (na / w).",
    triggers: [
      "Verbes d'action et de possession transitifs affirmatifs : <strong>mieć</strong> (avoir), <strong>lubić</strong> (aimer), <strong>chcieć</strong> (vouloir), <strong>poproszę</strong> (je voudrais), <strong>zamawiać</strong> (commander), <strong>pić</strong> (boire), <strong>jeść</strong> (manger), <strong>czytać</strong> (lire), <strong>widzieć</strong> (voir), <strong>nosić</strong> (porter)...",
      "Direction et mouvement vers un lieu : préposition <strong>na + lieu</strong> (<em>na ulicę, na pocztę, na stację, na lotnisko</em>) ou <strong>w + mouvement</strong>."
    ],
    endings: [
      { category: "Féminin singulier", noun: "<strong>-ę</strong> (kawa &rarr; kawę, pizza &rarr; pizzę)", adj: "<strong>-ą</strong> (dobrą kawę)", note: "Seule la terminaison du nom prend -ę, l'adjectif garde -ą." },
      { category: "Masculin animé (personne, animal)", noun: "<strong>-a</strong> (brat &rarr; brata, pies &rarr; psa)", adj: "<strong>-ego</strong> (dobrego brata)", note: "Identique au Génitif singulier." },
      { category: "Masculin inanimé (chose, lieu, objet)", noun: "<strong>-ø invariable</strong> (chleb, paszport, plecak)", adj: "<strong>-y / -i</strong> (czarny plecak)", note: "Identique au Nominatif de départ." },
      { category: "Neutre singulier", noun: "<strong>-o / -e invariable</strong> (jabłko, ciasto, kino)", adj: "<strong>-e</strong> (dobre ciasto)", note: "Identique au Nominatif de départ." },
      { category: "Pluriel viril / masculin personnel (hommes, groupes)", noun: "<strong>-ów / -i / -y</strong> (studentów, Polaków, braci)", adj: "<strong>-ych / -ich</strong> (nowych studentów)", note: "Forme 100 % IDENTIQUE au Génitif pluriel ! (ex: Znam tych studentów)." },
      { category: "Pluriel non-viril (femmes, animaux, objets)", noun: "<strong>-y / -e / -a</strong> (kobiety, psy, walizki)", adj: "<strong>-e</strong> (nowe walizki, czarne psy)", note: "Forme 100 % IDENTIQUE au Nominatif pluriel ! (ex: Mam dwie walizki)." }
    ],
    examples: [
      { pl: "Poproszę <strong>kawę</strong> z mlekiem.", fr: "Un café avec du lait, s'il vous plaît." },
      { pl: "Mam <strong>syna</strong> i <strong>córkę</strong>.", fr: "J'ai un fils et une fille." },
      { pl: "Proszę jechać na <strong>ulicę Lipową</strong>.", fr: "S'il vous plaît, allez rue Lipowa." },
      { pl: "W auli uniwersytetu widzę <strong>nowych studentów</strong>.", fr: "Dans l'amphi, je vois de nouveaux étudiants (pluriel viril = génitif pl.)." },
      { pl: "Na lotnisko zabieram <strong>dwie duże walizki</strong>.", fr: "J'emporte deux grandes valises (pluriel non-viril = nominatif pl.)." }
    ],
    tip: "💡 Règle clé du Pluriel à l'Accusatif : Le <strong>pluriel viril</strong> (hommes ou groupes contenant au moins un homme) est identique au <strong>Génitif pluriel</strong> (noms en <em>-ów</em>, adjectifs en <em>-ych/-ich</em> : <em>Widzę dobrych studentów</em>). À l'inverse, le <strong>pluriel non-viril</strong> (femmes, animaux, objets) est identique au <strong>Nominatif pluriel</strong> (adjectifs en <em>-e</em> : <em>Widzę nowe walizki / czarne psy</em>) !"
  },

  Narzednik: {
    id: "Narzednik",
    caseName: "Narzednik",
    title: "Narzędnik (Instrumental)",
    icon: "🤝",
    badgeClass: "case-narzednik",
    question: "Z kim? Z czym? (Avec qui ? Avec quoi ?) / Kim? Czym? (En quoi ? Par quoi ?)",
    summary: "Cas de l'accompagnement (avec qui/quoi), des moyens de transport, des métiers et nationalités avec être (być), et des centres d'intérêt.",
    triggers: [
      "Préposition <strong>z / ze</strong> (avec quelqu'un, avec un aliment) : <em>kawa z mlekiem, herbata z cytryną, spacer z psem, rozmowa z bratem</em>.",
      "Métier, profession ou nationalité après le verbe <strong>być</strong> (être) : <em>Jestem Francuzem, Anna jest kelnerką, Mój ojciec jest kierowcą</em>.",
      "Verbe <strong>interesować się</strong> (s'intéresser à) : <em>Interesuję się muzyką, interesuję się sportem</em>.",
      "Moyen de transport utilisé pour se déplacer (sans préposition) : <em>jechać autobusem, pociągiem, samochodem, taksówką</em>."
    ],
    endings: [
      { category: "Féminin singulier", noun: "<strong>-ą</strong> (kawa &rarr; kawą, cytryna &rarr; cytryną)", adj: "<strong>-ą</strong> (czarną kawą)", note: "Harmonie parfaite : nom et adjectif riment tous deux en -ą." },
      { category: "Masculin singulier", noun: "<strong>-em</strong> (mlekiem, bratem, serem)", adj: "<strong>-ym / -im</strong> (dobrym studentem)", note: "Prend <em>-iem</em> après k ou g (pociąg &rarr; pociągiem). Les masculins en -a prennent <em>-ą</em> (kierowcą)." },
      { category: "Neutre singulier", noun: "<strong>-em</strong> (mleko &rarr; mlekiem, okno &rarr; oknem)", adj: "<strong>-ym / -im</strong> (zimnym mlekiem)", note: "Même terminaison que pour le masculin." },
      { category: "Pluriel (tous genres)", noun: "<strong>-ami</strong> (studentami, książkami)", adj: "<strong>-ymi / -imi</strong> (nowymi samochodami)", note: "Désinence universelle très régulière." }
    ],
    examples: [
      { pl: "Poproszę kawę z <strong>mlekiem</strong> i z <strong>cukrem</strong>.", fr: "Un café avec du lait et du sucre, s'il vous plaît." },
      { pl: "Jestem <strong>Francuzem</strong>, a Anna jest <strong>kelnerką</strong>.", fr: "Je suis Français, et Anna est serveuse." },
      { pl: "Do pracy jeżdżę <strong>autobusem</strong> lub <strong>pociągiem</strong>.", fr: "Je vais au travail en bus ou en train." },
      { pl: "Bardzo interesuję się <strong>językiem polskim</strong>.", fr: "Je m'intéresse beaucoup à la langue polonaise." },
      { pl: "Idę na spacer z <strong>psem</strong>.", fr: "Je vais me promener avec le chien." }
    ],
    tip: "💡 Astuce : Au féminin singulier, l'Instrumental fait rimer le nom et l'adjectif en <strong>-ą / -ą</strong> (<em>z moją siostrą</em>), alors que l'Accusatif oppose <strong>-ą / -ę</strong> (<em>widzę moją siostrę</em>)."
  },

  Miejscownik: {
    id: "Miejscownik",
    caseName: "Miejscownik",
    title: "Miejscownik (Locatif)",
    icon: "📍",
    badgeClass: "case-miejscownik",
    question: "O kim? O czym? (De qui ? De quoi ?) / W czym? Na czym? (Où ? Dans quoi ? Sur quoi ?)",
    summary: "Cas du lieu statique (où l'on est, où l'on habite, où l'on travaille) et du sujet de discussion avec 'o'. Ne s'emploie JAMAIS sans préposition.",
    triggers: [
      "Préposition statique <strong>w / we</strong> (dans, en) : <em>w Polsce, we Francji, w kawiarni, w hotelu, w biurze</em>.",
      "Préposition statique <strong>na</strong> (sur, ou lieu ouvert / service public) : <em>na lotnisku, na poczcie, na stacji, na stole</em>.",
      "Préposition <strong>o</strong> (au sujet de, à propos de) : <em>rozmawiamy o filmie, myślę o wakacjach</em>.",
      "Prépositions de proximité <strong>przy</strong> (près de) et <strong>po</strong> (après, selon)."
    ],
    endings: [
      { category: "Féminin singulier", noun: "<strong>-e</strong> (après consonne dure : Polska &rarr; w Polsce, poczta &rarr; na poczcie) ou <strong>-i / -y</strong> (après consonne molle ou -ia : kawiarnia &rarr; w kawiarni, Francja &rarr; we Francji)", adj: "<strong>-ej</strong> (w małej kawiarni)", note: "Attention aux alternances (k &rarr; c : Polska &rarr; w Polsce, t &rarr; ci : poczta &rarr; na poczcie)." },
      { category: "Masculin singulier", noun: "<strong>-e</strong> (après consonne dure avec adoucissement : stół &rarr; na stole, film &rarr; o filmie) ou <strong>-u</strong> (après k, g, ch ou consonne molle : hotel &rarr; w hotelu, plecak &rarr; w plecaku)", adj: "<strong>-ym / -im</strong> (w nowym hotelu)", note: "Alternances fréquentes (ł &rarr; l : stół &rarr; na stole, r &rarr; rz : teatr &rarr; w teatrze)." },
      { category: "Neutre singulier", noun: "<strong>-e</strong> (biuro &rarr; w biurze, kino &rarr; w kinie) ou <strong>-u</strong> (mieszkanie &rarr; w mieszkaniu)", adj: "<strong>-ym / -im</strong> (w dużym kinie)", note: "Mêmes règles d'alternance que pour le masculin." },
      { category: "Pluriel (tous genres)", noun: "<strong>-ach</strong> (w miastach, w hotelach, na wakacjach)", adj: "<strong>-ych / -ich</strong> (w małych pokojach)", note: "Désinence -ach universelle pour tous les genres." }
    ],
    examples: [
      { pl: "Mieszkam we <strong>Francji</strong>, ale teraz jestem w <strong>Polsce</strong>.", fr: "J'habite en France, mais maintenant je suis en Pologne." },
      { pl: "Spotykamy się w <strong>kawiarni</strong> na <strong>stacji</strong>.", fr: "Nous nous retrouvons au café à la gare." },
      { pl: "Książka i klucze leżą na <strong>stole</strong>.", fr: "Le livre et les clés sont posés sur la table." },
      { pl: "Mój brat pracuje w <strong>biurze</strong> w <strong>hotelu</strong>.", fr: "Mon frère travaille dans un bureau à l'hôtel." },
      { pl: "Rozmawiamy o nowym <strong>filmie</strong>.", fr: "Nous parlons du nouveau film." }
    ],
    tip: "⚠️ Mouvement vs Statique : Avec <strong>w</strong> et <strong>na</strong>, si on est sur place (statique), c'est le <strong>Locatif</strong> (<em>jestem w kinie, jestem na poczcie</em>). Si on s'y déplace (mouvement), c'est l'<strong>Accusatif</strong> (<em>idę na pocztę</em>) ou <strong>do + Génitif</strong> (<em>idę do kina</em>) !"
  },

  Dopelniacz: {
    id: "Dopelniacz",
    caseName: "Dopelniacz",
    title: "Dopełniacz (Génitif)",
    icon: "🎯",
    badgeClass: "case-dopelniacz",
    question: "Kogo? Czego? (De qui ? De quoi ? De quoi manque-t-on ?)",
    summary: "Cas roi de la grammaire polonaise : négation obligatoire, absence (nie ma), direction (do), provenance (z), manque (bez), attribution (dla) et quantités.",
    triggers: [
      "<strong>La Négation</strong> (remplace obligatoirement l'Accusatif) : <em>Nie mam czasu, Nie piję kawy, Nie mam syna</em>.",
      "L'absence avec <strong>nie ma</strong> (il n'y a pas) : <em>Nie ma chleba, Nie ma problemu, Nie ma wyjścia</em>.",
      "Préposition <strong>do</strong> (vers / à destination de) : <em>jadę do Polski, do Francji, do domu, do Paryża</em>.",
      "Préposition <strong>z / ze</strong> (de / provenance d'un lieu) : <em>jestem z Francji, wracam z pracy</em>.",
      "Préposition <strong>bez</strong> (sans) : <em>kawa bez cukru, herbata bez mleka</em>.",
      "Préposition <strong>dla</strong> (pour le bénéficiaire) : <em>prezent dla siostry, stolik dla dwóch osób</em>.",
      "Mots de quantité et récipients : <em>szklanka wody, kilogram jabłek, dużo czasu</em>."
    ],
    endings: [
      { category: "Féminin singulier", noun: "<strong>-y</strong> (kawa &rarr; kawy, siostra &rarr; siostry) ou <strong>-i</strong> (après k, g ou -ia : Polska &rarr; do Polski, Francja &rarr; z Francji)", adj: "<strong>-ej</strong> (dobrej kawy)", note: "Même désinence que le Locatif pour les féminins en -ia." },
      { category: "Masculin singulier", noun: "<strong>-a</strong> (personnes, animaux, objets définis : brata, psa, chleba) ou <strong>-u</strong> (matières, notions abstraites, moyens de transport, pays : cukru, czasu, domu)", adj: "<strong>-ego</strong> (dobrego brata, nowego domu)", note: "Les masculins animés partagent cette forme avec leur Accusatif." },
      { category: "Neutre singulier", noun: "<strong>-a</strong> (piwo &rarr; piwa, ciasto &rarr; ciasta, mleko &rarr; mleka)", adj: "<strong>-ego</strong> (zimnego piwa)", note: "Régularité quasi-absolue en -a." },
      { category: "Pluriel", noun: "Masculins : <strong>-ów</strong> (studentów, biletów) | Féminins et neutres : <strong>-ø désinence zéro</strong> (osoba &rarr; osób, jabłko &rarr; jabłek) ou <strong>-i/-y</strong>", adj: "<strong>-ych / -ich</strong> (nowych biletów)", note: "Ex : Stolik dla ilu osób? (de osoba &rarr; osób)." }
    ],
    examples: [
      { pl: "Jestem z <strong>Francji</strong> i jadę do <strong>Polski</strong>.", fr: "Je viens de France et je vais en Pologne." },
      { pl: "Niestety dzisiaj nie mam <strong>czasu</strong>.", fr: "Malheureusement aujourd'hui je n'ai pas le temps." },
      { pl: "Poproszę kawę bez <strong>cukru</strong> i szklankę <strong>wody</strong>.", fr: "Un café sans sucre et un verre d'eau, s'il vous plaît." },
      { pl: "W tej kawiarni nie ma już <strong>miejsca</strong>.", fr: "Dans ce café, il n'y a plus de place." },
      { pl: "To jest prezent dla mojej <strong>siostry</strong>.", fr: "C'est un cadeau pour ma sœur." }
    ],
    tip: "💡 Négation = Génitif : C'est le réflexe numéro un en polonais. Dès que vous ajoutez <em>nie</em> devant un verbe transitif (avoir, aimer, connaître, boire, manger), le COD passe obligatoirement au Génitif !"
  }
};


// ==========================================
// MODULE : POSSESSIFS & DÉMONSTRATIFS POLONAIS
// ==========================================

const POSSESSIVE_CHALLENGES = [
  // ------------------------------------------
  // NIVEAU 1 : FORMES DE BASE (NOMINATIF / ACCORDS EN GENRE ET NOMBRE)
  // ------------------------------------------
  {
    id: "poss-l1-1",
    date: "2026-10-27",
    level: 1,
    category: "1st-sg",
    categoryLabelFr: "1ère pers. sg (Mon / Ma / Mes)",
    targetCase: "Mianownik",
    caseLabelFr: "Nominatif",
    nounContext: "brat (nom masculin)",
    targetMeaning: "mon",
    sentenceBefore: "To jest ",
    sentenceAfter: " brat.",
    gapWord: "mój",
    fullSentence: "To jest mój brat.",
    translationFr: "C'est mon frère.",
    ruleExplanation: "<strong>brat</strong> est un nom masculin singulier au Nominatif. Pour 'mon', la forme masculine est <strong>mój</strong> (féminin : <em>moja</em>, neutre : <em>moje</em>).",
    options: [
      { word: "mój", isCorrect: true, note: "Masculin singulier" },
      { word: "moja", isCorrect: false, note: "Féminin singulier" },
      { word: "moje", isCorrect: false, note: "Neutre singulier / Pluriel non-viril" },
      { word: "moim", isCorrect: false, note: "Instrumental / Locatif" }
    ]
  },
  {
    id: "poss-l1-2",
    date: "2026-10-27",
    level: 1,
    category: "1st-sg",
    categoryLabelFr: "1ère pers. sg (Mon / Ma / Mes)",
    targetCase: "Mianownik",
    caseLabelFr: "Nominatif",
    nounContext: "siostra (nom féminin)",
    targetMeaning: "ma",
    sentenceBefore: "To jest ",
    sentenceAfter: " siostra.",
    gapWord: "moja",
    fullSentence: "To jest moja siostra.",
    translationFr: "C'est ma sœur.",
    ruleExplanation: "<strong>siostra</strong> est un nom féminin singulier au Nominatif. Pour 'ma', la forme féminine est <strong>moja</strong>.",
    options: [
      { word: "moja", isCorrect: true, note: "Féminin singulier" },
      { word: "mój", isCorrect: false, note: "Masculin singulier" },
      { word: "moje", isCorrect: false, note: "Neutre singulier" },
      { word: "mojej", isCorrect: false, note: "Génitif / Datif / Locatif" }
    ]
  },
  {
    id: "poss-l1-3",
    date: "2026-10-27",
    level: 1,
    category: "1st-sg",
    categoryLabelFr: "1ère pers. sg (Mon / Ma / Mes)",
    targetCase: "Mianownik",
    caseLabelFr: "Nominatif",
    nounContext: "auto (nom neutre)",
    targetMeaning: "mon",
    sentenceBefore: "To jest ",
    sentenceAfter: " auto.",
    gapWord: "moje",
    fullSentence: "To jest moje auto.",
    translationFr: "C'est ma voiture.",
    ruleExplanation: "<strong>auto</strong> est un nom neutre singulier (terminé en <em>-o</em>). Pour 'mon' au neutre, la forme est <strong>moje</strong>.",
    options: [
      { word: "moje", isCorrect: true, note: "Neutre singulier" },
      { word: "mój", isCorrect: false, note: "Masculin singulier" },
      { word: "moja", isCorrect: false, note: "Féminin singulier" },
      { word: "moim", isCorrect: false, note: "Instrumental / Locatif" }
    ]
  },
  {
    id: "poss-l1-4",
    date: "2026-10-27",
    level: 1,
    category: "1st-sg",
    categoryLabelFr: "1ère pers. sg (Mon / Ma / Mes)",
    targetCase: "Mianownik",
    caseLabelFr: "Nominatif",
    nounContext: "rodzice (nom masculin viril / personnes)",
    targetMeaning: "mes",
    sentenceBefore: "To są ",
    sentenceAfter: " rodzice.",
    gapWord: "moi",
    fullSentence: "To są moi rodzice.",
    translationFr: "Ce sont mes parents.",
    ruleExplanation: "<strong>rodzice</strong> (les parents) désigne un groupe contenant des hommes (pluriel viril / <em>męskoosobowy</em>). La forme spéciale au nominatif pluriel viril est <strong>moi</strong> (et non <em>moje</em>).",
    options: [
      { word: "moi", isCorrect: true, note: "Pluriel viril (hommes / personnes)" },
      { word: "moje", isCorrect: false, note: "Pluriel non-viril (choses, femmes)" },
      { word: "mój", isCorrect: false, note: "Singulier masculin" },
      { word: "moich", isCorrect: false, note: "Génitif / Accusatif pluriel" }
    ]
  },
  {
    id: "poss-l1-5",
    date: "2026-10-27",
    level: 1,
    category: "1st-sg",
    categoryLabelFr: "1ère pers. sg (Mon / Ma / Mes)",
    targetCase: "Mianownik",
    caseLabelFr: "Nominatif",
    nounContext: "książki (nom féminin / choses au pluriel)",
    targetMeaning: "mes",
    sentenceBefore: "To są ",
    sentenceAfter: " książki.",
    gapWord: "moje",
    fullSentence: "To są moje książki.",
    translationFr: "Ce sont mes livres.",
    ruleExplanation: "<strong>książki</strong> (les livres) est un nom pluriel non-viril (objets/choses). La forme de 'mes' pour le non-viril est <strong>moje</strong>.",
    options: [
      { word: "moje", isCorrect: true, note: "Pluriel non-viril" },
      { word: "moi", isCorrect: false, note: "Pluriel viril (réservé aux personnes masculines)" },
      { word: "moja", isCorrect: false, note: "Féminin singulier" },
      { word: "moim", isCorrect: false, note: "Instrumental singulier" }
    ]
  },
  {
    id: "poss-l1-6",
    date: "2026-10-27",
    level: 1,
    category: "2nd-sg",
    categoryLabelFr: "2ème pers. sg (Ton / Ta / Tes)",
    targetCase: "Mianownik",
    caseLabelFr: "Nominatif",
    nounContext: "pies (nom masculin)",
    targetMeaning: "ton",
    sentenceBefore: "Czy to jest ",
    sentenceAfter: " pies?",
    gapWord: "twój",
    fullSentence: "Czy to jest twój pies?",
    translationFr: "Est-ce que c'est ton chien ?",
    ruleExplanation: "<strong>pies</strong> est masculin singulier au Nominatif. Pour 'ton', la forme masculine est <strong>twój</strong>.",
    options: [
      { word: "twój", isCorrect: true, note: "Masculin singulier" },
      { word: "twoja", isCorrect: false, note: "Féminin singulier" },
      { word: "twoje", isCorrect: false, note: "Neutre singulier" },
      { word: "twoim", isCorrect: false, note: "Instrumental / Locatif" }
    ]
  },
  {
    id: "poss-l1-7",
    date: "2026-10-27",
    level: 1,
    category: "2nd-sg",
    categoryLabelFr: "2ème pers. sg (Ton / Ta / Tes)",
    targetCase: "Mianownik",
    caseLabelFr: "Nominatif",
    nounContext: "mama (nom féminin)",
    targetMeaning: "ta",
    sentenceBefore: "Gdzie mieszka ",
    sentenceAfter: " mama?",
    gapWord: "twoja",
    fullSentence: "Gdzie mieszka twoja mama?",
    translationFr: "Où habite ta maman ?",
    ruleExplanation: "<strong>mama</strong> est féminin singulier au Nominatif. La forme correspondante pour 'ta' est <strong>twoja</strong>.",
    options: [
      { word: "twoja", isCorrect: true, note: "Féminin singulier" },
      { word: "twój", isCorrect: false, note: "Masculin singulier" },
      { word: "twoje", isCorrect: false, note: "Neutre singulier" },
      { word: "twojej", isCorrect: false, note: "Génitif / Datif / Locatif" }
    ]
  },
  {
    id: "poss-l1-8",
    date: "2026-10-27",
    level: 1,
    category: "2nd-sg",
    categoryLabelFr: "2ème pers. sg (Ton / Ta / Tes)",
    targetCase: "Mianownik",
    caseLabelFr: "Nominatif",
    nounContext: "mieszkanie (nom neutre)",
    targetMeaning: "ton",
    sentenceBefore: "To jest ",
    sentenceAfter: " nowe mieszkanie.",
    gapWord: "twoje",
    fullSentence: "To jest twoje nowe mieszkanie.",
    translationFr: "C'est ton nouvel appartement.",
    ruleExplanation: "<strong>mieszkanie</strong> est neutre (se termine par <em>-e</em>). La forme neutre pour 'ton' est <strong>twoje</strong>.",
    options: [
      { word: "twoje", isCorrect: true, note: "Neutre singulier" },
      { word: "twój", isCorrect: false, note: "Masculin singulier" },
      { word: "twoja", isCorrect: false, note: "Féminin singulier" },
      { word: "twoim", isCorrect: false, note: "Instrumental singulier" }
    ]
  },
  {
    id: "poss-l1-9",
    date: "2026-10-27",
    level: 1,
    category: "2nd-sg",
    categoryLabelFr: "2ème pers. sg (Ton / Ta / Tes)",
    targetCase: "Mianownik",
    caseLabelFr: "Nominatif",
    nounContext: "przyjaciele (nom masculin viril pl)",
    targetMeaning: "tes",
    sentenceBefore: "To są ",
    sentenceAfter: " przyjaciele.",
    gapWord: "twoi",
    fullSentence: "To są twoi przyjaciele.",
    translationFr: "Ce sont tes amis.",
    ruleExplanation: "<strong>przyjaciele</strong> (les amis) est au pluriel viril (hommes/personnes). On utilise la désinence virile <strong>twoi</strong>.",
    options: [
      { word: "twoi", isCorrect: true, note: "Pluriel viril" },
      { word: "twoje", isCorrect: false, note: "Pluriel non-viril" },
      { word: "twój", isCorrect: false, note: "Singulier masculin" },
      { word: "twoich", isCorrect: false, note: "Génitif / Accusatif pluriel" }
    ]
  },
  {
    id: "poss-l1-10",
    date: "2026-10-27",
    level: 1,
    category: "1st-pl",
    categoryLabelFr: "1ère pers. pl (Notre / Nos)",
    targetCase: "Mianownik",
    caseLabelFr: "Nominatif",
    nounContext: "syn (nom masculin)",
    targetMeaning: "notre",
    sentenceBefore: "To jest ",
    sentenceAfter: " syn.",
    gapWord: "nasz",
    fullSentence: "To jest nasz syn.",
    translationFr: "C'est notre fils.",
    ruleExplanation: "<strong>syn</strong> est masculin singulier au Nominatif. La forme pour 'notre' au masculin est <strong>nasz</strong>.",
    options: [
      { word: "nasz", isCorrect: true, note: "Masculin singulier" },
      { word: "nasza", isCorrect: false, note: "Féminin singulier" },
      { word: "nasze", isCorrect: false, note: "Neutre singulier" },
      { word: "naszym", isCorrect: false, note: "Instrumental / Locatif" }
    ]
  },
  {
    id: "poss-l1-11",
    date: "2026-10-27",
    level: 1,
    category: "1st-pl",
    categoryLabelFr: "1ère pers. pl (Notre / Nos)",
    targetCase: "Mianownik",
    caseLabelFr: "Nominatif",
    nounContext: "rodzina (nom féminin)",
    targetMeaning: "notre",
    sentenceBefore: "",
    sentenceAfter: " rodzina mieszka w Krakowie.",
    gapWord: "Nasza",
    fullSentence: "Nasza rodzina mieszka w Krakowie.",
    translationFr: "Notre famille habite à Cracovie.",
    ruleExplanation: "<strong>rodzina</strong> est féminin singulier au Nominatif. Pour 'notre' au féminin, on utilise <strong>Nasza</strong>.",
    options: [
      { word: "Nasza", isCorrect: true, note: "Féminin singulier" },
      { word: "Nasz", isCorrect: false, note: "Masculin singulier" },
      { word: "Nasze", isCorrect: false, note: "Neutre singulier" },
      { word: "Naszej", isCorrect: false, note: "Génitif / Locatif" }
    ]
  },
  {
    id: "poss-l1-12",
    date: "2026-10-27",
    level: 1,
    category: "1st-pl",
    categoryLabelFr: "1ère pers. pl (Notre / Nos)",
    targetCase: "Mianownik",
    caseLabelFr: "Nominatif",
    nounContext: "mieszkanie (nom neutre)",
    targetMeaning: "notre",
    sentenceBefore: "To jest ",
    sentenceAfter: " nowe mieszkanie.",
    gapWord: "nasze",
    fullSentence: "To jest nasze nowe mieszkanie.",
    translationFr: "C'est notre nouvel appartement.",
    ruleExplanation: "<strong>mieszkanie</strong> est neutre. La forme neutre pour 'notre' est <strong>nasze</strong>.",
    options: [
      { word: "nasze", isCorrect: true, note: "Neutre singulier" },
      { word: "nasz", isCorrect: false, note: "Masculin singulier" },
      { word: "nasza", isCorrect: false, note: "Féminin singulier" },
      { word: "nasi", isCorrect: false, note: "Pluriel viril" }
    ]
  },
  {
    id: "poss-l1-13",
    date: "2026-10-27",
    level: 1,
    category: "1st-pl",
    categoryLabelFr: "1ère pers. pl (Notre / Nos)",
    targetCase: "Mianownik",
    caseLabelFr: "Nominatif",
    nounContext: "nauczyciele (nom viril pl)",
    targetMeaning: "nos",
    sentenceBefore: "",
    sentenceAfter: " nauczyciele są bardzo cierpliwi.",
    gapWord: "Nasi",
    fullSentence: "Nasi nauczyciele są bardzo cierpliwi.",
    translationFr: "Nos professeurs sont très patients.",
    ruleExplanation: "<strong>nauczyciele</strong> (les enseignants) est masculin viril au pluriel. La forme virile pour 'nos' est <strong>Nasi</strong>.",
    options: [
      { word: "Nasi", isCorrect: true, note: "Pluriel viril" },
      { word: "Nasze", isCorrect: false, note: "Pluriel non-viril" },
      { word: "Nasz", isCorrect: false, note: "Singulier masculin" },
      { word: "Naszych", isCorrect: false, note: "Génitif pluriel" }
    ]
  },
  {
    id: "poss-l1-14",
    date: "2026-10-27",
    level: 1,
    category: "2nd-pl",
    categoryLabelFr: "2ème pers. pl (Votre / Vos)",
    targetCase: "Mianownik",
    caseLabelFr: "Nominatif",
    nounContext: "dom (nom masculin)",
    targetMeaning: "votre",
    sentenceBefore: "Czy to jest ",
    sentenceAfter: " dom?",
    gapWord: "wasz",
    fullSentence: "Czy to jest wasz dom?",
    translationFr: "Est-ce que c'est votre maison ?",
    ruleExplanation: "<strong>dom</strong> est masculin singulier au Nominatif. La forme pour 'votre' au masculin est <strong>wasz</strong>.",
    options: [
      { word: "wasz", isCorrect: true, note: "Masculin singulier" },
      { word: "wasza", isCorrect: false, note: "Féminin singulier" },
      { word: "wasze", isCorrect: false, note: "Neutre singulier" },
      { word: "waszym", isCorrect: false, note: "Instrumental singulier" }
    ]
  },
  {
    id: "poss-l1-15",
    date: "2026-10-27",
    level: 1,
    category: "2nd-pl",
    categoryLabelFr: "2ème pers. pl (Votre / Vos)",
    targetCase: "Mianownik",
    caseLabelFr: "Nominatif",
    nounContext: "córka (nom féminin)",
    targetMeaning: "votre",
    sentenceBefore: "Gdzie studiuje ",
    sentenceAfter: " córka?",
    gapWord: "wasza",
    fullSentence: "Gdzie studiuje wasza córka?",
    translationFr: "Où étudie votre fille ?",
    ruleExplanation: "<strong>córka</strong> est féminin singulier au Nominatif. La forme pour 'votre' au féminin est <strong>wasza</strong>.",
    options: [
      { word: "wasza", isCorrect: true, note: "Féminin singulier" },
      { word: "wasz", isCorrect: false, note: "Masculin singulier" },
      { word: "wasze", isCorrect: false, note: "Neutre singulier" },
      { word: "waszej", isCorrect: false, note: "Génitif / Locatif" }
    ]
  },
  {
    id: "poss-l1-16",
    date: "2026-10-27",
    level: 1,
    category: "2nd-pl",
    categoryLabelFr: "2ème pers. pl (Votre / Vos)",
    targetCase: "Mianownik",
    caseLabelFr: "Nominatif",
    nounContext: "znajomi (nom viril pl)",
    targetMeaning: "vos",
    sentenceBefore: "",
    sentenceAfter: " znajomi już przyszli.",
    gapWord: "Wasi",
    fullSentence: "Wasi znajomi już przyszli.",
    translationFr: "Vos connaissances / amis sont déjà arrivés.",
    ruleExplanation: "<strong>znajomi</strong> est masculin viril pluriel. La forme pour 'vos' au pluriel viril est <strong>Wasi</strong>.",
    options: [
      { word: "Wasi", isCorrect: true, note: "Pluriel viril" },
      { word: "Wasze", isCorrect: false, note: "Pluriel non-viril" },
      { word: "Wasz", isCorrect: false, note: "Singulier masculin" },
      { word: "Waszych", isCorrect: false, note: "Génitif pluriel" }
    ]
  },
  {
    id: "poss-l1-17",
    date: "2026-10-27",
    level: 1,
    category: "3rd-invariable",
    categoryLabelFr: "3ème personne (Invariables : jego, jej, ich)",
    targetCase: "Mianownik",
    caseLabelFr: "Nominatif",
    nounContext: "ojciec (nom masculin) - possesseur masculin (lui)",
    targetMeaning: "son (à lui)",
    sentenceBefore: "To jest ",
    sentenceAfter: " ojciec.",
    gapWord: "jego",
    fullSentence: "To jest jego ojciec.",
    translationFr: "C'est son père (le père de lui).",
    ruleExplanation: "La 3ème personne du singulier avec un possesseur masculin ('lui / son') est <strong>jego</strong>. Règle d'or : <strong>jego est invariable</strong> et ne change jamais quel que soit le genre ou le cas !",
    options: [
      { word: "jego", isCorrect: true, note: "Invariable (possesseur masculin : son / sa / ses)" },
      { word: "jej", isCorrect: false, note: "Possesseur féminin (son / sa à elle)" },
      { word: "swój", isCorrect: false, note: "Réfléchi (quand le sujet possède l'objet)" },
      { word: "on", isCorrect: false, note: "Pronom personnel sujet 'il'" }
    ]
  },
  {
    id: "poss-l1-18",
    date: "2026-10-27",
    level: 1,
    category: "3rd-invariable",
    categoryLabelFr: "3ème personne (Invariables : jego, jej, ich)",
    targetCase: "Mianownik",
    caseLabelFr: "Nominatif",
    nounContext: "żona (nom féminin) - possesseur masculin (lui)",
    targetMeaning: "sa (à lui)",
    sentenceBefore: "To jest ",
    sentenceAfter: " żona.",
    gapWord: "jego",
    fullSentence: "To jest jego żona.",
    translationFr: "C'est sa femme (la femme de lui).",
    ruleExplanation: "Même si <strong>żona</strong> est un nom féminin, le possesseur est un homme, donc on utilise <strong>jego</strong> (qui reste invariable : pas de forme *jega ni *jegoja) !",
    options: [
      { word: "jego", isCorrect: true, note: "Invariable (possesseur masculin)" },
      { word: "jej", isCorrect: false, note: "Possesseur féminin" },
      { word: "jegoja", isCorrect: false, note: "Forme inexistante" },
      { word: "swoja", isCorrect: false, note: "Réfléchi" }
    ]
  },
  {
    id: "poss-l1-19",
    date: "2026-10-27",
    level: 1,
    category: "3rd-invariable",
    categoryLabelFr: "3ème personne (Invariables : jego, jej, ich)",
    targetCase: "Mianownik",
    caseLabelFr: "Nominatif",
    nounContext: "brat (nom masculin) - possesseur féminin (elle)",
    targetMeaning: "son (à elle)",
    sentenceBefore: "",
    sentenceAfter: " brat mieszka w Warszawie.",
    gapWord: "Jej",
    fullSentence: "Jej brat mieszka w Warszawie.",
    translationFr: "Son frère (à elle) habite à Varsovie.",
    ruleExplanation: "Quand le possesseur est une femme ('elle / son'), on emploie <strong>Jej</strong>. Tout comme <em>jego</em>, <strong>jej est invariable</strong> !",
    options: [
      { word: "Jej", isCorrect: true, note: "Invariable (possesseur féminin : son / sa / ses)" },
      { word: "Jego", isCorrect: false, note: "Possesseur masculin (à lui)" },
      { word: "Ich", isCorrect: false, note: "Possesseur pluriel (leur)" },
      { word: "Ona", isCorrect: false, note: "Pronom sujet 'elle'" }
    ]
  },
  {
    id: "poss-l1-20",
    date: "2026-10-27",
    level: 1,
    category: "3rd-invariable",
    categoryLabelFr: "3ème personne (Invariables : jego, jej, ich)",
    targetCase: "Mianownik",
    caseLabelFr: "Nominatif",
    nounContext: "dom (nom masculin) - possesseur pluriel (eux)",
    targetMeaning: "leur",
    sentenceBefore: "To jest ",
    sentenceAfter: " dom.",
    gapWord: "ich",
    fullSentence: "To jest ich dom.",
    translationFr: "C'est leur maison.",
    ruleExplanation: "Pour 'leur / leurs' (possesseur au pluriel : eux/elles), on utilise <strong>ich</strong>. Comme <em>jego</em> et <em>jej</em>, <strong>ich est 100% invariable</strong> !",
    options: [
      { word: "ich", isCorrect: true, note: "Invariable (leur / leurs)" },
      { word: "jego", isCorrect: false, note: "Possesseur singulier masculin (son / sa)" },
      { word: "jej", isCorrect: false, note: "Possesseur singulier féminin (son / sa)" },
      { word: "oni", isCorrect: false, note: "Pronom sujet 'ils'" }
    ]
  },
  {
    id: "poss-l1-21",
    date: "2026-10-27",
    level: 1,
    category: "demonstrative",
    categoryLabelFr: "Démonstratifs (Ce / Cette / Ces)",
    targetCase: "Mianownik",
    caseLabelFr: "Nominatif",
    nounContext: "pan (nom masculin)",
    targetMeaning: "ce",
    sentenceBefore: "",
    sentenceAfter: " pan jest lekarzem.",
    gapWord: "Ten",
    fullSentence: "Ten pan jest lekarzem.",
    translationFr: "Ce monsieur est médecin.",
    ruleExplanation: "Pour 'ce / cet' devant un nom masculin singulier au Nominatif, on emploie le démonstratif <strong>Ten</strong>.",
    options: [
      { word: "Ten", isCorrect: true, note: "Masculin singulier" },
      { word: "Ta", isCorrect: false, note: "Féminin singulier (cette)" },
      { word: "To", isCorrect: false, note: "Neutre singulier (ce / cela)" },
      { word: "Tej", isCorrect: false, note: "Génitif / Locatif féminin" }
    ]
  },
  {
    id: "poss-l1-22",
    date: "2026-10-27",
    level: 1,
    category: "demonstrative",
    categoryLabelFr: "Démonstratifs (Ce / Cette / Ces)",
    targetCase: "Mianownik",
    caseLabelFr: "Nominatif",
    nounContext: "restauracja (nom féminin)",
    targetMeaning: "cette",
    sentenceBefore: "",
    sentenceAfter: " restauracja jest bardzo dobra.",
    gapWord: "Ta",
    fullSentence: "Ta restauracja jest bardzo dobra.",
    translationFr: "Ce restaurant est très bon.",
    ruleExplanation: "<strong>restauracja</strong> est féminin singulier au Nominatif. Pour 'cette', on emploie <strong>Ta</strong>.",
    options: [
      { word: "Ta", isCorrect: true, note: "Féminin singulier (cette)" },
      { word: "Ten", isCorrect: false, note: "Masculin singulier (ce)" },
      { word: "To", isCorrect: false, note: "Neutre singulier" },
      { word: "Te", isCorrect: false, note: "Pluriel non-viril (ces)" }
    ]
  },
  {
    id: "poss-l1-23",
    date: "2026-10-27",
    level: 1,
    category: "demonstrative",
    categoryLabelFr: "Démonstratifs (Ce / Cette / Ces)",
    targetCase: "Mianownik",
    caseLabelFr: "Nominatif",
    nounContext: "miasto (nom neutre)",
    targetMeaning: "cette",
    sentenceBefore: "",
    sentenceAfter: " miasto jest piękne.",
    gapWord: "To",
    fullSentence: "To miasto jest piękne.",
    translationFr: "Cette ville est belle.",
    ruleExplanation: "<strong>miasto</strong> est neutre (se termine par <em>-o</em>). Le démonstratif neutre singulier au Nominatif est <strong>To</strong>.",
    options: [
      { word: "To", isCorrect: true, note: "Neutre singulier" },
      { word: "Ten", isCorrect: false, note: "Masculin singulier" },
      { word: "Ta", isCorrect: false, note: "Féminin singulier" },
      { word: "Te", isCorrect: false, note: "Pluriel non-viril" }
    ]
  },
  {
    id: "poss-l1-24",
    date: "2026-10-27",
    level: 1,
    category: "demonstrative",
    categoryLabelFr: "Démonstratifs (Ce / Cette / Ces)",
    targetCase: "Mianownik",
    caseLabelFr: "Nominatif",
    nounContext: "mężczyźni (nom viril pl)",
    targetMeaning: "ces",
    sentenceBefore: "",
    sentenceAfter: " mężczyźni pracują tutaj.",
    gapWord: "Ci",
    fullSentence: "Ci mężczyźni pracują tutaj.",
    translationFr: "Ces hommes travaillent ici.",
    ruleExplanation: "Au pluriel viril (groupe d'hommes), le démonstratif 'ces' prend la forme spéciale <strong>Ci</strong>.",
    options: [
      { word: "Ci", isCorrect: true, note: "Pluriel viril (hommes)" },
      { word: "Te", isCorrect: false, note: "Pluriel non-viril (femmes, choses)" },
      { word: "Ten", isCorrect: false, note: "Singulier masculin" },
      { word: "Tych", isCorrect: false, note: "Génitif pluriel" }
    ]
  },
  {
    id: "poss-l1-25",
    date: "2026-10-27",
    level: 1,
    category: "demonstrative",
    categoryLabelFr: "Démonstratifs (Ce / Cette / Ces)",
    targetCase: "Mianownik",
    caseLabelFr: "Nominatif",
    nounContext: "kobiety (nom non-viril pl)",
    targetMeaning: "ces",
    sentenceBefore: "",
    sentenceAfter: " kobiety to znane aktorki.",
    gapWord: "Te",
    fullSentence: "Te kobiety to znane aktorki.",
    translationFr: "Ces femmes sont des actrices connues.",
    ruleExplanation: "Au pluriel non-viril (femmes, enfants, animaux, objets), le démonstratif 'ces' prend la forme <strong>Te</strong>.",
    options: [
      { word: "Te", isCorrect: true, note: "Pluriel non-viril" },
      { word: "Ci", isCorrect: false, note: "Pluriel viril" },
      { word: "Ta", isCorrect: false, note: "Singulier féminin" },
      { word: "Tych", isCorrect: false, note: "Génitif pluriel" }
    ]
  },
  {
    id: "poss-l1-26",
    date: "2026-10-27",
    level: 1,
    category: "reflexive",
    categoryLabelFr: "Réfléchi (swój - le sien propre)",
    targetCase: "Mianownik",
    caseLabelFr: "Nominatif",
    nounContext: "gust (nom masculin)",
    targetMeaning: "son propre",
    sentenceBefore: "Każdy człowiek ma ",
    sentenceAfter: " własny gust.",
    gapWord: "swój",
    fullSentence: "Każdy człowiek ma swój własny gust.",
    translationFr: "Chaque homme a son propre goût.",
    ruleExplanation: "Lorsque l'objet possédé appartient au sujet de la phrase ('chacun a son propre...'), le polonais emploie le possessif réfléchi <strong>swój</strong> (féminin : <em>swoja</em>, neutre : <em>swoje</em>).",
    options: [
      { word: "swój", isCorrect: true, note: "Réfléchi masculin singulier" },
      { word: "jego", isCorrect: false, note: "Possesseur tiers (à un autre que le sujet)" },
      { word: "swoja", isCorrect: false, note: "Réfléchi féminin singulier" },
      { word: "swoim", isCorrect: false, note: "Instrumental singulier" }
    ]
  },
  {
    id: "poss-l1-27",
    date: "2026-10-29",
    level: 1,
    category: "1st-sg",
    categoryLabelFr: "1ère pers. sg (Mon / Ma / Mes)",
    targetCase: "Mianownik",
    caseLabelFr: "Nominatif",
    nounContext: "ojciec (nom masculin) - possesseur ja",
    targetMeaning: "mon",
    sentenceBefore: "Jestem pół Polką, pół Francuzką. Moja mama jest z Polski, a ",
    sentenceAfter: " ojciec z Francji.",
    gapWord: "mój",
    fullSentence: "Jestem pół Polką, pół Francuzką. Moja mama jest z Polski, a mój ojciec z Francji.",
    translationFr: "Je suis à moitié polonaise, à moitié française. Ma mère vient de Pologne, et mon père de France.",
    ruleExplanation: "Pour un possesseur à la 1ère personne du singulier (<em>ja</em>) avec un nom masculin au nominatif (<em>ojciec</em>), la forme requise est <strong>mój</strong>.",
    options: [
      {
        word: "mój",
        isCorrect: true,
        note: "Nominatif masculin singulier"
      },
      {
        word: "moja",
        isCorrect: false,
        note: "Nominatif féminin singulier (mama)"
      },
      {
        word: "moje",
        isCorrect: false,
        note: "Nominatif neutre singulier"
      },
      {
        word: "nasz",
        isCorrect: false,
        note: "1ère personne du pluriel (notre)"
      }
    ]
  },
  {
    id: "poss-l1-28",
    date: "2026-10-29",
    level: 1,
    category: "1st-sg",
    categoryLabelFr: "1ère pers. sg (Mon / Ma / Mes)",
    targetCase: "Mianownik",
    caseLabelFr: "Nominatif",
    nounContext: "mama (nom féminin) - possesseur ja",
    targetMeaning: "ma",
    sentenceBefore: "Jestem pół Polką, pół Francuzką. ",
    sentenceAfter: " mama jest z Polski, a mój ojciec z Francji.",
    gapWord: "Moja",
    fullSentence: "Jestem pół Polką, pół Francuzką. Moja mama jest z Polski, a mój ojciec z Francji.",
    translationFr: "Je suis à moitié polonaise, à moitié française. Ma mère vient de Pologne, et mon père de France.",
    ruleExplanation: "Pour un possesseur à la 1ère personne (<em>ja</em>) devant un nom féminin (<em>mama</em>), le possessif au nominatif s'accorde en <strong>moja</strong>.",
    options: [
      {
        word: "Moja",
        isCorrect: true,
        note: "Nominatif féminin singulier"
      },
      {
        word: "Mój",
        isCorrect: false,
        note: "Nominatif masculin singulier"
      },
      {
        word: "Moje",
        isCorrect: false,
        note: "Nominatif neutre singulier"
      },
      {
        word: "Nasza",
        isCorrect: false,
        note: "1ère personne du pluriel (notre)"
      }
    ]
  },
  {
    id: "poss-l1-29",
    date: "2026-10-29",
    level: 1,
    category: "3rd-invariable",
    categoryLabelFr: "3ème personne (Invariables : jego, jej, ich)",
    targetCase: "Mianownik",
    caseLabelFr: "Nominatif",
    nounContext: "siostra (nom féminin) - possesseur on (Piotr)",
    targetMeaning: "sa (à lui)",
    sentenceBefore: "On ma na imię Piotr. ",
    sentenceAfter: " siostra ma na imię Ania, a jego brat Michał.",
    gapWord: "Jego",
    fullSentence: "On ma na imię Piotr. Jego siostra ma na imię Ania, a jego brat Michał.",
    translationFr: "Il s'appelle Piotr. Sa sœur s'appelle Ania et son frère Michał.",
    ruleExplanation: "Le possesseur est masculin de 3ème personne (Piotr / on). Le possessif polonais correspondant est <strong>jego</strong>, totalement invariable quel que soit le genre du nom possédé (<em>jego siostra, jego brat</em>).",
    options: [
      {
        word: "Jego",
        isCorrect: true,
        note: "Invariable pour possesseur masculin (on)"
      },
      {
        word: "Jej",
        isCorrect: false,
        note: "Possesseur féminin (ona / à elle)"
      },
      {
        word: "Swój",
        isCorrect: false,
        note: "Réfléchi masculin"
      },
      {
        word: "Ich",
        isCorrect: false,
        note: "Possesseur pluriel (leur)"
      }
    ]
  },
  {
    id: "poss-l1-30",
    date: "2026-10-29",
    level: 1,
    category: "3rd-invariable",
    categoryLabelFr: "3ème personne (Invariables : jego, jej, ich)",
    targetCase: "Mianownik",
    caseLabelFr: "Nominatif",
    nounContext: "brat (nom masculin) - possesseur on (Piotr)",
    targetMeaning: "son (à lui)",
    sentenceBefore: "On ma na imię Piotr. Jego siostra ma na imię Ania, a ",
    sentenceAfter: " brat Michał.",
    gapWord: "jego",
    fullSentence: "On ma na imię Piotr. Jego siostra ma na imię Ania, a jego brat Michał.",
    translationFr: "Il s'appelle Piotr. Sa sœur s'appelle Ania et son frère Michał.",
    ruleExplanation: "Le possessif renvoie à Piotr (possesseur masculin de 3e personne). La forme invariable est <strong>jego</strong> : <em>jego brat</em>.",
    options: [
      {
        word: "jego",
        isCorrect: true,
        note: "Invariable pour possesseur masculin (on)"
      },
      {
        word: "jej",
        isCorrect: false,
        note: "Possesseur féminin (ona)"
      },
      {
        word: "twój",
        isCorrect: false,
        note: "2ème personne du singulier"
      },
      {
        word: "mój",
        isCorrect: false,
        note: "1ère personne du singulier"
      }
    ]
  },
  {
    id: "poss-l1-31",
    date: "2026-10-29",
    level: 1,
    category: "3rd-invariable",
    categoryLabelFr: "3ème personne (Invariables : jego, jej, ich)",
    targetCase: "Mianownik",
    caseLabelFr: "Nominatif",
    nounContext: "dzieci (nom pluriel non-viril) - possesseur pani Łukawska (elle)",
    targetMeaning: "ses (à elle)",
    sentenceBefore: "Na tej fotografii jest pani Łukawska. ",
    sentenceAfter: " dzieci mają na imię Julia i Adam.",
    gapWord: "Jej",
    fullSentence: "Na tej fotografii jest pani Łukawska. Jej dzieci mają na imię Julia i Adam.",
    translationFr: "Sur cette photo, il y a madame Łukawska. Ses enfants s'appellent Julia et Adam.",
    ruleExplanation: "Le possesseur est féminin singulier (<em>pani Łukawska / ona</em>). Le possessif correspondant est <strong>jej</strong>, strictement invariable : <em>jej dzieci</em> (ses enfants).",
    options: [
      {
        word: "Jej",
        isCorrect: true,
        note: "Invariable pour possesseur féminin (ona)"
      },
      {
        word: "Jego",
        isCorrect: false,
        note: "Possesseur masculin (on)"
      },
      {
        word: "Ich",
        isCorrect: false,
        note: "Possesseur pluriel (oni)"
      },
      {
        word: "Nasze",
        isCorrect: false,
        note: "1ère personne du pluriel (nos)"
      }
    ]
  },
  {
    id: "poss-l1-32",
    date: "2026-10-29",
    level: 1,
    category: "3rd-invariable",
    categoryLabelFr: "3ème personne (Invariables : jego, jej, ich)",
    targetCase: "Mianownik",
    caseLabelFr: "Nominatif",
    nounContext: "mąż (nom masculin) - possesseur pani Łukawska (elle)",
    targetMeaning: "son mari (à elle)",
    sentenceBefore: "Na fotografii jest pani Łukawska. A ten niski pan to ",
    sentenceAfter: " mąż Stefan.",
    gapWord: "jej",
    fullSentence: "Na fotografii jest pani Łukawska. A ten niski pan to jej mąż Stefan.",
    translationFr: "Sur la photo, il y a madame Łukawska. Et ce monsieur de petite taille est son mari Stefan.",
    ruleExplanation: "Puisque le possesseur est féminin (<em>ona / pani Łukawska</em>), on utilise l'invariable <strong>jej</strong>, même si <em>mąż</em> est un nom masculin : <em>jej mąż</em>.",
    options: [
      {
        word: "jej",
        isCorrect: true,
        note: "Invariable pour possesseur féminin (ona)"
      },
      {
        word: "jego",
        isCorrect: false,
        note: "Possesseur masculin (on)"
      },
      {
        word: "swój",
        isCorrect: false,
        note: "Réfléchi (inapproprié avec être démonstratif 'to...')"
      },
      {
        word: "wasz",
        isCorrect: false,
        note: "2ème personne du pluriel"
      }
    ]
  },
  {
    id: "poss-l1-33",
    date: "2026-10-29",
    level: 1,
    category: "2nd-sg",
    categoryLabelFr: "2ème pers. sg (Ton / Ta / Tes)",
    targetCase: "Mianownik",
    caseLabelFr: "Nominatif",
    nounContext: "długopis (nom masculin inanimé) - possesseur ty",
    targetMeaning: "ton",
    sentenceBefore: "Przepraszam, czy to ",
    sentenceAfter: " długopis?",
    gapWord: "twój",
    fullSentence: "Przepraszam, czy to twój długopis?",
    translationFr: "Pardon, est-ce votre / ton stylo ?",
    ruleExplanation: "Pour le possesseur à la 2ème personne du singulier (<em>ty</em>) avec un nom masculin au nominatif (<em>długopis</em>), la forme correcte est <strong>twój</strong>.",
    options: [
      {
        word: "twój",
        isCorrect: true,
        note: "Nominatif masculin singulier"
      },
      {
        word: "twoja",
        isCorrect: false,
        note: "Nominatif féminin singulier"
      },
      {
        word: "twoje",
        isCorrect: false,
        note: "Nominatif neutre singulier"
      },
      {
        word: "twoim",
        isCorrect: false,
        note: "Instrumental / Locatif"
      }
    ]
  },
  {
    id: "poss-l1-34",
    date: "2026-10-29",
    level: 1,
    category: "1st-pl",
    categoryLabelFr: "1ère pers. pl (Notre / Nos)",
    targetCase: "Mianownik",
    caseLabelFr: "Nominatif",
    nounContext: "autobus (nom masculin inanimé) - possesseur my",
    targetMeaning: "notre",
    sentenceBefore: "Czy to ",
    sentenceAfter: " autobus? Musimy jechać numerem 124.",
    gapWord: "nasz",
    fullSentence: "Czy to nasz autobus? Musimy jechać numerem 124.",
    translationFr: "Est-ce notre bus ? Nous devons prendre le numéro 124.",
    ruleExplanation: "Pour la 1ère personne du pluriel (<em>my</em>) devant un nom masculin singulier au nominatif (<em>autobus</em>), la forme est <strong>nasz</strong> (féminin: <em>nasza</em>, neutre: <em>nasze</em>).",
    options: [
      {
        word: "nasz",
        isCorrect: true,
        note: "Nominatif masculin singulier"
      },
      {
        word: "nasza",
        isCorrect: false,
        note: "Nominatif féminin singulier"
      },
      {
        word: "nasze",
        isCorrect: false,
        note: "Nominatif neutre singulier"
      },
      {
        word: "wasz",
        isCorrect: false,
        note: "2ème personne du pluriel (votre)"
      }
    ]
  },
  {
    id: "poss-l1-35",
    date: "2026-10-29",
    level: 1,
    category: "2nd-pl",
    categoryLabelFr: "2ème pers. pl (Votre / Vos)",
    targetCase: "Mianownik",
    caseLabelFr: "Nominatif",
    nounContext: "córka (nom féminin) - possesseur wy",
    targetMeaning: "votre",
    sentenceBefore: "Czy to ",
    sentenceAfter: " córka i wasz syn? Bardzo ładne dzieci.",
    gapWord: "wasza",
    fullSentence: "Czy to wasza córka i wasz syn? Bardzo ładne dzieci.",
    translationFr: "Est-ce votre fille et votre fils ? De très beaux enfants.",
    ruleExplanation: "Devant un nom féminin singulier au nominatif (<em>córka</em>), le possessif de 2ème personne du pluriel (<em>wy</em>) s'accorde en <strong>wasza</strong>.",
    options: [
      {
        word: "wasza",
        isCorrect: true,
        note: "Nominatif féminin singulier"
      },
      {
        word: "wasz",
        isCorrect: false,
        note: "Nominatif masculin singulier"
      },
      {
        word: "wasze",
        isCorrect: false,
        note: "Nominatif neutre singulier"
      },
      {
        word: "twoja",
        isCorrect: false,
        note: "2ème personne du singulier (ta fille)"
      }
    ]
  },
  {
    id: "poss-l1-36",
    date: "2026-10-29",
    level: 1,
    category: "2nd-pl",
    categoryLabelFr: "2ème pers. pl (Votre / Vos)",
    targetCase: "Mianownik",
    caseLabelFr: "Nominatif",
    nounContext: "syn (nom masculin animé) - possesseur wy",
    targetMeaning: "votre",
    sentenceBefore: "Czy to wasza córka i ",
    sentenceAfter: " syn? Bardzo ładne dzieci.",
    gapWord: "wasz",
    fullSentence: "Czy to wasza córka i wasz syn? Bardzo ładne dzieci.",
    translationFr: "Est-ce votre fille et votre fils ? De très beaux enfants.",
    ruleExplanation: "Devant un nom masculin singulier au nominatif (<em>syn</em>), le possessif de 2ème personne du pluriel (<em>wy</em>) prend la forme <strong>wasz</strong>.",
    options: [
      {
        word: "wasz",
        isCorrect: true,
        note: "Nominatif masculin singulier"
      },
      {
        word: "wasza",
        isCorrect: false,
        note: "Nominatif féminin singulier"
      },
      {
        word: "wasze",
        isCorrect: false,
        note: "Nominatif neutre singulier"
      },
      {
        word: "twój",
        isCorrect: false,
        note: "2ème personne du singulier (ton fils)"
      }
    ]
  },
  {
    id: "poss-l1-37",
    date: "2026-10-29",
    level: 1,
    category: "3rd-invariable",
    categoryLabelFr: "3ème personne (Invariables : jego, jej, ich)",
    targetCase: "Mianownik",
    caseLabelFr: "Nominatif",
    nounContext: "nauczycielka (nom féminin) - possesseurs Filip i Tomasz (oni)",
    targetMeaning: "leur",
    sentenceBefore: "Filip i Tomasz są bardzo sympatyczni. ",
    sentenceAfter: " nauczycielka bardzo ich lubi.",
    gapWord: "Ich",
    fullSentence: "Filip i Tomasz są bardzo sympatyczni. Ich nauczycielka bardzo ich lubi.",
    translationFr: "Filip et Tomasz sont très sympathiques. Leur institutrice les aime beaucoup.",
    ruleExplanation: "Pour un possesseur au pluriel de 3ème personne (<em>oni / one</em>), le possessif est l'invariable <strong>ich</strong> (leur / leurs) quel que soit le genre ou le nombre du nom possédé.",
    options: [
      {
        word: "Ich",
        isCorrect: true,
        note: "Invariable pour possesseur pluriel (oni / one)"
      },
      {
        word: "Jego",
        isCorrect: false,
        note: "Possesseur singulier masculin (il)"
      },
      {
        word: "Jej",
        isCorrect: false,
        note: "Possesseur singulier féminin (elle)"
      },
      {
        word: "Nasza",
        isCorrect: false,
        note: "1ère personne du pluriel (notre)"
      }
    ]
  },

  // ------------------------------------------
  // NIVEAU 2 : DÉCLINAISONS & CAS (BIERNIK, NARZĘDNIK, DOPEŁNIACZ, MIEJSCOWNIK)
  // ------------------------------------------
  {
    id: "poss-l2-1",
    date: "2026-10-27",
    level: 2,
    category: "2nd-sg",
    categoryLabelFr: "2ème pers. sg (Ton / Ta / Tes)",
    targetCase: "Biernik",
    caseLabelFr: "Accusatif (Biernik)",
    nounContext: "brat (nom masculin animé, COD)",
    targetMeaning: "ton",
    sentenceBefore: "Znam ",
    sentenceAfter: " brata od wielu lat.",
    gapWord: "twojego",
    fullSentence: "Znam twojego brata od wielu lat.",
    translationFr: "Je connais ton frère depuis de nombreuses années.",
    ruleExplanation: "Le verbe <em>znać</em> demande l'<strong>Accusatif (Biernik)</strong>. Pour un masculin animé (personne), la terminaison de l'adjectif/possessif est <strong>-ego</strong> : <em>twojego brata</em> (comme le génitif).",
    options: [
      { word: "twojego", isCorrect: true, note: "Accusatif masculin animé (-ego)" },
      { word: "twój", isCorrect: false, note: "Nominatif / Accusatif inanimé" },
      { word: "twoim", isCorrect: false, note: "Instrumental / Locatif (-im)" },
      { word: "twojemu", isCorrect: false, note: "Datif (-emu)" }
    ]
  },
  {
    id: "poss-l2-2",
    date: "2026-10-27",
    level: 2,
    category: "demonstrative",
    categoryLabelFr: "Démonstratifs (Ce / Cette / Ces)",
    targetCase: "Biernik",
    caseLabelFr: "Accusatif (Biernik)",
    nounContext: "stół (nom masculin inanimé, COD)",
    targetMeaning: "cette",
    sentenceBefore: "Kupuję ",
    sentenceAfter: " duży stół do jadalni.",
    gapWord: "ten",
    fullSentence: "Kupuję ten duży stół do jadalni.",
    translationFr: "J'achète cette grande table pour la salle à manger.",
    ruleExplanation: "À l'<strong>Accusatif</strong>, un nom masculin inanimé (objet) et son démonstratif restent identiques au Nominatif ! On utilise donc <strong>ten</strong> (et non *tego).",
    options: [
      { word: "ten", isCorrect: true, note: "Accusatif masculin inanimé (= Nominatif)" },
      { word: "tego", isCorrect: false, note: "Accusatif masculin animé (-ego)" },
      { word: "tym", isCorrect: false, note: "Instrumental / Locatif" },
      { word: "to", isCorrect: false, note: "Neutre singulier" }
    ]
  },
  {
    id: "poss-l2-3",
    date: "2026-10-27",
    level: 2,
    category: "1st-sg",
    categoryLabelFr: "1ère pers. sg (Mon / Ma / Mes)",
    targetCase: "Biernik",
    caseLabelFr: "Accusatif (Biernik)",
    nounContext: "mama (nom féminin, COD)",
    targetMeaning: "ma",
    sentenceBefore: "Bardzo kocham ",
    sentenceAfter: " mamę.",
    gapWord: "moją",
    fullSentence: "Bardzo kocham moją mamę.",
    translationFr: "J'aime beaucoup ma maman.",
    ruleExplanation: "À l'<strong>Accusatif (Biernik)</strong>, un possessif féminin prend la terminaison <strong>-ą</strong> : <em>moja &rarr; moją</em> (qui s'accorde avec <em>mamę</em>).",
    options: [
      { word: "moją", isCorrect: true, note: "Accusatif féminin (-ą)" },
      { word: "moja", isCorrect: false, note: "Nominatif féminin (-a)" },
      { word: "mojej", isCorrect: false, note: "Génitif / Locatif féminin (-ej)" },
      { word: "moim", isCorrect: false, note: "Instrumental masculin" }
    ]
  },
  {
    id: "poss-l2-4",
    date: "2026-10-27",
    level: 2,
    category: "demonstrative",
    categoryLabelFr: "Démonstratifs (Ce / Cette / Ces)",
    targetCase: "Biernik",
    caseLabelFr: "Accusatif (Biernik)",
    nounContext: "książka (nom féminin, COD)",
    targetMeaning: "ce",
    sentenceBefore: "Czytam właśnie ",
    sentenceAfter: " nową książkę.",
    gapWord: "tę",
    fullSentence: "Czytam właśnie tę nową książkę.",
    translationFr: "Je lis justement ce nouveau livre.",
    ruleExplanation: "À l'<strong>Accusatif féminin</strong>, la forme standard soutenue du démonstratif <em>ta</em> est <strong>tę</strong> (ou couramment <em>tą</em>), en accord avec <em>książkę</em>.",
    options: [
      { word: "tę", isCorrect: true, note: "Accusatif féminin régulier (ta &rarr; tę)" },
      { word: "ta", isCorrect: false, note: "Nominatif féminin" },
      { word: "tej", isCorrect: false, note: "Génitif / Datif / Locatif féminin" },
      { word: "tym", isCorrect: false, note: "Instrumental masculin" }
    ]
  },
  {
    id: "poss-l2-5",
    date: "2026-10-27",
    level: 2,
    category: "reflexive",
    categoryLabelFr: "Réfléchi (swój - le sien propre)",
    targetCase: "Biernik",
    caseLabelFr: "Accusatif (Biernik)",
    nounContext: "dziewczyna (nom féminin, COD du sujet Adam)",
    targetMeaning: "sa (sa propre)",
    sentenceBefore: "Adam bardzo kocha ",
    sentenceAfter: " dziewczynę.",
    gapWord: "swoją",
    fullSentence: "Adam bardzo kocha swoją dziewczynę.",
    translationFr: "Adam aime beaucoup sa copine.",
    ruleExplanation: "Le sujet Adam aime sa <em>propre</em> copine. On utilise le réfléchi <strong>swoją</strong> à l'Accusatif féminin (-ą). Si on disait <em>jego dziewczynę</em>, cela signifierait qu'Adam aime la copine d'un autre homme !",
    options: [
      { word: "swoją", isCorrect: true, note: "Réfléchi accusatif féminin (sa propre copine)" },
      { word: "jego", isCorrect: false, note: "Indique la copine d'un AUTRE homme" },
      { word: "swojej", isCorrect: false, note: "Génitif / Locatif féminin" },
      { word: "swoja", isCorrect: false, note: "Nominatif féminin" }
    ]
  },
  {
    id: "poss-l2-6",
    date: "2026-10-27",
    level: 2,
    category: "1st-sg",
    categoryLabelFr: "1ère pers. sg (Mon / Ma / Mes)",
    targetCase: "Narzędnik",
    caseLabelFr: "Instrumental (Narzędnik)",
    nounContext: "brat (nom masculin avec la préposition z)",
    targetMeaning: "mon",
    sentenceBefore: "Idę na spacer z ",
    sentenceAfter: " bratem.",
    gapWord: "moim",
    fullSentence: "Idę na spacer z moim bratem.",
    translationFr: "Je vais me promener avec mon frère.",
    ruleExplanation: "La préposition <strong>z</strong> (avec) exige l'<strong>Instrumental (Narzędnik)</strong>. Pour un possessif masculin singulier, la terminaison est <strong>-im</strong> : <em>z moim bratem</em>.",
    options: [
      { word: "moim", isCorrect: true, note: "Instrumental masculin singulier (-im)" },
      { word: "mój", isCorrect: false, note: "Nominatif masculin" },
      { word: "mojego", isCorrect: false, note: "Génitif / Accusatif animé" },
      { word: "moją", isCorrect: false, note: "Instrumental féminin" }
    ]
  },
  {
    id: "poss-l2-7",
    date: "2026-10-27",
    level: 2,
    category: "2nd-sg",
    categoryLabelFr: "2ème pers. sg (Ton / Ta / Tes)",
    targetCase: "Narzędnik",
    caseLabelFr: "Instrumental (Narzędnik)",
    nounContext: "mama (nom féminin avec z)",
    targetMeaning: "ta",
    sentenceBefore: "Chętnie porozmawiam z ",
    sentenceAfter: " mamą.",
    gapWord: "twoją",
    fullSentence: "Chętnie porozmawiam z twoją mamą.",
    translationFr: "Je parlerai volontiers avec ta maman.",
    ruleExplanation: "À l'<strong>Instrumental (Narzędnik)</strong> après <em>z</em>, le féminin se termine par <strong>-ą</strong> tant pour le possessif que pour le nom : <em>z twoją mamą</em>.",
    options: [
      { word: "twoją", isCorrect: true, note: "Instrumental féminin (-ą)" },
      { word: "twoja", isCorrect: false, note: "Nominatif féminin" },
      { word: "twojej", isCorrect: false, note: "Génitif / Locatif féminin" },
      { word: "twoim", isCorrect: false, note: "Instrumental masculin" }
    ]
  },
  {
    id: "poss-l2-8",
    date: "2026-10-27",
    level: 2,
    category: "demonstrative",
    categoryLabelFr: "Démonstratifs (Ce / Cette / Ces)",
    targetCase: "Narzędnik",
    caseLabelFr: "Instrumental (Narzędnik)",
    nounContext: "pan (nom masculin avec z)",
    targetMeaning: "ce",
    sentenceBefore: "Właśnie rozmawiam z ",
    sentenceAfter: " panem.",
    gapWord: "tym",
    fullSentence: "Właśnie rozmawiam z tym panem.",
    translationFr: "Je parle justement avec ce monsieur.",
    ruleExplanation: "À l'<strong>Instrumental masculin</strong>, le démonstratif <em>ten</em> devient <strong>tym</strong> (z tym panem).",
    options: [
      { word: "tym", isCorrect: true, note: "Instrumental masculin (-ym)" },
      { word: "ten", isCorrect: false, note: "Nominatif masculin" },
      { word: "tego", isCorrect: false, note: "Génitif masculin" },
      { word: "tej", isCorrect: false, note: "Génitif / Locatif féminin" }
    ]
  },
  {
    id: "poss-l2-9",
    date: "2026-10-27",
    level: 2,
    category: "demonstrative",
    categoryLabelFr: "Démonstratifs (Ce / Cette / Ces)",
    targetCase: "Narzędnik",
    caseLabelFr: "Instrumental (Narzędnik)",
    nounContext: "dziewczyna (nom féminin avec z)",
    targetMeaning: "cette",
    sentenceBefore: "Podróżuję po Europie z ",
    sentenceAfter: " miłą dziewczyną.",
    gapWord: "tą",
    fullSentence: "Podróżuję po Europie z tą miłą dziewczyną.",
    translationFr: "Je voyage en Europe avec cette fille sympathique.",
    ruleExplanation: "À l'<strong>Instrumental féminin</strong>, le démonstratif <em>ta</em> devient <strong>tą</strong> (avec la désinence nasale <em>-ą</em> : <em>z tą dziewczyną</em>).",
    options: [
      { word: "tą", isCorrect: true, note: "Instrumental féminin (-ą)" },
      { word: "ta", isCorrect: false, note: "Nominatif féminin" },
      { word: "tej", isCorrect: false, note: "Génitif / Locatif féminin" },
      { word: "tym", isCorrect: false, note: "Instrumental masculin" }
    ]
  },
  {
    id: "poss-l2-10",
    date: "2026-10-27",
    level: 2,
    category: "1st-pl",
    categoryLabelFr: "1ère pers. pl (Notre / Nos)",
    targetCase: "Narzędnik",
    caseLabelFr: "Instrumental (Narzędnik)",
    nounContext: "dziecko (nom neutre avec z)",
    targetMeaning: "notre",
    sentenceBefore: "Idziemy do parku z ",
    sentenceAfter: " dzieckiem.",
    gapWord: "naszym",
    fullSentence: "Idziemy do parku z naszym dzieckiem.",
    translationFr: "Nous allons au parc avec notre enfant.",
    ruleExplanation: "À l'<strong>Instrumental</strong>, le masculin et le neutre partagent la même terminaison <strong>-im / -ym</strong> : <em>z naszym dzieckiem</em>.",
    options: [
      { word: "naszym", isCorrect: true, note: "Instrumental neutre & masculin (-ym)" },
      { word: "nasze", isCorrect: false, note: "Nominatif neutre" },
      { word: "naszego", isCorrect: false, note: "Génitif neutre" },
      { word: "naszą", isCorrect: false, note: "Instrumental féminin" }
    ]
  },
  {
    id: "poss-l2-11",
    date: "2026-10-27",
    level: 2,
    category: "1st-sg",
    categoryLabelFr: "1ère pers. sg (Mon / Ma / Mes)",
    targetCase: "Narzędnik",
    caseLabelFr: "Instrumental (Narzędnik)",
    nounContext: "przyjaciele (nom pluriel avec z)",
    targetMeaning: "mes",
    sentenceBefore: "W weekend spotykam się z ",
    sentenceAfter: " przyjaciółmi.",
    gapWord: "moimi",
    fullSentence: "W weekend spotykam się z moimi przyjaciółmi.",
    translationFr: "Ce week-end je vois mes amis.",
    ruleExplanation: "À l'<strong>Instrumental pluriel</strong>, la terminaison est universellement <strong>-ymi / -imi</strong> : <em>z moimi przyjaciółmi</em>.",
    options: [
      { word: "moimi", isCorrect: true, note: "Instrumental pluriel (-imi)" },
      { word: "moi", isCorrect: false, note: "Nominatif pluriel viril" },
      { word: "moich", isCorrect: false, note: "Génitif / Locatif pluriel" },
      { word: "moim", isCorrect: false, note: "Instrumental singulier masculin" }
    ]
  },
  {
    id: "poss-l2-12",
    date: "2026-10-27",
    level: 2,
    category: "3rd-invariable",
    categoryLabelFr: "3ème personne (Invariables : jego, jej, ich)",
    targetCase: "Narzędnik",
    caseLabelFr: "Instrumental (Narzędnik)",
    nounContext: "siostra (nom féminin avec z) - possesseur masculin (lui)",
    targetMeaning: "sa (à lui)",
    sentenceBefore: "Idę do kina z ",
    sentenceAfter: " siostrą.",
    gapWord: "jego",
    fullSentence: "Idę do kina z jego siostrą.",
    translationFr: "Je vais au cinéma avec sa sœur (la sœur de lui).",
    ruleExplanation: "Même après la préposition <em>z</em> et avec un nom à l'Instrumental (<em>siostrą</em>), le possessif de la 3e personne reste <strong>jego</strong> car <strong>les possessifs de 3e personne sont invariables</strong> !",
    options: [
      { word: "jego", isCorrect: true, note: "Invariable (ne prend jamais -m ni -ą)" },
      { word: "jegą", isCorrect: false, note: "Forme inexistante" },
      { word: "swoją", isCorrect: false, note: "Réfléchi (impliquerait ma propre sœur)" },
      { word: "jej", isCorrect: false, note: "Possesseur féminin" }
    ]
  },
  {
    id: "poss-l2-13",
    date: "2026-10-27",
    level: 2,
    category: "reflexive",
    categoryLabelFr: "Réfléchi (swój - le sien propre)",
    targetCase: "Narzędnik",
    caseLabelFr: "Instrumental (Narzędnik)",
    nounContext: "szef (nom masculin avec z) - sujet Piotr",
    targetMeaning: "son (son propre)",
    sentenceBefore: "Piotr rozmawia ze ",
    sentenceAfter: " szefem.",
    gapWord: "swoim",
    fullSentence: "Piotr rozmawia ze swoim szefem.",
    translationFr: "Piotr discute avec son patron.",
    ruleExplanation: "Piotr parle avec son <em>propre</em> patron. À l'Instrumental masculin, le réfléchi <em>swój</em> prend la terminaison <strong>-im</strong> : <em>ze swoim szefem</em>.",
    options: [
      { word: "swoim", isCorrect: true, note: "Instrumental réfléchi masculin (-im)" },
      { word: "swój", isCorrect: false, note: "Nominatif masculin" },
      { word: "jego", isCorrect: false, note: "Signifierait le patron d'un autre homme" },
      { word: "swojego", isCorrect: false, note: "Génitif masculin" }
    ]
  },
  {
    id: "poss-l2-14",
    date: "2026-10-27",
    level: 2,
    category: "2nd-sg",
    categoryLabelFr: "2ème pers. sg (Ton / Ta / Tes)",
    targetCase: "Dopełniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    nounContext: "numer (nom masculin inanimé sous la négation)",
    targetMeaning: "ton",
    sentenceBefore: "Niestety nie mam ",
    sentenceAfter: " numeru telefonu.",
    gapWord: "twojego",
    fullSentence: "Niestety nie mam twojego numeru telefonu.",
    translationFr: "Malheureusement je n'ai pas ton numéro de téléphone.",
    ruleExplanation: "Sous la <strong>négation (nie mam)</strong>, le COD passe au <strong>Génitif (Dopełniacz)</strong>. L'adjectif/possessif masculin singulier prend obligatoirement la désinence <strong>-ego</strong> : <em>twojego numeru</em>.",
    options: [
      { word: "twojego", isCorrect: true, note: "Génitif masculin singulier (-ego)" },
      { word: "twój", isCorrect: false, note: "Nominatif (forme affirmative)" },
      { word: "twoim", isCorrect: false, note: "Instrumental / Locatif" },
      { word: "twojemu", isCorrect: false, note: "Datif" }
    ]
  },
  {
    id: "poss-l2-15",
    date: "2026-10-27",
    level: 2,
    category: "1st-sg",
    categoryLabelFr: "1ère pers. sg (Mon / Ma / Mes)",
    targetCase: "Dopełniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    nounContext: "torebka (nom féminin après le verbe szukać)",
    targetMeaning: "ma",
    sentenceBefore: "Gdzie ona jest? Szukam ",
    sentenceAfter: " torebki.",
    gapWord: "mojej",
    fullSentence: "Gdzie ona jest? Szukam mojej torebki.",
    translationFr: "Où est-il ? Je cherche mon sac à main.",
    ruleExplanation: "Le verbe <strong>szukać</strong> (chercher) régit toujours le <strong>Génitif (Dopełniacz)</strong>. Au féminin singulier, le possessif se termine par <strong>-ej</strong> : <em>mojej torebki</em>.",
    options: [
      { word: "mojej", isCorrect: true, note: "Génitif féminin singulier (-ej)" },
      { word: "moją", isCorrect: false, note: "Accusatif / Instrumental féminin (-ą)" },
      { word: "moja", isCorrect: false, note: "Nominatif féminin" },
      { word: "moim", isCorrect: false, note: "Instrumental masculin" }
    ]
  },
  {
    id: "poss-l2-16",
    date: "2026-10-27",
    level: 2,
    category: "demonstrative",
    categoryLabelFr: "Démonstratifs (Ce / Cette / Ces)",
    targetCase: "Dopełniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    nounContext: "pani (nom féminin de possession : 'de cette dame')",
    targetMeaning: "cette",
    sentenceBefore: "To jest samochód ",
    sentenceAfter: " pani.",
    gapWord: "tej",
    fullSentence: "To jest samochód tej pani.",
    translationFr: "C'est la voiture de cette dame.",
    ruleExplanation: "La possession ('de...') se traduit par le <strong>Génitif (Dopełniacz)</strong>. Le démonstratif féminin <em>ta</em> devient <strong>tej</strong> au Génitif (<em>samochód tej pani</em>). C'est exactement cette forme <strong>tej</strong> qui pose souvent question !",
    options: [
      { word: "tej", isCorrect: true, note: "Génitif féminin singulier (ta &rarr; tej)" },
      { word: "ta", isCorrect: false, note: "Nominatif féminin" },
      { word: "tą", isCorrect: false, note: "Instrumental féminin" },
      { word: "tego", isCorrect: false, note: "Génitif masculin" }
    ]
  },
  {
    id: "poss-l2-17",
    date: "2026-10-27",
    level: 2,
    category: "demonstrative",
    categoryLabelFr: "Démonstratifs (Ce / Cette / Ces)",
    targetCase: "Dopełniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    nounContext: "człowiek (nom masculin sous la négation)",
    targetMeaning: "ce",
    sentenceBefore: "Zupełnie nie znam ",
    sentenceAfter: " człowieka.",
    gapWord: "tego",
    fullSentence: "Zupełnie nie znam tego człowieka.",
    translationFr: "Je ne connais absolument pas cet homme.",
    ruleExplanation: "Sous la négation (<em>nie znam</em>), le COD masculin passe au Génitif. Le démonstratif <em>ten</em> devient <strong>tego</strong> (<em>tego człowieka</em>).",
    options: [
      { word: "tego", isCorrect: true, note: "Génitif masculin singulier (ten &rarr; tego)" },
      { word: "ten", isCorrect: false, note: "Nominatif masculin" },
      { word: "tym", isCorrect: false, note: "Instrumental / Locatif" },
      { word: "tej", isCorrect: false, note: "Génitif féminin" }
    ]
  },
  {
    id: "poss-l2-18",
    date: "2026-10-27",
    level: 2,
    category: "1st-pl",
    categoryLabelFr: "1ère pers. pl (Notre / Nos)",
    targetCase: "Dopełniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    nounContext: "dziecko (nom neutre après dla)",
    targetMeaning: "notre",
    sentenceBefore: "To jest piękny prezent dla ",
    sentenceAfter: " dziecka.",
    gapWord: "naszego",
    fullSentence: "To jest piękny prezent dla naszego dziecka.",
    translationFr: "C'est un beau cadeau pour notre enfant.",
    ruleExplanation: "La préposition <strong>dla</strong> (pour) régit le <strong>Génitif (Dopełniacz)</strong>. Au neutre singulier, la terminaison est <strong>-ego</strong> : <em>naszego dziecka</em>.",
    options: [
      { word: "naszego", isCorrect: true, note: "Génitif neutre singulier (-ego)" },
      { word: "nasze", isCorrect: false, note: "Nominatif / Accusatif neutre" },
      { word: "naszym", isCorrect: false, note: "Instrumental / Locatif" },
      { word: "naszej", isCorrect: false, note: "Génitif féminin" }
    ]
  },
  {
    id: "poss-l2-19",
    date: "2026-10-27",
    level: 2,
    category: "2nd-sg",
    categoryLabelFr: "2ème pers. sg (Ton / Ta / Tes)",
    targetCase: "Dopełniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    nounContext: "pomoc (nom féminin après bez)",
    targetMeaning: "ta",
    sentenceBefore: "Nie dam rady bez ",
    sentenceAfter: " pomocy.",
    gapWord: "twojej",
    fullSentence: "Nie dam rady bez twojej pomocy.",
    translationFr: "Je n'y arriverai pas sans ton aide.",
    ruleExplanation: "La préposition <strong>bez</strong> (sans) exige le <strong>Génitif</strong>. Au féminin singulier, on a <strong>twojej pomocy</strong> (désinence <strong>-ej</strong>).",
    options: [
      { word: "twojej", isCorrect: true, note: "Génitif féminin (-ej)" },
      { word: "twoją", isCorrect: false, note: "Accusatif / Instrumental" },
      { word: "twoja", isCorrect: false, note: "Nominatif" },
      { word: "twoim", isCorrect: false, note: "Instrumental masculin" }
    ]
  },
  {
    id: "poss-l2-20",
    date: "2026-10-27",
    level: 2,
    category: "3rd-invariable",
    categoryLabelFr: "3ème personne (Invariables : jego, jej, ich)",
    targetCase: "Dopełniacz",
    caseLabelFr: "Génitif (Dopełniacz)",
    nounContext: "ojciec (nom masculin après nie ma)",
    targetMeaning: "leur",
    sentenceBefore: "W domu nie ma dziś ",
    sentenceAfter: " ojca.",
    gapWord: "ich",
    fullSentence: "W domu nie ma dziś ich ojca.",
    translationFr: "Aujourd'hui, leur père n'est pas à la maison.",
    ruleExplanation: "Même après <em>nie ma</em> (qui commande le Génitif : <em>ojca</em>), le possessif pluriel <strong>ich</strong> reste rigoureusement <strong>inchangé (invariable)</strong> !",
    options: [
      { word: "ich", isCorrect: true, note: "Invariable (ne prend pas -ego)" },
      { word: "ichego", isCorrect: false, note: "Forme inexistante" },
      { word: "jego", isCorrect: false, note: "Possesseur singulier (son/sa)" },
      { word: "ichnego", isCorrect: false, note: "Forme familière / incorrecte" }
    ]
  },
  {
    id: "poss-l2-21",
    date: "2026-10-27",
    level: 2,
    category: "1st-sg",
    categoryLabelFr: "1ère pers. sg (Mon / Ma / Mes)",
    targetCase: "Miejscownik",
    caseLabelFr: "Locatif (Miejscownik)",
    nounContext: "pokój (nom masculin de lieu avec w)",
    targetMeaning: "mon",
    sentenceBefore: "Uczę się w ",
    sentenceAfter: " pokoju.",
    gapWord: "moim",
    fullSentence: "Uczę się w moim pokoju.",
    translationFr: "J'étudie dans ma chambre.",
    ruleExplanation: "Pour indiquer le lieu où l'on est avec la préposition <strong>w</strong> (dans), on emploie le <strong>Locatif (Miejscownik)</strong>. Pour un possessif masculin, la désinence est <strong>-im</strong> : <em>w moim pokoju</em>.",
    options: [
      { word: "moim", isCorrect: true, note: "Locatif masculin singulier (-im)" },
      { word: "mój", isCorrect: false, note: "Nominatif masculin" },
      { word: "mojego", isCorrect: false, note: "Génitif masculin" },
      { word: "mojej", isCorrect: false, note: "Locatif féminin" }
    ]
  },
  {
    id: "poss-l2-22",
    date: "2026-10-27",
    level: 2,
    category: "demonstrative",
    categoryLabelFr: "Démonstratifs (Ce / Cette / Ces)",
    targetCase: "Miejscownik",
    caseLabelFr: "Locatif (Miejscownik)",
    nounContext: "kawiarnia (nom féminin de lieu avec w)",
    targetMeaning: "cette",
    sentenceBefore: "Spotkajmy się w ",
    sentenceAfter: " kawiarni.",
    gapWord: "tej",
    fullSentence: "Spotkajmy się w tej kawiarni.",
    translationFr: "Retrouvons-nous dans ce café.",
    ruleExplanation: "Au <strong>Locatif féminin</strong> après <em>w</em>, le démonstratif <em>ta</em> devient <strong>tej</strong> (<em>w tej kawiarni</em>). Retenez cette règle essentielle : le féminin singulier prend <strong>-ej</strong> au Génitif, au Datif et au Locatif !",
    options: [
      { word: "tej", isCorrect: true, note: "Locatif féminin singulier (ta &rarr; tej)" },
      { word: "ta", isCorrect: false, note: "Nominatif féminin" },
      { word: "tą", isCorrect: false, note: "Instrumental féminin" },
      { word: "tym", isCorrect: false, note: "Locatif masculin" }
    ]
  },
  {
    id: "poss-l2-23",
    date: "2026-10-27",
    level: 2,
    category: "demonstrative",
    categoryLabelFr: "Démonstratifs (Ce / Cette / Ces)",
    targetCase: "Miejscownik",
    caseLabelFr: "Locatif (Miejscownik)",
    nounContext: "rok (nom masculin de temps avec w)",
    targetMeaning: "cette",
    sentenceBefore: "W ",
    sentenceAfter: " roku planuję wyjazd do Polski.",
    gapWord: "tym",
    fullSentence: "W tym roku planuję wyjazd do Polski.",
    translationFr: "Cette année, je prévois un voyage en Pologne.",
    ruleExplanation: "Pour dire 'cette année' (en cette année), le polonais utilise le <strong>Locatif masculin</strong> : <em>W tym roku</em> (ten &rarr; tym).",
    options: [
      { word: "tym", isCorrect: true, note: "Locatif masculin singulier (ten &rarr; tym)" },
      { word: "ten", isCorrect: false, note: "Nominatif masculin" },
      { word: "tego", isCorrect: false, note: "Génitif masculin" },
      { word: "tej", isCorrect: false, note: "Locatif féminin" }
    ]
  },
  {
    id: "poss-l2-24",
    date: "2026-10-27",
    level: 2,
    category: "1st-pl",
    categoryLabelFr: "1ère pers. pl (Notre / Nos)",
    targetCase: "Miejscownik",
    caseLabelFr: "Locatif (Miejscownik)",
    nounContext: "przyszłość (nom féminin après o)",
    targetMeaning: "notre",
    sentenceBefore: "Często myślę o ",
    sentenceAfter: " wspólnej przyszłości.",
    gapWord: "naszej",
    fullSentence: "Często myślę o naszej wspólnej przyszłości.",
    translationFr: "Je pense souvent à notre avenir commun.",
    ruleExplanation: "La préposition <strong>o</strong> (au sujet de / à propos de) régit le <strong>Locatif (Miejscownik)</strong>. Au féminin singulier, on a <strong>naszej</strong> (terminaison <strong>-ej</strong>).",
    options: [
      { word: "naszej", isCorrect: true, note: "Locatif féminin singulier (-ej)" },
      { word: "naszą", isCorrect: false, note: "Instrumental / Accusatif" },
      { word: "nasza", isCorrect: false, note: "Nominatif" },
      { word: "naszym", isCorrect: false, note: "Locatif masculin" }
    ]
  },
  {
    id: "poss-l2-25",
    date: "2026-10-27",
    level: 2,
    category: "3rd-invariable",
    categoryLabelFr: "3ème personne (Invariables : jego, jej, ich)",
    targetCase: "Miejscownik",
    caseLabelFr: "Locatif (Miejscownik)",
    nounContext: "dom (nom masculin de lieu avec w) - possesseur féminin (elle)",
    targetMeaning: "sa (à elle)",
    sentenceBefore: "Byliśmy wczoraj w ",
    sentenceAfter: " domu.",
    gapWord: "jej",
    fullSentence: "Byliśmy wczoraj w jej domu.",
    translationFr: "Nous étions hier dans sa maison (chez elle).",
    ruleExplanation: "Même au Locatif avec la préposition <em>w</em> (<em>w domu</em>), le possessif féminin de 3ème personne reste <strong>jej</strong>, car il est totalement <strong>invariable</strong> !",
    options: [
      { word: "jej", isCorrect: true, note: "Invariable (possesseur féminin)" },
      { word: "jego", isCorrect: false, note: "Possesseur masculin (à lui)" },
      { word: "swoim", isCorrect: false, note: "Réfléchi masculin (notre propre maison)" },
      { word: "ona", isCorrect: false, note: "Pronom sujet" }
    ]
  },
  {
    id: "poss-l1-38",
    date: "2026-11-03",
    level: 1,
    category: "1st-sg",
    categoryLabelFr: "1ère pers. sg (Mon / Ma / Mes)",
    targetCase: "Mianownik",
    caseLabelFr: "Nominatif",
    nounContext: "siostra (nom féminin) - possesseur ja",
    targetMeaning: "ma",
    sentenceBefore: "",
    sentenceAfter: " siostra ma trzydzieści pięć lat.",
    gapWord: "Moja",
    fullSentence: "Moja siostra ma trzydzieści pięć lat.",
    translationFr: "Ma sœur a trente-cinq ans.",
    ruleExplanation: "Devant un nom féminin singulier au nominatif (<em>siostra</em>), le possessif à la 1ère personne du singulier (<em>ja</em>) s'accorde obligatoirement en <strong>moja</strong>.",
    options: [
      {
        word: "Moja",
        isCorrect: true,
        note: "Nominatif féminin singulier"
      },
      {
        word: "Mój",
        isCorrect: false,
        note: "Nominatif masculin singulier"
      },
      {
        word: "Moje",
        isCorrect: false,
        note: "Nominatif neutre singulier"
      },
      {
        word: "Moi",
        isCorrect: false,
        note: "Pluriel viril"
      }
    ]
  },
  {
    id: "poss-l1-39",
    date: "2026-11-03",
    level: 1,
    category: "1st-sg",
    categoryLabelFr: "1ère pers. sg (Mon / Ma / Mes)",
    targetCase: "Mianownik",
    caseLabelFr: "Nominatif",
    nounContext: "brat (nom masculin) - possesseur ja",
    targetMeaning: "mon",
    sentenceBefore: "",
    sentenceAfter: " brat mieszka po lewej stronie domu.",
    gapWord: "Mój",
    fullSentence: "Mój brat mieszka po lewej stronie domu.",
    translationFr: "Mon frère habite à gauche de la maison.",
    ruleExplanation: "Pour un nom masculin singulier au nominatif (<em>brat</em>), le possessif de 1ère personne est <strong>mój</strong>.",
    options: [
      {
        word: "Mój",
        isCorrect: true,
        note: "Nominatif masculin singulier"
      },
      {
        word: "Moja",
        isCorrect: false,
        note: "Nominatif féminin singulier"
      },
      {
        word: "Moje",
        isCorrect: false,
        note: "Nominatif neutre singulier"
      },
      {
        word: "Twój",
        isCorrect: false,
        note: "2ème personne (ton frère)"
      }
    ]
  },
  {
    id: "poss-l1-40",
    date: "2026-11-03",
    level: 1,
    category: "1st-sg",
    categoryLabelFr: "1ère pers. sg (Mon / Ma / Mes)",
    targetCase: "Mianownik",
    caseLabelFr: "Nominatif",
    nounContext: "ulubiona kuzynka (groupe nominal féminin) - possesseur ja",
    targetMeaning: "ma",
    sentenceBefore: "",
    sentenceAfter: " ulubiona kuzynka ma dwadzieścia dwa lata.",
    gapWord: "Moja",
    fullSentence: "Moja ulubiona kuzynka ma dwadzieścia dwa lata.",
    translationFr: "Ma cousine préférée a vingt-deux ans.",
    ruleExplanation: "Devant un nom féminin (<em>kuzynka</em>), le possessif au nominatif singulier prend la forme <strong>moja</strong>.",
    options: [
      {
        word: "Moja",
        isCorrect: true,
        note: "Nominatif féminin singulier"
      },
      {
        word: "Mój",
        isCorrect: false,
        note: "Nominatif masculin singulier"
      },
      {
        word: "Moje",
        isCorrect: false,
        note: "Nominatif neutre singulier"
      },
      {
        word: "Nasza",
        isCorrect: false,
        note: "1ère personne du pluriel (notre)"
      }
    ]
  },
  {
    id: "poss-l1-41",
    date: "2026-11-03",
    level: 1,
    category: "3rd-invariable",
    categoryLabelFr: "3ème personne (Invariables : jego, jej, ich)",
    targetCase: "Mianownik",
    caseLabelFr: "Nominatif",
    nounContext: "siostra (nom féminin) - possesseurs Filip i Tomasz (oni)",
    targetMeaning: "leur",
    sentenceBefore: "Filip i Tomasz nie mogą przyjść. ",
    sentenceAfter: " siostra jest chora.",
    gapWord: "Ich",
    fullSentence: "Filip i Tomasz nie mogą przyjść. Ich siostra jest chora.",
    translationFr: "Filip et Tomasz ne peuvent pas venir. Leur sœur est malade.",
    ruleExplanation: "Pour un possesseur au pluriel de 3ème personne (<em>oni / one</em>), le possessif invariable <strong>ich</strong> (leur / leurs) s'utilise devant tout nom sans jamais s'accorder.",
    options: [
      {
        word: "Ich",
        isCorrect: true,
        note: "Invariable pour possesseur pluriel (oni)"
      },
      {
        word: "Jego",
        isCorrect: false,
        note: "Possesseur singulier masculin (il)"
      },
      {
        word: "Jej",
        isCorrect: false,
        note: "Possesseur singulier féminin (elle)"
      },
      {
        word: "Swoja",
        isCorrect: false,
        note: "Réfléchi"
      }
    ]
  },
  // ------------------------------------------
  // NOUVEAUX DÉFIS DU 05/11/2026 (POSSESSIFS & DÉMONSTRATIFS)
  // ------------------------------------------
  {
    "id": "poss-l1-42",
    "date": "2026-11-05",
    "level": 1,
    "category": "2nd-sg",
    "categoryLabelFr": "2ème pers. sg (Ton / Ta / Tes)",
    "targetCase": "Mianownik",
    "caseLabelFr": "Nominatif",
    "nounContext": "ulubione zwierzę (nom neutre singulier) - possesseur ty",
    "targetMeaning": "ton",
    "sentenceBefore": "Jakie jest ",
    "sentenceAfter": " ulubione zwierzę?",
    "gapWord": "twoje",
    "fullSentence": "Jakie jest twoje ulubione zwierzę?",
    "translationFr": "Quel est ton animal préféré ?",
    "ruleExplanation": "Le nom <em>zwierzę</em> (animal) est de genre <strong>neutre</strong> en polonais. Le possessif de 2ème personne du singulier au nominatif neutre est donc <strong>twoje</strong> (masculin : <em>twój</em>, féminin : <em>twoja</em>).",
    "options": [
      {
        "word": "twoje",
        "isCorrect": true,
        "note": "Nominatif neutre singulier"
      },
      {
        "word": "twój",
        "isCorrect": false,
        "note": "Nominatif masculin singulier"
      },
      {
        "word": "twoja",
        "isCorrect": false,
        "note": "Nominatif féminin singulier"
      },
      {
        "word": "twoi",
        "isCorrect": false,
        "note": "Pluriel viril"
      }
    ]
  },
  {
    "id": "poss-l1-43",
    "date": "2026-11-05",
    "level": 1,
    "category": "1st-sg",
    "categoryLabelFr": "1ère pers. sg (Mon / Ma / Mes)",
    "targetCase": "Mianownik",
    "caseLabelFr": "Nominatif",
    "nounContext": "ulubione zwierzęta (nom pluriel non-viril) - possesseur ja",
    "targetMeaning": "mes",
    "sentenceBefore": "",
    "sentenceAfter": " ulubione zwierzęta to moje psy.",
    "gapWord": "Moje",
    "fullSentence": "Moje ulubione zwierzęta to moje psy.",
    "translationFr": "Mes animaux préférés sont mes chiens.",
    "ruleExplanation": "Au pluriel non-viril (animaux, objets, femmes), le possessif de 1ère personne au nominatif prend la désinence <strong>-e</strong> : <strong>moje</strong> (<em>moje zwierzęta, moje psy</em>).",
    "options": [
      {
        "word": "Moje",
        "isCorrect": true,
        "note": "Nominatif pluriel non-viril (moje zwierzęta)"
      },
      {
        "word": "Moi",
        "isCorrect": false,
        "note": "Pluriel viril (moi bracia)"
      },
      {
        "word": "Mój",
        "isCorrect": false,
        "note": "Masculin singulier"
      },
      {
        "word": "Moja",
        "isCorrect": false,
        "note": "Féminin singulier"
      }
    ]
  },
  {
    "id": "poss-l2-26",
    "date": "2026-11-05",
    "level": 2,
    "category": "reflexive",
    "categoryLabelFr": "Réfléchi (swój - le sien propre)",
    "targetCase": "Dopełniacz",
    "caseLabelFr": "Génitif (Dopełniacz)",
    "nounContext": "bliscy (nom pluriel au génitif) - possesseur le sujet ludzie (ils)",
    "targetMeaning": "de leurs propres (proches)",
    "sentenceBefore": "Ludzie kładą kwiaty na grobach ",
    "sentenceAfter": " bliskich.",
    "gapWord": "swoich",
    "fullSentence": "Ludzie kładą kwiaty na grobach swoich bliskich.",
    "translationFr": "Les gens posent des fleurs sur les tombes de leurs proches.",
    "ruleExplanation": "Lorsque l'objet possédé appartient au sujet de la phrase (<em>ludzie</em>), on utilise obligatoirement le possessif réfléchi <strong>swój</strong>. Au Génitif pluriel, la forme est <strong>swoich</strong>.",
    "options": [
      {
        "word": "swoich",
        "isCorrect": true,
        "note": "Génitif pluriel réfléchi (-ich)"
      },
      {
        "word": "ich",
        "isCorrect": false,
        "note": "Non-réfléchi (serait les proches d'autres personnes)"
      },
      {
        "word": "swoje",
        "isCorrect": false,
        "note": "Nominatif / Accusatif non-viril"
      },
      {
        "word": "swoim",
        "isCorrect": false,
        "note": "Locatif / Datif singulier"
      }
    ]
  },
  {
    "id": "poss-l1-44",
    "date": "2026-11-05",
    "level": 1,
    "category": "3rd-invariable",
    "categoryLabelFr": "3ème personne (Invariables : jego, jej, ich)",
    "targetCase": "Mianownik",
    "caseLabelFr": "Nominatif",
    "nounContext": "mąż (nom masculin) - possesseurs młode dziewczyny (elles/one)",
    "targetMeaning": "leur",
    "sentenceBefore": "Młode dziewczyny chciały wiedzieć, kto będzie ",
    "sentenceAfter": " mężem.",
    "gapWord": "ich",
    "fullSentence": "Młode dziewczyny chciały wiedzieć, kto będzie ich mężem.",
    "translationFr": "Les jeunes filles voulaient savoir qui serait leur mari.",
    "ruleExplanation": "Pour un possesseur au pluriel de 3ème personne (<em>one / dziewczyny</em>), le possessif est l'invariable <strong>ich</strong> (leur / leurs) quel que soit le genre ou le cas.",
    "options": [
      {
        "word": "ich",
        "isCorrect": true,
        "note": "Invariable 3e personne pluriel (leur)"
      },
      {
        "word": "jego",
        "isCorrect": false,
        "note": "Possesseur singulier masculin"
      },
      {
        "word": "jej",
        "isCorrect": false,
        "note": "Possesseur singulier féminin"
      },
      {
        "word": "swój",
        "isCorrect": false,
        "note": "Réfléchi inapproprié ici"
      }
    ]
  },
  // ------------------------------------------
  // NOUVEAUX DÉFIS DU 09/11/2026 (POSSESSIFS & RÉFLÉCHI SWÓJ)
  // ------------------------------------------
  {
    "id": "poss-l1-45",
    "date": "2026-11-09",
    "level": "level-1",
    "category": "1st-2nd",
    "categoryLabelFr": "1re & 2e personne",
    "targetCase": "Mianownik (Nominatif)",
    "caseLabelFr": "Nominatif (Sujet)",
    "nounContext": "mama (féminin singulier)",
    "targetMeaning": "ma (1re pers. singulier, fém)",
    "sentenceBefore": "",
    "sentenceAfter": " mama ma na sobie czarną sukienkę.",
    "gapWord": "Moja",
    "fullSentence": "Moja mama ma na sobie czarną sukienkę.",
    "translationFr": "Ma mère porte une robe noire.",
    "ruleExplanation": "Pour accorder le possessif avec le sujet féminin <em>mama</em> au Nominatif, on utilise la forme féminine en <strong>-a</strong> : <strong>Moja</strong> mama.",
    "options": [
      {
        "word": "Moja",
        "isCorrect": true,
        "note": "Féminin singulier Nominatif"
      },
      {
        "word": "Mój",
        "isCorrect": false,
        "note": "Masculin singulier"
      },
      {
        "word": "Moje",
        "isCorrect": false,
        "note": "Neutre singulier"
      },
      {
        "word": "Moi",
        "isCorrect": false,
        "note": "Pluriel viril"
      }
    ]
  },
  {
    "id": "poss-l1-46",
    "date": "2026-11-09",
    "level": "level-1",
    "category": "3rd",
    "categoryLabelFr": "3e personne",
    "targetCase": "Narzędnik (Instrumental)",
    "nounContext": "mężem (masculin instrumental)",
    "targetMeaning": "leur (3e pers. pluriel : invariable)",
    "sentenceBefore": "Młode dziewczyny chcą wiedzieć, kto będzie ",
    "sentenceAfter": " mężem.",
    "gapWord": "ich",
    "fullSentence": "Młode dziewczyny chcą wiedzieć, kto będzie ich mężem.",
    "translationFr": "Les jeunes filles veulent savoir qui sera leur mari.",
    "ruleExplanation": "Le possessif de 3e personne du pluriel <strong>ich</strong> (leur / leurs) est **totalement invariable** en polonais, quel que soit le cas (ici Narzędnik avec <em>mężem</em>) ou le genre du nom possédé.",
    "options": [
      {
        "word": "ich",
        "isCorrect": true,
        "note": "3e personne pluriel invariable (leur)"
      },
      {
        "word": "jego",
        "isCorrect": false,
        "note": "Son / sa (possesseur masculin)"
      },
      {
        "word": "jej",
        "isCorrect": false,
        "note": "Son / sa (possesseur féminin)"
      },
      {
        "word": "naszym",
        "isCorrect": false,
        "note": "Notre (1re pers. pluriel)"
      }
    ]
  },
  {
    "id": "poss-l1-47",
    "date": "2026-11-09",
    "level": "level-1",
    "category": "3rd",
    "categoryLabelFr": "3e personne",
    "targetCase": "Biernik (Accusatif)",
    "nounContext": "sukienkę (féminin accusatif)",
    "targetMeaning": "sa (possesseur féminin : invariable)",
    "sentenceBefore": "Ta kobieta ma na sobie ",
    "sentenceAfter": " ulubioną sukienkę.",
    "gapWord": "jej",
    "fullSentence": "Ta kobieta ma na sobie jej ulubioną sukienkę.",
    "translationFr": "Cette femme porte sa robe préférée.",
    "ruleExplanation": "Le possessif de 3e personne du singulier féminin <strong>jej</strong> (sa / son possesseur féminin) est strictement **invariable**, même si le nom est à l'accusatif (<em>sukienkę</em>).",
    "options": [
      {
        "word": "jej",
        "isCorrect": true,
        "note": "3e personne féminin invariable (sa)"
      },
      {
        "word": "jego",
        "isCorrect": false,
        "note": "Son (possesseur masculin)"
      },
      {
        "word": "ich",
        "isCorrect": false,
        "note": "Leur (pluriel)"
      },
      {
        "word": "twoją",
        "isCorrect": false,
        "note": "Ta (2e personne accusatif)"
      }
    ]
  },
  {
    "id": "poss-l2-27",
    "date": "2026-11-09",
    "level": "level-2",
    "category": "reflexive",
    "categoryLabelFr": "Réfléchi (swój)",
    "targetCase": "Narzędnik (Instrumental Pluriel)",
    "nounContext": "przyjaciółmi (pluriel avec z)",
    "targetMeaning": "leurs (propres amis : réfléchi)",
    "sentenceBefore": "Trzydziestego listopada rodziny organizują imprezy ze ",
    "sentenceAfter": " przyjaciółmi.",
    "gapWord": "swoimi",
    "fullSentence": "Trzydziestego listopada rodziny organizują imprezy ze swoimi przyjaciółmi.",
    "translationFr": "Le 30 novembre, les familles organisent des fêtes avec leurs (propres) amis.",
    "ruleExplanation": "Quand le possesseur est le sujet de la phrase (ici <em>rodziny</em>), on utilise de préférence le possessif réfléchi <strong>swój</strong>. À l'Instrumental pluriel avec la préposition <em>z / ze</em>, la terminaison est <strong>-imi / -ymi</strong> &rarr; <strong>swoimi</strong>.",
    "options": [
      {
        "word": "swoimi",
        "isCorrect": true,
        "note": "Réfléchi Instrumental pluriel (-imi)"
      },
      {
        "word": "swoich",
        "isCorrect": false,
        "note": "Génitif / Locatif pluriel (-ich)"
      },
      {
        "word": "swoim",
        "isCorrect": false,
        "note": "Instrumental singulier masculin/neutre (-im)"
      },
      {
        "word": "swoją",
        "isCorrect": false,
        "note": "Accusatif / Instrumental féminin singulier (-ą)"
      }
    ]
  },
  // ------------------------------------------
  // NOUVEAUX DÉFIS DU 12/11/2026 (POSSESSIFS & RÉFLÉCHI SWÓJ)
  // ------------------------------------------
  {
    "id": "poss-l1-48",
    "date": "2026-11-12",
    "level": "level-1",
    "category": "1st-2nd",
    "categoryLabelFr": "1re & 2e personne",
    "targetCase": "Mianownik (Nominatif)",
    "caseLabelFr": "Nominatif (Sujet)",
    "nounContext": "biuro (neutre singulier)",
    "targetMeaning": "ton (possesseur 2e personne, nom neutre)",
    "sentenceBefore": "Czy ",
    "sentenceAfter": " biuro jest daleko od centrum?",
    "gapWord": "twoje",
    "fullSentence": "Czy twoje biuro jest daleko od centrum?",
    "translationFr": "Ton bureau est-il loin du centre ?",
    "ruleExplanation": "Le nom <em>biuro</em> est neutre au Nominatif singulier. Le possessif de 2e personne prend donc la désinence neutre <strong>-e</strong> : <strong>twoje</strong> biuro.",
    "options": [
      {
        "word": "twoje",
        "isCorrect": true,
        "note": "Neutre singulier Nominatif (-e)"
      },
      {
        "word": "twój",
        "isCorrect": false,
        "note": "Masculin singulier Nominatif"
      },
      {
        "word": "twoja",
        "isCorrect": false,
        "note": "Féminin singulier Nominatif"
      },
      {
        "word": "twoi",
        "isCorrect": false,
        "note": "Pluriel viril Nominatif"
      }
    ]
  },
  {
    "id": "poss-l1-49",
    "date": "2026-11-12",
    "level": "level-1",
    "category": "1st-2nd",
    "categoryLabelFr": "1re & 2e personne",
    "targetCase": "Dopełniacz (Génitif)",
    "caseLabelFr": "Génitif (après niedaleko)",
    "nounContext": "domu (masculin inanimé génitif)",
    "targetMeaning": "de ma (1re personne masc génitif)",
    "sentenceBefore": "Szukam dobrej piekarni niedaleko ",
    "sentenceAfter": " domu.",
    "gapWord": "mojego",
    "fullSentence": "Szukam dobrej piekarni niedaleko mojego domu.",
    "translationFr": "Je cherche une bonne boulangerie près de ma maison.",
    "ruleExplanation": "La préposition <em>niedaleko</em> (près de) exige le <strong>Génitif</strong>. L'accord du possessif masculin singulier prend la terminaison <strong>-ego</strong> : <strong>mojego</strong> domu.",
    "options": [
      {
        "word": "mojego",
        "isCorrect": true,
        "note": "Génitif masculin singulier (-ego)"
      },
      {
        "word": "mój",
        "isCorrect": false,
        "note": "Nominatif masculin"
      },
      {
        "word": "moim",
        "isCorrect": false,
        "note": "Instrumental / Locatif (-im)"
      },
      {
        "word": "mojemu",
        "isCorrect": false,
        "note": "Datif masculin (-emu)"
      }
    ]
  },
  {
    "id": "poss-l1-50",
    "date": "2026-11-12",
    "level": "level-1",
    "category": "1st-2nd",
    "categoryLabelFr": "1re & 2e personne",
    "targetCase": "Mianownik (Nominatif)",
    "caseLabelFr": "Nominatif (Sujet)",
    "nounContext": "samochód (masculin inanimé)",
    "targetMeaning": "ton (possesseur 2e personne, nom masculin)",
    "sentenceBefore": "Przepraszam, czy ten nowy samochód przed biurem to ",
    "sentenceAfter": " samochód?",
    "gapWord": "twój",
    "fullSentence": "Przepraszam, czy ten nowy samochód przed biurem to twój samochód?",
    "translationFr": "Excusez-moi, est-ce que cette nouvelle voiture devant le bureau est ta voiture ?",
    "ruleExplanation": "Pour accorder le possessif avec un nom masculin singulier (<em>samochód</em>) au Nominatif, on utilise la forme masculine <strong>twój</strong>.",
    "options": [
      {
        "word": "twój",
        "isCorrect": true,
        "note": "Masculin singulier Nominatif"
      },
      {
        "word": "twoja",
        "isCorrect": false,
        "note": "Féminin singulier (-a)"
      },
      {
        "word": "twoje",
        "isCorrect": false,
        "note": "Neutre singulier (-e)"
      },
      {
        "word": "twoi",
        "isCorrect": false,
        "note": "Pluriel viril"
      }
    ]
  },
  {
    "id": "poss-l2-28",
    "date": "2026-11-12",
    "level": "level-2",
    "category": "reflexive",
    "categoryLabelFr": "Réfléchi (swój)",
    "targetCase": "Miejscownik (Locatif)",
    "nounContext": "namiocie (masculin locatif avec w)",
    "targetMeaning": "leur (propre tente : sujet = oni)",
    "sentenceBefore": "Kiedy są w górach, oni zawsze śpią w ",
    "sentenceAfter": " namiocie.",
    "gapWord": "swoim",
    "fullSentence": "Kiedy są w górach, oni zawsze śpią w swoim namiocie.",
    "translationFr": "Quand ils sont à la montagne, ils dorment toujours dans leur (propre) tente.",
    "ruleExplanation": "Lorsque l'objet possédé appartient au sujet de la phrase (<em>oni</em>), on emploie le possessif réfléchi <strong>swój</strong>. Au locatif masculin singulier après <em>w</em>, la terminaison est <strong>-im</strong> : <strong>w swoim namiocie</strong>.",
    "options": [
      {
        "word": "swoim",
        "isCorrect": true,
        "note": "Réfléchi Locatif masculin singulier (-im)"
      },
      {
        "word": "ich",
        "isCorrect": false,
        "note": "Non-réfléchi (tente d'autres personnes)"
      },
      {
        "word": "swoją",
        "isCorrect": false,
        "note": "Accusatif / Instrumental féminin (-ą)"
      },
      {
        "word": "swoich",
        "isCorrect": false,
        "note": "Génitif / Locatif pluriel (-ich)"
      }
    ]
  },
  // ------------------------------------------
  // NOUVEAUX DÉFIS DU 17/11/2026 (PRONOMS RÉFLÉCHIS & POSSESSIFS)
  // ------------------------------------------
  {
    "id": "poss-l1-51",
    "date": "2026-11-17",
    "level": "level-1",
    "category": "1st-2nd",
    "categoryLabelFr": "1re & 2e personne",
    "targetCase": "Dopełniacz (Génitif)",
    "caseLabelFr": "Génitif (après od / ode)",
    "nounContext": "pronom 1re personne (ja)",
    "targetMeaning": "de moi, de chez moi",
    "sentenceBefore": "Nowe biuro jest zaledwie piętnaście minut ode ",
    "sentenceAfter": ".",
    "gapWord": "mnie",
    "fullSentence": "Nowe biuro jest zaledwie piętnaście minut ode mnie.",
    "translationFr": "Le nouveau bureau est à seulement quinze minutes de chez moi.",
    "ruleExplanation": "Après la préposition <em>ode</em> (variante euphonique de <em>od</em>), le pronom personnel de 1re personne se met au Génitif : <strong>ode mnie</strong> (de chez moi).",
    "options": [
      {
        "word": "mnie",
        "isCorrect": true,
        "note": "Génitif du pronom de 1re personne (ode mnie)"
      },
      {
        "word": "ciebie",
        "isCorrect": false,
        "note": "2e personne (od ciebie)"
      },
      {
        "word": "nas",
        "isCorrect": false,
        "note": "Pluriel (od nas)"
      },
      {
        "word": "mi",
        "isCorrect": false,
        "note": "Datif court (mi)"
      }
    ]
  },
  {
    "id": "poss-l1-52",
    "date": "2026-11-17",
    "level": "level-1",
    "category": "1st-2nd",
    "categoryLabelFr": "1re & 2e personne",
    "targetCase": "Dopełniacz (Génitif)",
    "caseLabelFr": "Génitif (après od)",
    "nounContext": "domu (masculin génitif)",
    "targetMeaning": "de ton (2e personne masc génitif)",
    "sentenceBefore": "Czy ta apteka jest bardzo daleko od ",
    "sentenceAfter": " domu?",
    "gapWord": "twojego",
    "fullSentence": "Czy ta apteka jest bardzo daleko od twojego domu?",
    "translationFr": "Cette pharmacie est-elle très loin de ta maison ?",
    "ruleExplanation": "La préposition <em>od</em> (de) régit le Génitif. L'accord du possessif de 2e personne singulier masculin prend la désinence <strong>-ego</strong> : <strong>od twojego domu</strong>.",
    "options": [
      {
        "word": "twojego",
        "isCorrect": true,
        "note": "Génitif masculin singulier (-ego)"
      },
      {
        "word": "twój",
        "isCorrect": false,
        "note": "Nominatif masculin"
      },
      {
        "word": "twoim",
        "isCorrect": false,
        "note": "Locatif / Instrumental (-im)"
      },
      {
        "word": "twojemu",
        "isCorrect": false,
        "note": "Datif masculin (-emu)"
      }
    ]
  },
  {
    "id": "poss-l1-53",
    "date": "2026-11-17",
    "level": "level-1",
    "category": "reflexive",
    "categoryLabelFr": "Réfléchi (siebie)",
    "targetCase": "Miejscownik (Locatif)",
    "nounContext": "locution 'mieć na sobie'",
    "targetMeaning": "sur soi (porter sur soi)",
    "sentenceBefore": "Jaki ciepły sweter masz dzisiaj na ",
    "sentenceAfter": "?",
    "gapWord": "sobie",
    "fullSentence": "Jaki ciepły sweter masz dzisiaj na sobie?",
    "translationFr": "Quel pull chaud portes-tu sur toi aujourd'hui ?",
    "ruleExplanation": "L'expression polonaise pour « porter des vêtements » est <strong>mieć na sobie</strong>. Le pronom réfléchi <em>siebie</em> prend la forme <strong>sobie</strong> au Locatif après la préposition <em>na</em>.",
    "options": [
      {
        "word": "sobie",
        "isCorrect": true,
        "note": "Locatif réfléchi (na sobie)"
      },
      {
        "word": "siebie",
        "isCorrect": false,
        "note": "Génitif / Accusatif réfléchi"
      },
      {
        "word": "tobie",
        "isCorrect": false,
        "note": "2e personne non-réfléchie"
      },
      {
        "word": "sobą",
        "isCorrect": false,
        "note": "Instrumental réfléchi (ze sobą)"
      }
    ]
  },
  {
    "id": "poss-l2-29",
    "date": "2026-11-17",
    "level": "level-2",
    "category": "reflexive",
    "categoryLabelFr": "Réfléchi (swój)",
    "targetCase": "Biernik (Accusatif Pluriel)",
    "nounContext": "ubrania (pluriel non-viril accusatif)",
    "targetMeaning": "leurs (propres vêtements : sujet = oni)",
    "sentenceBefore": "Wszyscy klienci w przymierzalni chętnie oglądają ",
    "sentenceAfter": " nowe ubrania.",
    "gapWord": "swoje",
    "fullSentence": "Wszyscy klienci w przymierzalni chętnie oglądają swoje nowe ubrania.",
    "translationFr": "Tous les clients dans la cabine d'essayage regardent volontiers leurs nouveaux vêtements.",
    "ruleExplanation": "Lorsque la possession renvoie au sujet de la phrase (<em>klienci</em>), on emploie le possessif réfléchi <strong>swój</strong>. À l'Accusatif pluriel non-viril (avec <em>ubrania</em>), la forme est <strong>swoje</strong>.",
    "options": [
      {
        "word": "swoje",
        "isCorrect": true,
        "note": "Accusatif pluriel non-viril réfléchi (swoje)"
      },
      {
        "word": "ich",
        "isCorrect": false,
        "note": "Non-réfléchi (vêtements d'autrui)"
      },
      {
        "word": "swoich",
        "isCorrect": false,
        "note": "Génitif pluriel (-ich)"
      },
      {
        "word": "swoją",
        "isCorrect": false,
        "note": "Accusatif singulier féminin (-ą)"
      }
    ]
  }
];

const POSSESSIVE_CHEATSHEET = {
  goldenRules: [
    {
      title: "1. Accord en Genre et en Nombre (1ère & 2ème personnes)",
      text: "Comme les adjectifs, <em>mój, twój, nasz, wasz</em> s'accordent en <strong>genre</strong> (masculin, féminin, neutre) et en <strong>nombre</strong> (singulier, pluriel viril, pluriel non-viril) avec le nom qu'ils accompagnent, PAS avec la personne qui parle !"
    },
    {
      title: "2. La Règle d'Or des Invariables (3ème personne) : JEGO, JEJ, ICH",
      text: "Les possessifs de 3ème personne <strong>nie odmieniają się</strong> (ne se déclinent JAMAIS) ! Ils restent 100% identiques quel que soit le cas, le genre ou le nombre :<br>• <strong>jego</strong> = son/sa/ses (possesseur homme) : <em>jego brat, jego żona, z jego bratem, nie ma jego psa</em>.<br>• <strong>jej</strong> = son/sa/ses (possesseur femme) : <em>jej mąż, jej siostra, w jej domu</em>.<br>• <strong>ich</strong> = leur/leurs (possesseurs au pluriel) : <em>ich dom, ich dzieci, z ich psem</em>."
    },
    {
      title: "3. Le Réfléchi Magique : SWÓJ",
      text: "En polonais, quand l'objet appartient au <strong>sujet de la phrase</strong>, on emploie obligatoirement <strong>swój</strong> (swoja, swoje...) :<br>• <em>Piotr kocha <strong>swoją</strong> żonę</em> = Piotr aime sa (propre) femme.<br>• <em>Piotr kocha <strong>jego</strong> żonę</em> = Piotr aime la femme d'un autre homme !"
    },
    {
      title: "4. Les Démonstratifs (TEN, TA, TO, TEJ...)",
      text: "Les démonstratifs suivent exactement les terminaisons des adjectifs :<br>• <strong>Masculin</strong> : <em>ten</em> (Nom.) &rarr; <em>tego</em> (Gén./Acc. animé) &rarr; <em>tym</em> (Inst./Loc.)<br>• <strong>Féminin</strong> : <em>ta</em> (Nom.) &rarr; <em>tę/tą</em> (Acc.) &rarr; <strong>tej</strong> (Gén./Loc.) &rarr; <em>tą</em> (Inst.)<br>• <strong>Neutre</strong> : <em>to</em> (Nom./Acc.) &rarr; <em>tego</em> (Gén.) &rarr; <em>tym</em> (Inst./Loc.)"
    }
  ],
  nominativeTable: [
    { person: "1ère sg (Mon)", m: "mój", f: "moja", n: "moje", virilPl: "moi", nonVirilPl: "moje" },
    { person: "2ème sg (Ton)", m: "twój", f: "twoja", n: "twoje", virilPl: "twoi", nonVirilPl: "twoje" },
    { person: "3ème sg masc (Son à lui)", m: "jego", f: "jego", n: "jego", virilPl: "jego", nonVirilPl: "jego", note: "🔒 Invariable" },
    { person: "3ème sg fém (Son à elle)", m: "jej", f: "jej", n: "jej", virilPl: "jej", nonVirilPl: "jej", note: "🔒 Invariable" },
    { person: "1ère pl (Notre)", m: "nasz", f: "nasza", n: "nasze", virilPl: "nasi", nonVirilPl: "nasze" },
    { person: "2ème pl (Votre)", m: "wasz", f: "wasza", n: "wasze", virilPl: "wasi", nonVirilPl: "wasze" },
    { person: "3ème pl (Leur)", m: "ich", f: "ich", n: "ich", virilPl: "ich", nonVirilPl: "ich", note: "🔒 Invariable" },
    { person: "Réfléchi (Son propre)", m: "swój", f: "swoja", n: "swoje", virilPl: "swoi", nonVirilPl: "swoje" },
    { person: "Démonstratif (Ce / Cette)", m: "ten", f: "ta", n: "to", virilPl: "ci", nonVirilPl: "te" }
  ],
  casesTable: [
    {
      caseName: "Biernik (Accusatif)",
      role: "Complément d'Objet Direct (COD)",
      mInan: "mój / twój / nasz / ten",
      mAnim: "mojego / twojego / naszego / tego (-ego)",
      f: "moją / twoją / naszą / tę (-ą / -ę)",
      n: "moje / twoje / nasze / to (-e / -o)",
      plViril: "moich / twoich / naszych / tych (-ich / -ych)",
      example: "Widzę <strong>twojego</strong> brata. Mam <strong>tę</strong> książkę."
    },
    {
      caseName: "Narzędnik (Instrumental)",
      role: "Accompagnement (z), moyen, après być",
      mInan: "moim / twoim / naszym / tym (-im / -ym)",
      mAnim: "moim / twoim / naszym / tym (-im / -ym)",
      f: "moją / twoją / naszą / tą (-ą)",
      n: "moim / twoim / naszym / tym (-im / -ym)",
      plViril: "moimi / twoimi / naszymi / tymi (-imi / -ymi)",
      example: "Spaceruję z <strong>moim</strong> psem. Rozmawiam z <strong>tą</strong> panią."
    },
    {
      caseName: "Dopełniacz (Génitif)",
      role: "Négation, possession (de), bez, do, dla",
      mInan: "mojego / twojego / naszego / tego (-ego)",
      mAnim: "mojego / twojego / naszego / tego (-ego)",
      f: "mojej / twojej / naszej / <strong>tej</strong> (-ej)",
      n: "mojego / twojego / naszego / tego (-ego)",
      plViril: "moich / twoich / naszych / tych (-ich / -ych)",
      example: "Nie mam <strong>twojego</strong> numeru. To jest dom <strong>tej</strong> kobiety."
    },
    {
      caseName: "Miejscownik (Locatif)",
      role: "Lieu où l'on se trouve (w, na, o)",
      mInan: "moim / twoim / naszym / tym (-im / -ym)",
      mAnim: "moim / twoim / naszym / tym (-im / -ym)",
      f: "mojej / twojej / naszej / <strong>tej</strong> (-ej)",
      n: "moim / twoim / naszym / tym (-im / -ym)",
      plViril: "moich / twoich / naszych / tych (-ich / -ych)",
      example: "W <strong>moim</strong> pokoju. Spotkajmy się w <strong>tej</strong> kawiarni."
    }
  ]
};

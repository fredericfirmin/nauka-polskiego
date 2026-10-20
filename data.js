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

const INITIAL_CARDS = [
  // ==========================================
  // 1. PHRASES & QUOTIDIEN
  // ==========================================
  {
    id: "phr-1",
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
    pl: "zły",
    fr: "mauvais",
    category: "Adjectifs",
    genderNotes: "m: zły | f: zła | n: złe",
    acceptedPl: ["zły", "zła", "złe"],
    acceptedFr: ["mauvais", "mauvaise"],
    distractorsPl: ["dobry", "brudny", "trudny"],
    distractorsFr: ["bon", "sale", "difficile"]
  },
  {
    id: "adj-13",
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
    pl: "pocztówka",
    fr: "carte postale",
    category: "La Poste",
    acceptedPl: ["pocztówka"],
    acceptedFr: ["carte postale", "la carte postale", "une carte postale"],
    distractorsPl: ["list", "znaczek", "paczka"],
    distractorsFr: ["lettre", "timbre", "colis"]
  }
];

// ==========================================
// DÉFIS PÉDAGOGIQUES SUR LES CAS POLONAIS (PRZYPADKI)
// ==========================================

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
  }
];


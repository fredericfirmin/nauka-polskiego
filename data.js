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
    acceptedPl: ["zły", "zła", "złe", "źle", "zly", "zla", "zle"],
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
  },

  // ==========================================
  // COURS DU 21.10 - NOUVELLES PHRASES & DIALOGUES
  // ==========================================
  {
    id: "phr-21-1",
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
    pl: "rzodkiewka",
    fr: "radis",
    category: "Fruits & Légumes",
    acceptedPl: ["rzodkiewka"],
    acceptedFr: ["radis", "le radis", "un radis"],
    distractorsPl: ["marchewka", "burak", "cebula"],
    distractorsFr: ["carotte", "betterave", "oignon"]
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
  },
  {
    id: "case-b-13",
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
    id: "case-n-16",
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
  }
];

// ==========================================
// GUIDE & TABLEAUX AIDE-MÉMOIRE DES CAS POLONAIS
// ==========================================

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

  // ------------------------------------------
  // NIVEAU 2 : DÉCLINAISONS & CAS (BIERNIK, NARZĘDNIK, DOPEŁNIACZ, MIEJSCOWNIK)
  // ------------------------------------------
  {
    id: "poss-l2-1",
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

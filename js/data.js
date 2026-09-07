/**
 * PUNTO PIZZA 3 — Data & Translations Store
 * Self-contained dataset extracted from the original application
 */

const APP_DATA = {
  contacts: {
    phone: "0305230993",
    phoneDisplay: "030 523 0993",
    whatsappDisplay: "389 625 4460",
    whatsappMsg: "https://wa.me/393896254460?text=Ciao%20PUNTO%20PIZZA%2C%20vorrei%20prenotare%20un%20tavolo.",
    justeat: "https://www.justeat.it/restaurants-punto-pizza-3-sarezzo-25068/menu",
    facebook: "https://www.facebook.com/PuntoPizza3/",
    maps: "https://www.google.com/maps/place/PUNTO+PIZZA+3/@45.6633627,10.1941402,17z",
    mapsEmbed: "https://www.google.com/maps?q=PUNTO+PIZZA+3,+Via+Dante+Alighieri+55,+Sarezzo+BS&output=embed",
    address: "Via Dante Alighieri, 55, 25068 Sarezzo (BS)"
  },

  schedule: {
    // Opening intervals in minutes from midnight (11:30–14:00 & 17:30–23:00)
    intervals: [
      { start: 11 * 60 + 30, end: 14 * 60 }, // 690 to 840
      { start: 17 * 60 + 30, end: 23 * 60 }  // 1050 to 1380
    ],
    // Closed day: Wednesday (0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, ...)
    closedDays: [3]
  },

  assets: {
    logo: "assets/images/logo.jpg",
    pizzaArugula: "assets/images/pizza-arugula.jpg",
    slicesMetal: "assets/images/slices-metal.jpg",
    calamari: "assets/images/calamari.jpg",
    seafoodBianca: "assets/images/seafood-bianca.jpg",
    fruttiMare: "assets/images/frutti-mare.jpg",
    zucchiniShrimp: "assets/images/zucchini-shrimp.jpg",
    mushroomSausage: "assets/images/mushroom-sausage.jpg",
    margherita: "assets/images/margherita.jpg",
    calzone: "assets/images/calzone.jpg",
    sandwich: "assets/images/sandwich.jpg",
    calzoneFilling: "assets/images/calzone-filling.jpg",
    menuPrinted: "assets/images/menu-printed.jpg",
    videos: {
      hero: "assets/videos/hero.mp4",
      dough1: "assets/videos/dough1.mp4",
      dough2: "assets/videos/dough2.mp4"
    }
  },

  signatureDishes: [
    {
      id: "margherita",
      name: "Margherita",
      descIt: "Pomodoro, mozzarella. La perfezione essenziale.",
      descEn: "Tomato, mozzarella. Essential perfection.",
      image: "assets/images/margherita.jpg"
    },
    {
      id: "frutti-di-mare",
      name: "Frutti di Mare",
      descIt: "Gamberetti, calamari, cozze su base bianca.",
      descEn: "Shrimp, calamari, mussels on a white base.",
      image: "assets/images/frutti-mare.jpg"
    },
    {
      id: "calzone-farcito",
      name: "Calzone Farcito",
      descIt: "Prosciutto, funghi, carciofi, chiuso e cotto al forno.",
      descEn: "Ham, mushrooms, artichokes, folded and baked.",
      image: "assets/images/calzone.jpg"
    },
    {
      id: "pizza-kebab",
      name: "Pizza Kebab",
      descIt: "Carne di kebab al forno, il nostro best-seller.",
      descEn: "Oven-baked kebab meat, our best-seller.",
      image: "assets/images/zucchini-shrimp.jpg"
    }
  ],

  gallery: [
    { src: "assets/images/pizza-arugula.jpg", span: "gallery-col-2 gallery-row-2", ar: "4/3" },
    { src: "assets/images/slices-metal.jpg", span: "", ar: "1/1" },
    { src: "assets/images/calamari.jpg", span: "", ar: "1/1" },
    { src: "assets/images/mushroom-sausage.jpg", span: "", ar: "1/1" },
    { src: "assets/images/sandwich.jpg", span: "", ar: "1/1" },
    { src: "assets/images/seafood-bianca.jpg", span: "gallery-col-2", ar: "16/9" }
  ],

  reviews: [
    {
      author: "Pietro Rustichelli",
      rating: 5,
      time: "un mese fa",
      text: "La pizza è buona, molto bella, la migliore di Sarezzo che abbia mangiato finora."
    },
    {
      author: "Kiara Castricini",
      rating: 5,
      time: "10 mesi fa",
      text: "Pizza buonissima, stra consiglio!"
    },
    {
      author: "Tiziano Baioni",
      rating: 5,
      time: "3 anni fa",
      text: "Ottima la pizza, prodotti top."
    },
    {
      author: "taseef akhtar",
      rating: 5,
      time: "2 anni fa",
      text: "Ottima pizza 🍕 con forno a legna. Ragazzi molto gentili e professionali, bravi."
    },
    {
      author: "Giacomo Chiari",
      rating: 5,
      time: "3 anni fa",
      text: "Buona pizza, da provare. Ottimo rapporto qualità prezzo."
    },
    {
      author: "Gionatan Miele",
      rating: 4,
      time: "2 anni fa",
      text: "La padella kebab è come un calzone kebab caldo con mozzarella, davvero deliziosa. Consegna nei tempi previsti e personale gentile."
    },
    {
      author: "Marzia Zanetti",
      rating: 4,
      time: "3 anni fa",
      text: "Una pizza con cipolle e funghi strabuona, la pasta era cotta da Dio. Prezzo incredibile per la pizza che ho mangiato."
    },
    {
      author: "Piera S",
      rating: 4,
      time: "4 anni fa",
      text: "Pizza molto buona, prezzo giusto, molto gentili. Consiglio solo di essere più puntuali con le consegne a domicilio."
    },
    {
      author: "Tamara Viscun",
      rating: 5,
      time: "4 anni fa",
      text: "Buonissimo! 🍕🥙🍤"
    }
  ],

  menuCategories: [
    {
      id: "classiche",
      name: { it: "Le Classiche", en: "The Classics" },
      items: [
        { name: "Asparagi", ingredients: "pomodoro, mozzarella, asparagi", price: "7,00" },
        { name: "Americana", ingredients: "pomodoro, mozzarella, würstel, patatine", price: "7,00" },
        { name: "Braccio di Ferro", ingredients: "pomodoro, mozzarella, spinaci, ricotta", price: "7,00" },
        { name: "Capricciosa", ingredients: "pomodoro, mozzarella, prosciutto, funghi, carciofi", price: "7,00" },
        { name: "Carciofi", ingredients: "pomodoro, mozzarella, carciofi", price: "6,00" },
        { name: "Caprese", ingredients: "mozzarella, pomodorini di bufala, pomodorini, origano", price: "8,80" },
        { name: "El Paso", ingredients: "pomodoro, mozzarella, funghi, panna, speck o crudo", price: "6,00" },
        { name: "Funghi", ingredients: "pomodoro, mozzarella, funghi", price: "6,00" },
        { name: "Gorgonzola", ingredients: "pomodoro, mozzarella, gorgonzola", price: "7,00" },
        { name: "Gorgo Noci", ingredients: "pomodoro, mozzarella, gorgonzola, noci", price: "6,00" },
        { name: "Margherita", ingredients: "pomodoro, mozzarella", price: "5,00" },
        { name: "Napoli", ingredients: "pomodoro, mozzarella, acciughe, origano", price: "6,00" },
        { name: "Occhio di Bue", ingredients: "pomodoro, mozzarella, prosciutto, uovo, grana", price: "6,50" },
        { name: "Prosciutto e Funghi", ingredients: "pomodoro, mozzarella, prosciutto, funghi", price: "6,50" },
        { name: "Prosciutto", ingredients: "pomodoro, mozzarella, prosciutto", price: "5,50" },
        { name: "Pugliese", ingredients: "pomodoro, mozzarella, cipolla", price: "6,00" },
        { name: "Porcini", ingredients: "pomodoro, mozzarella, porcini", price: "6,50" },
        { name: "Peones", ingredients: "pomodoro, mozzarella, prosciutto, brie", price: "7,50" },
        { name: "Patatine", ingredients: "pomodoro, mozzarella, patatine", price: "6,00" },
        { name: "Quattro Formaggi", ingredients: "pomodoro, mozzarella, formaggi misti", price: "6,50" },
        { name: "Quattro Stagioni", ingredients: "mozzarella, prosciutto, funghi, carciofi, olive", price: "6,50" },
        { name: "Romana", ingredients: "pomodoro, mozzarella, acciughe, capperi, origano", price: "6,50" },
        { name: "Salsiccia", ingredients: "pomodoro, mozzarella, salsiccia", price: "6,00" },
        { name: "Salame Piccante / Dolce", ingredients: "mozzarella, salame piccante o dolce", price: "6,00" },
        { name: "Scamorzina", ingredients: "pomodoro, mozzarella, scamorza affumicata", price: "6,00" },
        { name: "Tonno", ingredients: "pomodoro, mozzarella, tonno", price: "6,00" },
        { name: "Tonno e Cipolla", ingredients: "pomodoro, mozzarella, tonno, cipolle", price: "7,00" },
        { name: "Verdure Grigliate", ingredients: "mozzarella, melanzane, zucchine, peperoni", price: "7,00" },
        { name: "Vegetariana", ingredients: "mozzarella, zucchine, melanzane, peperoni, spinaci, grana", price: "8,50" },
        { name: "Verde", ingredients: "pomodoro, mozzarella, spinaci, gorgonzola, grana", price: "7,00" },
        { name: "Würstel", ingredients: "pomodoro, mozzarella, würstel", price: "6,00" },
        { name: "Williams", ingredients: "pomodoro, mozzarella, mele, porcini, grana", price: "7,50" }
      ]
    },
    {
      id: "speciali",
      name: { it: "Le Speciali", en: "The Specials" },
      items: [
        { name: "Boh!", ingredients: "pomodoro, mozzarella, asparagi, porcini, olive, grana", price: "8,50" },
        { name: "Bomba", ingredients: "pomodoro, mozzarella, salame piccante, gorgonzola, cipolla", price: "8,00" },
        { name: "Beverly", ingredients: "pomodoro, mozzarella, tonno, olive, scamorza, pomodorini", price: "8,00" },
        { name: "Contadina", ingredients: "pomodoro, mozzarella, salsiccia, fagioli, melanzane, grana", price: "8,50" },
        { name: "Campagnola", ingredients: "pomodoro, mozzarella, porcini, salsiccia, taleggio", price: "8,50" },
        { name: "Casareccia", ingredients: "pomodoro, mozzarella, gorgonzola, salsiccia, rosmarino", price: "8,50" },
        { name: "Cielo", ingredients: "pomodoro, mozzarella, prosciutto, panna, zucchine", price: "8,50" },
        { name: "Diavola", ingredients: "pomodoro, mozzarella, salame piccante, cipolle, peperoni", price: "8,50" },
        { name: "Della Casa", ingredients: "mozzarella, prosciutto, funghi, carciofi, würstel, uovo", price: "8,50" },
        { name: "Gustosa", ingredients: "pomodoro, mozzarella, radicchio, gorgonzola", price: "7,00" },
        { name: "Il Noba", ingredients: "mozzarella, prosciutto, funghi, carciofi, capote, olive", price: "9,00" },
        { name: "Malak", ingredients: "pomodoro, mozzarella, zucchine, panna, porcini, grana", price: "9,50" },
        { name: "Maniva", ingredients: "pomodoro, mozzarella, zucchine, gamberetti, porcini", price: "8,50" },
        { name: "Moro", ingredients: "pomodoro, mozzarella, radicchio, salsiccia, grana", price: "8,00" },
        { name: "Pizza Kebab", ingredients: "pomodoro, mozzarella, carne di kebab al forno", price: "8,00" },
        { name: "Pizza Kebab Completo", ingredients: "mozzarella, kebab, insalata, pomodorini, cipolla, salsa", price: "9,00" },
        { name: "Pizza Rossana", ingredients: "mozzarella, prosciutto, würstel, salame piccante", price: "8,00" },
        { name: "Primavera", ingredients: "pomodoro, mozzarella, pomodorino, crudo, rucola", price: "8,50" },
        { name: "Punto Pizza", ingredients: "mozzarella, salsiccia, cipolla, olive nere, gorgonzola", price: "7,50" },
        { name: "Rustica", ingredients: "pomodoro, mozzarella, patate, rosmarino, prosciutto cotto", price: "7,50" },
        { name: "Saporita", ingredients: "pomodoro, mozzarella, salsiccia, spinaci, gorgonzola", price: "7,50" },
        { name: "Tre Brie", ingredients: "pomodoro, mozzarella, carciofi, brie", price: "8,00" },
        { name: "Tre Piramidi", ingredients: "pomodoro, mozzarella, kebab, würstel, patatine", price: "8,50" },
        { name: "Pizza Nutella", ingredients: "crema di nocciole e cacao", price: "6,50" }
      ]
    },
    {
      id: "tradizionali",
      name: { it: "Le Tradizionali", en: "The Traditional" },
      items: [
        { name: "Bresola Rucola e Grana", ingredients: "mozzarella, bresaola, rucola, scaglie di grana", price: "8,50" },
        { name: "Carbonara", ingredients: "pomodoro, mozzarella, pancetta, uovo, grana", price: "8,00" },
        { name: "Crudo", ingredients: "pomodoro, mozzarella, crudo", price: "6,50" },
        { name: "Speck", ingredients: "pomodoro, mozzarella, speck", price: "6,50" },
        { name: "Tirolese", ingredients: "pomodoro, mozzarella, speck, brie", price: "7,50" },
        { name: "Francese", ingredients: "pomodoro, mozzarella, speck, brie, noci", price: "8,50" },
        { name: "Sfiziosa", ingredients: "pomodoro, mozzarella, pancetta, olive, cipolle, patate", price: "8,50" },
        { name: "Pazza", ingredients: "pomodoro, mozzarella, radicchio, scamorza, funghi, pancetta", price: "8,50" },
        { name: "Siciliana", ingredients: "pomodoro, capperi, acciughe, origano, olive", price: "6,50" },
        { name: "Bufalina", ingredients: "pomodoro, mozzarella di bufala, origano", price: "7,00" },
        { name: "Marinara", ingredients: "pomodoro, aglio, olio, origano", price: "4,50" },
        { name: "Cleopatra", ingredients: "pomodoro, bresaola, radicchio, ricotta", price: "8,50" }
      ]
    },
    {
      id: "bianche",
      name: { it: "Le Bianche", en: "White Pizzas" },
      items: [
        { name: "Fornarina", ingredients: "olio, origano", price: "3,00" },
        { name: "Delizia 1", ingredients: "mozzarella, gorgonzola, salsiccia, rosmarino", price: "7,50" },
        { name: "Delizia 2", ingredients: "mozzarella, gorgonzola, zucchine fresche, pomodorini", price: "8,00" },
        { name: "Ligure", ingredients: "mozzarella, patate, pesto, taleggio", price: "8,00" },
        { name: "Signora Pizza", ingredients: "mozzarella, pomodorini di bufala, basilico", price: "8,00" },
        { name: "Maggiorese", ingredients: "mozzarella, pancetta, rosmarino, taleggio, patate", price: "8,00" }
      ]
    },
    {
      id: "pesce",
      name: { it: "Pesce e Frutti di Mare", en: "Seafood" },
      items: [
        { name: "Calamari", ingredients: "pomodoro, mozzarella, calamari", price: "8,50" },
        { name: "Frutti di Mare", ingredients: "pomodoro, mozzarella, frutti di mare", price: "8,50" },
        { name: "Mimosa", ingredients: "pomodoro, mozzarella, gamberetti, salmone", price: "8,50" },
        { name: "Salmone", ingredients: "pomodoro, mozzarella, salmone", price: "7,00" },
        { name: "Mare e Monti", ingredients: "pomodoro, mozzarella, gamberetti, porcini", price: "8,50" },
        { name: "Gamberetti Rucola Grana", ingredients: "mozzarella, gamberetti, rucola, grana", price: "8,50" },
        { name: "Gamberetti", ingredients: "pomodoro, mozzarella, gamberetti", price: "6,50" }
      ]
    },
    {
      id: "calzoni",
      name: { it: "I Calzoni", en: "Calzones" },
      items: [
        { name: "Farcito", ingredients: "pomodoro, mozzarella, prosciutto, funghi, carciofi", price: "7,00" },
        { name: "Quattro Formaggi", ingredients: "pomodoro, mozzarella, formaggi misti", price: "7,00" },
        { name: "Normale", ingredients: "pomodoro, mozzarella, prosciutto", price: "6,00" },
        { name: "Messicano", ingredients: "pomodoro, mozzarella, carne di kebab, würstel", price: "7,50" },
        { name: "Gustoso", ingredients: "pomodoro, mozzarella, salame piccante, würstel, peperoni", price: "7,50" }
      ]
    },
    {
      id: "famiglia",
      name: { it: "Famiglia & Metro", en: "Family & By the Meter" },
      items: [
        { name: "Margherita Farcita 3 Gusti", ingredients: "mezza famiglia", price: "17,00" },
        { name: "Margherita Farcita 4 Gusti", ingredients: "mezza famiglia", price: "22,00" },
        { name: "Margherita Farcita 2 Gusti", ingredients: "al metro", price: "20,00" },
        { name: "Aggiunte", ingredients: "per gusto extra", price: "2,00" }
      ]
    }
  ],

  translations: {
    it: {
      nav: {
        menu: "Menu",
        identity: "La Nostra Arte",
        specialties: "Specialità",
        reviews: "Recensioni",
        gallery: "Galleria",
        location: "Dove Siamo",
        contact: "Contatti",
        reserveBtn: "Prenota"
      },
      hero: {
        kicker: "Forno a legna · Sarezzo (BS)",
        title: "Il punto d'incontro tra fuoco e farina",
        subtitle: "Pizza artigianale, kebab e calzoni cotti nel forno a legna. Impasti a lunga lievitazione, ingredienti veri, prezzi onesti.",
        order: "Ordina ora",
        reserve: "Prenota un tavolo",
        scroll: "Scopri di più"
      },
      identity: {
        kicker: "La nostra arte",
        title: "Materia, tempo e fuoco",
        body: "Ogni pizza nasce da un impasto ad alta idratazione, fatto riposare per ore. Lavorato a mano, cotto nel forno a legna. Niente scorciatoie: solo farina, acqua, sale e pazienza.",
        points: [
          { t: "48 ore di lievitazione", d: "Impasti ad alta idratazione, digeribili e leggeri." },
          { t: "Forno a legna", d: "Cottura ad alta temperatura per il caratteristico cornicione maculato." },
          { t: "Anche senza glutine", d: "Opzione senza glutine disponibile su richiesta." }
        ],
        badgeHours: "48h",
        badgeSub: "lievitazione"
      },
      signature: {
        kicker: "Le nostre specialità",
        title: "Piatti che raccontano la casa",
        subtitle: "Dalla classica Margherita ai frutti di mare, dai calzoni al kebab al forno."
      },
      menu: {
        kicker: "Il listino",
        title: "Il menu",
        subtitle: "Tutte le pizze, i calzoni e le specialità. Clicca una categoria per aprire la cartella.",
        gf: "Senza glutine",
        viewImage: "Vedi menu stampato",
        orderJustEat: "Ordina su Just Eat",
        closeModal: "Chiudi"
      },
      reviews: {
        kicker: "Dicono di noi",
        title: "Le voci della pizzeria",
        subtitle: "Recensioni reali dei nostri clienti su Google.",
        googleCta: "Vedi tutte su Google"
      },
      gallery: {
        kicker: "Galleria",
        title: "Dal forno alla tavola",
        subtitle: "Uno sguardo alle nostre creazioni."
      },
      location: {
        kicker: "Dove siamo",
        title: "Vieni a trovarci",
        address: "Via Dante Alighieri, 55, 25068 Sarezzo (BS)",
        directions: "Indicazioni stradali",
        hoursTitle: "Orari di apertura",
        open: "Aperto ora",
        closed: "Chiuso ora",
        days: ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"],
        hours: "11:30–14:00 · 17:30–23:00",
        wednesdayNote: "Mercoledì chiuso"
      },
      contact: {
        kicker: "Contatti",
        title: "Prenota o ordina",
        subtitle: "Chiamaci, scrivici su WhatsApp o ordina online. Siamo qui per te.",
        phone: "Telefono",
        whatsapp: "WhatsApp",
        justeat: "Ordina online",
        facebook: "Facebook"
      },
      footer: {
        tagline: "Il punto d'incontro tra fuoco e farina.",
        pill: "Forno a legna · 48h lievitazione",
        rights: "Tutti i diritti riservati."
      },
      quick: {
        phone: "Chiama",
        whatsapp: "WhatsApp",
        maps: "Mappa"
      }
    },
    en: {
      nav: {
        menu: "Menu",
        identity: "Our Craft",
        specialties: "Specialties",
        reviews: "Reviews",
        gallery: "Gallery",
        location: "Find Us",
        contact: "Contact",
        reserveBtn: "Book"
      },
      hero: {
        kicker: "Wood-fired oven · Sarezzo (BS)",
        title: "Where fire meets flour",
        subtitle: "Artisan pizza, kebab and calzones baked in a wood-fired oven. Long-fermented dough, real ingredients, honest prices.",
        order: "Order now",
        reserve: "Book a table",
        scroll: "Discover more"
      },
      identity: {
        kicker: "Our craft",
        title: "Matter, time and fire",
        body: "Every pizza starts with a high-hydration dough, rested for hours. Hand-stretched, baked in a wood-fired oven. No shortcuts: just flour, water, salt and patience.",
        points: [
          { t: "48-hour fermentation", d: "High-hydration dough, light and digestible." },
          { t: "Wood-fired oven", d: "High-heat baking for the signature leopard-spotted crust." },
          { t: "Gluten-free available", d: "Gluten-free crust option on request." }
        ],
        badgeHours: "48h",
        badgeSub: "fermentation"
      },
      signature: {
        kicker: "Our specialties",
        title: "Dishes that tell our story",
        subtitle: "From the classic Margherita to seafood, calzones to oven-baked kebab."
      },
      menu: {
        kicker: "The price list",
        title: "The menu",
        subtitle: "All our pizzas, calzones and specialties. Click a category to open the folder.",
        gf: "Gluten-free",
        viewImage: "View printed menu",
        orderJustEat: "Order on Just Eat",
        closeModal: "Close"
      },
      reviews: {
        kicker: "What they say",
        title: "Voices from the pizzeria",
        subtitle: "Real reviews from our customers on Google.",
        googleCta: "See all on Google"
      },
      gallery: {
        kicker: "Gallery",
        title: "From oven to table",
        subtitle: "A look at our creations."
      },
      location: {
        kicker: "Find us",
        title: "Come visit",
        address: "Via Dante Alighieri, 55, 25068 Sarezzo (BS), Italy",
        directions: "Get directions",
        hoursTitle: "Opening hours",
        open: "Open now",
        closed: "Closed now",
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        hours: "11:30–14:00 · 17:30–23:00",
        wednesdayNote: "Wednesday closed"
      },
      contact: {
        kicker: "Contact",
        title: "Book or order",
        subtitle: "Call us, message on WhatsApp or order online. We're here for you.",
        phone: "Phone",
        whatsapp: "WhatsApp",
        justeat: "Order online",
        facebook: "Facebook"
      },
      footer: {
        tagline: "Where fire meets flour.",
        pill: "Wood-fired oven · 48h fermentation",
        rights: "All rights reserved."
      },
      quick: {
        phone: "Call",
        whatsapp: "WhatsApp",
        maps: "Map"
      }
    }
  }
};

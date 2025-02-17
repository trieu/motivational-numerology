/*
  Motivational-Numerology
  (c) 2023 Sally Faubion & Olivier Giulieri
  http://www.sallysnumbers.com
*/

const meaning = {
  "master": "Numero Maestro",

  destiny: {
    "title": "Destino",
    "description": "Questo è il numero più influente in relazione alle tue motivazioni personali, a ciò e a chi ti piace avere intorno e alle carriere a cui saresti più incline ad aspirare.",
    "func": "Mese + Giorno + Anno di nascita",
    "1": "Questo è il percorso dell'avventuriero, dell'imprenditore, del pioniere completamente indipendente.",
    "2": "Questo è il percorso del casalingo, del giocatore di squadra, del custode e del collezionista.",
    "3": "Questo è il percorso dell'avventuroso, del creativo, del proverbiale 'Peter Pan', e/o dello scientifico disciplinato 'Dapper Dan/Danielle'.",
    "4": "Questo è il percorso dell'impiegato/imprenditore laborioso, dedicato, schietto e dell'amico gentile e leale.",
    "5": "Questo è il percorso del combattente della libertà pieno di energia, del promotore e dello stiloso viaggiatore del mondo.",
    "6": "Questo è il percorso del cittadino modello, del paziente insegnante, del campione dell'equità e della giustizia e del genitore cosmico di tutti.",
    "7": "Questo è il percorso dello studioso, del perfezionista, del genio e del custode di segreti.",
    "8": "Questo è il percorso della matriarca/patriarca, del giudice, del produttore/regista, dell'organizzatore e dell'elegante esemplare.",
    "9": "Questo è il percorso dell'aristocratico e gentiluomo \"anima antica\" e dell'umanitario universale.",
    "11": "Questo è il percorso dell'consigliere intuitivo, del pacificatore e della figura pubblica illuminata.",
    "22": "Questo è il percorso del visionario illuminato, prudente, organizzato, determinato e ispiratore."
  },

  personality: {
    "title": "Personalità",
    "description": "Questo numero descrive il tuo sé dietro le quinte o privato.",
    "func": "Giorno di nascita",
    "1": "Sei dinamico, determinato e un leader naturale, e la tua determinazione senza compromessi prepara il terreno per il tuo successo.",
    "2": "Sei un pacificatore, premuroso, gentile e un amico, partner, dipendente o capo indispensabile.",
    "3": "Sei incredibilmente creativo, immaginativo e coinvolgente, e un host o un'hostess superlativa.",
    "4": "Sei una persona dedicata, orientata ai dettagli e instancabile, e la tua parola è valida come l'oro.",
    "5": "La tua natura intelligente, entusiasta e affabile ispira e motiva tutti quelli che ti conoscono.",
    "6": "Sei responsabile, orientato alle persone e amante della bellezza, della natura e della casa.",
    "7": "Sei analitico, orientato alla ricerca e la tua sete di conoscenza è vasta e insaziabile.",
    "8": "Sei ambizioso, organizzato, un operatore di qualità e nato per essere un leader con un debole per il protocollo e la giustizia.",
    "9": "Sei poliedrico, creativo e competente e sei nel tuo vero carattere quando sei al servizio degli altri.",
    "10": "Sei indipendente, premuroso e responsabile con una natura proattiva; e un'attitudine ottimista che trova il positivo in qualsiasi situazione.",
    "11": "Sei sensibile, intelligente, originale, ispiratore, un buon ascoltatore e assumi naturalmente il ruolo di 'spalla forte' per molti.",
    "12": "Sei affascinante, socievole e creativo e la tua forte determinazione e lungimiranza ti aiutano a manifestare i tuoi obiettivi.",
    "13": "Sei acuto, indipendente, concreto e schietto, e la tua dedizione, tenacia e resistenza con qualsiasi concetto, circostanza o impresa sono straordinarie.",
    "14": "Sei una riserva di energia con una mente da tagliole che produce costantemente nuove idee e concetti e soluzioni creative e pratiche.",
    "15": "La tua mente unica, intellettuale e analitica richiede periodi di solitudine per esaminare la tua insaziabile sete di conoscenza e superare i confini accettati in quella ricerca.",
    "16": "Sei un individuo intelligente, ambizioso, coraggioso, dotato di energia e vitalità per gestire un paese, e sei l'esempio di classe per eccellenza!",
    "17": "Sei intelligente, ambizioso, coraggioso, possiedi abbastanza energia e vitalità da governare un paese e sei l'esempio di classe per eccellenza!",
    "18": "Sei un potente concentrato di saggezza, forza, coraggio e compassione a larga portata che si esibisce al meglio quando aiuti chi ha bisogno.",
    "19": "La tua natura avventurosa ti fa desiderare varietà e cambiamento, ma quando sei ispirato, puoi anche essere tenace, dedicato e onorevole come dipendente, capo, partner e amico.",
    "20": "La tua natura calorosa, disponibile e prudente è apprezzata in qualsiasi ambiente lavorativo e ti farà accumulare e mantenere molti amici nel corso della tua vita.",
    "21": "Sei di buon cuore, ottimista, ispiratore e generoso. Sei attratto da tutto ciò che è bello, di qualità e di intrattenimento, e la tua creatività può metterti in primo piano.",
    "22": "Hai una disciplina straordinaria, energia, logica e sensibilità e hai la mente di un visionario esperto e intraprendente.",
    "23": "Possiedi uno spirito nutriente, amante del divertimento e orientato alla libertà e la tua mente rapida, originalità e intelligenza producono costantemente idee e progetti intelligenti e unici.",
    "24": "Sei affascinante, socievole e più amante che combattente. La tua natura coscienziosa e generosa tende sempre a andare \"oltre il dovuto\", e sei un amico e un compagno onorevole.",
    "25": "Sei spiritoso e saggio, e ti chiedi di tutto. Il tuo serbatoio di saggezza innata e la tua natura altamente compassionevole e generosa portano alla tua innata responsabilità verso l'umanità in generale.",
    "26": "La tua personalità è simile a quella di un generale a cinque stelle - costante e al comando con un'affezione per il protocollo. Il tuo \"sesto senso\" ti consente di intuire facilmente ciò che è giusto e sbagliato e di dare l'esempio agli altri.",
    "27": "Come il vecchio re Cole, sei un'anima antica e possiedi una vasta conoscenza innata e una straordinaria perspicacia. I viaggi e il cambiamento sono essenziali per il tuo benessere.",
    "28": "Sei affascinante, indipendente, un nato diplomatico e il tuo carattere è quello di un uomo d'azione e di un leader. I tuoi alti ideali e principi ti consentono di raggiungere i tuoi obiettivi.",
    "29": "La tua natura dolce e sensibile è accompagnata da una combinazione di energia e carisma che attira le persone verso di te come una calamita. Possiedi un \"sesto senso\" che ti permette di aiutare molti che cercano le tue \"spalle forti\".",
    "30": "Sei intelligente, creativo, amante del divertimento e dotato di un grande senso dell'umorismo, e sei eccezionalmente talentuoso quando sei coinvolto in qualsiasi sforzo creativo. La tua natura socievole ti permette di distinguerti tra gli altri.",
    "31": "Sei creativo, innovativo e possiedi una vasta quantità di conoscenza. Coscienzioso, affidabile e puntuale, sei anche un abitudinario e puoi essere un compagno e un amico devoti.",
    "11": "Sei sensibile, intelligente, originale, ispiratore, un buon ascoltatore e assumi naturalmente il ruolo di 'spalla forte' per molti.",
    "22": "Hai una disciplina straordinaria, energia, logica e sensibilità e hai la mente di un visionario esperto e intraprendente."
  },

  attitude: {
    "title": "Atteggiamento",
    "description": "Questo numero è più potente nei primi 30-35 anni della tua vita e rappresenta come e perché reagisci alle circostanze durante la tua giovinezza.",
    "func": "Mese + Giorno di nascita",
    "1": "Sei nato con una forte volontà e natura indipendente. Preferisci prendere le tue decisioni e sei testardo quando ti spingono in una direzione diversa.",
    "2": "Sei nato per essere un bambino e un giovane adulto dolce, gentile, premuroso e premuroso. Ami nutrire gli altri e essere nutrito, sei percepitivo e sensibile.",
    "3": "Sei nato un po' timido, ma una volta imparato a parlare, puoi diventare un intrattenitore naturale, avventuroso e affascinante.",
    "4": "Sei nato con un temperamento sensibile e testardo, ma puoi essere molto dolce e diligente quando ricevi elogi e incoraggiamenti.",
    "5": "Sei nato con un'energia travolgente! Hai bisogno di stimolazione mentale e fisica costante e la tua irritabilità aumenta quando sei impaziente.",
    "6": "Sei nato per essere responsabile, coscienzioso, considerato, gentile e premuroso verso tutti, specialmente i tuoi genitori, fratelli, amici e tutte le creature della natura.",
    "7": "Sei nato con una mente brillante che ha bisogno di momenti di solitudine per dedicarsi alla tua ricerca di conoscenza e ai tuoi vasti interessi e intrighi.",
    "8": "Sei nato per essere esemplare in tutto ciò che fai; questo deriva dal tuo bisogno di sentirti sotto controllo. Sei lo studente 'bravo a scuola' quando sei incoraggiato.",
    "9": "Sei nato con una sensibilità più matura fin da una giovane età. Le lodi e gli incoraggiamenti da parte di coloro che ti sono più vicini alimentano i tuoi successi.",
    "11": "Sei nato estremamente sensibile; altamente intuitivo, nobile d'animo e amante della musica; dolce, gentile e cerebrale quando sei ispirato, sei destinato a fare grandi cose.",
    "22": "Sei nato con una vena testarda, ma con incoraggiamento puoi essere molto determinato, intraprendente, ispirato e ingegnoso."
  },

  character: {
    "title": "Carattere",
    "description": "Questo numero rappresenta principalmente le tue qualità pubbliche e sociali, ma esibirai molto delle stesse anche nei tuoi rapporti personali.",
    "func": "Lettere nel nome",
    "1": "Possedendo una mente originale e innovativa, con un'attenzione costante ai tuoi obiettivi, ti qualifichi come un leader.",
    "2": "Essendo naturalmente diplomatico, di buon cuore e un pacificatore, la tua immagine pubblica è quella di un ambasciatore per la gente.",
    "3": "Le tue capacità ottimistiche, entusiastiche e creative ti consentono di coinvolgere, ispirare e intrattenere gli altri in qualsiasi ambito lavorativo tu scelga.",
    "4": "La tua immagine pubblica coscienziosa, organizzata, sistematica e affidabile ti rende una persona molto richiesta o il Presidente del Consiglio.",
    "5": "La tua natura affascinante, articolata, flessibile e attenta allo stile ti rende un precursore che può coinvolgere e ispirare molte persone quando sei concentrato su una missione.",
    "6": "Essendo un umanitario nato, orientato alla comunità e un eccezionale genitore/insegnante/essere umano che fa sempre \"il miglio in più\", sei un leader esemplare di comitati o cause.",
    "7": "Essendo un genio filosoficamente avanguardista e orientato alla ricerca, non cerchi la luce dei riflettori, ma sei un docente, un professore e un esperto di carriera superlativo.",
    "8": "La tua immagine pubblica di insegnante di insegnanti esemplare, giudice/giuria, produttore/regista possiede un sesto senso che ti permette di distinguere facilmente ciò che è giusto da ciò che è sbagliato in qualsiasi cosa.",
    "9": "Essendo un saggio nato, aristocratico e socialmente gradevole, graviti verso la comunità che può trarre il massimo vantaggio dalla tua missione di \"servitore altruista\".",
    "11": "Essendo un consigliere empatico, illuminato e comprensivo o un leader della comunità, appartieni ai riflettori; l'11 è associato alla fama e all'illuminazione.",
    "22": "Essendo un costruttore di imperi dal pensiero elevato e orientato spiritualmente, sei più adatto ad aiutare cause pubbliche e aziende che apprezzano il tuo stile dedicato e diretto."
  },

  soul: {
    "title": "Desiderio dell'Anima",
    "description": "Questa influenza presenta una visione del tuo te stesso intuitivo e dell'anima.",
    "func": "Vocali nel nome",
    "1": "Il Desiderio dell'Anima è quello di essere innovativo, creativo e guidare le masse verso un livello superiore di coscienza e comprensione che genera compassione per tutti.",
    "2": "Il Desiderio dell'Anima è quello di portare pace, armonia e grazia per sviluppare qualità più amorevoli e protettive in coloro che conosci e conforti.",
    "3": "Il Desiderio dell'Anima è quello di portare GIOIA, entusiasmo, passione e stimolare l'immaginazione degli altri con creatività e concetti ed interessi dal cuore riscaldante.",
    "4": "Il Desiderio dell'Anima è quello di fornire onestà, affidabilità, praticità e determinazione per aiutare gli altri e te stesso a ottenere risultati ispiratori e illuminanti.",
    "5": "Il Desiderio dell'Anima è quello di utilizzare la tua energia traboccante, apertura mentale e attributi mentali progressisti per contribuire a portare contributi di alto livello all'umanità.",
    "6": "Il Desiderio dell'Anima è quello di essere responsabile, coscienzioso, premuroso e gentile verso tutti e insegnare, consigliare e confortare per mantenere queste qualità in te stesso.",
    "7": "Il Desiderio dell'Anima è quello di utilizzare la tua natura analitica, orientata alla ricerca e interrogativa per scoprire o svelare qualcosa di significativo che aiuti molti, e non solo pochi.",
    "8": "Il Desiderio dell'Anima è quello di portare qualità, coerenza e ispirazione agli altri e di effettuare la tua naturale finezza e qualità in tutto ciò che tocchi.",
    "9": "Il Desiderio dell'Anima è quello di utilizzare le tue qualità aristocratiche, gentili ed umane con coerenza, che aiuteranno a preparare il terreno per gli altri.",
    "11": "Il Desiderio dell'Anima è quello di portare pace, armonia, bellezza e onorabilità come esempi delle tue più alte qualità spirituali, perché tutti possano apprezzarle e sperabilmente imitarle.",
    "22": "Il Desiderio dell'Anima è quello di organizzare e costruire; mantenere un'impresa aziendale che offra lavoro ad altri e aiuti le persone attraverso il servizio alla comunità e forse in tutto il mondo."
  },

  agenda: {
    "title": "Agenda Nascosta",
    "description": "Questa vibrazione offre i tuoi desideri innati (nascosti).",
    "func": "Consonanti nel nome",
    "1": "Questa agenda incita il desiderio innato di essere indipendente, di guidare, di innovare e di creare concetti e cose originali e uniche.",
    "2": "Questa agenda porta il desiderio innato di vivere la vita in pace e armonia, producendo una natura non aggressiva, cooperativa e cordiale per tutti.",
    "3": "Questa agenda ispira il desiderio innato di essere più creativo, divertente e di viaggiare per il mondo, portando maggiore piacere e gioia a tutti coloro che interagiscono con la tua persona incoraggiante.",
    "4": "Questa agenda richiede logica, organizzazione e perseveranza per manifestare i bisogni innati, i desideri e la pace interiore che custodisci e tieni.",
    "5": "Questa agenda ispira il desiderio innato di libertà più di qualsiasi altra cosa, insieme all'acquisizione della capacità di viaggiare e vivere senza restrizioni il più possibile.",
    "6": "Questa agenda ha una forte concentrazione sull'umanitarismo innato - aiutare e servire gli altri e la comunità.",
    "7": "Questa agenda ispira il desiderio innato di studiare e analizzare sistematicamente tutto ciò che possa contribuire al tuo benessere e a quello degli altri.",
    "8": "Questa agenda stimola il desiderio innato di essere un'autorità e di costruire qualcosa di duraturo nella tua vita e nell'azienda, nel governo o nella tua comunità.",
    "9": "Questa agenda spinge il desiderio innato di portare amore, compassione, saggezza e guarigione all'umanità.",
    "11": "Questa agenda porta il desiderio innato di portare l'armonia tra le varie forze e gruppi di persone e, a volte, può portare all'ideale dell'essere universalmente riconosciuto come \"il migliore dei mediatori\".",
    "22": "Questa agenda è simile a un architetto - fornendo il desiderio innato di pianificare e costruire aziende, quartieri o strutture che porteranno un beneficio duraturo alle persone in generale."
  },

  purpose:{
    "title": "Scopo Divino",
    "description": "Questa è la vibrazione del numero della tua esibizione di commiato. È ciò che il tuo Sé Spirituale ha scelto di realizzare negli ultimi anni della tua vita.",
    "func": "Destino + Carattere",
    "1": "Il tuo Scopo Divino è lasciare dietro di te un'eredità di qualcosa che hai inaugurato - un concetto, un prodotto, una fondazione.",
    "2": "Il tuo Scopo Divino è portare pace, conforto e armonia ai tuoi simili.",
    "3": "Il tuo Scopo Divino è utilizzare i tuoi talenti creativi e immaginativi per produrre un prodotto, un'idea, un libro, un film o altre forme di espressione artistica.",
    "4": "Il tuo Scopo Divino è costruire una solida base che aiuti le persone e abbia uno scopo umanitario.",
    "5": "Il tuo Scopo Divino è contribuire a cambiamenti progressivi che migliorino la vita per le generazioni future.",
    "6": "Il tuo Scopo Divino è insegnare, promuovere e sostenere cause umanitarie, prenderti cura di casa e famiglia e avere una responsabilità sociale.",
    "7": "Il tuo Scopo Divino è trasmettere la vasta conoscenza che hai acquisito in una scienza, un'arte, una filosofia o una religione attraverso un'impresa creativa.",
    "8": "Il tuo Scopo Divino è guidare, dirigere, iniziare e promuovere come un leader o un esecutivo e aiutare i meno fortunati attraverso la filantropia.",
    "9": "Il tuo Scopo Divino è essere un umanitario universale - un buon genitore, un buon compagno e un buon cittadino; un filantropo, un ministro, un politico - lavorando per il miglioramento dell'umanità.",
    "11": "Il tuo Scopo Divino è aiutare le persone nei piani spirituali, psicologici e mentali. Elevare gli altri con parole di saggezza; ascoltare, consigliare e aiutare gli altri a progredire nel loro cammino di vita.",
    "22": "Il tuo Scopo Divino è organizzare e costruire; mantenere un'impresa commerciale che offre lavoro ad altre persone e aiuta le persone attraverso il servizio alla comunità e forse in tutto il mondo."
  }

}

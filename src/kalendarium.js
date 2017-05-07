var Kalendarium = {
    dates : {
        "1/1": " Kalendae Iānuāriae: Aesculapius, Vediovis",
        "1/2": " ante diem quārtum Nōnās Iānuāriās",
        "1/3": " ante diem tertium Nōnās Iānuāriās: Compitalia",
        "1/4": " prīdiē Nōnās Iānuāriās",
        "1/5": " Nōnae Iānuāriae : Vica Pota",
        "1/6": " antediem octāvum Īdūs Iānuāriās",
        "1/7": " antediem septimum Īdūs Iānuāriās",
        "1/8": " antediem sextum Īdūs Iānuāriās",
        "1/9": " antediem quīntum Īdūs Iānuāriās: Agonalia",
        "1/10": " ante diem quārtum Īdūs Iānuāriās",
        "1/11": " ante diem tertium Īdūs Iānuāriās: Carmentalia, Iuturnalia",
        "1/12": " prīdiē Īdūs Iānuāriās",
        "1/13": " Īdūs Iānuāriae",
        "1/14": " ante diem undevīcēsimum Kalendās Februāriās",
        "1/15": " ante diem duodevīcēsimum Kalendās Februāriās: Carmentalia",
        "1/16": " ante diem septimum decimum Kalendās Februāriās: Concordia",
        "1/17": " ante diem sextum decimum Kalendās Februāriās",
        "1/18": " ante diem quīntum decimum Kalendās Februāriās",
        "1/19": " ante diem quārtum decimum Kalendās Februāriās",
        "1/20": " ante diem tertium decimum Kalendās Februāriās",
        "1/21": " ante diem duodecimum Kalendās Februāriās",
        "1/22": " ante diem ūndecimum Kalendās Februāriās: Ludi Palatini",
        "1/23": " ante diem decimum Kalendās Februāriās",
        "1/24": " ante diem nōnum Kalendās Februāriās: Paganalia",
        "1/25": " ante diem octāvum Kalendās Februāriās: Sementina",
        "1/26": " ante diem septimum Kalendās Februāriās",
        "1/27": " ante diem sextum Kalendās Februāriās: Dedicatio aedis Castorum",
        "1/28": " ante diem quīntum Kalendās Februāriās",
        "1/29": " ante diem quārtum Kalendās Februāriās",
        "1/30": " ante diem tertium Kalendās Februāriās: Ara Pacis Augustae",
        "1/31": " prīdiē Kalendās Februāriās",
        "2/1": " Kalendae Februāriae : Iuno Sospita Mater Regina, Ceres",
        "2/2": " ante diem quārtum Nōnās Februāriās",
        "2/3": " ante diem tertium Nōnās Februāriās",
        "2/4": " prīdiē Nōnās Februāriās",
        "2/5": " Nōnae Februāriae: Augustus Pater Patriae",
        "2/6": " ante diem octāvum Īdūs Februāriās",
        "2/7": " ante diem septimum Īdūs Februāriās",
        "2/8": " ante diem sextum Īdūs Februāriās",
        "2/9": " ante diem quīntum Īdūs Februāriās: Apollo",
        "2/10": " ante diem quārtum Īdūs Februāriās",
        "2/11": " ante diem tertium Īdūs Februāriās",
        "2/12": " prīdiē Īdūs Februāriās : Diana",
        "2/13": " Īdūs Februāriae: Faunalia, Parentalia",
        "2/14": " ante diem sextum decimum Kalendās Mārtiās: Iuno Februra",
        "2/15": " ante diem quīntum decimum Kalendās Mārtiās: Lupercalia",
        "2/16": " ante diem quārtum decimum Kalendās Mārtiās",
        "2/17": " ante diem tertium decimum Kalendās Mārtiās: Quirinalia",
        "2/18": " ante diem duodecimum Kalendās Mārtiās: Tacita",
        "2/19": " ante diem ūndecimum Kalendās Mārtiās",
        "2/20": " ante diem decimum Kalendās Mārtiās",
        "2/21": " ante diem nōnum Kalendās Mārtiās: Feralia",
        "2/22": " ante diem octāvum Kalendās Mārtiās: Caristia",
        "2/23": " ante diem septimum Kalendās Mārtiās: Terminalia",
        "2/24": " ante diem sextum Kalendās Mārtiās: Regifugium",
        "2/25": " ante diem quīntum Kalendās Mārtiās: Sementina",
        "2/26": " ante diem quārtum Kalendās Mārtiās",
        "2/27": " ante diem tertium Kalendās Mārtiās: Equirria",
        "2/28": " prīdiē Kalendās Mārtiās",
        "2/29": " prīdiē Kalendās Mārtiās",
        "3/1": " Kalendae Mārtiae: Matronalia",
        "3/2": " ante diem sextum Nōnās Mārtiās",
        "3/3": " ante diem quīntum Nōnās Mārtiās",
        "3/4": " ante diem quārtum Nōnās Mārtiās",
        "3/5": " ante diem tertium Nōnās Mārtiās: Navigium Isidis",
        "3/6": " prīdiē Nōnās Mārtiās: Festum Vestae",
        "3/7": " Nōnae Mārtiae",
        "3/8": " ante diem octāvum Īdūs Mārtiās",
        "3/9": " ante diem septimum Īdūs Mārtiās",
        "3/10": " ante diem sextum Īdūs Mārtiās",
        "3/11": " ante diem quīntum Īdūs Mārtiās",
        "3/12": " ante diem quārtum Īdūs Mārtiās",
        "3/13": " ante diem tertium Īdūs Mārtiās",
        "3/14": " prīdiē Īdūs Mārtiās: Equirria, Salii",
        "3/15": " Īdūs Mārtiae: Festum Annae Perennae, Attis",
        "3/16": " ante diem septimum decimum Kalendās Aprīlēs: Mamuralia, Argei",
        "3/17": " ante diem sextum decimum Kalendās Aprīlēs: Liberalia, Agonalia, Argei",
        "3/18": " ante diem quīntum decimum Kalendās Aprīlēs",
        "3/19": " ante diem quārtum decimum Kalendās Aprīlēs: Quinquatria",
        "3/20": " ante diem tertium decimum Kalendās Aprīlēs: Quinquatria, Pelusia",
        "3/21": " ante diem duodecimum Kalendās Aprīlēs: Quinquatria",
        "3/22": " ante diem ūndecimum Kalendās Aprīlēs: Quinquatria, Festum Mangae Matris et Attidis, Hilaria",
        "3/23": " ante diem decimum Kalendās Aprīlēs: Quinquatria, Hilaria, Tubilustrium",
        "3/24": " ante diem nōnum Kalendās Aprīlēs: Hilaria",
        "3/25": " ante diem octāvum Kalendās Aprīlēs: Hilaria",
        "3/26": " ante diem septimum Kalendās Aprīlēs: Hilaria",
        "3/27": " ante diem sextum Kalendās Aprīlēs: Hilaria",
        "3/28": " ante diem quīntum Kalendās Aprīlēs",
        "3/29": " ante diem quārtum Kalendās Aprīlēs",
        "3/30": " ante diem tertium Kalendās Aprīlēs: Salus Publica, Concordia et Pax",
        "3/31": " prīdiē Kalendās Aprīlēs: Luna",
        "4/1": " Kalendae Aprīlēs: Venus Verticordia, Fortuna Virilis",
        "4/2": " ante diem quārtum Nōnās Aprīlēs",
        "4/3": " ante diem tertium Nōnās Aprīlēs",
        "4/4": " prīdiē Nōnās Aprīlēs: Magna Mater, Ludi Megalenses",
        "4/5": " Nōnae Aprīlēs: Fortuna Publica, Ludi Megalenses",
        "4/6": " ante diem octāvum Īdūs Aprīlēs: Ludi Megalenses",
        "4/7": " ante diem septimum Īdūs Aprīlēs: Ludi Megalenses",
        "4/8": " ante diem sextum Īdūs Aprīlēs: Ludi Megalenses",
        "4/9": " ante diem quīntum Īdūs Aprīlēs: Ludi Megalenses",
        "4/10": " ante diem quārtum Īdūs Aprīlēs: Magna Mater, Ludi Megalenses",
        "4/11": " ante diem tertium Īdūs Aprīlēs",
        "4/12": " prīdiē Īdūs Aprīlēs: Ludi Ceriales",
        "4/13": " Īdūs Aprīlēs: Iuppiter Victor, Ludi Ceriales",
        "4/14": " ante diem duodevīcēsimum Kalendās Māiās: Ludi Ceriales",
        "4/15": " ante diem septimum decimum Kalendās Māiās: Fordicidia, Ludi Ceriales",
        "4/16": " ante diem sextum decimum Kalendās Māiās: Ludi Ceriales",
        "4/17": " ante diem quīntum decimum Kalendās Māiās: Ludi Ceriales",
        "4/18": " ante diem quārtum decimum Kalendās Māiās: Ludi Ceriales",
        "4/19": " ante diem tertium decimum Kalendās Māiās: Cerialia, Ludi Ceriales",
        "4/20": " ante diem duodecimum Kalendās Māiās",
        "4/21": " ante diem ūndecimum Kalendās Māiās: Parilia, Natalis Romae",
        "4/22": " ante diem decimum Kalendās Māiās",
        "4/23": " ante diem nōnum Kalendās Māiās: Vinalia Priora, Venus Ericina",
        "4/24": " ante diem octāvum Kalendās Māiās",
        "4/25": " ante diem septimum Kalendās Māiās: Robigalia, Serapia",
        "4/26": " ante diem sextum Kalendās Māiās",
        "4/27": " ante diem quīntum Kalendās Māiās",
        "4/28": " ante diem quārtum Kalendās Māiās: Floralia, Ludi Florales",
        "4/29": " ante diem tertium Kalendās Māiās: Ludi Florales",
        "4/30": " prīdiē Kalendās Māiās: Ludi Florales",
        "5/1": " Kalendae Māiae: Bona Dea, Laralia, Ludi Florales",
        "5/2": " ante diem sextum Nōnās Māiās : Ludi Florales",
        "5/3": " ante diem quīntum Nōnās Māiās: Flora, Ludi Florales Circenses",
        "5/4": " ante diem quārtum Nōnās Māiās",
        "5/5": " ante diem tertium Nōnās Māiās",
        "5/6": " prīdiē Nōnās Māiās",
        "5/7": " Nōnae Māiae",
        "5/8": " ante diem octāvum Īdūs Māiās",
        "5/9": " ante diem septimum Īdūs Māiās: Lemuria",
        "5/10": " ante diem sextum Īdūs Māiās",
        "5/11": " ante diem quīntum Īdūs Māiās: Lemuria, Mania",
        "5/12": " ante diem quārtum Īdūs Māiās: Mars Ultor, Ludi Martis Circenses",
        "5/13": " ante diem tertium Īdūs Māiās: Lemuria",
        "5/14": " prīdiē Īdūs Māiās: Argei",
        "5/15": " Īdūs Māiae: Mercuralia",
        "5/16": " ante diem septimum decimum Kalendās Iūniās",
        "5/17": " ante diem sextum decimum Kalendās Iūniās: Dea Dia",
        "5/18": " ante diem quīntum decimum Kalendās Iūniās",
        "5/19": " ante diem quārtum decimum Kalendās Iūniās",
        "5/20": " ante diem tertium decimum Kalendās Iūniās",
        "5/21": " ante diem duodecimum Kalendās Iūniās: Agonalia",
        "5/22": " ante diem ūndecimum Kalendās Iūniās",
        "5/23": " ante diem decimum Kalendās Iūniās: Tubilustrium",
        "5/24": " ante diem nōnum Kalendās Iūniās",
        "5/25": " ante diem octāvum Kalendās Iūniās: Festum Fortunae publicae",
        "5/26": " ante diem septimum Kalendās Iūniās",
        "5/27": " ante diem sextum Kalendās Iūniās",
        "5/28": " ante diem quīntum Kalendās Iūniās",
        "5/29": " ante diem quārtum Kalendās Iūniās: Ambarvalia, Ludi Honoris et Virtutis",
        "5/30": " ante diem tertium Kalendās Iūniās",
        "5/31": " prīdiē Kalendās Iūniās",
        "6/1": " Kalendae Iūniae: Carnaria, Mars, Tempestas, Iuno Moneta",
        "6/2": " ante diem quārtum Nōnās Iūniās",
        "6/3": " ante diem tertium Nōnās Iūniās: Bellona",
        "6/4": " prīdiē Nōnās Iūniās: Hercules Magnus Custos",
        "6/5": " Nōnae Iūniae: Semo Sancus Dius Fidius",
        "6/6": " ante diem octāvum Īdūs Iūniās",
        "6/7": " ante diem septimum Īdūs Iūniās: Piscatorii Ludi, Tiberinus",
        "6/8": " ante diem sextum Īdūs Iūniās: Festum Mentis et Intellectus",
        "6/9": " ante diem quīntum Īdūs Iūniās: Festum Iovis Pistoris, Vestalia",
        "6/10": " ante diem quārtum Īdūs Iūniās: Festum Fortunae virilis",
        "6/11": " ante diem tertium Īdūs Iūniās: Matralia, Fortuna",
        "6/12": " prīdiē Īdūs Iūniās",
        "6/13": " Īdūs Iūniae: Festum Iovis Invicti, Quinquatrus Minores",
        "6/14": " ante diem duodevīcēsimum Kalendās Iūliās: Quinquatrus Minores",
        "6/15": " ante diem septimum decimum Kalendās Iūliās: Quinquatrus Minores",
        "6/16": " ante diem sextum decimum Kalendās Iūliās",
        "6/17": " ante diem quīntum decimum Kalendās Iūliās",
        "6/18": " ante diem quārtum decimum Kalendās Iūliās",
        "6/19": " ante diem tertium decimum Kalendās Iūliās: Minerva",
        "6/20": " ante diem duodecimum Kalendās Iūliās: Dies Summani",
        "6/21": " ante diem ūndecimum Kalendās Iūliās",
        "6/22": " ante diem decimum Kalendās Iūliās",
        "6/23": " ante diem nōnum Kalendās Iūliās",
        "6/24": " ante diem octāvum Kalendās Iūliās: Dies Fortis Fortunae",
        "6/25": " ante diem septimum Kalendās Iūliās: Ludi Taurei Quinqunnales",
        "6/26": " ante diem sextum Kalendās Iūliās: Ludi Taurei Quinqunnales",
        "6/27": " ante diem quīntum Kalendās Iūliās: Iuppiter Stator, Lares",
        "6/28": " ante diem quārtum Kalendās Iūliās",
        "6/29": " ante diem tertium Kalendās Iūliās: Dies Quirini, Hercules Musarum",
        "6/30": " prīdiē Kalendās Iūliās",
        "7/1": " Kalendae Iūliae: Iuno Felicitas",
        "7/2": " ante diem sextum Nōnās Iūliās",
        "7/3": " ante diem quīntum Nōnās Iūliās",
        "7/4": " ante diem quārtum Nōnās Iūliās",
        "7/5": " ante diem tertium Nōnās Iūliās: Poplifugia",
        "7/6": " prīdiē Nōnās Iūliās: Festum Fortunae muliebris, Ludi Apollinares",
        "7/7": " Nōnae Iūliae : Nones Caprotinae , Ludi Apollinares, Palibus Duobus, Ancillarum Feriae, Consus",
        "7/8": " ante diem octāvum Īdūs Iūliās: Vitulatio, Ludi Apollinares",
        "7/9": " ante diem septimum Īdūs Iūliās: Ludi Apollinares",
        "7/10": " ante diem sextum Īdūs Iūliās: Ludi Apollinares",
        "7/11": " ante diem quīntum Īdūs Iūliās: Ludi Apollinares",
        "7/12": " ante diem quārtum Īdūs Iūliās: Ludi Apollinares",
        "7/13": " ante diem tertium Īdūs Iūliās: Apollo, Ludi Apollinares",
        "7/14": " prīdiē Īdūs Iūliās: Festum Fortunae muliebris",
        "7/15": " Īdūs Iūliae: Castor et Pollux, Honor et Virtus, Dies Equitum Romanorum",
        "7/16": " ante diem septimum decimum Kalendās Augustās",
        "7/17": " ante diem sextum decimum Kalendās Augustās: Honos / Victoria",
        "7/18": " ante diem quīntum decimum Kalendās Augustās",
        "7/19": " ante diem quārtum decimum Kalendās Augustās: Lucaria",
        "7/20": " ante diem tertium decimum Kalendās Augustās",
        "7/21": " ante diem duodecimum Kalendās Augustās: Lucaria, Ludi Victoriae Caesaris",
        "7/22": " ante diem ūndecimum Kalendās Augustās: Ludi Victoriae Caesaris, Concordia",
        "7/23": " ante diem decimum Kalendās Augustās: Neptunalia, Ludi Victoriae Caesaris",
        "7/24": " ante diem nōnum Kalendās Augustās: Ludi Victoriae Caesaris",
        "7/25": " ante diem octāvum Kalendās Augustās: Furrinalia, Ludi Victoriae Caesaris",
        "7/26": " ante diem septimum Kalendās Augustās: Ludi Victoriae Caesaris",
        "7/27": " ante diem sextum Kalendās Augustās: Ludi Victoriae Caesaris",
        "7/28": " ante diem quīntum Kalendās Augustās: Ludi Victoriae Caesaris",
        "7/29": " ante diem quārtum Kalendās Augustās: Ludi Victoriae Caesaris",
        "7/30": " ante diem tertium Kalendās Augustās: Ludi Victoriae Caesaris, Fortuna Diei",
        "7/31": " prīdiē Kalendās Augustās: Ludi Victoriae Caesaris",
        "8/1": " Kalendae Augustae: Festum Spei et Martis",
        "8/2": " ante diem quārtum Nōnās Augustās",
        "8/3": " ante diem tertium Nōnās Augustās: Supplicia canum",
        "8/4": " prīdiē Nōnās Augustās",
        "8/5": " Nōnae Augustae: Festum Salutis",
        "8/6": " ante diem octāvum Īdūs Augustās",
        "8/7": " ante diem septimum Īdūs Augustās",
        "8/8": " ante diem sextum Īdūs Augustās",
        "8/9": " ante diem quīntum Īdūs Augustās: Sol Indiges",
        "8/10": " ante diem quārtum Īdūs Augustās",
        "8/11": " ante diem tertium Īdūs Augustās",
        "8/12": " prīdiē Īdūs Augustās: Hercules Invictus, Venus Victrix, Hermes Invictus, Lychnapsia, Honor-Virtus-Felicitas",
        "8/13": " Īdūs Augustae: Hercules Victor, Diana, Flora, Castor et Pollux, Vertumnalia, Fortuna Equestri, Camenae",
        "8/14": " ante diem undevīcēsimum Kalendās Septembrēs",
        "8/15": " ante diem duodevīcēsimum Kalendās Septembrēs: Festum Astreae",
        "8/16": " ante diem septimum decimum Kalendās Septembrēs",
        "8/17": " ante diem sextum decimum Kalendās Septembrēs: Portunalia",
        "8/18": " ante diem quīntum decimum Kalendās Septembrēs",
        "8/19": " ante diem quārtum decimum Kalendās Septembrēs: Vinalia Rustica, Venus",
        "8/20": " ante diem tertium decimum Kalendās Septembrēs",
        "8/21": " ante diem duodecimum Kalendās Septembrēs: Consualia",
        "8/22": " ante diem ūndecimum Kalendās Septembrēs",
        "8/23": " ante diem decimum Kalendās Septembrēs: Volcanalia",
        "8/24": " ante diem nōnum Kalendās Septembrēs: Luna, Mundus Patet",
        "8/25": " ante diem octāvum Kalendās Septembrēs: Opiconsivia",
        "8/26": " ante diem septimum Kalendās Septembrēs",
        "8/27": " ante diem sextum Kalendās Septembrēs: Volturnia",
        "8/28": " ante diem quīntum Kalendās Septembrēs: Festum Victoriae, Sol et Luna",
        "8/29": " ante diem quārtum Kalendās Septembrēs",
        "8/30": " ante diem tertium Kalendās Septembrēs",
        "8/31": " prīdiē Kalendās Septembrēs",
        "9/1": " Kalendae Septembrēs: Natalis Telluris, Iuno Regina",
        "9/2": " ante diem quārtum Nōnās Septembrēs",
        "9/3": " ante diem tertium Nōnās Septembrēs",
        "9/4": " prīdiē Nōnās Septembrēs:",
        "9/5": " Nōnae Septembrēs: Iuppiter Stator, Ludi Romani",
        "9/6": " ante diem octāvum Īdūs Septembrēs: Ludi Romani",
        "9/7": " ante diem septimum Īdūs Septembrēs: Ludi Romani",
        "9/8": " ante diem sextum Īdūs Septembrēs: Ludi Romani",
        "9/9": " ante diem quīntum Īdūs Septembrēs: Ludi Romani",
        "9/10": " ante diem quārtum Īdūs Septembrēs: Ludi Romani",
        "9/11": " ante diem tertium Īdūs Septembrēs: Ludi Romani",
        "9/12": " prīdiē Īdūs Septembrēs: Ludi Romani",
        "9/13": " Īdūs Septembrēs: Epulum Iovis, Iuppiter Optimus Maximus, Ludi Romani",
        "9/14": " ante diem undevīcēsimum Kalendās Octōbrēs: Ludi Romani",
        "9/15": " ante diem septimum decimum Kalendās Octōbrēs: Ludi Romani",
        "9/16": " ante diem sextum decimum Kalendās Octōbrēs: Ludi Romani",
        "9/17": " ante diem quīntum decimum Kalendās Octōbrēs: Ludi Romani",
        "9/18": " ante diem quārtum decimum Kalendās Octōbrēs: Ludi Romani",
        "9/19": " ante diem tertium decimum Kalendās Octōbrēs: Ludi Romani",
        "9/20": " ante diem duodecimum Kalendās Octōbrēs: Natalis Romuli",
        "9/21": " ante diem ūndecimum Kalendās Octōbrēs",
        "9/22": " ante diem decimum Kalendās Octōbrēs",
        "9/23": " ante diem nōnum Kalendās Octōbrēs: Natalis Augusti, Apollo, Ceres",
        "9/24": " ante diem octāvum Kalendās Octōbrēs",
        "9/25": " ante diem septimum Kalendās Octōbrēs",
        "9/26": " ante diem sextum Kalendās Octōbrēs: Venus Genetrix",
        "9/27": " ante diem quīntum Kalendās Octōbrēs: Festum Fortunae reducis",
        "9/28": " ante diem quārtum Kalendās Octōbrēs",
        "9/29": " ante diem tertium Kalendās Octōbrēs",
        "9/30": " prīdiē Kalendās Octōbrēs",
        "10/1": " Kalendae Octōbrēs : Fides et Honor, Tigillum Sororium, Ceres",
        "10/2": " ante diem sextum Nōnās Octōbrēs",
        "10/3": " ante diem quīntum Nōnās Octōbrēs: Ludi Divi Augusti et Fortunae Reducis",
        "10/4": " ante diem quārtum Nōnās Octōbrēs: Ieiunium Cereris, Ludi Divi Augusti et Fortunae Reducis",
        "10/5": " ante diem tertium Nōnās Octōbrēs: Mundus Patet - Mania , Ludi Divi Augusti et Fortunae Reducis:",
        "10/6": " prīdiē Nōnās Octōbrēs: Ludi Divi Augusti et Fortunae Reducis",
        "10/7": " Nōnae Octōbrēs: Ludi Divi Augusti et Fortunae Reducis , Iuppiter Fulgur, Iuno Curitis",
        "10/8": " ante diem octāvum Īdūs Octōbrēs: Ludi Divi Augusti et Fortunae Reducis",
        "10/9": " ante diem septimum Īdūs Octōbrēs: Apollo Palatinus, Fausta Felicitas, , Genius Publicus, Venus Victrix, Ludi Divi Augusti et Fortunae Reducis",
        "10/10": " ante diem sextum Īdūs Octōbrēs: Ludi Divi Augusti et Fortunae Reducis, Iuno Moneta",
        "10/11": " ante diem quīntum Īdūs Octōbrēs: Meditrinalia, Ludi Divi Augusti et Fortunae Reducis",
        "10/12": " ante diem quārtum Īdūs Octōbrēs: Augustalia, Ludi Divi Augusti et Fortunae Reducis",
        "10/13": " ante diem tertium Īdūs Octōbrēs: Fontinalia",
        "10/14": " prīdiē Īdūs Octōbrēs: Penates Dei",
        "10/15": " Īdūs Octōbrēs: Ludi Capitolini, October Equus",
        "10/16": " ante diem septimum decimum Kalendās Novembrēs",
        "10/17": " ante diem sextum decimum Kalendās Novembrēs",
        "10/18": " ante diem quīntum decimum Kalendās Novembrēs",
        "10/19": " ante diem quārtum decimum Kalendās Novembrēs: Armilustrium",
        "10/20": " ante diem tertium decimum Kalendās Novembrēs",
        "10/21": " ante diem duodecimum Kalendās Novembrēs",
        "10/22": " ante diem ūndecimum Kalendās Novembrēs",
        "10/23": " ante diem decimum Kalendās Novembrēs: Festum Liberi patris et Liberae",
        "10/24": " ante diem nōnum Kalendās Novembrēs",
        "10/25": " ante diem octāvum Kalendās Novembrēs",
        "10/26": " ante diem septimum Kalendās Novembrēs: Ludi Victoriae Sullanae",
        "10/27": " ante diem sextum Kalendās Novembrēs: Ludi Victoriae Sullanae",
        "10/28": " ante diem quīntum Kalendās Novembrēs: Isia, Ludi Victoriae Sullanae",
        "10/29": " ante diem quārtum Kalendās Novembrēs: Isia, Ludi Victoriae Sullanae, Festum Vertumni",
        "10/30": " ante diem tertium Kalendās Novembrēs: Isia, Ludi Victoriae Sullanae",
        "10/31": " prīdiē Kalendās Novembrēs: Isia, Ludi Victoriae Sullanae",
        "11/1": " Kalendae Novembrēs: Isia, Ludi Victoriae Sullanae",
        "11/2": " ante diem quārtum Nōnās Novembrēs: Isia",
        "11/3": " ante diem tertium Nōnās Novembrēs: Hilaria, Isia",
        "11/4": " prīdiē Nōnās Novembrēs: Ludi Plebei",
        "11/5": " Nōnae Novembrēs: Ludi Plebei",
        "11/6": " ante diem octāvum Īdūs Novembrēs: Ludi Plebei",
        "11/7": " ante diem septimum Īdūs Novembrēs: Ludi Plebei",
        "11/8": " ante diem sextum Īdūs Novembrēs: Mundus Patet - Mania, Ludi Plebei",
        "11/9": " ante diem quīntum Īdūs Novembrēs: Ludi Plebei",
        "11/10": " ante diem quārtum Īdūs Novembrēs: Ludi Plebei",
        "11/11": " ante diem tertium Īdūs Novembrēs: Ludi Plebei",
        "11/12": " prīdiē Īdūs Novembrēs: Ludi Plebei",
        "11/13": " Īdūs Novembrēs: Epulum Iovis, Feronia, Fortuna Primigenia, Pietas, Ludi Plebei",
        "11/14": " ante diem duodevīcēsimum Kalendās Decembrēs: Equorum Probatio, Ludi Plebei",
        "11/15": " ante diem septimum decimum Kalendās Decembrēs: Ludi Plebei",
        "11/16": " ante diem sextum decimum Kalendās Decembrēs: Ludi Plebei",
        "11/17": " ante diem quīntum decimum Kalendās Decembrēs: Ludi Plebei",
        "11/18": " ante diem quārtum decimum Kalendās Decembrēs: Mercatus, Ceres",
        "11/19": " ante diem tertium decimum Kalendās Decembrēs: Lectisternia Cybeles, Mercatus",
        "11/20": " ante diem duodecimum Kalendās Decembrēs: Mercatus",
        "11/21": " ante diem ūndecimum Kalendās Decembrēs",
        "11/22": " ante diem decimum Kalendās Decembrēs: Festum Plutonis et Proserpinae",
        "11/23": " ante diem nōnum Kalendās Decembrēs",
        "11/24": " ante diem octāvum Kalendās Decembrēs",
        "11/25": " ante diem septimum Kalendās Decembrēs",
        "11/26": " ante diem sextum Kalendās Decembrēs",
        "11/27": " ante diem quīntum Kalendās Decembrēs",
        "11/28": " ante diem quārtum Kalendās Decembrēs",
        "11/29": " ante diem tertium Kalendās Decembrēs",
        "11/30": " prīdiē Kalendās Decembrēs",
        "12/1": " Kalendae Decembrēs: Neptunus, Pietas, Festum Fortunae muliebris",
        "12/2": " ante diem quārtum Nōnās Decembrēs",
        "12/3": " ante diem tertium Nōnās Decembrēs: Bona Dea, Ceres",
        "12/4": " prīdiē Nōnās Decembrēs",
        "12/5": " Nōnae Decembrēs: Faunalia Rustica",
        "12/6": " ante diem octāvum Īdūs Decembrēs: Faunalia Rustica",
        "12/7": " ante diem septimum Īdūs Decembrēs: Faunalia Rustica",
        "12/8": " ante diem sextum Īdūs Decembrēs: Tiberinalia, Faunalia Rustica, Gaia",
        "12/9": " ante diem quīntum Īdūs Decembrēs: Festum Iunonis iugalis",
        "12/10": " ante diem quārtum Īdūs Decembrēs: Septimontium Agonalia",
        "12/11": " ante diem tertium Īdūs Decembrēs: Septimontium Agonalia, Sol Indiges, Ianus",
        "12/12": " prīdiē Īdūs Decembrēs: Consus, Septimontium Agonalia",
        "12/13": " Īdūs Decembrēs: Tellus",
        "12/14": " ante diem undevīcēsimum Kalendās Iānuāriās",
        "12/15": " ante diem duodevīcēsimum Kalendās Iānuāriās: Consualia, Fortuna Redux",
        "12/16": " ante diem septimum decimum Kalendās Iānuāriās",
        "12/17": " ante diem sextum decimum Kalendās Iānuāriās: Saturnalia",
        "12/18": " ante diem quīntum decimum Kalendās Iānuāriās: Saturnalia",
        "12/19": " ante diem quārtum decimum Kalendās Iānuāriās: Opalia, Saturnalia",
        "12/20": " ante diem tertium decimum Kalendās Iānuāriās: Saturnalia",
        "12/21": " ante diem duodecimum Kalendās Iānuāriās: Divalia, Angeronalia, Saturnalia, Hercules et Ceres",
        "12/22": " ante diem ūndecimum Kalendās Iānuāriās: Saturnalia",
        "12/23": " ante diem decimum Kalendās Iānuāriās: Larentalia, Sol Invictus, Brumaia, Saturnalia",
        "12/24": " ante diem nōnum Kalendās Iānuāriās",
        "12/25": " ante diem octāvum Kalendās Iānuāriās: Natalis Solis invicti",
        "12/26": " ante diem septimum Kalendās Iānuāriās",
        "12/27": " ante diem sextum Kalendās Iānuāriās",
        "12/28": " ante diem quīntum Kalendās Iānuāriās",
        "12/29": " ante diem quārtum Kalendās Iānuāriās",
        "12/30": " ante diem tertium Kalendās Iānuāriās",
        "12/31": " prīdiē Kalendās Iānuāriās"
    },

    monthDay : function(d) {
        var month = d.getMonth() + 1;
        var day = d.getDate();
        return month + "/" + day;
    },

    translateDate : function (d) {
        return this.dates[this.monthDay(d)];
    },

    hodie : function () {
        return this.translateDate(new Date());
    }
};

function setRomanDate(elementId) {
    e = document.getElementById(elementId);
    e.appendChild(document.createTextNode(Kalendarium.hodie()));
}
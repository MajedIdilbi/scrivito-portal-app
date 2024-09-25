import * as Scrivito from "scrivito";

export const TEST_NAME_1 = "OBU GmbH & Co. Deutschland KG";
export const TEST_NAME_3 = "Karrer AG";
export const TEST_NAME_20 = "Baustoff Müller GmbH";
export const TEST_NAME_21 = "Krien Bau- und Planungsbüro GmbH";

const database = [
  {
    "_id": "DEC2B2A02D634E4296312F595F48C20C",
    "name": TEST_NAME_1,
    "number": "C-17-018874",
    "status": "PSA_ORG_SUP_WRK",
    "group": "PSA_ORG_SUP",
    "accountManager": "F87BDC400E41D630E030A8C00D01158A",
    "branch": "Einzelhandel (ohne Handel mit Kraftfahrzeugen)",
    "region": "Westdeutschland",
    "addressStreet": "Albert-Einstein-Straße 7-9",
    "addressPostalCode": "42929",
    "addressCity": "Wermelskirchen",
    "addressCountry": "DEU",
    "phone": "+49 2196 9062 000",
    "email": "info@obu-gmbh.de",
    "since": "2023-12-27T11:23:47Z",
    "occasion": "",
    "url": "www.obu-gmbh.de",
    "description": "",
    "image": {
      "_id": "00000008424c4f42000000403635384433363833413136443445424342383239314234334138423839313646000000424f425520476d6248202620436f2e20446575747363686c616e64204b472e6a7067",
      "filename": "OBU GmbH & Co. Deutschland KG.jpg",
      "contentType": "image/pjpeg",
      "contentLength": 5989
    }
  },
  {
    "_id": "5DC1AC09BDAB4C92BD35F7EE28DFA7C6",
    "name": "df automation GmbH",
    "number": "C-16-018706",
    "status": "PSA_ORG_SUP_IAL",
    "group": "PSA_ORG_SUP",
    "accountManager": "052601BEBCEC39C8E040A8C00D0107AC",
    "branch": "Herstellung von sonstigen nicht wirtschaftszweigspezifischen Maschinen",
    "region": "Süddeutschland",
    "addressStreet": "Joachim-Ringelnatz-Straße 5",
    "addressPostalCode": "97422",
    "addressCity": "Schweinfurt",
    "addressCountry": "DEU",
    "phone": "+49 9721 123-0",
    "email": "info@df-automation.biz",
    "since": "2023-11-08T13:34:48Z",
    "occasion": "",
    "url": "www.df-automation.biz",
    "description": "",
    "image": {
      "_id": "00000008424c4f420000004042424631303539443732314534423632423632374134304246344542344136330000002c6466206175746f6d6174696f6e20476d62482e6a7067",
      "filename": "df automation GmbH.jpg",
      "contentType": "image/pjpeg",
      "contentLength": 9170
    }
  },
  {
    "_id": "BDD537CEED4342B48D2C443E2DB247E0",
    "name": TEST_NAME_3,
    "number": "C-16-018673",
    "status": "PSA_ORG_SUP_WRK",
    "group": "PSA_ORG_SUP",
    "accountManager": "3DE0681608FE077AE040007F010065F8",
    "branch": "Maschinenbau",
    "region": "Vertriebsgebiet München",
    "addressStreet": "Lothstrasse 17",
    "addressPostalCode": "80335",
    "addressCity": "München",
    "addressCountry": "DEU",
    "phone": "+49 89 65498-0",
    "email": "anfrage@karrer.de",
    "since": "2023-11-27T08:17:08Z",
    "occasion": "",
    "url": "www.karrer-ag.de",
    "description": "",
    "image": {
      "_id": "00000008424c4f420000004031333036363333444642433134413343423939393031393734313443343735300000001a4b61727265722041472e706e67",
      "filename": "Karrer AG.png",
      "contentType": "image/x-png",
      "contentLength": 59254
    }
  },
  {
    "_id": "B63C3F5A91F84298B7739F94EB63DA70",
    "name": "Kromtech Industrieausrüstung AG",
    "number": "C-16-018672",
    "status": "PSA_ORG_SUP_WRK",
    "group": "PSA_ORG_SUP",
    "accountManager": "3DE0681608FE077AE040007F010065F8",
    "branch": "Handelsvermittlung",
    "region": "Vertriebsgebiet München",
    "addressStreet": "Am Blütenanger 21",
    "addressPostalCode": "80995",
    "addressCity": "München",
    "addressCountry": "DEU",
    "phone": "+49 89 76853-0",
    "email": "info@kromtech-ag.com",
    "since": "2023-11-25T14:55:40Z",
    "occasion": "",
    "url": "www.kromtech-ag.com",
    "description": "",
    "image": {
      "_id": "00000008424c4f42000000403631313941354635353042363439313642373836414637434431443735433838000000484b726f6d7465636820496e6475737472696561757372c3bc7374756e672041472e706e67",
      "filename": "Kromtech Industrieausrüstung AG.png",
      "contentType": "image/x-png",
      "contentLength": 48152
    }
  },
  {
    "_id": "D92E6C8C2D924C5FA216C6742DDCE476",
    "name": "Werricke Pumpen GmbH",
    "number": "C-16-018671",
    "status": "PSA_ORG_SUP_WRK",
    "group": "PSA_ORG_SUP",
    "accountManager": "F87BDC400E41D630E030A8C00D01158A",
    "branch": "Maschinenbau",
    "region": "Westdeutschland",
    "addressStreet": "Erkratherstrasse 8",
    "addressPostalCode": "40231",
    "addressCity": "Düsseldorf",
    "addressCountry": "DEU",
    "phone": "+49 211 54098-0",
    "email": "info@werricke.com",
    "since": "2023-11-25T14:47:10Z",
    "occasion": "",
    "url": "www.werricke.com",
    "description": "",
    "image": {
      "_id": "00000008424c4f42000000404346433038453130463934433444383239423441394435443939314544434241000000305765727269636b652050756d70656e20476d62482e706e67",
      "filename": "Werricke Pumpen GmbH.png",
      "contentType": "image/x-png",
      "contentLength": 38897
    }
  },
  {
    "_id": "D13279A9FF4644CC8041ADC5D4608744",
    "name": "Sigma Pumpen GmbH",
    "number": "C-16-018670",
    "status": "PSA_ORG_SUP_WRK",
    "group": "PSA_ORG_SUP",
    "accountManager": "052601BEBCEC39C8E040A8C00D0107AC",
    "branch": "Maschinenbau",
    "region": "Süddeutschland",
    "addressStreet": "Wodanstrasse 12",
    "addressPostalCode": "90461",
    "addressCity": "Nürnberg",
    "addressCountry": "DEU",
    "phone": "+49 911 6589-0",
    "email": "info@sigma-pumpen.de",
    "since": "2023-11-25T14:39:02Z",
    "occasion": "",
    "url": "www.sigma-pumpen.de",
    "description": "",
    "image": {
      "_id": "00000008424c4f420000004033383341334137373737444534303736413246444146463731314242444141370000002a5369676d612050756d70656e20476d62482e706e67",
      "filename": "Sigma Pumpen GmbH.png",
      "contentType": "image/x-png",
      "contentLength": 29072
    }
  },
  {
    "_id": "99A271796814481CA5FFBDC9A5615657",
    "name": "Igenhau Pharmahandel AG",
    "number": "C-16-018667",
    "status": "PSA_ORG_CST_WRK",
    "group": "PSA_ORG_CST",
    "accountManager": "F87BDC400E41D630E030A8C00D01158A",
    "branch": "",
    "region": "Westdeutschland",
    "addressStreet": "Im Dombach 2",
    "addressPostalCode": "35713",
    "addressCity": "Eschenburg",
    "addressCountry": "DEU",
    "phone": "+49 2774 69002",
    "email": "kontakt@igenhau.de",
    "since": "2023-11-13T12:40:45Z",
    "occasion": "Anfrage",
    "url": "www.igenhau.de",
    "description": "",
    "image": {
      "_id": "00000008424c4f42000000403844443336373641453037313438373941374445414341443544444232364630000000364967656e68617520506861726d6168616e64656c2041472e706e67",
      "filename": "Igenhau Pharmahandel AG.png",
      "contentType": "image/x-png",
      "contentLength": 36974
    }
  },
  {
    "_id": "B0C96E9CD54A4D3A978EA41FA532F2FF",
    "name": "Maxi Tech AG",
    "number": "C-16-018664",
    "status": "PSA_ORG_CST_WRK",
    "group": "PSA_ORG_CST",
    "accountManager": "052601BEBCEC39C8E040A8C00D0107AC",
    "branch": "",
    "region": "Italien",
    "addressStreet": "Via Campansi 29",
    "addressPostalCode": "53100",
    "addressCity": "Siena",
    "addressCountry": "ITA",
    "phone": "+39 577228843",
    "email": "",
    "since": "2023-12-04T10:38:22Z",
    "occasion": "Anfrage",
    "url": "www.maxitech.it",
    "description": "",
    "image": {
      "_id": "00000008424c4f42000000403232324645323231414238393434463338383033313642383245373442313743000000204d61786920546563682041472e706e67",
      "filename": "Maxi Tech AG.png",
      "contentType": "image/x-png",
      "contentLength": 26875
    }
  },
  {
    "_id": "4493370713C8468896E4053DC8EF9D6F",
    "name": "Spritzguss GmbH",
    "number": "C-16-018660",
    "status": "PSA_ORG_SUP_WRK",
    "group": "PSA_ORG_SUP",
    "accountManager": "3DE0681608FE077AE040007F010065F8",
    "branch": "Metallerzeugung und -bearbeitung",
    "region": "Vertriebsgebiet 86-89",
    "addressStreet": "Chemnitzerstrasse 23",
    "addressPostalCode": "86157",
    "addressCity": "Augsburg",
    "addressCountry": "DEU",
    "phone": "+49 821 5429-0",
    "email": "info@spritzguss.de",
    "since": "2023-11-05T14:11:48Z",
    "occasion": "",
    "url": "www.spritzguss.de",
    "description": "",
    "image": {
      "_id": "00000008424c4f420000004044413346393739373846373734314532393738373145323736444533343545330000002653707269747a6775737320476d62482e706e67",
      "filename": "Spritzguss GmbH.png",
      "contentType": "image/x-png",
      "contentLength": 43303
    }
  },
  {
    "_id": "BC7E1035DA0940FFB71196E60ACD5176",
    "name": "Joseph Trichtermann Bauunternehmung GmbH",
    "number": "C-14-018418",
    "status": "PSA_ORG_LEA_PRC",
    "group": "PSA_ORG_LEA",
    "accountManager": "F87BDC400E41D630E030A8C00D01158A",
    "branch": "Erschließung von Grundstücken; Bauträger",
    "region": "Westdeutschland",
    "addressStreet": "Wasserweg 2A",
    "addressPostalCode": "64521",
    "addressCity": "Groß-Gerau",
    "addressCountry": "DEU",
    "phone": "+49 61528808010",
    "email": "info@trichtermann.de",
    "since": "2020-12-20T13:50:55Z",
    "occasion": "Roadshow (Baumax)",
    "url": "www.trichtermann.de",
    "description": "",
    "image": {
      "_id": "00000008424c4f42000000404246444431414636354542363445314638354234353245434235353034434244000000584a6f736570682054726963687465726d616e6e20426175756e7465726e65686d756e6720476d62482e706e67",
      "filename": "Joseph Trichtermann Bauunternehmung GmbH.png",
      "contentType": "image/x-png",
      "contentLength": 16291
    }
  },
  {
    "_id": "7A3830F8DB9342E9A3DAD74B24C005D8",
    "name": "Baugeschäft M. Heuss GmbH",
    "number": "C-14-018417",
    "status": "PSA_ORG_LEA_PRC",
    "group": "PSA_ORG_LEA",
    "accountManager": "F87BDC400E41D630E030A8C00D01158A",
    "branch": "Erschließung von Grundstücken; Bauträger",
    "region": "Westdeutschland",
    "addressStreet": "Gartenstraße 30",
    "addressPostalCode": "63263",
    "addressCity": "Neu-Isenburg",
    "addressCountry": "DEU",
    "phone": "+49 6102747400",
    "email": "info@heuss-bau.de",
    "since": "2021-12-20T13:48:41Z",
    "occasion": "Roadshow (Baumax)",
    "url": "www.heuss-bau.de",
    "description": "",
    "image": {
      "_id": "00000008424c4f420000004042373732303737433545353334333630423939353632373431433134353236460000003c4261756765736368c3a46674204d2e20486575737320476d62482e706e67",
      "filename": "Baugeschäft M. Heuss GmbH.png",
      "contentType": "image/x-png",
      "contentLength": 10651
    }
  },
  {
    "_id": "7A5B0AFAF28F416B8CC162401281546A",
    "name": "Lichtbau AG",
    "number": "C-14-018416",
    "status": "PSA_ORG_LEA_PRC",
    "group": "PSA_ORG_LEA",
    "accountManager": "052601BEBCEC39C8E040A8C00D0107AC",
    "branch": "Bauinstallation",
    "region": "Süddeutschland",
    "addressStreet": "Neumühlstraße 1",
    "addressPostalCode": "84100",
    "addressCity": "Niederaichbach",
    "addressCountry": "DEU",
    "phone": "+49 8702390200",
    "email": "info@lichtbau.de",
    "since": "2019-12-20T13:46:58Z",
    "occasion": "Eingehende Anfrage",
    "url": "www.lichtbau.de",
    "description": "",
    "image": {
      "_id": "00000008424c4f420000004042413430364233373934393834374238384136453744344336343742314136380000001e4c696368746261752041472e706e67",
      "filename": "Lichtbau AG.png",
      "contentType": "image/x-png",
      "contentLength": 11605
    }
  },
  {
    "_id": "19F18116D02745F698A53A0544E5413E",
    "name": "Birgler Elektrotechnik GmbH",
    "number": "C-14-018415",
    "status": "PSA_ORG_LEA_PRC",
    "group": "PSA_ORG_LEA",
    "accountManager": "052601BEBCEC39C8E040A8C00D0107AC",
    "branch": "Bauinstallation",
    "region": "Süddeutschland",
    "addressStreet": "Ödenthal 11",
    "addressPostalCode": "93057",
    "addressCity": "Regensburg",
    "addressCountry": "DEU",
    "phone": "+49 9414504500",
    "email": "info@birgler-elektro.de",
    "since": "2021-12-20T13:45:10Z",
    "occasion": "Heinze",
    "url": "www.birgler-elektro.de",
    "description": "",
    "image": {
      "_id": "00000008424c4f420000004036343845394632464538423234324141424243383437453034303939393139430000003e426972676c657220456c656b74726f746563686e696b20476d62482e706e67",
      "filename": "Birgler Elektrotechnik GmbH.png",
      "contentType": "image/x-png",
      "contentLength": 14352
    }
  },
  {
    "_id": "3CE0FA34203C493F8FD40CA9D07767F4",
    "name": "Imbau AG",
    "number": "C-14-018414",
    "status": "PSA_ORG_LEA_PRC",
    "group": "PSA_ORG_LEA",
    "accountManager": "052601BEBCEC39C8E040A8C00D0107AC",
    "branch": "Bauinstallation",
    "region": "Süddeutschland",
    "addressStreet": "Margaretenstraße 15",
    "addressPostalCode": "93047",
    "addressCity": "Regensburg",
    "addressCountry": "DEU",
    "phone": "+49 9415015020",
    "email": "info@imbau.com",
    "since": "2021-12-20T13:41:49Z",
    "occasion": "Heinze",
    "url": "www.imbau.com",
    "description": "",
    "image": {
      "_id": "00000008424c4f4200000040434632394235413333394635343737314244443944454335343034354433433200000018496d6261752041472e706e67",
      "filename": "Imbau AG.png",
      "contentType": "image/x-png",
      "contentLength": 14283
    }
  },
  {
    "_id": "4B5681C2184140D19ABFCBBE626DA673",
    "name": "Alpha Gebäudetechnik GmbH",
    "number": "C-14-018413",
    "status": "PSA_ORG_LEA_PRC",
    "group": "PSA_ORG_LEA",
    "accountManager": "5C6E286751897125E040007F01001F63",
    "branch": "Bauinstallation",
    "region": "Ostdeutschland",
    "addressStreet": "Humboldtring 73",
    "addressPostalCode": "14473",
    "addressCity": "Potsdam",
    "addressCountry": "DEU",
    "phone": "+49 3317212000",
    "email": "info@alphatec.de",
    "since": "2021-12-20T13:39:28Z",
    "occasion": "Messe - Facility 2012",
    "url": "www.alphatec.de",
    "description": "",
    "image": {
      "_id": "00000008424c4f420000004041304441434343304539324334343045383930334344314546394646423737350000003c416c70686120476562c3a4756465746563686e696b20476d62482e6a7067",
      "filename": "Alpha Gebäudetechnik GmbH.jpg",
      "contentType": "image/pjpeg",
      "contentLength": 27573
    }
  },
  {
    "_id": "14453D298276468498CD13BD8550469E",
    "name": "Athena GmbH & Co. KG",
    "number": "C-14-018412",
    "status": "PSA_ORG_LEA_PRC",
    "group": "PSA_ORG_LEA",
    "accountManager": "5C6E286751897125E040007F01001F63",
    "branch": "Bauinstallation",
    "region": "Ostdeutschland",
    "addressStreet": "Hundertmännerstraße 3",
    "addressPostalCode": "18057",
    "addressCity": "Rostock",
    "addressCountry": "DEU",
    "phone": "+49 38141400",
    "email": "info@athena-fassaden.de",
    "since": "2021-12-20T13:34:28Z",
    "occasion": "Messe - Klima-Expo 2014",
    "url": "www.athena-fassaden.de",
    "description": "",
    "image": {
      "_id": "00000008424c4f4200000040423344314231414133324432343842384233453032383445354232463435353200000030417468656e6120476d6248202620436f2e204b472e706e67",
      "filename": "Athena GmbH & Co. KG.png",
      "contentType": "image/x-png",
      "contentLength": 11439
    }
  },
  {
    "_id": "8C25A59FDFBA4F2A981FDDF055B0D1F5",
    "name": "Heinrich Surkamp Holzgroßhandlung AG",
    "number": "C-14-018411",
    "status": "PSA_ORG_LEA_PRC",
    "group": "PSA_ORG_LEA",
    "accountManager": "3DE0681608FE077AE040007F010065F8",
    "branch": "Handelsvermittlung",
    "region": "Norddeutschland",
    "addressStreet": "Wiesenstraße 10",
    "addressPostalCode": "27570",
    "addressCity": "Bremerhaven",
    "addressCountry": "DEU",
    "phone": "+49 4714814810",
    "email": "info@heinrich-surkamp.de",
    "since": "2021-12-20T13:32:27Z",
    "occasion": "Messe - Bautec 2001",
    "url": "www.heinrich-surkamp.de",
    "description": "",
    "image": {
      "_id": "00000008424c4f42000000403230324139423443303134433437334138464332333641383731453844383844000000524865696e72696368205375726b616d7020486f6c7a67726fc39f68616e646c756e672041472e706e67",
      "filename": "Heinrich Surkamp Holzgroßhandlung AG.png",
      "contentType": "image/x-png",
      "contentLength": 20617
    }
  },
  {
    "_id": "51D8FECF8E634D998A75487396FD6697",
    "name": "Bauplus GmbH",
    "number": "C-14-018410",
    "status": "PSA_ORG_LEA_PRC",
    "group": "PSA_ORG_LEA",
    "accountManager": "3DE0681608FE077AE040007F010065F8",
    "branch": "Großhandel (ohne Handel mit Kraftfahrzeugen)",
    "region": "Norddeutschland",
    "addressStreet": "Mühlenstraße 5",
    "addressPostalCode": "26122",
    "addressCity": "Oldenburg",
    "addressCountry": "DEU",
    "phone": "+49 44133350",
    "email": "info@bauplus.de",
    "since": "2021-12-20T13:30:33Z",
    "occasion": "Internetrecherche",
    "url": "www.bauplus.de",
    "description": "",
    "image": {
      "_id": "00000008424c4f4200000040354233423143433342323730344333463935454637424544364632364535343400000020426175706c757320476d62482e6a7067",
      "filename": "Bauplus GmbH.jpg",
      "contentType": "image/pjpeg",
      "contentLength": 38350
    }
  },
  {
    "_id": "77FDDBECA2F74AB7BCE0F2C1E8DBBC5E",
    "name": "Umbrella AG",
    "number": "C-14-018409",
    "status": "PSA_ORG_LEA_PRC",
    "group": "PSA_ORG_LEA",
    "accountManager": "F87BDC400E41D630E030A8C00D01158A",
    "branch": "Handelsvermittlung",
    "region": "Westdeutschland",
    "addressStreet": "Borsigstraße 4",
    "addressPostalCode": "44145",
    "addressCity": "Dortmund",
    "addressCountry": "DEU",
    "phone": "+49 23192700270",
    "email": "info@umbrella-corp.com",
    "since": "2021-12-20T13:27:52Z",
    "occasion": "Messe - Bautec 2012",
    "url": "www.umbrella-corp.com",
    "description": "",
    "image": {
      "_id": "00000008424c4f420000004030463143303533423044364434344432393637333234433546463246353942350000001e556d6272656c6c612041472e706e67",
      "filename": "Umbrella AG.png",
      "contentType": "image/x-png",
      "contentLength": 3602
    }
  },
  {
    "_id": "A3FA2DC63B564AC2A2B5EAE17E0A5B7D",
    "name": TEST_NAME_20,
    "number": "C-14-018408",
    "status": "PSA_ORG_LEA_PRC",
    "group": "PSA_ORG_LEA",
    "accountManager": "F87BDC400E41D630E030A8C00D01158A",
    "branch": "Handelsvermittlung",
    "region": "Westdeutschland",
    "addressStreet": "Friedrich-Ebert-Straße 1",
    "addressPostalCode": "51429",
    "addressCity": "Bergisch Gladbach",
    "addressCountry": "DEU",
    "phone": "+49 2204555510",
    "email": "sales@baumueller.de",
    "since": "2021-12-20T13:25:38Z",
    "occasion": "Messe -  Bautec 2008",
    "url": "www.baumueller.de",
    "description": "",
    "image": {
      "_id": "00000008424c4f420000004037333544363446334542383734463135423938364139323242424438383133360000003242617573746f6666204dc3bc6c6c657220476d62482e706e67",
      "filename": "Baustoff Müller GmbH.png",
      "contentType": "image/x-png",
      "contentLength": 3895
    }
  },
  {
    "_id": "7A722EA52D8147B98613C39FEBBD85FA",
    "name": TEST_NAME_21,
    "number": "C-14-018407",
    "status": "PSA_ORG_LEA_PRC",
    "group": "PSA_ORG_LEA",
    "accountManager": "F87BDC400E41D630E030A8C00D01158A",
    "branch": "Architektur- und Ingenieurbüros",
    "region": "Westdeutschland",
    "addressStreet": "Große Budengasse 10-11",
    "addressPostalCode": "50667",
    "addressCity": "Köln",
    "addressCountry": "DEU",
    "phone": "+49 22122200",
    "email": "info@krien.de",
    "since": "2017-12-20T13:22:41Z",
    "occasion": "Messe - Interbau 2010",
    "url": "www.krien.de",
    "description": "",
    "image": {
      "_id": "00000008424c4f420000004035384446374433323830453834433644424339384531453035314541383834450000004a4b7269656e204261752d20756e6420506c616e756e677362c3bc726f20476d62482e706e67",
      "filename": "Krien Bau- und Planungsbüro GmbH.png",
      "contentType": "image/x-png",
      "contentLength": 22337
    }
  }
];

export const Company = Scrivito.provideDataClass("Company", {
  connection: {
    get: async (id) => {
      return database.find((elem) => elem._id === id);
    },

    index: async (params) => {
      const filters = params.filters();

      let results: any = database;

      Object.keys(filters).forEach((key) => {
        results = results.filter((result: any) => {
          const { opCode, value } = filters[key] as any;
          if (opCode === "neq") return result[key] !== value;
          return result[key] === value;
        });
      });

      results = results.map((data: any) => data._id);

      return { results };
    }
  }
});
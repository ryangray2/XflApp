const dragons = {
  nickname: "Dragons",
  location: "Seattle",
  fullName: "Seattle Dragons",
  schedule: [],
  wins: 1,
  losses: 4,
  logo: "seattle.png",
  mainColor: "#121f46",
  secondaryColor: "#017323",
  // highlightColor: "#e33908",
  highlightColor: "white",
  conference: "west",
  runO: 4,
  passO: 7,
  runD: 4,
  passD: 8,
  oTD: 20,
  dTD: 25,
  fg: 5,
  qb: "B. Silvers",
  rb: [["K. Farrow", 33], ["T. Williams", 33], ["J. Gardner", 33], ["B. Silvers", 1]],
  wr: [["A. Proehl", 35], ["K. Reynolds", 15], ["K. Farrow", 15], ["A. Moore", 15], ["T. Williams", 10], ["D. Byrd", 10]],
  passPerc: 64,
  bgImage: "url('seattleBG.jpg')",
  textLogo: "dragonsText.png"
}

const wildcats = {
  nickname: "Wildcats",
  location: "Los Angeles",
  fullName: "Los Angeles Wildcats",
  schedule: [],
  wins: 2,
  losses: 3,
  logo: "la.png",
  mainColor: "#ec7601",
  secondaryColor: "#b31023",
  highlightColor: "white",
  conference: "west",
  runO: 8,
  passO: 2,
  runD: 8,
  passD: 6,
  oTD: 30,
  dTD: 23,
  fg: 3,
  qb: "J. Johnson",
  rb: [["M. Carter", 30], ["E. Hood", 30], ["D. Harris", 30], ["J. Johnson", 10]],
  wr: [["T. McBride", 30], ["N. Spruce", 30], ["J. Smallwood", 15], ["B. Barnes", 15], ["S. Blacknail", 5], ["M. Carter", 5]],
  passPerc: 70,
  bgImage: "url('laBG.jpg')",
  textLogo: "wildcatsText.png"
}

const guardians = {
  nickname: "Guardians",
  location: "New York",
  fullName: "New York Guardians",
  schedule: [],
  wins: 3,
  losses: 2,
  logo: "ny.png",
  mainColor: "#8f8f8f",
  secondaryColor: "#020101",
  highlightColor: "a61225",
  conference: "east",
  runO: 5,
  passO: 6,
  runD: 2,
  passD: 7,
  oTD: 13,
  dTD: 15,
  fg: 13,
  qb: "L. Perez",
  rb: [["D. Victor", 55], ["T. Cook", 40], ["M. Williams", 3], ["L. Perez", 2]],
  wr: [["C. Pearson", 25], ["M McKay", 20], ["J. Powell", 20], ["T. Redding", 15], ["E. Bibbs", 10], ["D. Victor", 10]],
  passPerc: 66,
  bgImage: "url('nyBG.jpg')",
  textLogo: "guardiansText.png"
}

const renegades = {
  nickname: "Renegades",
  location: "Dallas",
  fullName: "Dallas Renegades",
  schedule: [],
  wins: 2,
  losses: 3,
  logo: "dallas.png",
  mainColor: "#010102",
  secondaryColor: "#5a99cc",
  highlightColor: "#ae1024",
  conference: "west",
  runO: 6,
  passO: 3,
  runD: 5,
  passD: 5,
  oTD: 15,
  dTD: 20,
  fg: 17,
  qb: "L. Jones",
  rb: [["C. Artis-Payne", 50], ["L. Dunbar", 40], ["A. Walter", 5], ["L. Jones", 5]],
  wr: [["D. Parham", 35], ["F. Nagel", 25], ["L. Dunbar", 20], ["C. Artis-Payne", 10], ["J. Badet", 10], ["J. Badet", 0]],
  passPerc: 62,
  bgImage: "url('dallasBG.jpg')",
  textLogo: "renegadesText.png"
}

const roughnecks = {
  nickname: "Roughnecks",
  location: "Houston",
  fullName: "Houston Roughnecks",
  schedule: [],
  wins: 5,
  losses: 0,
  logo: "houston.png",
  mainColor: "#131f47",
  secondaryColor: "#b31224",
  highlightColor: "white",
  conference: "west",
  runO: 7,
  passO: 1,
  runD: 3,
  passD: 4,
  oTD: 35,
  dTD: 23,
  fg: 8,
  qb: "P. Walker",
  rb: [["J. Butler", 70], ["P. Walker", 20], ["A. Williams", 10], ["A. Williams", 0]],
  wr: [["C. Phillips", 55], ["N. Holley", 15], ["K. Lewis", 10], ["J. Butler", 10], ["S. Mobley", 10], ["S. Mobley", 0]],
  passPerc: 75,
  bgImage: "url('houstonBG.jpg')",
  textLogo: "roughnecksText.png"
}

const vipers = {
  nickname: "Vipers",
  location: "Tampa Bay",
  fullName: "Tampa Bay Vipers",
  schedule: [],
  wins: 1,
  losses: 4,
  logo: "tampa.png",
  mainColor: "#073418",
  secondaryColor: "#007421",
  highlightColor: "#f7a704",
  conference: "east",
  runO: 1,
  passO: 4,
  runD: 1,
  passD: 3,
  oTD: 18,
  dTD: 25,
  fg: 13,
  qb: "T. Cornelius",
  rb: [["D. Smith", 35], ["J. Patrick", 35], ["T. Cornelius", 30], ["T. Cornelius", 0]],
  wr: [["R. Horn", 25], ["D. Williams", 25], ["J. Tolliver", 25], ["N. Truesdell", 10], ["D. Smith", 10], ["D. Goolsby", 5]],
  passPerc: 40,
  bgImage: "url('tampaBG.jpg')",
  textLogo: "vipersText.png"
}

const battlehawks = {
  nickname: "BattleHawks",
  location: "St. Louis",
  fullName: "St. Louis BattleHawks",
  schedule: [],
  wins: 3,
  losses: 2,
  logo: "stlouis.png",
  mainColor: "#25336f",
  secondaryColor: "#909192",
  highlightColor: "#f8f9f9",
  conference: "east",
  runO: 2,
  passO: 5,
  runD: 6,
  passD: 1,
  oTD: 18,
  dTD: 13,
  fg: 15,
  qb: "J. Ta'amu",
  rb: [["J. Ta'amu", 25], ["C. Michael", 30], ["M. Jones", 35], ["K. Ford", 10]],
  wr: [["D. Pierson-El", 25], ["L. Washington", 25], ["A. Russell", 20], ["M. Lucas", 10], ["B. Reilly", 10], ["M. Jones", 10]],
  passPerc: 50,
  bgImage: "url('stlouisBG.jpg')",
  textLogo: "battlehawksText.png"
}

const defenders = {
  nickname: "Defenders",
  location: "DC",
  fullName: "DC Defenders",
  schedule: [],
  wins: 3,
  losses: 2,
  logo: "dc.png",
  mainColor: "#b61124",
  secondaryColor: "#620000",
  highlightColor: "white",
  conference: "east",
  runO: 3,
  passO: 8,
  runD: 7,
  passD: 2,
  oTD: 15,
  dTD: 20,
  fg: 15,
  qb: "C. Jones",
  rb: [["J. Pressley", 40], ["D. Pumphrey", 40], ["N. Brossette", 10], ["C. Jones", 10]],
  wr: [["K. Lee", 25], ["E. Rogers", 25], ["R. Ross", 25], ["D. Thompkins", 15], ["J. Pressley", 10], ["J. Pressley", 0]],
  passPerc: 83,
  bgImage: "url('dcBG.jpg')",
  textLogo: "defendersText.png"
}

dragons.schedule = [wildcats, guardians, renegades, wildcats, roughnecks];
wildcats.schedule = [dragons, battlehawks, roughnecks, dragons, renegades];
guardians.schedule = [roughnecks, dragons, battlehawks, defenders, vipers];
renegades.schedule = [defenders, vipers, dragons, roughnecks, wildcats];
roughnecks.schedule = [guardians, defenders, wildcats, renegades, dragons];
vipers.schedule = [battlehawks, renegades, defenders, battlehawks, guardians];
battlehawks.schedule = [vipers, wildcats, guardians, vipers, defenders];
defenders.schedule = [renegades, roughnecks, vipers, guardians, battlehawks];

const teams = [vipers, battlehawks, defenders, guardians, roughnecks, renegades,  wildcats, dragons]

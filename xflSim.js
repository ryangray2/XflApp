var yourTeam;
var week = 0;
var currOff;
var currDef;
var playoffTeams = [];
var round1Games = [];
var finalsTeams = [];
var champions = false;

function start() {
  // simGame();
  // playGame(-5, 5);
  // console.log(extraPoint());

}

function enter() {
  document.getElementById("startPage").style.display = "none";
  document.getElementById("infoPage").style.display = "block";
}

function infoButtonPressed() {
  document.getElementById("infoPage").style.display = "none";
  document.getElementById("teamSelectPage").style.display = "block";
  populateTeams();
}

function populateTeams() {
  const teamsGoHere = document.getElementById("teamsGoHere");
  for (let i = 0; i < teams.length; i++) {

    var teamDiv = document.createElement("div");

    teamDiv.classList.add("text-center");
    teamDiv.classList.add("col-xs-6");
    teamDiv.classList.add("col-md-3");
    teamDiv.classList.add("teamDiv");
    teamDiv.style.backgroundImage = teams[i].bgImage;

    var logo = document.createElement("img");
    logo.setAttribute("src", teams[i].logo);
    logo.classList.add("selectLogo");
    logo.addEventListener('click', function() {
           teamSelected(teams[i]);
       });

    teamDiv.appendChild(logo);
    teamsGoHere.appendChild(teamDiv);
  }
}

function teamSelected(team) {
  yourTeam = team;
  document.getElementById("teamSelectPage").style.display = "none";
  document.getElementById("dashboardPage").style.display = "block";
  document.getElementById("test").setAttribute("src", team.textLogo);
  document.getElementById("ssBar").style.backgroundColor = team.mainColor;
  document.getElementById("ssBar").style.color = team.secondaryColor;
  document.getElementById("ssBar").style.borderBottom = "4px solid " + team.mainColor;
  document.body.style.backgroundColor = team.mainColor;
  populateSchedule(team);
  document.getElementById("scheduleButton").addEventListener('click', function() {
         populateSchedule(team);
     });
   document.getElementById("standingsButton").addEventListener('click', function() {
          populateStandings(team);
      });
}

function populateSchedule(team) {
  document.getElementById("schedulePage").style.display = 'block';
  document.getElementById("standingsPage").style.display = 'none';
  document.getElementById("scheduleButton").style.backgroundColor = team.mainColor;
  document.getElementById("standingsButton").style.backgroundColor = team.highlightColor;
  const scheduleGoesHere = document.getElementById("scheduleGoesHere");
  for (let i = 0; i < team.schedule.length; i++) {
    console.log(team.schedule[i].fullName);
  }

  var myNode = document.getElementById("scheduleGoesHere");
  while (myNode.lastElementChild) {
    myNode.removeChild(myNode.lastElementChild);
  }

  for (let i = 0; i < team.schedule.length; i++) {

    if (i < week) {
      continue;
    }

    var weekDiv = document.createElement("div");

    weekDiv.classList.add("text-center");
    weekDiv.classList.add("row");
    weekDiv.style.backgroundColor = "white";
    weekDiv.style.borderBottom = "2px solid " + team.mainColor;

    var numCol = document.createElement("div");
    numCol.classList.add("col-xs-4", "col-md-3");

    var numText = document.createElement("p");
    numText.innerHTML = "Week " + (i + 6);
    numText.classList.add("schedData");
    numText.style.color = team.secondaryColor;

    numCol.appendChild(numText);
    weekDiv.appendChild(numCol);

    var teamCol = document.createElement("div");
    teamCol.classList.add("col-xs-8", "col-md-6");

    var teamText = document.createElement("p");
    teamText.innerHTML = team.schedule[i].fullName;
    teamText.classList.add("schedData");
    teamText.style.color = team.secondaryColor;

    teamCol.appendChild(teamText);
    weekDiv.appendChild(teamCol);

    if (i === week) {
      var buttonCol = document.createElement("div");
      buttonCol.classList.add("col-xs-12", "col-md-3");

      var button = document.createElement("img");
      button.setAttribute("src", "playButton.png");
      button.classList.add("coolButton");
      button.setAttribute("id", "playWeekButton");

      button.addEventListener('click', function() {
             gameDay(team);
         });

      buttonCol.appendChild(button);
      weekDiv.appendChild(buttonCol);
    }




    // var text = document.createElement("p");
    // text.innerHTML = "Week " + (i + 6) + ": " + team.schedule[i].fullName;



    // weekDiv.appendChild(text);
    scheduleGoesHere.appendChild(weekDiv);
  }

}

function populateStandings(team) {
  document.getElementById("schedulePage").style.display = 'none';
    document.getElementById("standingsPage").style.display = 'block';
    document.getElementById("standingsButton").style.backgroundColor = team.mainColor;
    document.getElementById("scheduleButton").style.backgroundColor = team.highlightColor;
  var goHere = document.getElementById("standingsGoHere");
  var east = [];
  var west = [];
  for (let i = 0; i < teams.length; i++) {
    teams[i].conference === "east" ? east.push(teams[i]) : west.push(teams[i]);
  }
  east.sort(function(a, b){return b.wins-a.wins});
  west.sort(function(a, b){return b.wins-a.wins});
  console.log("East");

  for (let i = 0; i < east.length; i++) {
    console.log(east[i].fullName);
    var strName = "e" + (i + 1) + "Name";
    document.getElementById(strName).innerHTML = east[i].fullName;
    var strWins = "e" + (i + 1) + "Wins";
    document.getElementById(strWins).innerHTML = east[i].wins;
    var strLosses = "e" + (i + 1) + "Losses";
    document.getElementById(strLosses).innerHTML = east[i].losses;
  }
  console.log("West");
  for (let i = 0; i < west.length; i++) {
    console.log(west[i].fullName);
    var strName = "w" + (i + 1) + "Name";
    document.getElementById(strName).innerHTML = west[i].fullName;
    var strWins = "w" + (i + 1) + "Wins";
    document.getElementById(strWins).innerHTML = west[i].wins;
    var strLosses = "w" + (i + 1) + "Losses";
    document.getElementById(strLosses).innerHTML = west[i].losses;
  }


}


function simGame(userTeam, cpuTeam) {
  console.log("test");
  var yourRunO = userTeam.runO;  //
  var yourPassO = userTeam.passO;  //
  var oppPassD = cpuTeam.passD;  //
  var oppRunD = cpuTeam.passD;  //

  var yourRunD = userTeam.runD;   //
  var yourPassD = userTeam.passD;  //
  var oppRunO = cpuTeam.runO;  //
  var oppPassO = cpuTeam.passO;   //

  var yourTD = 100 - ((userTeam.oTD + cpuTeam.dTD) / 2);  //
  var yourFG = yourTD - userTeam.fg;  //
  var oppTD = 100 - ((cpuTeam.oTD + userTeam.dTD) / 2);  //
  var oppFG = oppTD - cpuTeam.fg;  //
  var yourTDcount = 0;
  var yourFGcount = 0;
  var oppTDcount = 0;
  var oppFGcount = 0;
  var yourPoints = 0;
  var oppPoints = 0;

  for (let i = 0; i < 12; i++) {
    var num = Math.random() * 100;
    if (num >= yourTD) {

      yourTDcount++;
      yourPoints += 6;
      var temp = extraPoint(yourPoints, oppPoints);
      yourPoints += temp[0];

    } else if (num >= yourFG) {

      yourFGcount++;
      yourPoints += 3;
    } else {

    }
  }
  for (let i = 0; i < 12; i++) {
    var num = Math.random() * 100;
    if (num >= oppTD) {

      oppTDcount++;
      oppPoints += 6;
      var temp = extraPoint(oppPoints, yourPoints);
      oppPoints += temp[0];

    } else if (num >= oppFG) {

      oppFGcount++;
      oppPoints += 3;
    } else {

    }
  }
  // yourPoints = ((yourFGcount * 3) + (yourTDcount * 7));
  // oppPoints = ((oppFGcount * 3) + (oppTDcount * 7));
  if (yourPoints === oppPoints) {
    if (oppTD < yourTD) {

      oppFGcount++;
      oppPoints += 3;
    } else {

      yourFGcount++;
      yourPoints += 3;
    }
  }

  if (yourPoints > oppPoints) {
    userTeam.wins += 1;
    cpuTeam.losses += 1;
    if (week === 5) {
      finalsTeams.push(userTeam);
    }
  } else {
    userTeam.losses += 1;
    cpuTeam.wins += 1;
    if (week === 5) {
      finalsTeams.push(cpuTeam);
    }
  }

  console.log(userTeam.nickname + " " + yourPoints + ", " + cpuTeam.nickname + " " + oppPoints);
  return yourPoints + " - " + oppPoints;
}



function playGame(off, def, userTeam, cpuTeam) {
  var oFocus;
  var endOff = off;
  if (off > 0) {
    oFocus = "run";
  } else if (off < 0) {
    oFocus = "pass";
    off *= -1;
  } else {
    oFocus = "nothing";
  }
  var dFocus;
  if (def > 0) {
    dFocus = "run";
  } else if (def < 0) {
    dFocus = "pass";
    def *= -1;
  } else {
    dFocus = "nothing";
  }

  var yourRunO = userTeam.runO;  //
  var yourPassO = userTeam.passO;  //
  var oppPassD = cpuTeam.passD;  //
  var oppRunD = cpuTeam.passD;  //

  var yourRunD = userTeam.runD;   //
  var yourPassD = userTeam.passD;  //
  var oppRunO = cpuTeam.runO;  //
  var oppPassO = cpuTeam.passO;   //

  var oppResults = [];
  var yourResults = [];


  var oppExtra = [];
  var yourExtra = [];

  var yourTD = 100 - ((userTeam.oTD + cpuTeam.dTD) / 2);  //
  var yourFG = yourTD - userTeam.fg;  //
  var oppTD = 100 - ((cpuTeam.oTD + userTeam.dTD) / 2);  //
  var oppFG = oppTD - cpuTeam.fg;  //
  var yourTDcount = 0;
  var yourFGcount = 0;
  var oppTDcount = 0;
  var oppFGcount = 0;
  var yourPoints = 0;
  var oppPoints = 0;

  if (oFocus === "run") {
    var ad = yourRunO - oppRunD;
    ad *= off;
    ad *= .75;
    yourTD += ad;
    yourFG += ad;
  } else if (oFocus === "pass") {
    var ad = yourPassO - oppPassD;
    ad *= off;
    yourTD += ad;
    yourFG += ad;
  }

  var passAD = yourPassD - oppPassO;
  var runAD = yourRunD - oppRunO;
  // Run chosen
  if (dFocus === "run") {
    //Advantage both
    if (runAD <= 0 && passAD <= 0) {
      // wrong guess
      if (runAD < passAD) {
        var ad = -1 * passAD;
        ad *= def;
        ad *= .25;
        oppTD -= ad;
        oppFG -= ad;
      }
      //correct guess
      if (runAD > passAD) {
        var ad = -1 * runAD;
        ad *= def;
        ad *= .25;
        oppTD += ad;
        oppFG += ad;
      }
    } // Advantage neither
    else if (runAD > 0 && passAD > 0) {
      //wrong guess
      if (runAD < passAD) {
        var ad = passAD;
        ad *= def;
        ad *= .25;
        oppTD -= ad;
        oppFG -= ad;
      }
      // correct guess
      if (runAD > passAD) {
        var ad = runAD;
        ad *= def;
        ad *= .25;
        oppTD += ad;
        oppFG += ad;
      }
    } // Advantage run
    else if (runAD < 0 && passAD >= 0) {
      var ad = passAD;
      ad *= def;
      oppTD -= ad;
      oppFG -= ad;
    }
    // Advantage pass
    else if (runAD >= 0 && passAD < 0) {
      var ad = runAD;
      ad *= def;
      ad *= .5;
      oppTD += ad;
      oppFG += ad;
    }
  }
  if (dFocus === "pass") {

    //Advantage both
    if (runAD <= 0 && passAD <= 0) {
      // wrong guess
      if (runAD > passAD) {
        var ad = -1 * runAD;
        ad *= def;
        ad *= .25;
        oppTD -= ad;
        oppFG -= ad;
      }
      //correct guess
      if (runAD < passAD) {
        var ad = -1 * passD;
        ad *= def;
        ad *= .25;
        oppTD += ad;
        oppFG += ad;

      }
    } // Advantage neither
    else if (runAD > 0 && passAD > 0) {
      //wrong guess
      if (runAD > passAD) {
        var ad = runAD;
        ad *= def;
        ad *= .25;
        oppTD -= ad;
        oppFG -= ad;
      }
      // correct guess
      if (runAD < passAD) {
        var ad = passAD;
        ad *= def;
        ad *= .25;
        oppTD += ad;
        oppFG += ad;

      }
    } // Advantage run
    else if (runAD < 0 && passAD >= 0) {
      var ad = passAD;
      ad *= def;
      ad *= .3;
      oppTD += ad;
      oppFG += ad;

    }
    // Advantage pass
    else if (runAD >= 0 && passAD < 0) {
      var ad = runAD;
      ad *= def;
      // ad *= .5;
      oppTD -= ad;
      oppFG -= ad;

    }
  }


  console.log(yourTD);
  console.log(oppTD);

  for (let i = 0; i < 12; i++) {
    var num = Math.random() * 100;
    if (num >= yourTD) {
      yourResults.push("TD");
      yourTDcount++;
      yourPoints += 6;
      var temp = extraPoint(yourPoints, oppPoints);
      yourPoints += temp[0];
      yourExtra.push(temp);
    } else if (num >= yourFG) {
      yourResults.push("FG");
      yourFGcount++;
      yourPoints += 3;
    } else {
      yourResults.push("Nothing");
    }
  }
  for (let i = 0; i < 12; i++) {
    var num = Math.random() * 100;
    if (num >= oppTD) {
      oppResults.push("TD");
      oppTDcount++;
      oppPoints += 6;
      var temp = extraPoint(oppPoints, yourPoints);
      oppPoints += temp[0];
      oppExtra.push(temp);
    } else if (num >= oppFG) {
      oppResults.push("FG");
      oppFGcount++;
      oppPoints += 3;
    } else {
      oppResults.push("Nothing");
    }
  }
  // yourPoints = ((yourFGcount * 3) + (yourTDcount * 7));
  // oppPoints = ((oppFGcount * 3) + (oppTDcount * 7));
  if (yourPoints === oppPoints) {
    if (oppTD < yourTD) {
      oppResults.push("FG");
      oppFGcount++;
      oppPoints += 3;
    } else {
      yourResults.push("FG");
      yourFGcount++;
      yourPoints += 3;
    }
  }

  var gameScript = [];

  for (let i = 0, j = 0, k = 0; i < oppResults.length; i++) {
    if (yourResults[i] != "Nothing") {
      // gameScript.push(userTeam.nickname + ": " + yourResults[i])
      console.log(userTeam.nickname + ": " + yourResults[i]);
      if (yourResults[i] === "TD") {
        console.log(yourExtra[j]);
        j++;
      }
    }
    if (oppResults[i] != "Nothing") {
      console.log(cpuTeam.nickname + ": " + oppResults[i]);
      if (oppResults[i] === "TD") {
        console.log(oppExtra[k]);
        k++;
      }
    }
  }

    console.log("Final Score");
    console.log(userTeam.nickname + ": " + yourPoints + " " + cpuTeam.nickname + ": " + oppPoints);

  if (yourPoints > oppPoints) {
    userTeam.wins += 1;
    cpuTeam.losses += 1;
    if (week === 5) {
      finalsTeams.push(userTeam);
    }
    if (week === 6) {
      champions = true;
    }
  } else {
    userTeam.losses += 1;
    cpuTeam.wins += 1;
    if (week === 5) {
      finalsTeams.push(cpuTeam);
    }
  }

  return [yourPoints, oppPoints, yourResults, oppResults, yourExtra, oppExtra, endOff];

}

function extraPoint(scoring, giving) {
  var oneTry = 40;
  var twoTry = 47;
  var threeTry = 13;

  var oneSuccess = 33;
  var twoSuccess = 36;
  var threeSuccess = 40;

  console.log("scoring: " + scoring + ", giving: " + giving);
  // if (scoring + 3 === giving) {
  //   var go = Math.random() * 100;
  //   if (go < threeSuccess) {
  //     return [3, "3 pt. Conversion Successful"];
  //   } else {
  //     return [0, "3 pt. Conversion Failed"];
  //   }
  // } else if (scoring + 2 === giving) {
  //   var go = Math.random() * 100;
  //   if (go < twoSuccess) {
  //     return [2, "2 pt. Conversion Successful"];
  //   } else {
  //     return [0, "2 pt. Conversion Failed"];
  //   }
  // } else if (scoring + 1 === giving) {
  //   var go = Math.random() * 100;
  //   if (go < oneSuccess) {
  //     return [1, "1 pt. Conversion Successful"];
  //   } else {
  //     return [0, "1 pt. Conversion Failed"];
  //   }
  // }


  var num = Math.random() * 100;
  if (num < oneTry) {
    var go = Math.random() * 100;
    if (go < oneSuccess) {
      return [1, "1 pt. Conversion Successful"];
    } else {
      return [0, "1 pt. Conversion Failed"];
    }
  } else if (num < oneTry + twoTry) {
    var go = Math.random() * 100;
    if (go < twoSuccess) {
      return [2, "2 pt. Conversion Successful"];
    } else {
      return [0, "2 pt. Conversion Failed"];
    }
  } else {
    var go = Math.random() * 100;
    if (go < threeSuccess) {
      return [3, "3 pt. Conversion Successful"];
    } else {
      return [0, "3 pt. Conversion Failed"];
    }
  }
}


function gameDay(team) {
  document.getElementById("playoffMatchups").style.display = "none";
  var myNode = document.getElementById("atl");
  while (myNode.lastElementChild) {
    myNode.removeChild(myNode.lastElementChild);
  }
  myNode = document.getElementById("scoringList");
  while (myNode.lastElementChild) {
    myNode.removeChild(myNode.lastElementChild);
  }
  document.getElementById("dashboardPage").style.display = "none";
  document.body.style.backgroundColor = "white";
  document.getElementById("gamePage").style.display = "block";
  document.getElementById("gameplay").style.display = "none";
  document.getElementById("postDash").style.display = "none";
  document.getElementById("atl").style.display = "none";
  document.getElementById("strategy").style.display = "block";
  document.getElementById("gameTitle").innerHTML = team.fullName + " vs. " + team.schedule[week].fullName;
  document.getElementById("weekTitle").innerHTML = "Week " + (week + 6);
  if (week === 5) {
    document.getElementById("weekTitle").innerHTML = "XFL Conference Finals";
  }
  if (week === 6) {
    document.getElementById("weekTitle").innerHTML = "XFL Championship";
  }
  var offslider = document.getElementById("offRange");
  offslider.value = 0;
  currOff = offslider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
  offslider.oninput = function() {
    currOff = this.value;
  }

  var defslider = document.getElementById("defRange");
  defslider.value = 0;
  currDef = defslider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
  defslider.oninput = function() {
    currDef = this.value;
  }
}

function runDist() {
  var num = (Math.random() * 99) + 1;
  if (num < 30) {
    return Math.round(num);
  } else {
    return Math.round(num % 15);
  }
}

function passDist() {
  var num = Math.random() * 100;
  if (num < 50) {
    return Math.round(num);
  } else {
    return Math.round(num % 25);
  }
}

function determineUserTD(off) {
  if (off >= 0) {
    var num = Math.random() * 11;
    var run = off + 5;
    if (run > num) {
      var num2 = Math.random() * 100;
      // run
      if (yourTeam.rb[0][1] > num2) {
        return "(" + yourTeam.rb[0][0] + " " + runDist() + " yd. run)";
      }
      else if (yourTeam.rb[0][1] + yourTeam.rb[1][1] > num2) {
        return "(" + yourTeam.rb[1][0] + " " + runDist() + " yd. run)";
      }
      else if (yourTeam.rb[0][1] + yourTeam.rb[1][1] + yourTeam.rb[2][1] > num2) {
        return "(" + yourTeam.rb[2][0] + " " + runDist() + " yd. run)";
      }
      else {
        return "(" + yourTeam.rb[3][0] + " " + runDist() + " yd. run)";
      }
    } else {
      var num2 = Math.random() * 100;
      // pass
      if (yourTeam.wr[0][1] > num2) {
        return "(" + yourTeam.qb + " " + passDist() + " yd. pass to " + yourTeam.wr[0][0] + ")";
      }
      else if ((yourTeam.wr[0][1] + yourTeam.wr[1][1]) > num2) {
        return "(" + yourTeam.qb + " " + passDist() + " yd. pass to " + yourTeam.wr[1][0] + ")";
      }
      else if ((yourTeam.wr[0][1] + yourTeam.wr[1][1] + yourTeam.wr[2][1]) > num2) {
        return "(" + yourTeam.qb + " " + passDist() + " yd. pass to " + yourTeam.wr[2][0] + ")";
      }
      else if ((yourTeam.wr[0][1] + yourTeam.wr[1][1] + yourTeam.wr[2][1] + yourTeam.wr[3][1]) > num2) {
        return "(" + yourTeam.qb + " " + passDist() + " yd. pass to " + yourTeam.wr[3][0] + ")";
      }
      else if (yourTeam.wr[0][1] + yourTeam.wr[1][1] + yourTeam.wr[2][1] + yourTeam.wr[3][1] + yourTeam.wr[4][1] > num2) {
        return "(" + yourTeam.qb + " " + passDist() + " yd. pass to " + yourTeam.wr[4][0] + ")";
      }
      else {
        return "(" + yourTeam.qb + " " + passDist() + " yd. pass to " + yourTeam.wr[5][0] + ")";
      }
    }
  } else {
    var num = Math.random() * 11;
    var pass = (off * -1) + 5;
    if (pass > num) {
      var num2 = Math.random() * 100;
      // pass
      if (yourTeam.wr[0][1] > num2) {
        return "(" + yourTeam.qb + " " + passDist() + " yd. pass to " + yourTeam.wr[0][0] + ")";
      }
      else if (yourTeam.wr[0][1] + yourTeam.wr[1][1] > num2) {
        return "(" + yourTeam.qb + " " + passDist() + " yd. pass to " + yourTeam.wr[1][0] + ")";
      }
      else if (yourTeam.wr[0][1] + yourTeam.wr[1][1] + yourTeam.wr[2][1] > num2) {
        return "(" + yourTeam.qb + " " + passDist() + " yd. pass to " + yourTeam.wr[2][0] + ")";
      }
      else if (yourTeam.wr[0][1] + yourTeam.wr[1][1] + yourTeam.wr[2][1] + yourTeam.wr[3][1] > num2) {
        return "(" + yourTeam.qb + " " + passDist() + " yd. pass to " + yourTeam.wr[3][0] + ")";
      }
      else if (yourTeam.wr[0][1] + yourTeam.wr[1][1] + yourTeam.wr[2][1] + yourTeam.wr[3][1] + yourTeam.wr[4][1] > num2) {
        return "(" + yourTeam.qb + " " + passDist() + " yd. pass to " + yourTeam.wr[4][0] + ")";
      }
      else {
        return "(" + yourTeam.qb + " " + passDist() + " yd. pass to " + yourTeam.wr[5][0] + ")";
      }
    } else {
      var num2 = Math.random() * 100;
      // run
      if (yourTeam.rb[0][1] > num2) {
        return "(" + yourTeam.rb[0][0] + " " + runDist() + " yd. run)";
      }
      else if (yourTeam.rb[0][1] + yourTeam.rb[1][1] > num2) {
        return "(" + yourTeam.rb[1][0] + " " + runDist() + " yd. run)";
      }
      else if (yourTeam.rb[0][1] + yourTeam.rb[1][1] + yourTeam.rb[2][1] > num2) {
        return "(" + yourTeam.rb[2][0] + " " + runDist() + " yd. run)";
      }
      else {
        return "(" + yourTeam.rb[3][0] + " " + runDist() + " yd. run)";
      }
    }
  }
}

function determineCpuTD() {
  var num = Math.random() * 100;
  if (yourTeam.schedule[week].passPerc < num) {
    var num2 = Math.random() * 100;
    // run
    if (yourTeam.schedule[week].rb[0][1] > num2) {
      return "(" + yourTeam.schedule[week].rb[0][0] + " " + runDist() + " yd. run)";
    }
    else if (yourTeam.schedule[week].rb[0][1] + yourTeam.schedule[week].rb[1][1] > num2) {
      return "(" + yourTeam.schedule[week].rb[1][0] + " " + runDist() + " yd. run)";
    }
    else if (yourTeam.schedule[week].rb[0][1] + yourTeam.schedule[week].rb[1][1] + yourTeam.schedule[week].rb[2][1] > num2) {
      return "(" + yourTeam.schedule[week].rb[2][0] + " " + runDist() + " yd. run)";
    }
    else {
      return "(" + yourTeam.schedule[week].rb[3][0] + " " + runDist() + " yd. run)";
    }
  } else {
    var num2 = Math.random() * 100;
    // pass
    if (yourTeam.schedule[week].wr[0][1] > num2) {
      return "(" + yourTeam.schedule[week].qb + " " + passDist() + " yd. pass to " + yourTeam.schedule[week].wr[0][0] + ")";
    }
    else if ((yourTeam.schedule[week].wr[0][1] + yourTeam.schedule[week].wr[1][1]) > num2) {
      return "(" + yourTeam.schedule[week].qb + " " + passDist() + " yd. pass to " + yourTeam.schedule[week].wr[1][0] + ")";
    }
    else if ((yourTeam.schedule[week].wr[0][1] + yourTeam.schedule[week].wr[1][1] + yourTeam.schedule[week].wr[2][1]) > num2) {
      return "(" + yourTeam.schedule[week].qb + " " + passDist() + " yd. pass to " + yourTeam.schedule[week].wr[2][0] + ")";
    }
    else if ((yourTeam.schedule[week].wr[0][1] + yourTeam.schedule[week].wr[1][1] + yourTeam.schedule[week].wr[2][1] + yourTeam.schedule[week].wr[3][1]) > num2) {
      return "(" + yourTeam.schedule[week].qb + " " + passDist() + " yd. pass to " + yourTeam.schedule[week].wr[3][0] + ")";
    }
    else if (yourTeam.schedule[week].wr[0][1] + yourTeam.schedule[week].wr[1][1] + yourTeam.schedule[week].wr[2][1] + yourTeam.schedule[week].wr[3][1] + yourTeam.schedule[week].wr[4][1] > num2) {
      return "(" + yourTeam.schedule[week].qb + " " + passDist() + " yd. pass to " + yourTeam.schedule[week].wr[4][0] + ")";
    }
    else {
      return "(" + yourTeam.schedule[week].qb + " " + passDist() + " yd. pass to " + yourTeam.schedule[week].wr[5][0] + ")";
    }
  }
}

function startGamePressed() {
    // 0: userScore, 1: cpuScore, 2: userResults, 3: cpuResults, 4: userExtra, 5: cpuExtra, 6: off
    var gameArr = playGame(currOff, currDef, yourTeam, yourTeam.schedule[week]);
    var cpuTeam = yourTeam.schedule[week];
    document.getElementById("strategy").style.display = "none";
    document.getElementById("gameplay").style.display = "block";
    document.getElementById("gameplayScore").innerHTML = gameArr[0] + " - " + gameArr[1];
    document.getElementById("gameUserLogo").setAttribute("src", yourTeam.logo);
    document.getElementById("gameCpuLogo").setAttribute("src", yourTeam.schedule[week].logo);

    var currUser = 0;
    var currCpu = 0;

    var len = gameArr[2].length >= gameArr[3].length ? gameArr[2].length : gameArr[3].length;

    for (let i = 0, j = 0, k = 0; i < len; i++) {
      if (i % 3 === 0) {
        if ((i/3) + 1 < 5) {
          var r = document.createElement("div");
          r.classList.add("row", "text-center");
          var quarter = document.createElement("h4");
          quarter.classList.add("quarterHead");
          quarter.innerHTML = "Quarter " + ((i / 3) + 1);
          r.appendChild(quarter);
          document.getElementById("scoringList").appendChild(r);
        }
      }
      if (gameArr[2][i] != "Nothing") {
        var r = document.createElement("div");
        r.classList.add("row", "text-center");
        r.style.backgroundColor = yourTeam.mainColor;
        r.style.color = "white";
        var scoreCol = document.createElement("div");
        scoreCol.classList.add("col-xs-3");
        scoreCol.style.padding = "0px";
        var scoreText = document.createElement("p");
        scoreText.classList.add("gameDesc");

        scoreCol.appendChild(scoreText);
        r.appendChild(scoreCol);

        var descCol = document.createElement("div");
        descCol.classList.add("col-xs-9");
        var descText = document.createElement("p");
        descText.classList.add("gameDesc");

        descCol.appendChild(descText);
        r.appendChild(descCol);

        document.getElementById("scoringList").appendChild(r);

        if (gameArr[2][i] === "FG") {
          currUser += 3;
          scoreText.innerHTML = currUser + " - " + currCpu;
          scoreText.classList.add("gameDesc");
          var distance = Math.round((Math.random() * 35) + 23);
          descText.innerHTML = yourTeam.nickname + " " + distance + " yd. FG";
          descText.classList.add("gameDesc");
        } else if (gameArr[2][i] === "TD") {
          currUser += 6;
          scoreText.innerHTML = currUser + " - " + currCpu;
          scoreText.classList.add("gameDesc");
          var str = determineUserTD(gameArr[6]);
          console.log(gameArr[6]);
          descText.innerHTML = yourTeam.nickname + " TD " + str;
          descText.classList.add("gameDesc");

          var r2 = document.createElement("div");
          r2.classList.add("row", "text-center");
          r2.style.backgroundColor = yourTeam.mainColor;
          r2.style.color = "white";
          var score2Col = document.createElement("div");
          score2Col.classList.add("col-xs-3");
          score2Col.style.padding = "0px";
          var score2Text = document.createElement("p");
          score2Text.classList.add("gameDesc");

          score2Col.appendChild(score2Text);
          r2.appendChild(score2Col);

          var desc2Col = document.createElement("div");
          desc2Col.classList.add("col-xs-9");
          var desc2Text = document.createElement("p");
          desc2Text.classList.add("gameDesc");

          desc2Col.appendChild(desc2Text);
          r2.appendChild(desc2Col);

          document.getElementById("scoringList").appendChild(r2);

          currUser += gameArr[4][j][0];
          score2Text.innerHTML = currUser + " - " + currCpu;
          desc2Text.innerHTML = gameArr[4][j][1];
          j++;
        }
      }
      if (gameArr[3][i] != "Nothing") {
        var r = document.createElement("div");
        r.classList.add("row", "text-center");
        var scoreCol = document.createElement("div");
        scoreCol.classList.add("col-xs-3");
        scoreCol.style.padding = "0px";
        r.style.backgroundColor = yourTeam.schedule[week].mainColor;
        r.style.color = "white";
        var scoreText = document.createElement("p");
        scoreText.classList.add("gameDesc");

        scoreCol.appendChild(scoreText);
        r.appendChild(scoreCol);

        var descCol = document.createElement("div");
        descCol.classList.add("col-xs-9");
        var descText = document.createElement("p");
        descText.classList.add("gameDesc");

        descCol.appendChild(descText);
        r.appendChild(descCol);

        document.getElementById("scoringList").appendChild(r);

        if (gameArr[3][i] === "FG") {
          currCpu += 3;
          scoreText.innerHTML = currUser + " - " + currCpu;
          scoreText.classList.add("gameDesc");
          var distance = Math.round((Math.random() * 35) + 23);
          descText.innerHTML = cpuTeam.nickname + " " + distance + " yd. FG";
          descText.classList.add("gameDesc");
        } else if (gameArr[3][i] === "TD") {
          currCpu += 6;
          scoreText.innerHTML = currUser + " - " + currCpu;
          var str = determineCpuTD();
          descText.innerHTML = cpuTeam.nickname + " TD " + str;
          descText.classList.add("gameDesc");

          var r2 = document.createElement("div");
          r2.classList.add("row", "text-center");
          r2.style.backgroundColor = yourTeam.schedule[week].mainColor;
          r2.style.color = "white";
          var score2Col = document.createElement("div");
          score2Col.classList.add("col-xs-3");
          score2Col.style.padding = "0px";
          var score2Text = document.createElement("p");
          score2Text.classList.add("gameDesc");

          score2Col.appendChild(score2Text);
          r2.appendChild(score2Col);

          var desc2Col = document.createElement("div");
          desc2Col.classList.add("col-xs-9");
          var desc2Text = document.createElement("p");
          desc2Text.classList.add("gameDesc");

          desc2Col.appendChild(desc2Text);
          r2.appendChild(desc2Col);

          document.getElementById("scoringList").appendChild(r2);

          currCpu += gameArr[5][k][0];
          score2Text.innerHTML = currUser + " - " + currCpu;
          desc2Text.innerHTML = gameArr[5][k][1];
          k++;
        }
      }
    }

    var r = document.createElement("div");
    r.classList.add("row", "text-center");
    var c = document.createElement("div");
    c.classList.add("col-xs-12");
    var button = document.createElement("img");
    button.classList.add("coolButton");
    button.setAttribute("src", "nextButton.png");
    button.style.paddingBottom = "50px";
    button.style.paddingTop = "10px";
    if (week === 5) {
      button.addEventListener('click', function() {
             playoffPostGame();
         });
    } else if (week === 6) {
      button.addEventListener('click', function() {
        finalsPostGame();
      });
    } else {
      button.addEventListener('click', function() {
             postGame();
         });
    }


    c.appendChild(button);
    r.appendChild(c);
    document.getElementById("scoringList").appendChild(r);
}

function finalsPostGame() {
  document.getElementById("gamePage").style.display = "none";
  document.getElementById("playoffsNextButton").style.display = "none";
  document.getElementById("madePlayoffs").style.display = "block";
  // document.getElementById("madePlayoffsText").style.color = "black";
  if (champions) {
    document.getElementById("madePlayoffsText").innerHTML = "Congrats! The " + yourTeam.nickname + " are champions!";
  } else {
    document.getElementById("madePlayoffsText").innerHTML = "Hey, it was a good run.";
  }
}

function playoffPostGame() {
  document.getElementById("gameplay").style.display = "none";
  document.getElementById("atl").style.display = "block";
  document.getElementById("postDash").style.display = "block";
  document.getElementById("gameTitle").innerHTML = "Around the League";
  var gameList = simOtherGames(week);
  for (let i = 0; i < gameList.length; i++) {
    var r = document.createElement("div");
    r.classList.add("row", "text-center");

    var logo1col = document.createElement("div");
    logo1col.classList.add("col-xs-3");
    var logo1 = document.createElement("img");
    logo1.setAttribute("src", gameList[0][i][0].logo);
    logo1.style.width = "100%";

    logo1col.appendChild(logo1);

    var scoreCol = document.createElement("div");
    scoreCol.classList.add("col-xs-6");
    var score = document.createElement("h4");
    score.innerHTML = gameList[1][i];
    score.classList.add("gameScore");
    scoreCol.appendChild(score);

    var logo2col = document.createElement("div");
    logo2col.classList.add("col-xs-3");
    var logo2 = document.createElement("img");
    logo2.style.width = "100%";
    logo2.setAttribute("src", gameList[0][i][1].logo);

    logo2col.appendChild(logo2);

    r.appendChild(logo1col);
    r.appendChild(scoreCol);
    r.appendChild(logo2col);

    document.getElementById("atl").appendChild(r);
  }
}

function postGame() {
  document.getElementById("gameplay").style.display = "none";
  document.getElementById("atl").style.display = "block";
  document.getElementById("postDash").style.display = "block";
  document.getElementById("gameTitle").innerHTML = "Around the League";
  var gameList = simOtherGames(week);
  var gamePage = document.getElementById("gamePage");

  console.log(gameList);


  for (let i = 0; i < gameList.length + 1; i++) {
    var r = document.createElement("div");
    r.classList.add("row", "text-center");

    var logo1col = document.createElement("div");
    logo1col.classList.add("col-xs-3");
    var logo1 = document.createElement("img");
    logo1.setAttribute("src", gameList[0][i][0].logo);

    logo1.classList.add("atlLogo");

    logo1col.appendChild(logo1);

    var scoreCol = document.createElement("div");
    scoreCol.classList.add("col-xs-6");
    var score = document.createElement("h4");
    score.classList.add("gameScore");
    score.innerHTML = gameList[1][i];

    scoreCol.appendChild(score);

    var logo2col = document.createElement("div");
    logo2col.classList.add("col-xs-3");
    var logo2 = document.createElement("img");

    logo2.setAttribute("src", gameList[0][i][1].logo);
    logo2.classList.add("atlLogo");

    logo2col.appendChild(logo2);

    r.appendChild(logo1col);
    r.appendChild(scoreCol);
    r.appendChild(logo2col);

    document.getElementById("atl").appendChild(r);
  }

}

function simOtherGames(week) {
  var otherGames = [];

  var scores = [];
  if (week === 5) {
        var one = round1Games[1][0];
        var two = round1Games[1][1];
        otherGames.push([one, two]);
        scores.push(simGame(one, two));

  } else {
    for (let i = 0; i < teams.length; i++) {
      if (teams[i].wins + teams[i].losses != week + 6) {
        var one = teams[i];
        var two = teams[i].schedule[week];
        otherGames.push([one, two]);
        scores.push(simGame(one, two));
      }
    }
  }


  // for (let i = 0; i < otherGames.length; i++) {
  //   scores.push(simGame(otherGames[i][0], otherGames[i][1]));
  // }

  console.log(otherGames);
  return [otherGames, scores];
}

function postDashboardButtonPressed() {
  document.getElementById("gamePage").style.display = "none";
  document.getElementById("dashboardPage").style.display = "block";
document.body.style.backgroundColor = yourTeam.mainColor;
  week++;
  console.log(week);
  if (week === 5) {
    playoffs();
  }
  if (week === 6) {
    finals();
  }
  populateSchedule(yourTeam);
  console.log(teams);
}

function finals() {
  document.getElementById("dashboardPage").style.display = "none";
  document.getElementById("madePlayoffs").style.display = "block";
  console.log(finalsTeams);
  if (finalsTeams.includes(yourTeam)) {
    document.getElementById("madePlayoffs").style.display = "none";
    document.getElementById("playoffMatchups").style.display = "block";
    document.getElementById("playoffHead").innerHTML = "XFL Championship";
    document.body.style.backgroundColor = "white";
    finalsTeams[0].schedule.push(finalsTeams[1]);
    finalsTeams[1].schedule.push(finalsTeams[0]);
    var myNode = document.getElementById("playoffGames");
    while (myNode.lastElementChild) {
      myNode.removeChild(myNode.lastElementChild);
    }

    var r = document.createElement("div");
    r.classList.add("row", "text-center");

    var logo1col = document.createElement("div");
    logo1col.classList.add("col-xs-5");
    var logo1 = document.createElement("img");
    logo1.setAttribute("src", finalsTeams[0].logo);
    // logo1.style.width = "100%";
    logo1.classList.add("atlLogo");
    logo1col.appendChild(logo1);

    var scoreCol = document.createElement("div");
    scoreCol.classList.add("col-xs-2");
    var score = document.createElement("h4");
    score.innerHTML = "vs.";
    score.style.fontSize = "30px";
    score.style.fontFamily = "Roboto Condensed"

    scoreCol.appendChild(score);

    var logo2col = document.createElement("div");
    logo2col.classList.add("col-xs-5");
    var logo2 = document.createElement("img");
    // logo2.style.width = "100%";
    logo2.setAttribute("src", finalsTeams[1].logo);
    logo2.classList.add("atlLogo");
    logo2col.appendChild(logo2);

    r.appendChild(logo1col);
    r.appendChild(scoreCol);
    r.appendChild(logo2col);

    document.getElementById("playoffGames").appendChild(r);


    var r2 = document.createElement("div");
    r2.classList.add("row", "text-center", "center-block");
    var button = document.createElement("img");
    button.setAttribute("src", "playButton.png");
    button.classList.add("coolButton", "text-center", "center-block");
    button.setAttribute("id", "playWeekButton");

    button.addEventListener('click', function() {
           gameDay(yourTeam);
       });
    r2.appendChild(button);
    document.getElementById("playoffGames").appendChild(r2);


  } else {
    document.getElementById("madePlayoffsText").innerHTML = "Your season is over.";
    document.getElementById("postDash").style.display = "none";
  }
}

function playoffs() {
  document.getElementById("dashboardPage").style.display = "none";
  document.getElementById("madePlayoffs").style.display = "block";
  console.log("hmm");
  determinePlayoffs();
  if (playoffTeams.includes(yourTeam)) {
    document.getElementById("madePlayoffsText").innerHTML = "Congrats! The " + yourTeam.nickname + " are playoff-bound!";
    document.getElementById("playoffsNextButton").style.display = "block";
  } else {
    document.getElementById("madePlayoffsText").innerHTML = "You missed the playoffs.";
  }
}

function determinePlayoffs() {
  var east = [];
  var west = [];
  for (let i = 0; i < teams.length; i++) {
    teams[i].conference === "east" ? east.push(teams[i]) : west.push(teams[i]);
  }
  east.sort(function(a, b){return b.wins-a.wins});
  west.sort(function(a, b){return b.wins-a.wins});
  playoffTeams.push(east[0], east[1], west[0], west[1]);
  east[0].schedule.push(east[1]);
  east[1].schedule.push(east[0]);
  west[0].schedule.push(west[1]);
  west[1].schedule.push(west[0]);

  if (east.includes(yourTeam)) {
    round1Games.push([east[0], east[1]]);
    round1Games.push([west[0], west[1]]);
  } else {
    round1Games.push([west[0], west[1]]);
    round1Games.push([east[0], east[1]]);
  }


}

function enterPlayoffs() {
  document.getElementById("madePlayoffs").style.display = "none";
  document.getElementById("playoffMatchups").style.display = "block";
  document.body.style.backgroundColor = "white";


  for (let i = 0; i < round1Games.length; i++) {
    var r = document.createElement("div");
    r.classList.add("row", "text-center");


    var logo1col = document.createElement("div");
    logo1col.classList.add("col-xs-5");
    var logo1 = document.createElement("img");
    logo1.setAttribute("src", round1Games[i][0].logo);
    // logo1.style.width = "100%";
logo1.classList.add("atlLogo");
    logo1col.appendChild(logo1);

    var scoreCol = document.createElement("div");
    scoreCol.classList.add("col-xs-2");
    scoreCol.style.padding = "0px";
    var score = document.createElement("h4");
    score.innerHTML = "vs.";
    score.style.fontSize = "30px";
    score.style.fontFamily = "Roboto Condensed"

    scoreCol.appendChild(score);

    var logo2col = document.createElement("div");
    logo2col.classList.add("col-xs-5");
    var logo2 = document.createElement("img");
    // logo2.style.width = "100%";
    logo2.setAttribute("src", round1Games[i][1].logo);
    logo2.classList.add("atlLogo");
    logo2col.appendChild(logo2);

    r.appendChild(logo1col);
    r.appendChild(scoreCol);
    r.appendChild(logo2col);

    document.getElementById("playoffGames").appendChild(r);
    if (i === 0) {
      var r = document.createElement("div");
      r.classList.add("row", "text-center");
      r.style.borderBottom = "3px solid gray";
      var button = document.createElement("img");
      button.setAttribute("src", "playButton.png");
      button.classList.add("coolButton", "text-center", "center-block");
      button.setAttribute("id", "playWeekButton");

      button.addEventListener('click', function() {
             gameDay(yourTeam);
         });
      r.appendChild(button)
      document.getElementById("playoffGames").appendChild(r);
    }
  }

}

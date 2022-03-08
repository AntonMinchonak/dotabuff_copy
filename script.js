import { matchData, matchData2, hintData } from "./data.js";

let sublists = document.querySelectorAll(".page-header__sublist");
let menuItems = document.querySelectorAll(".page-header__menu-item");
let radiantBlock = document.querySelectorAll(".match-info__statsblock")[0];
let direBlock = document.querySelectorAll(".match-info__statsblock")[1];
let mobileMenuSubitems = document.querySelectorAll(".page-header__menu-mobile-list>a");
let logoButton = document.querySelector(".page-header__logo-toggle");

let indexMax = [];
let maxPreNet = 0;
let maxPreDMG = 0;
let maxPreHEAL = 0;
let maxPreBLD = 0;
let statsFillCount = 0;
let maxPreK = 0;
let maxPreD = 0;
let maxPreA = 0;
let maxPreLH = 0;
let maxPreDN = 0;
let maxPreGPM = 0;
let maxPreXPM = 0;
let premaxlist = [maxPreNet, maxPreDMG, maxPreHEAL, maxPreBLD, maxPreK, maxPreD, maxPreA, maxPreLH, maxPreDN, maxPreGPM, maxPreXPM];

function menuToggler() {
  let dataMobLists = [
    ["Esports", "Clips", "Series", "Scores", "Leagues", "Players", "Teams", "Matches", "", ""],
    ["All Heroes", "Meta", "Trends", "Lanes", "Most Played", "Win Rate", "Game Impact", "Economy", "Farm", "Damage and Healing"],
    ["Most Used", "Win Rate", " Game Impact", "Economy", "Cosmetics", "", "", "", "", ""],
    ["Verified", "Ranked Leaderboard", "Achivements", "Highest Win Rate", "Most Matches Played", "Time Spent Playing", "", "", ""],
    ["Live Matches", "Recent Esports Matches", "Recent Matches", "Slitbreaker", "Dark Moon", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
  ];

  let count = 0;
  let prev = sublists[4];
  let prevHighlight = menuItems[6];

  menuItems.forEach((el, ind) => {
    for (let i = 0; i < 10; i++) {
      mobileMenuSubitems[i].textContent = dataMobLists[4][i];
    }

    let sublistIndex = count;

    el.onmouseover = function () {
      if (ind > 0) {
        let previousSelected = prev;
        previousSelected.classList.add("hidden");
        previousSelected = sublists[sublistIndex];

        let previuos = prevHighlight;
        previuos.classList.remove("active-highlight");
        el.classList.add("active-highlight");
        prevHighlight = el;
      }
      if (ind > 2 && ind < 8) {
        prev = sublists[sublistIndex];
        sublists[sublistIndex].classList.remove("hidden");

        for (let i = 0; i < 10; i++) {
          mobileMenuSubitems[i].textContent = dataMobLists[ind - 3][i];
        }
      }
    };
    if (ind > 2 && ind < 8) {
      count++;
    }
  });
}
menuToggler();

function menuMobileToggle() {
  let mainmenu = document.querySelector(".page-header__menu-top-list");
  let minimenu = document.querySelector(".page-header__menu-mobile-list");
  let logoIcon = document.querySelector(".page-header__logo-img");

  logoButton.onclick = () => {
    if (window.innerWidth < 800) {
      mainmenu.classList.toggle("page-header__menu-top-list--opened");
      minimenu.classList.toggle("page-header__menu-top-list--opened");
      if (mainmenu.classList.contains("page-header__menu-top-list--opened")) {
        logoIcon.src = "roleimages/menu-hide.svg";
      } else {
        logoIcon.src = "roleimages/bars-solid.svg";
      }
    }
  };
}
menuMobileToggle();

function titleMenuFixed() {
  let titleMenu = document.querySelector(".page-title__menu");

  window.onscroll = () => {
    if (window.scrollY > 200) {
      titleMenu.style.position = "fixed";
      if (window.innerWidth < 800) {
        titleMenu.style.top = "30px";
      } else {
        titleMenu.style.top = "0px";
      }
      titleMenu.style.backgroundColor = "#2a323a";
      titleMenu.style.zIndex = "900";
    } else {
      titleMenu.style.position = "";
    }
  };
}
titleMenuFixed();

function dataCalculate() {
  let dateAgo = document.querySelector(".page-title__item-timeago");

  let dateMatch = new Date(2021, 10, 22);

  dateAgo.textContent = Math.floor(-(dateMatch - Date.now()) / (1000 * 60 * 60 * 24)) + " days ago";
}
dataCalculate();

function statsFill(dataBase, sideBlock, finalWard, finalSentry, isDireRow = 0) {
  let row = 1 + isDireRow;
  if (isDireRow === 1) {
    var Minus = 5;
  } else {
    var Minus = 1;
  }

  let radiantNET = 0;
  let radiantK = 0;
  let radiantD = 0;
  let radiantA = 0;
  let radiantLH = 0;
  let radiantDN = 0;

  let radiantGPM = 0;
  let radiantXPM = 0;
  let radiantDMG = 0;
  let radiantHEAL = 0;
  let radiantBLD = 0;

  for (let i = 0; i < 6; i++) {
    if (i !== 5) {
      let preK = dataBase[i]["K"];
      let preD = dataBase[i]["D"];
      let preA = dataBase[i]["A"];
      let preLH = dataBase[i]["LH"];
      let preDN = dataBase[i]["DN"];
      let preDMG = dataBase[i]["DMG"];
      let preHEAL = dataBase[i]["HEAL"];
      let preBLD = dataBase[i]["BLD"];
      let preNET = dataBase[i]["NET"];
      let preXPM = dataBase[i]["XPM"];
      let preGPM = dataBase[i]["GPM"];

      if (preNET.indexOf("k") > -1) {
        preNET = preNET.replace("k", "");
      }
      if (preDMG.indexOf("k") > -1) {
        preDMG = preDMG.replace("k", "");
      }
      preNET = Number(preNET);
      preNET *= 1000;
      radiantNET += preNET;

      preDMG = Number(preDMG);
      preDMG *= 1000;
      radiantDMG += preDMG;

      radiantK += dataBase[i]["K"];
      radiantD += dataBase[i]["D"];
      radiantA += dataBase[i]["A"];
      radiantLH += dataBase[i]["LH"];
      radiantDN += dataBase[i]["DN"];
      radiantGPM += dataBase[i]["GPM"];
      radiantXPM += dataBase[i]["XPM"];
      if (preHEAL != "-") {
        preHEAL = String(preHEAL);
        if (preHEAL.indexOf("k") > -1) {
          preHEAL = preHEAL.replace("k", "");
          preHEAL *= 1000;
        }
        preHEAL = Number(preHEAL);
        radiantHEAL += preHEAL;
      }
      if (preBLD != "-") {
        preBLD = String(preBLD);
        if (preBLD.indexOf("k") > -1) {
          preBLD = preBLD.replace("k", "");
          preBLD *= 1000;
        }
        preBLD = Number(preBLD);
        radiantBLD += preBLD;
      }

      let prelist = [preNET, preDMG, preHEAL, preBLD, preK, preD, preA, preLH, preDN, preXPM, preGPM];
      for (let premax = 0; premax < prelist.length; premax++) {
        if (prelist[premax] > premaxlist[premax]) {
          premaxlist[premax] = prelist[premax];

          if (statsFillCount === 1) {
            var countPlus = 7;
          } else {
            var countPlus = 0;
          }
          indexMax[premax] = i + 1 + countPlus;
        }
      }
    }

    if (i === 5) {
      let radiantList = [radiantLH, radiantGPM, radiantXPM, radiantDMG, radiantHEAL, radiantBLD];
      radiantNET /= 1000;
      radiantNET += "k";
      radiantList.forEach((item, ind) => {
        if (item > 999) {
          radiantList[ind] = Math.round(item / 100) / 10 + "k";
        }
      });
      sideBlock.innerHTML += `<div class="match-info__statsblock-row"> 
  <div class="match-info__statsblock-item"><span class="match-info__herolvl"></span></div>
  <div class="match-info__statsblock-item"><img src="" alt="" class="role-image"></div>
  <div class="match-info__statsblock-item"><img src="" alt="" class="role-image"></div>
  <div class="match-info__statsblock-item"><p class="match-info__player-name"></p><p class="match-info__player-lane-outcome final-outcome">Lane Outcome: Lost</p></div>
  <div class="match-info__statsblock-item">${radiantK}</div>
  <div class="match-info__statsblock-item">${radiantD}</div>
  <div class="match-info__statsblock-item">${radiantA}</div>
  <div class="match-info__statsblock-item yellow--highlight">${radiantNET}</div>
  <div class="match-info__statsblock-item">${radiantList[0]}</div><div class="match-info__statsblock-divider">/</div>
  <div class="match-info__statsblock-item">${radiantDN}</div>
  <div class="match-info__statsblock-item">${radiantList[1]}</div><div class="match-info__statsblock-divider">/</div>
  <div class="match-info__statsblock-item">${radiantList[2]}</div>
  <div class="match-info__statsblock-item">${radiantList[3]}</div>
  <div class="match-info__statsblock-item">${radiantList[4]}</div>
  <div class="match-info__statsblock-item">${radiantList[5]}</div>
  <div class="match-info__statsblock-item"><span class="ward ${finalWard}"></span>/<span class="sentry ${finalSentry}"></span></div>
  <div class="match-info__statsblock-item"></div>`;
    } else
      sideBlock.innerHTML += `<div class="match-info__statsblock-row match-info__statsblock-row-${row}"> 
  <div class="match-info__statsblock-item"><div class="match-info__hero-wrapper"><img class="match-info__hero-image" src="${dataBase[i]["heroImg"]}" alt="" class="hero-image"><span class="match-info__herolvl">${dataBase[i]["herolvl"]}</span></div></div>
  <div class="match-info__statsblock-item"><img src="${dataBase[i]["roleImg"]}" alt="" class="role-image"></div>
  <div class="match-info__statsblock-item"><img src="${dataBase[i]["laneImg"]}" alt="" class="role-image"></div>
  <div class="match-info__statsblock-item"><p class="match-info__player-name">${dataBase[i]["nickName"]}</p><p class="match-info__player-lane-outcome">${dataBase[i]["laneOut"]}</p></div>
  <div class="match-info__statsblock-item"><div>${dataBase[i]["K"]}</div></div>
  <div class="match-info__statsblock-item"><div>${dataBase[i]["D"]}</div></div>
  <div class="match-info__statsblock-item"><div>${dataBase[i]["A"]}</div></div>
  <div class="match-info__statsblock-item yellow--highlight"><div>${dataBase[i]["NET"]}</div></div>
  <div class="match-info__statsblock-item"><div>${dataBase[i]["LH"]}</div></div><div class="match-info__statsblock-divider">/</div>
  <div class="match-info__statsblock-item"><div>${dataBase[i]["DN"]}</div></div>
  <div class="match-info__statsblock-item"><div>${dataBase[i]["GPM"]}</div></div><div class="match-info__statsblock-divider">/</div>
  <div class="match-info__statsblock-item"><div>${dataBase[i]["XPM"]}</div></div>
  <div class="match-info__statsblock-item"><div>${dataBase[i]["DMG"]}</div></div>
  <div class="match-info__statsblock-item"><div>${dataBase[i]["HEAL"]}</div></div>
  <div class="match-info__statsblock-item"><div>${dataBase[i]["BLD"]}</div></div>
  <div class="match-info__statsblock-item"><div>${dataBase[i]["wards"]}</div></div>
  <div class="match-info__statsblock-item">
  <div class="match-info__statsblock-buffs">
  <div class="match-info__statsblock-buffstitle">${dataBase[i]["isBuffs"]}</div><div class="match-info__statsblock-buffitmes">${dataBase[i]["items"]["buffs"]}</div></div>
  <div class="match-info__statsblock-initems">${dataBase[i]["items"]["initems"]}<div class="match-info__statsblock-neutralitem"><img class="match-info__statsblock-neutralimg" src="${dataBase[i]["items"]["neutralitem"]}"> <span class="match-info__itemmin">39m</span></div></div>
  <div class="bagitem-item">${dataBase[i]["items"]["bagitems"]}</div></div></div>`;
    row = Math.abs(row - Minus);
  }

  statsFillCount = 1;
  function wardsCounter(wardType, place) {
    let wards = sideBlock.querySelectorAll(wardType);
    let sumWards = 0;
    for (let ward of wards) {
      if (ward.textContent != "-") {
        let numberWards = Number(ward.textContent);
        sumWards += numberWards;
      } else {
        ward.style.color = "rgb(180, 180, 180)";
      }
    }

    let finalWard = document.querySelector(place);

    finalWard.textContent = sumWards;
  }

  wardsCounter(".ward", `.${finalWard}`);
  wardsCounter(".sentry", `.${finalSentry}`);
}
statsFill(matchData, radiantBlock, "finalRadWard", "finalRadSentry");
statsFill(matchData2, direBlock, "finalDireWard", "finalDireSentry", 1);

function maxWardCounter() {
  let wards = document.querySelectorAll(".ward");
  let maxObsWardCount = 0;
  let maxObsWardRow = 0;

  let wardsSentry = document.querySelectorAll(".sentry");
  let maxSentryWardCount = 0;
  let maxSentryWardRow = 0;

  let skipedRows = 0;

  for (let i = 0; i < wards.length; i++) {
    if (wards[i].classList.contains("finalRadWard") || wards[i].classList.contains("finalDireWard")) {
      skipedRows++;
      continue;
    }

    if (Number(wards[i].textContent) > maxObsWardCount) {
      maxObsWardCount = Number(wards[i].textContent);
      maxObsWardRow = i;
      if (skipedRows === 1) maxObsWardRow++;
    }
    if (Number(wardsSentry[i].textContent) > maxSentryWardCount) {
      maxSentryWardCount = Number(wardsSentry[i].textContent);
      maxSentryWardRow = i;
      if (skipedRows === 1) maxSentryWardRow++;
    }
  }
  indexMax.push(maxObsWardRow + 1, maxSentryWardRow + 1);
}
maxWardCounter();

function underlineNET() {
  let wardindex = 0;
  let columnsToUnderline = [8, 15, 16, 17, 5, 6, 7, 9, 11, 12, 14, 18];
  console.log(indexMax);
  for (let i = 0; i < columnsToUnderline.length; i++) {
    if (i >= columnsToUnderline.length - 1) {
      document.querySelectorAll(`.match-info__statsblock-row>div:nth-child(${columnsToUnderline[i]})`)[indexMax[i]].querySelectorAll("span")[0].style =
        "text-decoration: underline; text-decoration-style: solid;";
      document.querySelectorAll(`.match-info__statsblock-row>div:nth-child(${columnsToUnderline[i]})`)[indexMax[i + 1]].querySelectorAll("span")[1].style =
        "text-decoration: underline; text-decoration-style: solid;";
      wardindex++;
    } else {
      document.querySelectorAll(`.match-info__statsblock-row>div:nth-child(${columnsToUnderline[i]})`)[indexMax[i]].style =
        "text-decoration: underline; text-decoration-style: solid;";
    }
  }
}
underlineNET();

function hoverForStats() {
  for (let col = 1; col < 20; col++) {
    let column = document.querySelectorAll(`.match-info__statsblock-row>div:nth-child(${col})`);
    for (let i = 0; i < column.length; i++) {
      column[i].onmouseover = () => {
        for (let j = 0; j < column.length; j++) {
          if (j % 2 === 0) {
            column[j].closest(".match-info__stats-radiant") ? (column[j].style.backgroundColor = "#384244") : (column[j].style.backgroundColor = "#443C43");
          } else {
            column[j].closest(".match-info__stats-radiant") ? (column[j].style.backgroundColor = "#3E4842") : (column[j].style.backgroundColor = "#393C44");
          }
          if (i === j) column[j].style.backgroundColor = "#454D55";
        }
      };
      column[i].onmouseout = () => {
        for (let j = 0; j < column.length; j++) column[j].style.backgroundColor = "";
      };
    }
  }

  let hoverRow = document.querySelectorAll(`.match-info__statsblock-row`);

  for (let i = 1; i < hoverRow.length - 1; i++) {
    hoverRow[i].onmouseover = () => (hoverRow[i].style.backgroundColor = "#39424B");
    hoverRow[i].onmouseout = () => (hoverRow[i].style.backgroundColor = "");
  }
}

hoverForStats();

function hintsForHeroes() {
  let imgs = document.querySelectorAll("img");
  let herohint = document.querySelector(".herohint");
  let hintImg = document.querySelector(".herohint__heroimg");
  let hintName = document.querySelector(".herohint__title");
  let hintAttrText = document.querySelector(".herohint__attribute-text");
  let hintAttrImg = document.querySelector(".herohint__attribute-img");
  let hintPopPlace = document.querySelector(".herohint__popular-place");
  let hintPopPercent = document.querySelector(".herohint__popular-percent");
  let hintStr = document.querySelectorAll(".herohint__subgain")[0];
  let hintAgl = document.querySelectorAll(".herohint__subgain")[1];
  let hintInt = document.querySelectorAll(".herohint__subgain")[2];
  let hintSpeed = document.querySelector(".herohint__speedtext");
  let hintArmor = document.querySelector(".herohint__armortext");
  let hintRole = document.querySelector(".herohint__roletext");
  let hintGainImg = document.querySelectorAll(".herohint__img");

  for (let i = 0; i < imgs.length; i++) {
    for (let j = 0; j < hintData.length; j++) {
      if (imgs[i].src.indexOf(hintData[j].heroImage) > -1) {
        imgs[i].onmouseenter = () => {
          hintImg.src = hintData[j].heroImage;
          hintName.textContent = hintData[j].name;
          hintAttrText.textContent = hintData[j].heroType;
          hintAttrImg.src = hintData[j].typeImage;
          hintPopPlace.textContent = hintData[j].popularPlace;
          hintPopPercent.textContent = hintData[j].popularPercent;
          hintStr.textContent = hintData[j].stengthGain;
          hintAgl.textContent = hintData[j].agilityGain;
          hintInt.textContent = hintData[j].itellegenceGain;
          hintSpeed.textContent = hintData[j].speed;
          hintArmor.textContent = hintData[j].armor;
          hintRole.textContent = hintData[j].roles;

          let typeList = ["Strength Hero", "Agility Hero", "Intellegence Hero"];

          for (let it = 0; it < typeList.length; it++) {
            if (hintData[j].heroType === typeList[it]) {
              hintGainImg[it].classList.add("herohint__statsgain--main-img");
              let numDel = 1;
              let numDelHelp = 0;
              if (it === 2) {
                numDel = 0;
              } else if (it === 1) {
                numDel = 1;
                numDelHelp = 1;
              }
              let listToDelete = [numDel - numDelHelp, numDel + 1];
              hintGainImg[listToDelete[0]].classList.remove("herohint__statsgain--main-img");
              hintGainImg[listToDelete[1]].classList.remove("herohint__statsgain--main-img");
              herohint.classList.remove("hidden");
            }
          }
        };
        imgs[i].onmousemove = () => {
          if (window.event.clientY > 740) {
            herohint.style.top = "750px";
          } else {
            herohint.style.top = window.event.clientY + 10 + "px";
          }
          herohint.style.left = window.event.pageX + 5 + "px";
        };
        imgs[i].onmouseout = () => herohint.classList.add("hidden");
      }
    }
  }
}

hintsForHeroes();

function adaptiveTools() {
  let statButtons = document.querySelectorAll(".match-info__navbar-button");
  let previousButton = statButtons[0];

  function hideStats(from, to) {
    for (let i = from; i < to; i++) {
      for (let j = 0; j < 14; j++) {
        document.querySelectorAll(`.match-info__statsblock-row>div:nth-child(${i})`)[j].style.display = "none";
      }
    }
  }

  function openStats(from, to) {
    for (let i = from; i < to; i++) {
      for (let j = 0; j < 14; j++) {
        document.querySelectorAll(`.match-info__statsblock-row>div:nth-child(${i})`)[j].style.display = "block";
      }
    }
  }

  statButtons[0].onclick = () => {
    hideStats(9, 20);
    openStats(5, 9);
    statButtons[0].classList.add("navbar-button--active");
    previousButton.classList.remove("navbar-button--active");
  };

  statButtons[1].onclick = () => {
    hideStats(5, 9);
    hideStats(15, 20);
    openStats(9, 15);
    statButtons[1].classList.add("navbar-button--active");
    previousButton.classList.remove("navbar-button--active");
    previousButton = statButtons[1];
  };

  statButtons[2].onclick = () => {
    hideStats(5, 15);
    hideStats(18, 20);
    openStats(15, 18);
    statButtons[2].classList.add("navbar-button--active");
    previousButton.classList.remove("navbar-button--active");
    previousButton = statButtons[2];
  };

  statButtons[3].onclick = () => {
    hideStats(5, 18);
    openStats(18, 20);
    statButtons[3].classList.add("navbar-button--active");
    previousButton.classList.remove("navbar-button--active");
    previousButton = statButtons[3];
  };

  let columnsForAdaptive = document.querySelectorAll(`.match-info__statsblock-row>div`);

  window.onresize = () => {
    if (window.innerWidth > 800) {
      for (let i = 1; i < columnsForAdaptive.length; i++) {
        columnsForAdaptive[i].style.display = "";
      }
      previousButton = statButtons[0];
      if (!statButtons[0].classList.contains("navbar-button--active")) {
        statButtons[0].classList.add("navbar-button--active");
        statButtons[1].classList.remove("navbar-button--active");
        statButtons[2].classList.remove("navbar-button--active");
        statButtons[3].classList.remove("navbar-button--active");
      }
    }
  };
}

adaptiveTools();

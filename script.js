let sublists = document.querySelectorAll(".page-header__sublist");
let menuItems = document.querySelectorAll(".page-header__menu-item");
let radiantBlock = document.querySelectorAll(".match-info__statsblock")[0];
let direBlock = document.querySelectorAll(".match-info__statsblock")[1];
let radiantBlockItems = radiantBlock.children;
let mobileMenuSubitems = document.querySelectorAll(".page-header__menu-mobile-list>a");
let logoButton = document.querySelector(".page-header__logo-toggle");


function menuToggler() {

let dataMobLists = [
  ['Esports', 'Clips', 'Series', 'Scores', 'Leagues', 'Players', 'Teams', 'Matches','',''],
  ['All Heroes', 'Meta', 'Trends', 'Lanes', 'Most Played', 'Win Rate', 'Game Impact', 'Economy', 'Farm', 'Damage and Healing'],
  ['Most Used', 'Win Rate', ' Game Impact', 'Economy', 'Cosmetics','','','','',''],
  ['Verified', 'Ranked Leaderboard', 'Achivements', 'Highest Win Rate', 'Most Matches Played', 'Time Spent Playing','','',''],
  ['Live Matches', 'Recent Esports Matches', 'Recent Matches', 'Slitbreaker', 'Dark Moon', '', '', '', '', ''],
  ['', '', '', '', '','','','','','']
  ]
  

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
                mobileMenuSubitems[i].textContent = dataMobLists[ind-3][i];
              }

            }
       
        }
        if ((ind > 2) && (ind < 8)) {
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
      };
  }
}
menuMobileToggle();

function titleMenuFixed() {
  let titleMenu = document.querySelector(".page-title__menu")

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
  }
}
titleMenuFixed();

function dataCalculate() {
  let dateAgo = document.querySelector(".page-title__item-timeago");

  let dateMatch = new Date(2021, 10, 22);

  dateAgo.textContent = Math.floor(-(dateMatch - Date.now()) / (1000 * 60 * 60 * 24)) + ' days ago';
}
dataCalculate();

let agShard = 'aghanims-shard-bf9def7dc51a9f3191c8303418a5ffc97cab23cbed5a9b1369254b75e8753885.jpg';
let PT = "power-treads.jpg";
let wand = "magic-wand.jpg";
let meka = "mekansm.jpg";
let blink = "blink-dagger.jpg";
let sashakaya = "kaya-and-sange.jpg";
let dust = "dust-of-appearance.jpg";
let BF = 'battle-fury.jpg'
let butter = "butterfly.jpg";
let linka = "linkens-sphere.jpg";
let satanic = "satanic.jpg";
let blyadorn = 'bloodthorn.jpg'
let manta = 'manta-style.jpg'
let urna = 'urn-of-shadows.jpg'
let phases = "phase-boots.jpg";
let lotar = "shadow-blade.jpg";
let crystal = "crystalys.jpg";
let aganim = "aghanims-scepter.jpg";
let windlace = "wind-lace.jpg";
let travel2 = "boots-of-travel-level-2.jpg";
let refresher = "refresher-orb.jpg";
let nolifer = "nullifier.jpg";
let BKB = "black-king-bar.jpg";
  
let matchData = [
  {
    heroImg: "heroimages/void-spirit.jpg",
    herolvl: 25,
    roleImg: "roleimages/carry.svg",
    laneImg: "roleimages/mid.svg",
    nickName: "Anonymous",
    laneOut: "Middle Drew",
    K: 3,
    D: 9,
    A: 10,
    NET: "15.5k",
    LH: 232,
    DN: 3,
    GPM: 395,
    XPM: 694,
    DMG: "36.3k",
    HEAL: 110,
    BLD: "-",
    wards: '<span class="ward">2</span> / <span class="sentry">1</span>',
    isBuffs: "Buffs:",
    items: {
      buffs: `<img class="match-info__buffs-image" src="itemimages/${agShard}">`,

      initems:
        '<div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/bottle.jpg"><span class="match-info__itemmin">1m</span></div><div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/magic-wand.jpg"><span class="match-info__itemmin">4m</span></div><div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/euls-scepter-of-divinity.jpg"><span class="match-info__itemmin">12m</span></div><div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/aghanims-scepter.jpg"><span class="match-info__itemmin">34m</span></div><div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/kaya.jpg"><span class="match-info__itemmin">42m</span></div><div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/boots-of-travel.jpg"><span class="match-info__itemmin"></span></div>',
      neutralitem: "itemimages/stormcrafter.jpg",
      bagitems: "",
    },
  },

  {
    heroImg: "heroimages/lich.jpg",
    herolvl: 16,
    roleImg: "roleimages/support.svg",
    laneImg: "roleimages/save.svg",
    nickName: "Anonymous",
    laneOut: "Bottom (Safe) Lost",
    K: 1,
    D: 19,
    A: 8,
    NET: "7.1k",
    LH: 31,
    DN: 1,
    GPM: 268,
    XPM: 280,
    DMG: "16.7k",
    HEAL: 716,
    BLD: "-",
    wards: '<span class="ward">18</span>/<span class="sentry">39</span>',
    isBuffs: "Buffs:",
    items: {
      buffs:
        '<img class="match-info__buffs-image" src="itemimages/tome-of-knowledge.jpg">',

      initems:
        '<div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/sentry-ward.jpg"><span class="match-info__itemmin">0m</span></div><div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/dust-of-appearance.jpg"><span class="match-info__itemmin">7m</span></div><div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/tranquil-boots.jpg"><span class="match-info__itemmin">17m</span></div><div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/magic-wand.jpg"><span class="match-info__itemmin">22m</span></div><div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/glimmer-cape.jpg"><span class="match-info__itemmin">26m</span></div><div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/force-staff.jpg"><span class="match-info__itemmin">36m</span></div>',
      neutralitem: "itemimages/telescope.jpg",
      bagitems: '<div class="match-info__initems-wrapper"><img class="match-info__bagitem-image" src="itemimages/dust-of-appearance.jpg"><span class="match-info__itemmin">2m</span></div>'
    },
  },

  {
    heroImg: "heroimages/necrophos.jpg",
    herolvl: 21,
    roleImg: "roleimages/carry.svg",
    laneImg: "roleimages/offlane.svg",
    nickName: '<a href="#" class="radiant--highlight">Alizee</a>',
    laneOut: "Top (Off) Lost",
    K: 6,
    D: 16,
    A: 7,
    NET: "14.8k",
    LH: 163,
    DN: 4,
    GPM: 378,
    XPM: 429,
    DMG: "20.4k",
    HEAL: "5.8k",
    BLD: "375",
    wards: '<span class="ward">-</span>/<span class="sentry">1</span>',
    isBuffs: "Buffs:",
    items: {
      buffs:
        '<img class="match-info__buffs-image" src="itemimages/aghanims-shard-bf9def7dc51a9f3191c8303418a5ffc97cab23cbed5a9b1369254b75e8753885.jpg">',

      initems: `<div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/${wand}"><span class="match-info__itemmin">4m</span></div><div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/${PT}"><span class="match-info__itemmin">7m</span></div><div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/${meka}"><span class="match-info__itemmin">15m</span></div><div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/${blink}"><span class="match-info__itemmin">22m</span></div><div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/${sashakaya}"><span class="match-info__itemmin">26m</span></div><div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/${dust}"><span class="match-info__itemmin">38m</span></div>`,
      neutralitem: "itemimages/ceremonial-robe.jpg",
      bagitems:
        '<div class="match-info__initems-wrapper"><img class="match-info__bagitem-image" src="itemimages/wind-lace.jpg"><span class="match-info__itemmin">2m</span></div>',
    },
  },

  {
    heroImg: "heroimages/anti-mage.jpg",
    herolvl: 30,
    roleImg: "roleimages/carry.svg",
    laneImg: "roleimages/save.svg",
    nickName:
      '<span><img class="check-img" src="roleimages/check-solid.svg"></span><a href="#" class="radiant--highlight">TSpirit.Yatoro</a>',
    laneOut: "Bottom (Safe) Lost",
    K: 11,
    D: 6,
    A: 7,
    NET: "31.4k",
    LH: 445,
    DN: 8,
    GPM: 726,
    XPM: 806,
    DMG: "52.4k",
    HEAL: "-",
    BLD: "10.7k",
    wards: '<span class="ward">-</span>/<span class="sentry">-</span>',
    isBuffs: "Buffs:",
    items: {
      buffs:
        '<img class="match-info__buffs-image" src="itemimages/tome-of-knowledge.jpg">',

      initems: `<div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/${BF}"><span class="match-info__itemmin">17m</span></div><div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/${manta}"><span class="match-info__itemmin">23m</span></div><div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/${blyadorn}"><span class="match-info__itemmin">15m</span></div><div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/${satanic}"><span class="match-info__itemmin">39m</span></div><div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/${linka}"><span class="match-info__itemmin">42m</span></div><div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/${butter}"><span class="match-info__itemmin">38m</span></div>`,
      neutralitem: "itemimages/ninja-gear.jpg",
      bagitems: "",
    },
  },

  {
    heroImg: "heroimages/spirit-breaker.jpg",
    herolvl: 21,
    roleImg: "roleimages/carry.svg",
    laneImg: "roleimages/offlane.svg",
    nickName: "Anonymous",
    laneOut: "Top (Off) Lost",
    K: 2,
    D: 23,
    A: 10,
    NET: "13.5k",
    LH: 209,
    DN: 1,
    GPM: 384,
    XPM: 426,
    DMG: "19.7k",
    HEAL: "-",
    BLD: "60",
    wards: '<span class="ward">2</span>/<span class="sentry">2</span>',
    isBuffs: "Buffs:",
    items: {
      buffs: `<img class="match-info__buffs-image" src="itemimages/${agShard}">`,

      initems: `<div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/${urna}"><span class="match-info__itemmin">6m</span></div><div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/${phases}"><span class="match-info__itemmin">11m</span></div><div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/${lotar}"><span class="match-info__itemmin">15m</span></div><div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/${aganim}"><span class="match-info__itemmin">39m</span></div><div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/${crystal}"><span class="match-info__itemmin">42m</span></div><div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/${windlace}"><span class="match-info__itemmin">38m</span></div>`,
      neutralitem: "itemimages/trickster-cloak.jpg",
      bagitems:
        '<div class="match-info__initems-wrapper"><img class="match-info__bagitem-image" src="itemimages/clarity.jpg"><span class="match-info__itemmin">2m</span></div><div class="match-info__initems-wrapper"><img class="match-info__bagitem-image" src="itemimages/dust-of-appearance.jpg"><span class="match-info__itemmin">2m</span></div>',
    },
  },
];

let matchData2 = [
  {
    heroImg: "heroimages/phantom-assassin.jpg",
    herolvl: 30,
    roleImg: "roleimages/carry.svg",
    laneImg: "roleimages/save.svg",
    nickName: "Anonymous",
    laneOut: "Top (Safe) Wom",
    K: 24,
    D: 1,
    A: 26,
    NET: "42.0k",
    LH: 599,
    DN: 28,
    GPM: 943,
    XPM: 846,
    DMG: "68.3k",
    HEAL: 110,
    BLD: "14.1k",
    wards: '<span class="ward">-</span> / <span class="sentry">-</span>',
    isBuffs: "Buffs:",
    items: {
      buffs: `<img class="match-info__buffs-image" src="itemimages/${agShard}">`,

      initems: `<div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/${BF}"><span class="match-info__itemmin">6m</span></div><div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/${BKB}"><span class="match-info__itemmin">11m</span></div><div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/${nolifer}"><span class="match-info__itemmin">15m</span></div><div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/${linka}"><span class="match-info__itemmin">39m</span></div><div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/${refresher}"><span class="match-info__itemmin">42m</span></div><div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/${travel2}"><span class="match-info__itemmin">38m</span></div>`,
      neutralitem: "itemimages/the-leveller.jpg",
      bagitems: "",
    },
  },

  {
    heroImg: "heroimages/storm-spirit.jpg",
    herolvl: 16,
    roleImg: "roleimages/support.svg",
    laneImg: "roleimages/save.svg",
    nickName: "Anonymous",
    laneOut: "Bottom (Safe) Lost",
    K: 1,
    D: 19,
    A: 8,
    NET: "7.1k",
    LH: 31,
    DN: 1,
    GPM: 268,
    XPM: 280,
    DMG: "16.7k",
    HEAL: 716,
    BLD: "-",
    wards: '<span class="ward">18</span>/<span class="sentry">39</span>',
    isBuffs: "Buffs:",
    items: {
      buffs:
        '<img class="match-info__buffs-image" src="itemimages/tome-of-knowledge.jpg">',

      initems:
        '<div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/sentry-ward.jpg"><span class="match-info__itemmin">0m</span></div><div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/dust-of-appearance.jpg"><span class="match-info__itemmin">7m</span></div><div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/tranquil-boots.jpg"><span class="match-info__itemmin">17m</span></div><div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/magic-wand.jpg"><span class="match-info__itemmin">22m</span></div><div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/glimmer-cape.jpg"><span class="match-info__itemmin">26m</span></div><div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/force-staff.jpg"><span class="match-info__itemmin">36m</span></div>',
      neutralitem: "itemimages/telescope.jpg",
      bagitems: "",
    },
  },

  {
    heroImg: "heroimages/undying.jpg",
    herolvl: 21,
    roleImg: "roleimages/carry.svg",
    laneImg: "roleimages/offlane.svg",
    nickName: '<a href="#" class="radiant--highlight">Alizee</a>',
    laneOut: "Top (Off) Lost",
    K: 6,
    D: 16,
    A: 7,
    NET: "14.8k",
    LH: 163,
    DN: 4,
    GPM: 378,
    XPM: 429,
    DMG: "20.4k",
    HEAL: "5.8k",
    BLD: "375",
    wards: '<span class="ward">19</span>/<span class="sentry">39</span>',
    isBuffs: "Buffs:",
    items: {
      buffs:
        '<img class="match-info__buffs-image" src="itemimages/aghanims-shard-bf9def7dc51a9f3191c8303418a5ffc97cab23cbed5a9b1369254b75e8753885.jpg">',

      initems: `<div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/${wand}"><span class="match-info__itemmin">4m</span></div><div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/${PT}"><span class="match-info__itemmin">7m</span></div><div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/${meka}"><span class="match-info__itemmin">15m</span></div><div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/${blink}"><span class="match-info__itemmin">22m</span></div><div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/${sashakaya}"><span class="match-info__itemmin">26m</span></div><div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/${dust}"><span class="match-info__itemmin">38m</span></div>`,
      neutralitem: "itemimages/ceremonial-robe.jpg",
      bagitems:
        '<div class="match-info__initems-wrapper"><img class="match-info__bagitem-image" src="itemimages/wind-lace.jpg"><span class="match-info__itemmin">2m</span></div>',
    },
  },

  {
    heroImg: "heroimages/rubick.jpg",
    herolvl: 30,
    roleImg: "roleimages/carry.svg",
    laneImg: "roleimages/save.svg",
    nickName:
      '<span><img class="check-img" src="roleimages/check-solid.svg"></span><a href="#" class="radiant--highlight">TSpirit.Yatoro</a>',
    laneOut: "Bottom (Safe) Lost",
    K: 11,
    D: 6,
    A: 7,
    NET: "31.4k",
    LH: 445,
    DN: 8,
    GPM: 726,
    XPM: 806,
    DMG: "52.4k",
    HEAL: "-",
    BLD: "10.7k",
    wards: '<span class="ward">-</span>/<span class="sentry">-</span>',
    isBuffs: "Buffs:",
    items: {
      buffs:
        '<img class="match-info__buffs-image" src="itemimages/tome-of-knowledge.jpg">',

      initems: `<div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/${BF}"><span class="match-info__itemmin">17m</span></div><div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/${manta}"><span class="match-info__itemmin">23m</span></div><div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/${blyadorn}"><span class="match-info__itemmin">15m</span></div><div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/${satanic}"><span class="match-info__itemmin">39m</span></div><div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/${linka}"><span class="match-info__itemmin">42m</span></div><div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/${butter}"><span class="match-info__itemmin">38m</span></div>`,
      neutralitem: "itemimages/ninja-gear.jpg",
      bagitems: "",
    },
  },

  {
    heroImg: "heroimages/marci.jpg",
    herolvl: 21,
    roleImg: "roleimages/carry.svg",
    laneImg: "roleimages/offlane.svg",
    nickName: "Anonymous",
    laneOut: "Top (Off) Lost",
    K: 2,
    D: 23,
    A: 10,
    NET: "13.5k",
    LH: 209,
    DN: 1,
    GPM: 384,
    XPM: 426,
    DMG: "19.7k",
    HEAL: "-",
    BLD: "60",
    wards: '<span class="ward">2</span>/<span class="sentry">2</span>',
    isBuffs: "Buffs:",
    items: {
      buffs: `<img class="match-info__buffs-image" src="itemimages/${agShard}">`,

      initems: `<div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/${urna}"><span class="match-info__itemmin">6m</span></div><div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/${phases}"><span class="match-info__itemmin">11m</span></div><div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/${lotar}"><span class="match-info__itemmin">15m</span></div><div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/${aganim}"><span class="match-info__itemmin">39m</span></div><div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/${crystal}"><span class="match-info__itemmin">42m</span></div><div class="match-info__initems-wrapper"><img class="match-info__initems-image" src="itemimages/${windlace}"><span class="match-info__itemmin">38m</span></div>`,
      neutralitem: "itemimages/trickster-cloak.jpg",
      bagitems:
        '<div class="match-info__initems-wrapper"><img class="match-info__bagitem-image" src="itemimages/clarity.jpg"><span class="match-info__itemmin">2m</span></div><div class="match-info__initems-wrapper"><img class="match-info__bagitem-image" src="itemimages/dust-of-appearance.jpg"><span class="match-info__itemmin">2m</span></div>',
    },
  },
];

let indexMax = [];
let maxPreNet = 0;
let maxPreDMG = 0;
let maxPreHEAL = 0;
let maxPreBLD = 0;
let statsFillCount = 0;
let maxPreK=0;
let maxPreD=0;
let maxPreA=0;
let maxPreLH = 0;
let maxPreDN = 0;
let premaxlist = [maxPreNet, maxPreDMG, maxPreHEAL, maxPreBLD, maxPreK, maxPreD, maxPreA, maxPreLH , maxPreDN];

function statsFill(dataBase, sideBlock, finalWard, finalSentry, isDireRow=0) {
  let row = 1 + isDireRow;
  if (isDireRow===1) {
  var Minus=5
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
  let radiantWards = 0;

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
      
      if (preNET.indexOf("k") > -1) {
        preNET = preNET.replace("k", "");
      }
      if (preDMG.indexOf("k") > -1) {
        preDMG = preDMG.replace("k", "");
      }
      preNET = Number(preNET);
      preNET *= 1000;
      radiantNET += preNET;
    
//   if (preNET > maxPreNet) {
//     maxPreNet = preNET
//     if (statsFillCount===1) {
//       var countPlus=7
//     } else {
//       var countPlus = 0;
//     }
//     indexMax = i + 1 + countPlus;
//   }


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
        
        let prelist = [preNET, preDMG, preHEAL, preBLD, preK ,preD ,preA ,preLH,preDN];
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
      let radiantList = [
        radiantLH,
        radiantGPM,
        radiantXPM,
        radiantDMG,
        radiantHEAL,
        radiantBLD,
      ];
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
    row = Math.abs(row -Minus);
  }

statsFillCount=1;
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

function underlineNET() {
  let pizda = [8, 15, 16, 17,5,6,7,9,11]
  for (let i = 0; i < pizda.length; i++) {
  document.querySelectorAll(`.match-info__statsblock-row>div:nth-child(${pizda[i]})`)[indexMax[i]].style =
    "text-decoration: underline; text-decoration-style: solid;"
  }
}
underlineNET();

function hoverForStats() {
  for (let col = 1; col < 20; col++) {

    let column = document.querySelectorAll(
      `.match-info__statsblock-row>div:nth-child(${col})`
    );

    //console.log(
    //  hoverRow[0].parentElement.parentElement.classList.contains(
    //    "match-info__stats-radiant"
    //  )
    //  );
  
    //console.log(column[0].parentElement.parentElement.parentElement.classList.contains( "match-info__stats-radiant"));

    for (let i = 0; i < column.length; i++) {
 
      column[i].onmouseover = () => {
        for (let j = 0; j < column.length; j++) {
          if (j % 2 === 0) {
            if (column[j].closest(".match-info__stats-radiant")) {
              column[j].style.backgroundColor = "#384244";
            } else {
              column[j].style.backgroundColor = "#443C43";
            }


          } else {
            if (column[j].closest(".match-info__stats-radiant")) {
              column[j].style.backgroundColor = "#3E4842";
            } else {
              column[j].style.backgroundColor = "#393C44";
            }
          }

          if (i === j) {
            column[j].style.backgroundColor = "#454D55";
          }
        };
      }

      column[i].onmouseout = () => {
        for (let j = 0; j < column.length; j++) {
          column[j].style.backgroundColor = "";
        }
      }
    
    }
  }

  let hoverRow = document.querySelectorAll(`.match-info__statsblock-row`);

  for (let i = 1; i < hoverRow.length - 1; i++) {
    hoverRow[i].onmouseover = () => {
      hoverRow[i].style.backgroundColor = "#39424B";
    }
    hoverRow[i].onmouseout = () => {
      hoverRow[i].style.backgroundColor = "";
    }

  }
}

hoverForStats();



function hintsForHeroes() {

let hintData = [
  {
    name: "Void Spirit",
    heroImage: "heroimages/void-spirit.jpg",
    heroType: "Intellegence Hero",
    typeImage: "roleimages/intell.svg",
    popularPlace: "46th",
    popularPercent: "49.54%",
    stengthGain: "22+2.6",
    agilityGain: "19+2.2",
    itellegenceGain: "24+3.1",
    speed: 295,
    armor: 1.66,
    roles: "Melee, Carry, Disabler, Escape, Nuke",
  },
  {
    name: "Lich",
    heroImage: "heroimages/lich.jpg",
    heroType: "Intellegence Hero",
    typeImage: "roleimages/intell.svg",
    popularPlace: "58th",
    popularPercent: "50%",
    stengthGain: "20+2.1",
    agilityGain: "15+2.0",
    itellegenceGain: "24+4.1",
    speed: 295,
    armor: 1.1,
    roles: "Ranged, Nuke, Support",
  },

  {
    name: "Necrophos",
    heroImage: "heroimages/necrophos.jpg",
    heroType: "Intellegence Hero",
    typeImage: "roleimages/intell.svg",
    popularPlace: "48th",
    popularPercent: "52.23%",
    stengthGain: "18+2.3",
    agilityGain: "12+1.3",
    itellegenceGain: "21+2.7",
    speed: 280,
    armor: 2.68,
    roles: "Ranged, Carry, Disable, Durable, Nuke",
  },
  {
    name: "Anti-Mage",
    heroImage: "heroimages/anti-mage.jpg",
    heroType: "Agility Hero",
    typeImage: "roleimages/agill.svg",
    popularPlace: "17th",
    popularPercent: "51.67%",
    stengthGain: "23+1.6",
    agilityGain: "24+2.8",
    itellegenceGain: "12+1.8",
    speed: 310,
    armor: 3.36,
    roles: "Melee, Carry, Escape, Nuke",
  },
  {
    name: "Spirit Breaker",
    heroImage: "heroimages/spirit-breaker.jpg",
    heroType: "Strength Hero",
    typeImage: "roleimages/stren.svg",
    popularPlace: "10th",
    popularPercent: "51.88%",
    stengthGain: "28+3.0",
    agilityGain: "17+1.7",
    itellegenceGain: "14+1.8",
    speed: 295,
    armor: 4.38,
    roles: "Melee, Carry, Disable, Durabler, Escape, Initiator",
  },
  {
    name: "Phantom Assasin",
    heroImage: "heroimages/phantom-assassin.jpg",
    heroType: "Agility Hero",
    typeImage: "roleimages/agill.svg",
    popularPlace: "10th",
    popularPercent: "51.88%",
    stengthGain: "28+3.0",
    agilityGain: "17+1.7",
    itellegenceGain: "14+1.8",
    speed: 295,
    armor: 4.38,
    roles: "Melee, Carry, Disable, Durabler, Escape, Initiator",
  },
  {
    name: "Storm Spirit",
    heroImage: "heroimages/storm-spirit.jpg",
    heroType: "Intellegence Hero",
    typeImage: "roleimages/intell.svg",
    popularPlace: "10th",
    popularPercent: "51.88%",
    stengthGain: "28+3.0",
    agilityGain: "17+1.7",
    itellegenceGain: "14+1.8",
    speed: 295,
    armor: 4.38,
    roles: "Melee, Carry, Disable, Durabler, Escape, Initiator",
  },

  {
    name: "Undying",
    heroImage: "heroimages/undying.jpg",
    heroType: "Strength Hero",
    typeImage: "roleimages/agill.svg",
    popularPlace: "10th",
    popularPercent: "51.88%",
    stengthGain: "28+3.0",
    agilityGain: "17+1.7",
    itellegenceGain: "14+1.8",
    speed: 295,
    armor: 4.38,
    roles: "Melee, Carry, Disable, Durabler, Escape, Initiator",
  },

  {
    name: "Rubick",
    heroImage: "heroimages/rubick.jpg",
    heroType: "Intellegence Hero",
    typeImage: "roleimages/intell.svg",
    popularPlace: "10th",
    popularPercent: "51.88%",
    stengthGain: "28+3.0",
    agilityGain: "17+1.7",
    itellegenceGain: "14+1.8",
    speed: 295,
    armor: 4.38,
    roles: "Melee, Carry, Disable, Durabler, Escape, Initiator",
  },

  {
    name: "Marci",
    heroImage: "heroimages/marci.jpg",
    heroType: "Strength Hero",
    typeImage: "roleimages/stren.svg",
    popularPlace: "10th",
    popularPercent: "51.88%",
    stengthGain: "28+3.0",
    agilityGain: "17+1.7",
    itellegenceGain: "14+1.8",
    speed: 295,
    armor: 4.38,
    roles: "Melee, Carry, Disable, Durabler, Escape, Initiator",
  },
];

  let imgs = document.querySelectorAll('img')
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
    
      if (
        imgs[i].src === "http://127.0.0.1:5500/" + hintData[j].heroImage ||
        imgs[i].src.indexOf(hintData[j].heroImage)>-1
      ) {
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

          let jopa = ["Strength Hero", "Agility Hero", "Intellegence Hero"];

          for (let pizda = 0; pizda < jopa.length; pizda++) {
            if (hintData[j].heroType === jopa[pizda]) {
              hintGainImg[pizda].classList.add("herohint__statsgain--main-img");
              let numDel = 1;
              let numDelHelp = 0;
              if (pizda === 2) {
                numDel = 0;
              } else if (pizda === 1) {
                numDel = 1;
                numDelHelp = 1;
              }
              let listToDelete = [numDel - numDelHelp, numDel + 1];
              hintGainImg[listToDelete[0]].classList.remove(
                "herohint__statsgain--main-img"
              );
              hintGainImg[listToDelete[1]].classList.remove(
                "herohint__statsgain--main-img"
              );
              herohint.classList.remove("hidden");
            }
          }
        };
        imgs[i].onmousemove = () => {
          if (window.event.clientY > 740) {
            //herohint.style.top = window.event.pageY - 216 + "px";
            herohint.style.top = "750px";
          } else {
            herohint.style.top = window.event.clientY + 10 + "px";
          }
          herohint.style.left = window.event.pageX + 5 + "px";
        };

        imgs[i].onmouseout = () => {
          herohint.classList.add("hidden");
        };
      }
    }
  }
}

hintsForHeroes()
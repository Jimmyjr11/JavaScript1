// ===== Parent controls all tasks =====

let childWin = null;

// Buttons
let openFlyingBtn = document.getElementById("openFlyingBtn");
let stopFlyingBtn = document.getElementById("stopFlyingBtn");
let closeChildBtn = document.getElementById("closeChildBtn");

let openTypingBtn = document.getElementById("openTypingBtn");

let openAdBtn = document.getElementById("openAdBtn");
let stopAdBtn = document.getElementById("stopAdBtn");

// ---------------- 2.1.1 Flying ----------------
let flyTimer = null;
let xPos = 50;
let yPos = 50;
let step = 10;

openFlyingBtn.addEventListener("click", function () {
     closeChild();
     childWin = window.open("child.html?mode=flying", "", "width=300,height=200");
     if (childWin) childWin.focus();
     startFlying();
});

stopFlyingBtn.addEventListener("click", function () {
     stopFlying();
});

function startFlying() {
     if (!childWin || childWin.closed) return;

     stopFlying();
     flyTimer = setInterval(function () {
          if (!childWin || childWin.closed) {
               stopFlying();
               return;
          }

          let maxY = screen.availHeight - 220;
          let minY = 0;

          yPos += step;
          if (yPos >= maxY || yPos <= minY) step = -step;

          childWin.moveTo(xPos, yPos);
          childWin.focus();
     }, 50);
}

function stopFlying() {
     if (flyTimer) {
          clearInterval(flyTimer);
          flyTimer = null;
     }
}

// ---------------- 2.1.2 Typing ----------------
openTypingBtn.addEventListener("click", function () {
     closeChild();
     childWin = window.open("child.html?mode=typing", "", "width=450,height=220");
     if (childWin) childWin.focus();
});

// ---------------- 2.1.3 Advertising scroll ----------------
let adTimer = null;

openAdBtn.addEventListener("click", function () {
     closeChild();
     childWin = window.open("child.html?mode=ad", "", "width=500,height=300");
     if (childWin) childWin.focus();

     // wait a tiny bit for child content to load
     setTimeout(startAdScroll, 300);
});

stopAdBtn.addEventListener("click", function () {
     stopAdScroll();
});

function startAdScroll() {
     if (!childWin || childWin.closed) return;

     stopAdScroll();
     adTimer = setInterval(function () {
          if (!childWin || childWin.closed) {
               stopAdScroll();
               return;
          }

          childWin.scrollBy(0, 5);
          childWin.focus();

          // if at bottom -> back to top
          let doc = childWin.document;
          if (childWin.innerHeight + childWin.scrollY >= doc.body.scrollHeight) {
               childWin.scrollTo(0, 0);
          }
     }, 50);
}

function stopAdScroll() {
     if (adTimer) {
          clearInterval(adTimer);
          adTimer = null;
     }
}

// ---------------- Common ----------------
closeChildBtn.addEventListener("click", function () {
     closeChild();
});

function closeChild() {
     stopFlying();
     stopAdScroll();
     if (childWin && !childWin.closed) childWin.close();
}
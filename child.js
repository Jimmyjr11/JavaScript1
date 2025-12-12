// ===== Child page changes based on mode =====
let params = new URLSearchParams(location.search);
let mode = params.get("mode");

let titleEl = document.getElementById("title");
let contentEl = document.getElementById("content");

// ------------- 2.1.1 Flying -------------
if (mode === "flying") {
     titleEl.textContent = "Flying Window ✈️";
     contentEl.innerHTML = "<p>I will move up and down (controlled by parent).</p>";
}

// ------------- 2.1.2 Typing + auto close -------------
else if (mode === "typing") {
     titleEl.textContent = "Typing Window ⌨️";

     let p = document.createElement("p");
     p.id = "msg";
     contentEl.appendChild(p);

     let text = "Welcome! This message is being typed...";
     let i = 0;

     let typingTimer = setInterval(function () {
          p.textContent += text[i];
          i++;

          if (i === text.length) {
               clearInterval(typingTimer);


               setTimeout(function () {
                    window.close();
               }, 2000);
          }
     }, 80);
}

// ------------- 2.1.3 Advertising scroll content -------------
else if (mode === "ad") {
     titleEl.textContent = "Advertising Window 📢";

     contentEl.innerHTML = `
    <div class="adBox">
      <h3>🔥 BIG SALE 🔥</h3>
      <p>Buy 1 Get 1 Free!</p>
      <p>Discounts up to 70%!</p>
      <p>Limited Time Offer!</p>
      <p>Scroll to see more...</p>

      <br><br><br><br><br><br><br><br><br><br>

      <h3>Contact us now!</h3>
      <p>Phone: 01000000000</p>
      <p>Email: sale@shop.com</p>
    </div>
  `;
}

// ------------- Default -------------
else {
     titleEl.textContent = "Child Window";
     contentEl.innerHTML = "<p>No mode selected.</p>";
}

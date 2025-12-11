//? A.2 DOM nodes task

window.addEventListener("DOMContentLoaded", function () {
     let img;
    let headerDiv = document.getElementById("header");
    img = document.getElementById("mainImg");

    let title = document.createElement("h2");
    let titleTxt = document.createTextNode("Brain Site Navigation");
    title.appendChild(titleTxt);

    headerDiv.appendChild(title);
    let navList = document.getElementById("navList");
    navList.style.listStyleType = "none";
    navList.style.paddingLeft = "0";

    let navItems = navList.getElementsByTagName("li");
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].style.margin = "4px 0";
    }
    let links = navList.getElementsByTagName("a");
    for (let i = 0; i < links.length; i++) {
        if (links[i].textContent === "Photos") {
            links[i].textContent = "Gallery";
        }
    }

    let liNew = document.createElement("li");
    let aNew = document.createElement("a");
    aNew.setAttribute("href", "Links.html");
    aNew.appendChild(document.createTextNode("Links"));
    liNew.appendChild(aNew);
    navList.appendChild(liNew);

    //& 5) Remove one existing item (for example, remove "Articles")
    //    (demonstrate removeChild using DOM nodes)
    for (let i = 0; i < links.length; i++) {
        if (links[i].textContent === "Articles") {
            let liToRemove = links[i].parentNode;
            navList.removeChild(liToRemove);
            break;
        }
    }

    //& 6) Add some text under the navigation using DOM
    let infoPara = document.createElement("p");
    let infoTxt = document.createTextNode("Use the links above to browse the site.");
    infoPara.appendChild(infoTxt);

    // insert after navigation div
    let navDiv = document.getElementById("navigation");
    navDiv.parentNode.insertBefore(infoPara, navDiv.nextSibling);
});
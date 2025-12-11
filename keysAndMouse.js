//? B.1 Alert ASCII code of any key pressed
//   and detect whether it is Alt key or Ctrl key or Shift key

document.addEventListener("keydown", function (e) {
     let msg = "Key: " + e.key + "\nASCII / keyCode: " + e.keyCode;

     if (e.altKey) {
          msg += "\nAlt key is pressed";
     }
     if (e.ctrlKey) {
          msg += "\nCtrl key is pressed";
     }
     if (e.shiftKey) {
          msg += "\nShift key is pressed";
     }

     alert(msg);
});
document.addEventListener("contextmenu", function (e) {
     e.preventDefault();
     alert("Context menu is disabled on this page.");
});

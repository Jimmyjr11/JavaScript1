//? A.1 Text style task

window.addEventListener("DOMContentLoaded", function () {
    let para = document.getElementById("textPara");
    let radios = document.querySelectorAll("input[type='radio']");

    radios.forEach(function (rb) {
        rb.addEventListener("change", function () {

            let cssProp = this.name;   
            let val = this.value;      

            para.style[cssProp] = val;
        });
    });
});

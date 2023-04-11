var carre = document.querySelector(".carre")
var className = carre.getAttribute("class")
var bg = window.getComputedStyle(carre).getPropertyValue("background-color")
var color = window.getComputedStyle(carre).getPropertyValue("color")
var height = window.getComputedStyle(carre).getPropertyValue("height")
var width = window.getComputedStyle(carre).getPropertyValue("width")
var display = window.getComputedStyle(carre).getPropertyValue("display")
var ff = window.getComputedStyle(carre).getPropertyValue("font-family")
var size = window.getComputedStyle(carre).getPropertyValue("font-size")


carre.addEventListener("click", function() {
    alert("Classe : " + className + "\n - Background color : " + bg + "\n - Color : " + color + "\n - Height : " + height + "\n - Width : " + width + "\n - Display : " + display + "\n - Display : " + ff + " (" + size + ")")
})

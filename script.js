var svg = document.getElementById("svg")
var view = document.getElementById("mobile-menu")
var x = document.getElementById("x")

svg.addEventListener("click",function(){
    view.classList.remove("hidden")
})
x.addEventListener("click",function(){
    view.classList.add("hidden")
})
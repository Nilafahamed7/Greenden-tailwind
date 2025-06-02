var svg = document.getElementById("svg")
var sidenav = document.getElementById("side-navbar")
var close = document.getElementById("close-bar")

svg.addEventListener("click",function(){
    sidenav.style.left = 0
})
close.addEventListener("click",function(){
    sidenav.style.left = "-60%"
})
var svg = document.getElementById("svg")
var sidenav = document.getElementById("side-navbar")
var close = document.getElementById("close-bar")

svg.addEventListener("click",function(){
    sidenav.style.left = 0
})
close.addEventListener("click",function(){
    sidenav.style.left = "-60%"
})

//search functionality

var search = document.getElementById("Search")
var box = document.getElementById("box")
var list = box.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredval = event.target.value.toUpperCase()
    console.log(enteredval)

    for(count=0; count<list.length; count+=1)
    {
        var productname = list[count].querySelector("h1").textContent

        if(productname.toUpperCase().indexOf(enteredval)<0)
        {
            list[count].style.display = "none"
        }
        else{
            list[count].style.display = "block"
        }
    }

})
// Hamburger-Menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

// Pop-Up-Menu
var i=0;
function pop(){
    if(i==0){
        document.getElementById("item1").style.transform = 'translateY(-60px)';
        document.getElementById("item2").style.transform = 'translateY(-120px)';
        document.getElementById("item3").style.transform = 'translateY(-180px)';

        i=1;
    }
    else{
        document.getElementById("item1").style.transform = 'translate(0)';
        document.getElementById("item2").style.transform = 'translate(0)';
        document.getElementById("item3").style.transform = 'translate(0)';

        i=0;
    }
}

// Switch

var Ctrl=document.getElementById("Ctrl");

body .addEventListener("click",function(){
    var state=Ctrl.checked;
    
    if (state) {
        
    }
    else{

    }
});

var Ctrl2=document.getElementById("Ctrl-2");

body .addEventListener("click",function(){
    var state=Ctrl2.checked;
    
    if (state) {
        
    }
    else{

    }
});
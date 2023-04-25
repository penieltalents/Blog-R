// prompt("Fill in your name")

// Onclick function for menu button

var menuBtn = document.getElementsByClassName("menu_btn")
var toggleMenu = document.getElementById("toggle_menu")

toggleMenu.style.display = "none";
menuBtn.onclick = function(){
    if(toggleMenu.style.display == "none"){
        toggleMenu.style.display = "flex";
    }
    else{
        toggleMenu.style.display = "none";
    }
}


    
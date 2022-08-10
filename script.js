window.addEventListener('scroll',function(){
    let header = document.querySelector('nav');
    if(scrollY>20){
        header.classList.add('scroll-active');
        document.getElementById('span-1').classList.remove('span');
    }
    else{
        header.classList.remove('scroll-active');
    }
    
})


function navMenu(){
    //menu color change
    var c = document.getElementById("menu");
    if (c.style.color === "white") {
      c.style.color = "#00edd5";
    } else {
      c.style.color = "white";
    }

    //navbar menu
    var x = document.getElementById("navmenu");
    if (x.className === "row") {
        x.className += "Active";
    }else {
            x.className = "row";
    }
}
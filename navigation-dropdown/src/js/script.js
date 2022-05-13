function myFunction(x) {
    x.classList.toggle("drawer");

    let nav = document.querySelector("nav");
    
    let width = nav.clientWidth, 
        height = nav.clientHeight;
        
    // console.log (width);
    console.log (height);

    if ( height <= 100) {
        document.querySelector("body").style.background = "#202020";
        document.querySelector("nav").style.height = "300px";
        document.querySelector("nav").style.transition = "0.8s";
        document.querySelector("nav").style.background = "rgba(52, 52, 52, 0.6)";
        document.querySelector(".bar1").style.background = "white";
        document.querySelector(".bar3").style.background = "white";
        document.querySelector(".hide").style.display = "unset";
    } else {
        document.querySelector("body").style.background = "#FFF";
        document.querySelector("nav").style.height = "60px";
        document.querySelector("nav").style.transition = "0.8s";
        document.querySelector("nav").style.background = "rgba(52, 52, 52, 0.6)";
        document.querySelector(".bar1").style.background = "white";
        document.querySelector(".bar2").style.background = "white";
        document.querySelector(".bar3").style.background = "white";
        document.querySelector(".hide").style.display = "none";
    }
}
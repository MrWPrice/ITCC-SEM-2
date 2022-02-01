let deg = 0; // starting point
let rotationDiff = 1;

let rotation;
let rotationInterval;

function myPress(){
    alert("Hello! I am an alert box!!");
}

function onePress(){
    rotationInterval = setInterval("rotateDiv()", 10);
    console.log("start");
}

function twoPress(){
    clearInterval(rotationInterval);
    console.log("stop");  
}

function rotateDiv(){
    let divAnim01 = document.getElementById("divAnim01");

    //divAnim01.style.webkitTransform = "rotate(" + deg + "deg)";
    divAnim01.style.transform = "rotate(" + deg + "deg)";
    // divAnim01.style.MozTransform = "rotate(" + deg + "deg)";
    // divAnim01.style.msTransform = "rotate(" + deg + "deg)";
    // divAnim01.style.OTransform = "rotate(" + deg + "deg)";
    deg += rotationDiff;
    if(deg > 360) {
     deg = 0;
    }
}
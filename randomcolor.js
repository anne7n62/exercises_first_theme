"use strict";

function randomBackground(){
    console.log("random background");

    const color = randomColor();
    const css = rgbToCSS(color);
    setBackgroundColor(css);
}

function randomColor(){
    //return rgb
    const r = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    console.log("randomcolor")
    return {r,g,b};
}

function rgbToCSS (rgb) {
    //return css color string
    console.log(rgbToCSS);
    const css = `rgb( ${rgb.r},${rgb.b},${rgb.g})`;
    return css;
}

//Sets the background color on body
function setBackgroundColor(cssColorString){
console.log("setBackgroundColor");

document.querySelector("body").style.backgroundColor = cssColorString;
}
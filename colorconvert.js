function rgbToHex(rgb) {
    	
    const r2 = rgb.r.toString(16).padStart(2,"0");
    const g2 = rgb.g.toString(16).padStart(2,"0");
    const b2 = rgb.b.toString(16).padStart(2,"0");
    const hex = `#${r2}${g2}${b2}`;

   return hex;
}

const rgb = {r:11, g:123, b:22};
const result = rgbToHex(rgb);
console.log(result);










// function hexToRGB (hex) {
//     const r = parseInt(hex.substring(1,3),16);
//     const g = parseInt(hex.substring(3,5),16);
//     const b = parseInt(hex.substring(5,7),16);

//     return {r,g,b};
// }

// const result = hexToRGB("#c0ffee");
// console.log(result);
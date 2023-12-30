const hexcolors = [ 1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
let btn = document.getElementById("btn");
let colorName = document.getElementById("colorName");

btn.addEventListener("click", function() {
   let hex = "#";
    for(let i = 0; i<6; i++){
hex += hexcolors[colorChange()];
    }

document.body.style.background =  hex;
colorName.textContent = hex;

})
function colorChange() {
    return Math.floor(Math.random( ) * hexcolors.length);
}
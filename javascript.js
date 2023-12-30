const colors = [ 'pink', 'skyblue', 'aqua', 'aquamarine']
let btn = document.getElementById("btn")
let colorName = document.getElementById("colorName")


function clickMe(){

document.body.style.background = colors[colorChange()]
colorName.textContent = colors[colorChange()]

}
let colorChange = ( ) =>{
    return Math.floor(Math.random( ) * colors.length)
}
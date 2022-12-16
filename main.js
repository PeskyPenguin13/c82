canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")

var color1 = "red"
var width = 5
var lastpositionofx, lastpositionofy
var mouseevent = "empty"

canvas.addEventListener("mousedown", MouseDown)
canvas.addEventListener("mouseup", MouseUp)
canvas.addEventListener("mouseleave", MouseLeave)
canvas.addEventListener("mousemove", MouseMove)

function MouseDown(a){
    mouseevent="Down_Mouse"
    color1 = document.getElementById("mycolor").value;
    width = document.getElementById("mywidth").value;
}

function MouseUp(b){
    mouseevent="Up_Mouse"
}

function MouseLeave(c){
    mouseevent="Leave_Mouse"
}

function MouseMove(d){
    var currentpositionofx = d.clientx-canvas.offsetLeft
    var currentpsitionofy = d.clienty-canvas.offsetTop

    if(mouseevent=="Down_Mouse"){
        console.log("Test")
        ctx.beginPath()
        ctx.strokeStyle = color1
        ctx.lineWidth = width
        ctx.moveTo(lastpositionofx, lastpositionofy)
        ctx.lineTo(currentpositionofx, currentpsitionofy)
    }
    lastpositionofx = currentpositionofx
    lastpositionofy = currentpsitionofy
}
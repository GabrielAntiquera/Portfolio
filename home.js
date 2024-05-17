// Robo animation//
let paths = ["imgs/Robo1.png","imgs/Robo1.png","imgs/Robo1.png",
"imgs/Robo1.png","imgs/Robo1.png","imgs/Robo1.png",
"imgs/Robo1.png","imgs/Robo1.png","imgs/Robo1.png",
"imgs/Robo1.png","imgs/Robo2.png","imgs/Robo1.png",
"imgs/Robo1.png","imgs/Robo2.png","imgs/Robo1.png",
"imgs/Robo1.png","imgs/Robo1.png","imgs/Robo1.png",
"imgs/Robo1.png","imgs/Robo1.png","imgs/Robo1.png",
"imgs/Robo1.png","imgs/Robo1.png","imgs/Robo1.png",
"imgs/Robo1.png","imgs/Robo1.png","imgs/Robo1.png",
"imgs/Robo1.png","imgs/Robo1.png","imgs/Robo1.png",
"imgs/Robo1.png","imgs/Robo1.png","imgs/Robo1.png",
"imgs/Robo1.png","imgs/Robo1.png","imgs/Robo1.png",
"imgs/Robo1.png","imgs/Robo1.png","imgs/Robo1.png",
"imgs/Robo1.png","imgs/Robo1.png","imgs/Robo1.png",
"imgs/Robo1.png","imgs/Robo1.png","imgs/Robo1.png",
"imgs/Robo1.png","imgs/Robo1.png","imgs/Robo1.png",
"imgs/Robo1.png","imgs/Robo1.png","imgs/Robo1.png",
"imgs/Robo1.png","imgs/Robo1.png","imgs/Robo1.png",
"imgs/Robo1.png","imgs/Robo1.png","imgs/Robo1.png",
"imgs/Robo1.png","imgs/Robo1.png","imgs/Robo1.png",
"imgs/Robo1.png","imgs/Robo1.png","imgs/Robo1.png",
"imgs/Robo1.png","imgs/Robo1.png","imgs/Robo1.png",
"imgs/Robo1.png","imgs/Robo1.png","imgs/Robo1.png",
"imgs/Robo1.png"]

let img = document.getElementById("robo");
let i = 0;
let timer = setInterval(function(){
// If we've reached the end of the array...
if(i >= paths.length){
i=0;
}
img.src = paths[i++]; // Sete the path to the current counter and then increase the counter
}, 50);
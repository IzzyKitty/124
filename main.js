function setup(){
canvas=createCanvas(550,550)
canvas.position(560,150)
video=createCapture(VIDEO)
video.size(550,550)
poseNet=ml5.poseNet(video,modelloaded)
poseNet.on("pose",gotPoses)
}

function modelloaded(){
console.log("model is loaded");
}

function gotPoses(results){
if(results.length>0){
console.log(results);
}
}
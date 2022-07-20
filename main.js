function preload(){

}
function setup(){
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.hide();
}
function draw(){
    image(video, 0, 0, 600, 300);
    fill("orange");
    circle(30, 30, 20);
    fill("grey");
    ellipse(56, 102, 55, 55);
    fill("violet");
    rect(150, 90, 55, 55);
    fill("orange");
    circle(30, 30, 20);
    fill("grey");
    ellipse(126, 46, 55, 55);
    fill("violet");
    rect(150, 90, 55, 55);

}
function take_snapshot(){
save('student_name.png');
}
img = "";
status1 = "";
objects = [];

function setup() {
    canvas = createCanvas(640, 420)
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById
}
function preload() {
    img = loadImage('dag.jpg');
}




function modelLoaded() {
    console.log("Model Loaded!")
    status1 = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw() {
    image(img, 0, 0, 640, 420);

   
    if(status1 != "")
    {
for (i = 0; i < objects.length; i++)
{
    document.getElementById("status").innerHTML = "Status : object detected";

    fill("black");
    percent = floor(objects[i].confidence * 100);
    text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
    noFill();
    stroke("black");
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

}
    }
}


img = "";
status1 = "";

function setup() {
    canvas = createCanvas(640, 420)
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById
}
function preload() {
    img = loadImage('dag.jpg');
}

function draw() {
    image(img, 0, 0, 640, 420);

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
}


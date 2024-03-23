function preload() {
	}
function setup() {
	canvas = createCanvas(300,175);
	canvas.center();
	video = createCapture(VIDEO);
	video.size(300,175);
	video.hide();
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
	}
function modelLoaded() {
	console.log('PoseNet Initialised')
	}
function gotPoses(results) {
	if (results.length > 0) {
		console.log(results);
		console.log("nose x = "+results[0].pose.nose.x);
		console.log("nose y = "+results[0].pose.nose.y);
		}
	}
	
function draw() {
	image(video,0,0,300,175)
	}
function take_snapshot() {
	save('filterImg.png');
	}

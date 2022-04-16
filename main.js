prediction_1="";
prediction_2="";

Webcam.set({
    width:350,
    height:350,
    png_quality:"90",
    image_format:'png'
});

camera=document.getElementById("webcam_view");

Webcam.attach('#webcam_view');

function snapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("image").innerHTML='<img id="captured_image" src="'+data_uri+'">';
    })
}

console.log("ml5 version:",ml5.version)

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/bc6QNczdQ/model.json",modelLoaded);

function modelLoaded(){
    console.log("model is loaded!");
}
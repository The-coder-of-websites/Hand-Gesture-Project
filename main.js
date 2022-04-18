prediction_1="";


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

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/4E6WIL_qE/model.json",modelLoaded);

function modelLoaded(){
    console.log("model is loaded!");
}

function prediction(){
    img=document.getElementById('captured_image');
    classifier.classify(img,gotresults);
}

function gotresults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_emoji_name").innerHTML=results[0].label;
        prediction_1=results[0].label;
        speak();
        if(results[0].label=="Best"){
            document.getElementById("emoji_face").innerHTML="&#128077;";
        }
        if(results[0].label=="Victory"){
            document.getElementById("emoji_face").innerHTML="&#9996;";
        }
        if(results[0].label=="Clap"){
            document.getElementById("emoji_face").innerHTML="&#128079;";
        }
        if(results[0].label=="Amazing"){
            document.getElementById("emoji_face").innerHTML="&#128076;";
        }
        if(results[0].label=="Five-star"){
            document.getElementById("emoji_face").innerHTML="&#128400;";
        }
    }
}

function speak(){
    var synth=window.speechSynthesis;
    speak_data_1="The prediction is"+prediction_1;
    var utterThis=new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);
}
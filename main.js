var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}


recognition.onresult=function(event){
    console.log(event);
    var contant=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = contant;
   

    if(contant == "take my selfie"){
        console.log("take my selfie ---")
        speak()
    }
}


function speak(){
    var synth=window.speechSynthesis;
    var speech_data = "Taking your selfie in 5 seconds"
    var utterthis = new SpeechSynthesisUtterance(speech_data);
    console.log(utterthis);
    synth.speak(utterthis);
    Webcam.attach(camera);

 setTimeout(function(){
        take_shapshot();
        save();
    }, 5000);
}


camera=document.getElementById("camera");
Webcam.set({
    width:640,
    height:320,
    image_formate:"jpeg",
    jpeg_quality:90
});


function take_shapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'">';
    });
}


function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").src;
    link.href=image;
    link.click();
}
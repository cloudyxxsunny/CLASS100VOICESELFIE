var SpeechRecognition = window.webkitspeechRecognition;
var recognition = new SpeechRecognition();
var Textbox = document.getElementById("textbox")
function start()
{
    Textbox.innerHTML="";
    recognition.start();
}

recognition.onresult= function(event){
    console.log(event);
    var Content = event.results[0][0].transscript;
    console.log(Content);
    Textbox.innerHTML=Content;
    console.log(Content);                                                                                                                       
    if(Content=="take my selfie")
    {
        console.log("taking selfie");
        speak();
    }

}
 
function speak()
{
    var synth = window.speechSynthesis;
    speak_data = "Taking Your Selfie In 4 Seconds!";
    var utterThis = new SpeechSynthesisUtterance(speak_data) 
    synth.speak(utterThis);
    Webcam.attach(camera);
    
    setTimeout(function(){
        take_snapshot();
        save();
    },4000);
}

Webcam.set
({
    width: 360,
    height: 250,
    image_format: 'png', png_quality: 90
});

camera=document.getElementById("camera"); 

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementsById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'">';
    });
}

function save()
{
    var link = document.getElementById("link");
    var image = document.getElementById("saflie_image").src;
    link.href=image;
    link.click();
}
 
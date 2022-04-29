Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
})

camera=document.getElementById("camera");
Webcam.attach( '#camera' );

function take_snapshot()
{
    Webcam.snap(function(data_uri) 
    {
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
        });
}

console.log("ml5.version", ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/qoZ5xyZtD/model.json',modelLoaded);

function modelLoaded()
{
    console.log("Model Loaded !")
}

function check()
{
    img=document.getElementById('captured_image');
    classifier.classify(img, gotResults);
}

function speak()
{
    var synth=window.speechSynthesis;
    speak_data_1= "The first prediction is " +prediction_1;
    speak_data_2= "The second prediction is " +prediction_2;
    var utterThis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);
}

function gotResults(error, results)
{
    if(error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML=results[0].label;
        document.getElementById("result_emotion_name2").innerHTML=results[1].label;
        prediction_1=results[0].label;
        prediction_2=results[1].label;
        speak()
        if(results[0].label=="ok")
        {
            document.getElementById("update_emoji").innerHTML="&#128076;"
        }
        if(results[0].label=="victory")
        {
            document.getElementById("update_emoji").innerHTML="&#9996;"
        }
        if(results[0].label=="i love u ")
        {0
            document.getElementById("update_emoji").innerHTML="&#129311;"
        }
        if(results[0].label=="thumps up")
        {
            document.getElementById("update_emoji").innerHTML="&#128077;"
        }
        if(results[0].label=="fisted")
        {
            document.getElementById("update_emoji").innerHTML="&#128074;"
        }
        if(results[0].label=="pointing upwards")
        {
            document.getElementById("update_emoji").innerHTML="&#128070;"
        }
        if(results[1].label=="ok")
        {
            document.getElementById("update_emoji").innerHTML="&#128076;"
        }
        if(results[1].label=="victory")
        {
            document.getElementById("update_emoji").innerHTML="&#9996;"
        }
        if(results[1].label=="i love u ")
        {
            document.getElementById("update_emoji").innerHTML="&#129311;"
        }
        if(results[1].label=="thumps up")
        {
            document.getElementById("update_emoji").innerHTML="&#128077;"
        }
        if(results[1].label=="fisted")
        {
            document.getElementById("update_emoji").innerHTML="&#128074;"
        }
        if(results[1].label=="pointing upwards")
        {
            document.getElementById("update_emoji").innerHTML="&#128070;"
        }
        
    }
}
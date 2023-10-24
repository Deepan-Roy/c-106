function StartRec(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/P2tyAe3gv/model.json',modelReady);
    
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if (error) {
      console.error(error);  
    } else {
        console.log(results);
        r=Math.floor(Math.random()*255)+1;
        g=Math.floor(Math.random()*255)+1;
        b=Math.floor(Math.random()*255)+1;
        document.getElementById("result_label").innerHTML='I can Hear- '+results[0].label;
        document.getElementById("result_confidence").innerHTML='Accuracy- '+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("result_confidence").style.color="rgb("+r+","+g+","+b+")";

        img1=document.getElementById("display");
        
        if (results[0].label=="Background Noise") {
            img1.src='background.jpg';
        }else if(results[0].label=="class2"){
            img1.src='cat.png'; 
        }else{
            img1.src='dog.jpeg'; 
        }
    }

}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = imageClassifier('https://teachablemachine.withgoogle.com/models/w-6zjCPOZ/', modelLoaded);
  }
  
  function modelLoaded() {
    console.log('Model Loaded!');
  }
  
  function draw() {
    image(video, 0, 0, 300, 300)
    classifier.classify(video, gotResult);
  }

  if(error){
    console.error(error)
} else {
console.log(result);
document.getElementById('name_object_name').innerHTML = results[0].label;
document.getElementById('name_object_name').innerHTML = results[0].confidence.toFixed(3); 
}
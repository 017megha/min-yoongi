img= "";
function preload()
{
    img = loadImage("baby.jpg");
}
function setup()
{
    canvas = createCanvas(600, 580);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status = Detecting Objects";
    document.getElementById("number_of_object").innerHTML = "baby not found";
}
function modelLoaded()
{
    console.log('Model Loaded');
    document.getElementById("status").innerHTML = "status = Object Detected" ;
    document.getElementById("number_of_object").innerHTML = "baby founded";
}
function gotResult(error, results)
{
    if(error)
  {
   console.log(error);
  }
    console.log(results);
    objects = results;
    document.getElementById("status").innerHTML = "status = Object Detected" ;
    document.getElementById("number_of_object").innerHTML = "baby founded";
}

    function draw()
    {
        image(img, 0, 0 , 600, 580);
        if (status != "")
        {
         
          objectDetector.detect(video, gotResult);
          for(i=0; i < objects.length ; i++)
          {
              r(255);
              g(255);
              b(255);
            document.getElementById("status").innerHTML = "status = Object Detected" ;
            document.getElementById("number_of_object").innerHTML = "baby founded";
    
            fill("ff0000");
            rgb();
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%" , objects[i].x  , objects[i].y );
            noFill();
            stroke("ff0000");
            rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);
          }
          
        }
    }

var Btn = document.querySelector("#Btn");
Btn.addEventListener("click", function(){


//DISPLAY BOX
document.getElementById("finalbox").style.display = "block";

//GET INPUT FROM THE FORM
var firstname = document.getElementById("firstname").value 
var lastname = document.getElementById("lastname").value 
var image1 = document.getElementById("image1").value 
var image2 = document.getElementById("image2").value 
var image3 = document.getElementById("image3").value 
var image4 = document.getElementById("image4").value 
var image5 = document.getElementById("image5").value 
var image6 = document.getElementById("image6").value 

//CHECK IF INPUT IS EMPTY
// if (firstname === ""){
//     document.getElementById("notice") = "Input Your Firstname"
// }

// MANIPULATE DOM TO SHOW USER`S FULLNAME
document.getElementById("fullname").innerHTML = firstname + " " + lastname;

// MANIPULATE DOM TO SHOW IMAGES

   document.getElementById("slideimage1").src= document.getElementById("image1").value 
    document.getElementById("slideimage2").src= document.getElementById("image2").value 
    document.getElementById("slideimage3").src= document.getElementById("image3").value 
    document.getElementById("slideimage4").src= document.getElementById("image4").value 
     document.getElementById("slideimage5").src= document.getElementById("image5").value 
     document.getElementById("slideimage6").src= document.getElementById("image6").value 





})





var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 6){
    counter = 1;
    
  }
}, 2000);


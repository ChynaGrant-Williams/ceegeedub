// Get the modal
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById("flix");
var img2 = document.getElementById("fum");
var img3 = document.getElementById("hare");

var modalImg1 = document.getElementById("img01");
var modalImg2 = document.getElementById("img02");
var modalImg3 = document.getElementById("img03");

img1.onclick = function(){
  modal1.style.display = "block";
  modalImg1.src = this.src;
}
img2.onclick = function(){
  modal2.style.display = "block";
  modalImg2.src = this.src;
}
img3.onclick = function(){
  modal3.style.display = "block";
  modalImg3.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close1")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
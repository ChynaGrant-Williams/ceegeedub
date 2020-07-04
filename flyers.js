// Get the modal
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");


// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById("f1");
var img2 = document.getElementById("f2");
var img3 = document.getElementById("f3");
var img4 = document.getElementById("f4");

var modalImg1 = document.getElementById("img01");
var modalImg2 = document.getElementById("img02");
var modalImg3 = document.getElementById("img03");
var modalImg4 = document.getElementById("img04");

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
img4.onclick = function(){
  modal4.style.display = "block";
  modalImg4.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];
var span4 = document.getElementsByClassName("close4")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal1.style.display = "none";
}
span2.onclick = function() {
	modal2.style.display = "none";
}
span3.onclick = function() {
	modal3.style.display = "none";
}
span4.onclick = function() {
	modal4.style.display = "none";
}
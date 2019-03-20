window.onload = function() {
 
var box = document.querySelector(".video__box");
var link = document.querySelector(".play");
var video = document.querySelector(".video__video");
var close = box.querySelector(".video__stop");
var overlay = document.querySelector(".video");

link.addEventListener("click", function(event) {
	event.preventDefault();
	video.src="https://www.youtube.com/embed/5KA2AgaWwUQ?autoplay=1";
	video.style.display="inline";
	close.style.display="inline";
	overlay.classList.add("video__open");
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	video.style.display="none";
	close.style.display="none";
	box.classList.remove("video__video");
	overlay.classList.remove("video__open");
	video.src="https://www.youtube.com/embed/5KA2AgaWwUQ";
});
}
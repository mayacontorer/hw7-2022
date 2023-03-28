let video = document.querySelector("#player1");
let play_button = document.querySelector("#play");
let pause_button = document.querySelector("#pause");
let slow_down = document.querySelector("#slower");
let speed_up = document.querySelector("#faster");
let skip_button = document.querySelector("#skip");
let mute_button = document.querySelector("#mute");
let volume_control = document.querySelector("#volume");
let slider = document.querySelector("#slider");
let old_school = document.querySelector("#vintage");
let original = document.querySelector("#orig");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.load();
});

// add an event listener to the video so that it plays on click
play_button.addEventListener("click", function(){
	video.play();
	video.autoplay = false;
	video.loop = false;
	console.log("Video play");
})

// add an event listener to the video so that it pauses on click
pause_button.addEventListener("click", function(){
	video.pause();
	console.log("Video pause");
})

// add an event listener to the video so that it slows down by 10% and logs the new speed to the console
slow_down.addEventListener("click", function(){
	video.playbackRate *= .90;
	console.log(video.playbackRate);
})

// add an event listener to the speed up button so that the playback speed is 10% faster than its current speed
speed_up.addEventListener("click", function(){
	video.playbackRate /= .90;
	console.log(video.playbackRate);
})

// add an event listener to the skip button so that when clicked, it will skip ahead 10 seconds in the video
skip_button.addEventListener("click", function(){
	video.currentTime += 10;
	if (video.currentTime > video.duration); {
		video.currentTime = 0;
	}
	console.log(video.currentTime);
})

// add an event listener to the mute button so that it will mute and unmute when clicked, and change the text on the button so that the user knows which state they are currently in
mute_button.addEventListener("click", function(){
	video.muted
	if (video.muted == true){
		video.muted = false;
		mute_button.innerHTML = "Mute";
		console.log("Audio is Unmuted");
	}
	else if (video.muted == false) {
		video.muted = true;
		mute_button.innerHTML = "Unmute";
		console.log("Audio is muted")
	}
})

// adjust the sliding volume control so that it corresponds to the volume of the video, and display the volume level
slider.addEventListener("change", function(){
	console.log("Slider is working");
	video.volume = (slider.value/100);
	volume_control.innerHTML = (video.volume * 100);
})

// reference the css styling for the oldSchool class and apply it when the old school button is clicked
old_school.addEventListener("click", function(){
	console.log("Old school button works");
	video.classList.add("oldSchool");
})

// revert the styling back to original when the corresponding button is clicked
 
original.addEventListener("click", function(){
	console.log("Original button works");
	video.classList.remove("oldSchool")
})
// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });


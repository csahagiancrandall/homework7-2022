let video = document.querySelector("video");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
	video.loop = false;	
	video.preload = true
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	console.log("Current Time: " + video.currentTime);
	video.volume = document.querySelector("#slider").value / 100;
	document.querySelector("#volume").textContent = video.volume * 100 + "%"
	console.log("Volume is " + video.volume);
	video.play()
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	console.log("Current Time: " + video.currentTime);
	video.pause()
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate = video.playbackRate/0.9;
	console.log("New Playback Rate: " + video.playbackRate);
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate = video.playbackRate - (video.playbackRate*0.1);
	console.log("New Playback Rate: " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	console.log("Pre-Skip: " + video.currentTime);
	console.log("Video Duration: " + video.duration);
	if (video.currentTime > video.duration - 10) {
		video.currentTime = 0;
		console.log("Current Time: " + video.currentTime);
	}
	else {
		video.currentTime = video.currentTime + 10;
		console.log("Current Time: " + video.currentTime);
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute Button Pressed");
	let mute = document.querySelector("#mute");
	if (mute.textContent == "Unmute") {
		video.muted = false;
		mute.textContent = "Mute"
		console.log("Video Unmuted");
	}
	else if (mute.textContent == "Mute") {
		video.muted = true;
		mute.textContent = "Unmute"
		console.log("Video Muted");
	}
});

document.querySelector("#slider").addEventListener("change", function(e) {
	console.log("Volume changed from " + video.volume  + " to: " + e.currentTarget.value / 100);
	video.volume = e.currentTarget.value / 100;
	document.querySelector("#volume").textContent = e.currentTarget.value + "%"
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool")
});
var audio;

chrome.tabs.onRemoved.addListener(function(tabid, removed) {
	if(JSON.parse(localStorage.play_audio)){
		audio = new Audio('oof.mp3');
		//localStorage.playback_rate = 1;
		//audio.playbackRate = localStorage.playback_rate;
		audio.play();
	}
})

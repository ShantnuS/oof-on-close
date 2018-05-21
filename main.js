var audio;

chrome.tabs.onRemoved.addListener(function(tabid, removed) {
	audio = new Audio('oof.mp3');
	audio.play();
})

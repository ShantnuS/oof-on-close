var audio = new Audio('oof.mp3');

chrome.tabs.onRemoved.addListener(function(tabid, removed) {
	audio.play();
})

var  bgp = chrome.extension.getBackgroundPage()

document.addEventListener('DOMContentLoaded', function () {
	var btn = document.getElementById("btnToggle");
	btn.value = "Toggle: " + localStorage.play_audio.toUpperCase();
    btn.addEventListener('click', toggle);
});

function toggle(){
	var tog = JSON.parse(localStorage.play_audio);
	tog = !tog;
	localStorage.play_audio = tog;
	document.getElementById("btnToggle").value = "Toggle: " + localStorage.play_audio.toUpperCase();
}
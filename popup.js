document.addEventListener("DOMContentLoaded", () => {
	const btn = document.getElementById("btnToggle");

	chrome.storage.local.get("play_audio", (data) => {
		const playAudio = data.play_audio || false; // Default to false if undefined
		btn.value = "Toggle: " + playAudio.toString().toUpperCase();
	});

	btn.addEventListener("click", () => {
		chrome.storage.local.get("play_audio", (data) => {
			const currentState = data.play_audio || false;
			const newState = !currentState;

			chrome.storage.local.set({ play_audio: newState }, () => {
				btn.value = "Toggle: " + newState.toString().toUpperCase();
			});

			chrome.runtime.sendMessage({ type: "TOGGLE_AUDIO", state: newState });
		});
	});
});

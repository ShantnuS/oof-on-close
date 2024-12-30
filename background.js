let offscreenCreated = false;

chrome.tabs.onRemoved.addListener(async (tabId, removeInfo) => {
	const { play_audio } = await chrome.storage.local.get("play_audio");
	if (play_audio) {
		await playAudio("oof.mp3");
	}
});

async function playAudio(src) {
	if (!offscreenCreated) {
		await createOffscreenDoc();
		offscreenCreated = true;
	}

	chrome.runtime.sendMessage({ type: 'play-audio', src });
}

function createOffscreenDoc() {
	return new Promise((resolve, reject) => {
		chrome.offscreen.createDocument(
			{
				url: chrome.runtime.getURL('offscreen.html'),
				reasons: [chrome.offscreen.Reason.AUDIO_PLAYBACK],
				justification: 'Need to play audio when a tab closes'
			},
			() => {
				if (chrome.runtime.lastError) {
					return reject(chrome.runtime.lastError);
				}
				resolve();
			}
		);
	});
}

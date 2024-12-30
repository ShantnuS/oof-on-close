chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'play-audio') {
        const audio = new Audio(message.src);
        audio.play().catch((err) => {
            console.error("Audio playback failed:", err);
        });
    }
});

// script.js
document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('video');
    const playPauseButton = document.getElementById('play-pause-button');
    const muteButton = document.getElementById('mute-button');
    const volumeSlider = document.getElementById('volume-slider');
    const volumeLabel = document.querySelector('label[for="volume-slider"]');
    const fullscreenButton = document.getElementById('fullscreen-button');

    const player = new Plyr(video);

    // Play/Pause functionality
    playPauseButton.addEventListener('click', () => {
        if (player.playing) {
            player.pause();
            playPauseButton.textContent = 'Play';
        } else {
            player.play();
            playPauseButton.textContent = 'Pause';
        }
    });

    // Mute/Unmute functionality
    muteButton.addEventListener('click', () => {
        player.muted = !player.muted;
        muteButton.textContent = player.muted ? 'Unmute' : 'Mute';
    });

    // Volume control functionality
    volumeSlider.addEventListener('input', () => {
        player.volume = volumeSlider.value;
        volumeLabel.textContent = `Volume: ${volumeSlider.value}`;
    });

    // Fullscreen toggle functionality
    fullscreenButton.addEventListener('click', () => {
        if (player.fullscreen.active) {
            player.fullscreen.exit();
            fullscreenButton.textContent = 'Fullscreen';
        } else {
            player.fullscreen.enter();
            fullscreenButton.textContent = 'Exit Fullscreen';
        }
    });
});

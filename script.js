window.onload = function () {
    // Get the audio element and controls
    const audio = document.getElementById('audio-player');
    const playPauseBtn = document.getElementById('play-pause');
    const stopBtn = document.getElementById('stop');
    const volumeUpBtn = document.getElementById('volume-up');
    const volumeDownBtn = document.getElementById('volume-down');
    const seekBar = document.getElementById('seek-bar');
    const currentTimeDisplay = document.getElementById('current-time');

    // Play/Pause toggle
    playPauseBtn.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
            playPauseBtn.textContent = 'Pause';
        } else {
            audio.pause();
            playPauseBtn.textContent = 'Play';
        }
    });

    // Stop the audio
    stopBtn.addEventListener('click', function () {
        audio.pause();
        audio.currentTime = 0;
        playPauseBtn.textContent = 'Play';
    });

    // Volume control
    volumeUpBtn.addEventListener('click', function () {
        if (audio.volume < 1) audio.volume += 0.1;
    });

    volumeDownBtn.addEventListener('click', function () {
        if (audio.volume > 0) audio.volume -= 0.1;
    });

    // Update seek bar as audio plays
    audio.addEventListener('timeupdate', function () {
        const value = (audio.currentTime / audio.duration) * 100;
        seekBar.value = value;

        // Update current time display
        const minutes = Math.floor(audio.currentTime / 60);
        const seconds = Math.floor(audio.currentTime % 60);
        currentTimeDisplay.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    });

    // Seek the audio
    seekBar.addEventListener('input', function () {
        const time = (seekBar.value / 100) * audio.duration;
        audio.currentTime = time;
    });
};

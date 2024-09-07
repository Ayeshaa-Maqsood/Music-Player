let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let fastForward = document.getElementById("fastForward");
let fastBackward = document.getElementById("fastBackward");
let currentTimeEl = document.getElementById("currentTime");
let totalTimeEl = document.getElementById("totalTime");
let volumeBar = document.getElementById("volumeBar");


song.pause();
ctrlIcon.classList.add("fa-play");


song.onloadedmetadata = function () {
    progress.max = song.duration;
    let minutes = Math.floor(song.duration / 60);
    let seconds = Math.floor(song.duration % 60);
    totalTimeEl.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};


function playPause() {
    if (song.paused) {
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    } else {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
}


song.ontimeupdate = function () {
    progress.value = song.currentTime;
    let minutes = Math.floor(song.currentTime / 60);
    let seconds = Math.floor(song.currentTime % 60);
    currentTimeEl.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

fastForward.addEventListener("click", () => {
    song.currentTime += 5;
});


fastBackward.addEventListener("click", () => {
    song.currentTime -= 5;
});


progress.onchange = function () {
    song.currentTime = progress.value;
};

song.volume = 1;

volumeBar.addEventListener("input", function () {
    song.volume = volumeBar.value;
});



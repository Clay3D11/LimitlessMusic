const songsList = [
    {
        name: "",
        artist: "",
        src: "music/withthat1.mp3",
        cover: "img/Thug.png"
    },
    {
        name: "",
        artist: "",
        src: "music/Badandboogie.mp3",
        cover: "img/migos3.png"
    },
    {
        name: "",
        artist: "",
        src: "music/Check.mp3",
        cover: "img/Thug.png"
    },
    {
        name: "",
        artist: "",
        src: "music/Choppahate.mp3",
        cover: "img/GhostKiller.png"
    },
    {
        name: "",
        artist: "",
        src: "music/dior.mp3",
        cover: "img/dior.png"
    },
    {
        name: "",
        artist: "",
        src: "music/dome.mp3",
        cover: "img/Thug.png"
    },
    {
        name: "",
        artist: "",
        src: "music/Neverhadit.mp3",
        cover: "img/Thug.png"
    },
    {
        name: "",
        artist: "",
        src: "music/Ghostfacekillers.mp3",
        cover: "img/GhostKiller.png"
    },
    {
        name: "",
        artist: "",
        src: "music/Gunna-Relentless.mp3",
        cover: "img/Gunna2.png"
    },
    {
        name: "",
        artist: "",
        src: "music/Gunna-fumean.mp3",
        cover: "img/Gunna2.png"
    },
    {
        name: "",
        artist: "",
        src: "music/sum2prove.mp3",
        cover: "img/lilbaby2.png"
    },
    {
        name: "",
        artist: "",
        src: "music/Toohotty.mp3",
        cover: "img/migos1.png"
    },
    {
        name: "",
        artist: "",
        src: "music/Timmy.mp3",
        cover: "img/future.png"
    },
    {
        name: "",
        artist: "",
        src: "music/Badandboogie.mp3",
        cover: "img/migos2.png"
    },
    {
        name: "",
        artist: "",
        src: "music/Guwop.mp3",
        cover: "img/Thug.png"
    },
    {
        name: "",
        artist: "",
        src: "music/Hotniig.mp3",
        cover: "img/bobby1.png"
    },
    {
        name: "",
        artist: "",
        src: "music/Takeoff.mp3",
        cover: "img/migos3rd.png"
    },
    {
        name: "",
        artist: "",
        src: "music/Royalflush.mp3",
        cover: "img/Royal.png"
    },
    {
        name: "",
        artist: "",
        src: "music/Panda.mp3",
        cover: "img/panda.png"
    },
    {
        name: "",
        artist: "",
        src: "music/Gunna-oneofwun.mp3",
        cover: "img/Gunna2.png"
    },
    
];

const artistName = document.querySelector('.artist-name');
const musicName = document.querySelector('.song-name');
const fillBar = document.querySelector('.fill-bar');
const time = document.querySelector('.time');
const cover = document.getElementById('cover');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const prog = document.querySelector('.progress-bar');

let song = new Audio();
let currentSong = 0;
let playing = false;

document.addEventListener('DOMContentLoaded', () => {
    loadSong(currentSong);
    song.addEventListener('timeupdate', updateProgress);
    song.addEventListener('ended', nextSong);
    prevBtn.addEventListener('click', prevSong);
    nextBtn.addEventListener('click', nextSong);
    playBtn.addEventListener('click', togglePlayPause);
    prog.addEventListener('click', seek);
});

function loadSong(index) {
    const { name, artist, src, cover: thumb } = songsList[index];
    artistName.innerText = artist;
    musicName.innerText = name;
    song.src = src;
    cover.style.backgroundImage = `url(${thumb})`;
}

function updateProgress() {
    if (song.duration) {
        const pos = (song.currentTime / song.duration) * 100;
        fillBar.style.width = `${pos}%`;

        const duration = formatTime(song.duration);
        const currentTime = formatTime(song.currentTime);
        time.innerText = `${currentTime} - ${duration}`;

    }
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

function togglePlayPause() {
    if (playing) {
        song.pause();
    } else {
        song.play();
    }
    playing = !playing;
    playBtn.classList.toggle('fa-pause', playing);
    playBtn.classList.toggle('fa-play', !playing);
    cover.classList.toggle('active', playing);
}

function nextSong() {
    currentSong = (currentSong + 1) % songsList.length;
    playMusic();
}

function prevSong() {
    currentSong = (currentSong - 1 + songsList.length) % songsList.length;
    playMusic();
}

function playMusic() {
    loadSong(currentSong);
    song.play();
    playing = true;
    playBtn.classList.add('fa-pause');
    playBtn.classList.remove('fa-play');
    cover.classList.add('active');
}

function seek(e) {
    const pos = (e.offsetX / prog.clientWidth) * song.duration;
    song.currentTime = pos;
}






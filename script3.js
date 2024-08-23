const songsList = [
    {
        name: "",
        artist: "",
        src: "music/Royal.mp3",
        cover: "img/Royal.png"
    },
    {
        name: "",
        artist: "",
        src: "music/ChoppaHate.mp3",
        cover: "img/ChoppaHate.png"
    },
    {
        name: "",
        artist: "",
        src: "music/Gunna-oneofwun.mp3",
        cover: "img/Gunna2.png"
    },
    {
        name: "",
        artist: "",
        src: "music/thug-Guwop.mp3",
        cover: "img/Thug.png"
    },
    {
        name: "",
        artist: "",
        src: "music/GhostRidersKillers.mp3",
        cover: "img/GhostKiller.png"
    },
    {
        name: "",
        artist: "",
        src: "music/thug-Dome.mp3",
        cover: "img/thug.png"
    },
    {
        name: "",
        artist: "",
        src: "music/thug-NeverHadit.mp3",
        cover: "img/thug.png"
    },
    {
        name: "",
        artist: "",
        src: "music/thug.mp3",
        cover: "img/thug.png"
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
        src: "music/Gunna-Fumean.mp3",
        cover: "img/Gunna2.png"
    },
    {
        name: "",
        artist: "",
        src: "music/lilbaby-sum2prove.mp3",
        cover: "img/lilbaby2.png"
    },
    {
        name: "",
        artist: "",
        src: "music/TooHotty.mp3",
        cover: "img/migos1.png"
    },
    {
        name: "",
        artist: "",
        src: "music/future-timmyturner.mp3",
        cover: "img/future2.png"
    },
    {
        name: "",
        artist: "",
        src: "music/migos-badandboogie.mp3",
        cover: "img/migos2.png"
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
        src: "music/bobbyshurr-hotniigg.mp3",
        cover: "img/bobby1.png"
    },
    {
        name: "",
        artist: "",
        src: "music/thug-withthat.mp3",
        cover: "img/thug11.png"
    },
    {
        name: "",
        artist: "",
        src: "music/migos-ineedit.mp3",
        cover: "img/migos2.png"
    },
    {
        name: "",
        artist: "",
        src: "music/panda.mp3",
        cover: "img/panda.png"
    },
    {
        name: "",
        artist: "",
        src: "music/migos-3rd.mp3",
        cover: "img/migos3rd.png"
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






let playing=document.querySelector(".playing");
let track_art=document.querySelector(".track-art");
let track_name=document.querySelector(".track-name");
let track_artist=document.querySelector(".track-artist");
let [random, prev, play, next, repeat]=document.querySelectorAll(".buttons div");
let seek_slider=document.querySelector(".seek-slider");
let volume_slider=document.querySelector(".volume-slider");
let current_time=document.querySelector(".current-time");
let duration=document.querySelector(".duration");
let wave=document.querySelector(".wave");
// let playing=document.querySelector(".playing");
// let playing=document.querySelector(".playing");
// let playing=document.querySelector(".playing");

let curr_track=document.createElement("audio");

let track_idx=0;
let isPlaying=false;
let isRandom=false;
let updateTimer;

const music_list = [
    {
        img : 'images/stay.png',
        name : 'Stay',
        artist : 'The Kid LAROI, Justin Bieber',
        music : 'music/stay.mp3'
    },
    {
        img : 'images/fallingdown.jpg',
        name : 'Falling Down',
        artist : 'Wid Cards',
        music : 'music/fallingdown.mp3'
    },
    {
        img : 'images/faded.png',
        name : 'Faded',
        artist : 'Alan Walker',
        music : 'music/Faded.mp3'
    },
    {
        img : 'images/ratherbe.jpg',
        name : 'Rather Be',
        artist : 'Clean Bandit',
        music : 'music/Rather Be.mp3'
    }
];


loadTrack(track_idx);

function loadTrack(idx){
    clearInterval(updateTimer);
    reset();

    curr_track.src=music_list[idx].music;
    curr_track.load();


    track_art.getElementsByClassName.backgroundImage=`url(${music_list[idx].img})`;
    track_name.textContent=music_list[idx].name;
    track_artist.textContent=music_list[idx].artist;
    playing.textContent=`PlAYING ${idx+1} OF ${music_list.length}`;

    updateTimer=setInterval(setUpdate, 1000);
    curr_track.addEventListener("ended",nextTrack);
    randomBgColor();
}
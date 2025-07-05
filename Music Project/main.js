const  musicPlayer = document.querySelector(".music-player");
const  currentTimeDisplay = document.querySelector(".current-time");
const  totalTimeDisplay = document.querySelector(".total-time");
const  volume = document.querySelector(".volume");
const  imgPicture = document.querySelector(".img-picture");
const  imgWrapper = document.querySelector(".img-wrapper");
const  namePreview = document.querySelector(".name-preview");
const  Backward = document.querySelector(".fa-backward");
const  play = document.querySelector(".fa-play");
const  forward = document.querySelector(".fa-forward");
const  audio = document.querySelector(".audio");
let currentIndex = 0;
let isPlaying = false;

const database = [
    {singerName :" Shakira" ,
        songPicture : "assets/pictures/489408c7918b1ec5d962dc773eb8459f.jpg",
        songSource : "assets/music/Shakira - Waka Waka.mp3",
    },
    {singerName :" Nariman" ,
        songPicture : "assets/pictures/african-american-handsome-young.jpg",
        songSource : "assets/music/Nariman - Nazanin (UpMusic).mp3",
    },
    {singerName :" Alan Wake" ,
        songPicture : "assets/pictures/Leading-B-Wood-Singers-Who-Lost.jpg",
        songSource : "assets/music/05 Fall Down.mp3",
    },
    {singerName :" Amira Hadef" ,
        songPicture : "assets/pictures/doja-cat-600x338.jpg",
        songSource : "assets/music/08 Lifted Up.mp3",
    },
    {singerName :" Ahmed Remix" ,
        songPicture : "assets/pictures/young-man-singing.jpg",
        songSource : "assets/music/AgADgAUAAvOI2FM.mp3",
    },
]
// load Music Files trough Function
function LoadMusic(){
    const current = database[currentIndex];
setTimeout(() => imgPicture.src = current.songPicture , 700)
audio.src = current.songSource;
namePreview.textContent = current.singerName;
if(isPlaying){
    audio.play()
}
}
LoadMusic()
// Handeling Play and Pause for music

play.addEventListener("click" , () => {
if(isPlaying){
audio.pause();
play.classList.replace("fa-pause" , "fa-play");
imgWrapper.classList.remove("move")
}
else{
    audio.play();
play.classList.replace("fa-play" , "fa-pause");
imgWrapper.classList.add("move")
}
isPlaying = !isPlaying
})

// handeling backward and forward

forward.addEventListener("click" , () => {
currentIndex++;
if(currentIndex > database.length - 1){
    currentIndex = 0;
}
setTimeout(() => {
    imgWrapper.classList.add("imgTransfer");
    setTimeout(() => imgWrapper.classList.remove("imgTransfer") , 510)
}, 500)
isPlaying = true;
LoadMusic();
})
Backward.addEventListener("click" , () => {
currentIndex--;
if(currentIndex < 0){
    currentIndex = database.length - 1;
}

setTimeout(() => {
    imgWrapper.classList.add("imgTransferBack");
    setTimeout(() => imgWrapper.classList.remove("imgTransferBack") , 510)
}, 500)
isPlaying = true;
LoadMusic();
})

audio.addEventListener("timeupdate" , () => {
    const currentTime = audio.currentTime;
    const totalTime = audio.duration;
    currentTimeDisplay.textContent = formatTime(currentTime);
    totalTimeDisplay.textContent = formatTime(totalTime) == "NaN:NaN" ? "0:00" : formatTime(totalTime);

    const percentage = Math.floor((currentTime / totalTime ) * 100)
    if(percentage){
        musicPlayer.value = percentage 
    }
})

const formatTime = (time) => {
let minutes =Math.floor( time / 60 );
let seconds = Math.floor(time % 60 );
return (`${minutes}:${seconds < 10 ? "0" : "" }${seconds}`);
;
}

volume.addEventListener("input" , () => {
    audio.volume =( volume.value) / 100;
})
musicPlayer.addEventListener("input" , () => {
    let newTime = audio.duration * (musicPlayer.value / 100);
    audio.currentTime = newTime;
})
window.addEventListener("keydown" , (e) => {
    if(e.key == "m" || e.key == "M"){
        volume.value = 0;
        audio.volume =( volume.value) / 100;
    }
})
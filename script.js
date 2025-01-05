
// script.js
const songs = [
    {
      title: "Adhyay 9",
      artist: "Artist 1",
      src: "assets\\9.mp3",
      albumArt: "https://via.placeholder.com/300/0000FF/FFFFFF?text=Song+1",
    },
    {
      title: "Adhayay 12",
      artist: "Artist 2",
      src: "assets\\12.mp3",
      albumArt: "https://via.placeholder.com/300/FF0000/FFFFFF?text=Song+2",
    },
    {
      title: "Adhyay 9",
      artist: "Artist 3",
      src: "assets\\15.mp3",
      albumArt: "https://via.placeholder.com/300/00FF00/FFFFFF?text=Song+3",
    },
  ];
  
  let currentSongIndex = 0;
  const audioPlayer = document.getElementById("audioPlayer");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const progressBar = document.getElementById("progressBar");
  const volumeControl = document.getElementById("volumeControl");
  const albumArt = document.getElementById("albumArt");
  const songTitle = document.getElementById("songTitle");
  const songArtist = document.getElementById("songArtist");
  const playlist = document.getElementById("playlist");
  
  function loadSong(index) {
    const song = songs[index];
    audioPlayer.src = song.src;
    songTitle.textContent = song.title;
    songArtist.textContent = song.artist;
    albumArt.src = song.albumArt;
  }
  
  function togglePlayPause() {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playPauseBtn.textContent = "Pause";
    } else {
      audioPlayer.pause();
      playPauseBtn.textContent = "Play";
    }
  }
  
  function updateProgress() {
    progressBar.max = audioPlayer.duration;
    progressBar.value = audioPlayer.currentTime;
  }
  
  function seekSong() {
    audioPlayer.currentTime = progressBar.value;
  }
  
  function changeVolume() {
    audioPlayer.volume = volumeControl.value;
  }
  
  function playNext() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audioPlayer.play();
  }
  
  function playPrev() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audioPlayer.play();
  }
  
  function selectSong(e) {
    if (e.target.tagName === "LI") {
      currentSongIndex = parseInt(e.target.dataset.index, 10);
      loadSong(currentSongIndex);
      audioPlayer.play();
    }
  }
  
  audioPlayer.addEventListener("timeupdate", updateProgress);
  progressBar.addEventListener("input", seekSong);
  volumeControl.addEventListener("input", changeVolume);
  playPauseBtn.addEventListener("click", togglePlayPause);
  document.getElementById("nextBtn").addEventListener("click", playNext);
  document.getElementById("prevBtn").addEventListener("click", playPrev);
  playlist.addEventListener("click", selectSong);
  
  loadSong(currentSongIndex);
  
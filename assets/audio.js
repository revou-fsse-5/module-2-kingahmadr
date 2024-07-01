const player = document.getElementById("player");
const volumeSlider = document.getElementById("volume-slider");
const volumeDisplay = document.getElementById("volume-display"); // Optional
const playPauseButton = document.getElementById("play");
const mediaQuery = window.matchMedia('(max-width: 700px)');

// This code will play or pause the audio when the button is clicked
playPauseButton.addEventListener("click", ()=>{
    if (player.paused) { // check if the player is paused
      player.play(); // Play the audio
      playPauseButton.textContent = "Pause"; // Update button text to "Pause"
    } else {
      player.pause(); // Pause the audio
      playPauseButton.textContent = "Play"; // Update button text to "Play"
    }
  });
volumeSlider.addEventListener("input", () => {
player.volume = volumeSlider.value;
updateVolumeDisplay(); // Optional
});
function updateVolumeDisplay() {
volumeDisplay.textContent = `Volume: ${Math.floor(player.volume * 100)}%`;
}

function handleMediaChange(mediaQuery) {
  if (mediaQuery.matches) {
    // The viewport is 600px wide or less
    // Pause the audio for small screens
    if (!player.paused) {
      player.pause();
      playPauseButton.textContent = "Play"; // Update button text to "Play"
    }
    // console.log('Media query matched: small screen');
  } //else {
    // The viewport is wider than 600px
    // console.log('Media query matched: large screen');
  }
// }

handleMediaChange(mediaQuery);
mediaQuery.addEventListener('change', handleMediaChange);
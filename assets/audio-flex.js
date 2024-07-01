/// Flex Media Query
const playerFlex = document.getElementById("player-flex");
const volumeSliderFlex = document.getElementById("volume-slider-flex");
const volumeDisplayFlex = document.getElementById("volume-display-flex"); // Optional
const playPauseButtonFlex = document.getElementById("play-flex");
const mediaQueryFlex = window.matchMedia('(min-width: 700px)');

// This code will play or pause the audio when the button is clicked
playPauseButtonFlex.addEventListener("click", ()=>{
  if (playerFlex.paused) { // check if the player is paused
    playerFlex.play(); // Play the audio
    playPauseButtonFlex.textContent = "Pause"; // Update button text to "Pause"
  } else {
    playerFlex.pause(); // Pause the audio
    playPauseButtonFlex.textContent = "Play"; // Update button text to "Play"
  }
});
volumeSliderFlex.addEventListener("input", () => {
playerFlex.volume = volumeSliderFlex.value;
updateVolumeDisplayFlex(); // Optional
});
function updateVolumeDisplayFlex() {
volumeDisplayFlex.textContent = `Volume: ${Math.floor(playerFlex.volume * 100)}%`;
}
function handleMediaChangeFlex(mediaQueryFlex) {
  if (mediaQueryFlex.matches) {
    if (!playerFlex.paused) {
      playerFlex.pause();
      playPauseButtonFlex.textContent = "Play"; // Update button text to "Play"
    }
    // console.log('Media query matched: small screen');
  } //else {
    // console.log('Media query matched: large screen');
  }
// }

handleMediaChangeFlex(mediaQueryFlex);
mediaQueryFlex.addEventListener('change', handleMediaChangeFlex);
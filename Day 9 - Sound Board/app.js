// Define an array of sound names
const sounds = ["applause", "boo", "gasp", "tado", "victory", "wrong"];

// Create a button for each sound and attach a click event listener to it
sounds.forEach((sound) => {
  // Create a new button element and add a CSS class
  const btn = document.createElement("button");
  btn.classList.add("btn");

  // Set the button's label to the current sound name
  btn.innerHTML = sound;

  // Attach a click event listener to the button
  btn.addEventListener("click", () => {
    // Stop any currently playing sounds
    stopSongs();

    // Find the audio element for the current sound name and play it
    document.querySelector(sound).play();
  });

  // Append the button to the ".buttons" container
  document.querySelector(".buttons").appendChild(btn);
});

// Stop all currently playing sounds
function stopSongs() {
  // Iterate over each sound name in the array
  sounds.forEach((sound) => {
    // Find the audio element for the current sound name
    const song = document.querySelector(`#${sound}`);

    // Pause the sound and reset its current time to 0
    song.pause();
    song.currentTime = 0;
  });
}

var audio = document.getElementById("myAudio");
var discordButton = document.getElementById("discordButton");
var discordButtonContent = discordButton.innerHTML;

function playAudio() {
  audio.play();
}

function pauseAudio() {
  audio.pause();
}
function copyDiscordTag() {
  navigator.clipboard.writeText("False.#4224");
  discordButton.innerHTML = "Copied!";
  delay(1200).then(() => (discordButton.innerHTML = discordButtonContent));
}

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

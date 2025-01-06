var audio = document.getElementById("myAudio");
var muteButton = document.getElementById("muteButton");

function toggleMuteUnmute() {
  if (audio.paused) {
    audio.play();
    muteButton.innerHTML = "Mute";
  } else {
    audio.pause();
    muteButton.innerHTML = "Unmute";
  }
}

function copyDiscordTag() {
  navigator.clipboard.writeText("0rr.");
  discordButton.innerHTML = "Copied!";
  delay(1200).then(() => (discordButton.innerHTML = discordButtonContent));
}

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

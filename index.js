
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  // Unmute the audio when the user clicks anywhere on the document
document.addEventListener('click', function unmuteAudio() {
    var audio = document.getElementById('bg-audio');
    if (audio.muted) {
      audio.muted = false;
      audio.play();
    }
    // Optionally, remove the event listener after unmuting
    document.removeEventListener('click', unmuteAudio);
  });
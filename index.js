
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };


  // Unmute the audio when the user interacts with the page (click/touch)
document.addEventListener('click', function unmuteAudio() {
  var audio = document.getElementById('bg-audio');
  if (audio.muted) {
    audio.muted = false;
    audio.play().catch(function(error) {
      // Handle any error (such as user blocking autoplay)
      console.error('Audio playback failed:', error);
    });
  }
  // Optionally remove the event listener after first interaction
  document.removeEventListener('click', unmuteAudio);
});
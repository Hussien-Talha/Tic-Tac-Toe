var musicPlaying = false;

    function toggleMusic() {
      var audio = document.getElementById('gameMusic');
  
      if (musicPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
  
      musicPlaying = !musicPlaying;
    }

    function startGame() {
      var audio = document.getElementById('gameMusic');
      audio.play();

      // Store the current time of the audio
      localStorage.setItem('audioTime', audio.currentTime);

      // Navigate to Game.html after a short delay
      setTimeout(() => {
        window.location.href = 'Game.html';
      }, 500);
    }

    // Add this script to show the popup on page load
    document.addEventListener('DOMContentLoaded', function() {
      showPopup();
    });

    function showPopup() {
      // Show the popup and overlay
      document.getElementById('popup').style.display = 'block';
      document.getElementById('overlay').style.display = 'block';
    }

    function chooseVersion(version) {
      if (version === 'bright') {
        // If "bright" is chosen, close the popup and overlay
        document.getElementById('popup').style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
      } else if (version === 'dull') {
        // If "dull" is chosen, redirect to index2.html
        window.location.href = 'index2.html';
      }
    }

    function toggleSettings() {
  const settingsPopup = document.getElementById('settingsPopup');
  settingsPopup.style.display = settingsPopup.style.display === 'none' ? 'block' : 'none';
}

function changeStyle() {
  const styleLink = document.getElementById('gameStyle');
  styleLink.href = styleLink.href === 'index.css' ? 'index2.css' : 'index.css';
}
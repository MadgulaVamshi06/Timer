let timer;
    const initialHours = 0;
    const initialMinutes = 0;
    const initialSeconds = 0;

    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let display = document.getElementById('display');

    function start() {
      if (timer) {
        clearInterval(timer);
      }
      let h = parseInt(hours.value) || initialHours;
      let m = parseInt(minutes.value) || initialMinutes;
      let s = parseInt(seconds.value) || initialSeconds;

      let totalseconds = h * 3600 + m * 60 + s;

      timer = setInterval(function () {
        totalseconds--;
        if (totalseconds >= 0) {
          updateTimer(totalseconds);
        } else {
          clearInterval(timer);
          alert("Timer has stopped!");
          reset();
        }
      }, 1000);
    }

    function pause() {
      clearInterval(timer);
    }

    function reset() {
      clearInterval(timer);
      hours.value = initialHours;
      minutes.value = initialMinutes;
      seconds.value = initialSeconds;
      updateTimer(0);
    }

    function updateTimer(totalseconds) {
      let h = Math.floor(totalseconds / 3600);
      let m = Math.floor((totalseconds % 3600) / 60);
      let s = totalseconds % 60;

      display.innerText = `${formatTime(h)}:${formatTime(m)}:${formatTime(s)}`;
    }

    function formatTime(value) {
      return value.toString().padStart(2, '0');
    }
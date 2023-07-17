function displayTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var timeString = hours + ":" + minutes + ":" + seconds;
    document.write("Current time: " + timeString + "<br>");
  }
  
  setInterval(displayTime, 1000);
  
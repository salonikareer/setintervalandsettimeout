let count = 10;

const countdown = setInterval(() => {
  console.log(count);
  count--;

  if (count < 0) {
    clearInterval(countdown);
    console.log("Countdown complete!");
  }
}, 1000);

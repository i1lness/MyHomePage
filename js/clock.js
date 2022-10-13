const clock = document.querySelector("#clock");

function getTime() {
  const date = new Date();

  let _seconds = date.getSeconds();
  _seconds = String(_seconds).padStart(2, "0");

  const _minute = date.getMinutes();
  const _hour = date.getHours();
  clock.innerText = `${_hour}:${_minute}:${_seconds}`;
}

getTime();
setInterval(getTime, 1000);

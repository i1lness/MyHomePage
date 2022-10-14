const clock = document.querySelector("#clock");

function getTime() {
  const date = new Date();

  let _seconds = date.getSeconds();
  _seconds = String(_seconds).padStart(2, "0");

  let _minute = date.getMinutes();
  _minute = String(_minute).padStart(2, "0");

  let _hour = date.getHours();
  _hour = String(_hour).padStart(2, "0");
  clock.innerText = `${_hour}:${_minute}:${_seconds}`;
}

getTime();
setInterval(getTime, 1000);

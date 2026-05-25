const fulldate = document.getElementById("date");
const clock = document.getElementById("clock");
let toggle = false;
function updateClock() {
  const currentDate = new Date();
  clock.textContent = currentDate.toLocaleTimeString("default", {
    hour12: !toggle,
  });
  const year = currentDate.getFullYear().toString();
  const month = currentDate.toLocaleDateString("default", { month: "short" });
  const date = currentDate.getDate().toString().padStart(2, 0);
  const day = currentDate.toLocaleDateString("default", { weekday: "short" });
  fulldate.textContent = day + " " + date + " " + month + " " + year;
}
setInterval(updateClock, 1000);
function toggleClock() {
  toggle = !toggle;
  updateClock();
}

const app2 = document.querySelector("#app2");
const input = document.querySelector("#timer-input");

// Time converter
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// Render timer
const showTimer = (day, hour, minute, second) => {
  const html = `
        <div>
            <div class="flex timer">
                <h1 class="day">${day ? day : "00"}<span>Days</span></h1>
                <h1 class="hour">${hour ? hour : "00"}<span>Hours</span></h1>
                <h1 class="minute">${
                  minute ? minute : "00"
                }<span>Minutes</span></h1>
                <h1 class="second">${
                  second ? second : "00"
                }<span>Second</span></h1>
            </div>
        </div>
    `;
  app2.innerHTML = html;
};

let interval;

// Add event
input.onchange = (e) => {
  // Get end-time
  //
  // Re-render every single second
  //
  interval = setInterval(() => {
    // Set current-time
    //
    // Distance end-time and current-time
    //
    // Validate distance
    //
  }, 1000);
};

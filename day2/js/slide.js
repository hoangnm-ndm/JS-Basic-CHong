const app1 = document.querySelector("#app1");
let index = 1;

// Next function
const next = function () {
  // Coding here
};
// Prev function
const prev = function () {
  // Coding here
};
// Auto function
const auto = function () {
  // Coding here
};

// Render image
const showImage = function () {
  console.log(index);
  const html = `
    <div>
      <img class="slides fade" src="../images/image1.jpg"/>
      <img class="slides fade" src="../images/image2.jpg"/>
      <img class="slides fade" src="../images/image3.jpg"/>
      <div>
        <button id="next">Next</button>
        <button id="prev">Prev</button>
        <button id="auto">Auto</button>
      </div>
    </div>
  `;
  app1.innerHTML = html;
  // DOM declaration

  // Validate index

  // Display image

  // Add event
};

showImage();

//let tickBtn = document.getElementById("tick");

// Trial code see how it looks
/*
let addTag = document.getElementById("tag");
let pillBtn = document.querySelector(".pill");

pillBtn.addEventListener("click", () => {
  let tick = `Wireframing <img src="Peerlist Icons.png" alt="Icon">`;
  addTag.innerHTML = tick;
});

pillBtn.addEventListener("dblclick", () => {
  console.log("dblclick");
  let tick = `Wireframing`;
  addTag.innerHTML = tick;
});

// -----------------------------------------------------------------------------
let pillBtns = document.querySelectorAll(".pill");

pillBtns.forEach((pillBtn) => {
  // Add click event listener
  pillBtn.addEventListener("click", () => {
    let imgHTML =
      ' <img src="Peerlist Icons.png" alt="Icon" style="padding-left: 8px ;">';
    pillBtn.querySelector("li").innerHTML = `${
      pillBtn.querySelector("li").textContent
    } ${imgHTML}`;
  });

  // Add double-click event listener
  pillBtn.addEventListener("dblclick", () => {
    console.log("dblclick");
    let text = pillBtn
      .querySelector("li")
      .textContent.replace(/<img[^>]*>/g, "")
      .trim(); // Remove any existing image
    pillBtn.querySelector("li").innerHTML = text;
  });
});

*/
// -----------------------------------------------------------------------------

let pillBtns = document.querySelectorAll(".pill");

pillBtns.forEach((pillBtn) => {
  // Add click event listener
  pillBtn.addEventListener("click", () => {
    // Toggle clicked class
    pillBtn.classList.toggle("clicked");

    if (!pillBtn.querySelector("img")) {
      let imgHTML =
        '<img src="Peerlist Icons.png" alt="Icon" style="padding-left: 8px;">';
      pillBtn.querySelector("li").innerHTML = `${
        pillBtn.querySelector("li").textContent
      } ${imgHTML}`;
    }
  });

  // Add double-click event listener
  pillBtn.addEventListener("dblclick", () => {
    console.log("dblclick");
    let liElement = pillBtn.querySelector("li");

    // Remove image
    let text = liElement.textContent.replace(/<img[^>]*>/g, "").trim();
    liElement.innerHTML = text;

    // Remove clicked class
    pillBtn.classList.remove("clicked");
  });
});

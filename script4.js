// ===== Image task =====
let imgContainer = document.getElementById("imgContainer");
let createdImg = null; // to keep a reference to the created <img>

function addImage() {
  if (!createdImg) {
    createdImg = document.createElement("img");
    createdImg.setAttribute("src", "myPic.jpeg"); // image in same folder
    createdImg.setAttribute("alt", "WhatsApp image");
    imgContainer.appendChild(createdImg);
    alert("childNodes length = " + imgContainer.childNodes.length);
  }
}

function removeImage() {
  if (createdImg && imgContainer.contains(createdImg)) {
    imgContainer.removeChild(createdImg);
    createdImg = null; 
  }
}
//question 2
// ===== Image Slider Task =====

// 1) Arrays for image file names and descriptions
let imgFiles = ["C:/Users/20100/Pictures/images.jpg", "C:/Users/20100/Downloads/pic2.jpg", "C:/Users/20100/Downloads/pic3.jpg"];  // change names to your real images
let imgTexts = [
  "This is image number 1",
  "This is image number 2",
  "This is image number 3"
];

// 2) Get DOM elements
let imgElement = document.getElementById("galleryImg");
let descElement = document.getElementById("imgDesc");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");

// 3) Track which image is currently shown
let currentIndex = 0;

// 4) Function to update image + description on the page
function showCurrentImage() {
  imgElement.setAttribute("src", imgFiles[currentIndex]);
  descElement.textContent = imgTexts[currentIndex];
}

// show the first image when page loads
showCurrentImage();

// 5) Next button: go to next image (with wrap-around)
nextBtn.onclick = function () {
  currentIndex++;
  if (currentIndex === imgFiles.length) {
    currentIndex = 0; // go back to first image
  }
  showCurrentImage();
};

// 6) Prev button: go to previous image (with wrap-around)
prevBtn.onclick = function () {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = imgFiles.length - 1; // go to last image
  }
  showCurrentImage();
};
//question3
// ===== To Do List from JS =====

let taskInput = document.getElementById("taskInput");
let addTaskBtn = document.getElementById("addTaskBtn");
let tasksContainer = document.getElementById("tasksContainer");

// add task when clicking the Add button
addTaskBtn.onclick = function () {
  addTask();
};

// also add task when pressing Enter in the input
taskInput.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

function addTask() {
  let text = taskInput.value.trim();
  if (text === "") {
    alert("Please enter a task");
    return;
  }

  // create row div
  let row = document.createElement("div");
  row.className = "taskRow";

  // create span for text
  let span = document.createElement("span");
  span.className = "taskText";
  span.textContent = text;

  // create Done button
  let doneBtn = document.createElement("button");
  doneBtn.className = "taskBtn";
  doneBtn.textContent = "Done";

  doneBtn.onclick = function () {
    row.classList.toggle("done");
  };

  // create Delete button
  let deleteBtn = document.createElement("button");
  deleteBtn.className = "taskBtn";
  deleteBtn.textContent = "Delete";

  deleteBtn.onclick = function () {
    tasksContainer.removeChild(row);
  };

  // assemble row
  row.appendChild(span);
  row.appendChild(doneBtn);
  row.appendChild(deleteBtn);

  // add row to container
  tasksContainer.appendChild(row);

  // clear input
  taskInput.value = "";
  taskInput.focus();
}



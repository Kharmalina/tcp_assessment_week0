function changeColorsAndBorderStyle(boxId) {
    // Get a reference to the three boxes via boxId parameter
    let box = document.getElementById(boxId);

    // Generate random colors for the border and background
    let borderColor = getRandomColor();
    let backgroundColor = getRandomColor();

    // Generate a random border style
    let borderStyles = ["solid", "dotted", "dashed", "double", "groove", "ridge", "inset", "outset"];
    let randomBorderStyle = borderStyles[Math.floor(Math.random() * borderStyles.length)];

    // Set the CSS styles for the div
    box.style.borderColor = borderColor;
    box.style.backgroundColor = backgroundColor;
    box.style.borderStyle = randomBorderStyle;
  }

  function changeAllBoxes() {
    changeColorsAndBorderStyle("box-1")
    changeColorsAndBorderStyle("box-2")
    changeColorsAndBorderStyle("box-3")
  }

  function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

// Hide Boxes

function toggleBoxVisibility(boxId) {
    let box = document.getElementById(boxId);
    // Toggle the display property between 'block' and 'none'
    box.style.visibility = "hidden";
  }

  function toggleAllBoxes() {
    let boxes = document.querySelectorAll(".box");
    boxes.forEach(function(box) {
      // Toggle the display property of each box
      box.style.visibility = "hidden"
    });
  }

// Reset Colors button

  function resetColors() {
    var box1 = document.getElementById("box-1");
    let box2 = document.getElementById("box-2");
    let box3 = document.getElementById("box-3");

    // Reset the CSS properties for each box to their default values
    box1.style.borderColor = "black"
    box1.style.backgroundColor = "red"
    box1.style.borderStyle = "solid"

    box2.style.borderColor = "yellow"
    box2.style.backgroundColor = "blue"
    box2.style.borderStyle = "dashed"

    box3.style.borderColor = "purple"
    box3.style.backgroundColor = "yellowgreen"
    box3.style.borderStyle = "solid"
  }

//   Show All button

function showAllBoxes() {
    let boxes = document.querySelectorAll(".box");
    boxes.forEach(function(box) {
      // Toggle the display property of each box
      box.style.visibility = "visible"
    });
}
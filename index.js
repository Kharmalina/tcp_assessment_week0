function changeColorsAndBorderStyle(boxId) {
    // Get a reference to the three boxes via boxId parameter
    let box = document.getElementById(boxId);

    // Generate random colors for the border and background
    let borderColor = getRandomColor();
    let backgroundColor = getRandomColor();

    // Generate a random border style
    let borderStyles = ["solid", "dotted", "dashed", "double", "groove", "ridge", "inset", "outset", "none", "hidden"];
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
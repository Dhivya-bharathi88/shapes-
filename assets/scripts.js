document.getElementById('circle').addEventListener('click', function () {
  showInputForm('circle');
});

document.getElementById('square').addEventListener('click', function () {
  showInputForm('square');
});

document.getElementById('triangle').addEventListener('click', function () {
  showInputForm('triangle');
});

function showInputForm(shape) {
  document.getElementById('circle-input').style.display = 'none';
  document.getElementById('square-input').style.display = 'none';
  document.getElementById('triangle-input').style.display = 'none';

  if (shape === 'circle') {
      document.getElementById('circle-input').style.display = 'block';
  } else if (shape === 'square') {
      document.getElementById('square-input').style.display = 'block';
  } else if (shape === 'triangle') {
      document.getElementById('triangle-input').style.display = 'block';
  }
}

document.getElementById('calculate-circle-btn').addEventListener('click', function () {
  calculateArea('circle');
});

document.getElementById('calculate-square-btn').addEventListener('click', function () {
  calculateArea('square');
});

document.getElementById('calculate-triangle-btn').addEventListener('click', function () {
  calculateArea('triangle');
});

function calculateArea(shape) {
  if (shape === 'circle') {
      let radius = document.getElementById('radius').value;
      if (radius > 0) {
          let area = Math.PI * Math.pow(radius, 2);
          document.getElementById('circle-result').textContent = `Area of Circle: ${area.toFixed(2)}`;
      } else {
          document.getElementById('circle-result').textContent = 'Please enter a valid radius.';
      }
  } else if (shape === 'square') {
      let side = document.getElementById('side').value;
      if (side > 0) {
          let area = Math.pow(side, 2);
          document.getElementById('square-result').textContent = `Area of Square: ${area.toFixed(2)}`;
      } else {
          document.getElementById('square-result').textContent = 'Please enter a valid side length.';
      }
  } else if (shape === 'triangle') {
      let base = document.getElementById('base').value;
      let height = document.getElementById('height').value;
      if (base > 0 && height > 0) {
          let area = 0.5 * base * height;
          document.getElementById('triangle-result').textContent = `Area of Triangle: ${area.toFixed(2)}`;
      } else {
          document.getElementById('triangle-result').textContent = 'Please enter valid base and height values.';
      }
  }
}

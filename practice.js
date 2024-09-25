function calculateArea(shape, dimension1, dimension2) {
  let area;
  
  if (shape === 'circle') {
      area = Math.PI * Math.pow(dimension1, 2);
  } 
  else if (shape === 'square') {
      area = Math.pow(dimension1, 2);
  } 
  else if (shape === 'triangle') {
      area = 0.5 * dimension1 * dimension2;
  }
  
  document.getElementById('result').innerText = `The area of the ${shape} is: ${area.toFixed(2)}`;
}

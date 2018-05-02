// Function to create grid
function makeGrid(event) {
  let grid = document.querySelector('#pixelCanvas');
  grid.innerHTML = '';

  const height = document.querySelector('#inputHeight').value;
  const width = document.querySelector('#inputWidth').value;

  for(let i=0;i<height;i++){
    const row = document.createElement('tr');
    document.querySelector('#pixelCanvas').appendChild(row);

    for(let j=0;j<width;j++){
      const cell = document.createElement('td');
      row.appendChild(cell);
      cell.addEventListener('click', function(){
        let color = document.querySelector('#colorPicker').value;
        cell.style.backgroundColor = color;
      });
    }
  }
};

// When size is submitted by the user, call makeGrid()
document.querySelector('#submitBtn').addEventListener('click', function(evt){
  evt.preventDefault();
  makeGrid();
});

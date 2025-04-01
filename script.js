const container = document.querySelector('.grid-container');
const gridSizeSlider = document.querySelector('#grid-size-slider');
const gridSizeLabel = document.querySelector('#grid-size-label');
const resetBtn = document.querySelector('#reset-btn');
const eraserBtn = document.querySelector('#eraser-btn');
const rainbowBtn = document.querySelector('#rainbow-btn');
const grayscaleBtn = document.querySelector('#grayscale-btn');
const colorPicker = document.querySelector('#color-picker');
const darkModeToggle = document.querySelector('#dark-mode-toggle');

let gridSize = 16;
let currentMode = 'color';

function createGrid(size) {
    container.innerHTML = '';
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        div.addEventListener('mouseover', () => changeColor(div));
        container.appendChild(div);
    }
}

function changeColor(div) {
    if (currentMode === 'eraser') {
        div.style.backgroundColor = 'white';
    } else if (currentMode === 'rainbow') {
        div.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    } else if (currentMode === 'grayscale') {
        let shade = Math.floor(Math.random() * 256);
        div.style.backgroundColor = `rgb(${shade}, ${shade}, ${shade})`;
    } else {
        div.style.backgroundColor = colorPicker.value;
    }
}

gridSizeSlider.addEventListener('input', () => {
    gridSize = gridSizeSlider.value;
    gridSizeLabel.textContent = gridSize;
    createGrid(gridSize);
});

resetBtn.addEventListener('click', () => createGrid(gridSize));
eraserBtn.addEventListener('click', () => currentMode = 'eraser');
rainbowBtn.addEventListener('click', () => currentMode = 'rainbow');
grayscaleBtn.addEventListener('click', () => currentMode = 'grayscale');
colorPicker.addEventListener('input', () => currentMode = 'color');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

createGrid(gridSize);
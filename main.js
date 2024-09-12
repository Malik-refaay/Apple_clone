let image = document.querySelector('.img'); // Lowercase 'd'
let container = document.querySelector('.container'); // Lowercase 'd'

function phones(phone) {
    image.src = phone; // Use 'image' instead of 'img'
}

function colors(color) {
    container.style.background = color;
}
const firePixelsArray = []; //array de pixels
const fireWidth = 10; //largura do fogo
const fireHeight = 10; //altura do fogo

function start() {
    createFireDataStructure();
    renderFire();
}

function createFireDataStructure() {
    const numberOfPixels = fireWidth * fireHeight; //numero de pixels é determinado pela largura vezes altura

    for (let i = 0; i < numberOfPixels; i++) {
        firePixelsArray[i] = 0;
    }
}

function calculateFirePropagation() {
    
}

function renderFire() {
    let html = '<table cellpadding=0 cellspacing=0>'

    for(let row = 0; row < fireHeight; row++){

        html += '<tr>'

            for(let column = 0; column < fireWidth; column++){

                const pixelIndex = column + (fireWidth * row);

                html += '<td>'
                html += `<div class="pixel-index">${pixelIndex}</div>`
                html += '</td>'
            }

        html += '</tr>'
    }

    html += '</table'

    document.getElementById('fireCanvas').innerHTML = html
}

start();

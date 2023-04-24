// js

// DOM renderer
function renderOneAnimal(animal) {
    // build animal
    let card = document.createElement('li');
    card.className = 'card';
    card.innerHTML = `
        <div class="content">
            <h4>${animal.name}</h4>
            <p>
                $<span class="donation-count">${animal.donations}</span> Donated
            <p>
            <p>${animal.description}</p>
        </div>
        <div class="buttons">
            <button> Donate $10</button>
            <button> Set free</button>
        </div>
    `
    // add animal card to DOM
    document.querySelector('#animal-list').appendChild(card);
}

// <img src="${animal.imageUrl}"> // first in innerHTML

// fetch request, get all animals
function getAllAnimals() {
    fetch('http://localhost:3000/animalData')
    .then((response) => response.json())
    .then(animalData => animalData.forEach(animal => renderOneAnimal(animal)));
    console.log('before it returns');
}


// get the data and render the animals to the DOM
function initialize() {
    getAllAnimals();
    console.log('after getAllAnimals');

    // for when loading from data.js
    // animalData.forEach(animal => renderOneAnimal(animal));
}

// console.log(animalData);
initialize();

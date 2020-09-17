// This application will let the user pick a letter to see if it matches a letter in the hidden word
// On load the user will see the alphabet boxes and blank boxes from a randomly generated word
// All the words will be based off animals
// The words will be made in an array in the code
// All the words will be a minimum of 4 letters and a max of 10 letters
// The user will have 15 turns to guess the letters in the word
// After all lives are used up the hidden word will show


// This is the array of animals to be used for the hidden words
let animals = [
    'bear', 'bird', 'camel', 'chicken', 'crocodile', 'deer', 'dolphin', 'duck', 'eagle', 'elephant', 'fish', 'frog', 'goat', 'goldfish', 'hamster', 'horse', 'kitten', 'lion', 'lobster', 'monkey', 'octopus', 'panda', 'scorpion', 'seal', 'shark', 'snail', 'snake', 'spider', 'tiger', 'turtle', 'wolf'
];

// This function attaches the onclick to the alphabet letters
function buttonEvents(e) {
    document.getElementById('a').addEventListener('click', letterCheck);
    document.getElementById('b').addEventListener('click', letterCheck);
    document.getElementById('c').addEventListener('click', letterCheck);
    document.getElementById('d').addEventListener('click', letterCheck);
    document.getElementById('e').addEventListener('click', letterCheck);
    document.getElementById('f').addEventListener('click', letterCheck);
    document.getElementById('g').addEventListener('click', letterCheck);
    document.getElementById('h').addEventListener('click', letterCheck);
    document.getElementById('i').addEventListener('click', letterCheck);
    document.getElementById('j').addEventListener('click', letterCheck);
    document.getElementById('k').addEventListener('click', letterCheck);
    document.getElementById('l').addEventListener('click', letterCheck);
    document.getElementById('m').addEventListener('click', letterCheck);
    document.getElementById('n').addEventListener('click', letterCheck);
    document.getElementById('o').addEventListener('click', letterCheck);
    document.getElementById('p').addEventListener('click', letterCheck);
    document.getElementById('q').addEventListener('click', letterCheck);
    document.getElementById('r').addEventListener('click', letterCheck);
    document.getElementById('s').addEventListener('click', letterCheck);
    document.getElementById('t').addEventListener('click', letterCheck);
    document.getElementById('u').addEventListener('click', letterCheck);
    document.getElementById('v').addEventListener('click', letterCheck);
    document.getElementById('w').addEventListener('click', letterCheck);
    document.getElementById('x').addEventListener('click', letterCheck);
    document.getElementById('y').addEventListener('click', letterCheck);
    document.getElementById('z').addEventListener('click', letterCheck);
}

// This function will grab the letter the user clicks to check against the letters in the hidden word
function letterCheck(e) {
    let currentGuess = e.target.value;
    console.log(currentGuess)
}

// This function will randomly select an animal from the animal array
function animalSelection(animals) {
    let animalSelected = animals[Math.floor(Math.random() * animals.length)]
    console.log(animalSelected)

    let animalLetters = animalSelected.split('')
    console.log(animalLetters)

    let displayedAnimal = '';

    for (i = 0; i < animalLetters.length; i++) {
        displayedAnimal = document.getElementsByClassName('hiddenLetters')[0].innerHTML = animalLetters[i].toString();
        console.log(displayedAnimal)
    }
    console.log(displayedAnimal.length)

}

// This function will display the blank letters
function animalDisplay() {

}

document.addEventListener('DOMContentLoaded', function(event) {
    buttonEvents(event)
    animalSelection(animals)
});
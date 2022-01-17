console.log('JS OK');

/* 
Taccia
L'utente indica TRAMITE DOM un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
- con difficoltà 1 => tra 1 e 100;
- con difficoltà 2 => tra 1 e 81;
- con difficoltà 3 => tra 1 e 49;
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/

// Functions (Funzioni che ci possono servire)

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getUniqueRandomNumber = (min, max, list) => {
    let randomNumber;
    do {
        randomNumber = getRandomNumber(min, max); // Genera un numero casuale tra due estremi
    } while (list.includes(randomNumber)); // Solo se il numero generato non è nella lista di numeri

    return randomNumber;
}

const createCells = (cellNumber) => {
    const cell = document.createElement('div'); // Crea un elemento div
    cell.id = 'cell';
    cell.className = 'cell'; // Assegna la classe cell a quell'elemento.
    /*
    cell.style.width = 'calc(100% / variabile)';
    cell.style.height = 'calc(100% / variabile)';
    */
    cell.innerText = cellNumber + 1; // Scrivi il numero dentro la cella.
    return cell; // Come risultato ho il mio div con la classe cell assegnata
}

// Recuperiamo l'elemento in pagina e poniamo le variabili che possono servirci

const grid = document.getElementById('grid');
const choise = document.getElementById('choise');
const confirmButton = document.getElementById('confirm');

// Creiamo le celle in base alla scelta dell'utente

confirmButton.addEventListener('click', function () {
    const inputChoise = choise.value;
    console.log(inputChoise);
    let totalCell;
    if (inputChoise === 'easy') {
        totalCell = 100;
    } else if (inputChoise === 'medium') {
        totalCell = 81;
    } else {
        totalCell = 49;
    }
    console.log(totalCell);

    for (i = 0; i < totalCell; i++) {
        let cell = createCells(i);
        cell.addEventListener('click', function () {
            cell.classList.toggle('clicked');
        });
        grid.appendChild(cell);
    }

    if (totalCell === 100) {

    }
});

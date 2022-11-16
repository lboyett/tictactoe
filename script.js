const gameBoard = () => {
    // create array of squares
    const squares = document.querySelectorAll('.square');
    const sA = Array.from(squares);

    // initialize counter
    let counter = 1;

    // alternate X and O in squares
    squares.forEach (square => square.addEventListener('click', () => {
        if (square.textContent !== '') {
            return;
        }
        if (counter === 1) {
            square.textContent = 'X';
            square.value = 1;
            counter = counter - 1;
        } else {
            square.textContent = 'O';
            square.value = -1;
            counter = counter + 1; 
        }

        // create object of winning conditions
        const obj = {
        one: squares[0].value + squares[1].value + squares[2].value,
        two: squares[3].value + squares[4].value + squares[5].value,
        three: squares[6].value + squares[7].value + squares[8].value,
        four: squares[0].value + squares[3].value + squares[6].value,
        five: squares[1].value + squares[4].value + squares[7].value,
        six: squares[2].value + squares[5].value + squares[8].value,
        seven: squares[0].value + squares[4].value + squares[8].value,
        eight: squares[2].value + squares[4].value + squares[6].value,
        };

        let result = document.querySelector('.result')
        if (Object.values(obj).includes(3)) {
            result.textContent = 'X WINS!!!!!';
            squares.forEach(square => square.style.pointerEvents = 'none');
            return;
        } else if (Object.values(obj).includes(-3)) {
            result.textContent = 'O WINS!!!!!';
            squares.forEach(square => square.style.pointerEvents = 'none');
            return;
        } else if (!Object.values(obj).includes(NaN)) {
            result.textContent = 'DRAW!!!!!';
            return;
        }
    }));
    
    // return squares array to object
    return {gridSquare: sA,};
};

const grid = gameBoard();

const resetBoard = () => {
    let result = document.querySelector('.result')
    const squares = document.querySelectorAll('.square');
    const sA = Array.from(squares)


    squares.forEach (square => square.textContent = '');
    squares.forEach (square => square.value = NaN);
    squares.forEach (square => square.style.pointerEvents = 'auto');
    result.textContent = '';
}



const playBtnEl = document.getElementById('btnPlay');
const numbersContainerEl = document.querySelector('.number-container');

playBtnEl.addEventListener('click', function () {
	const numbersToGuess = [];
	numbersContainerEl.innerHTML = '';

	while (numbersToGuess.length < 5) {
		const random = getRandomNumber(1, 10);

		if (!numbersToGuess.includes(random)) {
			numbersToGuess.push(random);
			const number = createNumber(random);
			numbersContainerEl.append(number);
		}
	}

	setTimeout(resetNumbers, 3000);

	setTimeout(function () {
		const userNumbers = [];
		while (userNumbers.length < numbersToGuess.length) {
			const userNumber = parseInt(prompt('inserisci numero'));
			userNumbers.push(userNumber);
		}
		console.log(numbersToGuess);
		console.log(userNumbers);

		checkForWin(userNumbers, numbersToGuess);
	}, 3010);
});

function createNumber(newNumber) {
	const number = document.createElement('span');
	number.classList.add('display-1');
	number.innerText = newNumber;

	return number;
}

function checkForWin(userNumbers, randomNumbers) {
	const correctNumbers = [];
	for (let i = 0; i < userNumbers.length; i++) {
		if (randomNumbers.includes(userNumbers[i])) {
			correctNumbers.push(userNumbers[i]);
		}
	}

	if (correctNumbers.length === randomNumbers.length) {
		alert('Complimenti, hai indovinato tutti i numeri!!');
	} else if (correctNumbers.length === 0) {
		alert('Non hai indovinato nessun numero...riprova');
	} else {
		alert(`hai indovinato i numeri ${correctNumbers}`);
	}
}

/**
 * Generates a random number between two integers (inclusive)
 * @param {Number} min minimum number
 * @param {Number} max maximum number
 * @returns {Number} random number between min and max
 */
function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function resetNumbers() {
	const numbersEl = document.querySelectorAll('.number-container > *');

	for (let i = 0; i < numbersEl.length; i++) {
		numbersEl[i].innerText = '?';
	}
}

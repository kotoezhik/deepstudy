'use strict';

/**
 * @param {String} time – время в формате HH:MM (например, 09:05)
 * @returns {String} – время римскими цифрами (IX:V)
 */
//var time;
function romanTime(time) {
    // Немного авторского кода и замечательной магии
	var timeHH = time.substr(0,2);
	var timeMM = time.substr(3,2);
	
	if (time.length != 5 || timeHH < 0 || timeHH >= 24 || timeMM < 0 || timeMM > 59) {
		time = 'Неверное значение';
		return time;
	}
	
	function convertNumber(baseNumber) {
		if (baseNumber == 0) return 'N';
		
		var firstNumber = +baseNumber.substr(0,1);
		var secondNumber = +baseNumber.substr(1,1);
		
		switch (firstNumber) {			
			case 0:
				firstNumber = '';
				break;
			case 1:
				firstNumber = 'X';
				break;
			case 2:
				firstNumber = 'XX';
				break;
			case 3:
				firstNumber = 'XXX';
				break;
			case 4:
				firstNumber = 'XL';
				break;
			case 5:
				firstNumber = 'L';
				break;
		}
		
		switch (secondNumber) {
			case 0:
				secondNumber = '';
				break;
			case 1:
				secondNumber = 'I';
				break;
			case 2:
				secondNumber = 'II';
				break;
			case 3:
				secondNumber = 'III';
				break;
			case 4:
				secondNumber = 'IV';
				break;
			case 5:
				secondNumber = 'V';
				break;
			case 6:
				secondNumber = 'VI';
				break;
			case 7:
				secondNumber = 'VII';
				break;
			case 8:
				secondNumber = 'VIII';
				break;
			case 9:
				secondNumber = 'IX';
				break;
		}
		
		
		return firstNumber + secondNumber;
	}
	
	//console.log(timeHH + ':' + convertNumber(timeMM));
	//console.log(timeHH + ':' + timeMM);
	
    return time = convertNumber(timeHH) + ':' + convertNumber(timeMM);
}

console.info(romanTime('23:59'));

//module.exports = romanTime;

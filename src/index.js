const singleNumbers = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const teenNumbers = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const doubleDigitNumbers = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const threeDigitNumbers = 'hundred'
module.exports = function toReadable(number) {
    let hundred = number / 100;
    let ten = (number - (parseInt(number / 100) * 100)) / 10;
    let one = number % 10;
    let stringNumber = '';

    if (parseInt(hundred) >= 1) {
        stringNumber = stringNumber + singleNumbers[parseInt(hundred)] + ' ' + threeDigitNumbers;
    }

    if (parseInt(ten) == 1) {
        stringNumber = stringNumber + ' ' + teenNumbers[one];
    }else if (parseInt(ten) > 1) {
        stringNumber = stringNumber + ' ' + doubleDigitNumbers[parseInt(ten)];
    }

    if (parseInt(ten) !== 1 && one >= 1) {
        stringNumber = stringNumber + ' ' + singleNumbers[one];
    }

    if (number == 0) {
        return 'zero'
    }

    return stringNumber.trim();
};

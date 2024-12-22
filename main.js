function convertNumberToString(numberStr) {
  let string = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    if (i < numberStr.length && i > 0) {
      string += ' ';
    }
    switch (numberStr[i]) {
      case '0':
        string += 'zero';
        break;
      case '1':
        string += 'one';
        break;
      case '2':
        string += 'two';
        break;
      case '3':
        string += 'three';
        break;
      case '4':
        string += 'four';
        break;
      case '5':
        string += 'five';
        break;
      case '6':
        string += 'six';
        break;
      case '7':
        string += 'seven';
        break;
      case '8':
        string += 'eight';
        break;
      case '9':
        string += 'nine';
        break;
      case '-':
        string += 'minus';
        break;
      case '.':
        string += 'point';
        break;
      case ',':
        string += 'point';
        break;
      default:
        break;
    }
  }
  return string;
}

console.log(convertNumberToString('1035,6'));

// if (numberStr[i] === '0') {
//   string += 'zero ';
// } else if (numberStr[i] === '1') {
//   string += 'one ';
// } else if (numberStr[i] === '2') {
//   string += 'two ';
// } else if (numberStr[i] === '3') {
//   string += 'three ';
// } else if (numberStr[i] === '4') {
//   string += 'four ';
// } else if (numberStr[i] === '5') {
//   string += 'five ';
// } else if (numberStr[i] === '6') {
//   string += 'six ';
// } else if (numberStr[i] === '7') {
//   string += 'seven ';
// } else if (numberStr[i] === '8') {
//   string += 'eight ';
// } else if (numberStr[i] === '9') {
//   string += 'nine ';
// } else if (numberStr[i] === '-') {
//   string += 'minus ';
// } else if (numberStr[i] === ',' || numberStr === '.') {
//   string += 'point ';
// }

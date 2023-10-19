module.exports = function toReadable (number) {
  let result = [];
  number = number.toString().split('').map(Number);
  const numList = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen'
  ];
  const numDecimal = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety'
  ];
  const numEachDec = [
    'hundred',
    'thousand'
  ];

  while (number.length > 0) {
    if (number.length <= numEachDec.length + 2) {
      if (number.length >= 3) {
        result.push(numList[number.shift()]);
        result.push(numEachDec[number.length - 2]);
      }
      else {
        const num = Number(number.join(''));
        if (num === 0) {
          if (result.length === 0) {
            result.push(numList[0]);
          }
          number.splice(0, 2);
        }
        else if (num < 20) {
          result.push(numList[num]);
          number.splice(0, 2);
        }
        else {
          const [dec, digit] = [number.shift(), number.shift()];
          result.push(numDecimal[dec]);
          (digit) && result.push(numList[digit]);
        }
      }
    }
    else {
      throw 'Out of range';
    }
  }
  return result.join(' ');
}

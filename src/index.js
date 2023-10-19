function toReadable (number) {
  number = number.toString().split('');
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
    'Hundred',
    'Thousand'
  ];

  console.log(number.length > numEachDec.length + 2);
}

toReadable(9008)
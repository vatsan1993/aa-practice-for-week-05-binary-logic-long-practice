// Convert the integers in the console.logs below to base 16:

/******************************************************************************/
let binToNum = (str) => {
  str = str.substring(2);
  let value = 0;
  for (let power = 0; power < str.length; power++) {
    let index = str.length - 1 - power;
    value += parseInt(str[index]) * Math.pow(2, power);
  }
  return value;
};

const convertToBase16 = (element) => {
  // Your code here
  if (typeof element == 'number') {
    let str = '';
    while (element !== 0) {
      let val = element % 16;
      element = parseInt(element / 16);
      if (val === 10) {
        val = 'a';
      } else if (val === 11) {
        val = 'b';
      } else if (val === 12) {
        val = 'c';
      } else if (val === 13) {
        val = 'd';
      } else if (val === 14) {
        val = 'e';
      } else if (val === 15) {
        val = 'f';
      }

      str = val + str;
    }
    return '0x' + str;
  } else {
    let num = binToNum(element);
    return convertToBase16(num);
  }
};

/******************************************************************************/

console.log(convertToBase16(4)); // 0x4
console.log(convertToBase16(65)); // 0x41
console.log(convertToBase16(256)); // 0x100
console.log(convertToBase16(123)); // 0x7b
console.log(convertToBase16(1000)); // 0x3e8

console.log('––––––');

console.log(convertToBase16('0b1100')); // 0xc
console.log(convertToBase16('0b0101')); // 0x5
console.log(convertToBase16('0b1000')); // 0x8
console.log(convertToBase16('0b0111')); // 0x7

console.log('––––––');

console.log(convertToBase16('0b10100101')); // 0xa5
console.log(convertToBase16('0b11111111')); // 0xff
console.log(convertToBase16('0b01010101')); // 0x55
console.log(convertToBase16('0b00110011')); // 0x33

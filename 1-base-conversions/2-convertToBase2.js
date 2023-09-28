// Convert the integers in the console.logs below to base 2

/******************************************************************************/
const hexToNum = (str) => {
  let value = 0;
  str = str.substring(2);
  for (let power = 0; power < str.length; power++) {
    let index = str.length - 1 - power;
    let ch = str[index];
    let val;
    if (ch == 'a') {
      val = 10;
    } else if (ch == 'b') {
      val = 11;
    } else if (ch == 'c') {
      val = 12;
    } else if (ch == 'd') {
      val = 13;
    } else if (ch == 'e') {
      val = 14;
    } else if (ch == 'f') {
      val = 15;
    } else {
      val = parseInt(str[index]);
    }
    value += parseInt(val) * Math.pow(16, power);
  }
  return value;
};
const convertToBase2 = (element) => {
  // Your code here
  // console.log(typeof element === 'number');
  if (typeof element === 'number') {
    let str = '';
    while (element !== 0) {
      str = (element % 2) + str;
      element = parseInt(element / 2);
    }
    return '0b' + str;
  } else {
    let num = hexToNum(element);
    return convertToBase2(num);
  }
};

/******************************************************************************/

console.log(convertToBase2(4)); // 0b100
console.log(convertToBase2(65)); // 0b1000001
console.log(convertToBase2(256)); // 0b100000000
console.log(convertToBase2(123)); // 0b1111011
console.log(convertToBase2(1000)); // 0b1111101000

console.log('––––––');

console.log(convertToBase2('0xf')); // 0b1111
console.log(convertToBase2('0xfa')); // 0b11111010
console.log(convertToBase2('0x1234')); // 0b1001000110100
console.log(convertToBase2('0xc9a1')); // 0b1100100110100001
console.log(convertToBase2('0xbf12')); // 0b1011111100010010

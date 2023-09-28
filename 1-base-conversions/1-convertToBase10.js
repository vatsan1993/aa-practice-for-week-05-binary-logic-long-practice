// Convert the integers in the console.logs below to base 10:

/******************************************************************************/

const convertToBase10 = (str) => {
  // Your code here
  let value = 0;
  if (str.substring(0, 2) == '0b') {
    str = str.substring(2);
    // for (let power = 0; power < str.length; power++) {
    //   let index = str.length - 1 - power;
    //   value += parseInt(str[index]) * Math.pow(2, power);
    // }
    value = parseInt(str, 2);
  } else {
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
  }

  return value;
};

/******************************************************************************/

console.log(convertToBase10('0b1100')); // 12
console.log(convertToBase10('0b0101')); // 5
console.log(convertToBase10('0b1000')); // 8
console.log(convertToBase10('0b0111')); // 7

console.log('––––––');

console.log(convertToBase10('0b10100101')); // 165
console.log(convertToBase10('0b11111111')); // 255
console.log(convertToBase10('0b01010101')); // 85
console.log(convertToBase10('0b00110011')); // 51

console.log('––––––');

console.log(convertToBase10('0xf')); // 15
console.log(convertToBase10('0xfa')); // 250
console.log(convertToBase10('0x1234')); // 4660
console.log(convertToBase10('0xc9a1')); // 51617
console.log(convertToBase10('0xbf12')); // 48914

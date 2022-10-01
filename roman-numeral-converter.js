function convertToRoman(num) {
 
  const arabicToRoman = {3000: 'MMM', 2000: 'MM', 1000: 'M', 900: 'CM', 800: 'DCCC', 700: 'DCC', 600: 'DC', 500: 'D', 400: 'CD', 300: 'CCC', 200: 'CC', 100: 'C', 90: 'XC', 80: 'LXXX', 70: 'LXX', 60: 'LX', 50: 'L', 40: 'XL', 30: 'XXX', 20: 'XX', 10: 'X', 9: 'IX', 8: 'VIII', 7: 'VII', 6: 'VI', 5: 'V', 4: 'IV', 3: 'III', 2: 'II', 1: 'I'}; 
  const baseOfTens = [1000, 100, 10, 1]; //array to break the number into Thousands, Hundreds, Tens, and Ones (ex. 1987 - 1000, 900, 80, 7)
  const baseNum = []; 
  let romanStr = ''; 
  let modulo = 0; 
  
  if (num != 0) {
    for (let i = 0; i < baseOfTens.length; i++) {
      
      while (baseOfTens[i] <= num) {
        modulo = num % baseOfTens[i];
        num -= modulo;
        baseNum.push(num)
        num = modulo; 
      }
    }
  } 
  for (let number of baseNum) {
    for (let key in arabicToRoman) {
      if (number === +key) {
        romanStr += arabicToRoman[key];
      }
    }
  }
  return romanStr; 
}
convertToRoman(3119);

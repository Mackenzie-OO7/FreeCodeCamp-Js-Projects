function rot13(str) {
  var regEx = /[A-Z]/;
  var rotCharArray = [];
  str = str.split("");
  for (var x in str) {
    if (regEx.test(str[x])) {
      rotCharArray.push(((str[x].charCodeAt() - 65 + 13) % 26) + 65);
    } 
    else {
      rotCharArray.push(str[x].charCodeAt());
    }
  }
  str = String.fromCharCode.apply(String, rotCharArray);
  return str;
}
/* console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); */

function cesar(m, s) {

 // if 's' is a number OR starts with a number, parseInt will turn it into an integer
 // and it truncates at the decimal
 s = parseInt(s);
 
 // but if it begins with a letter, it will return 'NaN'
 if (!Number.isInteger(s)) {
  s = 1;
 }

 var letterString = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ .';
 var n = letterString.length;
 var cipherText = '';
 for (var i = 0; i < m.length; i++) {
  var originalLetter = m[i];
  var originalNumber = letterString.indexOf(originalLetter);
  var newNumberRaw = originalNumber + s;
  var newNumberClean = newNumberRaw%n;
  var newLetter = letterString[newNumberClean];
  cipherText += newLetter;
 }
 return cipherText;
}

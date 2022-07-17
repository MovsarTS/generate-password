function generatePassword(length, level, count) {

  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const digits = '0123456789';
  const symbols = '!#$%&()*+,-./:;<=>?@[]^_{|}~';

  let newPassword = '';

  let randomSymbolString;
  let randomSymbolNumber;
  let randomSymbolSymbols;

    if (level == "easy") {
      for (let i = 0; i < length; i++) {
      randomSymbolString = alphabet[Math.floor(Math.random() * alphabet.length)]
      newPassword = newPassword + randomSymbolString;
      }
    } else if (level == "medium") {
      for (let i = 0; i < length; i++) {
      randomSymbolString = alphabet[Math.floor(Math.random() * alphabet.length)]
      randomSymbolNumber = digits[Math.floor(Math.random() * digits.length)]
      newPassword = newPassword + randomSymbolString + randomSymbolNumber;
      newPassword = newPassword.slice(0, length)
      }
    } else if (level == "hard") {
      for (let i = 0; i < length; i++) {
      randomSymbolString = alphabet[Math.floor(Math.random() * alphabet.length)]
      randomSymbolNumber = digits[Math.floor(Math.random() * digits.length)]
      randomSymbolSymbols = symbols[Math.floor(Math.random() * symbols.length)]
      newPassword = newPassword + randomSymbolString + randomSymbolNumber + randomSymbolSymbols;
      newPassword = newPassword.slice(0, length)
      }
    }

    let arr = [];

    if(count > 1 && level == "easy"){
      for (let i = 0; i < count; i++) {
        for (let i = 0; i < length; i++) {
          randomSymbolString = alphabet[Math.floor(Math.random() * alphabet.length)]
          newPassword = newPassword + randomSymbolString;
          }
        arr.push(newPassword.slice(-length))
      }
      return arr
    } else if(count > 1 && level == "medium"){
      for (let i = 0; i < count; i++) {
        for (let i = 0; i < length; i++) {
          randomSymbolString = alphabet[Math.floor(Math.random() * alphabet.length)]
        randomSymbolNumber = digits[Math.floor(Math.random() * digits.length)]
        newPassword = newPassword + randomSymbolString + randomSymbolNumber;
        newPassword = newPassword.slice(-length)
          }
        arr.push(newPassword.slice(-length))
      }
      return arr
    } if(count > 1 && level == "hard"){
      for (let i = 0; i < count; i++) {
        for (let i = 0; i < length; i++) {
          randomSymbolString = alphabet[Math.floor(Math.random() * alphabet.length)]
        randomSymbolNumber = digits[Math.floor(Math.random() * digits.length)]
        randomSymbolSymbols = symbols[Math.floor(Math.random() * symbols.length)]
        newPassword = newPassword + randomSymbolString + randomSymbolNumber + randomSymbolSymbols;
        newPassword = newPassword.slice(-length)
          }
        arr.push(newPassword.slice(-length))
      }
      return arr
    }
    return newPassword
  }
console.log(generatePassword(4, "easy", 3))
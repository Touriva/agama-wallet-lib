const encrypt = (cipherKey, string, testPinStrength) => {
  // test pin security
  // - at least 1 char in upper case
  // - at least 1 digit
  // - at least one special character
  // - min length 8

  // TODO
  if (testPinStrength) {
    const _pinTest = _pin.match('^(?=.*[A-Z])(?=.*[^<>{}\"/|;:.,~!?@#$%^=&*\\]\\\\()\\[_+]*$)(?=.*[0-9])(?=.*[a-z]).{8}$');
  }

  const encryptedString = aes256.encrypt(cipherKey, string);

  return encryptedString;
}

const decrypt = (cipherKey, string) => {
  const encryptedKey = aes256.decrypt(cipherKey, string);
  // test if stored encrypted passphrase is decrypted correctly
  // if not then the key is wrong
  const _regexTest = encryptedKey.match(/^[0-9a-zA-Z ]+$/g);

  return !_regexTest ? false : encryptedKey;
}

module.exports = {
  encrypt,
  decrypt,
};
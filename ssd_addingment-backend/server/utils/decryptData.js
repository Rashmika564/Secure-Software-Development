let getDecryptSecret = require("./getSecrets")
let CryptoJS = require("crypto-js");

function decryptAndReturn(ciphertext) {
    var bytes = CryptoJS.AES.decrypt(ciphertext, getDecryptSecret());
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    console.log(decryptedData);

    return decryptedData;
}

module.exports = decryptAndReturn;
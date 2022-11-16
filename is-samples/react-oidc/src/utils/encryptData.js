let {getEncryptSecret} = require("./getSecrets")
let CryptoJS = require("crypto-js");

export function encryptAndReturn(valuetoEncrypt) {
   
    var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(valuetoEncrypt), getEncryptSecret()).toString();

    return ciphertext;
}
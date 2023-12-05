let alpha = 'abcdefghijklmnopqrstuvwxyz';
let cipher_msg = "", new_key = "", cipher = "", encrypt_msg = "";
let searchc = 0, searchr = 0, encrypt = 0;

function cipher_optimize_encrypt(message, key) {
    if(message.length == key.length) {
        return key;
    }
    else
    if(message.length > 5000 || key.length > 5000) {
        console.error("ERROR: string too long.!\n", null);
    }
    else
    new_key = newkey(key, message.length, 0);
    return encrypt_msg = encode(message, new_key, 0);
}

function newkey(key, msg_length, k) {
    if(msg_length == 0) {
        return new_key;
    }
    else
    new_key = new_key + key[k%(key.length)];
    return newkey(key, msg_length-1, k+1);
}

function encode(message, msg_newkey, i) {
    if( i == message.length) {
        return cipher_msg;
    }
    else
    searchc = alpha.indexOf(message[i]);
    searchr = alpha.indexOf(msg_newkey[i]);
    encrypt = (searchc !== -1) && (searchr !== -1) ? (searchr + searchc) : 99;
    cipher = (encrypt >= 26 && encrypt < 52) ? alpha[encrypt - 26] : (encrypt < 26) ? alpha[encrypt] : message[i];
    cipher_msg = cipher_msg + cipher;
    return encode(message, msg_newkey, i+1);
}

console.log(cipher_optimize_encrypt("attack at dawn", "secret"));

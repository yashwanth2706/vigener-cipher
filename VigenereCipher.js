let alpha = 'abcdefghijklmnopqrstuvwxyz';

let cipher_msg = "";
let NEW_KEY = "";
let cipher = ""; 
let encrypt_msg = "";

let searchc = 0;
let searchr = 0;
let encrypt = 0;

//Function to check if message length is too long

function ENCRYPT_MSG(message, key) {
    if(message.length == key.length) {
        return key;
    }
    else
    if(message.length > 5000 || key.length > 5000) {
        console.error("ERROR: string too long.!\n", null);
    }
    else
    NEW_KEY = GEN_NEWKEY(key, message.length, 0);
    return ENCRYPT_MSG = ENCODE(message, NEW_KEY, 0);
}

//Function to generate new key

function GEN_NEWKEY(key, msg_length, k) {
    if(msg_length == 0) {
        return NEW_KEY;
    }
    else
    NEW_KEY = NEW_KEY + key[k%(key.length)];
    return GEN_NEWKEY(key, msg_length-1, k+1);
}

//Function to Encrypt message to Vigenere Cipher

function ENCODE(message, msg_newkey, i) {
    if( i == message.length) {
        return cipher_msg;
    }
    else
    searchc = alpha.indexOf(message[i]);
    searchr = alpha.indexOf(msg_newkey[i]);
    encrypt = (searchc !== -1) && (searchr !== -1) ? (searchr + searchc) : 99;
    cipher = (encrypt >= 26 && encrypt < 52) ? alpha[encrypt - 26] : (encrypt < 26) ? alpha[encrypt] : message[i];
    cipher_msg = cipher_msg + cipher;
    return ENCODE(message, msg_newkey, i+1);
}

console.log(ENCRYPT_MSG("attack at dawn", "secret"));

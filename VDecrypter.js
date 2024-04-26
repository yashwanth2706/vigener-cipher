let alpha = "abcdefghijklmnopqrstuvwxyz";

let decode_msg = ""; 
let decipher = "";
let new_key = "";

let searchc = 0;
let searchr = 0;
let decrypt = 0;

//Function to check if the length of message is too long

function DECODE_MSG(crptmsg, key) {
    if(crptmsg.length > 5000 || key.length > 5000) {
        console.error("Error string too long.!", null);
        return -1;
    }
    else
    if(crptmsg.length == key.length){
        return key;
    }
    else{
        let generatedKey = newkey(key, crptmsg.length, 0);
        return decode(crptmsg, generatedKey, 0);
    }
}

//Recursive Function to generate new key if key length is short than message or longer than message
//newkey function generates the key length exactly equal to meaage length

function newkey(key, msg_length, k) {
    if(msg_length == 0) {
        return new_key;
    }
    else
    new_key = new_key + key[k%(key.length)];
    return newkey(key, msg_length-1, k+1);
}

//Recursive function to impelement decoding for Vigenere cipher 

function decode(crptmsg, NEW_KEY, d) {
    if(d == crptmsg.length) {
        return decode_msg;
    }
    else
    searchc = alpha.indexOf(crptmsg[d]);
    searchr = alpha.indexOf(NEW_KEY[d]);
    decrypt = ((searchr == -1) || (searchc == -1)) ? 100 : (searchc-searchr);
    decrypt = (decrypt < 0) ? decrypt + 26 : decrypt;
    decipher = (decrypt > 26 && decrypt <= 52) ? alpha[decrypt-26] : (decrypt >= 0 && decrypt < 26) ? alpha[decrypt] : crptmsg[d];
    decode_msg = decode_msg + decipher;
    return decode(crptmsg, NEW_KEY, d+1)
}

//Function call

let decrypt_message = DECODE_MSG("sxvrgd ev htor","secret");
console.log(decrypt_message);

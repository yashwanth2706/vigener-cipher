let alpha = "abcdefghijklmnopqrstuvwxyz";
let decode_msg = "", decipher = "", new_key = "";
let searchc = 0, searchr = 0, decrypt = 0;

function checkmsg_len(crptmsg, key) {
    if(crptmsg.length > 5000 || key.length > 5000) {
        console.error("error string too long.!", null);
        return -1;
    }
    else
    if(crptmsg.length == key.length){
        return key;
    }
    else{
        let generatekey = decode_newkey(key, crptmsg.length, 0);
        return decode(crptmsg, generatekey, 0);
    }
}

function decode_newkey(key, msg_length, k) {
    if(msg_length == 0) {
        return new_key;
    }
    else
    new_key = new_key + key[k%(key.length)];
    return decode_newkey(key, msg_length-1, k+1);
}


function decode(crptmsg, msg_newkey, d) {
    if(d == crptmsg.length) {
        return decode_msg;
    }
    else
    searchc = alpha.indexOf(crptmsg[d]);
    searchr = alpha.indexOf(msg_newkey[d]);
    decrypt = ((searchr == -1) || (searchc == -1)) ? 99 : (searchc-searchr);
    decrypt = (decrypt < 0) ? decrypt + 26 : decrypt;
    decipher = (decrypt > 26 && decrypt <= 52) ? alpha[decrypt-26] : (decrypt >= 0 && decrypt < 26) ? alpha[decrypt] : crptmsg[d];
    decode_msg = decode_msg + decipher;
    return decode(crptmsg, msg_newkey, d+1)
}

let decrypt_message = checkmsg_len("sxvrgd ev htor","secret");
console.log(decrypt_message);

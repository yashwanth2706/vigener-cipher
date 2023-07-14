function encode(message, key) {
  let alpha = 'abcdefghijklmnopqrstuvwxyz';
  let copy, newkey;
  for(k=0;k<message.length;k++)
  {
    copy=key[k%key.length]
    newkey=newkey+copy;
  }
  let store = '';
  
  for (let i = 0; i < message.length; i++) {
    let searchc = alpha.indexOf(message[i]);
    let searchr = alpha.indexOf(newkey[i]);
    let encrypt = (searchr !== -1 && searchc !== -1) ? searchr + searchc : 99;
    let crypt = (encrypt >= 26 && encrypt < 52) ? alpha[encrypt - 26] : (encrypt < 26) ? alpha[encrypt] : message[i];
    store += crypt;
  }
  
  return store;
}

let cipher = encode("attack at dawn", "secret");
console.log(cipher);

function decode(crptmsg, key)
{
let alpha='abcdefghijklmnopqrstuvwxyz';
  
let k, newkey='', copy, d, searchr, searchc, decrypt, end, store='';
  
for(k=0;k<crptmsg.length;k++)
{
  copy=key[k%key.length];
  newkey=newkey+copy;
}
  
for(d=0;d<crptmsg.length;d++)
{
  
  searchc=alpha.indexOf(crptmsg[d]);
  searchr=alpha.indexOf(newkey[d]);
  
  let decrypt = ((searchr == -1) || (searchc == -1)) ? 99 : (searchc-searchr);
  
  decrypt = (decrypt < 0) ? decrypt + 26 : decrypt;
  
  end = (decrypt > 26 && decrypt <= 52) ? alpha[decrypt-26] : (decrypt >= 0 && decrypt < 26) ? alpha[decrypt] : crptmsg[d];
  
  store=store+end;
  
}
key = undefined;
newkey = undefined;
return store;
}
let decoded_message = decode("sxvrgd ev htor", "secret");
console.log(decoded_message);

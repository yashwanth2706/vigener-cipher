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
  
  if((searchr == -1) || (searchc == -1))
  {
    decrypt = 99;
  }
  else
  {
    decrypt=searchc-searchr;
  }
  
  if(decrypt<0)
  {
    decrypt=decrypt+26;
  }
  
  if((decrypt>26)&&(decrypt<=52))
  {
    end=alpha[decrypt-26];
  }
  else
  if((decrypt>=0)&&(decrypt<26))
  {
    end=alpha[decrypt];
  }
  else
  {
    end = crptmsg[d];
  }
  
  store=store+end;
  
}
key = undefined;
newkey = undefined;
}
decode("sxvrgd ev htor", "secret");

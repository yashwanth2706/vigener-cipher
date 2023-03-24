function encode(message, key)
{
 
let i, searchr, searchc, store='', encrypt, crypt, newkey='', k, keydt, copy;
 
let alpha='abcdefghijklmnopqrstuvwxyz';
 
   for(k=0;k<message.length;k++)
  {
    copy=key[k%key.length]
    newkey=newkey+copy;
  }
 
 for(i=0;i<message.length;i++)
 {
  
   searchc=alpha.indexOf(message[i]);
   searchr=alpha.indexOf(newkey[i]);
   
   if((searchr == -1) || (searchc == -1))
   {
     encrypt = 99;
   }
   else
   {
   encrypt=searchr+searchc;
   }
   
   if((encrypt>=26)&&(encrypt<52))
   {
     crypt=alpha[encrypt-26]
   }
   else
   if(encrypt<26)
   {
     crypt=alpha[encrypt];
   }
   else
   {
     crypt=message[i];
   }
  
   store=store+crypt;
  
 }
 key = undefined;
 newkey = undefined;
 return store;
}
let cipher = encode("attack at dawn", "secret");
console.log(cipher);

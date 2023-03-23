function encode()
{
let i,searchr,searchc,store='', encrypt;
 let alpha='abcdefghijklmnopqrstuvwxyz';
 let message=prompt('enter your message');
 let key=prompt('enter your key');
 let crypt,newkey='',k,keydt,copy;
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
 console.log(store);
 return;
}
encode();
alpha = "abcdefghijklmnopqrstuvwxyz"

def decode_msg(crptmsg, key):
    if len(crptmsg) > 5000 or len(key) > 5000:
        raise ValueError("Error: string too long!")
    elif len(crptmsg) == len(key):
        return decode(crptmsg, key)
    else:
        generated_key = new_key(key, len(crptmsg))
        return decode(crptmsg, generated_key)

def new_key(key, msg_length):
    new_key = ""
    for i in range(msg_length):
        new_key += key[i % len(key)]
    return new_key

def decode(crptmsg, new_key):
    decode_msg = ""
    for i in range(len(crptmsg)):
        searchc = alpha.find(crptmsg[i])
        searchr = alpha.find(new_key[i])
        if searchc == -1 or searchr == -1:
            decipher = crptmsg[i]
        else:
            decrypt = (searchc - searchr) % 26
            decipher = alpha[decrypt]
        decode_msg += decipher
    return decode_msg

# Function call
decrypt_message = decode_msg("lxfopv mh oeib", "lemon")
print(decrypt_message)

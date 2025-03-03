alpha = 'abcdefghijklmnopqrstuvwxyz'

def encrypt_msg(message, key):
    if len(message) == len(key):
        new_key = key
    elif len(message) > 5000 or len(key) > 5000:
        raise ValueError("ERROR: string too long!")
    else:
        new_key = gen_new_key(key, len(message))
    
    return encode(message, new_key)

def gen_new_key(key, msg_length):
    new_key = ""
    for i in range(msg_length):
        new_key += key[i % len(key)]
    return new_key

def encode(message, new_key):
    cipher_msg = ""
    for i in range(len(message)):
        searchc = alpha.find(message[i])
        searchr = alpha.find(new_key[i])
        if searchc != -1 and searchr != -1:
            encrypt = (searchr + searchc) % 26
            cipher = alpha[encrypt]
        else:
            cipher = message[i]
        cipher_msg += cipher
    return cipher_msg

print(encrypt_msg("attackatdawn", "lemon"))

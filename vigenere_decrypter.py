alpha = "abcdefghijklmnopqrstuvwxyz"  # Alphabet used for decryption

def decode_msg(crptmsg, key):
    """
    Decrypts the encrypted message using the Vigenere cipher with the provided key.
    """
    # Raise an error if the message or key is too long
    if len(crptmsg) > 5000 or len(key) > 5000:
        raise ValueError("Error: string too long!")
    # If the message and key are of the same length, use the key directly
    elif len(crptmsg) == len(key):
        return decode(crptmsg, key)
    # Generate a new key if the lengths are different
    else:
        generated_key = new_key(key, len(crptmsg))
        return decode(crptmsg, generated_key)

def new_key(key, msg_length):
    """
    Generates a new key by repeating the original key to match the message length.
    """
    new_key = ""
    for i in range(msg_length):
        new_key += key[i % len(key)]
    return new_key

def decode(crptmsg, new_key):
    """
    Decodes the encrypted message using the Vigenere cipher with the provided key.
    """
    decode_msg = ""
    for i in range(len(crptmsg)):
        searchc = alpha.find(crptmsg[i])  # Find the position of the encrypted character in the alphabet
        searchr = alpha.find(new_key[i])  # Find the position of the key character in the alphabet
        if searchc == -1 or searchr == -1:
            decipher = crptmsg[i]  # If character is not in the alphabet, keep it as is
        else:
            decrypt = (searchc - searchr) % 26  # Calculate the decrypted character position
            decipher = alpha[decrypt]  # Get the decrypted character from the alphabet
        decode_msg += decipher  # Append the decrypted character to the decoded message
    return decode_msg

# Function call to decrypt the message
decrypt_message = decode_msg("lxfopv mh oeib", "lemon")
print(decrypt_message)

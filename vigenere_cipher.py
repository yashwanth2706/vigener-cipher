alpha = 'abcdefghijklmnopqrstuvwxyz'  # Alphabet used for encryption

def encrypt_msg(message, key):
    """
    Encrypts the message using the Vigenere cipher with the provided key.
    """
    # Check if the message and key are of the same length
    if len(message) == len(key):
        new_key = key
    # Raise an error if the message or key is too long
    elif len(message) > 5000 or len(key) > 5000:
        raise ValueError("ERROR: string too long!")
    # Generate a new key if the lengths are different
    else:
        new_key = gen_new_key(key, len(message))
    
    # Encode the message with the new key
    return encode(message, new_key)

def gen_new_key(key, msg_length):
    """
    Generates a new key by repeating the original key to match the message length.
    """
    new_key = ""
    for i in range(msg_length):
        new_key += key[i % len(key)]
    return new_key

def encode(message, new_key):
    """
    Encodes the message using the Vigenere cipher with the provided key.
    """
    cipher_msg = ""
    for i in range(len(message)):
        searchc = alpha.find(message[i])  # Find the position of the message character in the alphabet
        searchr = alpha.find(new_key[i])  # Find the position of the key character in the alphabet
        if searchc != -1 and searchr != -1:
            encrypt = (searchr + searchc) % 26  # Calculate the encrypted character position
            cipher = alpha[encrypt]  # Get the encrypted character from the alphabet
        else:
            cipher = message[i]  # If character is not in the alphabet, keep it as is
        cipher_msg += cipher  # Append the encrypted character to the cipher message
    return cipher_msg

# Example usage of the encrypt_msg function
print(encrypt_msg("attack at dawn", "lemon"))

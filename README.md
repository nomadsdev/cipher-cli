# CipherCLI

CipherCLI is a command-line tool for encrypting and decrypting text messages using AES-256-CBC encryption. It allows users to securely encode and decode messages via a simple command-line interface.

## Features

- **Encryption**: Convert plain text into encrypted data.
- **Decryption**: Convert encrypted data back into plain text.
- **AES-256-CBC**: Uses AES-256-CBC encryption for strong security.

## Installation

Clone the repository and install the necessary dependencies:

```bash
git clone https://github.com/nomadsdev/cipher-cli.git
cd cipher-cli
npm install
```

## Usage

To use CipherCLI, run the `cli.js` script:

```bash
node cli.js
```

### Commands

1. **Encrypt a Message**:  
   Choose option `1` to encrypt a message. Enter the plain text you want to encrypt, and the program will output the encrypted data.

2. **Decrypt a Message**:  
   Choose option `2` to decrypt a message. Enter the IV (Initialization Vector) and the encrypted data (both in hex format) to receive the decrypted text.

## Example

**Encrypting a Message:**

```bash
node cli.js
1: Encrypt a message
2: Decrypt a message
Please select an option: 1
Please enter the message to encrypt: Hello, World!
Encrypted data: { iv: '...', content: '...' }
```

**Decrypting a Message:**

```bash
node cli.js
1: Encrypt a message
2: Decrypt a message
Please select an option: 2
Please enter the IV used for encryption (hex): ...
Please enter the encrypted data (hex): ...
Decrypted data: Hello, World!
```

## Configuration

The encryption key is generated dynamically each time the program is run. If you need a persistent key, modify the `config.js` file to set a fixed key.

## Contributing

If you would like to contribute to CipherCLI, please fork the repository, make your changes, and submit a pull request. 

## License

This project is licensed under the MIT License.

## Contact

For any questions or support, please contact us at: [support@jmmentertainment.com](mailto:support@jmmentertainment.com)

const readline = require('readline');
const { encrypt, decrypt } = require('./encryption');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
    console.log('1: Encrypt a message');
    console.log('2: Decrypt a message');
    
    const choice = await askQuestion('Please select an option: ');

    if (choice === '1') {
        const text = await askQuestion('Please enter the message to encrypt: ');
        const encrypted = encrypt(text);
        console.log('Encrypted data:', encrypted);
    } else if (choice === '2') {
        const iv = await askQuestion('Please enter the IV used for encryption (hex): ');
        const content = await askQuestion('Please enter the encrypted data (hex): ');
        try {
            const decrypted = decrypt({ iv, content });
            console.log('Decrypted data:', decrypted);
        } catch (error) {
            console.error('Failed to decrypt data:', error.message);
        }
    } else {
        console.log('Invalid option');
    }

    rl.close();
}

main();
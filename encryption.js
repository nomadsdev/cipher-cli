const crypto = require('crypto');
const { getEncryptionKey } = require('./config');

const algorithm = 'aes-256-cbc';

function encrypt(text) {
    const key = getEncryptionKey();
    const iv = crypto.randomBytes(16);

    let cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');

    return {
        iv: iv.toString('hex'),
        content: encrypted
    };
}

function decrypt(encryptedData) {
    const key = getEncryptionKey();
    const iv = Buffer.from(encryptedData.iv, 'hex');
    const encryptedText = Buffer.from(encryptedData.content, 'hex');

    let decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    decrypted += decipher.final('utf8');

    return decrypted;
}

module.exports = {
    encrypt,
    decrypt
};
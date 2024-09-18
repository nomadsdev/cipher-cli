const crypto = require('crypto');

const ENCRYPTION_KEY = crypto.randomBytes(32);

function getEncryptionKey() {
    return ENCRYPTION_KEY;
}

module.exports = {
    getEncryptionKey
};
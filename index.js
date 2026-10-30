const crypto = require("crypto");

// Character set for password generation
const characters =
    "abcdefghijklmnopqrstuvwxyz" +
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
    "0123456789" +
    "!@#$%^&*()_+-=[]{}";

// Main password generator function
function generatePassword(length = 12) {

    if (!Number.isInteger(length) || length < 8) {
        throw new Error("Password length must be an integer of at least 8.");
    }

    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = crypto.randomInt(characters.length);
        password += characters[randomIndex];
    }

    return password;
}

// Export function so other projects can use it
module.exports = {
    generatePassword
};

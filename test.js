const { generatePassword } = require("./index");

console.log("================================");
console.log("PASSWORD SCRAMBLER - TEST");
console.log("================================");

// Test 1: Default password length
const password1 = generatePassword();

console.log("\nTest 1: Default Password");
console.log("Password:", password1);
console.log("Length:", password1.length);

// Test 2: Custom password length
const password2 = generatePassword(16);

console.log("\nTest 2: Custom Password");
console.log("Password:", password2);
console.log("Length:", password2.length);

// Test 3: Password length validation
console.log("\nTest 3: Invalid Password Length");

try {
    generatePassword(5);
} catch (error) {
    console.log("Error:", error.message);
}

console.log("\n================================");
console.log("TEST COMPLETED");
console.log("================================");

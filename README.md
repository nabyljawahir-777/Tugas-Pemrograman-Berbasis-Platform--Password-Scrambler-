# Simple Password Scrambler

A simple and secure random password generator built with Node.js.

## Features

- Generate random passwords.
- Customizable password length.
- Supports uppercase and lowercase letters.
- Supports numbers and special characters.
- Uses Node.js crypto module for random generation.
- No external dependencies required.

## Installation

Install the package using npm:

```bash
npm install simple-password-scrambler-bylll
```

## Usage

Import the package:

```javascript
const { generatePassword } = require("simple-password-scrambler-bylll");
```

Generate a default password (12 characters):

```javascript
const password = generatePassword();

console.log(password);
```

Generate a custom-length password:

```javascript
const password = generatePassword(16);

console.log(password);
```

## Error Handling

Password length must be an integer of at least 8.

```javascript
generatePassword(5);
```

## License

MIT License.

//What is Encrypt?
//"encrypt" refers to the process of converting plain text data into a secure format that can only be read by someone who has the correct decryption key.
//encryption can be achieved using various libraries, with crypto being the built-in module for this purpose.

//What is bcrypt?
//bcrypt is a password hashing function specifically designed to securely hash passwords.
//Hashing is different from encryption in that it is a one-way process, meaning you cannot reverse it back to the original data.bcrypt is widely used for securely storing passwords in a database.

// example:
// const bcrypt = require('bcrypt');
// const saltRounds = 10;
// const password = 'mySecretPassword';

// // Hashing the password
// bcrypt.hash(password, saltRounds, (err, hash) => {
//   if (err) throw err;
//   console.log('Hashed password:', hash);

//   // Comparing the password with the hash
//   bcrypt.compare(password, hash, (err, result) => {
//     if (err) throw err;
//     console.log('Password match:', result);
//   });
// });

//JWT token
// It is commonly used for authentication and information exchange in web applications.
// Structure of a JWT
// A JWT consists of three parts, separated by dots (.):

// Header
// Payload
// Signature

//Generating a JWT
const jwt = require('jsonwebtoken');

// Define a payload (data to encode in the token)
const payload = {
  userId: 123,
  username: 'johndoe',
  role: 'admin'
};

// Secret key (you should keep this secret in a secure place, such as environment variables)
// const secretKey = 'your-secret-key';

// Generate a token
const token = jwt.sign(payload, secretKey, { expiresIn: '1h' }); // Token expires in 1 hour

console.log('Generated JWT:', token);

//Verifying a JWT
const jwt = require('jsonwebtoken');

// The token you want to verify (usually from a request header)
// const token = 'the-token-received-from-client';

// Secret key (must be the same one used to sign the token)
// const secretKey = 'your-secret-key';

jwt.verify(token, secretKey, (err, decoded) => {
  if (err) {
    console.error('Token verification failed:', err.message);
    return;
  }

  console.log('Decoded payload:', decoded);
  // Use the decoded payload for authentication/authorization purposes
});

//Decoding a JWT without Verification

const jwt = require('jsonwebtoken');

// The token you want to decode
// const token = 'the-token-received-from-client';

const decoded = jwt.decode(token);

console.log('Decoded payload:', decoded);

//Authentication
//Authentication is the process of verifying the identity of a user or system. In a web application, this usually involves checking a user's credentials (like a username and password) to ensure they are who they claim to be.

//Authorization
//Authorization is the process of determining whether a user has the right to access a specific resource or perform a particular action. It happens after authentication and is about permissions and access control.



//What is Encrypt?
//"encrypt" refers to the process of converting plain text data into a secure format that can only be read by someone who has the correct decryption key.
//encryption can be achieved using various libraries, with crypto being the built-in module for this purpose.

// What is bcrypt?
// bcrypt is a password hashing function specifically designed to securely hash passwords.
//Hashing is different from encryption in that it is a one-way process, meaning you cannot reverse it back to the original da ta.bcrypt is widely used for securely storing passwords in a database.

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

// JWT token
// It is commonly used for authentication and information exchange in web applications.
// Structure of a JWT
// A JWT consists of three parts, separated by dots (.):

// Header
// Payload
// Signature

//Generating a JWT
const jwt = require("jsonwebtoken");

// Define a payload (data to encode in the token)
const payload = {
  userId: 123,
  username: "johndoe",
  role: "admin",
};

// Secret key (you should keep this secret in a secure place, such as environment variables)
// const secretKey = 'your-secret-key';

// Generate a token
const token = jwt.sign(payload, secretKey, { expiresIn: "1h" }); // Token expires in 1 hour

console.log("Generated JWT:", token);

// Verifying a JWT
const jwt = require("jsonwebtoken");

// The token you want to verify (usually from a request header)
// const token = 'the-token-received-from-client';

// Secret key (must be the same one used to sign the token)
// const secretKey = 'your-secret-key';

jwt.verify(token, secretKey, (err, decoded) => {
  if (err) {
    console.error("Token verification failed:", err.message);
    return;
  }

  console.log("Decoded payload:", decoded);
  // Use the decoded payload for authentication/authorization purposes
});

//Decoding a JWT without Verification

const jwt = require("jsonwebtoken");

// The token you want to decode
// const token = 'the-token-received-from-client';

const decoded = jwt.decode(token);

console.log("Decoded payload:", decoded);

//Authentication
//Authentication is the process of verifying the identity of a user or system. In a web application, this usually involves checking a user's credentials (like a username and password) to ensure they are who they claim to be.

//Authorization
//Authorization is the process of determining whether a user has the right to access a specific resource or perform a particular action. It happens after authentication and is about permissions and access control.

//File System in node.Js
// In Node.js, the File System (fs) module allows you to work with the file system on your computer. It provides methods for interacting with files and directories, such as reading, writing, creating, deleting, and renaming files.

// To use the file system module, you need to import it using:
// const fs = require('fs');

// Reading a File:
// Synchronously:
// const data = fs.readFileSync('file.txt', 'utf8');
// console.log(data);
// Asynchronously:
// fs.readFile('file.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Writing to a File:
// Synchronously:
// fs.writeFileSync('file.txt', 'Hello World!');
// Asynchronously:
// fs.writeFile('file.txt', 'Hello World!', (err) => {
//   if (err) throw err;
//   console.log('File has been written!');
// });

// Appending to a File:
// Asynchronously:
// fs.appendFile('file.txt', 'Appended content', (err) => {
//   if (err) throw err;
//   console.log('Content appended!');
// });

// Deleting a File:
// Asynchronously:
// fs.unlink('file.txt', (err) => {
//   if (err) throw err;
//   console.log('File deleted!');
// });

// Renaming a File:
// Asynchronously:
// fs.rename('oldname.txt', 'newname.txt', (err) => {
//   if (err) throw err;
//   console.log('File renamed!');
// });

//Buffer Class
// In Node.js, the Buffer class is used to handle binary data directly. Since JavaScript (the language of Node.js) was originally designed to handle strings and not binary data, the Buffer class was introduced to work with raw data (bytes). Buffers are useful when you deal with file I/O, streams, or binary data such as images, videos, and network protocols.
// eg:const fs = require('fs');

// Read the file asynchronously as a buffer
// fs.readFile('file.txt', (err, data) => {
//   if (err) throw err;

// 'data' is a Buffer object
//   console.log(data);           // Outputs the file content as a Buffer
//   console.log(data.toString()); // Outputs the file content as a string
// });

//What is Stream?
// Why Use Streams?
// Streams allow Node.js to process data asynchronously and incrementally, which helps in saving memory and improving performance. For example, when you work with large files or data sources, instead of loading the entire file into memory, you can read it in small parts (chunks) and process it bit by bit.
// 1. Readable Stream Example (Reading from a File)
// const fs = require('fs');
// Create a readable stream from a file
// const readableStream = fs.createReadStream('largefile.txt', 'utf8');
// Listen to 'data' event to receive chunks of data
// readableStream.on('data', (chunk) => {
//   console.log('New chunk received:', chunk);
// });
// Listen to 'end' event to know when the file has been completely read
// readableStream.on('end', () => {
//   console.log('File reading complete.');
// });
// In this example:
// We create a readable stream using fs.createReadStream().
// The data event is triggered each time a chunk of data is read from the file.
// The end event signals that there’s no more data to be read.

// 2. Writable Stream Example (Writing to a File)
// const fs = require('fs');
// Create a writable stream
// const writableStream = fs.createWriteStream('output.txt');
// Write some data to the file
// writableStream.write('Hello, ');
// writableStream.write('World!');
// Mark the end of the writing process
// writableStream.end();
// Listen to 'finish' event when writing is done
// writableStream.on('finish', () => {
//   console.log('File writing complete.');
// });
// In this example:
// We create a writable stream using fs.createWriteStream().
// The write() method adds chunks of data to the file.
// The finish event is triggered when all data has been written.

// 3. Pipe Example (Connecting Readable and Writable Streams)
// A common pattern in Node.js is using pipe() to connect a readable stream to a writable stream. This is especially useful for copying data from one place to another.
// const fs = require('fs');
// Create a readable stream from a file
// const readableStream = fs.createReadStream('input.txt');
// Create a writable stream to a file
// const writableStream = fs.createWriteStream('output.txt');
// Pipe the data from the readable stream to the writable stream
// readableStream.pipe(writableStream);
// In this example:
// We use pipe() to send the data from the readable stream (input.txt) directly to the writable stream (output.txt).
// This is an efficient way to copy data without loading the entire file into memory.

//Cluster - Cluster is used to make the application scalable,basically,javacsipt run in singlethread for making it multithread we are using clusters and it  can create child processes that share same server  port., enabling your Node.js application to take advantage of multi-core systems.By distributing the workload across multiple worker processes.

// const cluster = require('cluster');
// const http = require('http');
// const numCPUs = require('os').cpus().length;

// if (cluster.isMaster) {
//   console.log(`Master ${process.pid} is running`);

// Fork worker processes
//   for (let i = 0; i < numCPUs; i++){
//     cluster.fork();
//   }

//   cluster.on('exit', (worker, code, signal) => {
//     console.log(`Worker ${worker.process.pid} died`);
//   });
// } else {
// Worker process, run your Node.js application here
//   http.createServer((req, res) => {
//     res.writeHead(200);
//     res.end('Hello, World!\n');
//   }).listen(8000);

//   console.log(`Worker ${process.pid} started`);
// }

//What is worker thread?
// Worker Threads allow you to perform tasks concurrently, taking full advantage of multi-core systems for   CPU-bound operations like:
// Complex calculations
// Image processing
// Large data transformations
// Encryption or compression

//What is node.js
//powerfull javascript frame work
//developed chrome v8 javascript engine
//used for creating server side web application

//benifits of using node.Js
//open source
//simple @ fast
//asynchronous
//high scalability
//single thread
//no buffering
//cross platform(windows,linux,ubunt etc..)

//Api functions
//1.Asynchronous-nonblocking functions
//2.synchronous-blocking functions

//package.json
//it the heart of the entire application
//That contains metadata about the project where we define the properties of a package.

//Stubs
//Using stubs in Node.js makes your tests more predictable, faster, and focused on the specific part of the system you are testing.

//assert
//provide feedback only when any of the running test cases fails.

//process.nextTick() & setImmediate()
//Both functons of the Timers module which help in executing the code after a predefined period.

//How Nodejs handel the child threads?
//Nodejs is single threaded process and doesnot expose the child threads or thread management methods.
//you still use the child threads using spawn for some asynchronous operation.
//also you can use module called ChildProcess explicity.

//Modules
//modules are reusable block of code whose existance doesnot impact other code in any way.

//require()
//it is used to include modules from external files in node js.

// payment gatewat integration
// Integrating a payment gateway in a Node.js application involves connecting to a service that allows you to process payments securely. Some popular payment gateways include Stripe, PayPal, Square, and Razorpay. Each gateway provides its own API and SDKs to integrate payment functionality, such as accepting credit card payments, digital wallets, or bank transfers.

//opps concept

//A CI/CD pipeline (Continuous Integration and Continuous Deployment) is an automated workflow that helps developers continuously integrate code changes, test them, and deploy the application efficiently. It typically has several stages:

// Continuous Integration (CI): Every code change is automatically built and tested. This includes steps like:

// Building: Compiling code to ensure it works.
// Testing: Running unit, integration, or other tests to catch issues early.
// Merging: Integrating code changes with the main codebase.
// Continuous Deployment/Delivery (CD): Code that passes the tests is automatically deployed to production (Continuous Deployment) or prepared for manual release (Continuous Delivery). This step often includes:

// Staging: Testing in a production-like environment.
// Deployment: Releasing the code to production.
// A CI/CD pipeline enables faster, safer releases by automating testing and deployment, helping teams quickly deliver updates to users.

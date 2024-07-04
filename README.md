# Cookie Handling in Node.js with Express

This project demonstrates how to set and read cookies using Node.js with the Express framework and the `cookie-parser` middleware.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have Node.js and npm installed on your machine.

## Installation

To install the necessary npm packages, run the following command in your project directory:

```bash
npm install express cookie-parser

Running the Server
To run the server, use the following command:
node app.js

Setting a Cookie
When you visit the root URL (http://localhost:3000/), a cookie named name with the value Asad Ullah will be set.

Reading the Cookie
When you visit the /readdata URL (http://localhost:3000/readdata), the server will log the cookies sent by the client to the console and respond with "read data".

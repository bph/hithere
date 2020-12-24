#!/usr/bin/env node

console.log(`Hi there.`);


const dirName = process.argv[2];
const execa = require('execa');
execa(`mkdir`,[ `-p`, dirName]);
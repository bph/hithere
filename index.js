#!/usr/bin/env node

console.log(`Hi there.`);

//const { spawn } = require('child_process');
//const lsCommand = spawn('ls');
// console.log(lsCommand);
// we would want to the data from the child process
// printed on screen. 
//lsCommand.stdout.on('data',(data) => {
  //  console.log(`Data from child process: \n${data}`)
//});

//Now we want to create a directory so we need to execute a child process
const { exec } = require('child_process');

//exec('"/path/to/test file/test.sh" arg1 arg2'); <- documentation

//exec('mkdir utils'); <- now this hard codes the directory name, which we might now want. 
// let's use a variable name

const cb = (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
};

const dirName = process.argv[2];

exec(`mkdir -p ${dirName}`,cb);
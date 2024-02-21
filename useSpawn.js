/**
 * Open a terminala. Run the following commands in each terminal:
 * node useSpawn.js
 */
const { spawn } = require('child_process');

const child = spawn('find', ['.']);

child.stdout.on('data', (data) => {
  // wait for 5 seconds
  console.log(`stdout:\n${data}`);
})

child.stderr.on('data', (data) => {
  console.error(`stderr:\n${data}`);
})

child.on('error', (error) => {
  console.error(`error: ${error.message}`);
});


child.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
})
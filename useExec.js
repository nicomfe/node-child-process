/**
 * Open a terminala. Run the following commands in each terminal:
 * node useExec.js
 */
const { exec } = require('child_process');

exec('ls -lh', (err, stdout, stderr) => {
  if (err) {
    console.error(err.message);
    return;
  }

  if(stderr) {
    console.error(stderr);
    return;
  }

  console.log(`stdout:\n${stdout}`);
});
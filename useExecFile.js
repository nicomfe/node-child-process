const { execFile } = require('child_process')

execFile(`${__dirname}/processNodejsImage.sh`, (err, stdout, stderr) => {
  if (err) {
    console.error(err.message)
    return
  }

  if (stderr) {
    console.error(stderr)
    return
  }

  console.log(`stdout:\n${stdout}`)
})
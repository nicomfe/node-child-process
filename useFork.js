/**
 * Open 3 terminals. Run the following commands in each terminal:
 * 1. node useFork.js
 * 2. curl http://localhost:8000/slow
 * 3. curl http://localhost:8000/fast
 */
const { fork } = require('child_process')
const http = require('http')
const host = 'localhost'
const port = 8000

const requestListener = (req, res) => {
  let message
  if(req.url === '/slow') {
    const child = fork(`${__dirname}/getCount`)
    child.send('START')
    child.on('message', (message) => {
      res.setHeader('Content-Type', 'application/json')
      res.writeHead(200)
      return res.end(JSON.stringify(message))
    })
  } else if(req.url === '/fast') {
    console.log('Handling fast request')
    message = JSON.stringify({ message: 'This is a fast request' })
    res.setHeader('Content-Type', 'application/json')
    res.writeHead(200)
    res.end(message)
  }
}

const httpServer = http.createServer(requestListener)

httpServer.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`)
})

const slowFunction = () => {
  let counter = 0
  for (let i = 0; i < 5e9; i++) {
    counter++
  }
  return counter
}
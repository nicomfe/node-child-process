const slowFunction = () => {
  let counter = 0
  for (let i = 0; i < 5e9; i++) {
    counter++
  }
  return counter
}

process.on('message', (message) => {
  if(message === 'START') {
    console.log('Handling slow request')
    const slowResult = slowFunction()
    process.send({ totalCount: slowResult })
  }
})
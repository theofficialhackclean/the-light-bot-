const fetch = require('node-fetch')

setInterval(async () => {
  await fetch( ).then(console.log('Pinged!'))
}, 240000)
const express = require('express')
const app = express()

const port = 3000

app.get('/element-name/:element', (req, res) => {
  
})

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})
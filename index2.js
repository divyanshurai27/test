const express = require('express')
const app = express()
const port = 3002


app.post('/conversations', (req, res) => {
  console.log(req.headers)
  res.send('Hello World!!!!!!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`) 
})
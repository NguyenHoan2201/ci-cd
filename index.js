const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({
    msg: 'this is the time when server serve this request',
    time: new Date(),
    serveBy: 'Nodejs'
  })
})

app.listen(3000, () => console.log('server listening on port 3000'));
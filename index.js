const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send('Bienvenidxs a DW4')
})

app.get('/test', function (req, res) {
  res.send('Esto es un Test');
});

app.listen(PORT, () => {
  console.log(`Estamos en el puerto ${PORT}`)
})
const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('I bought this domain! ~jojomango99');
});

app.listen(PORT, () => console.log(`Hello world app listening on port ${PORT}!`))
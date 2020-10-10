const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('I bought this domain! ~jojomango99');
});

app.get('/times', (req, res) => res.send(showTimes()))

const showTimes() {
  let result = '';
  const times = process.env.TIMES || 5;
  for (i = 0; i < times; i++) {
    result += i + ' ';
  }
  return result;
}

app.listen(PORT, () => console.log(`Hello world app listening on port ${PORT}!`))
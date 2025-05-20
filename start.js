const express = require('express');
const app = express();

// ⚠️ Vulnerabilidad: Inyección de HTML (XSS)
app.get('/greet', (req, res) => {
  const name = req.query.name;
  res.send(`<h1>Hello, ${name}!</h1>`);
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});

const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.json({ message: "Backend working!" });
});
app.listen(5000, () => console.log('Backend on port 5000'));
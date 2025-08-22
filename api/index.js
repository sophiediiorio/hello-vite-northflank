const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Simple Hello World endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.listen(port, () => {
  console.log(`🚀 API running on port ${port}`);
});

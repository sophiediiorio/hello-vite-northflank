const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (_, res) => res.json({ message: 'Hello World' }));

app.listen(port, () => {
  console.log(`🚀 API running on port ${port}`);
});

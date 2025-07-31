const express = require('express');
const app = express();

app.get('/', (req, res) => res.send("Hello from Node.js Express server!"));
app.listen(3000, () => console.log("Node server running on port 3000"));

app.get('/greet', (req, res) => res.send("Hello Teju!"));
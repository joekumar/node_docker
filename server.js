'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World. Testing minikube new version. Repeating the process now....');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
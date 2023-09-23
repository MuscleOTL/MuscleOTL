const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

// pre-built middleware
app.use('/bundle', express.static(path.join(__dirname, '../bundle')));
app.use(express.json());
app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

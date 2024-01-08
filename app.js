const express = require('express');
const app = express();

const path = require('path');
const PORT = process.env.PORT || 3500;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/Dashboard/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'Dashboard', 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


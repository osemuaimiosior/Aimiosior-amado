const express = require('express');
const app = express();

const path = require('path');
const PORT = process.env.PORT || 3500;

app.get('^/$|/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/Dashboard/dashBoardIndex.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'Dashboard', 'dashBoardIndex.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


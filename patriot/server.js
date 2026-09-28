const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Раздаём статику из папки public
app.use(express.static(path.join(__dirname, 'public')));

// Все маршруты ведут на index.html (SPA-friendly)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🎮 Лоев: Путешествие во времени запущен на порту ${PORT}`);
});
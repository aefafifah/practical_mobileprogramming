const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/api/users', (req, res) => {
    console.log('Data diterima:', req.body);
    res.json({ message: 'Data berhasil diterima!', data: req.body });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

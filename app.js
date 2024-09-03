const express = require('express');
const path = require('path')
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use('/', require('./routes/dashboard'));

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
});
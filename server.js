const path = require('path');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const app = express();

app.use(cors());
app.use(cookieParser());
app.use(helmet());
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.render('index.ejs');
})

app.get('*', (req, res) => {
    res.status(404).send('404, Page not found')
})

module.exports = app;
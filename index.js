const app = require('./server');
const port = process.env.PORT || 8080;
const ip = process.env.IP || '0.0.0.0';

app.listen(port, ip, () => {
    console.log('Express is up');
})
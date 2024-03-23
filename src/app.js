const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const accountRoutes = require('./routes/accountRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
}));

app.use('/account', accountRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

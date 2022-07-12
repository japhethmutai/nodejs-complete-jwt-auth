const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const { logger } = require('./middleware/logEvents');
const errorhandler = require('./middleware/errorhandler');
const PORT = process.env.PORT || 5000;

// custom middleware logger
app.use(logger);


app.use(cors(corsOptions));

// built-in middleware to handle urlencoded data form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

// server static files
app.use('/', express.static(path.join(__dirname, '/public')));

// routes 
app.use('/', require('./routes/root'));
app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));
app.use('/employees', require('./routes/api/employees'));

app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    }else if (req.accepts('json')) {
        res.json({ error: "404 Not Found" });
    } else {
        res.type('txt').send("404 Not Found");
    }
});

app.use(errorhandler)

// node fn for creating random crypto: require('crypto').randomBytes(64).toString('hex')

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
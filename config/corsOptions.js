// Cross Origin Resource Sharing
const whitelist = [
    'https://www.google.com', 
    'http://127.0.0.1:3000', 
    'http://127.0.0.1:5000'
];

const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Access blocked by CORS'));
        }
    },
    OptionsSuccessStatus: 200,
}

module.exports = corsOptions;
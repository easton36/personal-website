const uWebSockets = require('uWebSockets.js');
const { serveDir } = require('uwebsocket-serve');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv');

//db connection
mongoose.connect(`mongodb://127.0.0.1:27017/personal-website`, { useNewUrlParser: true, useUnifiedTopology: true });

const { open, message, close } = require('./ws/ws.manager');

const app = uWebSockets.App();

app.ws('/*', {
    open,
    close,
    message
});

//serve react website
app.get('/*', serveDir(path.join(__dirname, '../app/build')));

app.listen(process.env.PORT || 8080, (listening)=>{
    if(listening){
        console.log('Listening on port ', process.env.PORT || 8080);
    }
});
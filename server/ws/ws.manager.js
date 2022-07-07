const { v4: uuid } = require('uuid');

const { fetchWhiteboard, drawWhiteboard } = require('./methods/whiteboard.methods');
const { fetchLivechat, sendMessage } = require('./methods/livechat.methods');

const clients = new Map();

exports.open = (ws)=>{
    try{
        let id = uuid();
        clients.set(id, ws);
        ws.id = id;
    
        console.log(`Client connected: ${id}`);
    } catch(err){
        console.log(err);
    }
};

exports.message = (ws, message, isBinary) => {
    try{
        let enc = new TextDecoder("utf-8");
        let decodedMessage = JSON.parse(enc.decode(message));
    
        switch(decodedMessage.message){
            case 'whiteboard.fetch':
                fetchWhiteboard(ws, decodedMessage.payload, isBinary);
                break;
            case 'whiteboard.draw':
                drawWhiteboard(ws, decodedMessage.payload, isBinary);
                break;
            case 'livechat.fetch':
                fetchLivechat(ws, decodedMessage.payload, isBinary);
                break;
            case 'livechat.message':
                sendMessage(ws, decodedMessage.payload, isBinary);
                break;
        }
    } catch(err){
        console.log(err);
    }
};

exports.close = (ws, code, message) => {
    try{
        let id = ws.id;
        clients.delete(id);
    
        console.log(`Client disconnected: ${id}`);
    } catch(err){
        console.log(err);
    }
};
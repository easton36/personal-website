const { Messages } = require('../../db/Schemas');

exports.fetchLivechat = async (ws, payload, isBinary) => {
    try{
        ws.subscribe('livechat');

        let messages = await Messages.find({}).sort({$natural:1}).limit(25);

        ws.send(JSON.stringify({ message: 'livechat.fetch', payload: {messages, uuid: ws.id} }));
    } catch(err){
        console.log(err);
    }
};

exports.sendMessage = async (ws, payload, isBinary) => {
    try{
        let message = payload.message;
        let name = payload.name;
        if(!message || !name) return;

        let newMessage = {
            message,
            user: {
                id: ws.id,
                name: name
            },
            timestamp: Date.now()
        };

        await new Messages(newMessage).save();

        return ws.publish('livechat', JSON.stringify({ message: 'livechat.message', payload: { message: newMessage} }));
    } catch(err){
        console.log(err);
    }
};
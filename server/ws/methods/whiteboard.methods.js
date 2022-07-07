const MAX_LINES = 10000;

var lines = [];

exports.fetchWhiteboard = (ws, payload, isBinary) => {
    ws.subscribe('whiteboard');

    ws.send(JSON.stringify({ message: 'whiteboard.draw', payload: {lines} }));
};

exports.drawWhiteboard = (ws, payload, isBinary) => {
    try{
        let line = payload.line;
        if(!line) return;

        let newLines = lines.slice(lines.length - MAX_LINES < 0 ? 0 : lines.length - MAX_LINES, lines.length);

        newLines.push(line);
        
        lines = newLines;

        return ws.publish('whiteboard', JSON.stringify({ message: 'whiteboard.draw', payload: {lines} }));
    } catch(err){
        console.log(err);
    }
};
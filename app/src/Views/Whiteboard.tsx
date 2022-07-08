import React, { createRef, useLayoutEffect, useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { toast } from 'react-toastify';
import useWebSocket from 'react-use-websocket';

import { WS_URL } from '../config/data';

interface Line{
    x: number;
    y: number;
    color: string;
}

const COLORS = [
    'black',
    'red',
    'green',
    'blue',
    'yellow',
    'orange',
    'purple',
];

const Whiteboard: React.FC = () => {
    const canvas = createRef<HTMLCanvasElement>();

    const [isDrawing, setIsDrawing] = useState(false);
    const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>();
    const [lines, setLines] = useState<Line[]>([]);

    const [selectedColor, setSelectedColor] = useState('black');

    const { sendMessage: wsEmit } = useWebSocket(WS_URL, {
        onOpen: () => {
            console.log('Websocket connection established');

            wsEmit(JSON.stringify({ message: 'whiteboard.fetch' }));
        },
        onClose: ()=>{
            console.log('Websocket connection closed');
        },
        onMessage: (event: WebSocketEventMap['message']) => {
            const parsedMessage = JSON.parse(event.data);
            
            switch(parsedMessage.message){
                case 'whiteboard.draw':
                    pushLines(parsedMessage.payload.lines);
                    break;
                case 'whiteboard.clear':
                    clear();
                    break;
            }
        },
    });

    const pushLines = (lines: Line[]) => {
        setLines(lines);
    };

    const draw = (e: React.MouseEvent) => {
        if(!isDrawing) return;
        if(!ctx) return;

        let newLine: Line = {
            x: e.clientX,
            y: e.clientY - 101,
            color: selectedColor,
        };

        wsEmit(JSON.stringify({ message: 'whiteboard.draw', payload: {line: newLine}}));

        setLines(old => {
            let newLines = old.slice(old.length - 10000 < 0 ? 0 : old.length - 10000, old.length);
            newLines.push(newLine);

            return newLines;
        });
    };

    const startDrawing = (e: React.MouseEvent) => {
        setIsDrawing(true);
        draw(e);
    };
    const stopDrawing = () => {
        if(!ctx) return;

        setIsDrawing(false);
    };

    const clear = () => {
        if(!canvas?.current) return;
        if(!ctx) return;

        ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);

        //fill canvas with white
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, canvas.current.width, canvas.current.height);

        setLines([]);
    };

    useLayoutEffect(() => {
        if(!canvas?.current) return;

        setCtx(canvas.current.getContext('2d'));
        if(!ctx) return;

        //resize canvas
        canvas.current.height = window.innerHeight - 101;
        canvas.current.width = window.innerWidth;

        //fill canvas with white
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, canvas.current.width, canvas.current.height);

        //draw lines
        lines.forEach(({ x, y, color }) => {
            //ctx.lineColor = selectedColor;
            ctx.lineWidth = 7.5;
            ctx.lineCap = 'round';
            ctx.strokeStyle = color;

            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x, y);
            ctx.stroke();
        });
    }, [canvas, ctx, lines]);

    return (
        <Flex {...styles.container} overflow="hidden">
            <Box {...styles.innerContainer}>
                <canvas 
                    id="canvas"
                    ref={canvas} 
                    onMouseDown={startDrawing}
                    onMouseUp={stopDrawing} 
                    onMouseMove={draw}
                />
            </Box>
            <Flex {...styles.colorPicker} position="absolute">
                {COLORS.map((color: string, index: number) => (
                    <Box {...styles.colorToPick} key={index} backgroundColor={color} onClick={()=>{
                        setSelectedColor(color);
                    }} style={{ borderColor: selectedColor === color ? 'white' : '#3C3C3C' }}/>
                ))}
            </Flex>
        </Flex>
    )
};

const styles = {
    container: {
        width: '100%',
        justifyContent: 'center',
    },
    innerContainer: {
        flexGrow: 1,
    },
    colorPicker: {
        backgroundColor: 'backgroundDark',
        bottom: '20px',
        zIndex: 2,
        borderRadius: '6px',
        padding: '5px',
    },
    colorToPick: {
        width: '40px',
        height: '40px',
        borderRadius: '100%',
        borderWidth: '3px',
        borderStyle: 'solid',
        borderColor: 'backgroundLight',
        cursor: 'pointer',
        margin: '5px',
    }
};

export default Whiteboard;
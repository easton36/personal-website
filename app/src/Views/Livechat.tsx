import React, { useState, useEffect, useCallback, createRef } from "react";
import { Flex, Text, Input, InputGroup, InputRightElement, Button, useDisclosure, 
    FormControl, FormLabel,
    ModalOverlay, ModalContent, ModalBody, Modal, ModalFooter, ModalHeader 
} from "@chakra-ui/react";
import { toast } from "react-toastify";
import useWebSocket from 'react-use-websocket';

import { WS_URL } from '../config/data';

interface Message{
    message: string;
    user: {
        uuid: string;
        name: string;
    },
    timestamp: number;
}

const Livechat: React.FC = () => {
    const chatContainer = createRef<HTMLDivElement>();

    const [uuid, setUuid] = useState<string>('');
    const [name, setName] = useState<string>("");
    const [nameInput, setNameInput] = useState<string>("");
    const [messages, setMessages] = useState<Message[]>([]);
    const [message, setMessage] = useState<string>("");

    const { isOpen, onOpen, onClose } = useDisclosure();

    const { sendMessage: wsEmit } = useWebSocket(WS_URL, {
        onOpen: () => {
            toast.info('Websocket connection established');

            wsEmit(JSON.stringify({ message: 'livechat.fetch'}));
        },
        onClose: ()=>{
            toast.error('Websocket connection closed');
        },
        onMessage: (event: WebSocketEventMap['message']) => {
            const parsedMessage = JSON.parse(event.data);

            switch(parsedMessage.message){
                case 'livechat.fetch':
                    console.log(parsedMessage.payload);
                    setMessages(parsedMessage.payload.messages);
                    setUuid(parsedMessage.payload.uuid);
                    console.log(uuid);

                    break;
                case 'livechat.message':
                    setMessages(old => ([...old, parsedMessage.payload.message]));
                    console.log('msg', parsedMessage.payload.message.user.uuid);
                    console.log('me', uuid);
                    break;
            }
        }
    });

    const sendMessage = useCallback(()=>{
        if(!message || message.length === 0) return;

        if(!name || name.length === 0){
            return toast.error("Please enter a name");
        }

        wsEmit(JSON.stringify({ message: 'livechat.message', payload: {message, name}}));

        setMessage("");
        setMessages(old => ([...old, {
            message, 
            user: {
                uuid, 
                name
            }, 
            timestamp: Date.now()
        }]));
    }, [message, name, wsEmit, uuid]);

    useEffect(() => {
        if(!name || name.length === 0){
            onOpen();
        }
    }, [name, onOpen]);

    return (
        <>
            <Flex {...styles.container}>
                <Flex {...styles.innerContainer} direction="column">
                    <Flex {...styles.header}>
                        <Text {...styles.headerText}>Live Chat</Text>
                        <Text {...styles.nameText}>{name}</Text>
                    </Flex>
                    <Flex {...styles.chatContainer} overflowY="scroll" direction="column" ref={chatContainer}>
                        {messages.map((message: Message, index: number) => (
                            <Flex key={index} justifyContent={message.user.uuid === uuid ? 'flex-end' : 'flex-start'}>
                                <Flex {...styles.message} direction="column" maxWidth="100%">
                                    <Text {...styles.messageUser} textAlign={message.user.uuid === uuid ? 'right' : 'left'}>{message.user.name}</Text>
                                    <Text {...styles.messageText} overflowWrap="break-word">{message.message}</Text>
                                </Flex>
                            </Flex>
                        ))}
                    </Flex>
                    <Flex {...styles.inputContainer}>
                        <InputGroup>
                            <Input {...styles.input} 
                                placeholder="Start typing your message..." 
                                value={message} 
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                            />
                            <InputRightElement {...styles.sendButtonContainer} onClick={sendMessage}>
                                <Button {...styles.sendButton}>
                                    <Text {...styles.sendButtonText}>Send</Text>
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </Flex>
                </Flex>
            </Flex>

            <Modal
                isOpen={isOpen}
                onClose={onClose}
                blockScrollOnMount
                closeOnOverlayClick={false}
            >
                <ModalOverlay />
                <ModalContent backgroundColor="backgroundLight" color="text">
                    <ModalHeader>Set your chat name</ModalHeader>
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Chat name</FormLabel>
                            <Input placeholder='Chat name' value={nameInput} onChange={e => setNameInput(e.target.value)}/>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button backgroundColor="accent" color="text" onClick={()=>{
                            if(!nameInput || nameInput.length === 0){
                                return toast.error("Please enter a name");
                            }

                            setName(nameInput);
                            setNameInput("");
                            onClose();
                        }}>
                            Set name
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
};

const styles = {
    container: {
        width: '100%',
        height: 'calc(100vh - 100px)',
        justifyContent: 'center',
    },
    innerContainer: {
        maxWidth: '800px',
        grow: 1,
        paddingBottom: '10px'
    },
    header: {
        marginTop: '10px',
        borderColor: 'backgroundLight',
        borderWidth: '2px',
        borderStyle: 'solid',
        borderRadius: '6px',
        padding: '10px',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '5px'
    },
    headerText: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: 'text',
        marginLeft: '5px',
    },
    nameText: {
        fontSize: '18px',
        fontWeight: 'bold',
        color: 'accent',
        marginRight: '5px',
    },
    chatContainer: {
        grow: 1,
        justifyContent: 'flex-start',
        height: '100%',
        borderColor: 'backgroundLight',
        borderWidth: '2px',
        borderStyle: 'solid',
        borderRadius: '6px',
        padding: '10px',
        marginBottom: '5px'
    },
    message: {
        marginTop: '5px',
    },
    messageUser: {
        fontSize: '14px',
        fontWeight: 'bold',
        color: 'text',
    },
    messageText: {
        fontSize: '16px',
        color: 'text',
        backgroundColor: 'backgroundLight',
        padding: '5px',
        paddingLeft: '10px',
        paddingRight: '10px',
        borderRadius: '6px',
        marginTop: '3px',
    },
    inputContainer: {
        bottom: 0,
    },
    input: {
        color: 'text',
        padding: '10px',
        outline: 'none'
    },
    sendButtonContainer: {
        height: '100%',
        width: '75px',
    },
    sendButton: {
        height: '30px',
        width: '100%',
        marginRight: '5px',
        color: 'text',
        backgroundColor: 'accent',
        borderRadius: '6px',
        cursor: 'pointer',
    },
    sendButtonText: {
        fontWeight: 'bold',
        padding: '10px',
    }
};

export default Livechat;
import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

interface NotificationProps{
    title: string;
    description: string;
};

const Notification: React.FC<NotificationProps> = ({ title, description }: NotificationProps)=>{
    return (
        <Flex {...styles.container} direction="column">
            <Text {...styles.title}>{title}</Text>
            <Text {...styles.description}>{description}</Text>
        </Flex>
    )
};

const styles = {
    container: {
        width: {
            base: '95%',
            md: '100%',
        },
        borderLeftColor: 'backgroundLight',
        borderLeftWidth: '10px',
        backgroundColor: 'background',
        borderRadius: '6px',
        marginTop: '25px',
        padding: '15px',
    },
    title: {
        fontSize: '18px',
        fontWeight: 'bold',
        color: 'text',
    },
    description: {
        fontSize: '14px',
        color: 'text',
        marginTop: '5px',
    }
}

export default Notification;
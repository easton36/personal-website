import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Error404: React.FC = () => {

    return (
        <Flex {...styles.container}>
            <Flex {...styles.innerContainer} direction="column">
                <Text {...styles.text}>404 Error!</Text>
                <Text {...styles.subtext} textAlign="center">Seems like this page doesn't exist... want go to <Link to="/" style={{color: '#FF6B00'}}>home</Link>?</Text>
            </Flex>
        </Flex>
    )
};

const styles = {
    container: {
        width: '100%',
        alignItems: 'center',
    },
    innerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: {
            base: '95%',
            md: '100%',
        },
    },
    text: {
        fontSize: '48px',
        color: 'text',
        fontWeight: 'bold',
        marginTop: '50px',
    },
    subtext: {
        fontSize: '18px',
        color: 'text',
        marginTop: '10px',
    }
};

export default Error404;
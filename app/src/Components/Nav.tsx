import React from 'react';

import { Text, Flex } from "@chakra-ui/react";

const Nav = ()=>{

    return (
        <Flex {...styles.container}>
            <Flex {...styles.innerContainer}>
                <Text {...styles.headerText}>Easton</Text>
            </Flex>
        </Flex>
    )
};

/*
<Flex {...styles.buttonContainer}>
    <Flex {...styles.button}>
        <Text {...styles.button.text}>Github</Text>
    </Flex>
    <Flex {...styles.button} marginLeft={3}>
        <Text {...styles.button.text}>Telegram</Text>
    </Flex>
</Flex>*/

const styles = {
    container: {
        width: '100%',
        height: 100,
        backgroundColor: 'background',
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerContainer: {
        align: 'center',
        justify: 'flex-start',
        maxWidth: '800px',
        grow: 1,
    },
    headerText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'text',
        grow: 1,
        marginLeft: {
            base: '2.5%',
            md: '0',
        }
    },
    buttonContainer: {
        align: 'center',
        justify: 'flex-end',
        grow: 1,
        marginRight: {
            base: '2.5%',
            md: '0',
        }
    },
    button: {
        backgroundColor: 'backgroundLight',
        padding: '5px',
        paddingLeft: '15px',
        paddingRight: '15px',
        borderRadius: '6px',
        cursor: 'pointer',
        justify: 'center',
        align: 'center',
        text: {
            color: 'text',
            fontWeight: 'bold',
            fontSize: '18px'
        }
    }
}

export default Nav;
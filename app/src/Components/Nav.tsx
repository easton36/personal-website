import React from 'react';

import { Text, Flex } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const Nav: React.FC = ()=>{

    return (
        <Flex {...styles.container}>
            <Flex {...styles.innerContainer}>
                <Link to="/" style={{flexGrow: 1}}>
                    <Text {...styles.headerText}>Easton</Text>
                </Link>

                <Flex {...styles.buttonContainer}>
                    <Link to="/whiteboard">
                        <Flex {...styles.button} display={{
                            base: 'none',
                            md: 'flex',
                        }}>
                            <Text {...styles.button.text}>Whiteboard</Text>
                        </Flex>
                    </Link>

                    <Link to="/livechat">
                        <Flex {...styles.button} marginLeft={3}>
                            <Text {...styles.button.text}>Livechat</Text>
                        </Flex>
                    </Link>
                </Flex>
            </Flex>
        </Flex>
    )
};

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
        fontSize: {
            base: 32,
            md: 40,
        },
        fontWeight: 'bold',
        color: 'text',
        marginLeft: {
            base: '10px',
            md: '0',
        },
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
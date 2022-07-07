import React from "react";
import { Flex, Text, Link } from "@chakra-ui/react";

const Footer: React.FC = ()=>{
    return (
        <Flex {...styles.container}>
            <Text {...styles.text}>Made with ❤️ by <Link href="https://github.com/easton36" rel="noreferrer" target="_blank" {...styles.link} color="accent">Easton</Link></Text>
            <Link href="https://github.com/easton36/personal-website" rel="noreferrer" target="_blank" {...styles.link} color="accent">View Source</Link>
        </Flex>
    )
}

const styles = {
    container: {
        width: {
            base: '95%',
            md: '100%',
        },
        marginTop: '40px',
        marginBottom: '15px',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: '14px',
        color: 'backgroundLight',
    },
    link: {
        color: 'accent',
        fontSize: '14px',
    }
};

export default Footer;
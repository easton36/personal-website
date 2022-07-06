import React from "react";
import { Flex, Text } from "@chakra-ui/react";

interface Props {
    title: string;
}

const GroupTitle: React.FC<Props> = ({ title }: Props) => {

    return (
        <Flex {...styles.container}>
            <Text {...styles.title}>{title}</Text>
        </Flex>
    )
};

const styles = {
    container: {
        width: {
            base: '95%',
            md: '100%',
        },
        borderBottomColor: 'backgroundLight',
        borderBottomWidth: '1px',
        marginTop: '40px',
        marginBottom: '15px',
    },
    title: {
        fontSize: '28px',
        fontWeight: 'bold',
        color: 'text',
    }
}

export default GroupTitle;
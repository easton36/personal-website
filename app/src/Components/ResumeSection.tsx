import React from "react";
import { Flex, Text } from "@chakra-ui/react";

interface Props{
    title: string;
    items: ItemProps[];
};

interface ItemProps{
    title?: string;
    subtitle?: string;
    date?: string;
    description: string;
}

const ResumeSection: React.FC<Props> = ({ title, items }: Props)=>{

    return (
        <Flex {...styles.container}>
            <Text {...styles.title}>{title}</Text>

            <Flex {...styles.itemsContainer} direction="column">
                {items.map((item: ItemProps, index: number)=>(
                    <Flex {...styles.itemContainer} key={index} direction="column">
                        {item.title && (<Flex {...styles.titleContainer}>
                            <Text {...styles.item.title}>{item.title}</Text>
                            {item.date && <Text {...styles.item.date}>{item.date}</Text>}
                        </Flex>)}

                        {item.subtitle && (<Text {...styles.item.subtitle}>{item.subtitle}</Text>)}

                        <Text {...styles.item.description}>{item.description}</Text>
                    </Flex>
                ))}
            </Flex>
        </Flex>
    )
};

const styles = {
    container: {
        width: {
            base: '95%',
            md: '100%',
        }
    },
    title: {
        fontSize: '18px',
        fontWeight: 'bold',
        color: 'text',
        maxWidth: {
            base: '26%',
            md: '11.5%',
        },
        minWidth: {
            base: '26%',
            md: '11.5%',
        }
    },
    itemsContainer: {
        marginLeft: {
            base: '15px',
            md: '40px',
        }
    },
    itemContainer: {
        justifyContent: 'flex-start',
        borderBottomColor: 'backgroundLight',
        borderBottomWidth: '1px',
        paddingBottom: '15px',
        marginBottom: '15px',
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    item: {
        title: {
            fontSize: '16px',
            fontWeight: 'bold',
            color: 'text',
        },
        subtitle: {
            fontSize: '16px',
            color: 'text',
        },
        date: {
            fontSize: '14px',
            color: 'text',
        },
        description: {
            fontSize: '14px',
            color: 'text',
            marginTop: '5px',
        }
    }
};

export default ResumeSection;
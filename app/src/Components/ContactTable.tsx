import React from "react";
import { TableContainer, Table, Thead, Tbody, Tr, Th, Td, Link } from "@chakra-ui/react";

import { type ContactMethod, ContactMethods } from '../config/data';

const ContactTable: React.FC = ()=>{

    return (
        <TableContainer {...styles.container}>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th {...styles.title} textAlign="center" textTransform="none">Username</Th>
                        <Th {...styles.title} textAlign="center" textTransform="none">Platform</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {ContactMethods.map((method: ContactMethod, index: number)=>(
                        <Tr key={index}>
                            <Td {...styles.item} textAlign="center"><Link href={method.url} rel="noreferrer" target="_blank" {...styles.link}>{method.username}</Link></Td>
                            <Td {...styles.item} textAlign="center">{method.platform}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    )
};

const styles = {
    container: {
        width: {
            base: '95%',
            md: '65%',
        },
    },
    title: {
        fontSize: '18px',
        fontWeight: 'bold',
        color: 'text',
        borderBottomColor: 'backgroundLight',
    },
    link: {
        color: 'accent',
    },
    item: {
        fontSize: '16px',
        color: 'text',
        borderBottomColor: 'backgroundLight',
    }
};

export default ContactTable;
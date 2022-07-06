import React from "react";
import { Flex, Text } from "@chakra-ui/react";

import { type ResumeSkill, ResumeSkills } from "../config/data";

const ResumeSkillsSection: React.FC = ()=>{

    return (
        <Flex {...styles.container}>
            <Text {...styles.title}>Skills</Text>

            <Flex {...styles.itemsContainer} direction={{base: 'column', md: 'row'}}>
                {ResumeSkills.map((item: ResumeSkill, index: number)=>(
                    <Flex {...styles.itemContainer} key={index} direction="column">
                        <Text {...styles.item.title}>{item.category}</Text>

                        <Flex {...styles.skillsContainer} direction="column">
                            {item.skills.map((skill: string, index: number)=>(
                                <Text {...styles.item.skill} key={index}>{skill}</Text>
                            ))}
                        </Flex>
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
        },
        grow: 1,
        justifyContent: 'space-between',
        borderBottomColor: 'backgroundLight',
        borderBottomWidth: '1px',
        paddingBottom: '15px',
        alignItems: {
            base: 'center',
            md: 'flex-start',
        }
    },
    itemContainer: {
        justifyContent: 'flex-start',
        width: {
            base: '75%',
            md: 'none',
        },
        marginBottom: {
            base: '15px',
            md: '0px',
        }
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    skillsContainer: {

    },
    item: {
        title: {
            fontSize: '16px',
            fontWeight: 'bold',
            color: 'text',
        },
        skill: {
            fontSize: '14px',
            color: 'text',
        }
    }
};

export default ResumeSkillsSection;
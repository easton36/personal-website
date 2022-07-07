import React from "react";
import { Flex, Text, Link, Code, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";

import Notification from "../Components/Notification";
import GroupTitle from "../Components/GroupTitle";
import ResumeSection from "../Components/ResumeSection";
import ResumeSkills from "../Components/ResumeSkills";
import ContactTable from "../Components/ContactTable";

import Footer from "../Components/Footer";

import { ResumeExperience } from "../config/data";

const Home = ()=>{

    return (
        <Flex {...styles.container}>
            <Flex {...styles.innerContainer} direction="column">
                <Notification title="Welcome to my website!" description="This is my personal website built with React.JS and uWebsocketsJS. Everything you need to know about me can be found on here! If you need to contact me, my options will be listed down below." />

                <GroupTitle title="Resume" />
                <ResumeSection title="Experience" items={ResumeExperience} />
                <ResumeSkills />

                <GroupTitle title="Contact Methods" />
                <ContactTable />

                <GroupTitle title="PGP Key" />
                <Text {...styles.description}>
                    Feel free to use PGP key encryption when sending me messages over any platform. On desktop, my public key and fingerprint are listed below. You can also find it at <Link color="accent" href="https://easton.gg/pgp.txt" rel="noreferrer" target="_blank">https://easton.gg/pgp.txt</Link>.
                </Text>

                <Accordion {...styles.accordionContainer} allowToggle>
                    <AccordionItem {...styles.accordion}>
                        <AccordionButton {...styles.accordionButton}>
                            <Flex {...styles.accordionHeader}>
                                <Text {...styles.accordionTitle}>Public PGP Key</Text>
                                <Code {...styles.pgpFingerprint}>BB4E FD11 A98C 4DB2 20C5 C7F5 ACCO A79A 4020 A6F9</Code>
                            </Flex>
                            <AccordionIcon color="text" fontSize="26px"/>
                        </AccordionButton>
                        <AccordionPanel {...styles.accordionBody}>
                            <Text {...styles.pgpKey}>
                            -----BEGIN PGP PUBLIC KEY BLOCK-----<br/>
                            mQINBGLHbWQBEACiyAgHEd0Wg4+gQQSQmAdpUrPh3Plhu3g+v9narX1zJ1PaNINx
                            Zf/a2tW/C5KXYqBIK6sSL6HZT8wx+SrzfNfNouQp2QM+1PEQUwUKum3FXqLfqA2p
                            oaAwvGcWUdc1IfIbhYvuzZQr5A4zG9dIC70UCCp8aaI2wsgVlpMnQdy2tRhGLr3I
                            52PwE8wlnWOmO0GDs8hEENSA+wpF9o9tDuqDkSUzq/ZraeWRZYVdHe7O6zYRqI1D
                            aSB7rjAjhIuD35NDMh4G9aoZDSgw1oHrLiOwPiFmgmt4jx6goVo/crfJu3NRjvuy
                            cK9H3uv37rTLG5c5rjYWJIs6DcPfQ44k8DwGOtp5YAJQplmLwbiiU+Rw83py6reW
                            OHT/I6/K33OC+KIvocjVwJgWKwKHFcmmSFUKR5vkTOMNYLqtdeCBIqWcdS/OL4kK
                            zJADUvQfaWDssjQYVZbafhHwpw5aAv2OGF705IO2J3Vt9278mBD4KdWRtKJFsGEM
                            V7u1m6z9zragmiV1IK71+8WoXp+7AV6Yl9OYVzcB40H9QW7tG+wIvNx4rEVIjf4n
                            /f79iP7aeGd5LLo2hOoNEdTXxSW0dajhQydd2mCF1mzxa1NowePZDSXN04sLElKy
                            7VtM+FoDzMIyUa0XQ1xws0XO2/dhgbLb8E4nMwjWa8jUmQx+m0VXIsUn8QARAQAB
                            tCdFYXN0b24gU2NocmFtIDxlYXN0b24uc2NocmFtQGdtYWlsLmNvbT6JAjgEEwEI
                            ACwFAmLHbWQJEKzAp5pAIKb5AhsDBQkeEzgAAhkBBAsHCQMFFQgKAgMEFgABAgAA
                            QbgQAJQDmXgZGBbm2B3rDltOWUDkKIo6m3poTFgyDkgYSkNscyauNjrOehySIkAJ
                            DckDPGsKSRNyoAYvdypfNQDjdSHH1dhT9Sw/io9fZ+vUVR3UejrDnVlvX8apTdRp
                            XfiVTynJ5k4JFjc9gbYerfBZJqSoM3yWI1Us02fnWRkiWMrgEw+1A6h2uCaA2mrv
                            69ZUUCNTr4Tb3HFTMk9QnxP4aymZ+K8/azAOh3SXTXcIgDSoREY5ZP4mUHCAERWB
                            B5u1fcnLNHVVbN+jyIww4G9A2CAnu43UOo9Z6Ea/DJXOejFrF7SMHaF2XKSpsvrS
                            pdcROMTz2cF7jyzE7MprPfcXQvHNy5NCDxY8qNHmymo8hIO6TRQ45A77f9XY4S1i
                            trBioO/vJ24hBd2suZ1pW4kX6VeQSebr0zG3cLW2HfuQLlzfcftgXbOY1K/HJiou
                            yjzgiZKH4EVN84I19aVEtVj2V5vdPihDAu9LuEChkTAOcJQrSOxBLR6ce7m9Tz3t
                            HRD9EATnSxSJN3LiYroTKr5NycB+JmiVVyRkygRvc0sETNhmd8CU6811jY8MLSAs
                            y6oObmkyh8geHiEALyk2Z34ljvrEj82VvByGmOCOu5E/Qq/5vcaHqaWWWaVyxe/M
                            yyPnHJq8vpTPvgrSv6wKHCGDNccnSvPzESb354vVGd0MbiwOuQINBGLHbWQBEADm
                            7/fI08cdobOpetCOEvjbQnTMWEpQ0gb0KPYRO7R2W0gisy9sijgbdTNI3m5CR7zZ
                            eXO8C4bNvqCyFA5e/8mU1u0512JRJpcyvd439VvWYPW7ChJIg/DgSlhRI0vu6SlM
                            CRQfKaSe6X7+/qvAPKGwAmnG6etKO39WpbHVQRpHdU+xSNDq0CKCgKehxSshttPY
                            TcH0yJ5niFfOgoTMzeqJf1ugSuw/SVtFqnSBdxEHAr4DTpmkJGnv3yKv8/FCLZm0
                            SDlRxbw7DLWamz6L/Jj+hY+LNuZ3VUinJepxCnSM2jVkGBoUYJRY6h4mAo9v9AFQ
                            oy2wYPdIM7aH9FyrZ5EVgY2plun9Xoy3H2CWOXenkH3eS+e3eBLBLVLP/uF9a4Ma
                            evkF1TFJktdNR4HsFIREwb0HW84nsj7Yr4S1a8pNNRKQnNmFaR003UHl/w+4n6Kt
                            m46XAJ1/HSYiIqZh9sYOKe9bhPWYYmo5rOzpXv+Gw1DbrRXs5wSvKR6V/L+abgdF
                            kEo3nsCr4c4raetHWOYyUtuAEvEeB2eTv+XYsOXdqT03YoURpGozwgrAowfF4f++
                            ld78MrujBWPr0+mC/dMFXNmhR1CV0M0oumO4UjBdOZiHsnJb+h9/+5wp6aNyUhz9
                            T4xGxfIyyKGfACqE3s/ERS5JjHTPNngizBmorNWoQwARAQABiQI1BBgBCAApBQJi
                            x21kCRCswKeaQCCm+QIbDAUJHhM4AAQLBwkDBRUICgIDBBYAAQIAAFBDEACLu90S
                            bNAzr9nMI5zU3/OguWSJ9kfI4xEhxRSO8nJMdcRDePHubr9NnOSzveCtXlbmx/1q
                            CECcEhnDUK0bDLbFL3KyPsXhtag2hrpFgYLWjS1lPL+umamG4CDUhSyefDX0w7M+
                            BAgVTmjGYlixH4ZpJ3XpuT9opBy7twyIgwPijBpjOMVB5PH/T0wJEOJf8d3PUUWA
                            efoqJOv8YHo+lJsf9UFvZpBGxoYMSGE93Z+yOnTOgzCkdYmqfitzPiFQXtEDnieK
                            D90jI7Lio/4DEU9lxUiSYVkRMLbsWTUiBZ4RKDptAWHt9+oAKQchEzinWybJvgwi
                            ftxdvipIrP9Pk8XyPc1FD9ZGGrAzCGFOK5ZjrIw4DV5gvTVZGEHNa8aYVOAwQCpA
                            KZBKfqYr9ZRR9ZVGgT7NRSvwU2KFYbyLwjEOWwrNz/MhGIB1TXYn4iyH2hA3ibq1
                            7rMubaU5FNjNHTumr/I97VQ26CVoqX5ElmXZ28gaEF0y9U74wWV82ficUuCL2LuP
                            T6VUlmZ+a7j15xJE1W6Pyg9K2EKQ4GjMXmlpVBOTBEgRadrdf6MxXWBzBED991QQ
                            OaKdE9Q0e0QqNwOqxST4sPg036Mvi5b1UPTVRNGpqx97K072Bh0vt5xc4gluBekL<br/>
                            u1ufOUqtK0aIjSXu7E8hVNV5hJWemW63VNGvkQ==<br/>
                            =/T4O<br/>
                            -----END PGP PUBLIC KEY BLOCK-----
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>

                <GroupTitle title="Privacy" />
                <Text {...styles.description}>
                    I collect no personally identifiable information about you. I am using Cloudflare to manage my DNS; you can read the privacy policy for Cloudflare <Link color="accent" href="https://www.cloudflare.com/privacypolicy/" rel="noreferrer" target="_blank">here</Link>.
                </Text>
                <Footer />
            </Flex>
        </Flex>

    )
};

const styles = {
    container: {
        width: '100%',
        justifyContent: 'center',
    },
    innerContainer: {
        maxWidth: '800px',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    description: {
        fontSize: '16px',
        color: 'text',
        width: {
            base: '95%',
            md: '100%',
        }
    },
    accordionContainer: {
        width: {
            base: '95%', 
            md: '100%'
        },
        marginTop: '15px',
        display: {
            base: 'none',
            md: 'block',
        }
    },
    accordion: {
        width: {
            base: '95%',
            md: '100%',
        },
        border: 'none',
    },
    accordionButton: {
        backgroundColor: 'background',
        borderRadius: '6px',
    },
    accordionHeader: {
        alignItems: 'center',
        grow: 1,
    },
    accordionTitle: {
        color: 'text',
        fontSize: '18px',
        fontWeight: 'bold',
    },
    pgpFingerprint: {
        marginLeft: '15px',
        backgroundColor: 'backgroundDark',
        color: 'text',
        borderRadius: '6px',
        padding: '3px 10px 3px 10px',
    },
    accordionBody: {
        padding: '10px',
        color: 'text',
        width: {
            base: '95%',
            md: '100%',
        },
        backgroundColor: 'backgroundLight',
        borderRadius: '6px',
        marginTop: '5px',
    },
    pgpKey: {
        fontSize: '14px',
    }
};

export default Home;
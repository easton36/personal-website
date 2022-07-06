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
                <Notification title="Welcome to my website!" description="This is a static website built with React.JS and hosted on github pages. Everything you need to know about me can be found on here! If you need to contact me, my options will be listed down below." />

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
                                <Code {...styles.pgpFingerprint}>9655 9B1D 6D25 8AAF 5547 ED75 B152 9150 6812 3EC1</Code>
                            </Flex>
                            <AccordionIcon color="text" fontSize="26px"/>
                        </AccordionButton>
                        <AccordionPanel {...styles.accordionBody}>
                            <Text {...styles.pgpKey}>
                            -----BEGIN PGP PUBLIC KEY BLOCK-----<br/>
                            mQINBGLEi3QBEADSpOgFRDIgTahnJSI8ZbrMs+Pjk0g560KEIkbzyUa9LqJvg4iL
                            Ete33TAMZCXuMv0Fuvi/7e2CAOVOYGdPm0Sa1Fop2Aocvk3vCVSNW5OZLAT+cLsx
                            6pk8AZdXBCbGtWaReQUUsiSxId6HBlbeJxBgrrGYRECpuTXVhSYdGfUlU2S3xdzm
                            vGAKIjRNGaTczD6XtowvufxhEz+Z7Q9jWMAx/wdnknx9KsG/0LKMFJlo0UYYh6Ny
                            zVpKPo9a30MymXczBQyDKiMDXbjSwUSHPY5oOct4lrUZz89D85uTshOjZEjid9kZ
                            7QYf2XZ3aJdK0pky/hia34klR+0+wDwOOSD/0hMc0MpaOxbKqd+HN5v0UXpDX+0J
                            AKbkujT8bldxQFhRc0qPGOQDjAPLJ60YLejMH3ShgXVHJyAXHyyiPktsfciTjNND
                            obOc38qmVLkgTS9/Dg3JVg21NAxqEca8MYxGemGfggXVfoQb/2m4cjPQAho2dylJ
                            GvsgT0K0joYSkTF+VYYmrFaBW0Ehgn5KLajbPEe8EW+2kSX8EZ4xqirh/s1RwSl6
                            mONcv50zEqiRkaO5ecCWZ647+Wn4dUZ5HI6Q/OzGl4DYov3+Uf0hfM68CwFsp8aQ
                            ZZmI7bcQX11ygR4x183EUuJzFkJmrft0NJqjDJCQSJIWA36mtA3nbf+6swARAQAB
                            tAZFYXN0b26JAlEEEwEIADsWIQSWVZsdbSWKr1VH7XWxUpFQaBI+wQUCYsSLdAIb
                            AwULCQgHAgIiAgYVCgkICwIEFgIDAQIeBwIXgAAKCRCxUpFQaBI+wbn9EAChulLo
                            Tj5O3A4+pUqN/9PAUMLNRvzGpW1EPb4C6NQcMeFFPj7WgdeE/3OEVb8x/E97TU8r
                            YeL69VjdPkdMLPFYdweeg88gn9TGKdEVvKjlcMLHESEqfkfGIe4ID8xKxARMSLxz
                            abkqiqyY2bmsG2kn31Up6OJmvBV2BTOt2+22yBxvRd/rKZspo4hMlNLrqFVLOJin
                            ofnkp6jZGj+S+V6oiHVH443dVIuOlkUhuH54Aw5Sz9zphtbtKELOcj4DfhMluPUH
                            DhgWHREJK7Zk4FI5krG8zttx0XwQpUBtwD8U3pRY0sqVNrE/r9xDp0PM2Scwb+eZ
                            9iLnKPUS47/sJqk55RB0adObRmI01W9b/HG86YAw81HjL80FAXgvATQ68sxK/W9R
                            Lgseoaop2de5au+cOkKaOJpzPYk1j4yPJw9Sh+X4IKq3CnRL9x+npXj5NRvBD9/y
                            FKqlESoK6uFC1chPfo9xtFeCn5Ql1+2zgicusLLQ33fzmzmwTmKtybVGrme+XTjp
                            oEA215KtAtt1c80zYJ3BFUNH/VOhfe8Sk6Kzb+VJ5KB78DkgYQCXTxzUvdf/W3pU
                            +01yr4uWQW7/drQyeH6s7668KbnZpmRTwbYt68woXzhCRkRUez2X4VoyA5b3wfEY
                            HvGQx2nozJrslBypi7e6SCLD6cBjThGZyLDj1LkCDQRixIt0ARAAoDOlmhXxFXiK
                            JixPS9PixA26hN9SK6e0drBcnQzrCDzTdgFWayjsTEOm/1nIFfpc4J/sumg29rgW
                            4vH7cb+axnS+LDVfjZbc3XjhjUI1RvAu/PVamoZ1hLDqUeOj3dEkTCOauu+tZnfd
                            c5mEd1uhS6BG51kOpVV1IuR0GCBUsUjLSlw/oosxJca2NSZKXhcDzRuJAyuaHKYg
                            Tmq8JPnKrfXHbvUsa9zkF+BG3h/3EHRO/yztN8Lf/mNejDsOpmex2uzPyne4Qk+M
                            KhdRQkkNJy4gu6T9NwYSz0cpuF05Sf26kT50ZxxGneuEtFvCfsjWelxhPyVqspZp
                            arFY/56DQ+bjiErRwgYw29Rog6RezCmgCWiTZKRL5flv5pugkhzNtQmHT+1zxYxZ
                            RZKgKFbUJseF/3K9hsv+brWuTXI+qHfDWk3DKlDyCLNSl6hJAQSbwGSyNOJzJsG5
                            YexYnCq0OMTJxOseSRf6qiX0OsxlR8PSLL3eTcZRRYiO72i8XW8k0v1tzHpvL530
                            TvHzlksquN66ewRTEd+Znfpx0+yv5+jPyOOMEVI4WfdGF7zK5BD6tj8cmrLZTRr5
                            4A0iKvPromm7XjBxKjiSxGOISQ6ixEEMwOmZAUepCKTD0aRfYfmcPPnLoI1N4dsu
                            1KOt+AYoCvjXeMOvAVrNh53EhbM7df8AEQEAAYkCNgQYAQgAIBYhBJZVmx1tJYqv
                            VUftdbFSkVBoEj7BBQJixIt0AhsMAAoJELFSkVBoEj7BnTYP/3OblU+uzTx64LuJ
                            zuTOoYxihUvTBJ7aKhor8i61D+OweXkCvnfUq/Qo/4CbfkH3+AYGaqvyP1ptBpXZ
                            1aRwTRJCZYKmERr/Dtyg2FfuqgQxPURV4rjxlZEWH4bkAH2ZD0neUh+f8vN7eWnV
                            YFFSWZCKBFw12ARMI2eNESNfQbpmyfhLUJhSruA7oTaJzvGg8oT5SqPO1C33tLHD
                            tkOc4Kp5twg06Jn6JA02WsCA1a0YqFsMqlssPdL0n3gUxHGagR/AN+puK5HjxLUQ
                            OyiQhP9KvhjaAe0VJBYK+3M5ZN2T8bY9ctpWzk9lvFehMqINBSXbGLPNzK1XQI7N
                            l1Ac5oPRj5De3OxnR89BRAvqeihc8LdB9m1DEhTp+g2Bt6vz+S+pte5FNPCsU7SL
                            CmdDJgJQsz++QfCKUi4U9ODLVj4mP0ZJr89Y0m2Lwb+eYG+/2pEot4CKb5tSwM2r
                            uEsKLsk6rfTXOzQD+5YigQ5fipvju7wAC598BeWnJCSMmp7/kFbVNQ+s5Gy3nbCI
                            ysRBQpsnORBhe90TaQYENo4yJSFayWj3TC+eNWBgcmUkKFWcZgyf8XNL910HucbK
                            T0deA+EuHZvbp2ZReM1LG+XKBByfkE/8iuYVqKzP3p2WTF0mfo5szoGhNfzLEvBP<br/>
                            uwndOJmsX+C6FhAEOAk92IZmT2GB<br/>
                            =fXp4<br/>
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
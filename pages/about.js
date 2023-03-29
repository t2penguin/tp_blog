import Head from 'next/head';
import { Container, Box, Text } from '@chakra-ui/layout'
import {
    Grid,
    GridItem,
    Button,
    Heading,
    Stack,
    Flex,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Icon,
    Image,
} from '@chakra-ui/react'
import {
    HamburgerIcon,
    MdSettings,
} from '@chakra-ui/icons'
import {
    AiFillHeart,
    AiOutlineHeart,
} from 'react-icons/ai'
// import penguinIcon from "../public/15-06.jpg"
import penguinIcon from "../public/assets/blog/authors/tato.png"
import Header from '../components/myheader.js'
import Footer from '../components/myfooter'

const Page = () => {
    const { isOpen, onToggle } = useDisclosure();


    return (

        <div bg="orange.100">
            {/* ナビゲーションバー */}
            <Header />

            <main>
                <Box
                    bg={useColorModeValue('#F0E7DB', '#202023')}
                >
                    <Container pb={10}>
                        <Box p={3} mb={3} pt={7} align="center">
                            <Image
                                sizes='70%'
                                borderRadius='full'
                                boxSize='250px'
                                src={penguinIcon.src}
                                alt='TurtlePenguin icon'
                            />
                        </Box>

                        <Box borderRadius="lg" p={3} mb={6} align="center"
                            bg={useColorModeValue("orange.50", "gray.500")}
                            fontFamily={"Hannotate SC"}
                            fontWeight={"bold"}
                        >
                            こんにちは，強く生きたいペンギンです．
                        </Box>

                        <Heading as="h2" variant="page-title" mt={5}
                            fontFamily={"Hannotate SC"}
                        >
                            タートルペンギン
                        </Heading>


                        <Box display={{ md: 'flex' }}>
                            <Box flexGrow={1}>
                                <p>Student (B.E. / M.I.)</p>
                                <p>自然豊かな日本の北陸で情報科学を学んでいる学生．</p>

                                {/* <Icon as={AiFillHeart} /> */}
                                <p>ものづくりが好きで，プログラミング，料理，3Dプリンタが趣味．</p>
                                <p>プログラミングで作品を作っていくのが今後の目標．お小遣いを稼ぐのも．</p>
                            </Box>

                        </Box>

                        <Box
                            mt={50}
                        >
                            <Text
                                as={'u'}
                                fontSize='3xl'
                                fontWeight={"bold"}
                                fontFamily={"Hannotate SC"}
                            >
                                I like
                            </Text>
                            <Text>
                                僕はものづくりが好きです．プログラミングすることや，料理をすること，3Dプリンタで造形することなど，色々なものづくりに興味があります．また，ピアノも練習しています．
                            </Text>
                        </Box>

                        <Box
                            mt={50}
                        >
                            <Text
                                as={'u'}
                                fontSize='3xl'
                                fontWeight={"bold"}
                                fontFamily={"Hannotate SC"}
                            >
                                Skills
                            </Text>
                            <Text>
                                C++，Pythonでプログラミングできます．簡単なクラス設計を行うことができます．C++，Pythonでは自律移動ロボットの運動制御をプログラムしました．Pythonでは，PyTorchを使った深層機械学習のプログラムをしました．深層機械学習では，GANの知識が多いです．その他の触れたことのある言語は，JavaやJavascript，C#，HTML，CSSです．
                            </Text>
                            <br>
                            </br>
                            <Text>
                                また，ROSとUnityを使った自律移動ロボットのシミュレーションを行なったことがあります．この中で，Blenderを使って簡単な3Dモデリングを行いました．
                            </Text>
                            <br>
                            </br>
                            <Text>
                                簡単な3Dモデリングを行い，3Dプリンタで印刷することもしております．
                            </Text>
                        </Box>

                    </Container >
                </Box>
            </main>


            {/* フッター */}
            <Footer />
        </div>
    )
}

export default Page
import {
    Box,
    Flex,
    Link,
    Button,
    useColorModeValue,
    Stack,
    useColorMode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export default function Header() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <>
            <Box bg={useColorModeValue('#F4EDE4', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Box
                        fontFamily={"Hannotate SC"}
                        fontWeight={"bold"}
                        fontSize={30}
                    >
                        <Link href={'/'}>TurtlePenguin</Link>
                    </Box>

                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={3}>
                            <Button
                                as={Link}
                                p={3}
                                bg={useColorModeValue('#F4EDE4', 'gray.900')}
                                _hover={{
                                    textDecoration: 'none',
                                    bg: useColorModeValue('orange.200', 'gray.500'),
                                }}
                                href={'/'}
                            >
                                Tags
                            </Button>
                            <Button
                                as={Link}
                                p={3}
                                bg={useColorModeValue('#F4EDE4', 'gray.900')}
                                _hover={{
                                    textDecoration: 'none',
                                    bg: useColorModeValue('orange.200', 'gray.500'),
                                }}
                                href={'/about'}
                            >
                                About
                            </Button>
                            <Button
                                as={Link}
                                p={3}
                                bg={useColorModeValue('#F4EDE4', 'gray.900')}
                                _hover={{
                                    textDecoration: 'none',
                                    bg: useColorModeValue('orange.200', 'gray.500'),
                                }}
                                href={'/'}
                            >
                                Terms
                            </Button>

                            <Button onClick={toggleColorMode}
                                p={3}
                                bg={useColorModeValue('purple.500', 'orange.200')}
                                color={useColorModeValue('whiteAlpha.900', 'blackAlpha.900')}
                                _hover={{
                                    textDecoration: 'none',
                                    bg: useColorModeValue('orange.200', 'purple.500'),
                                }}
                            >
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>
                        </Stack>
                    </Flex>
                </Flex>
            </Box >
        </>
    )
}
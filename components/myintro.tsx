import { CMS_NAME } from '../lib/constants'
import {
  Box,
  Flex,
  Link,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
} from '@chakra-ui/react';

const Intro = () => {
  return (
    <>
      <Flex h={150} alignItems={'center'} justifyContent={'space-between'}>
        <Box
          fontFamily={"Hannotate SC"}
          fontWeight={"bold"}
          fontSize={30}
        >
          TurtlePenguin's Blog.
        </Box>

        <Box
          fontFamily={"Hannotate SC"}
          w={"50%"}
        >
          テックのことや生活のことでグッとしたこと，
          <br></br>
          ハッとしたことをブログに書いています．
        </Box>
      </Flex>
    </>
  )
}

export default Intro

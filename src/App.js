import React from 'react';
import '@fontsource/bebas-neue';
// Supports weights 400-800
import '@fontsource-variable/wix-madefor-text';
import { SiLinkedin } from 'react-icons/si';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  extendTheme,
  Heading,
  Center,
  Grid,
  Flex,
} from '@chakra-ui/react';
 
const fonts = {
  heading: 'Bebas Neue, sans-serif',
  body: 'Wix Madefor Text Variable, sans-serif'
}

const fontSizes = {
  '4xl': "20px"
}

const theme = extendTheme({ fonts, fontSizes })

const responsiveText = {
  base: '0.75rem',
  md: '1rem',
  lg: '1.25rem'
}

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box w='100vw' h='100vh' backgroundImage="linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('image0.jpeg')" backgroundPosition="center" backgroundSize="cover" color="#ECECEC">
        <Box w='full' h='15vh' position='relative' borderBottom='2px' pb={5} px={{base:10,md:35,lg:20}} display='flex' flexDirection='column' justifyContent='flex-end'>
          <Center>
            <VStack>
              <Text fontSize={{base:"1.5rem",md:"2rem"}}>FULL STACK SOFTWARE ENGINEER</Text>
              <Flex>
                <a href="https://linkedin.com/in/cameron-wood-412708124"><SiLinkedin fontSize={responsiveText} /></a>
                <a href="mailto:camwood23@gmail.com"><FaEnvelope fontSize={responsiveText} style={{ marginLeft: '20px' }} /></a>
              </Flex>
            </VStack>
          </Center>
        </Box>
        <VStack w='full' h='85vh' alignItems='flex-start' spacing="10vh" px={{base:10,md:35,lg:20}} py={{base:5,md:10}}>
          <Grid w='full' templateColumns='repeat(3,1fr)'>
            <Center>
                <Flex alignItems='center'>
                    <FaMapMarkerAlt />
                    <Text fontSize={responsiveText} ml={2}>Orlando, Florida</Text>
                </Flex>
            </Center>
            <Center><Text fontSize={responsiveText}>Computer Science B.S.</Text></Center>
          </Grid>
          <Heading as="h1" ml={{xl:150}} letterSpacing="0.8rem" fontSize={{base:'5rem',md:'10rem','2xl':'13rem'}}>CAMERON<br/>WOOD</Heading>
        </VStack>
      </Box>
    </ChakraProvider>
  );
}

export default App;

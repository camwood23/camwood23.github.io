import React from 'react';
import '@fontsource/montserrat/400.css'
import '@fontsource/bebas-neue';
import { SiLinkedin } from 'react-icons/si';
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
  Spacer,
} from '@chakra-ui/react';
 
const fonts = {
  heading: 'Bebas Neue, sans-serif',
  body: 'Montserrat, sans-serif'
}

const fontSizes = {
  '4xl': "20px"
}

const theme = extendTheme({ fonts, fontSizes })

const responsiveText = {
  base: '0.75rem',
  md: '1rem',
  lg: '1.5rem'
}

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box w='100vw' h='100vh' backgroundImage="linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('image0.jpeg')" backgroundPosition="center" backgroundSize="cover" color="#ECECEC">
        <Box w='100%' h='15vh' position='relative' borderBottom='2px' pb={2}>
          <Flex h='full' align="flex-end" justify="center">
            <Text fontSize={{base:"1.5rem",md:"2rem"}}>SOFTWARE ENGINEER</Text>
          </Flex>
        </Box>
        <VStack w='full' h='85vh' alignItems='flex-start' spacing="10vh" px={{base:10,md:35,lg:40}} py={{base:5,md:10}}>
          <Grid w='full' templateColumns='repeat(3,1fr)'>
            <Text fontSize={responsiveText}>Atlanta, Georgia</Text>
            <Center><Text fontSize={responsiveText}>Computer Science B.S.</Text></Center>
          </Grid>
          <Heading as="h1" ml={{xl:150}} letterSpacing="0.8rem" fontSize={{base:'5rem',md:'10rem','2xl':'13rem'}}>CAMERON<br/>WOOD</Heading>
          <Flex w='full'>
            <Spacer />
            <a href="https://linkedin.com/in/cameron-wood-412708124"><SiLinkedin fontSize={responsiveText}/></a>
          </Flex>
        </VStack>
      </Box>
    </ChakraProvider>
  );
}

export default App;

import React from 'react'
import { Container, Box ,Tab,TabList,TabPanels,TabPanel,Tabs} from '@chakra-ui/react'
import { AiOutlineAliwangwang, AiFillQqCircle } from "react-icons/ai";
import Login from '../Authentication/Login';
import Signup from '../Authentication/Signup';

const Home = () => {
  return (
    <><Container maxW='xl' textColor={'Black'}   paddingTop={'20px'}  centerContent>
      <Box fontWeight={'800'} textShadow={"1px 1px #000100"}  borderColor={"White"} fontSize={'40px'}  > CHAT NetBox  </Box>
      <h6 fontStyle={"italic"}  >Instant messaging and so much more!!</h6>
      
    </Container>
      <Container maxW='xl' marginRight={"60px"} marginTop={"40px"}>
        <Box bg='white' width={'100%'} padding={7} borderRadius={"15px"} borderWidth={"1.1px"} >
        <Tabs variant='soft-rounded'>
  <TabList marginBottom={"1em"} >
    <Tab width={"50%"} borderRadius={"5px"} >Login</Tab>
    <Tab borderRadius={"5px"}  width={"50%"} >Sign up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Login/>
    </TabPanel>
    <TabPanel>
      <Signup/>
    </TabPanel>
  </TabPanels>
</Tabs>
        </Box>
      </Container></>
  )
}

export default Home

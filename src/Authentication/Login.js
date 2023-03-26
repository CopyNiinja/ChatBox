import React from 'react'

import { Button, VStack, FormControl, FormLabel, Input } from '@chakra-ui/react'
import {  InputGroup  } from "@chakra-ui/input";
import { useState } from "react";


const Login = () => {
    
    
  const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const submit = () => { };
  

  return (
    <VStack  spacing={"6px"}>
          
          
         <FormControl id="email" isRequired>
        <FormLabel>Email Address</FormLabel>
        <Input
          type="email"
       
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={ "password"}
            
            onChange={(e) => setPassword(e.target.value)}
          />
          
        </InputGroup>
          </FormControl>
          
           <Button
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submit}
        
        colorScheme="red"
      >
        Login
      </Button>
          


    </VStack>
  )
}

export default Login

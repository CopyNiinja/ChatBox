import React from 'react'
import { Button, VStack, FormControl, FormLabel, Input } from '@chakra-ui/react'
import {  InputGroup  } from "@chakra-ui/input";
import { useState } from "react";


const Signup = () => {

    const [name, setName] = useState();
    
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [pic, setPic] = useState();
    const [picLoading, setPicLoading] = useState(false);
    
    const postDetails = (pics) => { };
    const submit = () => { };
  

  return (
    <VStack  spacing={"6px"}>
          <FormControl id="firstName" isRequired >
              <FormLabel>
                  UserName
              </FormLabel>
                  <Input  
          onChange={(e) => setName(e.target.value)}/>
          </FormControl>
          
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
           <FormControl id="pic">
        <FormLabel>Upload your Picture</FormLabel>
        <Input
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        />
          </FormControl>
           <Button
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submit}
        isLoading={picLoading}
        colorScheme="green"
      >
        Sign Up
      </Button>
          


    </VStack>
  )
}

export default Signup

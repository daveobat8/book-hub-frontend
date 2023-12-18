import { Link } from 'react-router-dom'
import React from 'react'

import { Box, Flex, HStack } from '@chakra-ui/react';
import { AtSignIcon, TriangleDownIcon } from '@chakra-ui/icons';


function Navbar() {
  return (
    <Box px={5} h={14} bg={'#faedcd'}>
        <Flex justifyContent={'space-between'}>
            <HStack spacing={8} h={14}>
                <TriangleDownIcon w={8} h={8} color={'#355070'}/>
                <HStack spacing={4}>
                <Link to={'/'}>Home</Link>
                <Link to={'/collection'}>Catalogue</Link>
                <Link to={'/add-books'}>Add To List</Link>
                </HStack>
            </HStack>
            <Flex py={4}>
              <AtSignIcon w={8} h={8} color={'#fcbf49'}/> 
            </Flex>
        </Flex>
    </Box>
  )
}

export default Navbar
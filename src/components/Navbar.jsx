import { Link } from 'react-router-dom'
import React from 'react'

import { Box, Flex, HStack } from '@chakra-ui/react';
import { AtSignIcon, TriangleDownIcon } from '@chakra-ui/icons';


function Navbar() {
  return (
    <Box px={5}>
        <Flex justifyContent={'space-between'}>
            <HStack spacing={8} h={14}>
                <TriangleDownIcon w={8} h={8} color={'burlywood'}/>
                <HStack spacing={4}>
                <Link to={'/'}>Home</Link>
                <Link to={'/mycollection'}>Catalogue</Link>
                <Link to={'/add-books'}>Add To List</Link>
                </HStack>
            </HStack>
            <Flex py={4}>
              <AtSignIcon w={8} h={8} color={'burlywood'}/> 
            </Flex>
        </Flex>
    </Box>
  )
}

export default Navbar
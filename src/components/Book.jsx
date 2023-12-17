import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Tag,
  TagLabel,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

function Book({ title, description, author, image, genre, price, added_at }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box p={5}>
        <Card w="180px" maxHeight='440px'>
          <CardBody p={0}>
            <Image boxSize="270px" src={image} />
          </CardBody>
          <CardHeader p={2}>
            <HStack>
              <Heading size="s" textTransform="uppercase" color={"black"}>
                {title}
              </Heading>
              <Tag variant="subtle" colorScheme="cyan">
                <TagLabel>{genre}</TagLabel>
              </Tag>
            </HStack>
          </CardHeader>
          <Button  bg='white' onClick={onOpen}>More Info</Button>
        </Card>
      </Box>
      <Modal blockScrollOnMount={false} onClose={onClose} isOpen={isOpen} size="md" isCentered >
        <ModalOverlay
          bg="none"
          backdropFilter="auto"
          backdropInvert="80%"
          backdropBlur="2px"
        />
        <ModalContent bg='#1B1B1B'>
          <ModalHeader color='white'>{title}</ModalHeader>
          <ModalCloseButton color='white'/>
          <ModalBody>
            <HStack >
              <Image boxSize="200px" src={image}></Image>
              <Text color='white'>{description}</Text>
            </HStack >
            <Text mt="1" color='white'> Author: {author}</Text>
            <Tag  mt="1" variant="subtle" bg="#882D17" p={2} mr={1}>
              <TagLabel color='#E5AA70'> Genre: {genre}</TagLabel>
            </Tag>
            <Tag mt="1" variant="subtle" bg="#882D17" p={2}>
              <TagLabel color='#E5AA70'>Price: Ksh{price}</TagLabel>
            </Tag>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Book;

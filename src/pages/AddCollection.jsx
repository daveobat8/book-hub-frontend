import React from "react";
import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
} from "@chakra-ui/react";

function AddCollection() {
  const initialData = {
    bookTitle: "",
    author: "",
    genre: "",
    addedAt: "",
    price: "",
  };

  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  console.log(formData);
  return (
    <Flex align={"center"} justify={"center"}>
      <Stack>
        <Heading fontSize={"4xl"}>Add to Catalogue</Heading>

        <Box rounded={"lg"} bg={"white"} p={8}>
          <Stack>
            <FormControl isRequired>
              <FormLabel>Book Title</FormLabel>
              <Input
                name="bookTitle"
                placeholder="e.g. Humpty Dumpty"
                value={formData["bookTitle"]}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Author</FormLabel>
              <Input
                name="author"
                placeholder="e.g. Lewis Caroll"
                value={formData["author"]}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Genre</FormLabel>
              <Input
                name="genre"
                placeholder="e.g. Fiction"
                value={formData["genre"]}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Added At</FormLabel>
              <Input
                name="addedAt"
                placeholder="Title"
                type="date"
                value={formData["addedAt"]}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Price </FormLabel>
              <InputGroup>
                <InputLeftAddon children="Kshs" />
                <Input
                  name="price"
                  placeholder="100"
                  value={formData["price"]}
                  onChange={handleChange}
                />
              </InputGroup>
            </FormControl>
            <Stack pt={3}>
              <Button>Submit</Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default AddCollection;

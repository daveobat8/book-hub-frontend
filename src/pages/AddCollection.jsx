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
import { BASE_URL } from '../utils';

function AddCollection() {
  const initialData = {
    bookTitle: "",
    author: "",
    image: "",
    genre: "",
    addedAt: "",
    price: "",
  };

  const [formData, setFormData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    fetch(`${BASE_URL}/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        //assume the operation was a success

        //reset form data to initial data
        setFormData(initialData);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });

      console.log("SUBMITTED SUCCESSFULLY")
  };

  return (
    <Flex align={"center"} justify={"center"}>
      <Stack>
        <Heading fontSize={"4xl"} py={2}>
          Add to Catalogue
        </Heading>

        <Box
          as="form"
          rounded={"lg"}
          bg={""}
          p={7}
          onSubmit={handleSubmit}
        >
          <Stack>
            <FormControl isRequired>
              <FormLabel>Book Title</FormLabel>
              <Input
                name="title"
                placeholder="e.g. Humpty Dumpty"
                value={formData["title"]}
                required
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Author</FormLabel>
              <Input
                name="author"
                placeholder="e.g. Lewis Caroll"
                value={formData["author"]}
                required
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Image</FormLabel>
              <Input
                name="image"
                placeholder="https://img.freepik.com/free-photo/red-hardcover-book-front-cover_1101-833.jpg?w=360&t=st=1702493832~exp=1702494432~hmac=36026b25033edad4fa4ec1a89cc8cd6222f96638714e4234995d8bcb28272c98"
                value={formData["image"]}
                required
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Genre</FormLabel>
              <Input
                name="genre"
                placeholder="e.g. Fiction"
                value={formData["genre"]}
                required
                onChange={handleChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Added At</FormLabel>
              <Input
                name="added_at"
                placeholder="Title"
                type="date"
                value={formData["added_at"]}
                required
                onChange={handleChange}
              />
              </FormControl>
               <FormControl isRequired>
              <FormLabel>Description</FormLabel>
              <Input
                name="description"
                placeholder="description"
                value={formData["description"]}
                required
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
                  required
                  onChange={handleChange}
                />
              </InputGroup>
            </FormControl>
            <Stack pt={3}>
              <Button
                isLoading={isLoading}
                loadingText="adding to catalogue"
                type="submit"
                color={"teal"}
              >
                Submit
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default AddCollection;

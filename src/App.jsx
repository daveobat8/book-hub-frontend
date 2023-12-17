import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import AddCollection from "./pages/AddCollection";
import { BASE_URL } from "./utils";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/books`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((books) => setBooks(books))
      .catch((err) => console.log(err));
  });

  return (
    <div>
      <Navbar />
      <Box bg={"white"} style={{ height: "100%" }}>
        <Routes>
          <Route path="/" element={<Home books={books} />}></Route>
          <Route path="collection" element={<Collection />}></Route>
          <Route path="add-books" element={<AddCollection />}></Route>
        </Routes>
      </Box>
    </div>
  );
}

export default App;

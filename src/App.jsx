import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import {  Box, Container } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import AddCollection from "./pages/AddCollection";

function App() {
  return (
    <div>
      <Navbar />
      <Box bg={"#f1dca7"} style={{height:"100vh"}}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="collection" element={<Collection />}></Route>
          <Route path="add-books" element={<AddCollection />}></Route>
        </Routes>
      </Box>
    </div>
  );
}

export default App;

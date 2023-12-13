
import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Collection from './pages/Collection'
import { Container } from '@chakra-ui/react'
import Navbar from './components/Navbar'

function App() {
  
  return (
    <div>

    <Navbar />
    <Container>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='collection' element={<Collection />}></Route>
    </Routes>
    </Container>
      
    </div>
  )
}

export default App

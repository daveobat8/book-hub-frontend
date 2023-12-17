import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import Book from '../components/Book'

function Home({books}) {
  return (
    <div>
      <SimpleGrid columns={6} spacing={0}>
        {
          books.map((book) => (
            <Book key={book.id} 
            {...book} />
          ))
        }
      </SimpleGrid>

    </div>
  )
}

export default Home
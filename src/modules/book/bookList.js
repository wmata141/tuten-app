import React from 'react'
import { useSelector } from 'react-redux'
import Card from './card'

const BookList = ( ) => { 
  const books = useSelector(state => state.bookReducer)  
  
  return (    
    <div className="home-page">
      {
        books.map((book, i) => {
            return (              
              <Card key={i} book={book} />
            )
        })
      }      
    </div>    
  )
}

export default BookList;

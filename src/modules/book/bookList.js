import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { filterBySelect } from './bookListAction'
import SearchBar from './searchBar'
import ContactTable from './contactTable'

const BookList = () => {
    const books = useSelector(state => state.bookReducer)  
    
    const [filterText, setFilterText] = useState(""); 
    const [filterPrice, setFilterPrice] = useState(""); 
    const [filterSelect, setFilterSelect] = useState("="); 
    const [bookShow, setBookShow] = useState(books);
    
    useEffect(() => {     
      filterHandler();
    }, [filterText, filterPrice, filterSelect])

    const filterHandler = () => {
      let booksFilter = []

      if (filterText.length === 0 && filterPrice.length === 0) {        
        setBookShow(books)
      } else {        
        if (filterPrice.length > 0) { 
          console.log("filterSelect, booksFilter, books, filterPrice",filterSelect, booksFilter, books, filterPrice);                                                   
          booksFilter = filterBySelect(filterSelect, booksFilter, books, filterPrice)

          booksFilter = booksFilter.filter(item => { 
            return item.bookingId.toString().startsWith(filterText)                                       
          });
           
          setBookShow(booksFilter);    
        } else {
          booksFilter = books.filter(item => { 
            return item.bookingId.toString().startsWith(filterText)                                       
          });
        
          setBookShow(booksFilter);
        }                
      }            
    }  

    return (
      <div className="body-list indexBackground">
        <h1>Client List</h1>
        <SearchBar
          filterText={filterText}
          setFilterText={setFilterText}
          filterPrice={filterPrice}
          setFilterPrice={setFilterPrice}
          filterSelect={filterSelect}
          setFilterSelect={setFilterSelect}
        />
        <ContactTable
          books={bookShow}
          filterText={filterText}
          filterPrice={filterPrice}
          filterSelect={filterSelect}
        />
      </div>
    );
}

export default BookList
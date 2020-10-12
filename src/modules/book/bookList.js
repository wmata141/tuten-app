import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

const ContactTable = ({ books, filterText }) => {  
    const ContactRow = ({ contact }) => {               
        const { bookingId, tutenUserClient, bookingTime, locationId, bookingPrice } = contact
        const { firstName, lastName } = tutenUserClient        
        
        const date = new Date(bookingTime)
        const day = date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear()

        let dateBook
        if(month < 10){
          dateBook = `${day}-0${month}-${year}`
        }else{
          dateBook = `${day}-${month}-${year}`
        }

        return (
            <tr>
                <td>{bookingId}</td>
                <td>{firstName +' '+ lastName}</td>
                <td>{dateBook}</td>
                <td>{locationId.streetAddress}</td>
                <td>$ {new Intl.NumberFormat().format(bookingPrice)}</td>
            </tr>
        )
    }
    
    var rows = [];
    books.forEach((contact, i) => {
      rows.push(<ContactRow key={i} contact={contact} />);                 
    });

    
    return (
      <table className='table'>
        <thead>
          <tr>
            <th><b>BookingId</b></th>
            <th><b>Cliente</b></th>
            <th><b>Fecha de Creación</b></th>
            <th><b>Direccion</b></th>
            <th><b>Precio</b></th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );  
}

const SearchBar = ({ filterText, setFilterText, filterPrice, setFilterPrice, filterSelect, setFilterSelect, }) => {   
    return (
      <form style={{ display: 'flex', justifyContent: 'space-between' }}>
        <input
          className="form-control"
          type="text"
          placeholder="BookingId..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          style={{ width: '25%' }}
        />
        <div style={{ width: '50%', display: 'flex', justifyContent: 'flex-end' }}>
          <input
            className="form-control"
            type="number"
            placeholder="Precio..."
            value={filterPrice}
            onChange={(e) => setFilterPrice(e.target.value)}
            style={{ width: '20%' }}
          />
          <select onChange={(e) => setFilterSelect(e.target.value)} name="select" className="form-control" style={{ width: '20%' }}>
            <option value="=">{'='}</option> 
            <option value=">">{'>'}</option>
            <option value=">=">{'>='}</option>
            <option value="<">{'<'}</option>
            <option value="<=">{'<='}</option>
          </select>
        </div>        
      </form>
    );
}

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
            switch (filterSelect) {
              case '=':
                return (                
                  booksFilter = books.filter(item => {
                    return parseInt(filterPrice) === item.bookingPrice
                  })
                )
              case '>':
                return (
                  booksFilter = books.filter(item => {
                    return parseInt(filterPrice) > item.bookingPrice
                  })    
                )            
              case '>=':
                return (
                  booksFilter = books.filter(item => {
                    return parseInt(filterPrice) >= item.bookingPrice                
                  })
                )
              case '<':
                return (
                  booksFilter = books.filter(item => {
                    return parseInt(filterPrice) < item.bookingPrice                
                  })
                )
              case '<=':
                return (
                  booksFilter = books.filter(item => {
                    return parseInt(filterPrice) <= item.bookingPrice                
                  })
                )
              default:
                break;
            }                       
          

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
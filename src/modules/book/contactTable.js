import React from 'react'
import ContactRow from './contactRow'

const ContactTable = ({ books, filterText }) => {  
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

export default ContactTable
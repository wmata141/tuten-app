import React from 'react'

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

export default ContactRow
import React from 'react'
import styled from 'styled-components'
import emptyImg from '../../assets/images/empty.png';

const Card = ({ book }) => {       
    const { bookingId, firstName, bookingTime, streetAddress, bookingPrice } = book
    
    return (        
        <CardHero>
            <Picture src={emptyImg} alt={book.name} />
        </CardHero >
    )
}

export default Card

const CardHero = styled.div`
    position: relative;
    margin: 1rem;
    width: 20%;
    min-width: 256px;
    min-height: 380px;
    max-width: 256px;
    max-height: 380px;      
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    cursor: pointer;
    &:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);        
    }    
`
const Picture = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 4px;   
`
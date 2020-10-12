import React from 'react'

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

export default SearchBar
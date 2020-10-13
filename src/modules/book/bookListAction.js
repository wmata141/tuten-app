export const filterBySelect = (filterSelect, booksFilter, books, filterPrice) => {
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
                return parseInt(filterPrice) < item.bookingPrice
                })    
            )            
        case '>=':
            return (
                booksFilter = books.filter(item => {
                return parseInt(filterPrice) <= item.bookingPrice                
                })
            )
        case '<':
            return (
                booksFilter = books.filter(item => {
                return parseInt(filterPrice) > item.bookingPrice                
                })
            )
        case '<=':
            return (
                booksFilter = books.filter(item => {
                return parseInt(filterPrice) >= item.bookingPrice                
                })
            )
        default:
        break;
    }
}

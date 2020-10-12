const axios = require('axios')

export const getBooksWithToken = async (email, password) => {
    try {
        const token = await axios({
            method: 'PUT',
            url: `https://dev.tuten.cl:443/TutenREST/rest/user/${email}`,
            headers: {
                'app'     : 'APP_BCK',
                'password': password,                
            }           
        })            

        const { data } = await axios({
            method: 'GET',
            url: `https://dev.tuten.cl:443/TutenREST/rest/user/contacto%40tuten.cl/bookings`,
            headers: {
                'app'       : 'APP_BCK',
                'adminemail': email,   
                'token'     : token.data.sessionTokenBck   
            }           
        })
        return data        

    } catch (error) {
        console.log("error =>",error);
        return false
    }           
}

export const formValidate = (email, password) => {
    if (email.length > 0 && password.length > 0)
        return true;           
    return false    
}
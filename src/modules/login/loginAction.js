import { URL } from '../../config'
const axios = require('axios')

export const getBooksWithToken = async (email, password) => {
    try {
        const token = await axios({
            method: 'PUT',
            url: `${URL}${email}`,
            headers: {
                'app'     : 'APP_BCK',
                'password': password,                
            }           
        })            

        const { data } = await axios({
            method: 'GET',
            url: `${URL}contacto%40tuten.cl/bookings`,
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
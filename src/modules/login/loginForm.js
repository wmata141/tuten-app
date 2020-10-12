import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getBooksWithToken, formValidate } from './loginAction'
import { ADD_TO_CART } from '../../reducers/bookReducer'
import { LOGIN_USER } from '../../reducers/authReducer'
import OtherMethods from './otherMethods'

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [spinner, setSpinner] = useState(false);  

    const dispatch = useDispatch()
    let history = useHistory();
   
    const summitClick = async (e) => {
        e.preventDefault();

        if(formValidate(email,password)) {
            setSpinner(true)
            const books = await getBooksWithToken(email, password)            
            if (books) {                
                dispatch({ type: LOGIN_USER, payload: true })                                                                 
                dispatch({ type: ADD_TO_CART, payload: books })                                                      
                history.push("/books");
            } else {
                setSpinner(false)
                console.log(`Bad Request`);
            }           
        } else {
            alert(`Bad Request`)
        }        
    }

    return (
        <div className="index">
            {spinner ? 
                (
                    <div className="sp sp-3balls"></div>
                ) : 
                (
                    <div id="loginform" >
                        <h2 id="headerTitle">{'Login'}</h2>
                        <div>                
                            <div className="row">
                                <label>{"Username"}</label>
                                <input type={"text"} autoComplete="off" placeholder={"Enter your username"} value={email} onChange={e => setEmail(e.target.value)}/>
                            </div>                
                            <div className="row">
                                <label>{"Password"}</label>
                                <input type={"password"} placeholder={"Enter your password"} value={password} onChange={e => setPassword(e.target.value)}/>
                            </div>  
                            <div id="button" className="row">
                                <button onClick={(e) => summitClick(e)}>{"Log in"}</button>
                            </div>
                        </div>
                        <OtherMethods />
                    </div>
                )
            }
            
        </div>
    )    
};

export default LoginForm;

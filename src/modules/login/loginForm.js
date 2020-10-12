import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getBooksWithToken, formValidate } from './loginAction'
import { ADD_TO_CART } from '../../reducers/bookReducer'
import { LOGIN_USER } from '../../reducers/authReducer'

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");    
    const dispatch = useDispatch()
    let history = useHistory();
   
    const summitClick = async (e) => {
        e.preventDefault();

        if(formValidate(email,password)) {
            const books = await getBooksWithToken(email, password)            
            if (books) {
                dispatch({ type: LOGIN_USER, payload: true })                                                                 
                dispatch({ type: ADD_TO_CART, payload: books })                                                      
                history.push("/books");
            } else {
                return 0
            }           
        } else {
            alert(`Bad Request`)
        }        
    }

    const iconClick = (name) => {
        alert(`Enter with ${name} account`)
    };

    const FormHeader = props => (
        <h2 id="headerTitle">{props.title}</h2>
    );

    const OtherMethods = props => (
        <div id="alternativeLogin">
            <label>Or sign in with:</label>
            <div id="iconGroup">
            <Facebook />
            <Twitter />
            <Google />
            </div>
        </div>
    );

    const Facebook = props => (
        <p onClick={() => iconClick('Facebook')} id="facebookIcon"></p>
    );

    const Twitter = props => (
        <p onClick={() => iconClick('Twitter')} id="twitterIcon"></p>
    );

    const Google = props => (
        <p onClick={() => iconClick('Google')} id="googleIcon"></p>
    );

    return (
        <div className="index">
            <div id="loginform" >
                <FormHeader title="Login" />
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
        </div>
    )    
};

export default LoginForm;

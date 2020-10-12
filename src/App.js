import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import PrivateRoute from './components/routes/privateRoute'
import PublicRoute from './components/routes/publicRoute'
import LoginForm from './modules/login/loginForm'
import BookList from './modules/book/bookList'

const App = () => {  
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/" exact component={LoginForm} />
        <PrivateRoute path="/books" exact component={BookList} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;




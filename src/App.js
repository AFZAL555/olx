import React, { useEffect, useContext } from 'react';
import { AuthContext, FirebaseContext } from './store/FirebaseContext'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Post from './store/postContext'
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login'
import Create from './Pages/Create'
import View from './Pages/ViewPost'

function App() {

  const { setuser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setuser(user);
    })
  }, []);


  return (
    <div>

      <Post>
        <Router>

          <Route exact path="/" >
            <Home />
          </Route>

          <Route path="/signup" >
            <Signup />
          </Route>

          <Route path="/login" >
            <Login />
          </Route>

          <Route path="/create" >
            <Create />
          </Route>

          <Route path="/viewpost" >
            <View />
          </Route>


        </Router>
      </Post>
    </div>
  );
}

export default App;

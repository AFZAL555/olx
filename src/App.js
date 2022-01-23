import React,{useEffect,useContext}from 'react';
import {AuthContext,FirebaseContext} from './store/FirebaseContext'
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login'
import Create from './Pages/Create'

function App() {

const {setuser} = useContext(AuthContext);
const {firebase} = useContext(FirebaseContext);
 useEffect(() => {
  firebase.auth().onAuthStateChanged((user)=>{
    setuser(user);
  })
 }, []);
 

  return (
    <div>
      <Router>

        <Route exact path="/" >
        <Home/>
        </Route>

        <Route  path="/signup" >
        <Signup/>
        </Route>

        <Route  path="/login" >
        <Login/>
        </Route>

        <Route  path="/create" >
        <Create />
        </Route>


      </Router>
    </div>
  );
}

export default App;

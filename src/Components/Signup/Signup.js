import React, { useState, useContext } from 'react';

import Logo from '../../olx-logo.png';
import './Signup.css';
import { FirebaseContext } from '../../store/FirebaseContext';
import { useHistory } from 'react-router-dom';
export default function Signup() {

  const [username, setUsername] = useState('');
  const [email, setemail] = useState('');
  const [mobile, setmobile] = useState('');
  const [password, setpassword] = useState('');


  const { firebase } = useContext(FirebaseContext);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(email, password).catch((err)=>{
      alert(err.message)
    }).then((result) => {
      result.user.updateProfile({ displayName: username }).then(() => {
        firebase.firestore().collection('users').add(
          {
            id: result.user.uid,
            Username: username,
            Mobile: mobile
          }).then(() => {
            history.push('/login');
            console.log('Login Page');
          })
      })
    })
  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e) => { setUsername(e.target.value) }}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => { setemail(e.target.value) }}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="text"
            value={mobile}
            onChange={(e) => { setmobile(e.target.value) }}
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => { setpassword(e.target.value) }}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a onClick={()=>{
           history.push('/login')
        }}>Login</a>
      </div>
    </div>
  );
}

import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../../store/FirebaseContext';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext } from '../../store/FirebaseContext';
function Header() {

const {user} = useContext(AuthContext);

const { firebase } = useContext(FirebaseContext);

const history = useHistory();

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        
        <div className="loginPage">
          <span style={{textTransform:'uppercase',fontSize:'18px',cursor:'pointer',color:'red'}}><b>{user ? <span onClick={()=>{history.push('/')}}>{user.displayName}</span>   : <span onClick={()=>{
           history.push('/login')
        }}>Login</span>}</b> </span>
          
        </div>
        {user && <span  style={{cursor:'pointer',color:'blue'}}
         onClick={()=>{
          firebase.auth().signOut();
          history.push('/login')
        }}>LogOut</span>}
        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span onClick={()=>{
           history.push('/create')
        }}>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

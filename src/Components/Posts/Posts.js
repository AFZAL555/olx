import React, { useEffect, useContext, useState } from 'react';
import { FirebaseContext } from '../../store/FirebaseContext'
import {PostContext} from '../../store/postContext'
import Heart from '../../assets/Heart';
import './Post.css';
import { useHistory } from 'react-router-dom';


function Posts() {

  const { firebase } = useContext(FirebaseContext);
  const {setPostDetails} = useContext(PostContext)
  const history = useHistory();
  const [product, setProduct] = useState();


  useEffect(() => {
    const db = firebase.firestore();
    return db.collection('Products').onSnapshot((snapshot) => {
      const postData = [];
      snapshot.forEach((doc) => postData.push({ ...doc.data(), id: doc.id }));
      setProduct(postData);
    });
  }, []);
  console.log(product);

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          
        </div>
        <div className="cards">


          {product && product.map(pro => {
            return <div 
              className="card">
              <div className="favorite">
                <Heart></Heart>
              </div>
              <div onClick={()=>{
              setPostDetails(pro);
              history.push('/viewpost');
            }
                }  className="image">
                <img src={pro.url} alt="product" />
              </div>
              <div className="content">
                <p className="rate">&#x20B9; {pro.price}</p>
                <span className="kilometer">{pro.category}</span>
                <p className="name"> {pro.name}</p>
              </div>
              <div className="date">
                <span> {pro.Created_at}</span>
              </div>
            </div>

          })}


        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">


        {product && product.map(pro => {
            return <div 
               className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img onClick={()=>{
              setPostDetails(pro);
              history.push('/viewpost');
            }
                }  src={pro.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {pro.price}</p>
              <span className="kilometer">{pro.category}</span>
              <p className="name"> {pro.name}</p>
            </div>
            <div className="date">
              <span> {pro.Created_at}</span>
            </div>
          </div> 
        })}


        </div>
      </div>
    </div>
  );
}

export default Posts;

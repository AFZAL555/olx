import React, { useState, useContext, useEffect } from 'react';
import { FirebaseContext } from '../../store/FirebaseContext';
import { PostContext } from '../../store/postContext';
import './View.css';
function View() {
  const [userDeatails, setUserDeatails] = useState();
  const { postDetails } = useContext(PostContext);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const { UserId } = postDetails;
    const db = firebase.firestore();
    db.collection('users').where('id', '==', UserId).get().then((res) => {
      res.forEach(doc => {
        setUserDeatails(doc.data())
      });
    })
  }, []);

  console.log(userDeatails);
  return (
    <div className="viewParentDiv">
      {postDetails && <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>}
      <div className="rightSection">
        {postDetails && <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span> {postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.Created_at}</span>
        </div>}
        {userDeatails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDeatails.Username}</p>
          <p>{userDeatails.Mobile}</p>
        </div>}
      </div>
    </div>
  );
}
export default View;

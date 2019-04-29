import React from 'react';
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card"key={props.id} id={props.id} alt={props.name}  onClick={() => props.chooseFriend(props.id) } >
      <div className="img-container">
        <img src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FriendCard;
import React from 'react';

const Card = (props) => {
  return (
    <div className="coffee-card">
      <p> {new Date(props.date).toDateString()} </p>
      <div className="coffee-image">
        <img src={props.imgUrl} alt={props.date} />
      </div>
    </div>
  );
}

export default Card;
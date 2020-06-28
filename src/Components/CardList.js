import React from 'react';
import Card from './Card'

const CardList = (props) => {
  return (
    <div className='card-container'>
      {props.coffee.map(coffee => <Card {...coffee} />)}
    </div>
  );
}

export default CardList;
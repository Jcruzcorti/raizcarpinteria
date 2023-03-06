import React from 'react';
import ItemCard from './ItemCard';



export default function Item({item}) {

  return (
    <div>    
      <ItemCard item={item}/>
    </div>
  );
}
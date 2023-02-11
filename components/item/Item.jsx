// import Image from 'next/image'
// import React from 'react'

// function Item({item}) {
//   return (
//     <div>
//         <h1>{item.title}</h1>
//         <Image src={item.img} alt='asa' priority width={400} height={400}/>
//     </div>
//   )
// }

// export default Item


import React from 'react';
import styles from '@/styles/Home.module.css'
import ItemCard from './ItemCard';
// import AutoComplete from './AutoComplete'


export default function Item({item}) {


  return (
    <div>
      {/* <AutoComplete item={item}/> */}
      
      <ItemCard item={item}/>
    </div>
  );
}
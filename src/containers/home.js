import React, { useState, useEffect } from 'react';
import Cart from "../components/cart"
import calculatePrice from "../utils/calculatePrice"
import Card from "../components/card"
import calculateFavCount from "../utils/calculatefavCount"
const Home=(props)=> {
  const originalProductList = [
    {name: 'cooker', price:30, cartCount:0, image:'https://media.istockphoto.com/id/182802683/photo/pressure-cooker.jpg?s=612x612&w=0&k=20&c=DEkCnnx-wXchhGVxc5ws5T3YgmXpjtERo9GNIYfqR1k=', backgroundColor:'rgb(245, 245, 245)', isLiked: false},
    {name: 'ball', price:31, cartCount:0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxZfiFooiCet0hOlPf_5eJDlU31DUepzpIfI2vBfk&s', backgroundColor:'rgb(255, 219, 219)', isLiked: false},
    {name: 'remote', price: 200, cartCount:0, image: 'https://i.guim.co.uk/img/media/8459da1aab3ef116fd75f344ce9650e8e32a365f/693_897_4699_2819/master/4699.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=ab3cccacc75e2cd047d8ca9b9d65be67', backgroundColor: 'rgb(220,220,220)', isLiked: false}  
  ]  
  const [productList, setProductList] = useState(originalProductList)
  const [name, setName] = useState('ram')
 
  const cartActions=(item,id,action)=> {
    const bckUpList = [...productList]
    if(action == 'decrement' && item.cartCount != 0){
      --bckUpList[id].cartCount
    }else{
      ++bckUpList[id].cartCount
    }
    setProductList(bckUpList)
  }
  
  const favActions = (item,id)=>{
    const bckUpList = [...productList]
    bckUpList[id].isLiked  = !item.isLiked 
    setProductList(bckUpList)
  }





  return (
    <>
    {name}
    
    <button onClick={()=> setName("hari")}>Set name</button>
        {
        productList.map((item, id)=>{
          return (
          <Card item={item} id={id} favActions={favActions} cartActions={cartActions}/>
          )
        })
      }
      <Cart productList={productList} cartActions={cartActions}/>
      You have {calculateFavCount(productList)} number of favorite items
    </>
  );
}

export default Home;


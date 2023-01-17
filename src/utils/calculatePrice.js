const calculatePrice= (productList)=> {
    let sum = 0
    productList.map((item)=>{
      sum = sum + (item.price * item.cartCount)
    })
    
   return sum
  }
  

  export default calculatePrice
 const calculateFavCount =(productList)=>{
    let isLikedCount = 0

    productList.map((item,id)=>{
      if(item.isLiked){
      isLikedCount++
      } 
    })
return isLikedCount
  }


  export default calculateFavCount
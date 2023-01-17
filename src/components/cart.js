import calculatePrice from "../utils/calculatePrice"
const Cart = (props)=> {
 return (
    <div className="Cart">
    My cart
    <table>
    <tr>
        <td>Name</td>
        <td>Price</td>
        <td>Quantity</td>
        <td>Total</td>
    </tr>
      {
      props.productList.map((item,id)=>{
        return(
        <tr>
          <td>{item.name}</td>
          <td>{item.price}</td>
        <button onClick={()=> props.clickMe()}>click me </button>
          <td> <button onClick={()=>props.cartActions(item,id,'decrement')}>-</button>{item.cartCount}<button  onClick={()=>props.cartActions(item, id, 'increment')}>+</button></td>
          <td>{item.price * item.cartCount}</td>
        </tr>)
      }) 
      }
    </table>
        Total price is :{calculatePrice(props.productList)}
    </div>
   
 )
}

export default Cart

import { FaShoppingCart , FaHeart } from 'react-icons/fa';
const Card = (props)=>{
    const {name, price, image, isLiked} = props.item

    return (
        <div className="Card">
        {name}
        {price}
        <FaHeart style={{color: isLiked ? 'red' : 'black'}} onClick={()=> props.favActions(props.item,props.id)}/>
        <img src={image} width={80} height={80}/>
        <FaShoppingCart onClick={()=>props.cartActions(props.item, props.id)}/>
      </div>
    )
}
export default Card
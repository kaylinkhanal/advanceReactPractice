import {useState} from 'react'
const Login = ()=>{
    const [color ,setColor]= useState('black')
    return (
        <h1 style={{color: color}}
            onMouseOver={()=> console.log("i am over tthe text")}
        >login page</h1>
    )
}
export default Login
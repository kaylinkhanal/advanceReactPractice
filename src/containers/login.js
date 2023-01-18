import {useState} from 'react'
const Login = ()=>{
    const [color ,setColor]= useState('black')
    return (
        <>
        <h1 style={{color: color}}
            onMouseOver={()=> setColor('red')}
            onMouseLeave={()=> setColor('black')}
        >login page</h1>
        <input placeholder="enter a name" 
            onKeyUp={(e)=> setColor(e.target.value)}
        />
        </>
    )
}

export default Login
import {useState} from 'react'
const PlayGround = ()=>{
    const winningName = 'rhinocerous'
    const [inputCharacters, setInputCharacters] =  useState('')
    const [allEnteredChar, setAllEnteredChar] = useState(['a','c'])

    const triggerSubmit = ()=> {
        // 
    }
    return (
        <>
      Hangman game
      <input placeholder="enter name" onKeyUp={(e)=> setInputCharacters(e.target.value)}/>
      <button onClick={()=> triggerSubmit()}>Submit</button>
       {allEnteredChar}
        </>
    )
}

export default PlayGround
import {useState} from 'react'
const PlayGround = ()=>{
    const winningName = 'rhinocerous'
    const splittedWinningNameArr = winningName.split('')
    //splittedWinningNameArr will be [ 'r', 'h', 'i', 'n', 'o', 'c', 'e', 'r', 'o', 'u', 's' ]
    const [inputCharacters, setInputCharacters] =  useState('')
    const [allEnteredChar, setAllEnteredChar] = useState([])
    const [wrongCount, setWrongCount] = useState(0)
    const triggerSubmit = ()=> {
        const bckUpList = [...allEnteredChar]
        const firstLetter = inputCharacters[0]
        if (splittedWinningNameArr.includes(firstLetter)){
          
        }else{
            setWrongCount(wrongCount+1)
        }
        bckUpList.push(inputCharacters[0])
        setAllEnteredChar(bckUpList)
    }

    const hangingImageArr = ['O', ['/','|', '\\'], '|', ['/', '\\']]
    return (
        <>
      Hangman game
      <input placeholder="enter name" onKeyUp={(e)=> setInputCharacters(e.target.value)}/>
      <button onClick={()=> triggerSubmit()}>Submit</button>
       {allEnteredChar}
     
        {splittedWinningNameArr.map(item=>{
            return <li>{item}</li>
        })}
        <br/>
        {wrongCount}

        {hangingImageArr.map((item)=>{
            return(<h1>{item}</h1>)
        })}
        </>
    )
}

export default PlayGround
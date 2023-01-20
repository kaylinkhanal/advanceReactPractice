import {useState, useEffect} from 'react'
const PlayGround = ()=>{
    const winningName = 'cat'
    const splittedWinningNameArr = winningName.split('')
    //splittedWinningNameArr will be [ 'r', 'h', 'i', 'n', 'o', 'c', 'e', 'r', 'o', 'u', 's' ]
    const [inputCharacters, setInputCharacters] =  useState('')
    const [allEnteredChar, setAllEnteredChar] = useState([])
    const [wrongList, setWrongList] = useState([])
    const triggerSubmit = ()=> {
        const bckUpList = [...allEnteredChar]
        const firstLetter = inputCharacters[0]
        if (splittedWinningNameArr.includes(firstLetter)){
          
        }else{
            const bckUpWrongList = [...wrongList]
            bckUpWrongList.push(firstLetter)
            setWrongList(bckUpWrongList)
        }
        bckUpList.push(inputCharacters[0])
        setAllEnteredChar(bckUpList)
    }
    //first render
    //get api 

    useEffect(()=>{
        let matchedCount = 0;
        allEnteredChar.map((item, id) => {
          if (splittedWinningNameArr.includes(item)) {
            matchedCount = matchedCount + 1;
          }
        });
        if(splittedWinningNameArr.length ===matchedCount){
            alert("hurray you won")
        }
    },[allEnteredChar])

    

    const hangingImageArr = ['O', ['/','|', '\\'], '|', ['/', '\\']]
    return (
        <>
      Hangman game
      <input placeholder="enter name" onKeyUp={(e)=> setInputCharacters(e.target.value)}/>
      <button onClick={()=> triggerSubmit()}>Submit</button>
       {allEnteredChar}
     
        {splittedWinningNameArr.map(item=>{
            return <li>{allEnteredChar.includes(item) ? item : null}</li>
        })}
        <br/>
        {wrongList.length}

        {wrongList.map((item,id)=>{
            return(<h1>{hangingImageArr[id]}</h1>)
        })}
        </>
    )
}

export default PlayGround
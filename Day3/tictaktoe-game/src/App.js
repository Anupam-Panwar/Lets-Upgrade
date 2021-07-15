import React, {useState} from 'react'
import Icon from "./Components/Icon"
// import react-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import reactstrap
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";


const tiktacArray = new Array(9).fill("")
const App = () => {
    let [isCross, setIsCross] = useState(true)
    let [winMessage, setWinMessage] = useState("")

    const playAgain=()=>{
        setIsCross(true)
        setWinMessage("")
        tiktacArray.fill("")
    }

    const findWinner=()=>{
        if(tiktacArray[0]!="" && tiktacArray[0]==tiktacArray[1] && tiktacArray[1]==tiktacArray[2])
        setWinMessage(tiktacArray[0]+" Won");
        else if(tiktacArray[3]!="" && tiktacArray[3]==tiktacArray[4] && tiktacArray[4]==tiktacArray[5])
        setWinMessage(tiktacArray[3]+" Won");
        else if(tiktacArray[6]!="" && tiktacArray[6]==tiktacArray[7] && tiktacArray[7]==tiktacArray[8])
        setWinMessage(tiktacArray[6]+" Won");
        else if(tiktacArray[0]!="" && tiktacArray[0]==tiktacArray[3] && tiktacArray[3]==tiktacArray[6])
        setWinMessage(tiktacArray[0]+" Won");
        else if(tiktacArray[1]!="" && tiktacArray[1]==tiktacArray[4] && tiktacArray[4]==tiktacArray[7])
        setWinMessage(tiktacArray[1]+" Won");
        else if(tiktacArray[2]!="" && tiktacArray[2]==tiktacArray[5] && tiktacArray[5]==tiktacArray[8])
        setWinMessage(tiktacArray[2]+" Won");
        else if(tiktacArray[0]!="" && tiktacArray[0]==tiktacArray[4] && tiktacArray[4]==tiktacArray[8])
        setWinMessage(tiktacArray[0]+" Won");
        else if(tiktacArray[2]!="" && tiktacArray[2]==tiktacArray[4] && tiktacArray[4]==tiktacArray[6])
        setWinMessage(tiktacArray[2]+" Won");
    }

 

    return(
        <div> <Icon choice="cross"/> </div>
    )
}

export default App;
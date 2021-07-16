import React from 'react';
import { FaTimes,FaRegCircle } from "react-icons/fa";

const Icon = ({choice})=>{
    switch(choice){
        case "cross":
            return <FaTimes className="cross icon"/>;
        case "circle": 
            return <FaRegCircle className="circle icon" />;
        default:
            return <></>;
    }
}
export default Icon;
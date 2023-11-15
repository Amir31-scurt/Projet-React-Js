import { useState } from "react"
import React from "react"

export default function Picture({imgName, index, handleReomve} ){
    const [showXButton, setShowXButton] = useState(-1)
    return(
        <div className='relative' 
        key={index} 
        onMouseEnter={() => setShowXButton(index)} 
        onMouseLeave={() => setShowXButton(-1)}>
            <button className={`w-5 h-5 pb-2 rounded-xl text-center flex
            justify-center items-center absolute text-red-500 right-16 top-2 bg-white text-xl focus:outline-none ${index === showXButton ? "" : "hidden"}`}
            onClick={() => handleReomve(index)}>x</button>
            <img src={imgName} className="mx-auto rounded-full w-36 h-36 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"></img>
        </div>
    )
}
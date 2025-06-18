import React from "react";

function Button({colorName, setColor}) {
    const changeColor = () =>{
        setColor(colorName);
    };

    return(
        <button onClick={changeColor} >{colorName}</button>
    )
};
export default Button;
import React from "react";

const style = {

    width: '20rem',
    height: '4rem',
    borderRadius: '2rem',
    backgroundColor: 'aqua',
    fontSize: '1.5rem',
    cursor: 'pointer',
}




function Button() {
    return (
        <button style={style} >Contact</button>
    )
}
export default Button;
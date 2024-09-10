import React from 'react';
import '/src/App.css'

function Btns({btnName, colorName, clickBtn}){
    return (
        <button  onClick={() => clickBtn(colorName)} className='btns' style={
            {backgroundColor : colorName,
                color : "#fff"
            }
            }>
            {btnName}
        </button>
    )
}

export default Btns
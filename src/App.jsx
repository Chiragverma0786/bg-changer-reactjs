import React, { useState } from 'react'
import Btns from './components/button.jsx'
import './App.css'

function App() {
    let [color, setColor] = useState("olive")

    const handleColorChange = (newColor) => {
      setColor(newColor);
    };

  return (
    <>
      <div className='container' style={{backgroundColor : color}}>
        <div className='buttons'>
        <Btns clickBtn={handleColorChange} btnName = "Red" colorName = "red" />
        <Btns clickBtn={handleColorChange} btnName = "Blue" colorName= "blue" />
        <Btns clickBtn={handleColorChange} btnName = "Black" colorName= "Black" />
        <Btns clickBtn={handleColorChange} btnName = "Pink" colorName= "Pink" />
        <Btns clickBtn={handleColorChange} btnName = "Green" colorName= "Green" />
        <Btns clickBtn={handleColorChange} btnName = "Violet" colorName= "Violet" />
        <Btns clickBtn={handleColorChange} btnName = "Yellow" colorName= "yellow" />
        <Btns clickBtn={handleColorChange} btnName = "Orange" colorName= "orange" />
        </div>
      </div>
    </>
  )
}

export default App

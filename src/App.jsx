import { useState } from 'react'
import './App.css'

const Color = ({color, setSelectedColor}) => {
  return (
    <div 
      className={color} 
      onClick={() => setSelectedColor(color)} 
     ></div>
  )
}

const App = () => {
const [selectedColor, setSelectedColor] = useState("")

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">{
        <div> 
          <Color color="green" setSelectedColor={setSelectedColor}/>
          <Color color="red" setSelectedColor={setSelectedColor}/>
          <Color color="violet" setSelectedColor={setSelectedColor}/>
        </div>
      }</div>
    </div>
  );
};

export default App;

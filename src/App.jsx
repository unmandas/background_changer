import Color_Button from "./components/Color_Button"
import { useState } from "react";

const App = () => {
  const [col,setCol] = useState("olive");
  
  function handleClick(data){
    setCol(data)
  }

  return (
    <div style={{backgroundColor:`${col}`}} className="h-screen mt-0 p-10 duration-200">
      <div  className="fixed bottom-12 inset-x-10 px-10 flex flex-wrap justify-around bg-white rounded-lg p-2 shadow-lg ">
        <Color_Button state={handleClick} color="violet"/>
        <Color_Button state={handleClick} color="indigo"/>
        <Color_Button state={handleClick} color="blue"/>
        <Color_Button state={handleClick} color="green"/>
        <Color_Button state={handleClick} color="yellow"/>
        <Color_Button state={handleClick} color="orange"/>
        <Color_Button state={handleClick} color="red"/>
        <Color_Button state={handleClick} color="black"/>
        <Color_Button state={handleClick} color="white"/>
      </div>
    </div>
  )
}

export default App
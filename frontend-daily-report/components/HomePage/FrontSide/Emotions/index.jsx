import emotionsStyles from "./Emotions.module.css"
import { useState } from 'react';

function Emotions() {
  function buttonClick(key) {
    console.log("before", activeIndex, key);
    setActiveIndex(key)
    console.log("after", activeIndex, key);
  }

  const idButtonColor = ["excellent", "fine", "good", "notBad", "bad", "terrible"]
  const [activeIndex, setActiveIndex] = useState(3)

  return(
    <div className={emotionsStyles.emotionsDiv}>
      {idButtonColor.map((color, index) => (
        <button type="button" className={`${emotionsStyles.emotion} ${activeIndex == index ? "active" : ""}`} 
        id={color} key={index} onClick={() => buttonClick(index)}></button>
      ))}
    </div>
  )
}

export default Emotions
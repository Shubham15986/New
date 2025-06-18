
import { useState } from "react";
import Button from "./button";

function BgChanger(){
    const [bgColor, setBgColor] = useState("white");

    const appStyle = {
    height: "100vh",
    backgroundColor: bgColor,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    flexWrap: "wrap",
  };

  return(
      <div style={appStyle}>
          <Button colorName="red" setColor = {setBgColor}/>
      </div>
  )
}
export default BgChanger;
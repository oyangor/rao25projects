import { useState } from "react";
import "./styles-random.css";

export default function RandomColorGeneretor() {
  const [typeOfColor, setTypeOfColor] = useState({
    boxWidth: 40,
    valueColor: "hex",
  });
  const [color, setColor] = useState("#000000");

  function handleRandomColorGenerator(length) {
    return Math.floor(Math.random() * length);
  }

  function handleRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexcolor = "#";

    for (let i = 0; i < 6; i++) {
      hexcolor += hex[handleRandomColorGenerator(hex.length)];
    }
    setColor(hexcolor);
    console.log(typeOfColor.boxWidth);
  }
  function handleRandomRgbColor() {
    let r = handleRandomColorGenerator(256);
    let g = handleRandomColorGenerator(256);
    let b = handleRandomColorGenerator(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  return (
    <div className="app-container">
      <h1 className="title">Random Color Generator</h1>
      <div className="button-container">
        <button
          onClick={() =>
            setTypeOfColor({
              boxWidth: 50,
              valueColor: "hex",
            })
          }
          style={{ width: typeOfColor.boxWidth }}
        >
          Hex
        </button>
        <button
          onClick={() =>
            setTypeOfColor({
              boxWidth: 70,
              valueColor: "rgb",
            })
          }
          style={{ width: typeOfColor.boxWidth }}
        >
          Rgb
        </button>
        <button
          onClick={
            typeOfColor.valueColor === "hex"
              ? handleRandomHexColor
              : handleRandomRgbColor
          }
        >
          Generate Random Color
        </button>
      </div>
      <div style={{ background: color }} className="box">
        Box for Random Color = {color.toLowerCase()}
      </div>
    </div>
  );
}

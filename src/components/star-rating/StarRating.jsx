import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./starrating.css";

export default function StarRating({ numberOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(index) {
    setRating(index);
    //console.log(index);
  }

  function handleMouseEnter(index) {
    //console.log(index);
    setHover(index);
  }

  function handleMouseLeave(index) {
    //console.log(index);
    setHover(rating);
  }

  return (
    <div className="rating">
      {Array(numberOfStars)
        .fill()
        .map((_, index) => {
          index += 1;

          return (
            <FaStar
              key={index}
              className={index <= (hover || rating) ? "active" : "inactive"}
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              size={40}
            />
          );
        })}
    </div>
  );
}

import { useRef, useState } from "react";
import UseoutsideClick from ".";

export default function UseOnClickOutsideTest() {
  const ref = useRef();
  UseoutsideClick(ref, () => setShowContent(false));
  const [showContenet, setShowContent] = useState(false);

  return (
    <div>
      {showContenet ? (
        <div ref={ref}>
          <h1>This is Random content</h1>
          <p>To close please click outside</p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
}

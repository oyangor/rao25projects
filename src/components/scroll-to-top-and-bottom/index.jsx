import { useEffect, useRef } from "react";
import useFetch from "../usefetch";

export default function ScrollToTopAndBottom() {
  const bottomRef = useRef(null);

  const { data, loading, error } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );
  //console.log(data, loading, error);
  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  function handleScrollToBottom() {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }

  if (error) {
    return <h1>Error occured while processing your request</h1>;
  }
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Scroll to Top And Bottom</h1>
      <h3>This is the top section</h3>
      <button onClick={handleScrollToBottom}>Scroll to bottom</button>
      <ul>
        {data && data.products && data.products.length
          ? data.products.map((item) => <li key={item.id}>{item.title}</li>)
          : null}
      </ul>
      <button onClick={handleScrollToTop}>Scroll to top</button>
      <h3>This is the bottom of the page</h3>
      <div ref={bottomRef}></div>
    </div>
  );
}

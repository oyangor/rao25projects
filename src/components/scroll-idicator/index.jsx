import { useEffect, useState } from "react";
import "./scroll.css";

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(getUrl) {
    setLoading(true);

    try {
      const res = await fetch(getUrl);
      const data = await res.json();

      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
        setErrorMsg(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
      setErrorMsg(e);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handleScrollPercentage() {
    //console.log(document.body.scrollTop,document.documentElement.scrollTop,document.documentElement.scrollHeight,document.documentElement.clientHeight);

    const scrolledHeight =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((scrolledHeight / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  console.log(scrollPercentage);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (errorMsg) {
    return <div>There was an error while carrying out your request</div>;
  }

  //console.log(data);

  return (
    <div>
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress-container">
          <div
            className="current-progress-container"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="data-container">
        {data.map((dataItem, index) => {
          return <p key={dataItem.id}>{dataItem.title}</p>;
        })}
      </div>
    </div>
  );
}

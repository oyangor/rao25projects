import { useEffect, useState } from "react";
import "./styles.css";
import User from "./user";

export default function GithubProfileFinder() {
  const [input, setInput] = useState("oyangor");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchGithubUserData() {
    try {
      setLoading(true);
      const res = await fetch(`https://api.github.com/users/${input}`);
      const data = await res.json();
      console.log(data);

      if (data) {
        setUserData(data);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  function handleSubmit() {
    fetchGithubUserData();
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          type="text"
          className="input"
          name="search-by-name"
          placeholder="Search Github Username..."
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />

        <button onClick={handleSubmit}>Search</button>
      </div>
      <div>{userData !== null ? <User user={userData} /> : null}</div>
    </div>
  );
}

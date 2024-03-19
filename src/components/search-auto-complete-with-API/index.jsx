import { useEffect, useState } from "react";
import "./searchauto.css";
import Suggestions from "./suggestion";

export default function SearchAutoComplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdowm] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length >= 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];

      setFilteredUsers(filteredData);
      setShowDropdowm(true);
    } else {
      setShowDropdowm(false);
    }
  }

  function handleClick(event) {
    setShowDropdowm(false);
    setSearchParam(event.target.innerText);
    setFilteredUsers([]);
  }

  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();

      //console.log(data);

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setErrorMsg(null);
      }
    } catch (e) {
      console.log(e);
      setErrorMsg(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  console.log(users);
  console.log(filteredUsers);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (errorMsg) {
    return <div>There was a error while processing your request!!</div>;
  }
  return (
    <div className="search-autocomplete-container">
      <input
        type="text"
        name="search-users"
        placeholder="Search Users here..."
        value={searchParam}
        onChange={(event) => handleChange(event)}
      />
      {showDropdown && (
        <Suggestions handleClick={handleClick} data={filteredUsers} />
      )}
    </div>
  );
}

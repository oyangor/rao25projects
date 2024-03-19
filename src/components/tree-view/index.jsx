import SideBar from "./SideBar.jsx";
import "./styles.css";

export default function TreeView() {
  return (
    <div className="main-tree-view">
      <SideBar />
      <div className="container-tree-view">
        <h1 className="title">My React App</h1>
        <p className="info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button className="btn">Explore now</button>
      </div>
    </div>
  );
}

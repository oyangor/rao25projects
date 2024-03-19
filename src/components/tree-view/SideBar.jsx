import SideBarItems from "./SideBarItems";
import items from "./data.json";
import "./styles.css";

export default function SideBar() {
  //console.log(items);
  return (
    <div className="sidebar-tree-view">
      {items.map((item, index) => (
        <SideBarItems key={index} item={item} />
      ))}
    </div>
  );
}

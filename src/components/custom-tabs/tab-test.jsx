import Tabs from "./tabs";
import "./tabs.css";

function RandomComponent() {
  return <h1>Random Content</h1>;
}

export default function TabTest() {
  const tabs = [
    {
      label: "Tab 1",
      content: (
        <div>
          <h1>This is content for tab 1</h1>
        </div>
      ),
    },
    {
      label: "Tab 2",
      content: (
        <div>
          <h2>This is content for tab 2</h2>
        </div>
      ),
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ];

  function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }

  return <Tabs tabsContent={tabs} onChange={handleChange} />;
}

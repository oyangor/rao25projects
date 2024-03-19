import { useContext } from "react";
import { FeatureFlagsContext } from "./context/index.jsx";
import "./styles-feature.css";

import LightDarkMode from "../light-dark-mode/index-ld.jsx";
import RandomColorGeneretor from "../random-color-generator/index.jsx";
import TreeView from "../tree-view/index.jsx";
import Accordian from "../accordian/Accordian.jsx";
import TicTacToe from "../tic-tac-toe/index.jsx";
import TabTest from "../custom-tabs/tab-test.jsx";
import ModalTest from "../custom-modal-popup/modal-test.jsx";
import GithubProfileFinder from "../github-profile-finder/index.jsx";
import ImageSlider from "../image slider/index.jsx";
import LoadMoreData from "../load-more-data-from-API/index.jsx";
import ScrollIndicator from "../scroll-idicator/index.jsx";
import SearchAutoComplete from "../search-auto-complete-with-API/index.jsx";
import QrCodeGenerator from "../qr-code-generator/index.jsx";
import Weather from "../weather-forecast/index.jsx";

export default function FeatureFlags() {
  const { enabledFlags, loading } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showRandomColorGeneretor",
      component: <RandomColorGeneretor />,
    },
    {
      key: "showAccordian",
      component: <Accordian />,
    },
    {
      key: "showTreeView",
      component: <TreeView />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: "showTabs",
      component: <TabTest />,
    },
    {
      key: "customModalPopUp",
      component: <ModalTest />,
    },
    {
      key: "githubprofilefinder",
      component: <GithubProfileFinder />,
    },
    {
      key: "showImageSlider",
      component: (
        <ImageSlider
          url={"https://picsum.photos/v2/list"}
          limit={"20"}
          page={"1"}
        />
      ),
    },
    {
      key: "showLoadMoreData",
      component: <LoadMoreData />,
    },
    {
      key: "showscrollindicator",
      component: (
        <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
      ),
    },
    {
      key: "showsearchautocomplete",
      component: <SearchAutoComplete />,
    },
    {
      key: "showqrcodegenerator",
      component: <QrCodeGenerator />,
    },
    {
      key: "showqrcodegenerator",
      component: <Weather />,
    },
  ];

  function checkEnabledFlags(currentKey) {
    return enabledFlags[currentKey];
  }

  if (loading) return <h1>Loading data ! Please wait</h1>;
  return (
    <div className="feature-container">
      <h1 className="feature-title">Feature Flags</h1>
      {componentsToRender.map((componentItem, index) =>
        checkEnabledFlags(componentItem.key) ? (
          <div key={index}>

            {componentItem.component}
            <hr className="line" />
          </div>
        ) : null
      )}
    </div>
  );
}

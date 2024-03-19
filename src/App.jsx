import { useState } from "react";
import ImageSlider from "./components/image slider/index.jsx";
import LoadMoreData from "./components/load-more-data-from-API/index.jsx";
import TreeView from "./components/tree-view/index.jsx";
import QrCodeGenerator from "./components/qr-code-generator/index.jsx";
import LightDarkMode from "./components/light-dark-mode/index-ld.jsx";
import ScrollIndicator from "./components/scroll-idicator/index.jsx";
import TabTest from "./components/custom-tabs/tab-test.jsx";
import ModalTest from "./components/custom-modal-popup/modal-test.jsx";
import GithubProfileFinder from "./components/github-profile-finder/index.jsx";
import SearchAutoComplete from "./components/search-auto-complete-with-API/index.jsx";
import TicTacToe from "./components/tic-tac-toe/index.jsx";
import FeatureFlagGlobalState from "./components/feature-flag/context/index.jsx";
import FeatureFlags from "./components/feature-flag/index.jsx";
import Accordian from "./components/accordian/Accordian.jsx";
import UseFetchHookTest from "./components/usefetch/test.jsx";
import UseOnClickOutsideTest from "./components/use-outside-click/test.jsx";
import UseWindowResizaTest from "./components/use-window-resize/index.jsx";
import ScrollToTopAndBottom from "./components/scroll-to-top-and-bottom/index.jsx";
import ScrollToSection from "./components/scroll-to-top-and-bottom/scroll-to-section.jsx";
import Weather from "./components/weather-forecast/index.jsx";

function App() {
  return (
    <div>
      {/* <Accordian /> */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        limit={"20"}
        page={"1"}
       /> */}
      {/* <LoadMoreData /> */}
      {/* <TreeView /> */}
      {/*<QrCodeGenerator /> */}
      {/*<LightDarkMode /> */}
      {/*<ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}
      {/* <TabTest /> */}
      {/* <ModalTest /> */}
      {/* <GithubProfileFinder /> */}
      {/*<SearchAutoComplete /> */}
      {/*<TicTacToe /> */}
      <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState>
      {/* <UseFetchHookTest /> */}
      {/*<UseOnClickOutsideTest /> */}
      {/* <UseWindowResizaTest /> */}
      {/* <ScrollToTopAndBottom /> */}
      {/* <ScrollToSection /> */}

      {/* <Weather /> */}
    </div>
  );
}

export default App;

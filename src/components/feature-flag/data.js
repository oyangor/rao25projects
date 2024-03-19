const dummyApiResponse = {
  showLightAndDarkMode: true,
  showTicTacToeBoard: true,
  showRandomColorGeneretor: true,
  showAccordian: true,
  showTreeView: true,
  showTabs: true,
  customModalPopUp: true,
  githubprofilefinder: true,
  showImageSlider: true,
  showLoadMoreData: true,
  showscrollindicator: true,
  showsearchautocomplete: true,
  showqrcodegenerator: true,
  showweather: true,
  showstarrating: true,
};

function featureFlagDataServiceCall() {
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
    else reject("Error occured!!");
  });
}

export default featureFlagDataServiceCall;

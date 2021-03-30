const handleWindowWidth = (componentState) => {
  const windowWidth = window.innerWidth;
  if (windowWidth < 830) {
    componentState(false);
  } else {
    componentState(true);
  }
};

export default handleWindowWidth;

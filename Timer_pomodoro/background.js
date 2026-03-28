// Cette fonction dit à Chrome : "Au clic sur l'icône, ouvre le Side Panel"
chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));
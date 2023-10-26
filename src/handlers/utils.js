const openInNewTab = (links) => {
  for (const link of links) {
    console.log(link);
    window.open(link, "_blank");
  }
};
const AddToClipboard = (text) => {
  window.navigator.clipboard.writeText(text);
};
export { openInNewTab, AddToClipboard };

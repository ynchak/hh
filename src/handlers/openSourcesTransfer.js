import { openInNewTab } from "./utils";
const url = "https://gomer.rozetka.company/gomer/items/source/";
const attr = "?ItemSearch%5Bid%5D=";
const lengthUrlIds = 50;

const createLink = (line) => {
  const links = [];
  const [source, ids] = line.split("\t");
  const list = ids.split(", ");
  if (list.length > lengthUrlIds) {
    const countIteration = Math.ceil(list.length / lengthUrlIds);
    for (let i = 0; i < countIteration; i++) {
      const piece = list.splice(0, lengthUrlIds);
      links.push(`${url}${source}${attr}${piece.join(",")}`);
    }
    return links;
  }
  links.push(`${url}${source}${attr}${list.join(",")}`);
  return links;
};
const sourcesTransferOpen = (columns) => {
  const lines = columns.split("\n");
  const links = [];
  for (const line of lines) {
    if (line == "") continue;
    links.push(...createLink(line));
  }
  openInNewTab(links);
};

export default sourcesTransferOpen;

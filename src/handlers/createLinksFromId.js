import { AddToClipboard } from "./utils";

const url = "https://rozetka.com.ua/ua/";
const createLinksFromId = (column) => {
  const lines = column.split("\n");
  const links = [];
  for (const line of lines) {
    if (line === "") continue;
    links.push(`${url}${line}/p${line}/`);
  }
  AddToClipboard(links.join("\n"));
  return links.length;
};
export default createLinksFromId;

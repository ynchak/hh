import { AddToClipboard } from "./utils";

const toText = (store) => {
  const text = [];
  const entries = store.entries();
  for (const [source, list] of entries) {
    text.push(`${source}\t${list.join(", ")}`);
  }
  return text.join("\n");
};
const transformData = (columns) => {
  const store = new Map();
  const lines = columns.split("\n");
  for (const line of lines) {
    if (line === "") continue;
    const [id, source] = line.split("\t");
    const list = store.get(source) ?? [];
    store.set(source, [...list, id]);
  }
  const text = toText(store);
  AddToClipboard(text);
};
export default transformData;

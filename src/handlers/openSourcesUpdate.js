import { formForSave } from "../../store";
import { openInNewTab } from "./utils";

const param = {
  address: "https://gomer.rozetka.company/gomer/sellers/attributes/source/",
  attributes: "?SyncSourceAttributeSearch%5Battribute_id_title%5D=",
};
const category = {
  address: "https://gomer.rozetka.company/gomer/sellers/attributes/source/",
  attributes: "?SyncSourceAttributeSearch%5Brz_category_id%5D=",
  param: "&SyncSourceAttributeSearch%5Battribute_id_title%5D=",
};
const vendor = {
  address: "https://gomer.rozetka.company/gomer/sellers/vendors/source/",
  attributes: "?SyncSourceVendorSearch%5Bproducer_title%5D=",
};
const data = {
  param,
  category,
  vendor,
};
class Type {
  constructor(name, value) {
    this.value = value;
    this.data = data[name];
  }
  getAddres() {
    return this.data.address;
  }
  getAttributes() {
    return this.data.attributes + this.value;
  }
  getParam() {
    return this.getAttributes() + this.data.param;
  }
}
const createLink = (variant, source, param) => {
  const addres = variant.getAddres();
  const attributes = param
    ? variant.getParam() + param
    : variant.getAttributes();
  return `${addres}${source}${attributes}`;
};
const sourcesUpdateOpen = (column) => {
  const { variant, value, paramValue } = formForSave.getState();
  const lines = column.split("\n");
  const type = new Type(variant, value);
  const links = [];
  for (const line of lines) {
    if (line === "") continue;
    links.push(createLink(type, line, paramValue));
  }
  openInNewTab(links);
};
export default sourcesUpdateOpen;

import { create } from "zustand";
import {
  transformData,
  sourcesTransferOpen,
  sourcesUpdateOpen,
  splitColumn as splitColumnFn,
  createLinksFromId,
} from "./src/handlers";

const localStorageKey = "hfw";

const textareaFormsStore = create(() => ({
  openSourcesTransfer: {
    placeholder: "Введи стовпчики. Джерела і IDs",
    btnTitle: "Відкрити джерела",
    btnIcon: "open",
    btnColor: "indigo",
    addRadio: false,
    action: sourcesTransferOpen,
  },
  openSourcesUpdate: {
    placeholder: "Введи стовпчик. Джерела",
    btnTitle: "Відкрити джерела",
    btnIcon: "open",
    btnColor: "indigo",
    addRadio: false,
    action: sourcesUpdateOpen,
  },
  trasformDataTransfer: {
    placeholder: "Введи стовпчики. ID і Джерела",
    btnTitle: "Трансформувати",
    btnIcon: "transform",
    btnColor: "orange",
    addRadio: false,
    action: transformData,
  },
  splitColumn: {
    placeholder: "Введи стовпчик. ID",
    btnTitle: "Розбити стовпчик",
    btnIcon: "split",
    btnColor: "orange",
    addRadio: true,
    action: splitColumnFn,
  },
  createLinks: {
    placeholder: "Введи стовпчик. ID",
    btnTitle: "Зробити посилання",
    btnIcon: "link",
    btnColor: "orange",
    addRadio: false,
    action: createLinksFromId,
  },
}));

const getInitialVariant = () => {
  if (!localStorage[localStorageKey]) {
    return {
      variant: "",
      value: "",
      paramValue: "",
    };
  }
  const hfw = localStorage.getItem(localStorageKey);
  const { variant, value, paramValue } = JSON.parse(hfw);
  return {
    variant,
    value,
    paramValue,
  };
};

const formForSave = create((set) => {
  return {
    ...getInitialVariant(),
    update: ({ variant, value, paramValue }) =>
      set((state) => {
        const hfw = { variant, value, paramValue };
        localStorage.clear();
        localStorage.setItem(localStorageKey, JSON.stringify(hfw));
        return { ...state, variant, value, paramValue };
      }),
  };
});

export { textareaFormsStore, formForSave };

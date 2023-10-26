import { create } from "zustand";
import {
  transformData,
  sourcesTransferOpen,
  sourcesUpdateOpen,
  splitColumn as splitColumnFn,
  createLinksFromId,
  openInSF,
} from "./src/handlers";

const localStorageKey = "hfw";

const textareaFormsStore = create(() => ({
  openSourcesTransfer: {
    placeholder: "Введи стовпчики. Джерела і IDs",
    btnTitle: "Відкрити джерела",
    btnIcon: "open",
    btnColor: "indigo",
    radioGroup: null,
    action: sourcesTransferOpen,
  },
  openSourcesUpdate: {
    placeholder: "Введи стовпчик. Джерела",
    btnTitle: "Відкрити джерела",
    btnIcon: "open",
    btnColor: "indigo",
    radioGroup: null,
    action: sourcesUpdateOpen,
  },
  trasformDataTransfer: {
    placeholder: "Введи стовпчики. ID і Джерела",
    btnTitle: "Трансформувати",
    btnIcon: "transform",
    btnColor: "orange",
    radioGroup: null,
    action: transformData,
  },
  splitColumn: {
    placeholder: "Введи стовпчик. ID",
    btnTitle: "Розбити стовпчик",
    btnIcon: "split",
    btnColor: "orange",
    radioGroup: {
      defaultValue: 500,
      values: [50, 200, 500],
    },
    action: splitColumnFn,
  },
  openSF: {
    placeholder: "Введи стовпчик з ID",
    btnTitle: "Відкрити у конструкторі умов",
    btnIcon: "open",
    btnColor: "indigo",
    radioGroup: {
      defaultValue: "all",
      values: [
        { status: "all", value: "Всі" },
        { status: "active", value: "Активні" },
      ],
    },
    action: openInSF,
  },
  createLinks: {
    placeholder: "Введи стовпчик. ID",
    btnTitle: "Зробити посилання",
    btnIcon: "link",
    btnColor: "orange",
    radioGroup: null,
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

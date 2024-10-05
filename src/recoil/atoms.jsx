import { atom } from "recoil";

export const menuItemsState = atom({
  key: "menuItemsState",
  default: [], 
});

export const allOrdersState = atom({
  key: "allOrdersState",
  default: [], // default value for orders
});


export const allItemsState = atom({
  key: "allItemsState",
  default: [], 
});
import { ShopActionTypes } from "./shop-types";

export const updateColections = (collections) => {
  return {
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collections,
  };
};

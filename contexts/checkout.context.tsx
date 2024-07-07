import { createContext, useContext } from "react";
import CartStore from "@Stores/cart";

interface Checkout {
  cart: CartStore;
}

export const checkout: Checkout = {
  cart: new CartStore(),
};

export const StoreContext = createContext(checkout);

export function useStore() {
  return useContext(StoreContext);
}

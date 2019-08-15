import { createContext } from "react";

const itemsContext = createContext();

export default itemsContext;
export const Provider = itemsContext.Provider;

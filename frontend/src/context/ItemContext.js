// Shares item CRUD state across routed pages without prop drilling.
import { createContext, useContext } from 'react';

export const ItemContext = createContext(null);
export const useItemContext = () => {
  const value = useContext(ItemContext);
  if (!value) throw new Error('useItemContext must be used inside ItemContext.Provider');
  return value;
};

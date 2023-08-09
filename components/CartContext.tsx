import { createContext, useContext, useState } from 'react';

interface CartContextProps {
  itemCount: number;
  addToCart: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }: any) => {
  const [itemCount, setItemCount] = useState(0);

  const addToCart = () => {
    setItemCount(prevCount => prevCount + 1);
  };

  const contextValue: CartContextProps = {
    itemCount,
    addToCart,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};
import { createContext, useContext, useState } from 'react';

interface CartItem {
  id: string;
  university: string;
  course: string;
  description: string;
  price: string;
}

interface CartContextProps {
  itemCount: number;
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (productId: string) => void;
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
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: CartItem) => {
    setItemCount(prevCount => prevCount + 1);
    setCart(prevCart => [...prevCart, product]);
  };

  const removeFromCart = (productId: string) => {
    setItemCount(prevCount => prevCount - 1);
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const contextValue: CartContextProps = {
    itemCount,
    cart,
    addToCart,
    removeFromCart,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};
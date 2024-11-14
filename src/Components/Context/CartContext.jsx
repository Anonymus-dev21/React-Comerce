import { createContext, useEffect } from "react";
import { useState } from "react";
export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(carritoInicial);
  const [stockMax, setStockMax] = useState(false);
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const TotalPrecio = cart
    .reduce((acc, pdt) => acc + pdt.precio * pdt.cantidad, 0)
    .toFixed(2);
  const updateQuantity = (id, amount) => {
    setCart(
      cart.map((product) =>
        product.id === id
          ? { ...product, cantidad: product.cantidad + amount }
          : product
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(cart));
  }, [cart]);

  const removeProduct = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  const cleanCart = () => {
    setCart([]);
  };
  const totalProd = cart.reduce((acc, pdt) => acc + pdt.cantidad, 0).toFixed(0);

  let data = {
    cart,
    setCart,
    addToCart,
    updateQuantity,
    removeProduct,
    stockMax,
    setStockMax,
    totalProd,
    cleanCart,
    TotalPrecio,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

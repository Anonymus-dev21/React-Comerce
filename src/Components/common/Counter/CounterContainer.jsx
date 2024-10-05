import { useState } from "react";
import { Counter } from "./Counter";
export const CounterContainer = ({ productDetail }) => {
  const [cantidad, setCantidad] = useState(1);
  const sumar = () => {
    setCantidad(cantidad + 1);
  };
  const restar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };
  return (
    <div>
      <Counter
        cantidad={cantidad}
        sumar={sumar}
        restar={restar}
        precioTotal={productDetail}
      />
    </div>
  );
};

import { useState } from "react";
import { Counter } from "./Counter";
export const CounterContainer = ({
  productDetail,
  onAdd,
  cantidad,
  setCantidad,
}) => {
  const [disabled, setDisabled] = useState(false);

  const sumar = () => {
    if (cantidad < productDetail.stock) {
      setCantidad(cantidad + 1);
      setDisabled(false);
    } else if (cantidad === productDetail.stock) {
      setDisabled(true);
    }
  };
  const restar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
    if (cantidad <= productDetail.stock) {
      setDisabled(false);
    }
  };
  return (
    <div>
      <Counter
        cantidad={cantidad}
        sumar={sumar}
        restar={restar}
        precioTotal={productDetail}
        disabled={disabled}
        onAdd={onAdd}
      />
    </div>
  );
};

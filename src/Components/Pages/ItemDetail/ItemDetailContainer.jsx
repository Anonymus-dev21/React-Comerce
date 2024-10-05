import { useParams } from "react-router-dom";
import { productos } from "../../../ProductsMock";
import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
export const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let DetailFind = productos.find((product) => product.id === parseInt(id));
    if (DetailFind) {
      setProductDetail(DetailFind);
    }
  }, [id]);

  return <ItemDetail productDetail={productDetail} />;
};

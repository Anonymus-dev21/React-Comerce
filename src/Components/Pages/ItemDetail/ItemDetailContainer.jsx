import { useParams } from "react-router-dom";
// import { productos } from "../../../ProductsMock";
import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/configDb";
import { toast } from "sonner";
import { Loader } from "../../common/loader";
export const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  const { cart, addToCart, setCart, stockMax, setStockMax } =
    useContext(CartContext);
  const [cantidad, setCantidad] = useState(1);
  useEffect(() => {
    setIsLoading(true);
    const docRef = doc(db, "productos", id);
    getDoc(docRef)
      .then((resp) => {
        setProductDetail({ ...resp.data(), id: resp.id });
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  const onAdd = (quantity) => {
    let productosEnCarrito = { ...productDetail, cantidad: quantity };
    let productoExistente = cart.some(
      (elemento) => elemento.id === productDetail.id
    );
    if (productoExistente) {
      let nuevoCarrito = cart.map((elemento) => {
        if (elemento.id === productDetail.id) {
          if (elemento.cantidad + quantity <= productDetail.stock) {
            toast.success("Se agrego correctamente", {
              duration: 1000,
              position: "top-left",
            });
            return { ...elemento, cantidad: elemento.cantidad + quantity };
          } else {
            setStockMax(true);
            return { ...elemento, cantidad: productDetail.stock };
          }
        } else {
          return elemento;
        }
      });
      setCart(nuevoCarrito);
    } else {
      toast.success("Se agrego correctamente", {
        duration: 1000,
        position: "top-left",
      });
      addToCart(productosEnCarrito);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ItemDetail
          productDetail={productDetail}
          onAdd={onAdd}
          cantidad={cantidad}
          setCantidad={setCantidad}
          stockMax={stockMax}
          setStockMax={setStockMax}
        />
      )}
    </>
  );
};
/******  be2775fd-29c1-4ed9-9ca0-26258d7a2b7e  *******/

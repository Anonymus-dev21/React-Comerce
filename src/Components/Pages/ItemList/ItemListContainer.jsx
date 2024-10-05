import { useEffect, useState } from "react";
import { productos } from "../../../ProductsMock";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [MensajeError, setMensajeError] = useState(false);
  const { categoryName } = useParams();
  const [items, setItems] = useState([]);
  const [precios, setPrecios] = useState("");
  const priceTarget = (e) => {
    let target = e.target.innerText;
    setPrecios(target);
  };
  useEffect(() => {
    const filterProducts = () => {
      let filteredProducts = productos;

      if (categoryName) {
        filteredProducts = filteredProducts.filter(
          (product) => product.categoria === categoryName
        );
      }

      if (precios === "10 - 30$") {
        filteredProducts = filteredProducts.filter(
          (product) => product.precio >= 10 && product.precio <= 30
        );
      } else if (precios === "30 - 50$") {
        filteredProducts = filteredProducts.filter(
          (product) => product.precio >= 30 && product.precio <= 50
        );
      } else if (precios === "+50$") {
        filteredProducts = filteredProducts.filter(
          (product) => product.precio >= 50
        );
      }

      return filteredProducts;
    };

    const getProducts = new Promise((resolve) => {
      const filteredData = filterProducts();
      if (filteredData.length > 0) {
        resolve(filteredData);
      } else {
        resolve([]);
      }
    });
    getProducts
      .then((data) => {
        console.log("Productos obtenidos:", data);
        setItems(data);
        setMensajeError(data.length === 0);
      })
      .catch((error) => {
        console.error("Error al obtener productos:", error.message);
      });
  }, [categoryName, precios]);
  return (
    <ItemList
      items={items}
      priceTarget={priceTarget}
      precios={precios}
      MensajeError={MensajeError}
      categoria={categoryName}
    />
  );
};

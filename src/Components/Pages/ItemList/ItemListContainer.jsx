import { useEffect, useState } from "react";
// import { productos } from "../../../ProductsMock";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import {
  addDoc,
  getDocs,
  doc,
  collection,
  query,
  where,
  QueryStartAtConstraint,
  Query,
} from "firebase/firestore";
import { db } from "../../../firebase/configDb";
import { Loader } from "../../common/loader";

export const ItemListContainer = () => {
  const [MensajeError, setMensajeError] = useState(false);
  const { categoryName } = useParams();
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [precios, setPrecios] = useState("");
  const priceTarget = (e) => {
    let target = e.target.innerText;
    setPrecios(target);
  };

  // useEffect(() => {
  // const filterProducts = () => {
  // let filteredProducts = productos;
  // if (categoryName) {
  //   filteredProducts = filteredProducts.filter(
  //     (product) => product.categoria === categoryName
  //   );
  // }
  // if (precios === "10 - 30$") {
  //   filteredProducts = filteredProducts.filter(
  //     (product) => product.precio >= 10 && product.precio <= 30
  //   );
  // } else if (precios === "30 - 50$") {
  //   filteredProducts = filteredProducts.filter(
  //     (product) => product.precio >= 30 && product.precio <= 50
  //   );
  // } else if (precios === "+50$") {
  //   filteredProducts = filteredProducts.filter(
  //     (product) => product.precio >= 50
  //   );
  // }
  // return filteredProducts;
  // };

  // const getProducts = new Promise((resolve) => {
  //   const filteredData = filterProducts();
  //   if (filteredData.length > 0) {
  //     resolve(filteredData);
  //   } else {
  //     resolve([]);
  //   }
  // });
  // getProducts
  //   .then((data) => {
  //
  //     setItems(data);
  //     setMensajeError(data.length === 0);
  //   })
  //   .catch((error) => {
  //     console.error("Error al obtener productos:", error.message);
  //   });
  // }, [categoryName, precios]);

  // const agregarProductosFirebase = () => {
  //   productos.forEach((product) => {
  //     addDoc(collection(db, "productos"), product);
  //   });
  // };

  useEffect(() => {
    setIsLoading(true);
    const itemsCollection = collection(db, "productos");
    let filters = [];

    if (categoryName) {
      filters.push(where("categoria", "==", categoryName));
    }

    if (precios === "10 - 30$") {
      filters.push(where("precio", ">=", 10), where("precio", "<=", 30));
    } else if (precios === "30 - 50$") {
      filters.push(where("precio", ">=", 30), where("precio", "<=", 50));
    } else if (precios === "+50$") {
      filters.push(where("precio", ">=", 50));
    }

    const filteredProducts = query(itemsCollection, ...filters);

    getDocs(filteredProducts)
      .then((snapshot) => {
        const productos = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        if (productos.length > 0) {
          setItems(productos);
          setMensajeError(false);
        } else {
          setMensajeError(true);
          setItems([]);
        }
      })
      .finally(() => setIsLoading(false));
  }, [categoryName, precios]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ItemList
          items={items}
          priceTarget={priceTarget}
          precios={precios}
          MensajeError={MensajeError}
          categoria={categoryName}
        />
      )}
    </>
  );
};

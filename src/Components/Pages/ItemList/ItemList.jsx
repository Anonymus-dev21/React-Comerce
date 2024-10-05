import { ProductCard } from "../../common/CardsProductos";
import { FilterContainer } from "../../common/Filters/FilterContainer";
import { ErrorMsj } from "../../common/ErrorMsj";
export const ItemList = ({
  items,
  priceTarget,
  precios,
  MensajeError,
  categoria,
}) => {
  console.log("items", items);
  return (
    <>
      <FilterContainer
        priceTarget={priceTarget}
        precios={precios}
        categoria={categoria}
      />

      <div className="w-full flex flex-wrap">
        {items.map((item) => {
          return (
            <ProductCard
              id={item.id}
              imagen={item.imagen}
              titulo={item.nombre}
              desc={item.descripcionCorta}
              key={item.id}
              precioItem={item.precio}
            />
          );
        })}
      </div>
      {MensajeError ? (
        <ErrorMsj msj="Esta Categoria no tiene productos en ese rango de precios, intentelo nuevamente con otro rango!" />
      ) : null}
    </>
  );
};

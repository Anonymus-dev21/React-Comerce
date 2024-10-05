import { Filter } from "./Filter";
export const FilterContainer = ({ priceTarget, precios, categoria }) => {
  return (
    <Filter priceTarget={priceTarget} precios={precios} categoria={categoria} />
  );
};

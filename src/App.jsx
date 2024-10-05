import { ItemDetailContainer } from "./Components/Pages/ItemDetail/ItemDetailContainer";
import { ItemListContainer } from "./Components/Pages/ItemList/ItemListContainer";
import { Navbar } from "./Components/Layouts/NavbarFull/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartSectionContainer } from "./Components/Pages/Cart/CartSectionContainer";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryName" element={<ItemListContainer />} />
        <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
        <Route path="/CartSection" element={<CartSectionContainer />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

import { ItemDetailContainer } from "./Components/Pages/ItemDetail/ItemDetailContainer";
import { ItemListContainer } from "./Components/Pages/ItemList/ItemListContainer";
import { Navbar } from "./Components/Layouts/NavbarFull/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartSectionContainer } from "./Components/Pages/Cart/CartSectionContainer";
import { Error404 } from "./Components/common/Error404";
import { CartProvider } from "./Components/Context/CartContext";
import { CheckOut } from "../src/Components/Pages/checkOut/CheckOut";
import { Toaster } from "sonner";
function App() {
  return (
    <BrowserRouter>
      <Toaster richColors duration={2000} />
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="/CartSection" element={<CartSectionContainer />} />
          <Route path="/Checkout" element={<CheckOut />}></Route>
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}
export default App;

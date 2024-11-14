import { ItemDetailContainer } from "./Components/Pages/ItemDetail/ItemDetailContainer";
import { ItemListContainer } from "./Components/Pages/ItemList/ItemListContainer";
import { Navbar } from "./Components/Layouts/NavbarFull/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartSectionContainer } from "./Components/Pages/Cart/CartSectionContainer";
import { Error404 } from "./Components/common/Error404";
import { CartProvider } from "./Components/Context/CartContext";
import { CheckOut } from "../src/Components/Pages/checkOut/CheckOut";
import { Toaster } from "sonner";
import { LandingContainer } from "./Components/Pages/Home/LandingContainer";
import { Footer } from "./Components/Layouts/NavbarFull/Footer";
import { ContactoContainer } from "./Components/Pages/contacto/contactoContainer";
function App() {
  return (
    <BrowserRouter>
      <Toaster richColors duration={2000} />
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/" element={<LandingContainer />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />
          <Route path="/contacto" element={<ContactoContainer />} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="/CartSection" element={<CartSectionContainer />} />
          <Route path="/Checkout" element={<CheckOut />}></Route>

          <Route path="*" element={<Error404 />}></Route>
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}
export default App;

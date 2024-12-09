import Header from "./components/Header";
import Menu from "./components/Menu";

import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";
import Cart from "./components/Cart";


function App() {

  function handleAddItemsTocart() {

  }

  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Menu />
        <Cart />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;

import Header from "./components/Header";
import Menu from "./components/Menu";

import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";


function App() {
  
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Menu />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;

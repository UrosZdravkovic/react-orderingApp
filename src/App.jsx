import Header from "./components/Header";
import Menu from "./components/Menu";

import { CartContextProvider } from "./store/CartContext";


function App() {

  function handleAddItemsTocart() {
    
  }

  return (
    <CartContextProvider>
      <Header />
      <Menu />
    </CartContextProvider>
  );
}

export default App;

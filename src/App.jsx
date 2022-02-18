import './App.css';
import Home from "./pages/Home";
import CartContextProvider from './components/Cart/CartContext';

function App() {
  return (
      <CartContextProvider>
          <Home />
      </CartContextProvider>
  );
}

export default App;

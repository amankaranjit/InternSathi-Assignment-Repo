import Product from "./components/Product";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './redux/store';
import Home from "./components/home";
import Products from "./components/products";
import Cart from "./components/cart";
function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/product/:id" element={<Products />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Provider>
    </BrowserRouter>
  );
}

export default App;

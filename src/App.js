import Category from "./components/Category";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Swiper from "./components/Swiper";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Swiper />
      <Category />
      <Product />
      <Footer />
    </div>
  );
}

export default App;

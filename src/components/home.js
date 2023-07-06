import Category from "./Category";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Product from "./Product";
import Swiper from "./Swiper";
const Home  = () =>  {
    return(
        <>
        <Navbar />
        <Swiper />
        <Category />
        <Product />
        <Footer />
        </>
    )
}
export default Home;
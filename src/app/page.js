import Product from "./product/page"; 
import HomePage from "./home/page";
import Tujuan from "./tujuan/page";
import Contact from "./contact/page";
import Event from "./event/page";

const Home = () => {
  return(
  <>
  <HomePage/>
  <Event/>
  <Product/>
  <Tujuan/>
  <Contact/>
  </>
  );
};
export default Home;
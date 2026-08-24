import {Route,Routes} from "react-router-dom";
import Home from  "./pages/Home/Home";
import Shop from  "./pages/Shop/Shop";
import Categories from  "./pages/Categories/Categories";
import About from  "./pages/About/About";
import Contact from  "./pages/Contact/Contact";
import SignIn from "./pages/SignIn/SignIn";

import SignUp from  "./pages/SignUp/SignUp";
import Cart from  "./pages/Cart/Cart";
import CheckOut from  "./pages/Checkout/Checkout";
import Thankyou from  "./pages/ThankYou/ThankYou";
import NotFound from  "./pages/NotFound/NotFound";
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero";




const App = () => {
  return (
    <div className="app">
       <Navbar />
   
       <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element= {<Shop />} />
            <Route path="/categories" element= {<Categories />} />
            <Route path="/about" element= {<About />} />
            <Route path="/contact" element= {<Contact />} />
            <Route path="/signin" element= {<SignIn />} />
            <Route path="/signup" element= {<SignUp />} />
            <Route path="/cart" element= {<Cart />} />
            <Route path="/checkout" element= {<CheckOut />} />
            <Route path="/thankyou" element= {<Thankyou />} />
            <Route path="*" element= {<NotFound />} />

          </Routes>
       </main>
      
       <Footer />
    </div>
  )
};

export default App;

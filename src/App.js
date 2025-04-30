import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Cartpage from "./Components/Cartpage";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Productdetails from "./Pages/Productdetails";


function App() {
  return (
    <div className="App">
         <Router>
      <Header/>
   
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product" element={<Product/>}/>

          <Route path="/product/:id" element={<Productdetails/>}/>
          <Route path="/cart" element={<Cartpage/>}/>

?        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;

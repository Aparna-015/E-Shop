import "./App.css";
import Cartpage from "./Components/Cartpage";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Productdetails from "./Pages/Productdetails";


import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product" element={<Product/>}/>

          <Route path="/product/:id" element={<Productdetails/>}/>
          <Route path="/cart" element={<Cartpage/>}/>

?        </Routes>
      </Router>
    </div>
  );
}

export default App;

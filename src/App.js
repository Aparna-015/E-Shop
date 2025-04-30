import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Product from "./Pages/Product";

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product" element={<Product/>}/>

?        </Routes>
      </Router>
    </div>
  );
}

export default App;

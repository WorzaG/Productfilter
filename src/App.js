import "./App.css";
import { useState, useEffect } from "react";
// data
import data from "./data/data.json";
//components
import Categories from "./components/Categories";
import Products from "./components/Products";

function App() {
  const [product, setProduct] = useState([]);
  const [Productfilter, setFilter] = useState("");
  useEffect(() => {
    setProduct(data);
  }, []);

  return (
    <div className="App">
      <div className="content">
        <Categories
          data={product}
          Productfilter={Productfilter}
          setFilter={setFilter}
        />
        <Products data={product} Productfilter={Productfilter} />
      </div>
    </div>
  );
}

export default App;

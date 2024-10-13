import Product from "./Product";
import { useEffect, useState } from "react";
import ProductsData from "./data.js";
import axios from "axios";
axios.defaults.baseURL = "";
axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1rMTIzQGdtYWlsLmNvbSIsImlhdCI6MTcyODcyMTY5NH0.NZlEKeltlT3shhQgImDHGFUBIR-H_k0tOTeUyQ3s_b-O7wNzncB2oOo6gETZfr_iPuAZeh1QSp3_-Qq2lKwlhzYnrwU7Vzl7MxhH69d-XJOUIPWyI2kxtRper_V3i95H7EjghzfT3Fn6cbHbHmaeIhBf-BeNlPYyj0paN-bIXb5b1HMaxKcHc8STNzJRxIIY9CF6_3NwNE5NuaMmGXcq5JkikyQIV1JMcB6vAcNtfRZEj09JOt7VCVrIuMpAgnYQ2FDfS7ITe9rsEQENeXcaR_0BgUmg0pX7e1WH_G2XNQcvftLUhRSl2hxa5jyWq1AFO9k7nxpYaCj2kYsIEGBEmw";

const ProductList = () => {
  const [products, setProducts] = useState([ProductsData]);
  const [total, setTotal] = useState(0);
  const getProducts = async () => {
    const res = await axios.get("/api/products");
    console.log(res.data);
    setProducts(res.data);
    setTotal(res.data.length);
  };

  const handleClick = async (id) => {
    const res = await axios.delete(`/api/products/${id}`);
    console.log(res.data);
    if (res.data._id) {
      setProducts(products.filter((p) => p._id !== res.data._id));
    }
    // setProducts(res.data);
  };
  const handlePage = async (page) => {
    const res = await axios.get(
      "/api/products?page=" + page
    );
    console.log(res.data);
    setProducts(res.data);
  };
  const handleSort = async (e) => {
    const field = e.target.value.split("_");
    console.log(e.target.value);
    if (field.length == 2) {
      // Ensure it splits into 2 parts
      const res = await axios.get(
        `/api/products?sort=${field[0]}&order=${field[1]}`
      );
      console.log(res.data);
      setProducts(res.data);
    } else {
      console.error("Sort field and order are not properly formatted.");
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <select onChange={handleSort}>
        <option value="price_desc">Price High to Low</option>
        <option value="price_asc">Price Low to High</option>
        <option value="rating_desc">Rating High to Low</option>
        <option value="rating_asc">Rating Low to High</option>
      </select>

      {products.map((product, index) => (
        <Product {...product} key={index} handleClick={handleClick}></Product>
      ))}
         {Array(Math.ceil(total / 2))
        .fill(0)
        .map((_, i) => (
          <button
            className="bg-black w-6 text-white"
            key={i+1}
            onClick={() => handlePage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      {/* Pagination buttons (for illustration purposes) */}
      {/* <div>
        <button className='bg-black w-6 text-white'  onClick={() => handlePage(1)}>1</button>
        <button className='bg-black w-6 ml-1 text-white'  onClick={() => handlePage(2)}>2</button>
        <button className='bg-black w-6 ml-1 text-white'  onClick={() => handlePage(3)}>3</button>
        <button className='bg-black w-6 ml-1 text-white'  onClick={() => handlePage(4)}>4</button>
        <button className='bg-black w-6 text-white'  onClick={() => handlePage(5)}>5</button>
        <button className='bg-black w-6 ml-4 text-white'  onClick={() => handlePage(6)}>6</button>
        <button className='bg-black w-6 text-white'  onClick={() => handlePage(7)}>7</button>
        <button className='bg-black w-6 ml-4 text-white'  onClick={() => handlePage(8)}>8</button>
      </div> */}
    </>
  );
};

export default ProductList;

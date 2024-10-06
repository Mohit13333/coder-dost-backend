import { useState } from "react";
import axios from "axios";
axios.defaults.baseUrl = "";
axios.defaults.headers.common['Authorization'] = "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRlbW9AZ21haWwuY29tIiwiaWF0IjoxNjc2NDkzNTI4fQ.VNWQDQJM9jDXrGofVLk3brpqlcNwFzjDmLLwfP9Rw4TM20IIuayvzubPJPfrkJb4kcRAUchdg7uy36rf9z-n9eLdcCw6FQLBBP7t0IA0NhFwjc0NjsJ50zUFgqPi8TAeVclD3DpjEoIRGbSrJpeVIBnLy6DeY7NcugJRbzKpW7iVq9WR9hO-mJ9n01zzEs3xJZ9Kyvq0dir680qPAtEdqLIvPstK8tDRNoYwcZXUthxSoDEAf-sp-E1qbuVv1WDlNpmBncWcUKFUgxeAuoFKRaYOy-9xrATE33C3wUW26Q9nUWJjDHiDw_Oe695P1UpTsKntGAWI_ECytTZhlA_pug";

const AddProduct = () => {
 
  const [product,setProduct] = useState({}); 
  const refreshPage= () =>{
    window.location.reload();
  }
  const handleChange = (e)=>{
        setProduct({
            ...product,
            [e.target.name]:e.target.value
        })
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(product);
    addProduct(product)
  }

  const addProduct = async(product)=>{
    const res = await axios.post('/api/products',product);
    console.log(res.data);
    setProduct(res.data)
}


  return (
    <div className="flex justify-center mt-3">
    <form onSubmit={handleSubmit}>
      <fieldset>
        {/* Form Name */}
        <legend> <span className="bg-black rounded-lg text-white p-[9px]">Add Products</span></legend>
        {/* Text input*/}
        <div className=" mt-[18px] mb-3">
          <div className="mb-3">
          <label className="mt-3" htmlFor="title">
            <span className="bg-black rounded-lg text-white p-[9px] mt-4">Title</span>
          </label>
          </div>
          <div className="mb-3">
            <input
              id="title"
              name="title"
              type="text"
              placeholder="title"
              className=" bg-slate-600 text-white p-2 rounded-lg"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className=" mb-3">
        <div className="mb-3">
          <label className="mb-3" htmlFor="thumbnail">
            <span className="bg-black rounded-lg text-white p-[9px] mt-4">Thumbnail</span>
          </label>
          </div>
          <div className="col-md-4">
            <input
              id="thumbnail"
              name="thumbnail"
              type="text"
              placeholder="thumbnail"
              className=" bg-slate-600 text-white p-2 rounded-lg"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-3">
          <div className="mb-3">
          <label className="mt-3" htmlFor="rating">
            <span className="bg-black rounded-lg text-white p-[9px] mt-4">Rating</span>
          </label>
          </div>
          <div className="col-md-4">
            <input
              id="rating"
              name="rating"
              type="text"
              placeholder="rating"
              className=" bg-slate-600 text-white p-2 rounded-lg"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-3">
          <div className="mb-3">
          <label className="mt-3" htmlFor="price">
            <span className="bg-black rounded-lg text-white p-[9px] mt-4">Price</span>
          </label>
          </div>
          <div className="col-md-4">
            <input
              id="price"
              name="price"
              type="number"
              placeholder="price"
              className=" bg-slate-600 text-white p-2 rounded-lg"
              onChange={handleChange}
            />
          </div>
        </div>
        {/* Select Basic */}
        <div className="mb-3">
          <div className="mb-3">
          <label className="mt-3" htmlFor="category">
            <span className="bg-black rounded-lg text-white p-[9px] mt-4">Category</span>
          </label>
          </div>
          <div className="col-md-4">
            <select
              id="category"
              name="category"
              className=" bg-slate-600 text-gray-500 p-2 rounded-lg"
              onChange={handleChange}
            >
              <option value="">Choose Category</option>
              <option value="Smartphone">SmartPhone</option>
              <option value="Laptop">Laptops</option>
              <option value="T.V">Television</option>
              <option value="Refrigerator">Refrigerator</option>
            </select>
          </div>
        </div>
        {/* Select Basic */}
        <div className="mb-3">
          <div className="mb-3">
          <label className="mt-3" htmlFor="brand">
            <span className="bg-black rounded-lg text-white p-[9px] mt-4">Brand</span>
          </label>
          </div>
          <div className="col-md-4">
            <select
              id="brand"
              name="brand"
              className=" bg-slate-600 p-2 rounded-lg text-gray-500" 
              onChange={handleChange}
            >
              <option value="">Choose Brand</option>
              <option value="Apple">Apple</option>
              <option value="Samsung">SamSung</option>
              <option value="Xiaomi">Xiaomi</option>
              <option value="Oppo">Oppo</option>
              <option value="Oneplus">Oneplus</option>
            </select>
          </div>
        </div>
        {/* Text input*/}
        <div className="">
          <div className="mb-3">
          <label className="mt-3" htmlFor="discountPercentage">
            <span className="bg-black rounded-lg text-white p-[9px] mt-4">Discount</span>
          </label>
          </div>
          <div className="col-md-4">
            <input
              id="discountPercentage"
              name="discountPercentage"
              type="number"
              placeholder="discountPercentage"
              className=" bg-slate-600 text-white p-2 rounded-lg"
              onChange={handleChange}
            />
            {/* <div>
            <span className="rounded-md bg-slate-900 p-2 text-white ml-1">help</span>
            </div> */}
          </div>
        </div>
        {/* Button */}
        <div className="mt-1">
          <div className="">
            <button
            onClick={refreshPage}
              id="singlebutton"
              name="singlebutton"
              className="rounded-md bg-slate-900 p-2 text-white"
              >
              Add
            </button>
          </div>
        </div>
      </fieldset>
    </form>
    </div>
  );
};

export default AddProduct;
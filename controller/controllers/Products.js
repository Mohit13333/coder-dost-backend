import Product from "../model/product.model.js";

const createProduct =
async (req, res) => {
  const product = new Product(req.body);
  const savedProduct=await product.save();
  console.log(savedProduct);
  res.status(201).send(savedProduct);
};

const getAllProducts = async(req, res) => {
  let query=Product.find();
  // let sort1=req.query;
  let sort=req.query.sort;
  let pageSize=2;
  let page=req.query.page;
  if(sort){
    const getProducts=await query.sort({[req.query.sort]:req.query.order}).skip(pageSize*(page-1)).limit(pageSize).exec();
    res.json(getProducts);
  }else if(page){
    const getProducts=await query.skip(pageSize*(page-1)).limit(pageSize).exec();
    res.json(getProducts);
  }else{
    const getProducts=await query.exec();
    res.json(getProducts);
  }
};

const getProduct = async (req, res) => {
      const id = req.params.id;
      const product = await Product.findById(id); // Ensure you are returning only the document
      res.status(200).json(product);
};
const replaceProduct = async (req, res) => {
  const id = req.params.id;
  const productIndex = await Product.findOneAndReplace({_id:id},req.body,{new:true}); // it _id:id written because it is find one
  res.status(201).json(productIndex);
};
const updateProduct = async (req, res) => {
  const id = req.params.id;
  const productIndex =await Product.findByIdAndUpdate(id,req.body);
  res.status(201).json(productIndex);
};
const deleteProduct = async(req, res) => {
  const id = req.params.id;
  const productIndex = await Product.findByIdAndDelete(id)
  res.status(201).json(productIndex);
};

export {
  createProduct,
  getAllProducts,
  getProduct,
  replaceProduct,
  updateProduct,
  deleteProduct,
};

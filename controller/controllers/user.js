// import User from "../model/user.model.js";

// // Get All Users
// const getAllUsers = async (req, res) => {
//   const users = await User.find();
//   console.log(users);
//   res.json(users);
// };

<<<<<<< HEAD
const getUser = async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id).populate('cart');; // Ensure you are returning only the document
  res.status(200).json(user);
};
const replaceUser = async (req, res) => {
  const id = req.params.id;
  const doc = await User.findOneAndReplace({ _id: id }, req.body, {
    new: true,
  }); // it _id:id written because it is find one
  res.status(201).json(doc);
};
const updateUser = async (req, res) => {
  const id = req.params.id;
  const doc = await User.findByIdAndUpdate(id, req.body);
  res.status(201).json(doc);
};
const deleteUser = async (req, res) => {
  const id = req.params.id;
  const doc = await User.findByIdAndDelete(id);
  res.status(201).json(doc);
};
=======
// const getUser = async (req, res) => {
//   const id = req.params.id;
//   const user = await User.findById(id); // Ensure you are returning only the document
//   res.status(200).json(user);
// };
// const replaceUser = async (req, res) => {
//   const id = req.params.id;
//   const doc = await User.findOneAndReplace({ _id: id }, req.body, {
//     new: true,
//   }); // it _id:id written because it is find one
//   res.status(201).json(doc);
// };
// const updateUser = async (req, res) => {
//   const id = req.params.id;
//   const doc = await User.findByIdAndUpdate(id, req.body);
//   res.status(201).json(doc);
// };
// const deleteUser = async (req, res) => {
//   const id = req.params.id;
//   const doc = await User.findByIdAndDelete(id);
//   res.status(201).json(doc);
// };
>>>>>>> 03c6afcb73fdd0a283e249b9d230982ab7af047e

// export {
//   getAllUsers,
//   getUser,
//   replaceUser,
//   updateUser,
//   deleteUser,
// };

const productModel = require("../models/productModel");

//Get products api-/api/v1/products
exports.getProducts = async (req, res, next) => {
  let query = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};
  const products = await productModel.find(query); //it will take everydata ...find is used to take the data
  res.json({
    success: true,
    products,
  });
};

//Get single product api-api/v1/product/:id
exports.getSingleProduct = async (req, res, next) => {
  //getting the passing id
  try {
    const product = await productModel.findById(req.params.id);
    res.json({
      success: true,
      product,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: err.message,
    });
  }
};

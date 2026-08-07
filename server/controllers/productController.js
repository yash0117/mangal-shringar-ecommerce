import Product from "../models/Product.js";


// =========================
// GET All Products
// =========================
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: error.message,
    });

  }
};



// =========================
// GET Single Product
// =========================
export const getProductById = async (req, res) => {

  try {

    const product = await Product.findById(
      req.params.id
    );


    if (!product) {

      return res.status(404).json({
        message: "Product not found",
      });

    }


    res.status(200).json(product);


  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: error.message,
    });

  }

};



// =========================
// ADD Product
// =========================
export const addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json({
      success: true,
      product,
    });

  } catch (error) {
    console.error("ADD PRODUCT ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =========================
// DELETE Product
// =========================
export const deleteProduct = async (req, res) => {

  try {

    const product =
      await Product.findByIdAndDelete(
        req.params.id
      );


    if (!product) {

      return res.status(404).json({
        message: "Product not found",
      });

    }


    res.status(200).json({
      message: "Product deleted successfully",
    });


  } catch (error) {

    console.error(error);


    res.status(500).json({
      message: error.message,
    });

  }

};



// =========================
// UPDATE Product
// =========================
export const updateProduct = async (req, res) => {

  try {

    const product =
      await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new:true,
          runValidators:true,
        }
      );


    if(!product){

      return res.status(404).json({
        message:"Product not found",
      });

    }


    res.status(200).json(product);


  } catch(error){

    console.error(error);


    res.status(500).json({
      message:error.message,
    });

  }

};



// =========================
// ADD REVIEW
// =========================
export const addReview = async (req,res)=>{

  try{

    const {
      rating,
      comment
    } = req.body;


    const product =
      await Product.findById(
        req.params.id
      );


    if(!product){

      return res.status(404).json({
        message:"Product not found",
      });

    }


    const alreadyReviewed =
      product.reviews.find(
        review =>
        review.user.toString() ===
        req.user._id.toString()
      );


    if(alreadyReviewed){

      return res.status(400).json({
        message:"Product already reviewed",
      });

    }


    const review = {

      user:req.user._id,

      name:req.user.name,

      rating:Number(rating),

      comment,

    };


    product.reviews.push(review);


    product.numReviews =
      product.reviews.length;


    product.rating =
      product.reviews.reduce(
        (acc,item)=>
          item.rating + acc,
        0
      ) /
      product.reviews.length;



    await product.save();



    res.status(201).json({
      message:"Review added successfully",
      product,
    });


  }catch(error){

    console.error(error);


    res.status(500).json({
      message:error.message,
    });

  }

};
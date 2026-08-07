import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";

import MainLayout from "../layouts/MainLayout";

import {
  getProductById,
  addReview,
} from "../api/productApi";

import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";


const ProductDetails = () => {


  const { id } = useParams();


  const [product,setProduct] = useState(null);

  const [loading,setLoading] = useState(true);


  const [rating,setRating] = useState(5);

  const [comment,setComment] = useState("");

  const [reviewLoading,setReviewLoading] = useState(false);

  const { addToCart } = useCart();

  const {
    addToWishlist,
    removeFromWishlist,
    isWishlist,
  } = useWishlist();


  const fetchProduct = async()=>{

    try{

      const res = await getProductById(id);

      setProduct(res.data);


    }catch(error){

      console.log(error);

    }
    finally{

      setLoading(false);

    }

  };


  useEffect(()=>{

    fetchProduct();

  },[id]);

  if(loading){

    return(

      <MainLayout>

        <div className="text-center py-20">
          Loading...
        </div>

      </MainLayout>

    );

  }

  if(!product){

    return(

      <MainLayout>

        <div className="text-center py-20">
          Product Not Found
        </div>

      </MainLayout>

    );

  }

  const wishlist =
    isWishlist(product._id);


  const handleWishlist = ()=>{


    if(wishlist){

      removeFromWishlist(product._id);

    }
    else{

      addToWishlist(product);

    }

  };

  const handleReview = async(e)=>{


    e.preventDefault();


    const user =
      localStorage.getItem("token");


    if(!user){

      alert("Please login to add review");

      return;

    }



    try{


      setReviewLoading(true);



      await addReview(
        product._id,
        {
          rating,
          comment,
        }
      );



      alert("Review Added ⭐");


      setComment("");

      fetchProduct();



    }catch(error){


      alert(
        error.response?.data?.message ||
        "Review failed"
      );


    }
    finally{

      setReviewLoading(false);

    }


  };

  return (

    <MainLayout>

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 gap-12">

          {/* Image */}


          <div className="bg-white rounded-2xl shadow p-6">


            <img

              src={product.image}

              alt={product.title}

              className="w-full h-[500px], object-cover rounded-xl"

            />


          </div>

          {/* Details */}


          <div>


            <h1 className="text-4xl font-bold text-[#6B4F2A]">

              {product.title}

            </h1>

            <div className="flex items-center gap-2 mt-4 text-yellow-500">

              <FaStar/>

              <span className="text-gray-600">

                {product.rating?.toFixed(1) || 0}

                ({product.numReviews} Reviews)

              </span>

            </div>


            <p className="mt-5 text-gray-600">

              {product.description}

            </p>


            <h2 className="text-3xl font-bold text-[#C8A24A] mt-6">

              ₹{product.price}

            </h2>

            <div className="flex gap-4 mt-8">


              <button

                onClick={()=>addToCart(product)}

                className="bg-[#C8A24A] text-white px-8 py-4 rounded-xl"

              >

                Add To Cart

              </button>

              <button

                onClick={handleWishlist}

                className="border border-red-400 text-red-500 px-8 py-4 rounded-xl"

              >

                {
                  wishlist
                  ? "Remove ❤️"
                  : "Wishlist ❤️"
                }


              </button>


            </div>



          </div>


        </div>


        {/* Reviews Section */}


        <div className="mt-20">


          <h2 className="text-3xl font-bold text-[#6B4F2A] mb-8">

            Customer Reviews ⭐

          </h2>

          <form

            onSubmit={handleReview}

            className="bg-white shadow rounded-2xl p-6 mb-10"

          >

            <h3 className="font-semibold mb-3">

              Give Rating

            </h3>

            <div className="flex gap-2 mb-5">


              {[1,2,3,4,5].map((star)=>(

                <FaStar

                  key={star}

                  onClick={()=>setRating(star)}

                  className={`cursor-pointer text-2xl ${
                    star <= rating
                    ? "text-yellow-400"
                    : "text-gray-300"
                  }`}

                />

              ))}

            </div>

            <textarea

              value={comment}

              onChange={(e)=>setComment(e.target.value)}

              placeholder="Write your review..."

              className="w-full border rounded-xl p-4"

              required

            />

            <button

              disabled={reviewLoading}

              className="mt-5 bg-[#C8A24A] text-white px-8 py-3 rounded-xl"

            >

              {
                reviewLoading
                ? "Submitting..."
                : "Submit Review"
              }

            </button>
          </form>

          <div className="space-y-5">


            {
              product.reviews.length === 0 ?

              (

                <p className="text-gray-500">
                  No reviews yet.
                </p>

              ):

              product.reviews.map((review)=>(


                <div

                  key={review._id}

                  className="bg-white shadow rounded-xl p-5"

                >

                  <h3 className="font-bold">

                    {review.name}

                  </h3>




                  <div className="flex text-yellow-400 my-2">


                    {
                      [...Array(review.rating)].map(
                        (_,i)=>(

                          <FaStar key={i}/>

                        )
                      )
                    }


                  </div>

                  <p className="text-gray-600">

                    {review.comment}

                  </p>


                </div>

              ))

            }


          </div>

        </div>

      </div>
    </MainLayout>

  );

};


export default ProductDetails;
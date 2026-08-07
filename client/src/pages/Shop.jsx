import { useEffect, useState } from "react";

import MainLayout from "../layouts/MainLayout";
import ProductCard from "../components/home/ProductCard";

import axios from "axios";


const Shop = () => {

  const [products, setProducts] = useState([]);

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  const [sort, setSort] = useState("");



  const fetchProducts = async()=>{

    try{

      const res = await axios.get(
        "http://localhost:5000/api/products"
      );

      setProducts(res.data);


    }catch(error){

      console.error(error);

    }

  };



  useEffect(()=>{

    fetchProducts();

  },[]);




  const categories = [
    "All",
    ...new Set(
      products.map(
        item=>item.category
      )
    )
  ];



  let filteredProducts =
    products.filter((product)=>{


      const matchSearch =
      product.title
      .toLowerCase()
      .includes(
        search.toLowerCase()
      );


      const matchCategory =
      category==="All" ||
      product.category===category;


      return matchSearch && matchCategory;


    });



  if(sort==="low"){

    filteredProducts.sort(
      (a,b)=>a.price-b.price
    );

  }


  if(sort==="high"){

    filteredProducts.sort(
      (a,b)=>b.price-a.price
    );

  }





  return (

    <MainLayout>


      <section className="bg-[#FFFDF8] py-12">

        <div className="max-w-7xl mx-auto px-6">


          <h1 className="text-5xl font-bold text-[#6B4F2A] text-center">
            Shop
          </h1>


          <p className="text-center text-gray-600 mt-4">
            Browse our complete Laddu Gopal collection.
          </p>



          {/* Filters */}

          <div className="mt-10 grid md:grid-cols-3 gap-5">


            <input

              type="text"

              placeholder="Search products..."

              value={search}

              onChange={(e)=>
                setSearch(e.target.value)
              }

              className="border rounded-xl p-4"

            />



            <select

              value={category}

              onChange={(e)=>
                setCategory(e.target.value)
              }

              className="border rounded-xl p-4"

            >

              {
                categories.map((cat)=>(

                  <option key={cat}>
                    {cat}
                  </option>

                ))
              }


            </select>





            <select

              value={sort}

              onChange={(e)=>
                setSort(e.target.value)
              }

              className="border rounded-xl p-4"

            >

              <option value="">
                Sort By
              </option>

              <option value="low">
                Price Low To High
              </option>


              <option value="high">
                Price High To Low
              </option>


            </select>


          </div>


        </div>

      </section>





      {/* Products */}

      <section className="max-w-7xl mx-auto px-6 py-12">


        {
          filteredProducts.length===0 ?

          (

            <h2 className="text-center text-xl">
              No Products Found
            </h2>

          )

          :

          (

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">


            {
              filteredProducts.map(product=>(

                <ProductCard

                  key={product._id}

                  product={product}

                />

              ))
            }


          </div>

          )

        }


      </section>


    </MainLayout>

  );

};


export default Shop;
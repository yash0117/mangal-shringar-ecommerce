import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();


export const WishlistProvider = ({children}) => {


  const [wishlistItems,setWishlistItems] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );



  const addToWishlist = (product)=>{


    const exists =
    wishlistItems.find(
      item=>item._id === product._id
    );


    if(!exists){

      const updated = [
        ...wishlistItems,
        product
      ];


      setWishlistItems(updated);


      localStorage.setItem(
        "wishlist",
        JSON.stringify(updated)
      );

    }

  };




  const removeFromWishlist = (id)=>{


    const updated =
    wishlistItems.filter(
      item=>item._id !== id
    );


    setWishlistItems(updated);


    localStorage.setItem(
      "wishlist",
      JSON.stringify(updated)
    );


  };




  const isWishlist = (id)=>{

    return wishlistItems.some(
      item=>item._id === id
    );

  };



  return (

    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        isWishlist,
      }}
    >

      {children}

    </WishlistContext.Provider>

  );

};



export const useWishlist = () =>
useContext(WishlistContext);
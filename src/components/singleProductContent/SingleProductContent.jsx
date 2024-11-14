import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";
import { FaCaretLeft } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import SingleProductTabs from "../singleProductTabs/SingleProductTabs";
import ImgGallerySwipper from "../imgGallerySwipper/ImgGallerySwipper";
export default function SingleProductContent({ product }) {
  const [counter, SetCounter] = useState(1);
  const [unactive, setUnactive] = useState(true);
  const [heartBtn, SetHeartBtn] = useState(false);
  const minError = () => toast.error("Cannot Choose Less than 1");
  const maxError = () => toast.error("Cannot Choose more than 10");
  const wishlist = () => {
    if (heartBtn == true) {
      toast.success("Successfully removed from WishList");
    } else {
      toast.success("Successfully added to WishList");
    }
  };

  function incremnt() {
    if (counter < 10) {
      SetCounter(counter + 1);
    } else {
      SetCounter(counter);
      maxError();
    }
  }

  function decremnt() {
    if (counter > 1) {
      SetCounter(counter - 1);
    } else {
      SetCounter(counter);
      minError();
    }
  }

  function toggle() {
    SetHeartBtn(!heartBtn);
  }
  const categories = product?.attributes?.categories?.map(cat => cat.category) || [];
  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            color: "red",
          },

          success: {
            style: {
              color: "black",
            },
            icon: "🖤",
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <div className="singleProductContent">
        <div className="content">
        <div className="img">
          <div className="smallImg">
            <div className="smallImgWrapper">
              <img
                src={product.data.url}
                loading="lazy"
                alt={product.data.name}
                className="right"

              />
            </div>
            <div className="smallImgWrapper">
              <img
                src={product.data.url}
                loading="lazy"
                alt={product.data.name}
                className="top"

              />
            </div>
            <div className="smallImgWrapper">
              <img
                src={product.data.url}
                loading="lazy"
                alt={product.data.name}
                className="left"
              />
            </div>
           
          </div>
          <div className="bigImg">
            <img
              src={product.data.url}
              loading="lazy"
              alt={product.data.name}
            />
          </div>
        </div>

        <div className="info">
          <div className="head">
            <h3>{product.data.name}</h3>
            <div className="price">
              <p className="actuallPrice">{product.data.price} $</p>
              <p className="sale">
                {product.data.sale ? `${product.data.sale}  $` : ""}{" "}
              </p>
            </div>
          </div>
          <div className="body">
            <div className="stars">stars</div>
            <p className="desc">{product.data.description}</p>
            <div className="categories">
            <h6>Categories : </h6>
            <p>Hard Wood</p>
          </div>
            <div className="buttons">
              <div className="quantity">
                <div>
                  <p>Quantity</p>
                </div>
                <div className="quantityCounter">
                  <FaCaretLeft onClick={decremnt} />
                 <p> {counter} </p> 
                  <FaCaretRight onClick={incremnt} />
                </div>
              </div>

              <button className="addToCart">Add to cart</button>
            </div>

            <div className="wishlist">
              <p onClick={toggle}>
                {" "}
                {heartBtn ? (
                  <FaHeart onClick={wishlist} />
                ) : (
                  <CiHeart onClick={wishlist} />
                )}
              </p>
              <p>Add to wishlist</p>
            </div>
          </div>

          </div>
        </div>

          
           
       
        <SingleProductTabs product={product}></SingleProductTabs>
      </div>
    </>
  );
}

import React, { useState } from 'react'
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import QuickLook from '../quickLook/QuickLook';
import { NavLink } from 'react-router-dom';
export default function ProductCard({name , sale , price , salePrec , img , onclick , rating , slug , category,isNew , product }) {
    const handleInnerButtonClick = (e) => {
        e.stopPropagation(); 
        e.preventDefault();  
        
      };
  return (
<>
    <div className='productCard'>
    <NavLink to={`/shop/singleProduct/${slug}`}>
        <div className="img">
            <img src={img} alt={slug}></img>
            <div className="header">
            <p>{isNew ? `New` : ""}</p>
            
            <p>{salePrec ? `${salePrec} %`  : ""}</p>
            </div>
            
            <div className="quickLook" onClick={handleInnerButtonClick}>
                <div className='quickLookBtn'>

                <p onClick={() => onclick(product)} >quick look</p>
                </div>

                
                <div className="heart">
                <FaHeart />
                </div>
            </div>
        </div>

        <div className="body">
            <h6>{name}</h6>
            <div className="price-animation">
                <div className='price'>
                    
                    <p className='sale'>{sale ? `${sale} $` : ""}</p>
                    <p>{price}   $</p>
                </div>
                <p className='cartBtn'>add to cart </p>
            </div>
        </div>
    </NavLink>
    </div>

</>
  )
}

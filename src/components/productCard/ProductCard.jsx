import React from 'react'
import { CiHeart } from "react-icons/ci";

export default function ProductCard() {
  return (
    <div className='productCard'>
        <div className="img">
            <img src='https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-2-600x728.jpg' alt=''></img>
            <div className="header">
            <p>New!</p>
            <p>15%</p>
            </div>
            
            <div className="quickLook">
                <p>quick look</p>
                <div className="heart">
                <CiHeart />
                </div>
            </div>
        </div>

        <div className="body">
            <h6>product name</h6>
            <div className="price-animation">
                <p>119</p>
                <p>add to cart </p>
            </div>
        </div>
    </div>
  )
}

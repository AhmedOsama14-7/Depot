import React from 'react'
import { useParams } from "react-router-dom";
import { getSingleproduct } from '../../api/api';
export default function SingleProduct() {
    const { id } = useParams();
    const {data , isFetching } = getSingleproduct(id)
  return (
   <section className='singleProductPage'>

   </section>
  )
}

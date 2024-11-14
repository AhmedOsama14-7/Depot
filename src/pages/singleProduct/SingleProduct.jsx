import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { getSingleproduct } from '../../api/api';
import SingleProductContainer from '../../components/singleProductContainer/SingleProductContainer';
export default function SingleProduct() {
    const { id } = useParams();
    const [product , SetProduct ] = useState(null)
    
    const {data , isFetching } = getSingleproduct(id)

    
 

    return (
   <section className='singleProductPage'>
      {data &&  <SingleProductContainer product={data?.data}></SingleProductContainer>}

   </section>
  )
}

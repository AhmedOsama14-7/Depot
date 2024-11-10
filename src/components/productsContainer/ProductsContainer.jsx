import React from 'react'
import ProductCard from '../productCard/ProductCard'
import Filter from '../filter/Filter'
import { getProducts , getSingleproduct} from "../../api/api";
import Loader from '../loader/Loader';
import QuickLook from '../quickLook/QuickLook';
import { useState } from 'react'

export default function ProductsContainer() {
  const { data, isFetching } = getProducts();
    
  return (
    <>
    <Filter></Filter>
    <section className='productsContainer'>
    {data?.data?.data?.map((product) => (
               <ProductCard product={product} slug={product.documentId}  img={product.url} name={product.name} price={product.price} sale={product.sale} salePrec={product.salePrecentage} rating={product.rating} category={product.categories.category} isNew={product.isNew}></ProductCard>
            ))}
    
    
    </section>
    </>
  )
}

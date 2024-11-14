import React from 'react'
import ProductCard from '../productCard/ProductCard'
import Filter from '../filter/Filter'
import { getProducts , getSingleproduct} from "../../api/api";
import Loader from '../loader/Loader';
import QuickLook from '../quickLook/QuickLook';
import { useState } from 'react'

export default function ProductsContainer() {
  const { data, isFetching } = getProducts();
  const [active ,SetActive] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const handleCardClick = (product) => {
    SetActive(true)
    setSelectedProduct(product);
  };

    
  return (
    <>
    <Filter></Filter>
    <section className='productsContainer'>
    {data?.data?.data?.map((product) => (
               <ProductCard product={product} key={product.id} onclick={handleCardClick} slug={product.documentId}  img={product.url} name={product.name} price={product.price} sale={product.sale} salePrec={product.salePrecentage} rating={product.rating} category={product.categories.category} isNew={product.isNew}></ProductCard>
            ))}
    
    {selectedProduct && <QuickLook  product={selectedProduct}  active={active} SetActive={SetActive}></QuickLook> }
    </section>
    </>
  )
}

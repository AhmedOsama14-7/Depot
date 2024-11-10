import React from 'react'
import ShopRoutesContainer from '../../components/shopRoutesConatiner/ShopRoutesContainer'
import FilterByCategory from '../../components/filter/Filter'
import ProductCard from '../../components/productCard/ProductCard'
import ProductsContainer from '../../components/productsContainer/ProductsContainer'

export default function Shop() {

  return (
   <>
        <ShopRoutesContainer></ShopRoutesContainer>
        <ProductsContainer></ProductsContainer>
   </>
  )
}

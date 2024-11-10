import React from 'react'
import PaginationContainer from '../../components/paginationContainer/PaginationContainer'
import Filter from '../../components/filter/Filter'
import ProductsContainer from '../../components/productsContainer/ProductsContainer'

export default function HomePage() {
  return (
    <>
    <PaginationContainer></PaginationContainer>
    <ProductsContainer></ProductsContainer>
    
    </>
  )
}

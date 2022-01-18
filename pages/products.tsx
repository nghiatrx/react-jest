import React from 'react'
import ProductList from '../components/ProductList'
import getProductsFromServer from '../utils/getProductsFromServer'

export default function Products({ products }) {
  return <ProductList products={products} />
}

export async function getServerSideProps() {
  const products = await getProductsFromServer()
  return { props: { products } }
}

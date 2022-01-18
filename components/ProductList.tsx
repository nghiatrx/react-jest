import React from "react";
import Product, { IProduct } from './Product';

export default function ProductList(props: { products: IProduct[] }) {
  return <div style={{ padding: '20px'}}>
    {
      props.products.map((product) => (
        <Product product={product} key={product.id} />
      ))
    }
  </div>;
}

import Image from 'next/image';
import React, { useState } from "react";
import sendLikeToServer from '../utils/sendLikeToServer';
import sendUnLikeToServer from '../utils/sendUnLikeToServer';

export default function Product(props: { product: IProduct }) {
  const { product } = props
  const [isLiked, setIsLiked] = useState(false)

  const handleClickBtn = async () => {
    if (!isLiked) {
      const result = await sendLikeToServer()
      if (result) {
        setIsLiked(true)
      }
    } else {
      const result = await sendUnLikeToServer()
      if (result) {
        setIsLiked(false)
      }
    }

  }

  return (
    <div style={{ borderBottom: '1px solid', padding: '5px' }} key={product.id}>
      <Image width={200} height={200} src={`https://images.template.net${product.newFeaturedImage}`} alt='' />
      {product.title}
      <button className='like-btn' onClick={handleClickBtn}>{ isLiked ? 'Liked' : 'Like'}</button>
    </div>
  )
}

export interface IProduct {
  id: number;
  title: string;
  newFeaturedImage: string
}
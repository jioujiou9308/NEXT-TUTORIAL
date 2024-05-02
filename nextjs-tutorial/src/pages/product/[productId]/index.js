import React from 'react'
import { useRouter } from 'next/router'

const ProductDetail = () => {
    const router = useRouter()
    const productId = router.query.productId
  return (
    <>
        <div>ProductDetail</div>
        <br/>
        <h2>This page router is {productId}</h2>
    </>
  )
}

export default ProductDetail
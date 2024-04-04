import React from 'react'

const ProductsCard = ({product}) => {
  return (
    <div className='group'>
      <div className='w-full h-96 cursor-pointer overflow-hidden'>
        <img className="w-full h-full object-cover group-hover:scale-110 duration-500"   src={product.image} alt="productimage" />
      </div>

      <div className="w-full border-[1px] px-2 py-4">
        <div className='flex justify-between items-center'>
          <div>
          <h2 className='font-titleFont text-base font-bold'>
            {product.title.substring(0,14)}
          </h2>
          </div>
          <div className='flex gap-2 relative overflow-hidden w-28'>
            <div>
               <p className='font-semibold '>${product.price}</p>
            </div>
            <p className='absolute z-20 w-[100px] text-gray-700 hover:text-gray-900 flex items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500'>add to cart</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductsCard
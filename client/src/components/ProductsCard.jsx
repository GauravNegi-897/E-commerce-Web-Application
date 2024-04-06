import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import {useNavigate} from "react-router-dom";

const ProductsCard = ({product}) => {

  const navigate = useNavigate();


  const __id = product.title.toLowerCase();

  console.log(__id);

  const handleDetails = () =>{

    navigate(`/product/${__id}`,{
      state:{
        item:product,
      },
    });
  };
  return (
    <div className='group'>
      <div onClick={handleDetails}  className='w-full h-96 cursor-pointer overflow-hidden'>
        <img className="w-full h-full object-cover group-hover:scale-110 duration-500"   src={product.image} alt="productimage" />
      </div>

      <div className="w-full border-[1px] px-2 py-4">
        <div className='flex justify-between items-center'>
          <div>
          <h2 className='font-titleFont text-base font-bold'>
            {product.title.substring(0,14)}
          </h2>
          </div>
          <div className='flex justify-end gap-2 relative overflow-hidden w-28 text-sm'>
            <div className='transform group-hover:translate-x-28 transition-transform duration-500'>
               <p className='font-semibold '>${product.price}</p>
            </div>
            <p className='absolute z-20 w-[100px] text-gray-700 hover:text-gray-900 flex items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-2 transition-transform cursor-pointer duration-500'>add to cart{" "} <span> <BsArrowRight/></span></p>
          </div>
        </div>

        <div>
          <p>{product.category}</p>
        </div>
      </div>
    </div>
  )
}
export default ProductsCard
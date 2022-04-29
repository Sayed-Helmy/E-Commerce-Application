import React from 'react'

const SearchItem = ({
    product
}) => {
  return (
    <div className="flex justify-between items-center mb-2 hover:bg-gray-200 cursor-pointer">
        <img src={product.images.mainImage} className="pl-16 py-2 w-36"/>
        <p className="text-blue-800	font-bold	text-lg px-16 py-2">
            {product.title}
        </p>
        <p className="text-blue-800	font-bold	text-lg pr-16 py-2">
            $ {product.price}
        </p>
    </div>
  )
}

export default SearchItem
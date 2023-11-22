import { useState } from 'react';
import {  Link, useLoaderData } from 'react-router-dom';

import eight from '../assets/eight.png';
import eleven from '../assets/eleven.png';
import five from '../assets/five.png';
// import useAuth from '../hooks/useAuth';

const SingleProduct = () => {
  const [activeImage, setActiveImage] = useState(eight);
  // const {setCartItems} = useAuth()
  const product = useLoaderData()
  const {featured_image, gallery_image, rprice, sprice, title, size, color, desc} = product
  const [quantity, setQuantity] = useState(1)
  const [choosenSize, setChoosenSize] = useState('');
  const [choosenColor, setChoosenColor] = useState('')
  
  const handleAddToCart = () => {
    const productToAdd = {...product, quantity, choosenColor, choosenSize}

    const existingCartItems = JSON.parse(localStorage.getItem('cart')) || []

    const updatedCart = [...existingCartItems, productToAdd]

    localStorage.setItem('cart', JSON.stringify(updatedCart))

  }

  return (
    <div className="my-12">
     
          <div className="container">
        <div className="grid gap-4 md:gap-10 md:grid-cols-2">
          {/* images */}
          <div>
            <div className="box-border overflow-hidden rounded-lg">
              <img
                src={featured_image}
                alt=""
                className=" hover:scale-110 duration-700"
              />
            </div>
            <div className="flex items-center gap-4 my-5">
              <img
                src={gallery_image}
                alt=""
                className="rounded-lg max-w-[80px] max-h-[80px] cursor-pointer hover:scale-105 duration-500"
                onClick={() => setActiveImage(eight)}
              />
              <img
                src={gallery_image}
                alt=""
                className="rounded-lg max-w-[80px] max-h-[80px] cursor-pointer hover:scale-105 duration-500"
                onClick={() => setActiveImage(eleven)}
              />
              <img
                src={gallery_image}
                alt=""
                className="rounded-lg max-w-[80px] max-h-[80px] cursor-pointer hover:scale-105 duration-500"
                onClick={() => setActiveImage(five)}
              />
            </div>
          </div>
          {/* contents */}
          <div className="flex flex-col gap-3">
            <h2 className="font-bold text-2xl md:text-3xl">
              {title}
            </h2>
            <p className="mb-4">
              <span className="text-lg font-bold text-red-500 opacity-75 line-through">
                ${rprice}
              </span>
              <span className="text-2xl font-bold text-black"> ${sprice}</span>
            </p>
            <form
              action=""
              className="bg-white rounded black-shadow p-6 md:px-10"
            >
              {/* input group */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-between mt-6">
                {/* Size */}
                <div className="flex flex-col gap-y-2 w-full">
                  <label htmlFor="size" className="form-label">
                    Size
                  </label>
                  <select
                    name="size"
                    required
                    value={size}
                    onChange={(e) => setChoosenSize(e.target.value)}

                    className="rounded input-with-shadow text-lg font-bold !focus:outline-0 "
                  >
                    <option value="" hidden defaultChecked>
                      Select Size
                    </option>
                    {
                      size?.map((sizeOption, index) => (
                        <option  className="text-gray-700 py-3"
                        key={index}
                        value={sizeOption}
                        >
                      {sizeOption}
                    </option>
                      )) }
                
                  </select>
                </div>
                {/* Color */}
                <div className=" flex flex-col gap-y-3 w-full">
                  <label htmlFor="color" className="form-label">
                    Color
                  </label>
                  <select
                    name="color"
                    required
                    value={color}
                    onChange={(e) => setChoosenColor(e.target.value)}
                    className="rounded input-with-shadow text-lg font-bold !focus:outline-0"
                  >
                    <option value="" hidden defaultChecked>
                      Select Color
                    </option>
                   {
                    color?.map((colorOption, index) => (
                      <option className="text-gray-700 py-3"
                      key={index}
                      value={colorOption}
                      >
                      {colorOption}
                    </option>
                    ))
                   }
                   
                  </select>
                </div>
                {/* Quantity */}
                <div className=" flex flex-col gap-y-3 w-full">
                  <label htmlFor="quantity" className="form-label">
                    Quantity
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="5"
                    name='quantity'
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                    required
                    className="input-with-shadow"
                  />
                </div>
              </div>
            <Link to={'/cart'}>
            <button
                className="bg-black text-white font-base uppercase font-bold py-3 px-12 hover:translate-y-2 duration-500 rounded mt-6 w-full"
                onClick={handleAddToCart}
              >
                Add To Cart
              </button>
            </Link>
            </form>
          </div>
        </div>

        {/* description */}
        <div className="mt-6">
          <h2 className="font-bold text-2xl md:text-3xl mb-4">
            Product Details
          </h2>
          <p className="font-[poppins] leading-loose max-w-4xl text-justify">
            {desc}
          </p>
        </div>
      </div>
       
    </div>
  );
};

export default SingleProduct;

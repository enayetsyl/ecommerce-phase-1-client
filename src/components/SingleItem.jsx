import { Link } from 'react-router-dom';

import eight from '../assets/eight.png';

const SingleItem = ({product}) => {
  const {featured_image, title, rprice, sprice, _id} = product
  // console.log(product)
  return (
    <div className="bg-white black-shadow rounded-md py-4 px-4">
        <Link to={`/single-product/${_id}`}>
      <div className="flex flex-col gap-y-3 transition-all duration-500">
          <img
            src={featured_image}
            alt=""
            className="img-fluid object-cover rounded hover:scale-105 duration-500"
          />
       
        <div>
          <h4 className="font-bold font-[poppins] hover:text-blue-600 duration-500">
            {title}
          </h4>
          <p className="mb-4">
            <span className="text-base font-bold text-red-500 opacity-75 line-through">
              {rprice}
            </span>
            <span className="text-xl font-bold text-black"> {sprice}</span>
          </p>
         
            <button className="bg-black text-white font-sm uppercase font-bold py-3 px-4 hover:translate-y-2 duration-500 rounded w-full">
              Select Options
            </button>
        </div>
      </div>
          </Link>
    </div>
  );
};

export default SingleItem;

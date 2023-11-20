import { Link } from 'react-router-dom';

import eight from '../assets/eight.png';

const SingleItem = () => {
  return (
    <div className="bg-white black-shadow rounded-md py-4 px-4">
      <div className="flex flex-col gap-y-3 transition-all duration-500">
        <Link Link to="/single-product/id">
          <img
            src={eight}
            alt=""
            className="img-fluid object-cover rounded hover:scale-105 duration-500"
          />
        </Link>
        <div>
          <h4 className="font-bold font-[poppins] hover:text-blue-600 duration-500">
            <Link to="/single-product/id">Traditional Cotton Panjabi</Link>
          </h4>
          <p className="mb-4">
            <span className="text-base font-bold text-red-500 opacity-75 line-through">
              $1999
            </span>
            <span className="text-xl font-bold text-black"> $499</span>
          </p>
          <Link to="/single-product/id">
            <button className="bg-black text-white font-sm uppercase font-bold py-3 px-4 hover:translate-y-2 duration-500 rounded w-full">
              Select Options
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;

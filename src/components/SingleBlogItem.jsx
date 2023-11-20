import { Link } from 'react-router-dom';

import eight from '../assets/eight.png';

const SingleBlogItem = () => {
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

          <Link to="/single-product/id">
            <button className="bg-black text-white font-sm uppercase font-bold py-3 px-4 hover:translate-y-2 duration-500 rounded w-full mt-6">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogItem;

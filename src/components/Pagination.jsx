import { Link } from 'react-router-dom';

const Pagination = () => {
  return (
    <div className="my-12 flex gap-2 justify-end">
      <Link>
        <button className="bg-black text-white font-sm uppercase font-bold py-2 px-5 hover:translate-y-2 duration-500 rounded">
          Previous
        </button>
      </Link>
      <Link>
        <button className="bg-black text-white font-sm uppercase font-bold py-2 px-5 hover:translate-y-2 duration-500 rounded">
          Next
        </button>
      </Link>
    </div>
  );
};

export default Pagination;

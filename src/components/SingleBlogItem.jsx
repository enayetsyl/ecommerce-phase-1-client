import { Link } from 'react-router-dom';


const SingleBlogItem = ({item}) => {
  console.log(item)
  return (
    <div className="bg-white black-shadow rounded-md py-4 px-4">
      <div className="flex flex-col gap-y-3 transition-all duration-500">
        <Link Link to={`/blog/${item._id}`}>
          <img
            src={item.featured_image}
            alt=""
            className="img-fluid object-cover rounded hover:scale-105 duration-500"
          />
      
        <div>
          <h4 className="font-bold font-[poppins] hover:text-blue-600 duration-500">
            {item.blogTitle}
          </h4>

          
            <button className="bg-black text-white font-sm uppercase font-bold py-3 px-4 hover:translate-y-2 duration-500 rounded w-full mt-6">
              Read More
            </button>
        </div>
          </Link>
      </div>
    </div>
  );
};

export default SingleBlogItem;

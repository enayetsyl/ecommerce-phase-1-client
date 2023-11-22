import { useLoaderData } from 'react-router-dom';
import eight from '../assets/eight.png';

const SingleBlog = () => {
  const blogDetails = useLoaderData()
  console.log(blogDetails)
  return (
    <div className="my-12">
      <div className="container">
        <div className="max-w-[900px] mx-auto flex flex-col gap-y-3">
          <h2 className="text-center font-bold text-3xl md:text-5xl mb-12 capitalize">
            {blogDetails.blogTitle}
          </h2>
          <div>
            <img
              src={blogDetails.featured_image
              }
              alt=""
              className="w-full max-h-[400px] object-cover rounded-lg"
            />
          </div>
          <p className="font-[poppins] mt-6 text-justify leading-relaxed">
            {blogDetails.blog}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;

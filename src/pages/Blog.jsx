import Pagination from '../components/Pagination';
import SingleBlogItem from '../components/SingleBlogItem';

const Blog = () => {
  return (
    <div className="my-12">
      <div className="container">
        <h2 className="text-center font-bold text-3xl md:text-5xl mb-12">
          Our Blog
        </h2>
        <div className="grid gap-4 md:gap-10 sm:grid-cols-2 md:grid-cols-3">
          <div className="">
            <SingleBlogItem />
          </div>
          <div className="">
            <SingleBlogItem />
          </div>
          <div className="">
            <SingleBlogItem />
          </div>
          <div className="">
            <SingleBlogItem />
          </div>
          <div className="">
            <SingleBlogItem />
          </div>
          <div className="">
            <SingleBlogItem />
          </div>
          <div className="">
            <SingleBlogItem />
          </div>
          <div className="">
            <SingleBlogItem />
          </div>
        </div>

        <Pagination />
      </div>
    </div>
  );
};

export default Blog;

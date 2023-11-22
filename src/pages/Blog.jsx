import { useQuery } from '@tanstack/react-query';
import Pagination from '../components/Pagination';
import SingleBlogItem from '../components/SingleBlogItem';
import useAxiosPublic from '../hooks/useAxiosPublic';

const Blog = () => {
  const axiosPublic = useAxiosPublic();

  const { isLoading, data } = useQuery({
    queryKey: ['blog'],
    queryFn: async () => {
      try{
        const response = await axiosPublic.get(`/api/v1/allblogs`);
        return response.data
      } catch (error) {
        console.log("axios get error", error)
        throw error
      }
    }




    // axiosPublic.get(`/api/v1/allblogs`)
    // .then(res => {
    //   return res.data;
    // })
    // .catch(error => {
    //   console.log('axios get error', error);
    //   throw error;
    // })
  })
console.log(data)
  return (
    <div className="my-12">
      <div className="container">
        <h2 className="text-center font-bold text-3xl md:text-5xl mb-12">
          Our Blog
        </h2>
        <div className="grid gap-4 md:gap-10 sm:grid-cols-2 md:grid-cols-3">
          {
            isLoading ? (
              <p>Your blog is loading</p>
            ) : (
              data?.map(item => (
                <div 
                key={item._id}
                className="">
                <SingleBlogItem item={item} />
              </div>
              ))
            )
          }
         
          
        </div>

        <Pagination />
      </div>
    </div>
  );
};

export default Blog;

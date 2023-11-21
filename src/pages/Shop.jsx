import { useQuery } from '@tanstack/react-query';
import Pagination from '../components/Pagination';
import SingleItem from '../components/SingleItem';
import useAxiosPublic from '../hooks/useAxiosPublic';
import useAuth from '../hooks/useAuth';

const Shop = () => {
  const axiosPublic = useAxiosPublic();

  const { isLoading, data } = useQuery({
    queryKey: ['product'],
    queryFn: () => axiosPublic.get(`/api/v1/allproducts`)
    .then(res => {
      return res.data;
      
    })
    .catch(error => {
      console.log('axios get error', error);
      throw error;
    })
  })
  return (
    <div className="my-12">
      <div className="container">
        <h2 className="text-center font-bold text-3xl md:text-5xl mb-12">
          Our Shop
        </h2>
        <div className="grid gap-4 md:gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {
          isLoading ? (<p>Your data is loading. Please wait</p>) : (
            data.map(product => (
              <SingleItem key={product._id} product={product}></SingleItem>
            ))
          )
        }

        </div>

        <Pagination />
      </div>
    </div>
  );
};

export default Shop;

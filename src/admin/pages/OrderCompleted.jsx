import { useQuery } from '@tanstack/react-query';
import useAxios from '../../hooks/useAxios';
import Order from '../components/Order';

const OrderCompleted = () => {
  const axiosSecure = useAxios();
  const { isLoading, data } = useQuery({
    queryKey: ['product'],
    queryFn: () =>
      axiosSecure
        .get('/v1/allproducts')
        .then((res) => {
          return res.data;
        })
        .catch((error) => {
          console.log('axios get error', error);
          throw error;
        }),
  });

  return <Order isLoading={isLoading} data={data} title="Completed Orders" />;
};

export default OrderCompleted;

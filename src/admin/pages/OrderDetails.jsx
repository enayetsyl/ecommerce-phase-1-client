import { useQuery } from '@tanstack/react-query';
import Order from '../components/Order';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const OrderDetails = () => {
  const axiosSecure = useAxiosSecure()
  const { isLoading, data } = useQuery({
    queryKey: ['product'],
    queryFn: () =>
      axiosSecure
        .get('/api/v1/allorders')
        .then((res) => {
          console.log(res.data)
          return res.data;
        })
        .catch((error) => {
          console.log('axios get error', error);
          throw error;
        }),
  });

  return <Order isLoading={isLoading} data={data} title="Order Details" />;
};

export default OrderDetails;

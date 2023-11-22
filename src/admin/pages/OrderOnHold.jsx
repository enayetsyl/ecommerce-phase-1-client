import { useQuery } from '@tanstack/react-query';
import Order from '../components/Order';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const OrderOnHold = () => {
  const axiosSecure = useAxiosSecure()
  const { isLoading, data } = useQuery({
    queryKey: ['product'],
    queryFn: () =>
      axiosSecure
        .get('/api/v1/allorders')
        .then((res) => {
          return res.data;
        })
        .catch((error) => {
          console.log('axios get error', error);
          throw error;
        }),
  });

  return <Order isLoading={isLoading} data={data} title="On Hold Orders" />;
};

export default OrderOnHold;

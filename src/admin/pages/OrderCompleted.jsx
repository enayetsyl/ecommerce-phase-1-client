import { useQuery } from '@tanstack/react-query';
import Order from '../components/Order';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const OrderCompleted = () => {
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
  const completeOrders = data?.filter(completeOrder => completeOrder.status === "Completed")
  console.log(completeOrders)

  return <Order isLoading={isLoading} data={completeOrders} title="Completed Orders" />;
};

export default OrderCompleted;

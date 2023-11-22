import { useQuery } from '@tanstack/react-query';
import Order from '../components/Order';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const OrderProcessing = () => {
  const axiosSecure = useAxiosSecure();
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

  const onProcessingOrders = data?.filter(onProcessingOrder => onProcessingOrder.status === "processing")
  console.log(onProcessingOrders)

  return <Order isLoading={isLoading} data={onProcessingOrders} title="Processing Orders" />;
};

export default OrderProcessing;

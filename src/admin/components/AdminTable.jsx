import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import swal from 'sweetalert';
import useAxios from '../../hooks/useAxios';
import { GridLoader } from 'react-spinners';

const AdminTable = () => {
  const axiosSecure = useAxios();
  const { isLoading, data, refetch } = useQuery({
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

  const handleDelete = (id) => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this file!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        const res = await axiosSecure.delete(`/v1/allproducts/${id}`);
        // console.log(res.data);
        if (res.data.deletedCount > 0) {
          // refetch to update the ui
          refetch();

          swal(' Your  file has been deleted!', {
            icon: 'success',
          });
        }
      } else {
        swal('Your file is safe!');
      }
    });
  };

  return (
    <div className="my-12 overflow-x-auto h-[700px] md:h-auto">
      <div className="container">
        {isLoading ? (
          <div className="flex justify-center items-center text-center w-full my-20">
            <GridLoader color="#36d7b7" size={50} />
          </div>
        ) : (
          <Table striped>
            <Table.Head>
              <Table.HeadCell className="text-start">Thumbnail</Table.HeadCell>
              <Table.HeadCell className="text-start">Title</Table.HeadCell>
              <Table.HeadCell className="text-start">Category</Table.HeadCell>
              <Table.HeadCell className="text-start">R. Price</Table.HeadCell>
              <Table.HeadCell className="text-start">S. Price</Table.HeadCell>
              <Table.HeadCell className="text-start">Edit</Table.HeadCell>
              <Table.HeadCell className="text-start">Delete</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {data.map((product) => (
                <Table.Row
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  key={product._id}
                >
                  <Table.Cell>
                    <img
                      src={product.featured_image}
                      alt=""
                      className="w-[80px] h-[80px] object-cover"
                    />
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-bold text-gray-900 dark:text-white">
                    {product.title}
                  </Table.Cell>
                  <Table.Cell>{product.category}</Table.Cell>
                  <Table.Cell>${product.regular_price}</Table.Cell>
                  <Table.Cell>${product.sale_price}</Table.Cell>
                  <Table.Cell>
                    <Link
                      to={`/dashboard/edit-product/${product._id}`}
                      className="cursor-pointer hover:text-blue-800"
                    >
                      <FaEdit />
                    </Link>
                  </Table.Cell>
                  <Table.Cell>
                    <FaTrash
                      className="text-red-500 cursor-pointer"
                      onClick={() => handleDelete(product._id)}
                    />
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        )}
      </div>
    </div>
  );
};

export default AdminTable;

import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { GridLoader } from 'react-spinners';

const Order = ({ isLoading, data , title  }) => {
  return (
    <div className="py-12 overflow-x-auto h-[700px] md:h-auto">
      <div className="container">
        <h2 className="text-center font-bold text-3xl md:text-5xl mb-12">
          {title}
        </h2>
        {isLoading ? (
          <div className="flex justify-center items-center text-center w-full my-20">
            <GridLoader color="#36d7b7" size={50} />
          </div>
        ) : (
          <Table striped>
            <Table.Head>
              <Table.HeadCell className="text-start">Status</Table.HeadCell>
              <Table.HeadCell className="text-start">Title</Table.HeadCell>
              <Table.HeadCell className="text-start">Quantity</Table.HeadCell>
              <Table.HeadCell className="text-start">
                Total Price
              </Table.HeadCell>
              <Table.HeadCell className="text-start">Edit</Table.HeadCell>
              <Table.HeadCell className="text-start">Delete</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {data.map((order) => (
                <Table.Row
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  key={order._id}
                >
                  <Table.Cell>
                    <h4
                      className={`py-2 px-3 text-center inline-block rounded-full font-bold text-base text-white bg-blue-500 ${
                        order.status === 'On Hold Orders' && 'bg-red-500'
                      } ${order.status === 'Processing Orders' && 'bg-blue-500'} ${
                        order.status === 'Completed Orders' && 'bg-green-500'
                      }`}
                    >
                      {order.status === 'On Hold Orders' && 'On Hold'}
                      {order.status === 'Processing Orders' && 'Processing'}
                      {order.status === 'Completed Orders' && 'Completed'}
                    </h4>
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-bold text-gray-900 dark:text-white">
                    {order.name}
                  </Table.Cell>
                  <Table.Cell>5</Table.Cell>
                  <Table.Cell>${order.totalPrice}</Table.Cell>
                  <Table.Cell>
                    <Link
                      to={`/dashboard/edit-order/${order._id}`}
                      className="cursor-pointer hover:text-blue-800"
                    >
                      <FaEdit />
                    </Link>
                  </Table.Cell>
                  <Table.Cell>
                    <FaTrash className="text-red-500 cursor-pointer" />
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

export default Order;

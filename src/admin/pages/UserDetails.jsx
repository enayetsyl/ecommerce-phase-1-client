import { Table } from 'flowbite-react';
import { FaTrash } from 'react-icons/fa';

const UserDetails = () => {
  return (
    <div className="py-12 overflow-x-auto h-[700px] md:h-auto">
      <div className="container">
        <h2 className="text-center font-bold text-3xl md:text-5xl mb-12">
          User Details
        </h2>
        <Table striped className="font-[poppins]">
          <Table.Head>
            <Table.HeadCell className="text-start">Role</Table.HeadCell>
            <Table.HeadCell className="text-start">Email</Table.HeadCell>
            <Table.HeadCell className="text-start">Delete</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>
                <h4
                  className={`py-2 px-3 text-center inline-block rounded-full font-bold text-base text-white bg-blue-500 ${
                    status === 'general' && 'bg-red-500'
                  } ${status === 'advance' && 'bg-blue-500'} ${
                    status === 'admin' && 'bg-green-500'
                  }`}
                >
                  Administrator
                </h4>
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-bold text-gray-900 dark:text-white">
                avengersweb11@gmail.com
              </Table.Cell>

              <Table.Cell>
                <FaTrash className="text-red-500 cursor-pointer" />
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default UserDetails;

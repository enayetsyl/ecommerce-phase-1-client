import { Table } from 'flowbite-react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import swal from 'sweetalert';

const EditOrder = () => {
  const orderDetails = useLoaderData()
  const {name, phone, division, address, paymentMethod, bkashNumber, bkashTrnID, _id, productDetails, status} = orderDetails;
  const [selectedStatus, setSelectedStatus] = useState('')
  const axiosSecure = useAxiosSecure();
  const handleStatusChange = async (e) => {
    e.preventDefault()
    const updateData = {
      status: selectedStatus,
    }
   const updatedItem = await axiosSecure.patch(`/api/v1/order/${_id}`, updateData)
   {
    if(updatedItem.data.modifiedCount > 0){
      swal("Congratulation!", "Your order status updated successfully!", "success");
    }
   }
  }
  return (
    <div className="py-12">
      <div className="container">
        <h2 className="text-center font-bold text-xl md:text-5xl mb-12">
          Edit Order
        </h2>
        <div className="black-shadow my-12 py-12 px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-start mb-12 gap-4">
            <h3 className="font-bold text-2xl md:text-3xl">
              Order Number: {_id}
            </h3>
            <form className="flex justify-center">
              <select
                name="order-status"
                required
                className="border-0 text-2xl font-bold !focus:outline-0 order-select"
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <option value="onHold" className="text-gray-700 py-3">
                  On Hold
                </option>
                <option value="processing" className="text-gray-700 py-3">
                  Processing
                </option>
                <option value="Completed" className="text-gray-700 py-3">
                  Completed
                </option>
              </select>
              <button
                onClick={(e) => handleStatusChange(e)}
                className="bg-black text-white font-base uppercase font-bold p-3 hover:translate-y-2 duration-500 rounded"
              >
                Change Status
              </button>
            </form>
          </div>

          <div className="flex flex-col gap-y-3">
            <h4 className="text-2xl font-black mb-4">Status: {status}</h4>
            <h5 className="form-label">
              Customer Name:
              <span className="text-lg font-medium"> {name}</span>
            </h5>
            <h5 className="form-label">
              Phone:
              <span className="text-lg font-medium"> {phone}</span>
            </h5>
            <h5 className="form-label">
              Division:
              <span className="text-lg font-medium"> {division}</span>
            </h5>
            <h5 className="form-label">
              District:
              <span className="text-lg font-medium"> {division}</span>
            </h5>
            <h5 className="form-label">
              Address:
              <span className="text-lg font-medium"> {address}</span>
            </h5>
            <h5 className="form-label">
              Shipping Method:
              <span className="text-lg font-medium"> {paymentMethod}</span>
            </h5>
            <h5 className="form-label">
              Payment Number:
              <span className="text-lg font-medium"> {bkashNumber}</span>
            </h5>
            <h5 className="form-label">
              TrxID:
              <span className="text-lg font-medium"> {bkashTrnID}</span>
            </h5>
            <div className="mt-6 overflow-auto">
              <Table striped>
                <Table.Head>
                  <Table.HeadCell className="text-start">
                    Product
                  </Table.HeadCell>
                  <Table.HeadCell className="text-start">
                    Quantity
                  </Table.HeadCell>

                  <Table.HeadCell className="text-start">Total</Table.HeadCell>
                </Table.Head>
               {
                productDetails.map((product, index) => (
                  <Table.Body className="divide-y"
                  key={index}
                  >
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-bold text-gray-900 dark:text-white">
                     {product.title} - {product.choosenSize}, {product.choosenColor}
                      
                    </Table.Cell>
                    <Table.Cell>{product.quantity}</Table.Cell>
                    <Table.Cell>${product.sprice * product.quantity}</Table.Cell>
                  </Table.Row>
                
                </Table.Body>
                ))
               }
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditOrder;

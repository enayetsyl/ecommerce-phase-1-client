import { Table } from 'flowbite-react';

const EditOrder = () => {
  return (
    <div className="py-12">
      <div className="container">
        <h2 className="text-center font-bold text-xl md:text-5xl mb-12">
          Edit Order
        </h2>
        <div className="black-shadow my-12 py-12 px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-start mb-12 gap-4">
            <h3 className="font-bold text-2xl md:text-3xl">
              Order Number: #3122
            </h3>
            <form className="flex justify-center">
              <select
                name="order-status"
                required
                className="border-0 text-2xl font-bold !focus:outline-0 order-select"
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
                type="submit"
                className="bg-black text-white font-base uppercase font-bold p-3 hover:translate-y-2 duration-500 rounded"
              >
                Change Status
              </button>
            </form>
          </div>

          <div className="flex flex-col gap-y-3">
            <h4 className="text-2xl font-black mb-4">Status: Processing</h4>
            <h5 className="form-label">
              Customer Name:
              <span className="text-lg font-medium"> Shafayetur Rahman</span>
            </h5>
            <h5 className="form-label">
              Phone:
              <span className="text-lg font-medium"> 01638719578</span>
            </h5>
            <h5 className="form-label">
              Division:
              <span className="text-lg font-medium"> Dhaka</span>
            </h5>
            <h5 className="form-label">
              District:
              <span className="text-lg font-medium"> Dhaka</span>
            </h5>
            <h5 className="form-label">
              Address:
              <span className="text-lg font-medium"> road no 55</span>
            </h5>
            <h5 className="form-label">
              Shipping Method:
              <span className="text-lg font-medium"> Bkash</span>
            </h5>
            <h5 className="form-label">
              Payment Number:
              <span className="text-lg font-medium"> 01633154215</span>
            </h5>
            <h5 className="form-label">
              TrxID:
              <span className="text-lg font-medium"> 82C15W38</span>
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
                <Table.Body className="divide-y">
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-bold text-gray-900 dark:text-white">
                      Simple, Plain One Colored Panjabi - Black, Extra Small
                    </Table.Cell>
                    <Table.Cell>5</Table.Cell>
                    <Table.Cell>$1990</Table.Cell>
                  </Table.Row>
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-bold text-gray-900 dark:text-white">
                      Simple, Plain One Colored Panjabi - Black, Extra Small
                    </Table.Cell>
                    <Table.Cell>5</Table.Cell>
                    <Table.Cell>$1990</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditOrder;

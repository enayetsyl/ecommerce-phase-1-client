import { useState } from 'react';

const Checkout = () => {
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userDivision, setUserDivision] = useState('');
  const [userAddress, setUserAddress] = useState('');

  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [paymentNumber, setPaymentNumber] = useState('');
  const [paymentTrxId, setPaymentTrxId] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  // handle submit
  const handleSubmit = () => {
    let valid = true;
    let errorMessage = '';

    if (
      !userName ||
      !userPhone ||
      !userEmail ||
      !userDivision ||
      !userAddress
    ) {
      errorMessage = 'Please Fill Up All The required Fields!';
      valid = false;
    } else if (userPhone.length !== 11) {
      errorMessage = 'Please Provide a 11 digit phone number';
      valid = false;
    } else if (paymentMethod !== 'cod' && paymentNumber.length !== 11) {
      errorMessage = 'Please Provide a valid 11 digit payment number';
      valid = false;
    } else if (
      paymentMethod !== 'cod' &&
      (paymentNumber === '' || paymentTrxId === '')
    ) {
      errorMessage =
        'Invalid payment details. Please check your payment number and transaction id';
      valid = false;
    }

    if (valid) {
      setSuccess(true);
      setMessage('Order Placed Successfully!');
      // use backend code here
    } else {
      setSuccess(false);
      setMessage(errorMessage);
    }
  };

  return (
    <div className="my-12">
      <div className="container">
        <h2 className="text-center font-bold text-3xl md:text-5xl mb-12">
          Checkout
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
          <div>
            {/* billing details */}
            <div className="black-shadow rounded-lg py-12 px-4 sm:px-6">
              <h3 className="font-bold text-3xl mb-6">Billing Details</h3>
              <form className="font-[poppins]">
                {/* input group */}
                <div className="flex flex-col md:flex-row gap-4 justify-between">
                  {/* name */}
                  <div className="flex flex-col gap-y-3 w-full md:w-1/2">
                    <label htmlFor="name" className="form-label !text-base">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      name="title"
                      className="input-with-shadow"
                      required
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                  {/* phone */}
                  <div className="flex flex-col gap-y-3 w-full md:w-1/2">
                    <label htmlFor="phone" className="form-label !text-base">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="Your Phone Number"
                      className="input-with-shadow"
                      name="phone"
                      value={userPhone}
                      onChange={(e) => setUserPhone(e.target.value)}
                    />
                  </div>
                </div>
                {/* input group */}
                <div className="flex flex-col md:flex-row gap-4 justify-between mt-6">
                  {/* email */}
                  <div className=" flex flex-col gap-y-3 w-full md:w-1/2">
                    <label htmlFor="email" className="form-label !text-base">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Your Email"
                      name="email"
                      className="input-with-shadow"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      required
                    />
                  </div>
                  {/* Division*/}
                  <div className=" flex flex-col gap-y-3 w-full md:w-1/2">
                    <label htmlFor="division" className="form-label !text-base">
                      Division
                    </label>
                    <select
                      name="division"
                      required
                      className="input-with-shadow"
                      value={userDivision}
                      onChange={(e) => setUserDivision(e.target.value)}
                    >
                      <option value="" hidden>
                        Your Division
                      </option>
                      <option value="Dhaka">Dhaka</option>
                      <option value="Chattogram">Chattogram</option>
                      <option value="Khulna">Khulna</option>
                      <option value="Rajshahi">Rajshahi</option>
                      <option value="Rangpur">Rangpur</option>
                      <option value="Barishal">Barishal</option>
                      <option value="Mymensingh">Mymensingh</option>
                      <option value="Sylhet">Sylhet</option>
                    </select>
                  </div>
                </div>
                {/* input group */}
                <div className="flex flex-col md:flex-row gap-4 justify-between mt-6">
                  {/* address */}
                  <div className=" flex flex-col gap-y-3 w-full">
                    <label htmlFor="address" className="form-label !text-base">
                      Address
                    </label>
                    <textarea
                      type="address"
                      placeholder="Your address"
                      name="address"
                      className="input-with-shadow"
                      rows="3"
                      required
                      value={userAddress}
                      onChange={(e) => setUserAddress(e.target.value)}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* order details and payment */}
          <div className="flex flex-col gap-y-6">
            {/* order details */}
            <div className="black-shadow rounded-lg py-12 px-4 sm:px-6">
              <h3 className="font-bold text-3xl mb-6">Order Details</h3>
              <div className="font-[poppins]">
                <div className="flex items-center justify-between gap-3 text-base font-bold border-b pb-6 ">
                  <h5>Product</h5>
                  <h5>Pricing</h5>
                </div>
                {/* single item */}
                <div className="flex items-center justify-between gap-x-5 border-b py-6">
                  <h5>
                    Simple, Plain One Colored Panjabi - Black, Extra Large × 1
                  </h5>
                  <h5 className="whitespace-nowrap">৳ 699</h5>
                </div>
                {/* single item */}
                <div className="flex items-center justify-between gap-x-5 border-b py-6">
                  <h5>Multi Color Plain Panjabi - Blue, Extra Large × 4</h5>
                  <h5 className="whitespace-nowrap">৳ 1699</h5>
                </div>

                {/* shipping */}
                <div className="flex items-center justify-between gap-x-5 border-b py-6">
                  <h5>Shipping</h5>
                  <h5 className="whitespace-nowrap">৳ 00</h5>
                </div>
                {/* total */}
                <div className="flex items-center justify-between gap-x-5 py-6 font-bold text-lg">
                  <h5>Total</h5>
                  <h5 className="whitespace-nowrap font-bold text-lg">
                    ৳ 2000
                  </h5>
                </div>
              </div>
            </div>
            {/* payment */}
            <div className="black-shadow rounded-lg py-12 px-4 sm:px-6">
              <h3 className="font-bold text-3xl mb-6">Payment</h3>
              <form action="">
                <ul className="font-[poppins] flex flex-col gap-y-2 ">
                  <li className="relative">
                    <input
                      type="radio"
                      className="input-radio"
                      name="paymentMethod"
                      value="cod"
                      checked={paymentMethod === 'cod'}
                      onChange={() => setPaymentMethod('cod')}
                    />
                    <label htmlFor="cod" className="ml-2">
                      Cash on delivery
                    </label>
                    <div
                      className={`${
                        paymentMethod === 'cod' ? 'block' : 'hidden'
                      }   flex w-full justify-start bg-sky-300 bg-opacity-25 p-4 text-black rounded duration-500 mt-2`}
                    >
                      <p>Pay with cash upon delivery.</p>
                    </div>
                  </li>
                  <li className="relative">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        className="input-radio"
                        name="paymentMethod"
                        value="bkash"
                        checked={paymentMethod === 'bkash'}
                        onChange={() => setPaymentMethod('bkash')}
                      />

                      <label
                        htmlFor="bkash"
                        className="ml-2 flex gap-2 items-center"
                      >
                        bKash
                        <img
                          src="https://panjabi-market-bd.avengers-web.com/wp-content/plugins/bkash/images/bkash.png"
                          alt="bKash"
                          className="w-[60px]"
                        />
                      </label>
                    </div>
                    <div
                      className={`${
                        paymentMethod === 'bkash' ? 'block' : 'hidden'
                      } w-full flex flex-col gap-y-3 justify-start bg-sky-300 bg-opacity-25 p-4 text-black rounded duration-500 mt-2`}
                    >
                      <p>
                        Please complete your bKash payment at first, then fill
                        up the form below.
                      </p>
                      <p>bKash Personal Number : 01638719578</p>
                      <table border="0">
                        <tbody className="flex flex-col gap-y-2">
                          <tr className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <td>
                              <label
                                htmlFor="bkash_number"
                                className="sm:whitespace-nowrap sm:mr-3"
                              >
                                bKash Number:
                              </label>
                            </td>
                            <td>
                              <input
                                className="input-with-shadow"
                                type="text"
                                name="bkash bkash_number"
                                placeholder="01XXXXXXXXX"
                                value={paymentNumber}
                                onChange={(e) =>
                                  setPaymentNumber(e.target.value)
                                }
                              />
                            </td>
                          </tr>
                          <tr className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <td>
                              <label
                                htmlFor="bkash_transaction_id"
                                className="sm:whitespace-nowrap sm:mr-3"
                              >
                                bKash Transaction ID:
                              </label>
                            </td>
                            <td>
                              <input
                                className="input-with-shadow"
                                type="text"
                                name="bkash bkash_transaction_id"
                                id="bkash_transaction_id"
                                placeholder="8N7A6D5EE7M"
                                value={paymentTrxId}
                                onChange={(e) =>
                                  setPaymentTrxId(e.target.value)
                                }
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </li>
                </ul>
              </form>
              <button
                className="bg-black text-white font-base uppercase font-bold py-3 px-12 hover:translate-y-2 duration-500 rounded w-full mt-6"
                type="submit"
                onClick={handleSubmit}
              >
                Place Order
              </button>
              {message !== '' && (
                <p
                  className={`${
                    success ? 'text-emerald-400' : 'text-red-400'
                  } font-bold font-[poppins] mt-3`}
                >
                  {message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

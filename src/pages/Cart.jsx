import { Table } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { useEffect, useState } from 'react';


const Cart = () => {
  const [products, setProducts] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('cart')) || []
    setProducts(storedProducts)

    const sum = storedProducts.reduce((acc, product) => acc + (product.sprice * product.quantity), 0)
    setTotalPrice(sum)
  },[])

  const handleDelete = (id) => {
    console.log(id)
    const remaining = products.filter(product => product._id !== id)
    console.log(remaining)
    localStorage.setItem('cart', JSON.stringify(remaining))
    setProducts(remaining)

    const storedProducts = JSON.parse(localStorage.getItem('cart')) || []
    const sum = storedProducts.reduce((acc, product) => acc + (product.sprice * product.quantity), 0)
    setTotalPrice(sum)
  }
  return (
    <div className="my-12">
      <div className="container">
        <h2 className="text-center font-bold text-3xl md:text-5xl mb-12">
          Your Cart
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-8">
          <div className="col-span-1 lg:col-span-3">
            <div className="black-shadow rounded-lg py-12 px-4 overflow-x-auto ">
              <Table striped>
                <Table.Head>
                  <Table.HeadCell className="text-start">
                    Thumbnail
                  </Table.HeadCell>
                  <Table.HeadCell className="text-start max-w-[200px]">
                    Title
                  </Table.HeadCell>
                  <Table.HeadCell className="text-start">
                    Quantity
                  </Table.HeadCell>
                  <Table.HeadCell className="text-start">Total</Table.HeadCell>
                  <Table.HeadCell className="text-start">Remove</Table.HeadCell>
                </Table.Head>
               {
                products.length > 0 ? (
                  
                    products.map(product => (
                      <Table.Body className="divide-y"
                      key={product._id}
                      >
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell>
                      <img
                        src={product.featured_image}
                        alt=""
                        className="w-[80px] h-[80px] object-cover"
                      />
                    </Table.Cell>
                    <Table.Cell className=" font-bold text-gray-900 dark:text-white  max-w-[200px]">
                      {product.title}
                    </Table.Cell>
                    <Table.Cell>{product.quantity}</Table.Cell>
                    <Table.Cell>${product.sprice * [product.quantity]}</Table.Cell>

                    <Table.Cell onClick={() => handleDelete(product._id)}>
                      <FaTrash className="text-red-500 cursor-pointer" />
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
                    ))
                  
                ) : (
                  <p>Please go to cart. You have nothing to show here</p>
                )
               }
              </Table>
              <div>
                <Link to="/shop">
                  <button
                    className="bg-black text-white font-base uppercase font-bold py-3 px-12 hover:translate-y-2 duration-500 rounded mt-6 "
                    type="submit"
                  >
                    Return To Shop
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-2">
            <div className="black-shadow rounded-lg py-12 px-8">
              <div className="flex gap-4 justify-between">
                <h5 className="font-bold text-2xl">Total</h5>
                <h5 className="font-bold text-2xl">${totalPrice}</h5>
              </div>
              <Link to="/checkout">
                <button
                  className="bg-black text-white font-base uppercase font-bold py-3 px-12 hover:translate-y-2 duration-500 rounded mt-6 w-full"
                  type="submit"
                >
                  Proceed To Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

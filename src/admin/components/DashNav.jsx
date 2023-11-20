import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

import logo from '../../assets/logo.png';

const DashNav = () => {
  const { pathname } = useLocation();

  const [active, setActive] = useState(pathname.replace('/dashboard/', ''));
  const [open, setIsOpen] = useState(false);

  console.log(active);

  return (
    <div className="bg-white shadow w-full text-4xl relative py-3">
      <div className="container">
        <div className="flex justify-between items-center">
          {/* logo */}
          <div>
            <img src={logo} alt="" className="max-w-[100px]" />
          </div>
          {/* nav */}
          {/* desktop navigation */}
          <div className="hidden md:block">
            <ul className="flex gap-x-4 text-base uppercase">
              <Link
                to="/dashboard"
                onClick={() => setActive('')}
                className={`${active === '' && 'font-bold'}`}
              >
                <li>Dashboard</li>
              </Link>
              <Link
                to="/dashboard/add-product"
                onClick={() => setActive('add')}
                className={`${active === 'add' && 'font-bold'}`}
              >
                <li>Add Products</li>
              </Link>
              <Link
                to="/dashboard/order-details"
                onClick={() => setActive('order')}
                className={`${
                  active === 'order' && 'font-bold'
                } group relative`}
              >
                <li>Order Details</li>
                <div className="hidden group-hover:block absolute top-full bg-white black-shadow p-4 w-52">
                  <ul>
                    <Link
                      to="/dashboard/order-onhold"
                      onClick={() => setActive('onHold')}
                      className={`${active === 'onHold' && 'font-bold'}`}
                    >
                      <li className="pb-3">On Hold</li>
                    </Link>
                    <Link
                      to="/dashboard/order-processing"
                      onClick={() => setActive('processing')}
                      className={`${active === 'processing' && 'font-bold'}`}
                    >
                      <li className="pb-3">Processing</li>
                    </Link>
                    <Link
                      to="/dashboard/order-completed"
                      onClick={() => setActive('completed')}
                      className={`${active === 'completed' && 'font-bold'}`}
                    >
                      <li className="pb-3">Completed</li>
                    </Link>
                  </ul>
                </div>
              </Link>
            </ul>
          </div>
          {/* mobile navigation hamburger menu */}
          <div className="block md:hidden">
            <div className="cursor-pointer" onClick={() => setIsOpen(true)}>
              <GiHamburgerMenu />
            </div>
          </div>
        </div>
      </div>
      {/* mobile navigation */}
      <div
        className={`${
          open ? 'translate-x-0' : 'translate-x-full'
        } block md:hidden transition duration-200 absolute h-screen w-screen bg-white top-0 right-0 z-50`}
      >
        <div
          className="absolute top-4 right-5 cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <ul className="flex flex-col gap-y-4 text-xl uppercase text-center">
            <Link
              to="/dashboard"
              onClick={() => setActive('dashboard')}
              className={`${active === 'dashboard' && 'font-bold'}`}
            >
              <li>Dashboard</li>
            </Link>
            <Link
              to="/dashboard/add-product"
              onClick={() => setActive('add')}
              className={`${active === 'add' && 'font-bold'}`}
            >
              <li>Add Products</li>
            </Link>
            <Link
              to="/dashboard/order-details"
              onClick={() => setActive('order')}
              className={`${active === 'order' && 'font-bold'}`}
            >
              <li>Order Details</li>
            </Link>

            <Link
              to="/dashboard/order-onhold"
              onClick={() => setActive('onHold')}
              className={`${active === 'onHold' && 'font-bold'}`}
            >
              <li>On Hold</li>
            </Link>
            <Link
              to="/dashboard/order-processing"
              onClick={() => setActive('processing')}
              className={`${active === 'processing' && 'font-bold'}`}
            >
              <li>Processing</li>
            </Link>
            <Link
              to="/dashboard/order-completed"
              onClick={() => setActive('completed')}
              className={`${active === 'completed' && 'font-bold'}`}
            >
              <li>Completed</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashNav;

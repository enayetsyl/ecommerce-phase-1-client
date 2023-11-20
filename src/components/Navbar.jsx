import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaShoppingBasket } from 'react-icons/fa';

import logo from '../assets/logo.png';

const Navbar = () => {
  const { pathname } = useLocation();

  const [active, setActive] = useState(pathname);
  const [open, setIsOpen] = useState(false);

  return (
    <div className="bg-white shadow w-full text-4xl relative py-3">
      <div className="container">
        <div className="flex justify-between items-center">
          {/* nav */}
          {/* desktop navigation */}
          <div className="hidden md:block">
            <ul className="flex gap-x-6 text-base uppercase">
              <Link
                to="/"
                onClick={() => setActive('/')}
                className={`${active === '/' && 'font-bold'}`}
              >
                <li>Home</li>
              </Link>
              <Link
                to="/shop"
                onClick={() => setActive('shop')}
                className={`${active === 'shop' && 'font-bold'}`}
              >
                <li>Shop</li>
              </Link>
              <Link
                to="/blog"
                onClick={() => setActive('blog')}
                className={`${active === 'blog' && 'font-bold'} group relative`}
              >
                <li>Blog</li>
              </Link>
              <Link
                to="/contact"
                onClick={() => setActive('contact')}
                className={`${
                  active === 'contact' && 'font-bold'
                } group relative`}
              >
                <li>Contact Us</li>
              </Link>
            </ul>
          </div>
          {/* mobile navigation hamburger menu */}
          <div className="block md:hidden">
            <div className="cursor-pointer" onClick={() => setIsOpen(true)}>
              <GiHamburgerMenu />
            </div>
          </div>
          {/* logo */}
          <div>
            <img src={logo} alt="" className="max-w-[100px]" />
          </div>
          {/* cart */}
          <Link
            to="/cart"
            className="text-xl flex items-center gap-1 hover:text-sky-700 duration-500"
          >
            <p className="text-base font-bold">$1999</p>
            <FaShoppingBasket />
          </Link>
        </div>
      </div>
      {/* mobile navigation */}
      <div
        className={`${
          open ? 'translate-x-0' : 'translate-x-full'
        } block md:hidden transition duration-200 absolute h-screen w-screen bg-white top-0 left-0 z-50`}
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
              to="/"
              onClick={() => setActive('/')}
              className={`${active === '/' && 'font-bold'}`}
            >
              <li>Home</li>
            </Link>
            <Link
              to="/shop"
              onClick={() => setActive('shop')}
              className={`${active === 'shop' && 'font-bold'}`}
            >
              <li>Shop</li>
            </Link>
            <Link
              to="/blog"
              onClick={() => setActive('blog')}
              className={`${active === 'blog' && 'font-bold'} group relative`}
            >
              <li>Blog</li>
            </Link>
            <Link
              to="/contact"
              onClick={() => setActive('contact')}
              className={`${
                active === 'contact' && 'font-bold'
              } group relative`}
            >
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

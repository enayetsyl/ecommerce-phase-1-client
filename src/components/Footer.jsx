import logo from '../assets/logo.png';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-black py-8 text-white">
      <div className="container">
        <div className="flex flex-col gap-y-4 justify-center items-center text-center">
          <img src={logo} alt="" className="max-w-[100px]" />
          <p className="font-[poppins]">Connect with us today</p>
          <div className="flex items-center gap-4 justify-center text-xl">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaYoutube />
          </div>
          <div className="divider mt-6 mb-4" />
          <p className="font-[poppins]">© 2023. Made with ❤️ by Avengers Web</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

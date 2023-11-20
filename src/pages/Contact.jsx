import contactImage from '../assets/heroTwo.png';

const Contact = () => {
  return (
    <div className="my-12">
      <div className="container">
        <h2 className="text-center font-bold text-3xl md:text-5xl mb-12">
          Contact With Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-6">
          <div className="col-span-1">
            <img src={contactImage} alt="" />
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import contactImage from '../assets/hero-banner.png';

const Contact = () => {
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userMessage, setUserMessage] = useState('');

  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;
    let errorMessage = '';

    if (!userName || !userPhone || !userEmail || !userMessage) {
      errorMessage = 'Please Fill Up All The required Fields!';
      valid = false;
    } else if (userPhone.length !== 11) {
      errorMessage = 'Please Provide a 11 digit phone number';
      valid = false;
    }

    if (valid) {
      emailjs
        .sendForm(
          'service_3jtcnkk',
          'template_k8i86nd',
          form.current,
          'sRh_2LFR-E5Hob0CL'
        )
        .then(
          (result) => {
            console.log(result.text);
            setSuccess(true);
            setMessage('Your message was send Successfully!');
          },
          (error) => {
            console.log(error.text);
            setSuccess(false);
            setMessage('An Error Occured!');
          }
        );
    } else {
      setSuccess(false);
      setMessage(errorMessage);
    }
  };

  return (
    <div className="my-12">
      <div className="container">
        <h2 className="text-center font-bold text-3xl md:text-5xl mb-12">
          Contact With Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-6 items-center">
          <div className="col-span-1">
            <div className="">
              <img
                src={contactImage}
                alt=""
                className="w-full max-h-[560px] object-cover rounded"
              />
            </div>
          </div>
          <div className="col-span-1">
            <form
              className="font-[poppins] black-shadow p-6 md:p-10 rounded-lg"
              ref={form}
              onSubmit={handleSubmit}
            >
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
                    name="from_name"
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
                    name="from_phone"
                    value={userPhone}
                    onChange={(e) => setUserPhone(e.target.value)}
                  />
                </div>
              </div>
              {/* input group */}
              <div className="flex flex-col md:flex-row gap-4 justify-between mt-6">
                {/* email */}
                <div className=" flex flex-col gap-y-3 w-full">
                  <label htmlFor="email" className="form-label !text-base">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    name="from_email"
                    className="input-with-shadow"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              {/* input group */}
              <div className="flex flex-col md:flex-row gap-4 justify-between mt-6">
                {/* message */}
                <div className=" flex flex-col gap-y-3 w-full">
                  <label htmlFor="message" className="form-label !text-base">
                    Message
                  </label>
                  <textarea
                    type="message"
                    placeholder="Your message"
                    name="message"
                    className="input-with-shadow"
                    rows="3"
                    required
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                  />
                </div>
              </div>
              <button
                className="bg-black text-white font-base uppercase font-bold py-3 px-12 hover:translate-y-2 duration-500 rounded w-full mt-6"
                type="submit"
              >
                Send Message
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

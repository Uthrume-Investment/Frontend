import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("You have subscribed successfully.")
    // try {
    //   const response = await fetch('https://api.elasticemail.com/v4/contacts', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'X-ElasticEmail-ApiKey': '91421B9FD0A009D6384FA4CD0A19BE3C4849ED019D96B41A895932DEC5C214EC4570F7437E4D0BB02123C1064B9AF1BD'
    //     },
    //     body: JSON.stringify({ email }),
    //   });
    //   if (response.ok) {
    //     alert('Successfully subscribed to newsletter!');
    //     setEmail('');
    //   } else {
    //     alert('Failed to subscribe to newsletter. Please try again later.');
    //   }
    // } catch (error) {
    //   console.error('Error subscribing to newsletter:', error);
    //   alert('Failed to subscribe to newsletter. Please try again later.');
    // }
  };

  return (
    <footer className="py-6 bg-blue-400">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 text-white md:mb-0">© 2024 Uthrume Investment. All rights reserved.</div>
          <nav className="flex flex-wrap justify-center md:justify-end">
            <Link to="/" className="px-3 py-2 mx-1 text-white">Home</Link>
            <Link to="about" className="px-3 py-2 mx-1 text-white">About</Link>
            <Link to="investment_plans" className="px-3 py-2 mx-1 text-white">Investment Plans</Link>
            <Link to="contact" className="px-3 py-2 mx-1 text-white">Contact Us</Link>
          </nav>
        </div>
        <div className="mt-4 text-center md:mt-6 md:text-right">
          <h3 className="mb-2 font-semibold text-white">Subscribe to Newsletter</h3>
          <form onSubmit={handleSubmit} className="flex justify-center md:justify-end">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500"
            />
            <button type="submit" className="px-4 py-2 text-blue-400 transition duration-300 bg-white rounded-r-md hover:bg-blue-500 hover:text-white">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


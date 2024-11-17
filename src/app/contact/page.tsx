import { Metadata } from 'next';
import React from 'react';
export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Us description'
}
const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-black text-white min-h-screen flex flex-col items-center justify-center px-6">
      <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
        Contact Us
      </h2>

      <p className="text-lg text-gray-300 mb-8 text-center max-w-2xl leading-relaxed">
        Reach out to us anytime! Our team is here to assist you. Contact us at:
        <span className="block text-white font-semibold mt-2">+1 234 567 890</span>
        or drop us a message using the form below.
      </p>

      <form className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
            Message
          </label>
          <textarea
            id="message"
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Enter your message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;

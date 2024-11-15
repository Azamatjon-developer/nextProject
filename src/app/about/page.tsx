import React from 'react';

const About = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-black text-white min-h-screen flex flex-col items-center justify-center px-6">
      <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
        About Us
      </h2>
      
      <p className="text-lg text-gray-300 text-center max-w-3xl leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate 
        recusandae minus eaque. Here at our company, we strive to deliver the 
        best service possible to our valued customers. Join us on this journey 
        of excellence!
      </p>
    </div>
  );
};

export default About;

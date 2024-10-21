import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact: React.FC = () => {
  return (
    <>
      <Header />
      
      <h1 className="font-crimson flex justify-center font-bold text-6xl p-5 bg-light-purple border-black border-x-2 border-b-2">
        Contact Me
      </h1>

      <div className="mx-auto flex justify-center items-center mt-10 max-w-4xl p-6"> 
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 w-full font-crimson">
        
          <div className="flex flex-col sm:col-span-1">
            <label htmlFor="name" className="block leading-6 text-gray-900 font-medium text-2xl pl-3 pb-2 ">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="given-name"
              className="block w-full h-12 rounded-full border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-black focus:outline-none sm:text-sm sm:leading-6 "
            />
          </div>

          <div className="flex flex-col sm:col-span-1">
            <label htmlFor="email" className="block font-medium text-2xl leading-6 text-gray-900 pl-3 pb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="block w-full h-12 rounded-full border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-black focus:outline-none sm:text-sm sm:leading-6"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block font-medium text-2xl leading-6 text-gray-900 pl-3 pb-2 p-5">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              autoComplete="off"
              rows={5}
              className="block w-full rounded-2xl border-0 py-3 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-black focus:outline-none sm:text-sm sm:leading-6"
            />
          </div>

          <div className="sm:col-span-2 flex justify-center mt-4">
            <button className="bg-orange text-black rounded-xl py-3 px-6 font-semibold border hover:bg-darker-orange border-black text-lg ">
              Submit
            </button>
          </div>
        </div>
      </div>

    
    </>
  );
};

export default Contact;

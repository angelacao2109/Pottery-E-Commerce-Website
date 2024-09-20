import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact: React.FC = () => {
  return (
    <>
      <Header />
      <h1 className="font-crimson flex justify-center font-bold text-6xl p-5 bg-light-purple border-black border-x-2 border-b-2">
        Contact
      </h1>

      <div className=" mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 font-crimson p-10">
        <div className="sm:col-span-3">
          <label htmlFor="name" className="block leading-6 text-gray-900 font-medium text-2xl">
            Name
          </label>
          <div className="mt-2">
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="given-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-black focus:outline-none sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="email" className="block font-medium text-2xl leading-6 text-gray-900">
            Email
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-black focus:outline-none sm:text-sm sm:leading-6"
/>
          </div>
        </div>

        <div className="sm:col-span-6">
          <label htmlFor="message" className="block font-medium text-2xl leading-6 text-gray-900">
            Message
          </label>
          <div className="mt-2">
            <textarea
              id="message"
              name="message"
              autoComplete="off"
              rows={7}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-black focus:outline-none sm:text-sm sm:leading-6"
/>
          </div>
        </div>

        <button className="flex bg-orange rounded-lg mr-32 p-3 text-center justify-center font-semibold border-black  border-solid border">
            Submit
        </button>
      </div>

      <Footer />
    </>
  );
};

export default Contact;

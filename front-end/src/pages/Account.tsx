import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Account: React.FC = () => {
  return (
    <>
      <Header />
      <h1 className="font-crimson flex justify-center font-bold text-6xl p-5 bg-light-blue border-black border-x-2 border-b-2">
        Login
      </h1>

      <div className="mt-10 grid grid-cols-1 gap-y-4 font-crimson p-10 justify-items-center">
        <div className="col-span-1">
          <div className="mt-2 w-96">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              autoComplete="email"
              className="block w-full h-12 rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-black focus:outline-none sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="col-span-1">
          <div className="mt-2 w-96">
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              autoComplete="none"
              className="block w-full h-12 rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-black focus:outline-none sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <p className="text-black">
  <a href="#" className="underline">Forgot your Password?</a>
</p>

<button className="bg-light-blue rounded-xl p-2 border-black border"> Sign In </button>
<p className="text-black">
  <a href="#" className="underline">Create an Account</a>
</p>
      </div>

      <Footer />
    </>
  );
};

export default Account;

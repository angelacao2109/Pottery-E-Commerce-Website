import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Account: React.FC = () => {
  return (
    <>
      <Header />
      <h1 className="font-crimson flex  justify-center font-bold text-6xl p-5 bg-light-blue border-black border-x-2 border-b-2">Login</h1>
    

      <div className="mt-10 grid grid-cols-1 gap-y-6 font-crimson p-10 justify-items-center">
        <div className="col-span-1">
          <div className="mt-2 w-96">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              autoComplete="email"
              className=" pl-6 block w-full h-14 rounded-full border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-black focus:outline-none text-lg"
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
              className=" pl-6 block w-full h-14 rounded-full border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-black focus:outline-none text-lg"
            />
          </div>
        </div>

        <p className="text-lg text-black mt-4">
          <a href="/forgetpassword" className="underline">Forgot your Password?</a>
        </p>

        <button className="bg-light-blue  hover:bg-blue rounded-xl py-3 px-6 text-lg border-black border font-semibold">
          Sign In
        </button>

        <p className="text-lg text-black mt-4">
          <a href="/createaccount" className="underline">Create an Account</a>
        </p>
      </div>

   
    </>
  );
};

export default Account;

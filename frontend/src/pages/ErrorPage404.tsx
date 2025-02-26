import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CiWarning } from "react-icons/ci";


const ErrorPage404: React.FC = () => {
    return (
      <>
      <Header/>
     
      <div className="flex flex-col items-center">
      <span className="text-9xl pt-32 "><CiWarning /></span>
      <h1 className="font-crimson font-medium text-8xl text-center font-black" >404 Not Found</h1>
      <h3 className="font-crimson font-medium text-6xl text-center pt-7  pb-9 font-medium">Sorry Page Not Found</h3>
      <button className="font-crimson bg-light-blue text-black rounded-lg px-2 border border-black p-3 font-medium  hover:bg-blue mt-6 text-xl">Go Back</button>
      </div>
        </>
    );
}
export default ErrorPage404;


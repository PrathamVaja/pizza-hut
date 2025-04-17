import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Cooks from "../Components/Cooks";

const ReserveTable = () => {
  return (
    <>
      <Helmet>
        <title>ReseveTable</title>
        <meta name="description" content="ReseveTable" />
        <meta
          name="keywords"
          content="ReseveTable Page,awesome website,react"
        />
        <meta name="author" content="Pratham Vaja" />
      </Helmet>
      <div>
        <Header />

        <form className="max-w-lg w-full mx-auto mt-[100px] bg-white p-8 rounded-lg shadow-md">
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 dark:text-white bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-[#F3274C] dark:focus:border-[#F3274C] peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-[#F3274C] dark:peer-focus:text-[#F3274C]"
              >
                First name
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="floating_last_name"
                id="floating_last_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 dark:text-white bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-[#F3274C] dark:focus:border-[#F3274C] peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-[#F3274C] dark:peer-focus:text-[#F3274C]"
              >
                Last name
              </label>
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="floating_phone"
                id="floating_phone"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 dark:text-white bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-[#F3274C] dark:focus:border-[#F3274C] peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-[#F3274C] dark:peer-focus:text-[#F3274C]"
              >
                Phone number (123-456-7890)
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="Members"
                id="Members"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 dark:text-white bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-[#F3274C] dark:focus:border-[#F3274C] peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="Members"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-[#F3274C] dark:peer-focus:text-[#F3274C]"
              >
                Members
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#F3274C] text-white font-medium text-[18px] rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Reserve Now
          </button>
        </form>

        <Cooks />
        <Footer />
      </div>
    </>
  );
};

export default ReserveTable;

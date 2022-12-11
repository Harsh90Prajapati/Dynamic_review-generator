import React from "react";
import data from "./components/data.json";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineAmazon } from "react-icons/ai";

const App = () => {
  return (
    <div className="bg-white m-3 h-full p-2 rounded-lg drop-shadow-2xl ">
      {/*search area*/}
      {/*product area*/}
      <div className="m-6">
        <nav className="w-full flex items-center sm:items-center justify-evenly gap-3 sm:px-5 sm:py-5">
          <AiOutlineAmazon />
          <input
            type="text"
            name="name"
            placeholder="Amazon"
            className="w-full border p-2 shadow-md rounded-md"
          />
          <input
            type="text"
            name="name"
            placeholder="Flipkart"
            className="w-full border p-2 hidden hover:border-black rounded-md "
          />
          <span className="shadow-md transition ease-in-out delay-150 bg-slate-800 hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300 cursor-pointer rounded-md p-3">
            <BsPlusLg className=" text-white text-xs" />
          </span>
          <button
            className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 px-4 py-2 rounded-md text-white shadow-md shadow-blue-300"
            type="submit"
          >
            Search
          </button>
        </nav>
        {data.map((item) => {
          return (
            <div className="m-3 lg:flex flex flex-wrap justify-between lg:gap-1 gap-12 py-5">
              <div className="flex flex-col lg:w-[600px] items-center gap-6">
                <h1 className="lg:text-xl text-sm font-semibold p-2 text-left">
                  {item.name}
                  <hr />
                </h1>
                
                <div className="bg-white lg:w-[580px] rounded-md shadow-md hover:drop-shadow-xl">
                  <img
                    src={item.image}
                    alt="product"
                    className="  rounded-md "
                  />
                </div>
                <a
                  href="https://www.amazon.in/"
                  className="transition ease-in-out delay-150 bg-red-500 hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300 p-2 rounded-lg text-white text-md shadow-md shadow-blue-300 w-1/2 text-center"
                >
                  Purchase
                </a>
              </div>
              <div className="flex flex-col lg:w-[450px]  items-center justify-between">
                <h1 className="lg:text-3xl text-normal font-semibold">{item.rate} </h1>
                <hr />
                <div className=" lg:w-[430px]">
                  <span className="lg:text-3xl text-normal font-bold text-green-500 ">Good Battery Large screen Amazing pressure pen <span className=" text-red-500 ">too thick pen very slippery</span></span>
                </div>
               <div className="flex flex-col gap-3">
                <div className="bg-white h-28 lg:w-[430px] rounded-md shadow-md">
                  {item.p1}
                </div>
                <div className="bg-white h-28 lg:w-[430px] rounded-md shadow-md">
                  {item.p1}
                </div>
                <div className="bg-white h-28 lg:w-[430px] rounded-md shadow-md">
                  {item.p1}
                </div>
               </div>
              </div>

              <div className="bg-white flex flex-col p-2 items-center justify-center">
                <h1 className="lg:text-3xl text-normal font-bold ">Our Verdict <br /> <span className="text-green-500">{item.fuel_type}</span></h1>
                pi chart
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;

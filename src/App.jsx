import React from "react";
import data from "./components/data.json";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineAmazon } from "react-icons/ai";

const App = () => {
  return (
    <div className="bg-slate-100 m-3 p-2 rounded-2xl drop-shadow-2xl ">
      {/*search area*/}
      {/*product area*/}
      <div className="lg:m-6 m-2">
        <nav className="w-full flex items-center sm:items-center justify-evenly gap-3 sm:px-5 sm:py-5">
          <AiOutlineAmazon />
          <input
            type="text"
            name="name"
            placeholder="Amazon"
            className="w-full p-2 shadow-lg rounded-md"
          />
          <input
            type="text"
            name="name"
            placeholder="Flipkart"
            className="w-full border p-2 hidden hover:border-black rounded-md "
          />
          <span className="shadow-lg transition ease-in-out delay-150 bg-slate-50 hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300 cursor-pointer rounded-md p-3">
            <BsPlusLg className=" text-[#87ce70] text-xs" />
          </span>
          <button
            className="transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-[#87ce70] duration-300 px-4 py-2 rounded-lg shadow-lg text-[#87ce70] hover:text-white"
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
                
                <div className="bg-white lg:w-[580px] p-6 rounded-3xl shadow-xl hover:drop-shadow-xl ">
                  <img
                    src={item.image}
                    alt="product"
                    className="rounded-3xl "
                  />
                </div>
                <a
                  href="https://www.amazon.in/"
                  className="transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:bg-[#87ce70] hover:scale-110 duration-300 p-2 rounded-2xl text-md hover:text-white text-[#87ce70] shadow-lg  w-1/2 text-center"
                >
                  Purchase
                </a>
              </div>
              <div className="flex flex-col lg:w-[450px] gap-4 items-center justify-between">

                <h1 className="lg:text-3xl text-xl font-semibold">{item.rate} </h1>
                <hr />
                <div className=" lg:w-[430px]">
                  <span className="lg:text-3xl text-normal font-bold text-green-500 ">Good Battery Large screen Amazing pressure pen <span className=" text-red-500 ">too thick pen very slippery</span></span>
                </div>
               <div className="flex flex-col gap-3">
                <div className="bg-white lg:w-[430px] p-1 rounded-lg shadow-lg">
                 <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem molestiae sed, ex distinctio facere modi dicta dolorum veritatis mollitia totam autem molestias minima culpa, perspiciatis nesciunt. Architecto vitae odio eveniet!</h1>
                </div>
               </div>
              </div>

              <div className="flex flex-col gap-4 items-center justify-center">
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

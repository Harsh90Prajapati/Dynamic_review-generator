import React from "react";
import data from "./components/data.json";
import { AiOutlinePlusCircle } from "react-icons/ai";

const App = () => {
  return (
    <div className="">
      {/*search area*/}

      <nav className="fixed z-[1] h-20 overflow-hidden top-0 bg-white dark:bg-slate-900  w-full flex items-center shadow-md sm:items-center justify-between gap-3 py-4 px-24 sm:px-5 sm:py-5">
        <input
          type="text"
          name="name"
          placeholder="Amazon"
          className="w-full border p-2 hover:border-black rounded-md"
        />
        <input
          type="text"
          name="name"
          placeholder="Flipkart"
          className="w-full border p-2 hover:border-black rounded-md "
        />
        <button
          className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 px-4 py-2 rounded-md text-white shadow-md shadow-blue-300"
          type="submit"
        >
          Search
        </button>
        <span className="transition ease-in-out shadow-md delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-400 duration-300 cursor-pointer rounded-full">
          <AiOutlinePlusCircle className="text-3xl " />
        </span>
      </nav>
     {/*product area*/}
      <div className=" mt-24 mb-12 ">
        {(data.map((item) => {
          return(
          <div className="bg-blue-400 m-10 h-full p-4 rounded-lg shadow-md ">
          <h1 className="text-4xl font-semibold p-5">{item.name}</h1>
          <hr />
          <div className="m-3 flex items-center justify-between gap-4">
            <div className="bg-white h-[450px] w-1/4 p-2 flex flex-col justify-between rounded-md shadow-md ">
              <img src={item.image} alt="product" className=" h-fit shadow-md rounded-md"/>
              <div className="flex flex-col gap-1">
                <div className=" flex gap-2">
                 <b>Name:-</b>
                 <p className="text-sm font-normal">{item.name}</p>
                </div>
                <div className=" flex gap-2">
                 <b>Price:-</b>
                 <p className="text-sm font-normal">{item.rate}</p>
                </div>
                <div className=" flex gap-2">
                 <b>Type:-</b>
                 <p className="text-sm font-normal">{item.fuel_type}</p>
                </div>
                <div className=" flex gap-2">
                 <b>Milage:-</b>
                 <p className="text-sm font-normal">{item.milage}</p>
                </div>
                <div className=" flex gap-2">
                 <b>Description:-</b>
                 <p className="text-sm font-normal">{item.description}</p>
                </div>
              </div>
            </div>
            <div className="h-[450px] w-1/2 flex flex-col gap-3">
              <div className="bg-white h-1/2 rounded-md shadow-md">Product detail</div>
              <div className="bg-white h-1/2 rounded-md shadow-md">product review</div>
            </div>
            <div className="bg-white h-[450px] w-1/4 rounded-md shadow-md flex items-center justify-center">pi chart</div>
          </div>
          <a
          href="https://www.amazon.in/"
          className="transition ease-in-out delay-150 bg-red-500 hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300 p-2 rounded-md text-white text-md shadow-md shadow-blue-300 m-3"
          >
          Purchase
          </a>
        </div>

        )}))}
        
       
      </div>
    </div>
  );
};

export default App;

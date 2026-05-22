import React from "react";
import Icon from "./Icon";

const BottomThum = () => {
  return (
    <div className="absolute grid grid-cols-3 md:grid-cols-9 xl:right-0 lg:right-8 md:right-6 xl:left-0 lg:left-8 md:left-6 lg:-bottom-60 -bottom-48 text-xl font-bold z-30">
      <div className="lg:py-15 md:py-8 lg:pl-10 pl-5 rounded-l-2xl bg-accent col-span-2 flex items-center ">
        <i className="flaticon-location"></i>
        <input readOnly type="text" defaultValue="Enter City, State. or Zip" />
      </div>
      <div className="find-category col-span-5 bg-primary thumclip relative">
        <ul className="grid grid-cols-3 ">
          <li className="text-center border-r-4 border-gray-600/20 lg:py-15 md:py-8 flex gap-3 justify-center items-center">
            <Icon src="/dog.png" alt="DogPrint" width={50} height={50} /> Find
            Your Dog
          </li>
          <li
            className="text-center border-r-4 border-gray-600/20 lg:py-15 md:py-8 flex  justify-center items-center gap-3
          "
          >
            <Icon src="/cat.png" alt="CatPrint" width={50} height={50} /> Find
            Your Cat
          </li>
          <li
            className="text-center lg:py-15 md:py-8 flex  justify-center items-center gap-3
          "
          >
            <Icon src="/bird.png" alt="BirdPrint" width={50} height={50} /> Find
            Your Birds
          </li>
        </ul>
      </div>
      <div className=" lg:py-15 md:py-8 lg:pl-10 pl-5  bg-accent rounded-r-2xl col-span-2 flex items-center justify-center">
        <div className="text-center">Find Other Pets</div>
      </div>
    </div>
  );
};

export default BottomThum;

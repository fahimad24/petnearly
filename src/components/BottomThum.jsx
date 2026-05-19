import React from "react";
import Icon from "./Icon";

const BottomThum = () => {
  return (
    <div className="absolute grid grid-cols-3 md:grid-cols-9 right-0 left-0 -bottom-60 text-xl font-bold z-10">
      <div className="py-15 pl-10 rounded-l-2xl bg-accent col-span-2">
        <i className="flaticon-location"></i>
        <input type="text" defaultValue="Enter City, State. or Zip" />
      </div>
      <div className="find-category col-span-5 bg-primary thumclip relative">
        <ul className="grid grid-cols-3 ">
          <li className="text-center border-r-4 border-gray-600/20 py-15 flex gap-3 justify-center items-center">
            <Icon src="/dog.png" alt="DogPrint" width={50} height={50} /> Find
            Your Dog
          </li>
          <li
            className="text-center border-r-4 border-gray-600/20 py-15 flex  justify-center items-center gap-3
          "
          >
            <Icon src="/cat.png" alt="CatPrint" width={50} height={50} /> Find
            Your Cat
          </li>
          <li
            className="text-center py-15 flex  justify-center items-center gap-3
          "
          >
            <Icon src="/bird.png" alt="BirdPrint" width={50} height={50} /> Find
            Your Birds
          </li>
        </ul>
      </div>
      <div className=" py-15 pr-10  bg-accent rounded-r-2xl col-span-2">
        <div className="text-center">Find Other Pets</div>
      </div>
    </div>
  );
};

export default BottomThum;

import React from "react";

const BottomThum = () => {
  return (
    <div className="absolute grid grid-cols-3 md:grid-cols-9 right-0 left-0 -bottom-60 text-xl font-bold">
      <div className="py-15 pl-10 rounded-l-2xl bg-accent col-span-2">
        <i className="flaticon-location"></i>
        <input type="text" defaultValue="Enter City, State. or Zip" />
      </div>
      <div className="find-category col-span-5 bg-primary thumclip relative">
        <ul className="grid grid-cols-3 ">
          <li className="text-center border-r-4 border-gray-600/20 py-15">
            <a href="#/shop">
              <i className="flaticon-dog"></i> Find Your Dog
            </a>
          </li>
          <li className="text-center border-r-4 border-gray-600/20 py-15">
            <a href="#/shop">
              <i className="flaticon-happy"></i> Find Your Cat
            </a>
          </li>
          <li className="text-center py-15">
            <a href="#/shop">
              <i className="flaticon-dove"></i> Find Your Birds
            </a>
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

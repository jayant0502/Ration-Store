import Image from "next/image";
import React from "react";

const CategoryList = ({ categoryList }) => {
  return (
    <div>
      <h1 className="text-green-600 font-bold text-2xl mt-3 mb-3">Shop By Category</h1>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7  gap-5">
        {categoryList.map((category, index) => {
          return (
            <div key={index} className="flex flex-col items-center bg-green-50 p-3  cursor-pointer hover:bg-green-200  rounded-2xl gap-2 group" >
              <Image
                src={
                  process.env.NEXT_PUBLIC_BACKEND_BASEURL +
                  category?.attributes?.icon?.data[0]?.attributes?.url
                }
                alt={category?.attributes?.icon?.data[0]?.attributes?.alternativeText}
                width={80}
                height={80}
                className="group-hover:scale-105  transition-all ease-in-out  "
              />
              <h1 className="text-green-800 ">{category?.attributes?.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryList;

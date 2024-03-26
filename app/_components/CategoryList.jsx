import Image from "next/image";
import React from "react";

const CategoryList = ({ categoryList }) => {
  return (
    <div>
      <h1 className="text-green-600 font-bold text-2xl ">Shop By Category</h1>
      <div className="">
        {categoryList.map((category, index) => {
          return (
            <div key={index} >
              <Image
                src={
                  process.env.NEXT_PUBLIC_BACKEND_BASEURL +
                  category?.attributes?.icon?.data[0]?.attributes?.url
                }
                alt={category?.attributes?.icon?.data[0]?.attributes?.alternativeText}
                width={80}
                height={80}
                
              />
              <h1>{category?.attributes?.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryList;

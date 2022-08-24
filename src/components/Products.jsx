import React from "react";
import rec1 from "../assets/rec1.png";
import rec2 from "../assets/rec2.png";
import rec3 from "../assets/rec3.png";
import rec4 from "../assets/rec4.png";

function Products() {
  return (
    <>
      <div className="flex flex-col mt-12 mx-40">
        <div>
          <p className="text-black font-semibold text-4xl">
            Try our other free products
          </p>
        </div>
        <div className="flex justify-between mt-10">
          <div>
            <div>
              <img src={rec1} alt="" />
            </div>
            <div className="mt-4 mb-1 font-semibold">
              <p>Privacy Policy Generator</p>
            </div>
            <div className="text-start text-[#4D4D4D] text-sm">
              <p>Stock your store with 100s of products and </p>
              <p>start selling to customers in minutes, without </p>
              <p>the hassle of inventory or packaging.</p>
            </div>
          </div>
          <div>
            <div>
              <img src={rec2} alt="" />
            </div>
            <div className="mt-4 mb-1 font-semibold">
              <p>Terms {"&"} Conditions Generator</p>
            </div>
            <div className="text-start text-[#4D4D4D] text-sm">
              <p>Stock your store with 100s of products and </p>
              <p>start selling to customers in minutes, without </p>
              <p>the hassle of inventory or packaging.</p>
            </div>
          </div>
          <div>
            <div>
              <img src={rec3} alt="" />
            </div>
            <div className="mt-4 mb-1 font-semibold">
              <p>Domain Name Generator</p>
            </div>
            <div className="text-start text-[#4D4D4D] text-sm">
              <p>Stock your store with 100s of products and </p>
              <p>start selling to customers in minutes, without </p>
              <p>the hassle of inventory or packaging.</p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div>
            <img src={rec4} alt="" />
          </div>
          <div className="mt-4 mb-1 font-semibold">
            <p>Invoice Generator</p>
          </div>
          <div className="text-start text-[#4D4D4D] text-sm">
            <p>Stock your store with 100s of products and </p>
            <p>start selling to customers in minutes, without </p>
            <p>the hassle of inventory or packaging.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;

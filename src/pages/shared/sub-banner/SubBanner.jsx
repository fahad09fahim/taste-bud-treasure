import React from "react";
import bannerImg from "../../../assets/Seafood Paella.jpg";
const SubBanner = () => {
  return (
    <>
<div className="mt-12 mx-4 font-serif rounded-2xl shadow-2xl p-7 lg:flex gap-4 items-center">
<img className="lg:w-1/2 h-auto bg-transparent rounded-xl" src={bannerImg} alt="" />
<div>
<h1 className="lg:text-5xl  font-bold text-center">
            Seaf<span className="text-orange-400">oo</span>d Paella
          </h1>
 <p className="py-6 font-serif text-center break-words ">
            This dish is a Spanish delicacy that is loaded with seafood
            favorites that include mussels, clams, and shrimp. Infused with a
            rich saffron scent,  this dish is loaded with the flavors of Spanish
            cuisine that is sure to make your mouth water. To enhance its best
            flavors, cook it on a grill in a large skillet to distribute the
            flavors evenly.
          </p>
</div>
</div>










    {/* <div className=" bg-base-100 w-auto y-3 mx-4 ">
      <div className=" flex-col lg:flex-row  justify-center  ">
        <img src={bannerImg} className=" rounded-lg lg:shadow-2xl" />
        <div>
          <h1 className="lg:text-5xl  font-bold text-center">
            Seaf<span className="text-orange-400">oo</span>d Paella
          </h1>
         
        </div>
      </div>
    </div> */}</>
  );
};

export default SubBanner;

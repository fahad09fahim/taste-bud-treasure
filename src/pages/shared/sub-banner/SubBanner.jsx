import React from "react";
import bannerImg from "../../../assets/Seafood Paella.jpg";
const SubBanner = () => {
  return (
    <><hr />
    <div className="hero min-h-screen bg-base-100  shadow-lg my-3 ">
      <div className="hero-content flex-col lg:flex-row  justify-center  ">
        <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold text-center">
            Seaf<span className="text-orange-400">oo</span>d Paella
          </h1>
          <p className="py-6 font-serif text-center">
            This dish is a Spanish delicacy that is loaded with seafood
            favorites that include mussels, clams, and shrimp. Infused with a
            rich saffron scent,  this dish is loaded with the flavors of Spanish
            cuisine that is sure to make your mouth water. To enhance its best
            flavors, cook it on a grill in a large skillet to distribute the
            flavors evenly.
          </p>
        </div>
      </div>
    </div></>
  );
};

export default SubBanner;

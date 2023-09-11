import React from "react";
import { FaHeart } from "react-icons/fa";
import ChefRecipe from "./ChefRecipe";

const ChefDetailsCard = ({ detail }) => {
  const { chef, rating, recipe } = detail;
  return (
   <> <div className="flex justify-center">
      {/*chef details----------- */}
      <div className="card lg:card-side w-auto bg-base-100 shadow-xl ">
        <div>
          <img className=" h-96 rounded-lg p-2" src={chef.image} alt="Shoes" />
        </div>
        <div className="card-body justify-center">
          <h2 className="card-title">{chef.name}</h2>
          <div className="font-mono  ">
            <h3>Experience: {chef.experience}</h3>
            <p>Recipes: {chef.num_recipes}</p>
            <p className="flex items-center gap-1">
              likes: {chef.likes}
              <FaHeart className="text-red-600" />
            </p>
            
          </div>
        </div>
      </div>
    </div>
    <ChefRecipe detail={detail}/>
    </>
  );
};

export default ChefDetailsCard;

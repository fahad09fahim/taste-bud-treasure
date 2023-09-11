import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
const ChefCard = ({ chef }) => {
  const {id, name, image, likes, num_recipes, experience } = chef;
  const customCss = "text-md font-mono font-light";
  return (
    <div className="mx-auto my-5   rounded-xl shadow-xl p-5">
      <div className="rounded-xl overflow-hidden">
        <img style={{ height: "350px", width: "266px" }} src={image} alt="" />
      </div>
      <div className="text-start my-2">
        <h4 className="text-lg font-bold font-serif">Name: {name}</h4>
        <h5 className={customCss}>Experience: {experience}</h5>
        <h5 className="flex items-center gap-2"><FaHeart className="text-red-600"/> {likes}</h5>
        <h5 className={customCss}>Number of Recipes: {num_recipes}</h5>
      </div>
      <Link to={`/chef/${id}`} className="btn btn-outline btn-warning ">
        <span className="text-black font-mono text-sm">View Recipes</span>
      </Link>
    </div>
  );
};

export default ChefCard;

import React from "react";
import { Link } from "react-router-dom";

const ChefRecipe = ({ detail }) => {
  const { chef_id,chef, rating, recipe_one, recipe_two, recipe_tree } = detail;
  return (
    <div className="lg:mx-44 ">
      <div className="card text-center box-border shadow-lg rounded-lg ">
        <div className="card-body font-serif break-words ">
          <h2 className="text-xl">Chef Bio</h2> <p>{chef.bio}</p>
          <Link to='/' className=" btn btn-outline btn-error w-2/4 md:w-1/2 lg:w-2/12" >Back to Home</Link>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default ChefRecipe;

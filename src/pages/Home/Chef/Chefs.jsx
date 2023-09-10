import React from "react";
import { useLoaderData } from "react-router-dom";
import ChefCard from "../chefCard/ChefCard";

const Chefs = () => {
  const chefs = useLoaderData();
  console.log(chefs);
  return (
    <div className=" min-h-screen  mx-auto mt-10">
      <h1 className="text-center tracking-wide font-mono text-2xl lg:text-4xl mb-5  ">
        Explore Most <span className="text-lime-500">Popular</span> Chef.
      </h1>
      <div  className="grid  gird-col-1 lg:grid-cols-3 md:grid-cols-2 md:my-2 mx-0 lg:mx-24">
        {chefs.map((chef) => (
          <ChefCard chef={chef} key={chef.id}></ChefCard>
        ))}
      </div>
    </div>
  );
};

export default Chefs;

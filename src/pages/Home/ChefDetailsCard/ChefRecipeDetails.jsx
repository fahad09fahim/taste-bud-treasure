import React from "react";


const ChefRecipeDetails = ({ r }) => {
  const { name, ingredients, image_recipe, cooking_method } = r;
  return (
    <div className="mt-12 mx-4 font-serif rounded-2xl shadow-2xl p-7">
      <img
        className="lg:w-1/2 h-auto bg-transparent rounded-xl"
        src={image_recipe}
        alt=""
      />
      <h2>{name}</h2>
      <p className="text-sm">
        Ingredients:
        <span>
          <li>{ingredients.one}</li>
        </span>
        <span>
          {" "}
          <li>{ingredients.two}</li>
        </span>
        <span>
          {" "}
          <li>{ingredients.three}</li>
        </span>
        <span>
          {" "}
          <li>{ingredients.four}</li>
        </span>
        <span>
          {" "}
          <li>{ingredients.five}</li>
        </span>
      </p>
      <p className="break-words py-2">
        <span>{cooking_method}</span>
      </p>
    </div>
  );
};

export default ChefRecipeDetails;

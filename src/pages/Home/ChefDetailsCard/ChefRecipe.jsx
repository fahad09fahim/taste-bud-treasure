
import { Link,  } from "react-router-dom";
import ChefRecipeDetails from './ChefRecipeDetails';

const ChefRecipe = ({ detail }) => {
  const { chef, recipe} = detail;
  return (
   <> <div className="lg:mx-44 ">
      <div className="card text-center box-border shadow-lg rounded-lg ">
        <div className="card-body font-serif break-words ">
          <h2 className="text-xl">Chef Bio</h2> <p>{chef.bio}</p>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 gap-2 lg:mx-4">
        {
          recipe.map(r=><ChefRecipeDetails key={r.id} r={r}></ChefRecipeDetails>)
        }
      </div>
      <span className="flex justify-center"><Link to="/"   className=" btn btn-outline btn-error my-2 w-2/4 md:w-1/2 lg:w-2/12" >Back to Home</Link></span>
      </>
  );
};

export default ChefRecipe;

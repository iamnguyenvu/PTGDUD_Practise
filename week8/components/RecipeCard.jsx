import { BsBookmark } from "react-icons/bs";

function RecipeCard({ recipe }) {
    return (
      <div className="bg-white rounded-xl border shadow-sm overflow-hidden hover:shadow-md transition">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-36 object-cover"
        />
        <div className="p-3 relative">
          <h3 className="text-sm font-semibold text-gray-900 leading-snug">
            {recipe.title}
          </h3>
          <div className="text-xs text-pink-500 mt-1">{recipe.time}</div>
          <div className="absolute top-3 right-3">
            <BsBookmark className="w-5 h-5 text-pink-500" strokeWidth={2} />
          </div>
        </div>
      </div>
    );
  }

  export default RecipeCard;
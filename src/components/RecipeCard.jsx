import React from 'react'
import { getRecipeId, getRecipeImage, getRecipeName } from '../utils/favourites'

const RecipeCard = ({ recipe, onRemove }) => {
  const id = getRecipeId(recipe)
  const name = getRecipeName(recipe)
  const image = getRecipeImage(recipe)

  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-stone-200 transition hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-stone-400">
            <svg className="h-16 w-16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
              />
            </svg>
          </div>
        )}
        <button
          type="button"
          onClick={() => onRemove(id)}
          className="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-red-500 shadow-sm transition hover:bg-white hover:scale-110 active:scale-95"
          aria-label={`Remove ${name} from favourites`}
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        </button>
      </div>
      <div className="p-4">
        <h3 className="line-clamp-2 text-lg font-semibold text-stone-800">{name}</h3>
        {(recipe.category || recipe.strCategory) && (
          <p className="mt-1 text-sm text-stone-500">{recipe.category ?? recipe.strCategory}</p>
        )}
      </div>
      console.log("Debugging");
    </article>
  )
}

export default RecipeCard

import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import RecipeCard from '../components/RecipeCard'
import { getFavourites, removeFavourite } from '../utils/favourites'

const Favourites = () => {
  const [favourites, setFavourites] = useState([])

  const loadFavourites = useCallback(() => {
    setFavourites(getFavourites())
  }, [])

  useEffect(() => {
    loadFavourites()

    const handleUpdate = () => loadFavourites()
    window.addEventListener('favourites-updated', handleUpdate)
    window.addEventListener('storage', handleUpdate)

    return () => {
      window.removeEventListener('favourites-updated', handleUpdate)
      window.removeEventListener('storage', handleUpdate)
    }
  }, [loadFavourites])

  const handleRemove = (id) => {
    setFavourites(removeFavourite(id))
  }

  return (
    <section className="px-5 pb-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-stone-800">Your Favourites</h1>
        <p className="mt-2 text-stone-500">
          {favourites.length === 0
            ? 'Recipes you save will appear here.'
            : `${favourites.length} saved recipe${favourites.length === 1 ? '' : 's'}`}
        </p>
      </header>

      {favourites.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-stone-200 bg-stone-50 px-6 py-16 text-center">
          <div className="mb-4 rounded-full bg-purple-100 p-4 text-purple-800">
            <svg className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-stone-800">No favourites yet</h2>
          <p className="mt-2 max-w-sm text-stone-500">
            Search for recipes on the home page and tap the heart to save them here.
          </p>
          <Link
            to="/"
            className="mt-6 rounded-md bg-purple-800 px-6 py-2 font-semibold text-white transition active:scale-95 hover:bg-purple-900"
          >
            Find recipes
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {favourites.map((recipe) => (
            <RecipeCard
              key={recipe.id ?? recipe.idMeal}
              recipe={recipe}
              onRemove={handleRemove}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default Favourites

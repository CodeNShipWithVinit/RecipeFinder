const STORAGE_KEY = 'recipefinder_favourites'

export function getFavourites() {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

export function removeFavourite(id) {
  const updated = getFavourites().filter(
    (recipe) => String(recipe.id ?? recipe.idMeal) !== String(id)
  )
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
  window.dispatchEvent(new Event('favourites-updated'))
  return updated
}

export function getRecipeId(recipe) {
  return recipe.id ?? recipe.idMeal
}

export function getRecipeName(recipe) {
  return recipe.name ?? recipe.strMeal ?? 'Untitled recipe'
}

export function getRecipeImage(recipe) {
  return recipe.image ?? recipe.strMealThumb ?? ''
}

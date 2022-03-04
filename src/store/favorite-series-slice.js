import { createSlice } from "@reduxjs/toolkit"
// Création d'un state globale stockant les séries favorites de l'utilisateur

// On récupere les données dans localStorage
const stockedSeries = JSON.parse(localStorage.getItem("series"))
const favoriteSlice = createSlice({
  name: "fav",
  initialState: { series: stockedSeries || [] }, //Instanciation soit par les données de localStorage, si pas de données alors par un table vide
  reducers: {
    // ajout d'une série favorite dans le tableau ddes favoris
    // Stockage dans un localStorage
    addFavorite(state, action) {
      state.series.push(action.payload.show)
      localStorage.setItem("series", JSON.stringify(state.series))
    },
    // Suppression d'une série favorite
    // Suppression du localStorage
    removeFavorite(state, action) {
      state.series = state.series.filter(
        (show) => show.id !== action.payload.id
      )
      if (state.series.length === 0) {
        localStorage.removeItem("series")
      } else {
        localStorage.setItem("series", JSON.stringify(state.series))
      }
    },
  },
})

export const FavoriteActions = favoriteSlice.actions
export default favoriteSlice.reducer

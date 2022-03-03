import { createSlice } from "@reduxjs/toolkit"

const stockedSeries = JSON.parse(localStorage.getItem("series"))

const favoriteSlice = createSlice({
  name: "fav",
  initialState: { series: stockedSeries || [] },
  reducers: {
    addFavorite(state, action) {
      state.series.push(action.payload.show)
      localStorage.setItem("series", JSON.stringify(state.series))
    },
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

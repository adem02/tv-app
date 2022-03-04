// Utilisation de @reduxjs/toolkit pour améliorer l'expérience de dév avec Redux
import { configureStore } from "@reduxjs/toolkit"
import AuthSliceReducer from "./auth-slice"
import FavoriteSliceReducer from "./favorite-series-slice"

const store = configureStore({
  reducer: { auth: AuthSliceReducer, fav: FavoriteSliceReducer },
})

export default store

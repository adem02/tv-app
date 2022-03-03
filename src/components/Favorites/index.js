import { Typography } from "@mui/material"
import ShowsList from "../Shows/ShowsList"
import React from "react"
import { useSelector } from "react-redux"

const Favorites = () => {
  const series = useSelector((state) => state.fav.series)

  console.log(series)

  return (
    <div>
      <Typography>Liste de vos favoris (à regarder plutard)</Typography>
      <ShowsList series={series || []} />
    </div>
  )
}

export default Favorites

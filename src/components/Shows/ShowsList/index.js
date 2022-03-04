import { ImageList, Container } from "@mui/material"
import React from "react"
import { useSelector } from "react-redux"
import ShowItem from "../../UI/ShowItem"

// Ce composant affiche les liste des series
// Appelé dans Shows et Favorites, il permet donc d'afficher soit les données récupérées du l'api soit du store
const ShowList = ({ series }) => {
  const favoritedSeries = useSelector((state) => state.fav.series)

  return (
    <Container>
      <ImageList>
        {series.map((serie) => {
          const show = serie.show || serie // Opération permettant de recupérer les données soit de l'api (serie.show) soit du store (serie)
          const favorited = favoritedSeries.find(
            (serie) => show.id === serie.id
          )
          return <ShowItem key={show.id} show={show} isFav={!!favorited} />
        })}
      </ImageList>
    </Container>
  )
}

export default ShowList

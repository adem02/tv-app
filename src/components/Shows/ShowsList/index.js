import { ImageList, Container } from "@mui/material"
import React from "react"
import { useSelector } from "react-redux"
import ShowItem from "../../UI/ShowItem"

const ShowList = ({ series }) => {
  const favoritedSeries = useSelector((state) => state.fav.series)

  return (
    <Container>
      <ImageList>
        {series.map((serie) => {
          const show = serie.show || serie
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

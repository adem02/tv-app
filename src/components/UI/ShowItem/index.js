import { IconButton, ImageListItem, ImageListItemBar } from "@mui/material"
import React from "react"
import { FavoriteBorder, Favorite } from "@mui/icons-material"
import classes from "./index.module.css"
import { useDispatch } from "react-redux"
import { FavoriteActions } from "../../../store/favorite-series-slice"

// Composant permettant d'afficher une les informations d'une série.
// Le composant gère les fonctionnalités d'ajout et de suppression des favoris.
const ShowItem = (props) => {
  const { show, isFav } = props
  const { id, name, status, image } = show
  const dispatch = useDispatch()

  const addOnFavoriteShow = () => {
    dispatch(FavoriteActions.addFavorite({ show }))
  }

  const removeFromFavoriteShow = (id) => {
    dispatch(FavoriteActions.removeFavorite({ id }))
  }

  return (
    <ImageListItem className={classes.show_item_container}>
      <img
        src={(image && image.medium) || ""}
        srcSet={(image && image.original) || ""}
        alt={name}
        loading="lazy"
      />
      <ImageListItemBar
        title={name}
        subtitle={status}
        actionIcon={
          <React.Fragment>
            {!isFav && (
              <IconButton onClick={addOnFavoriteShow}>
                <FavoriteBorder color="primary" fontSize="large" />
              </IconButton>
            )}
            {isFav && (
              <IconButton onClick={() => removeFromFavoriteShow(id)}>
                <Favorite color="primary" fontSize="large" />
              </IconButton>
            )}
          </React.Fragment>
        }
      />
    </ImageListItem>
  )
}

export default ShowItem

import React, { useState, useEffect } from "react"
import SearchForm from "./SearchForm"
import axios from "axios"
import ShowsList from "./ShowsList/index"
import { Typography } from "@mui/material"

// Composant de gestion de l'appel d'api des series et de l'affichage de la recherche de séries
// Ce composant récupère la query entrée dans le composant enfant SearchForm puis fait requete GET vers le serveur ensuite affiche les résultats avc le composant enfant ShowList
const Shows = () => {
  const [series, setSeries] = useState([])
  const [query, setQuery] = useState("")

  const onSearchInput = (query) => setQuery(query)

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/search/shows?q=${query}`)
      .then((res) => setSeries(res.data)) //Les données récupérées sont stocké dans le state local et affichées, pas besoin du store
      .catch((err) => console.log(err))
  }, [query])

  return (
    <div>
      <Typography variant="h2" textAlign="center" mb={5}>
        Welcome to TV App
      </Typography>
      <SearchForm onSearchInputSubmit={onSearchInput} />
      <ShowsList series={series} />
    </div>
  )
}

export default Shows

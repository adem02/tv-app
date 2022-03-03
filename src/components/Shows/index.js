import React, { useState, useEffect } from "react"
import SearchForm from "./SearchForm"
import axios from "axios"
import ShowsList from "./ShowsList/index"
import { Typography } from "@mui/material"

const Shows = () => {
  const [series, setSeries] = useState([])
  const [query, setQuery] = useState("")

  const onSearchInput = (query) => setQuery(query)

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/search/shows?q=${query}`)
      .then((res) => setSeries(res.data))
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

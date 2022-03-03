import { TextField, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react'
import classes from './index.module.css'

const SearchForm = ({ onSearchInputSubmit }) => {
    const [searchInput, setSearchInput] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        onSearchInputSubmit(searchInput);
    }

    return (
        <form onSubmit={handleSubmit} className={classes.form}>
            <TextField
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
                sx={{ width: '100%' }}
                id="input-with-icon-textfield"
                label="Do a search for your favorite TV Series"
                size='medium'
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
                variant="standard"
            />
        </form>
    )
}

export default SearchForm
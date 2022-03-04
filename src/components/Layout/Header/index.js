import React, { Fragment } from "react"
import { Link } from "react-router-dom"
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material"
import classes from "./index.module.css"
import { useDispatch, useSelector } from "react-redux"
import { AuthActions } from "../../../store/auth-slice"

// Entête de l'application, avec affichage conditionnel selon l'authentification
const Header = () => {
  const userIsLogged = useSelector((state) => state.auth.userIsLogged)
  const dispatch = useDispatch()

  return (
    <Box sx={{ flexGrow: 1, marginBottom: "2em" }}>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Link to="/">TV APP</Link>
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            Series
          </Typography>
          <Button color="inherit">
            <Fragment>
              {!userIsLogged ? ( //Si utilisateur non connecté
                <Link to="auth">Login</Link>
              ) : (
                //Si utilisateur connecté
                <Link
                  to="auth"
                  onClick={() => dispatch(AuthActions.signOutUser())}
                >
                  Logout
                </Link>
              )}
            </Fragment>
          </Button>
          <Fragment>
            {userIsLogged && (
              <Button color="inherit">
                <Link to="favorites">My Favs</Link>
              </Button>
            )}
          </Fragment>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header

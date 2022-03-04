import React, { useState } from "react"
import { TextField, Button, Typography } from "@mui/material"
import classes from "./index.module.css"
import { useDispatch } from "react-redux"
import { signUser } from "../../../store/auth-actions"

const apiKey = "AIzaSyCpNNjVEZHtKQZV1fIx8rSga1PW-O8mWcE"

// Composant de gestion de l'authentification d'un utilisateur
// J'ai utilisé (Firebase auth rest api)
// Méthodes présentes : Inscription/Connexion.
// La déconnexion est gérée par la simple supression du token (cf. /src/store/auth-slice)
// Persistance des données de connexion en utilisant localStorage
const AuthForm = () => {
  const [log, setLog] = useState(false)
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  })
  const dispatch = useDispatch()

  // Methode plus rapide de gérer l'entrée dans les champs de texte grâce à l'id
  const handleCredentialsChange = (e) => {
    setUserCredentials((prevState) => {
      return { ...prevState, [e.target.id]: e.target.value }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const uri = log
      ? `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`
      : `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`

    const { email, password } = userCredentials

    dispatch(signUser(uri, { email, password, returnSecureToken: true }))
  }
  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <Typography variant="body">
        {log ? "Connexion" : "Inscription"}
      </Typography>
      <div className={classes.form_control_container}>
        <TextField
          value={userCredentials.email}
          id="email"
          label="Email"
          type="email"
          variant="filled"
          onChange={handleCredentialsChange}
        />
      </div>

      <div className={classes.form_control_container}>
        <TextField
          value={userCredentials.password}
          id="password"
          label="Password"
          type="password"
          variant="filled"
          onChange={handleCredentialsChange}
        />
      </div>

      {log ? (
        <Button variant="outlined" type="submit">
          Se connecter
        </Button>
      ) : (
        <Button variant="outlined" type="submit">
          S'inscrire
        </Button>
      )}
      <Button
        size="small"
        onClick={() => setLog((prevState) => !prevState)}
        mt={3}
      >
        {log
          ? "Pas encore inscrit ? Cliquez ici"
          : "Déjà inscrit ? Connectez-vous !"}
      </Button>
    </form>
  )
}

export default AuthForm

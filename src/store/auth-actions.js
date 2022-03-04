import axios from "axios"
import { AuthActions } from "./auth-slice"

// Fichier d'appel api d'authentification (inscription, connexion), gestion de l'asynchrone car interdit dans la création du reducer.
export const signUser = (uri, data) => {
  return (dispatch) => {
    axios
      .post(uri, data)
      .then((res) => {
        dispatch(AuthActions.signIOUser({ token: res.data.idToken })) //Connexion ou inscription réussie ? Appel a la methode signIOUser
      })
      .catch((err) => {
        alert(err.response.data.error.message) //Connexion ou inscription réussie ? Fenetre d'alerte indiquant le message d'erreur
      })
  }
}

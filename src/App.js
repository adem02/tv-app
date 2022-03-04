import "./App.css"
import { Route, Switch, Redirect } from "react-router-dom"
import { useSelector } from "react-redux"
import Layout from "./components/Layout"
import HomePage from "./pages/HomePage"
import AuthPage from "./pages/AuthPage"
import FavoritePage from "./pages/FavoritePage"

// Composant App, gérant la guarde de route
function App() {
  const userIsLoggged = useSelector((state) => state.auth.userIsLogged)

  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          {!userIsLoggged && <Redirect to="auth" />}
          {/* Si Utilisateur non connecté, redirection à la page d'authentification */}
          {userIsLoggged && <HomePage />} {/* Si Utilisasateur connecté */}
        </Route>
        <Route path="/auth">
          {!userIsLoggged && <AuthPage />} {/* Si Utilisasateur non connecté */}
          {userIsLoggged && <Redirect to="/" />}
          {/* Si Utilisasateur connecté, redirection à la page d'accueil */}
        </Route>

        <Route path="/favorites">
          {!userIsLoggged && <Redirect to="auth" />}
          {/* Si Utilisasateur non connecté, redirection à la page d'authentification */}
          {userIsLoggged && <FavoritePage />}
          {/* Si Utilisasateur non connecté */}
        </Route>
      </Switch>
    </Layout>
  )
}

export default App

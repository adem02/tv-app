import "./App.css"
import { Route, Switch, Redirect } from "react-router-dom"
import { useSelector } from "react-redux"
import Layout from "./components/Layout"
import HomePage from "./pages/HomePage"
import AuthPage from "./pages/AuthPage"
import FavoritePage from "./pages/FavoritePage"

function App() {
  const userIsLoggged = useSelector((state) => state.auth.userIsLogged)

  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          {!userIsLoggged && <Redirect to="auth" />}
          {userIsLoggged && <HomePage />}
        </Route>

        <Route path="/auth">
          {!userIsLoggged && <AuthPage />}
          {userIsLoggged && <Redirect to="/" />}
        </Route>

        <Route path="/favorites">
          {!userIsLoggged && <Redirect to="auth" />}
          {userIsLoggged && <FavoritePage />}
        </Route>
      </Switch>
    </Layout>
  )
}

export default App


import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GlobalProvider } from "./contexts/GlobalContext.jsx"

import DefaultLayout from "./pages/DefaultLayout.jsx"
import HomePage from "./pages/Homepage.jsx"
import About from "./pages/About.jsx"
import Contacts from "./pages/Contacts.jsx"
import movies from "./pages/movies.jsx"
import Details from "./pages/Details.jsx"
import NotFoundPage from "./pages/NotFoundPage.jsx"

function App() {

  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout} >
            <Route path="/" Component={HomePage} />
            <Route path="/about" Component={About} />
            <Route path="/contacts" Component={Contacts} />
            <Route path="/movies" >
              <Route index Component={movies} />
              <Route path=":id" Component={Details} />
            </Route>
          </Route>
          {/* Rotta per le pagine non trovate: inserendo path="*" */}
          <Route path="*" Component={NotFoundPage} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App

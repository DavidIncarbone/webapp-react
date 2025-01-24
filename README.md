# React template

```bash
# clono la cartella da github

npm create vite@latest

# alla domanda project-name inserisco . (dot)

npm install

# testo
npm run dev

# apro il .gitignore e aggiungo package-lock.json e .env

 # installo gli altri pacchetti che mi servono (bootstrap,axios, react-router-dom)

 # cancello il contenuto di App.jsx e rimuovo gli import che non mi servono
 # cancello i file che non mi servono

 #se voglio importo bootstrap in main.jsx prima del mio css custom
   ```

```javascript 
 import "bootstrap/dist/css/bootstrap.min.css";
  ```
 Comincio ad editare App.jsx

### Add to rules in eslint
```javascript
rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ..reactHooks.configs.recommended.rules,
      "react/prop-types": 0, 👈
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },


```
### Routing

```javascript

// in default layout es.
import { Outlet } from "react-router-dom";

import HeaderComponent from "../components/HeaderComponent";
import Alert from "../components/Alert";
import FooterComponent from "../components/FooterComponent";
export default function DefaultLayout() {
  return (
    <div>
      <HeaderComponent />
      <Alert />
      <main className="container">
        <Outlet />
      </main>

      <FooterComponent />
    </div>
  );
}

// in app.jsx es.
import { BrowserRouter, Routes, Route } from 'react-router-dom';

   <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={HomePage} />
          <Route path="/movies" > 👈
            <Route index Component={MainPage} /> 👈
            <Route path=":id" Component={moviePage} /> 👈
            <Route path="create" Component={AddPizzaPage} /> 👈
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    
```
### Context
```javascript
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  
  useEffect(getData, []);
  
  function getData() {
    setLoading(true);
    axios
      .get(apiUrl + endpoint)
      .then((res) => {
        setMovies(res.data.results);       
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }
  
  const data = {
    movies
  };
  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};

function useGlobalContext() {
  const context = useContext(GlobalContext);
  return context;
}

export { GlobalProvider, useGlobalContext };

```

In App.jsx use global context
```javascript
<GlobalProvider>
  /* Routing o altri componenti children */
 </GlobalProvider>
```

# TODO

1. ROUTING: 
- HomePage(movies)
- About
- Contatti 
- Details Page(movie)

2. LAYOUT: 
- default layout:
    - Header
    - Footer

3. COMPONENTS: Header, Footer, Card, movie Detail, Review, Review Form
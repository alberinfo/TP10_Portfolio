import logo from './logo.svg';
import './App.css';
import { Navbar } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { PortfolioContext } from './context/context';

function App() {
  const [portfolio, setPortfolio] = useState([]);

  /*useEffect(() => {
    async function getData() {
      const resp = await axios.get("../creaciones.json");
      console.log("LMAO", resp);
      setContext(resp);
    }
    
    getData();
  }, []);*/

  const añadirAFavs = (item) => {
    //añadir a localstorage
    setPortfolio(portfolio.map(obra => obra.nombre === item.nombre ? {...obra, favorito: true} : obra));
  }

  const eliminarDeFavs = (item) => {
    //eliminar de localStorage
    setPortfolio(portfolio.map(obra => obra.nombre === item.nombre ? {...obra, favorito: false} : obra));
  }

  return (
    <BrowserRouter>

      <Topbar></Topbar>
      <PortfolioContext.Provider value={portfolio}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/sobremi" element={<AboutMe />} />
          <Route path="/creaciones" element={<Creaciones />} />
          <Route path="/favs" element={<Favs />} />
        </Routes>
      </PortfolioContext.Provider>
      <Footer></Footer>

    </BrowserRouter>
  );
}

export default App;

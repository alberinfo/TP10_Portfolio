import logo from './logo.svg';
import './App.css';
import { Navbar } from 'react-bootstrap';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { PortfolioContext } from './context/context';
import Topbar from './Components/Topbar';
import Creaciones from './Components/Creaciones';
import Home from './Components/Home';
import Favs from './Components/Favs';
import AboutMe from './Components/AboutMe';
import Footer from './Components/Footer';

function App() {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    async function getData() {
      let creaciones = JSON.parse(localStorage.getItem("creaciones"));
      if(creaciones !== null) {
        if(creaciones.length !== 0) {
          setPortfolio(creaciones);
          return;
        }
      }

      const resp = await axios.get("creaciones.json");
      setPortfolio(resp.data);
    }
    
    getData();
  }, []);

  useEffect(() => {
    localStorage.setItem("creaciones", JSON.stringify(portfolio));
  }, [portfolio])

  const añadirAFavs = (item) => {
    setPortfolio(portfolio.map(obra => obra.nombre === item.nombre ? {...obra, favorito: true} : obra));
  }

  const eliminarDeFavs = (item) => {
    setPortfolio(portfolio.map(obra => obra.nombre === item.nombre ? {...obra, favorito: false} : obra));
  }

  if(portfolio.length === 0) return (<></>);

  return (
    <BrowserRouter>

      <Topbar></Topbar>
      <PortfolioContext.Provider value={{portfolio, añadirAFavs, eliminarDeFavs}}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/sobremi" element={<AboutMe />} />
          <Route path="/creaciones" element={<Creaciones />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="*" element={<Navigate to="/home" replace/>}/>
        </Routes>
      </PortfolioContext.Provider>
      <Footer style={{paddingBottom: "20px"}}></Footer>

    </BrowserRouter>
  );
}

export default App;

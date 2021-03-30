import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import CharacterList from "./containers/Character/List/List";
import FilmList from "./containers/Film/List/List";
import PlanetList from "./containers/Planet/List/List";
import SpecieList from "./containers/Specie/List/List";
import StarshipList from "./containers/Starship/List/List";
import VehicleList from "./containers/Vehicle/List/List";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./containers/Home/Home";
import WikiContextProvider from "./contexts/WikiContext";
import FilmDetails from "./components/Details/Film/FilmDetails";
import InfoContextProvider from "./contexts/InfoContext";
import CharacterDetails from "./components/Details/Character/CharacterDetails";
import StarshipDetails from "./components/Details/Starship/StarshipDetails";
import PlanetDetails from "./components/Details/Planet/PlanetDetails";
import SpecieDetails from "./components/Details/Specie/SpecieDetails";
import VehicleDetails from "./components/Details/Vehicle/VehicleDetails";

function App() {
  return (
    <Router>
      <WikiContextProvider>
        <InfoContextProvider>
          <Navbar />
          <Switch>
            <Route path="/" exact children={<Redirect to="/home" />} />
            <Route path="/home" component={Home} />
            <Route path="/characters" exact component={CharacterList} />
            <Route path="/films" exact component={FilmList} />
            <Route path="/planets" exact component={PlanetList} />
            <Route path="/species" exact component={SpecieList} />
            <Route path="/starships" exact component={StarshipList} />
            <Route path="/vehicles" exact component={VehicleList} />
            <Route path="/characters/:title" component={CharacterDetails} />
            <Route path="/films/:title" component={FilmDetails} />
            <Route path="/planets/:title" component={PlanetDetails} />
            <Route path="/species/:title" component={SpecieDetails} />
            <Route path="/starships/:title" component={StarshipDetails} />
            <Route path="/vehicles/:title" component={VehicleDetails} />
          </Switch>
          <Footer />
        </InfoContextProvider>
      </WikiContextProvider>
    </Router>
  );
}

export default App;

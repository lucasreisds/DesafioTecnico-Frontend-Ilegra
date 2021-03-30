import React from "react";
import HomeCategory from "../../components/HomeCategory/HomeCategory";
import { Container, Cards, cardAnimation, Logo } from "./HomeStyle";
import characterImg from "../../assets/images/home/characters.webp";
import filmImg from "../../assets/images/home/films.jpg";
import planetImg from "../../assets/images/home/TatooineCategory.webp";
import specieImg from "../../assets/images/characters/WicketSystriWarrick.webp";
import vehicleImg from "../../assets/images/vehicles/ImperialSpeederBike.png";
import { Link } from "react-router-dom";
import starwarsLogo from "../../assets/images/starwarsLogo.webp";
import starshipImg from "../../assets/images/starhips/MillenniumFalcon.jpg";
const Home = () => {
  return (
    <Container>
      <Logo src={starwarsLogo} />
      <Cards variants={cardAnimation} initial="hidden" animate="visible">
        <Link to="/characters">
          <HomeCategory title="Characters" image={characterImg} />
        </Link>
        <Link to="/films">
          <HomeCategory title="Films" image={filmImg} />
        </Link>
        <Link to="/planets">
          <HomeCategory title="Planets" image={planetImg} />
        </Link>
        <Link to="/species">
          <HomeCategory title="Species" image={specieImg} />
        </Link>
        <Link to="/starships">
          <HomeCategory title="Starships" image={starshipImg} />
        </Link>
        <Link to="/vehicles">
          <HomeCategory title="Vehicles" image={vehicleImg} />
        </Link>
      </Cards>
    </Container>
  );
};

export default Home;

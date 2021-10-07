import React from "react";
import Header from "../../components/Header";
import HomeCarousel from "./Carousel";
import HomeCinema from "./HomeCinema";
import DropDown from "../../components/Dropdown";
import FooterHome from "../../components/FooterHome";
import MovieList from "./MovieList";
const Home = () => {
  return (
    <div>
      <Header></Header>

      <HomeCarousel></HomeCarousel>

      <DropDown></DropDown>

      <MovieList></MovieList>

      <HomeCinema></HomeCinema>

      <FooterHome></FooterHome>
    </div>
  );
};

export default Home;

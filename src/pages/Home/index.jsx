import React from "react";
import HomeCarousel from "./Carousel";
import HomeCinema from "./HomeCinema";
import DropDown from "../../components/Dropdown";
import FooterHome from "../../components/FooterHome";
import MovieList from "./MovieList";
import Layout from "../../HOCs/Layout";

const Home = () => {
  return (
    <Layout>
      <HomeCarousel></HomeCarousel>
      {/* <DropDown></DropDown> */}
      <MovieList></MovieList>
      <HomeCinema></HomeCinema>
      <FooterHome></FooterHome>
    </Layout>
  );
};

export default Home;

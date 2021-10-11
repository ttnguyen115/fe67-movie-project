import React, { useEffect } from "react";
import CarouselItem from "../../../components/CarouselItem";
import { useSelector, useDispatch } from "react-redux";
import { fetchCarousels } from "../../../store/actions/carousel";

const Carousel = () => {
  const { loading, carouselList } = useSelector((state) => state.carouselList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarousels());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>

  return (
    <>
      <CarouselItem carouselList={carouselList} />
    </>
  );
};

export default Carousel;

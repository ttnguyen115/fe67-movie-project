import React, { useEffect } from "react";
import CarouselItem from "../../../components/CarouselItem";
import { useSelector, useDispatch } from "react-redux";
import { fetchCarousels } from "../../../store/actions/carousel";

const Carousel = () => {
  // use useSelector connect lên store
  const fetchCarousel = useSelector((state) => state.CarouselList);

  const dispath = useDispatch();
  // use useEffect lấy data về chay 1 lần
  useEffect(() => {
    //
    dispath(fetchCarousels());
  }, []);

  return (
    <div>
      <CarouselItem fetchCarousel={fetchCarousel}></CarouselItem>;
    </div>
  );
};

export default Carousel;

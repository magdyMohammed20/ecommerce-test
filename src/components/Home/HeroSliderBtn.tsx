import { useEffect } from "react";
import { useSwiper } from "swiper/react";

interface Props {
  counter: number;
}

const HeroSliderBtn = ({ counter }: Props) => {
  const swiper = useSwiper();

  useEffect(() => {
    if (counter) {
      swiper.slideNext();
    }
  }, [counter]);

  return null;
};

export default HeroSliderBtn;

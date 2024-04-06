import { useEffect } from "react";
import { useSwiper } from "swiper/react";

interface Props {
  counter: number;
  status: string;
}

const SliderBtn = ({ counter, status }: Props) => {
  const swiper = useSwiper();

  useEffect(() => {
    if (counter) {
      if (status === "next") {
        swiper.slideNext();
      } else {
        swiper.slidePrev();
      }
    }
  }, [counter]);

  return null;
};

export default SliderBtn;

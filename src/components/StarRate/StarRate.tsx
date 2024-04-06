import {
  Star14,
  Star18,
  Star20,
  Star24,
  UnStar,
  HalfStar14,
  HalfStar24,
} from "../../../public/assets/svg/landingPageSvgs";

interface Props {
  rate: number;
  starSize: number;
}

const loop = [1, 2, 3, 4, 5];

const StarRate = ({ rate, starSize }: Props) => {
  return (
    <div className="flex items-center gap-1">
      {loop.map((item) => (
        <div key={item}>
          {item <= rate ? (
            starSize === 14 ? (
              <Star14 />
            ) : starSize === 18 ? (
              <Star18 />
            ) : starSize === 20 ? (
              <Star20 />
            ) : (
              <Star24 />
            )
          ) : item - 0.5 === rate ? (
            starSize === 14 ? (
              <HalfStar14 />
            ) : (
              <HalfStar24 />
            )
          ) : (
            <UnStar />
          )}
        </div>
      ))}
    </div>
  );
};

export default StarRate;

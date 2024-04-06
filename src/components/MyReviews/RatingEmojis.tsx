import Image from "next/image";

interface Props{
  value: string;
  onChange: (value: string) => void;
}

const emojis = [
  {
    id: 1,
    image: "/assets/images/profile/review1.png",
    value: "sad",
  },
  {
    id: 2,
    image: "/assets/images/profile/review2.png",
    value: "spheechless",
  },
  {
    id: 3,
    image: "/assets/images/profile/review3.png",
    value: "blush",
  },
  {
    id: 4,
    image: "/assets/images/profile/review4.png",
    value: "happy",
  },
  {
    id: 5,
    image: "/assets/images/profile/review5.png",
    value: "star",
  },
];

const RatingEmojis = ({value, onChange}:Props) => {
  return (
    <div className="flex flex-wrap gap-2 lg:gap-4">
    {emojis.map((item) => (
      <div
        key={item.id}
        className={`p-1 rounded-full cursor-pointer ${
          value === item.value ? "bg-primary" : "bg-cloud"
        }`}
        onClick={() => onChange(item.value)}
      >
        <Image
          src={item.image}
          alt="emoji"
          width={48}
          height={48}
          className="w-12 h-12"
        />
      </div>
    ))}
  </div>
  )
}

export default RatingEmojis
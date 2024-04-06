import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

interface Props {
  images?: string[];
  imageSize: number;
  isBlured?: Boolean;
}

const GroupAvatars = ({ images, imageSize, isBlured }: Props) => {
  return (
    <AvatarGroup dir="ltr">
      {images?.map((image, index) => (
        <Avatar
          key={index}
          src={image}
          sx={{
            width: imageSize,
            height: imageSize,
            filter: isBlured ? "blur(0.75px)" : "none",
          }}
        />
      ))}
    </AvatarGroup>
  );
};

export default GroupAvatars;

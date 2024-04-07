interface Props {
  Icon: any;
  openModal?: () => void;
  bgColor?: string;
  className?: string;
}
const UserActionBtn: React.FC<Props> = ({
  Icon,
  openModal,
  bgColor,
  className,
}) => {
  return (
    <button
      onClick={openModal}
      type="button"
      className={`text-white cursor-pointer ${
        bgColor ? bgColor : "bg-cloud"
      }  focus:outline-none  rounded-full text-sm  text-center flex justify-center items-center ${
        className ? className : " w-8 h-8 md:w-12 md:h-12"
      }`}>
      {Icon}
    </button>
  );
};

export default UserActionBtn;

import { useLocale } from "next-intl";

export const ArrowDownIconSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M17.9202 8.17896H11.6902H6.08024C5.12024 8.17896 4.64024 9.33896 5.32024 10.019L10.5002 15.199C11.3302 16.029 12.6802 16.029 13.5102 15.199L15.4802 13.229L18.6902 10.019C19.3602 9.33896 18.8802 8.17896 17.9202 8.17896Z"
        fill="white"
      />
    </svg>
  );
};

export const CategoryBarArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M8.91 19.92L15.43 13.4C16.2 12.63 16.2 11.37 15.43 10.6L8.91 4.07999"
        stroke="#D9DCE1"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ArrowRightIconSvg = ({ isDark }: { isDark?: Boolean }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={`${useLocale() === "en" && "rotate-180"}`}
    >
      <path
        d="M12.4999 16.8083C12.4461 16.8083 12.3956 16.7898 12.3529 16.7471L6.91953 11.3137C6.19892 10.5931 6.19892 9.40693 6.91953 8.68631L12.3529 3.25298L12.0614 2.96152L12.3529 3.25298C12.4318 3.17403 12.568 3.17403 12.6469 3.25298C12.7259 3.33193 12.7259 3.46811 12.6469 3.54706L7.21361 8.98039C6.65089 9.54311 6.65089 10.4569 7.21361 11.0196L12.6469 16.453C12.7243 16.5304 12.7259 16.6628 12.6515 16.7423C12.5968 16.791 12.54 16.8083 12.4999 16.8083Z"
        fill={`${isDark ? "#FFF" : "#455560"}`}
        stroke={`${isDark ? "#FFF" : "#455560"}`}
        strokeWidth="0.833333"
      />
    </svg>
  );
};

export const Arrow24 = ({color}:{color?:string}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"
        stroke={color ? color : "#455560"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ArrowDown24 = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995"
        stroke="#455560"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Arrow16 = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M10.0012 13.2885L5.65453 8.94185C5.1412 8.42852 5.1412 7.58852 5.65453 7.07518L10.0012 2.72852"
        stroke="#455560"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const AddList = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M12 8.5H4C3.72667 8.5 3.5 8.27333 3.5 8C3.5 7.72667 3.72667 7.5 4 7.5H12C12.2733 7.5 12.5 7.72667 12.5 8C12.5 8.27333 12.2733 8.5 12 8.5Z"
        fill="white"
      />
      <path
        d="M8 12.5C7.72667 12.5 7.5 12.2733 7.5 12V4C7.5 3.72667 7.72667 3.5 8 3.5C8.27333 3.5 8.5 3.72667 8.5 4V12C8.5 12.2733 8.27333 12.5 8 12.5Z"
        fill="white"
      />
    </svg>
  );
};

export const AddList24 = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18 12.7578H6C5.59 12.7578 5.25 12.4178 5.25 12.0078C5.25 11.5978 5.59 11.2578 6 11.2578H18C18.41 11.2578 18.75 11.5978 18.75 12.0078C18.75 12.4178 18.41 12.7578 18 12.7578Z"
        fill="white"
      />
      <path
        d="M12 18.7578C11.59 18.7578 11.25 18.4178 11.25 18.0078V6.00781C11.25 5.59781 11.59 5.25781 12 5.25781C12.41 5.25781 12.75 5.59781 12.75 6.00781V18.0078C12.75 18.4178 12.41 18.7578 12 18.7578Z"
        fill="white"
      />
    </svg>
  );
};

export const CloseIconSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
    >
      <path
        d="M12 23C6.07 23 1.25 18.18 1.25 12.25C1.25 6.32 6.07 1.5 12 1.5C17.93 1.5 22.75 6.32 22.75 12.25C22.75 18.18 17.93 23 12 23ZM12 3C6.9 3 2.75 7.15 2.75 12.25C2.75 17.35 6.9 21.5 12 21.5C17.1 21.5 21.25 17.35 21.25 12.25C21.25 7.15 17.1 3 12 3Z"
        fill="#455560"
      />
      <path
        d="M9.17011 15.83C8.98011 15.83 8.79011 15.76 8.64011 15.61C8.35011 15.32 8.35011 14.84 8.64011 14.55L14.3001 8.88999C14.5901 8.59999 15.0701 8.59999 15.3601 8.88999C15.6501 9.17999 15.6501 9.65998 15.3601 9.94998L9.70011 15.61C9.56011 15.76 9.36011 15.83 9.17011 15.83Z"
        fill="#455560"
      />
      <path
        d="M14.8301 15.83C14.6401 15.83 14.4501 15.76 14.3001 15.61L8.64011 9.94998C8.35011 9.65998 8.35011 9.17999 8.64011 8.88999C8.93011 8.59999 9.41011 8.59999 9.70011 8.88999L15.3601 14.55C15.6501 14.84 15.6501 15.32 15.3601 15.61C15.2101 15.76 15.0201 15.83 14.8301 15.83Z"
        fill="#455560"
      />
    </svg>
  );
};

export const LinksArrowSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={`${useLocale() === "en" && "rotate-180"} opacity-40`}
    >
      <path
        d="M13.98 5.31999L10.77 8.52999L8.79999 10.49C7.96999 11.32 7.96999 12.67 8.79999 13.5L13.98 18.68C14.66 19.36 15.82 18.87 15.82 17.92V12.31V6.07999C15.82 5.11999 14.66 4.63999 13.98 5.31999Z"
        fill="#455560"
      />
    </svg>
  );
};

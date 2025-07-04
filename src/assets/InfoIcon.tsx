interface InfoIconProps {
  color?: string;
}

const InfoIcon: React.FC<InfoIconProps> = ({ color = "black" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
    >
      <g clipPath="url(#clip0_1221_3671)">
        <path
          d="M6 0C2.6838 0 0 2.6835 0 6C0 9.31615 2.6835 12 6 12C9.3162 12 12 9.3165 12 6C12 2.68385 9.3165 0 6 0ZM6.61615 8.38174C6.61615 8.5713 6.33973 8.76082 6.00012 8.76082C5.64471 8.76082 5.39201 8.5713 5.39201 8.38174V5.37267C5.39201 5.15154 5.64473 5.00145 6.00012 5.00145C6.33973 5.00145 6.61615 5.15154 6.61615 5.37267V8.38174ZM6.00014 4.27491C5.63684 4.27491 5.35254 4.00638 5.35254 3.70624C5.35254 3.40612 5.63686 3.1455 6.00014 3.1455C6.35555 3.1455 6.63989 3.40612 6.63989 3.70624C6.63989 4.00638 6.35552 4.27491 6.00014 4.27491Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_1221_3671">
          <rect width="12" height="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default InfoIcon;



interface TimeIconProps {
  color?: string;
}

const TimeIcon: React.FC<TimeIconProps> = ({ color = "black" }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 0C3.57841 0 0 3.57803 0 8C0 12.4216 3.57803 16 8 16C12.4216 16 16 12.422 16 8C16 3.57844 12.422 0 8 0ZM9.64925 8.90691H7.3725C7.07797 8.90691 6.83916 8.66813 6.83916 8.37356V4.86975C6.83916 4.57522 7.07794 4.33641 7.3725 4.33641C7.66706 4.33641 7.90584 4.57519 7.90584 4.86975V7.84025H9.64928C9.94381 7.84025 10.1826 8.07903 10.1826 8.37359C10.1826 8.66816 9.94378 8.90691 9.64925 8.90691Z"
        fill={color}
      />
    </svg>
  );
};

export default TimeIcon;



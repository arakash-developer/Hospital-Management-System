interface RightArrowIcon2Props {
  className?: string;
}

const RightArrowIcon2: React.FC<RightArrowIcon2Props> = ({ className }) => {
  return (
    <div className={`${className}`}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.7048 7.2934C10.8921 7.4809 10.9973 7.73506 10.9973 8.00007C10.9973 8.26507 10.8921 8.51923 10.7048 8.70673L6.93414 12.4787C6.74654 12.6662 6.49214 12.7715 6.2269 12.7715C5.96166 12.7714 5.70731 12.666 5.5198 12.4784C5.33229 12.2908 5.22699 12.0364 5.22705 11.7712C5.22711 11.5059 5.33254 11.2516 5.52014 11.0641L8.58414 8.00007L5.52014 4.93606C5.33789 4.74755 5.23697 4.49499 5.23913 4.23279C5.24128 3.9706 5.34633 3.71973 5.53165 3.53424C5.71697 3.34874 5.96774 3.24345 6.22993 3.24105C6.49213 3.23865 6.74478 3.33933 6.93347 3.5214L10.7055 7.29273L10.7048 7.2934Z"
        />
      </svg>
    </div>
  );
};

export default RightArrowIcon2;


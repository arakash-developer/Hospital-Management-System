interface RightArrowIconProps {
  color?: string;
}

import React from 'react';

const RightArrowIcon: React.FC<RightArrowIconProps> = ({ color = "white" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="15" viewBox="0 0 10 15" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.05989 6.79166C9.34079 7.07291 9.49857 7.45416 9.49857 7.85166C9.49857 8.24916 9.34079 8.63041 9.05989 8.91166L3.40389 14.5697C3.12249 14.8509 2.74089 15.0089 2.34304 15.0088C1.94518 15.0087 1.56365 14.8506 1.28239 14.5692C1.00113 14.2878 0.843168 13.9062 0.843262 13.5083C0.843356 13.1104 1.00149 12.7289 1.28289 12.4477L5.87889 7.85166L1.28289 3.25566C1.00952 2.97289 0.858143 2.59405 0.861374 2.20076C0.864605 1.80746 1.02218 1.43116 1.30016 1.15292C1.57815 0.874673 1.95429 0.716742 2.34759 0.71314C2.74088 0.709539 3.11986 0.860555 3.40289 1.13366L9.06089 6.79066L9.05989 6.79166Z"
        fill={color} // Use the color prop here
      />
    </svg>
  );
};

export default RightArrowIcon;


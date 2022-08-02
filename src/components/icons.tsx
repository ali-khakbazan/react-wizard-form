import { SVGProps } from "react";

type Props = {
  svg?: SVGProps<SVGSVGElement>;
  path?: SVGProps<SVGPathElement>;
};

export const CheckIcon: React.FC<Props> = ({ svg, path }) => {
  return (
    <svg {...svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        {...path}
        d="M18.71 7.21a1 1 0 00-1.42 0l-7.45 7.46-3.13-3.14A1 1 0 105.29 13l3.84 3.84a1 1 0 001.42 0l8.16-8.16a1 1 0 000-1.47z"
      ></path>
    </svg>
  );
};

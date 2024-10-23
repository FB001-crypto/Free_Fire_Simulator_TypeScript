// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ChoiceIcon2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ChoiceIcon2Icon(props: ChoiceIcon2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 40 40"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M20.325 32.603c2.777-3.775 7.893-7.467 12.882-8.534.08-.017.141.066.093.128-1.81 2.303-2.328 3.88-2.124 6.476.007.083.13.104.17.03 1.63-3.076 1.838-5.031 8.547-6.228.083-.015.14.075.085.134-4.047 4.293-3.907 9.719-3.435 15.303.004.048-.037.088-.09.088H4.05c-.053 0-.093-.04-.09-.088.469-5.59.159-9.844-3.937-14.118-.051-.053-.008-.137.07-.135 3.001.072 5.75 1.758 8.6 5.138.05.06.156.03.16-.046.135-2.65-1.972-4.6-3.873-6.928-.052-.064.018-.152.101-.127 5.292 1.657 12.291 5.142 15.097 8.908a.094.094 0 00.148 0zm-3.53-5.486a.076.076 0 00.02.1 24.062 24.062 0 013.365 3.288.094.094 0 00.142 0 23.886 23.886 0 014.242-3.955c.15-.108.3-.215.453-.32a.077.077 0 00.004-.128c-1.028-.789-2.273-1.886-3.061-2.811a.71.71 0 00-.872-.164l-2.628 1.386a.639.639 0 00-.272.25l-1.393 2.354zm10.646-2.35c1.791-.939 3.108-1.367 4.925-1.997.049-.017.071-.067.05-.11a9.86 9.86 0 00-2.137-2.85c-.042-.038-.033-.101.018-.128l3.746-1.976c.788-.416 1.09-1.319.696-2.064-.021-.038-.005-.085.035-.106l4.117-2.171c.32-.168.43-.541.246-.834-.184-.292-.592-.393-.912-.225l-4.119 2.173a.095.095 0 01-.119-.025c-.506-.682-1.512-.9-2.306-.48l-6.156 3.246a.094.094 0 01-.072.007c-.156-.046-.312-.09-.469-.13-.07-.02-.087-.102-.03-.143 1.84-1.339 3.008-3.399 3.142-5.667.002-.043.041-.077.089-.077h2.338c.047 0 .086-.033.09-.077.028-.44.064-.891.064-1.33 0-5.136-4.329-9.402-9.91-9.803-.052-.003-.096.034-.096.082V7.97c0 .045.04.082.09.082h3.2c1.054 0 1.945.592 2.274 1.508l.529 1.487a6.323 6.323 0 01-1.919 4.342c-2.538 2.477-6.65 2.477-9.188 0a6.321 6.321 0 01-1.921-4.542l.005-.76.19-.527c.328-.916 1.22-1.508 2.274-1.508h3.2c.049 0 .09-.036.09-.081V.082c0-.048-.045-.085-.098-.081C16.82.2 14.473 1.175 12.64 2.85c-2.183 1.994-3.315 4.73-3.134 7.544l.047.74c.003.043.042.076.09.076h2.675c.047 0 .086.034.089.077.133 2.269 1.3 4.329 3.142 5.667.057.041.04.124-.03.142-3.406.898-5.984 2.663-7.432 5.564-.022.043 0 .094.05.11 1.275.443 2.876.977 3.997 1.536l1.296.658a.095.095 0 00.09 0l18.833-9.932a.425.425 0 01.544.134l.622.984a.35.35 0 01-.147.498l-9.323 4.918c-.36.19-.446.636-.174.927a22.085 22.085 0 002.903 2.57c.03.023.07.025.104.007.184-.103.37-.204.56-.303z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ChoiceIcon2Icon;
/* prettier-ignore-end */
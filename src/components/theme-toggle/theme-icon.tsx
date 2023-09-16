import * as React from 'react';
const ThemeIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    viewBox="0 0 14 14"
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M7 3.227a.602.602 0 0 1-.602-.602V1.312a.602.602 0 0 1 1.204 0v1.313A.602.602 0 0 1 7 3.227Zm0 10.062a.602.602 0 0 1-.602-.601v-1.313a.602.602 0 0 1 1.204 0v1.313a.602.602 0 0 1-.602.601Zm3.094-8.781a.602.602 0 0 1-.426-1.027l.928-.928a.602.602 0 0 1 .85.85l-.927.929a.6.6 0 0 1-.425.176Zm-7.116 7.115a.6.6 0 0 1-.425-1.027l.928-.928a.602.602 0 1 1 .85.85l-.927.929a.6.6 0 0 1-.426.176Zm9.71-4.021h-1.313a.602.602 0 0 1 0-1.204h1.313a.602.602 0 0 1 0 1.204Zm-10.063 0H1.312a.602.602 0 0 1 0-1.204h1.313a.602.602 0 0 1 0 1.204Zm8.397 4.021a.6.6 0 0 1-.426-.176l-.928-.928a.602.602 0 0 1 .85-.85l.929.927a.601.601 0 0 1-.425 1.027ZM3.906 4.508a.599.599 0 0 1-.425-.176l-.928-.928a.602.602 0 0 1 .85-.85l.929.927a.602.602 0 0 1-.426 1.027ZM7 9.789a2.789 2.789 0 1 1 0-5.578 2.789 2.789 0 0 1 0 5.578Z"
        fill="#111"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#111" d="M0 0h14v14H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default ThemeIcon;

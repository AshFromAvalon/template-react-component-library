import React from "react";

import "./Button.css";

export interface ButtonProps extends React.ComponentProps<"button"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", children, ...props }, ref) => {
    return (
      <button data-button={`variant:${variant}`} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

export default Button;

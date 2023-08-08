import React from "react";

export interface ButtonProps extends React.ComponentProps<"button"> {
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children }) => {
    return <button>{children}</button>;
  }
);

export default Button;

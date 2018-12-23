import React from "react";
import './Button.scss';

const Button = ({ className, ...props }) => <button className={`button ${className}`} {...props} />;

export default Button;

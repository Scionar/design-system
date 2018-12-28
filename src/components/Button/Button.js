import React from "react";
import bem from '../../helpers/bem';
import './Button.scss';

const Button = ({ className, modifier, ...props }) => <button className={bem('button', modifier)} {...props} />;

export default Button;

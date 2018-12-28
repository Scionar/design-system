import React from "react";
import bem from '../../helpers/bem';
import './Color.scss';

const Color = ({ modifier, children, ...props }) => (
  <div className={bem('color', modifier)} {...props}>
    {children}
  </div>
);

export default Color;

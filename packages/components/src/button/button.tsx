import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import './button.scss';

interface Props {
  className?: string;
}

export const Button: FunctionComponent<Props> = ({ className, children }) => {
  const classes = classnames(
    className,
    'button'
  );

  return (
    <button className={classes}>{children}</button>
  );
};

export default Button;

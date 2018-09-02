import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Button.css';

// Using PureComponent to test the support https://github.com/tc39/proposal-class-fields
class Button extends PureComponent {
  static propTypes = {
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
  }

  render() {
    const { type = 'submit', children } = this.props;
    return <button className="button" type={ type }>{ children }</button>;
  }
}

/*
const Button = ({ type = 'submit', children }) => (
  <button type={ type }>{children}</button>
);

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
*/

export default Button;

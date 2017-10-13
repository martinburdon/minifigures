import React from 'react';
import PropTypes from 'prop-types';

const Minifigure = ({ onClick, name, image, collected }) => (
  <mini-fig onClick={onClick}>
    <p>{name}</p>
    <img src="{image}"/>
  </mini-fig>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  collected: PropTypes.bool.isRequired
};

export default Minifigure;

import React from 'react';
import PropTypes from 'prop-types';

const Minifigure = ({ onClick, name, image, id, collected }) => (
  <mini-fig
    onClick={onClick}
    style={{
      textDecoration: collected ? 'line-through' : 'none'
    }}
  >
    <p>{name}</p>
    <img src={image}/>
  </mini-fig>
);

// Minifigure.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   name: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,
//   collected: PropTypes.bool.isRequired
// };

export default Minifigure;

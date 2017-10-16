import React from 'react';
import PropTypes from 'prop-types';

const Minifigure = ({ onClick, name, image, id, collected }) => {
  const style = {
    opacity: collected ? 1 : 0.4
  };

  return(
    <mini-fig
      onClick={onClick}
      style={style}
    >
      <p>{name}</p>
      <img src={require(`../${image}`)} />
    </mini-fig>
  )
};

// Minifigure.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   name: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,
//   collected: PropTypes.bool.isRequired
// };

export default Minifigure;

import React from 'react';
import PropTypes from 'prop-types';
import Minifigure from './Minifigure.js';

const style = {
  display: 'flex',
  flexDirection: 'row'
};

const Collection = ({ minifigures, name, onMinifigClick }) => {
  return (
    <minifig-collection>
      <h2>{name}</h2>
      <div style={style}>
        {minifigures.map(minifig =>
          <Minifigure
            key={minifig.id}
            {...minifig}
            onClick={() => onMinifigClick(minifig.id)}
          />
        )}
      </div>
    </minifig-collection>
  )
};

// Collection.propTypes = {
//   minifigures: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     collected: PropTypes.bool.isRequired,
//     name: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired
//   }).isRequired).isRequired,
//   onMinifigClick: PropTypes.func.isRequired
// };

export default Collection;

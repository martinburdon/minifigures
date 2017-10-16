import React from 'react';
import PropTypes from 'prop-types';
import Collection from './Collection.js';

const style = {
  display: 'flex',
  flexDirection: 'column'
};

const Wrapper = ({ collections, onMinifigClick }) => {
  return (
    <collections style={style}>
      {collections.map(collection =>
        <Collection
          key={collection.id}
          {...collection}
          onMinifigClick={(id) => onMinifigClick(id)}
        />
      )}
    </collections>
  );
};

export default Wrapper;

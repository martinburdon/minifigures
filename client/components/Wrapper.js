import React from 'react';
import PropTypes from 'prop-types';
import Collection from './Collection.js';

const Wrapper = ({ collections, onMinifigClick }) => {
  return (
    <collections>
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

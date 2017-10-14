import React from 'react';
import PropTypes from 'prop-types';
import Collection from './Collection.js';

const Wrapper = ({ collections }) => {
  console.log(collections);

  return (
    <collections>
      {collections.map(collection =>
        <Collection
          key={collection.id}
          {...collection}
        />
      )}
    </collections>
  );
};

export default Wrapper;

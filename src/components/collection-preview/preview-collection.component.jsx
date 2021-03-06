import React from 'react';

import './collection-preview.styles.scss';

import CollectionItem from '../collection-item/collection-item.component'

/*
-- Performance Concern:
Whenever CollectionPreview gets rendered, the array functions chain are called again
*/
const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title"> {title.toUpperCase()} </h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otheritemProps }) => (
            <CollectionItem key={id} {...otheritemProps}></CollectionItem>
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;

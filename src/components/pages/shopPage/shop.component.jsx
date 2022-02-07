import React from 'react';

import SHOP_DATA from './shop.data';

import CollectionPreview from '../../collection-preview/preview-collection.component';

class ShopPage extends React.Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const {collections} = this.state
    return <div>{collections.map(({id, ...otherCollectionProps}) => {
      return (
        <CollectionPreview
          key={id}
          {...otherCollectionProps}
        ></CollectionPreview>
      );
    })}</div>;
  }
}

export default ShopPage;
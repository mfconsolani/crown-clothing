import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component';

import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';


const CollectionPage = ({ collection }) => (
    <div className='collection-page'>
        <h2>COLLECTION PAGE</h2>
    </div>
);

// We have to use the 2nd parameter of mapStateToProps which is called ownProps and is the props of 
// the component that we are wrapping in our connect().

// ownProps.match.params.collectionId -> we have access to match because the Route component that comes 
// the ShopPage component give us access in this component to the match, history and location property.

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

// selectCollection takes 2 params: the first one is the argument for selectCollection selector, 
//which if you look in the ShopPage.selectors file you will see that it requires one parameter called 
//collectionUrlParam; the second one is the state, which is required by every createSelector function, 
//which also lives inside our selectionCollection, see below:
// from shop.selects.justify

//     export const selectCollection = collectionUrlParam => 
//      createSelector(
//          [selectCollections],
//          collections => collections.find(
//              collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
//      )

export default connect(mapStateToProps)(CollectionPage);
import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

// As the shop.data is now an object, and in CollectionsOverview component we map through it,
// now we have to "convert it" to an array so the map function still works

export const selectCollectionForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
    // Here we take the keys from the collections and create an array from them.
    //Then we use the elements in that array as keys for the items inside the collections, 
    // to create a new array that allows us to hold the items belonging to each
    // collection in a new array. BASICALLY WE CONVERT AN OBJECT TO AN ARRAY
)

export const selectCollection = (collectionUrlParam) => 
    createSelector(
        [selectCollections],
        collections => collections[collectionUrlParam]
    );
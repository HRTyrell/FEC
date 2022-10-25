import create from 'zustand';


export const useRelatedItemsStore = create(set => ({
  outfitList: [],
  relatedItemsList: [],
  setOutfit: (products) => {set({outfitList: products})},
  setRelatedItems: (relatedItems) => set({relatedItemsList: relatedItems})
}))

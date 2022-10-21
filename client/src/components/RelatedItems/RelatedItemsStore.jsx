import create from 'zustand';


export const useRelatedItemsStore = create(set => ({
  outfitList: [],
  relatedItemsList: [],
  addToOutfit: (product) => {set((state) => (state.outfitList.push(product)))},
  setRelatedItems: (relatedItems) => set({relatedItemsList: relatedItems})
}))

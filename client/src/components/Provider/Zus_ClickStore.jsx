import create from 'zustand';

const ClickStore = create((set, get) => ({
  DomElements: [],
  AddDomElement: (element) => {
    console.log('element: ', element)
    set((state) => {console.log('DomElements: ', state.DomElements); return {DomElements: [...state.DomElements, element]}});
  }
}))

export default ClickStore;
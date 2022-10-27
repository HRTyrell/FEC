import create from 'zustand';

const ClickStore = create((set, get) => ({
  DomElements: [],
  AddDomElement: (element) => {
    set((state) => ({DomElements: [...state.DomElements, element]}));
  }
}))

export default ClickStore;
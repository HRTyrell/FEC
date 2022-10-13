import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import RelatedItems from './components/RelatedItems/RelatedItems.jsx';


const App = () => {
  return (
    <div>
      <h1>FEC</h1>
      <RelatedItems />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
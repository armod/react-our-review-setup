import React from 'react';
import Review from './Review'
import './App.css';

function App() {
  return (
    <main>
      <secttion className='container'>
        <div className='title'>
          <h2>our review</h2>
          <div className='underline'></div>
        </div>
        <Review />
      </secttion>
    </main>
  );
}

export default App;

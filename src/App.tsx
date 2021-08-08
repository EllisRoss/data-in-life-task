import React from 'react';
import './App.css';
import { Products } from './components/Products/Products';
import {BottomBar} from "./components/BottomBar/BottomBar";

const App = () => {
  return (
    <div>
      <Products />
        <BottomBar />
    </div>
  );
}

export default App;

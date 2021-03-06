
import React from 'react';
import FinancialItem from "./components/FinancialItem";
import Sma from "./components/Sma";
import Rsi from "./components/Rsi";
import Atr from "./components/Atr";
import Mfi from "./components/Mfi";

import {Provider} from 'react-redux'
import store from "./store";

function App(){
  return (
      <Provider store={store}>
          <div className="App">
              <FinancialItem/>                            
          </div>
          <div>
          </div>
      </Provider>
  );
}

export default App;
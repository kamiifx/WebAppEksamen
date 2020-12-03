import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';


import Home from "./components/Home";
import Header from "./components/Header";
function App() {
  return (
      <>
        <div className="App">
          <BrowserRouter>
          <Header/>
          <Route exact path="/" component={Home}/>
          </BrowserRouter>
        </div>
      </>
  );
}

export default App;

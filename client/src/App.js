import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Theme from "./styled/Theme";

import Home from "./components/Home";
import Header from "./components/Header";
function App() {
  return (
      <>
          <Theme>
              <div className="App">
                  <BrowserRouter>
                      <Header/>
                      <Route exact path="/" component={Home}/>
                  </BrowserRouter>
              </div>
          </Theme>
      </>
  );
}

export default App;

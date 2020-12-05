import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Theme from "./styled/Theme";

import Home from "./components/Home";
import Header from "./components/Header";
import Articles from './components/Articles';
function App() {
  return (
      <>
          <Theme>
              <div className="App">
                  <BrowserRouter>
                      <Header/>
                      <Route exact path="/" component={Home}/>
                      <Route exact path="/articles" component={Articles}/>
                  </BrowserRouter>
              </div>
          </Theme>
      </>
  );
}

export default App;

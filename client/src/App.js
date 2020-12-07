import React, {useState} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Theme from "./styled/Theme";

import Home from "./components/Home";
import Header from "./components/Header";
import Articles from './components/Articles';
import ArticlePage from "./components/ArticlePage";
function App() {
    const [modal,ToggleModal] = useState(false);
  return (
      <>
          <Theme>
              <div className="App">
                  <BrowserRouter>
                      <Header modal={modal} setModal={ToggleModal}/>
                      <Route exact path="/" component={() => <Home modal={modal} setModal={ToggleModal}/>}/>
                      <Route exact path="/articles" component={Articles}/>
                      <Route exact path="/articles/:id" component={ArticlePage}/>
                  </BrowserRouter>
              </div>
          </Theme>
      </>
  );
}

export default App;

import React, {useState} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Theme from "./styled/Theme";
import Home from "./components/Home";
import Header from "./components/Header";
import Articles from './components/Articles';
import Contact from './components/Contact';
import ArticlePage from "./components/ArticlePage";
import AuthProvider from "./contex/authProvider";
import CreateArticle from "./components/CreateArticle";
import Offices from "./components/Offices";
    function App() {
    const [modal,ToggleModal] = useState(false);
  return (
      <>
          <Theme>
              <div className="App">
                  <BrowserRouter>
                      <AuthProvider>
                          <Header modal={modal} setModal={ToggleModal}/>
                          <Route exact path="/" component={() => <Home modal={modal} setModal={ToggleModal}/>}/>
                          <Route exact path="/articles" component={Articles}/>
                          <Route exact path="/contact" component={Contact}/>
                          <Route exact path="/offices" component={Offices}/>
                          <Route exact path="/articles/:id" component={ArticlePage}/>
                          <Route exact path="/article/create" component={CreateArticle}/>
                      </AuthProvider>
                  </BrowserRouter>
              </div>
          </Theme>
      </>
  );
}

export default App;

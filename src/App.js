import React from "react";
import "./App.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { BrowserRouter, Route } from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";
import Friends from "./components/Friends/Friends";

const App = (props) => {
  
  return (
    <BrowserRouter>
      <div className="app__wrapper">
        <Header />
        <Nav friendsData={props.state.friendsPage.friendsData} />
        <div className="app__wrapper-content">
          <Route
            path="/profile"
            render={() => (
              <Profile
                store={props.store}/>
            )}
          />

          <Route
          
            path="/dialogs"
            render={() => (
              
              <DialogsContainer
                store={props.store}    
              />
            )}
          />
          <Route path="/music" render={() => <Music />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/setting" render={() => <Setting />} />
          <Route path="/friends" render={() => <Friends />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import "./App.css";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Header from "./components/Header/Header";
import NavContainer from "./components/Navbar/NavContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { BrowserRouter, Route } from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app__wrapper">
        <Header />
        <NavContainer />
        <div className="app__wrapper-content">
          <Route
            path="/profile/:userId?"
            render={() => (
              <ProfileContainer />
            )}
          />
          <Route
            path="/dialogs"
            render={() => (                 <DialogsContainer />
            )}
          />
          <Route path="/music" render={() => <Music />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/setting" render={() => <Setting />} />
          <Route path="/users" render={() => <UsersContainer />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

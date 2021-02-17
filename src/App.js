import React from "react";
import "./App.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import Dialogs from "./components/Dialogs/Dialogs";
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
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
              />
            )}
          />

          <Route
            path="/dialogs"
            render={() => (
              <Dialogs
                dialogsData={props.state.dialogsPage.dialogsData}
                messageData={props.state.dialogsPage.messageData}
                messageSend={props.state.dialogsPage.messageSend}
                dispatch={props.dispatch}
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

import React, { Component } from "react";
import "./App.css";

import HeaderContainer from "./components/Header/HeaderContainer";
import NavContainer from "./components/Navbar/NavContainer";
import { BrowserRouter, Route } from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/login/Login";
import { connect } from 'react-redux';
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/preloader/preloader";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

// import DialogsContainer from "./components/Dialogs/DialogsContainer";
//import ProfileContainer from "./components/Profile/ProfileContainer";

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }
    return (

      <BrowserRouter>
        <div className="app__wrapper">
          <HeaderContainer />
          <NavContainer />
          <div className="app__wrapper-content">
            <Route

              path="/profile/:userId?"
              render={() => {
                return (
                  <React.Suspense fallback={<div>Загрузка...</div>}>
                    <ProfileContainer />
                  </React.Suspense>)
              }

              }
            />
            <Route
              path="/dialogs"
              render={() => {
                return (
                  <React.Suspense fallback={<div>Загрузка...</div>}>
                    <DialogsContainer />
                  </React.Suspense>
                )
              }
              }
            />
            <Route path="/music" render={() => <Music />} />
            <Route path="/news" render={() => <News />} />
            <Route path="/setting" render={() => <Setting />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/login" render={() => <Login />} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, { initializeApp })(App);

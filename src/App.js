import React, { Component } from "react";
import "./App.css";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import NavContainer from "./components/Navbar/NavContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { BrowserRouter, Route } from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/login/Login";
import { connect } from 'react-redux';
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/preloader/preloader";


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
              render={() => (
                <ProfileContainer />
              )}
            />
            <Route
              path="/dialogs"
              render={() => (<DialogsContainer />
              )}
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

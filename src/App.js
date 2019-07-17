import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Layout/Header";
import Contact from "./components/Contacts/Contact";
import AddContact from "./components/Contacts/AddContact";
import EditContact from "./components/Contacts/EditContact";

import { Provider } from "./Context";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import About from "./components/Pages/About";
import NotFound from "./components/Pages/NotFound";
import Test from "./components/Layout/Test/Test";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contact} />
                <Route
                  exact
                  path="/contactManager_Context-API/"
                  component={Contact}
                />
                <Route exact path="/contacts/add" component={AddContact} />
                <Route exact path="/about" component={About} />
                <Route exact path="/test" component={Test} />
                <Route
                  exact
                  path="/contacts/edit/:id"
                  component={EditContact}
                />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

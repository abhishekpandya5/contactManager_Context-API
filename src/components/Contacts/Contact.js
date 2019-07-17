import React, { Component } from "react";
import Contacts from "./Contacts";
import { Consumer } from "../../Context";

class Contact extends Component {

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-3 heading">
                <span className="text-danger">Contact</span> Lists
              </h1>
              {contacts.map(contact => (
                <Contacts
                  key={contact.id}
                  contact={contact}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contact;

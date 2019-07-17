import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Link } from 'react-router-dom';

import { Consumer } from "../../Context";

class Contacts extends Component {
  state = {
    showContactInfo: false
  };

  onShowClick = e => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
    //console.log("show details");
  };

  // handleDelete = (id, dispatch) => {
  //   axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
  //     .then(res => dispatch(
  //       { type: "DELETE_CONTACT", payload: id }
  //     ))
  // };

  //usinc asyn await
  handleDelete = async (id, dispatch) => {
    await axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({ type: "DELETE_CONTACT", payload: id })
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h5>
                {name} &nbsp;
                <i
                  className={`fas fa-sort-down ${
                    showContactInfo ? "rotate_clock" : "rotate_anticlock"
                  }`}
                  onClick={this.onShowClick}
                  style={{ cursor: "pointer" }}
                />
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.handleDelete.bind(this, id, dispatch)}
                />
                <Link to={`/contacts/edit/${id}`}>
                <i 
                  className="fas fa-pencil-alt"
                  style={{ cursor: "pointer", float: "right", color: 'grey', marginRight: '1rem' }}
                 />
                 </Link>
              </h5>

              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contacts.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contacts;

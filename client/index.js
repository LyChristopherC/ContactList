import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ContactList from './ContactList';
import axios from 'axios';
import SingleContact from './singleContact';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      selectedContact: {},
    };
    this.selectContact = this.selectContact.bind(this);
  }

  async componentDidMount() {
    try {
      const data = await axios.get('/api/contacts');
      this.setState({ contacts: data.data });
    } catch (error) {
      console.error(error);
    }
  }

  async selectContact(id) {
    try {
      const data = await axios.get(`/api/contacts/${id}`);
      this.setState({ selectedContact: data.data });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div id="main">
        <div id="navbar">
          <div>Contact List</div>
        </div>
        <div id="container">
          {this.state.selectedContact.id ? (
            <SingleContact
              selectContact={this.selectContact}
              selectedContact={this.state.selectedContact}
            />
          ) : (
            <ContactList
              selectContact={this.selectContact}
              contacts={this.state.contacts}
            />
          )}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));

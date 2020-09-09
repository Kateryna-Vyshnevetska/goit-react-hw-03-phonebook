import React from 'react';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import { v4 as uuidv4 } from 'uuid';
import Filter from './filter/Filter';


class App extends React.Component {

  state = {
    contacts: [],
    filter: ''
  }

  getContacts = (newContact) => {
    newContact['id'] = uuidv4();
    this.setState((prev) => ({...prev, contacts: [...prev.contacts, newContact]}))
  }

  deleteContact = (id) => {
    const newContacts = this.state.contacts.filter((elem) => { return elem.id !== id})
    this.setState((prev) => ({...prev, contacts:[...newContacts]}))

  }

  getNamesByFilter = (value) => {
    this.setState({filter : value});
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.contacts !== prevState.contacts){
      localStorage.setItem('contacts' ,JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount(){
    const dataFromStorage = localStorage.getItem('contacts');
    const contacts = JSON.parse(dataFromStorage);
    if(contacts){
      this.setState({contacts:contacts}) 
    }
  }

  render(){
    let filteredItems;
    this.state.filter ? filteredItems = this.state.contacts.filter(el => (
        el.name.toLowerCase().includes(this.state.filter.toLowerCase())))
      : filteredItems = this.state.contacts;
      
    return (
      <>
        <h1 className="title">Phonebook</h1>
        <ContactForm {...this.state} getContacts={this.getContacts}/>
        <h2 className="title">Contacts</h2>
        <Filter getNamesByFilter = {this.getNamesByFilter}/>
        <ContactList filteredItems={filteredItems} getIdForDelete={this.deleteContact}/>
      </>
    );
  }
}

export default App;

import React,{useState} from 'react';
import AddContact from './AddContact';
import './App.css';
import Header from './Header';
import ContactList from './ContactList';

function App() {
  const [contacts, setContacts] = useState([]);  // useState is a hook that allows you to have state variables in functional components
  const addContactHandler = (contact) => {
    
  }
  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler = {addContactHandler}/>
      <ContactList contacts = {contacts}/>
    </div>
  );
}

export default App;

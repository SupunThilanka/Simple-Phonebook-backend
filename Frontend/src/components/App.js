import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'; //npm i uuid
import AddContactWrapper from './AddContact';
import './App.css';
import ContactList from './ContactList';
import Header from './Header';
import ContactDetail from './ContactDetail';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);  // useState is a hook that allows you to have state variables in functional components

  const addContactHandler = (contact) => {
    console.log("Adding contact:", contact);
    setContacts([...contacts,{id:uuidv4(),...contact}]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };
  // Retrieve contacts from local storage on initial render
  useEffect(() => {
    console.log("Attempting to retrieve contacts from local storage...");
    const retrievedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    console.log("Retrieved contacts:", retrievedContacts);
    if (retrievedContacts && retrievedContacts.length > 0) {
      setContacts(retrievedContacts);
    }
  }, []);  // useEffect is a hook that allows you to perform side effects in your functional components

  // Save contacts to local storage whenever contacts change
  useEffect(() => {
    if (contacts.length > 0) {
      console.log("Saving contacts to local storage:", contacts);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }
  }, [contacts]);  // useEffect is a hook that allows you to perform side effects in your functional components

  return (
    <div className="ui container">
      <Router>
        <Header/>
        <Routes>  {/* Routes == Switch */}
        <Route path="/" element={<ContactList contacts={contacts} getContactId={removeContactHandler}/>} />
        <Route path="/add" element={<AddContactWrapper addContactHandler={addContactHandler} />} />
        <Route path="/contact/:id" element={<ContactDetail />} />
        </Routes>   
        {/* <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} getContactId={removeContactHandler} /> pass the contacts array and getContactId function as props to ContactList child component */}
      </Router>

    </div>
  );
}
export default App;

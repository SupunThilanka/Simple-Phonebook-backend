import React from 'react';
import AddContact from './AddContact';
import './App.css';
import Header from './Header';
import ContactList from './ContactList';

function App() {
  const contacts = [
    {
      id: "1",
      name: "Dhaval",
      email: "Dhaval@gmail.com",
    },
    {
      id: "",
      name: "Supun",
      email: "Supun@gmail.com",
    }
  ]
  return (
    <div className="ui container">
      <Header />
      <AddContact/>
      <ContactList contacts = {contacts}/>
    </div>
  );
}

export default App;

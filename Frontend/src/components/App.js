import React from 'react';
import AddContact from './AddContact';
import './App.css';
import Header from './Header';
import ContactList from './ContactList';

function App() {
  return (
    <div>
      <Header />
      <AddContact/>
      {/* <ContactList/> */}
    </div>
  );
}

export default App;

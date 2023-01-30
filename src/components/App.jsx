import React from 'react';
import Form from './Form/Form'
import Filter from './Filter/Filter'
import ContactList from './ContactList/ContactList';



const App = () => {
    
    return (
      <div
        style={{
          // height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <div>
          <h1>PhoneBook</h1>
          <Form/>
          
          <h2>Contacts</h2>
          <Filter/>
          
          <ContactList/>
      </div>
        
      </div>
    );
  };

export default App

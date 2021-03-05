import { useState, useEffect } from 'react';
import shortid from 'shortid';
import ContactForm from './Components/ContactForm/ContactForm';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';
import './App.css';

export default function Component() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  function addContact(name, number) {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    if (contact.name !== '' && contact.number !== '') {
      setContacts([contact, ...contacts]);
    }
  }

  function deleteContact(contactId) {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  }

  function changeFilter(e) {
    setFilter(e.currentTarget.value);
  }

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  console.log(contacts);

  useEffect(() => {
    setContacts(JSON.parse(localStorage.getItem('contacts')));
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      {contacts.length > 0 && <Filter value={filter} onChange={changeFilter} />}

      <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
    </div>
  );
}

// class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   addContact = (name, number) => {
//     const contact = {
//       id: shortid.generate(),
//       name,
//       number,
//     };
//     if (contact.name !== '' && contact.number !== '') {
//       this.setState(prevState => ({
//         contacts: [contact, ...prevState.contacts],
//       }));
//     }
//     console.log('пустое поле');
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   changeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   render() {
//     const normalizedFilter = this.state.filter.toLowerCase();

//     const visibleContacts = this.state.contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter),
//     );

//     const { filter } = this.state;

//     return (
//       <div className="App">
//         <h1>Phonebook</h1>
//         <ContactForm onSubmit={this.addContact} />
//         <h2>Contacts</h2>
//         <Filter value={filter} onChange={this.changeFilter} />
//         <ContactList
//           contacts={visibleContacts}
//           onDeleteContact={this.deleteContact}
//         />
//       </div>
//     );
//   }
// }

// export default App;

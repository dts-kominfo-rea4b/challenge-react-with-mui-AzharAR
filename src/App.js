import { Contacts } from '@mui/icons-material';
import { Grid, List } from '@mui/material';
import { Container } from '@mui/system';
import './App.css';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import Header from './components/Header';
import { useState } from 'react';
import contactsJSON from './data/contacts.json'

// Uncomment untuk memuat daftar kontak
// import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  const [contacts, setContacts] = useState(contactsJSON);

  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const onSubmitNewContactHandler = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <div className="App">

      <Header />
      <Container>
        <Grid>
          <ContactForm onSubmitNewContact={onSubmitNewContactHandler} />
        </Grid>
        <Grid>
          <List sx={{ backgroundColor: "#b9f6ca", borderRadius: "4px" }}>
              {contacts.map((contact, index) => {
                return <Contact key={index} data={contact} />;
              })}
          </List>
        </Grid>
      </Container>

    </div>
  );
};

export default App;


import Contact from "./components/Contact";
import { useState } from "react";

// Uncomment untuk memuat daftar kontak
import contactsJSON from "./data/contacts.json";
import Header from "./components/Header";
import { Grid, List } from "@mui/material";
import ContactForm from "./components/ContactForm";
const App = () => {
  const [contacts, setContacts] = useState(contactsJSON);
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const tambahKontak = (data) => {
    setContacts([...contacts, data]);
  };

  return (
    <div className="App">
      <Header />
      <Grid container spacing={2} sx={{ marginTop: "2rem" }}>
        <Grid item xs={5}>
          <ContactForm addContact={tambahKontak} />
        </Grid>
        <Grid item xs={7}>
          <List sx={{ margin: "0 5rem", background: "#dbf6f0" }}>
            {contacts.map((el) => {
              return <Contact data={el} />;
            })}
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;

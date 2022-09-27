// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import { Button, Card, TextField } from "@mui/material";
import { useState } from "react";

const ContactForm = ({ addContact: tambahKontak }) => {
  const [newContact, setKontakBaru] = useState([]);
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada
  const handleChange = (event) => {
    let name = event.target.name;
    setKontakBaru({ ...newContact, [name]: event.target.value });
  };

  const handleSubmit = () => {
    tambahKontak(newContact);
    setKontakBaru({
      name: "",
      phone: "",
      email: "",
      photo: "",
    });
  };

  return (
    <>
      <Card
        variant="outlined"
        sx={{ padding: "2rem", background: "#f3f1eb", margin: "0 15px" }}
      >
        <TextField
          required
          id="outlined-required"
          label="Name"
          name="name"
          variant="standard"
          value={newContact.name}
          sx={{ width: "100%", marginY: "8px" }}
          onChange={handleChange}
        />
        <TextField
            rsequired
          id="outlined-required"
          label="Nomor Telepon"
          name="phone"
          type="number"
          variant="standard"
          value={newContact.phone}
          sx={{ width: "100%", marginY: "8px" }}
          onChange={handleChange}
        />
        <TextField
          required
          id="outlined-required"
          label="Alamat Email"
          name="email"
          variant="standard"
          value={newContact.email}
          sx={{ width: "100%", marginY: "8px" }}
          onChange={handleChange}
        />
        <TextField
           required
           id="outlined-required"
           label="URL Foto"
           name="photo"
           variant="standard"
          value={newContact.photo}
          sx={{ width: "100%", marginY: "8px" }}
          onChange={handleChange}
        />
        <Button
          variant="text"
          onClick={handleSubmit}
          sx={{ color: "green", float: "left", marginTop: '20px', marginBottom: '-20px'}}
        >
          ADD NEW
        </Button>
      </Card>
    </>
  );
};

export default ContactForm;

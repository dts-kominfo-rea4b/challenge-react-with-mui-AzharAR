// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import { useState } from "react";
import { Button, Card, CardContent, TextField  } from "@mui/material";


const ContactForm = ({onSubmitNewContact}) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const [newContact, setKontakBaru] = useState({
        name: "",
        phone: "",
        email:"",
        photo:"",
    })
    
    const onChangeHandler = (event) => {
        const {name, value} = event.target;
        setKontakBaru({
            ...newContact,
            [name]:value,
        })
    }

    return (
        <>
        <Card variant="outlined" sx={{ backgroundColor:"#f2f2f2"}} >
            <CardContent>
            <form
            style={{
                display: "flex",
                flexDirection: "column",
            }}
            onSubmit={(event) => {
              event.preventDefault();
              onSubmitNewContact(newContact);
              setKontakBaru({
                name: "",
                phone: "",
                email: "",
                photo: "",
              });
            }}
            >
            
            <TextField 
                fullWidth
                required
                id="name"
                name="name"
                label="Nama"
                type="text"
                variant="filled"
                value={newContact.name}
                onChange={onChangeHandler}
            />

            
            <TextField 
                fullWidth
                required
                id="phone"
                name="phone"
                label="Nomor Telepon"
                type="number"
                variant="filled"
                value={newContact.phone}
                onChange={onChangeHandler}
            />

            
            <TextField 
                fullWidth
                required
                id="email"
                name="email"
                label="E-Mail"
                type="text"
                variant="filled"
                value={newContact.email}
                onChange={onChangeHandler}
            />

            
            <TextField 
                fullWidth
                required
                id="photo"
                name="photo"
                label="URL Foto Anda"
                type="text"
                variant="filled"
                value={newContact.photo}
                onChange={onChangeHandler}
            />

            <Button
                type="submit"
                color="success"
            >
                Tambah Kontak Baru
            </Button>

            </form>
            </CardContent>
</Card>
        </>
    )
}

export default ContactForm;
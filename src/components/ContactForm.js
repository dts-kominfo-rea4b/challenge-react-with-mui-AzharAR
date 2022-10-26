// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import { Button, CardContent, TextField, Card } from '@mui/material';
import { useState } from "react";

const ContactForm = ({ handleClick }) => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');

  return (
      <div>
          <Card sx={{ width: 350, height: 400 }}>                
              <CardContent >
                  <TextField
                              required
                              label="Name"
                              value={name}
                              variant="filled"
                              onChange={(e) => {
                                  setName(e.target.value);
                              }}
                              style ={{width: '100%'}}
                  />
              </CardContent>

              <CardContent>
                  <TextField
                              required
                              label="Phone"
                              value={phone}
                              variant="filled"
                              onChange={(e) => {
                                  setPhone(e.target.value);
                              }}
                              style ={{width: '100%'}}
                  />
              </CardContent>

              <CardContent>
                  <TextField
                              required
                              label="Email"
                              value={email}
                              variant="filled"
                              onChange={(e) => {
                                  setEmail(e.target.value);
                              }}
                              style ={{width: '100%'}}
                  />
              </CardContent>

              <CardContent>
                  <TextField
                              required
                              id="photo-url"
                              label="Photo URL"
                              value={photoUrl}
                              variant="filled"
                              onChange={(e) => {
                                  setPhotoUrl(e.target.value);
                              }}
                              style ={{width: '100%'}}
                  />
                  </CardContent>

              <CardContent>
                  <Button 
                      variant="text"
                      onClick={() => {
                          handleClick({name: name, phone: phone, email: email, photo: photoUrl});
                          setName("");
                          setPhone("");
                          setEmail("");
                          setPhotoUrl("");
                      }}
                  >
                      ADD NEW
                  </Button>                  
              </CardContent>
          </Card>
      </div>
  );
}

export default ContactForm;
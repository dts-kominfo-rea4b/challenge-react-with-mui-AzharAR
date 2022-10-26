// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import { List, ListItem, ListItemAvatar, ListItemText, Avatar, Card } from '@mui/material';
import React from "react";
import { useEffect, useState } from 'react';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}

const Contact = ({ data }) => {
  // Contact berisi foto, nama, telepon, dan email
  const [contacts, setContacts] = useState([]);

    useEffect(() => {
        setContacts((data.length > 0)?data : [data]);        
    }, [data]);    

    return (
    <div>
        <Card sx={{ width: 350, height: 400 }}>
        
            <List style={{maxHeight: '100%', overflow: 'auto'}}>
                
                { contacts.map((contact) => (
                    <ListItem key={contact.name}>
                        <ListItemAvatar>
                            <Avatar                                
                                alt={contact.name}
                                src={contact.photo} 
                            />
                        </ListItemAvatar>
                        <ListItemText primary={contact.name} secondary={
                            <span>
                                {contact.phone}<br/>
                                {contact.email}
                            </span>
                        }/>
                    </ListItem>
                    ))}
            </List>

       </Card>
    </div>
    )
};

export default Contact;

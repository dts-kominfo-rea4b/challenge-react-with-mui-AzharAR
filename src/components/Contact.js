// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import { Avatar, Divider, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    const {name, phone, email, photo} = data;
    return (
        <>
        <ListItem>
            <ListItemAvatar>
                <Avatar alt={name} src={photo} sx={{width:50, height:50}} />
            </ListItemAvatar>
            <ListItemText 
                primary={name}
                secondary={
                    <>
                    <Typography
                        component = "span"
                        variant="body2"
                        sx={{display:"block"}}
                    >
                        {phone}
                    </Typography>
                    <Typography
                        component = "span"
                        variant="body2"
                        sx={{display:"block"}}
                    >
                        {email}
                    </Typography>
                    </>
                }
            />
        </ListItem>
        <Divider />
        </>
    )
};

export default Contact;

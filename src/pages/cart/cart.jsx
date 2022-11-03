import { Grid, List, ListItem, ListItemAvatar, ListItemText, Typography, Avatar } from "@mui/material";
import React from "react"; 
import { produtosCart } from "./products-cart";
import DeleteIcon from "@mui/icons-material/Delete"
import IconButton from '@mui/material/IconButton';
const cart = () => {
    // return Object.keys(productsCart).map(id => productsCart[id].id)
    return <Grid container spacing={2}>
      <Grid item xs={12} md={6} lg={8}>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem
       secondaryAction={
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      }
        alingItem="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
        </List>
      </Grid>
      <Grid item xs={12} md={6} lg={4}></Grid>
    </Grid>
}
export default cart;
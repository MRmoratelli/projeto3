import { Grid, List, ListItem, ListItemAvatar, Stack, Typography, TextField, Button } from "@mui/material";
import  React from "react"; 
import { produtosCart } from "./products-cart";
import { calculateTotal, calculatePromo } from "../../utils/calculate";
import DeleteIcon from "@mui/icons-material/Delete"
import IconButton from '@mui/material/IconButton';
import "./cart.css";
import {Link} from "react-router-dom"

const cart = () => {
  const totals = Object.keys(produtosCart).map(id => {
    let qtd = produtosCart[id].quantity;
    return [produtosCart[id].price * qtd, produtosCart[id].promo_price * qtd]
  });

  const total = calculateTotal(totals);
 const totalPromo = calculatePromo(totals);

    return <Grid container spacing={2} sx={{
        padding: '40px',
        boxSizing: 'border-box'
    }}>
      <Grid item xs={12} md={12} lg={8} sx={{
        padding: '20px !important',
      }}>
        <div style={{
            boxSizing: 'border-box',
            backgroundColor: "#fff",
            borderRadius: '15px',
            boxShadow: '4px 4px 12px -6px rgba(0,0,0,0.6)'
        }}>
            <List sx={{ width: '100%' }}>
        {
           Object.keys(produtosCart).map(id => {
            return <ListItem sx={{
                alignItems: 'center'
            }}
           secondaryAction={
            <IconButton   edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          }
            alingItem="flex-start">
            <ListItemAvatar sx={{
               flexGrow: 1
            }} 
            className="stackImage">
              {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
              <div style={{
                backgroundImage: `url("${produtosCart[id].images[0]}")`
              }}></div>
            </ListItemAvatar>
        <Stack  sx={{
            flexGrow: 2
         }} 
        direction="row">
            <Stack direction="column" sx={{
                justifyContent: 'center',
                paddingLeft:"5px",
                boxSizing: "border-box",
                flexGrow: 2,
            }}>
                <Typography
                    sx={{ 
                        display: 'inline',
                        fontWeight: '600',
                        fontSize: '1.2em',
                     }}
                    component="h6"
                    variant="h6"
                    color="text.primary"
                  >
                    {produtosCart[id].name}
                </Typography>
                <Typography
                    sx={{ 
                        display: 'inline',
                        fontSize: '0.9em',
                        color: "#666666"
                     }}
                    component="p"
                    variant="p"
                    color="text.primary"
                  >
                        {produtosCart[id].description.substr(0, 50)}...
                </Typography>
            </Stack>
            <Stack direction="row" sx={{
                alignItems: "center",
                flexGrow: 1,
                paddingLeft: '15px',
                paddingRight: '15px',
                boxSizing: 'border-box'
            }}>
                {
                    produtosCart[id].promo_price ? <Typography
                    sx={{ 
                        display: 'inline',
                        color: 'red',
                        fontWeight: '700',
                        fontSize: '16px',
                        paddingLeft: '15px',
                        paddingRight: '15px',
                        boxSizing: 'border-box'         
                    }}
                    component="p"
                    variant="p"
                    color="text.primary"
                  >
                    {produtosCart[id].promo_price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}
                </Typography> : <span style={{
                    minWidth: '74px'
                }}/>
                } 
                <Typography
                    sx={{ 
                        display: 'inline',
                        paddingLeft: '5px',
                        paddingRight: '5px',
                        boxSizing: 'border-box',
                        textDecoration: produtosCart[id].promo_price ? 'line-through' : 'none',
                        fontSize: produtosCart[id].promo_price ? '12px' : '14px'
                     }}
                    component="p"
                    variant="p"
                    color="text.primary"
                  >
                    {produtosCart[id].price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}
                </Typography>
            </Stack>
            <Stack className="stackQuantity" direction="row" sx={{
                alignItems: "center",
                flexGrow: 1,
            }}>
                <TextField 
             
                size="small"
                type="number"/>
            </Stack>      
        </Stack>
          </ListItem>
           })
        }
    </List>

        </div>
      
      </Grid>
      <Grid item xs={12} md={12} lg={4} sx={{
        padding: '20px !important'
      }}>
        <div className="pagamento" style={{
            marginBottom: '5px',
            boxSizing: 'border-box',
            backgroundColor: "#fff",
            borderRadius: '15px',
            boxShadow: '4px 4px 12px -6px rgba(0,0,0,0.6)'
        }}><ul style={{
            margin: 0,
            listStyle: 'none',
            paddingLeft: 0
        }} className="listTotal">
    <li><span>Total: </span>
        <span>{total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</span>
         </li>
    <li>
        <span>Desconto: </span>
        <span>{totalPromo.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</span>
    </li>
    <li>
        <span>Subtotal: </span>
        <span>{(total - totalPromo).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</span>        
    </li>
</ul>
</div>

<Link to="/checkout">
<Button variant="contained" fullWidth sx={{borderRadius: '15px'}}>PAGAR</Button>
</Link>
      </Grid>
    </Grid>
}
export default cart;

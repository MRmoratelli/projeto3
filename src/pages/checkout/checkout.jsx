import React from "react";
import { useEffect } from 'react';
import { userIsLoggedIn } from "../../services/auth/auth";
import { calculateTotal, calculatePromo } from "../../utils/calculate";
import { Grid, TextField, Typography, Button} from "@mui/material";
import { produtosCart } from "../cart/products-cart";
import "./checkout.css";


const checkout = ({ history }) => {
    const variantType = "filled"; 
    const totals = Object.keys(produtosCart).map(id => {
        let qtd = produtosCart[id].quantity;
        return [produtosCart[id].price * qtd, produtosCart[id].promo_price * qtd]
      });
      
      function formatD(){
        let today = new Date;
        let mes = today.getMonth() + 1;
        return `${today.getFullYear()}-${("0" + mes).slice(-2)}-${("0" + (today.getDate())).slice(-2)}`
      }
       const total = calculateTotal(totals);
       const totalPromo = calculatePromo(totals);
    
    useEffect(() => {
        userIsLoggedIn()
    })
    
    return <Grid container spacing={2} className="checkout">
        <Grid item xs={12}>
            <Typography variant="h5" component="h1">Realizar pagamento</Typography>
        </Grid>
        <Grid item sx={{}} xs={12} md={6} lg={8}>
             <Grid container>
             <Grid item xs={12}>
                <span>Informações pessoais</span>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <TextField 
                        fullWidth
                        variant={variantType}
                        label="Nome"
                        type="text"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField 
                        fullWidth
                        variant={variantType}
                        label="Sobrenome"
                        type="text"
                        />
                        </Grid>
                    <Grid item xs={12} md={6}>
                    <TextField 
                        fullWidth
                        variant={variantType}
                        label="CPF"
                        type="tel"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <TextField 
                        fullWidth
                        variant={variantType}
                        label="Telefone"
                        type="tel"
                        />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField 
                        fullWidth
                        variant={variantType}
                        label="E-mail"
                        type="email"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={5}>
                    <TextField 
                        fullWidth
                        variant={variantType}
                        label="Endereço"
                        type="text"
                        />
                    </Grid>
                    <Grid item xs={12} sm={3} md={2}>
                    <TextField 
                        fullWidth
                        variant={variantType}
                        label="numero"
                        type="tel"
                        />
                    </Grid>
                    <Grid item xs={12} sm={3} md={2}>
                    <TextField 
                        fullWidth
                        variant={variantType}
                        label="Complemento"
                        type="text"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                    <TextField 
                        fullWidth
                        variant={variantType}
                        label="CEP"
                        type="tel"
                        />
                    </Grid>
                    <Grid item xs={12}md={4}>
                    <TextField 
                        fullWidth
                        variant={variantType}
                        label="Bairro"
                        type="text"
                        />
                    </Grid>
                    <Grid item xs={12}md={4}>
                    <TextField 
                        fullWidth
                        variant={variantType}
                        label="Cidade"
                        type="text"
                        />
                    </Grid>
                    <Grid item xs={12}md={4}>
                    <TextField 
                        fullWidth
                        variant={variantType}
                        label="Estado"
                        type="text"
                        />
                    </Grid>
                </Grid>
             </Grid>
             <Grid item xs={12}>
             <span>Detalhes do pagamento</span>
             <Grid container spacing={2}>
             <Grid item xs={12}>
                    <TextField 
                          fullWidth
                          variant={variantType}
                          label="Nome impresso no cartão"
                          type="text"
                          />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField 
                          fullWidth
                          variant={variantType}
                          label="Numero do cartao"
                        //   size="small" 
                          type="tel"
                          />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField 
                          fullWidth
                          variant={variantType}
                          label="Código de seg."
                          size="small" 
                          type="password"
                          />
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <TextField 
                          fullWidth
                          variant={variantType}
                          label="Data de vencimento"
                          size="small"
                          type="date"
                          value={formatD()}
                          />
                    </Grid>
                    
                    {/* <Grid item xs={12}SELECT DE PARCELAS></Grid> */}
                </Grid>
             </Grid>
             </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={4} >
            <Grid container spacing={2}>
            <Grid item xs={12} className="order-detail">
            <div>
            <Typography variant="h6" conponent="h6">Detalhes da compra</Typography>
            <ul>
            {
                Object.keys(produtosCart).map((id, idx) => {
                    return <li key={idx}>
                        <span>
                            {produtosCart[id].name}
                        </span>
                        
                        <span>
                            {produtosCart[id].promo_price ? produtosCart[id].promo_price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}) : produtosCart[id].price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}
                        </span>
                    </li>
                })
            }
            </ul>
            <hr/>
            <ul>
                <li>
                    <span><strong>Total</strong></span>
                    
                    <span>{total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</span>
                </li>
                <li>
                    <span><strong>Desconto</strong></span>
                    
                    <span>{totalPromo.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</span>
                </li>
                <li>
                    <span><strong>Subtotal</strong></span>
                    
                    <span>{(total - totalPromo).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</span>
                </li>
            </ul>
            </div>
            </Grid>
            <Grid item xs={12} md={12}>
                        <Button variant="contained" fullWidth>Pagar</Button>
                    </Grid>
        </Grid>
            </Grid>
        
    </Grid>
}
export default checkout;
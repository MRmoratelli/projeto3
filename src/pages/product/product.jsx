import React from "react"; 
import { useState, useEffect } from "react"; 
import { useNavigate, useParams } from "react-router-dom";
import { products, categories } from '../catalog/products';
import {
    Grid, Typography, Stack, Button, TextField, Chip, IconButton
} from "@mui/material";
import "./product.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const product = () => {
    const navigate = useNavigate()
    const params = useParams();
    const [currentImage, setCurrentImage] = useState(""); 
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        setCurrentImage(products[params.id].images[0]);
    }, [])

    const setImageToView = (position) => {
        setCurrentImage(products[params.id].images[position]);  
      }

    const changeQuantityButton = (value) => {
        if (quantity >= 0){
            let result = quantity + value;
            if(result === -1){
                result = 0;
            }
           setQuantity(result);
        }
    }  

    return <Grid container spacing={2} className="product">
       <Grid item xs={12} sm={5} className="image-side">
        <Stack className="main-image">
            <div className="imageSide_image-item" style={{
                backgroundImage: `url(${currentImage})`
            }}>
            </div>
        </Stack>
        <Stack direction="row" className="icon-images">
       {
        products[params.id].images.map((images, idx) =>  <img onClick={()=>setImageToView(idx)} width="auto" height="105px" src={images} alt=""/>)
       }
       </Stack>
       </Grid>
       <Grid item xs={12} sm={7} className="productItem">
        <Typography variant="h4" component="h1" className="productItem_title">{products[params.id].name}</Typography>
        <div className="productItem_categories">
           {
        products[params.id].categories.map(cotegoryId => <Chip className="label" label={categories[cotegoryId].name}/>)
           }
        </div>
              {
                products[params.id].promo_price ? <Typography variant="p" component="p" className="productItem_promo_price">{products[params.id].promo_price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</Typography> : ""
              }
             <Typography variant="p" component="p" className="productItem_price" style={{
               fontSize: products[params.id].promo_price ? '16px' : '20px',
               color: products[params.id].promo_price ? '#a9a9a9' : '#333333',
               textDecoration: products[params.id].promo_price ? 'line-through' : 'none',
             }}>{products[params.id].price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</Typography>

        <Typography variant="p" component="p" className="productItem_description">{products[params.id].description}</Typography>
        <div className="productItem_quantity">
            <IconButton onClick={() => changeQuantityButton(-1)}>
                <RemoveIcon color='primary'/>
            </IconButton>

            <TextField style={{
                width:'45px'
            }} size="small" type="number" value={quantity} onChange={(event) => {setQuantity(event.target.value)}}/>
           
            <IconButton onClick={() => changeQuantityButton(1)}>
                <AddIcon color='primary'/>
            </IconButton>
        </div>
        <Button onClick = {() => navigate("/checkout")} variant="contained" size="large" endIcon={<ShoppingCartIcon/>} className="productItem_buy">Comprar</Button>
      
       </Grid>
    </Grid>
 
}
export default product;

// return <h1> 
    //     Produto {products[params.id].name},
    //     {
    //     products[params.id].categories.map(cotegoryId => categories[cotegoryId].name)
    //     }
    // </h1>
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  Chip,
  Container,
  Divider,
  Grid,
  Rating,
  Stack,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import MdPhone from '@mui/icons-material/Phone';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import React from "react";
import { ProductType, useProductsContext } from "../../config/context";
import { pink } from '@mui/material/colors';


function ProductItem(props: { product: ProductType }) {

  const [value, setValue] = React.useState<number | null>(2);

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const theme = createTheme({
    components: {
      MuiIcon: {
        styleOverrides: {
          root: {
            // Match 24px = 3 * 2 + 1.125 * 16
            boxSizing: 'content-box',
            padding: 3,
            fontSize: '1.125rem',
          },
        },
      },
    },
  });
  const {
    brand,
    category,
    description,
    discountPercentage,
    id,
    images,
    price,
    rating,
    stock,
    thumbnail,
    title,
  } = props?.product;



  return (
    <Container sx={{display:"flex"}}>
         <Card sx={{ maxHeight: 600, maxWidth: 300,boxShadow: 3  }}>
      <CardMedia sx={{ height: 145 }} image={thumbnail} title="" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" 
        style={{fontFamily: "math"}} noWrap>
          {brand}: {title}
        </Typography>
        <Divider />
        <Typography variant="body2" color="text.secondary" style={{fontFamily:"Times New Roman"}} noWrap>
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap>
        <b>Price :</b> &#36;  {price} {/* &#8377; {price} */}
        {/* <Stack direction="row" spacing={1} style={{display:"flex"}}> */}
           <Checkbox {...label} icon={<FavoriteBorder />} style={{float:"right"}}  sx={{ color: "default",'&.Mui-checked': {color: pink[600]}}} checkedIcon={<Favorite />}/>
        <Checkbox  {...label}  icon={<BookmarkBorderIcon />} style={{float:"right"}} checkedIcon={<BookmarkIcon />}/>
        {/* </Stack> */}
        </Typography>
        
        <CardActions>
      
      <Rating  name="simple-controlled"  value={value} style={{float:"left"}}  onChange={(event, newValue) => {setValue(newValue);  }}/>
      <ThemeProvider theme={theme} >

<Chip icon={<MdPhone />} label="Call me" style={{float:"right",margin:"3px 3px 0px 3em"}}/>
</ThemeProvider>
         </CardActions>  
       
      </CardContent>
 
        
    </Card>
    </Container>
 
  );
}

function ProductList() {
  const { products } = useProductsContext();

  return (
    <Container>
      <Typography variant="h4" sx={{textAlign:"center",padding:"10px",fontFamily:"Math"}}>
        OUR PRODUCTS</Typography>
      <Grid container spacing={2}>
        {products?.slice(0, 6)?.map((product: ProductType, index: number) => {
          return (
            <Grid item key={`product-${index}`}>
              <ProductItem product={product} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
} 

export default ProductList;

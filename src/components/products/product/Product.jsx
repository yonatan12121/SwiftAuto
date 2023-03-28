import React ,{useEffect}from 'react';
import { Card,CardMedia,CardContent,CardActions,Typography,IconButton} from '@material-ui/core';
import { AddShoppingCart, Height } from '@material-ui/icons';

import useStyles from './styles';




const Product = ({product, onAddToCart}) => {
    const classes = useStyles();
    
    console.log(product);
  return (
    <Card className={classes.root}>

        <CardMedia className={classes.media} image={product.Image}  title={product.Name}/>

        <CardContent>
            <div className={classes.cardContent}>
                <Typography variant="h5" gutterBottom>
                     {product.Name}
                </Typography>

                <Typography variant="h5">
                    {product.Price}
                </Typography>

                
            </div>
            <Typography dangerouslySetInnerHTML={{ __html : product.Description }} variant="body2" color="textSecondary"/>
              <Typography variant="body2" color="textSecondary">{product.Campanyname}</Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.cardaction}>

            <IconButton aria-label="Add to cart" onClick={() => onAddToCart(product._id, 1)}>

                <AddShoppingCart/>

            </IconButton>

        </CardActions>

    </Card>
  )
}

export default Product;
 
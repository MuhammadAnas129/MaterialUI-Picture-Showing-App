import React from "react";
import { Typography, AppBar, Toolbar, CssBaseline, Container, Grid, Button, makeStyles,CardMedia, Card, CardContent, CardActions } from "@mui/material";
import { PhotoCamera } from "@material-ui/icons";
import useStyles from "./styles";

const cards = [1,2,3,4,5,6,7,8,9];

const App = () => {
   
   const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon}/>
          <Typography variant="h6" style={{ marginLeft: '10px' }}>Photo Album</Typography>
        </Toolbar>
      </AppBar>

      <main>
         <div className={classes.container}>
            <Container>
               <Typography variant="h2" align="center" color="TextPrimary" gutterBottom>
                  Photo Album
               </Typography>
               <Typography variant="h5" align="center" color="textSecondary" paragraph>
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse harum ex quia. Consequuntur aliquam dicta adipisci animi harum, illo minima?
               </Typography>
               <div>
                  <Grid container spacing={2}  justifyContent="center">
                     <Grid item >
                        <Button variant="contained" color="primary" className={classes.button}>
                       See My Photos    
                        </Button>
                        <Button variant="outlined" color="primary" className={classes.button}>
                       See My Photos    
                        </Button>
                     </Grid>
                  </Grid>
               </div>
            </Container>
         </div>

         <div>
            <Container className={classes.cardGrid} nextWidth="md">
             <Grid container spacing={4}>
               {cards.map((card)=>(
                  <Grid item key={card} xs={12} sm={6} md={3}>
                  <Card className={classes.card}>
   
                     <CardMedia className={classes.cardMedia}  
                     image="https://source.unsplash.com/random"
                     tital="Image Tital"
                     />
   
                     <CardContent className={classes.CardContent}>
                        <Typography gutterBottom variant="h5">
                           Heading
                        </Typography>
                        <Typography>
                           This is my picture card.
                        </Typography>
                     </CardContent>
   
                     <CardActions className={classes.cardActions}>
                        <Button size="small" color="primary">
                           View
                        </Button>
                        <Button size="small" color="primary">
                           Edit
                        </Button>
                     </CardActions>
                  </Card>
                  </Grid>
               ))}
               
             </Grid>
            </Container>
         </div>
      </main>
<footer className={classes.footer}>
   <Typography variant="h6" align="center" gutterBottom>
      Footer
   </Typography>
   <Typography variant="subtital1" textAlign="center" color="textSecondary">
   Footer Purpose.
   </Typography>
</footer>
      {/* <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography> 
      <Typography variant="subtital1">Heading 5</Typography>
      <Typography variant="subtital2">Heading 6</Typography> 
      <Typography variant="body1">this is body 1 text</Typography> 
      <Typography variant="body2">this is body 2 text</Typography> 

      */}
    </div>
  );
};

export default App;

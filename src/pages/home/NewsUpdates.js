import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Button, 
  Container, 
  Grid,
  Typography, 
  CardActionArea, 
  CardActions, 
  Card, 
  CardMedia, 
  CardContent 
} from '@material-ui/core';
import TextClamp from 'react-string-clamp';

import { NEWS } from '../../routes';

import img from '../../assets/img/slide4.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
		display: 'flex',
		flexDirection: 'column',

		'& h4': {
			textAlign: 'center'
		}
    },

    media: {
      height: 140,
    },

    btn: {
      display: 'flex',
      justifyContent: 'center',
      top: '40%',
      left: '35%',
    },

	btnredirect: {
		marginTop: theme.spacing(4),
		alignSelf: 'center',

		[theme.breakpoints.down('sm')]: {
			width: '100%'
		}
	},
}));

const NewsUpdates = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root} id={NEWS}>
        <Typography variant="h4">News and Updates</Typography><br/>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={img}
                      title="slide1"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        <TextClamp
                            text="COVID-19: Nigeria inches closer to fourth wave, records 1,424 new cases Wednesday"
                            lines={2}
                        />
                      </Typography>
                      <Typography>
                        16th December, 2021
                      </Typography><br/>
                      <Typography variant="body2" color="textSecondary" component="p">
                        <TextClamp
                          text="Since the third wave eased, Nigeria for the first time crossed 1,000 new daily infection mark on Wednesday with a total of 1,424 new cases but without fatality."
                          lines={5}
                        />
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button component={RouterLink} size="small" variant="outlined" color="primary" className={classes.btn} to="/fourthWave">
                      Read more
                    </Button>
                  </CardActions>
               </Card>
        </Grid>
          <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.root}>
                        <CardActionArea>
                          <CardMedia
                            className={classes.media}
                            image={img}
                            title="slide1"
                          />
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="h2">
                                <TextClamp
                                  text="COVID-19 REQUIREMENTS FOR TRAVELLERS RETURNING TO NIGERIA"
                                  lines={2}
                                />
                            </Typography>
                            {/* <Typography>
                              16th December, 2021
                            </Typography><br/> */}
                            <Typography variant="body2" color="textSecondary" component="p">
                              <TextClamp
                                text="The Presidential Steering Committee on COVID-19 (PSC-COVID-19) has reviewed the protocol for all return travellers to Nigeria."
                                lines={5}
                              />
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                          <Button to={NEWS} component={RouterLink} size="small" variant="outlined" color="primary" className={classes.btn}>
                            Read more
                          </Button>
                        </CardActions>
                  </Card>
          </Grid>
        </Grid>
        <Button variant="contained" size="medium" color="primary" className={classes.btnredirect}>More News</Button>
    </Container>
  );
}

export default NewsUpdates;
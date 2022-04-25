import { useState } from 'react';
import { 
    Button,
    Box,
    Container,
    Grid,
    TextField,
    Typography 
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Email, MapMarker, Phone } from 'mdi-material-ui';

import { COLORS } from '../../utils/constants';
import Layout from '../../components/layout';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(10, 0)
    },

    header: {
        fontWeight: 600
    },

    addressContainer: {
        borderRadius: theme.shape.borderRadius,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 0.5fr',
        alignItems: 'center',
        gap: theme.spacing(5),
        padding: theme.spacing(2),

        [theme.breakpoints.down('md')]: {
            gap: theme.spacing(2)
        },

        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: '1fr'    
        },

        '& a': {
            color: COLORS.offBlack,

            '&:hover': {
                color: theme.palette.primary.main
            }
        }
    },

    markerIcon: {
        color: theme.palette.primary.main,
        fontSize: theme.spacing(10),

        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },

    icon: {
        color: COLORS.grey,
        position: 'relative',
        top: 5
    },

    form: {
        backgroundColor: COLORS.white,
        borderRadius: theme.shape.borderRadius,
        padding: theme.spacing(2)
    },

    map: {
        border: 'none',
        borderRadius: theme.shape.borderRadius,
        width: '100%',
        height: '100%',

        [theme.breakpoints.down('md')]: {
            height: '200%',
        }
    }
}));

const Contact = () => {
    const classes = useStyles();

    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    // eslint-disable-next-line
    const [loading, setLoading] = useState(false);
    // eslint-disable-next-line
    const [errors, setErrors] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Layout title="Contact">
            <Box component="div" className={classes.root}>
                <Typography variant="h4"  align="center" className={classes.header}>CONTACT</Typography>
                <Container>
                    <Grid container spacing={5} direction="row">
                        <Grid item xs={12}>
                            <Box component="section">
                                <Typography variant="h6" color="primary">PHYSICAL ADDRESS</Typography>
                                <Box component="div" className={classes.addressContainer}>
                                    <Typography variant="body1" component="p">Embassy of Nigeria Rue No 3 Hydra Algiers, Algeria</Typography>
                                    <Box component="div">
                                        <Typography variant="body1" component="p"><Phone className={classes.icon} /> &nbsp;&nbsp;<a href="tel:+2348147233059">+2348147233059</a>,&nbsp;&nbsp;<a href="tel:+2348147233059">+2348147233059</a></Typography>
                                        <Typography variant="body1" component="p"><Email className={classes.icon} /> &nbsp;&nbsp;<a href="mailto:contact@embassyofnigeriaalgiers.com">contact@embassyofnigeriaalgiers.com</a></Typography>
                                    </Box>
                                    <MapMarker className={classes.markerIcon} />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container direction="row" spacing={3}>
                                <Grid item xs={12} lg={6}>
                                    <form onSubmit={onSubmit} className={classes.form}>
                                        <Grid container direction="row" spacing={2}>
                                            <Grid item xs={12} md={6}>
                                                <TextField 
                                                    variant="outlined"
                                                    type="text"
                                                    placeholder="Name"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    error={errors.name ? true : false}
                                                    helperText={errors.name}
                                                    required
                                                    disabled={loading}
                                                    fullWidth
                                                />
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <TextField 
                                                    variant="outlined"
                                                    type="text"
                                                    placeholder="Message Subject"
                                                    value={subject}
                                                    onChange={(e) => setSubject(e.target.value)}
                                                    error={errors.subject ? true : false}
                                                    helperText={errors.subject}
                                                    required
                                                    disabled={loading}
                                                    fullWidth
                                                />
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <TextField 
                                                    variant="outlined"
                                                    type="email"
                                                    placeholder="Email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    error={errors.email ? true : false}
                                                    helperText={errors.email || 'e.g. example@email.com'}
                                                    required
                                                    disabled={loading}
                                                    fullWidth
                                                />
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <TextField 
                                                    variant="outlined"
                                                    type="text"
                                                    placeholder="Phone"
                                                    value={phone}
                                                    onChange={(e) => setPhone(e.target.value)}
                                                    error={errors.phone ? true : false}
                                                    helperText={errors.phone}
                                                    required
                                                    disabled={loading}
                                                    fullWidth
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField 
                                                    variant="outlined"
                                                    type="text"
                                                    placeholder="Message"
                                                    value={message}
                                                    onChange={(e) => setMessage(e.target.value)}
                                                    error={errors.message ? true : false}
                                                    helperText={errors.message}
                                                    required
                                                    multiline
                                                    minRows={5}
                                                    disabled={loading}
                                                    fullWidth
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Button 
                                                    variant="contained"
                                                    color="primary"
                                                    type="submit"
                                                    disableFocusRipple
                                                    disableTouchRipple
                                                    disableRipple
                                                    fullWidth
                                                    disabled={loading}
                                                >
                                                    SEND MESSAGE
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <iframe 
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.0475390644656!2d3.0302274152883326!3d36.74542997995987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb209886ff6af%3A0xb3607bc8a76b2068!2sAmbassade%20Du%20Nigeria!5e0!3m2!1sen!2sng!4v1650373551364!5m2!1sen!2sng"
                                        title="Embassy Of Nigiera Algiers" 
                                        allowfullscreen 
                                        loading="lazy" 
                                        referrerpolicy="no-referrer-when-downgrade"
                                        className={classes.map}
                                    >
                                    </iframe>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Layout>
    );
};

export default Contact;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import meca from '../../assets/img/meca.jpg';
import mppia from '../../assets/img/mppia.jpg';
import mcem from '../../assets/img/mcem.jpg';
import financeAattache from '../../assets/img/finance-attache.jpg';
import hoc from '../../assets/img/hoc.jpg';
import secretary2 from '../../assets/img/secretary-2.jpeg';
import secretary from '../../assets/img/secretary.jpg';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: theme.spacing(10),
        padding: theme.spacing(4)
    },

    team: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: theme.spacing(20),
        marginTop: theme.spacing(30),
        marginBottom: theme.spacing(5),
        [theme.breakpoints.down('lg')]: {
            columnGap: theme.spacing(3),
        },
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
            rowGap: theme.spacing(25),
        },
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: '1fr',
            marginTop: theme.spacing(20),
        }
    },

    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: theme.spacing(5),
        paddingBottom: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        transition: '0.3s linear all',

        '&:hover': {
            transform: 'translateY(-10px)'
        }
    },

    header: {
        [theme.breakpoints.down('md')]: {
            marginTop: theme.spacing(5),
        }
    },

    image: {
        borderRadius: '50%',
        border: '1px solid rgb(224, 224, 224)',
        marginTop: '-50%',
        transition: '0.3s linear all',
        width: '90%'
    }
}));

const Team = () => {
    const classes = useStyles();
    return (
        <section className={classes.root}>
            <Typography variant="h4"align="center" className={classes.header} >
                Meet the Team
            </Typography>
            <div className={classes.team}>
                <Paper elevation={2} className={classes.paper}>
                    <img src={mppia} alt="Minister Political, Protocol & Information Affairs" className={classes.image} />
                    <Typography variant="h6" align="center">
                        Adamu Idris Mohammed
                    </Typography>
                    <Typography variant="subtitle2" component="p" align="center">
                        Minister, Political, Protocol &amp; Information Affairs
                    </Typography>
                </Paper>
                <Paper elevation={2} className={classes.paper}>
                    <img src={meca} alt="Minister, Economic and Cultural Affairs" className={classes.image} />
                    <Typography variant="h6" align="center">
                        Mrs. Maimunah Ibrahim Betso
                    </Typography>
                    <Typography variant="subtitle2" component="p" align="center">
                        Minister, Economic and Cultural Affairs
                    </Typography>
                </Paper>
                <Paper elevation={2} className={classes.paper}>
                    <img src={mcem} alt="Minister, Consular & Education Matters" className={classes.image} />
                    <Typography variant="h6" align="center">
                        Rabi Jumai Usman
                    </Typography>
                    <Typography variant="subtitle2" component="p" align="center">
                        Minister, Consular &amp; Education Matters
                    </Typography>
                </Paper>
                <Paper elevation={2} className={classes.paper}>
                    <img src={financeAattache} alt="Staff Name" className={classes.image} />
                    <Typography variant="h6" align="center">
                        Mr. Bello Yunusa Hamman-Adama
                    </Typography>
                    <Typography variant="subtitle2" component="p" align="center">
                        Finance Attaché
                    </Typography>
                </Paper>
                <Paper elevation={2} className={classes.paper}>
                    <img src={hoc} alt="Staff Name" className={classes.image} />
                    <Typography variant="h6" align="center">
                        Aminat Abdul-Wahab Idris
                    </Typography>
                    <Typography variant="subtitle2" component="p" align="center">
                        Head of Chancery
                    </Typography>
                </Paper>
                <Paper elevation={2} className={classes.paper}>
                    <img src={secretary2} alt="Second Secretary" className={classes.image} />
                    <Typography variant="h6" align="center">
                        Haruna Maina Gabai
                    </Typography>
                    <Typography variant="subtitle2" component="p" align="center">
                        Second Secretary
                    </Typography>
                </Paper>
                <Paper elevation={2} className={classes.paper}>
                    <img src={secretary} alt="First Secretary (Political Affairs & Communication)" className={classes.image} />
                    <Typography variant="h6" align="center">
                        Christy Ucha Obasi
                    </Typography>
                    <Typography variant="subtitle2" component="p" align="center">
                        First Secretary (Political Affairs &amp; Communication)
                    </Typography>
                </Paper>
            </div>
        </section>
    );
};

export default Team;
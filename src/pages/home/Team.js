import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import ambassador from '../..//images/ambassador.jpg';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: theme.spacing(10),
        padding: theme.spacing(4),
        // width: '100vw'
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
            marginTop: theme.spacing(25),
        }
    },

    paper: {
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        alignItems: 'center',
        paddingBottom: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        transition: '0.3s linear all',
        '&:hover': {
            // position: 'relative',
            // top: - 20
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
        boxShadow: `0px 0px 10px rgba(0, 0, 0, 0.5)`,
        marginTop: '-50%',
        transition: '0.3s linear all',
        width: '90%',
        '&:hover': {
            boxShadow: `0px 0px 20px rgba(0, 0, 0, 0.5)`,
        }
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
                    <img src={ambassador} alt="Staff Name" className={classes.image} />
                    <Typography variant="h6">
                        Staff Name
                    </Typography>
                    <Typography variant="subtitle2">
                        Staff, Position
                    </Typography>
                </Paper>
                <Paper elevation={2} className={classes.paper}>
                    <img src={ambassador} alt="Staff Name" className={classes.image} />
                    <Typography variant="h6">
                        Staff Name
                    </Typography>
                    <Typography variant="subtitle2">
                        Staff, Position
                    </Typography>
                </Paper>
                <Paper elevation={2} className={classes.paper}>
                    <img src={ambassador} alt="Staff Name" className={classes.image} />
                    <Typography variant="h6">
                        Staff Name
                    </Typography>
                    <Typography variant="subtitle2">
                        Staff, Position
                    </Typography>
                </Paper>
                <Paper elevation={2} className={classes.paper}>
                    <img src={ambassador} alt="Staff Name" className={classes.image} />
                    <Typography variant="h6">
                        Staff Name
                    </Typography>
                    <Typography variant="subtitle2">
                        Staff, Position
                    </Typography>
                </Paper>
                <Paper elevation={2} className={classes.paper}>
                    <img src={ambassador} alt="Staff Name" className={classes.image} />
                    <Typography variant="h6">
                        Staff Name
                    </Typography>
                    <Typography variant="subtitle2">
                        Staff, Position
                    </Typography>
                </Paper>
                <Paper elevation={2} className={classes.paper}>
                    <img src={ambassador} alt="Staff Name" className={classes.image} />
                    <Typography variant="h6">
                        Staff Name
                    </Typography>
                    <Typography variant="subtitle2">
                        Staff, Position
                    </Typography>
                </Paper>
                <Paper elevation={2} className={classes.paper}>
                    <img src={ambassador} alt="Staff Name" className={classes.image} />
                    <Typography variant="h6">
                        Staff Name
                    </Typography>
                    <Typography variant="subtitle2">
                        Staff, Position
                    </Typography>
                </Paper>
                <Paper elevation={2} className={classes.paper}>
                    <img src={ambassador} alt="Staff Name" className={classes.image} />
                    <Typography variant="h6">
                        Staff Name
                    </Typography>
                    <Typography variant="subtitle2">
                        Staff, Position
                    </Typography>
                </Paper>
            </div>
        </section>
    );
};

export default Team;
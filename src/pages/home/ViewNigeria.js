import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { ArrowRight } from 'mdi-material-ui';

import { COLORS } from '../../utils/constants';
import { VIEW_NIGERIA } from '../../routes';

import img from '../../images/nigeria.jpg';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundImage: `url(${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: COLORS.offWhite,
        // position: 'relative',
        // top: '100vh',
        // width: '100vw',
        // top: '85.5vh',
        // [theme.breakpoints.down('lg')]: {
        //     top: '95vh'
        // },
        // [theme.breakpoints.down('md')]: {
        //     top: '92vh'
        // },
        '& div': {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            flexDirection: 'column',
            padding: theme.spacing(4),
        }
    },

    header: {
        fontWeight: 500
    },

    text: {
        color: COLORS.lightGray,
        marginBottom: theme.spacing(5),
        marginTop: theme.spacing(5),
    },

    button: {
        alignSelf: 'flexStart',
        backgroundColor: 'transparent',
        border: `1px solid ${COLORS.offWhite}`,
        color: COLORS.offWhite,
        width: '15%',
        '&:hover': {
            backgroundColor: 'transparent',
            border: `1px solid ${COLORS.offWhite}`,
            color: COLORS.offWhite,
        },
        [theme.breakpoints.down('md')]: {
            width: '20%',
        },
        [theme.breakpoints.down('md')]: {
            width: '20%',
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        }
    }
}));

const AboutUs = () => {
    const classes = useStyles();

    return (
        <section className={classes.root} id={VIEW_NIGERIA}>
            <div>
                <Typography variant="h4" className={classes.header}>View Nigeria</Typography>
                <Typography variant="body2" className={classes.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi soluta porro, aut ut cumque voluptatem excepturi earum dolore aliquid dignissimos?
                </Typography>
                <Button
                    className={classes.button}
                    variant="contained"
                    to={VIEW_NIGERIA}
                    component={Link}
                    endIcon={<ArrowRight />}
                >
                    Read More
                </Button>
            </div>
        </section>
    );
};

export default AboutUs;
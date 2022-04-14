import { Link } from 'react-router-dom';
import { Link as AnimatedLink } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';
import {
    Drawer,
    List,
    Typography
} from '@material-ui/core';

import { COLORS } from '../../utils/constants';
import { GALLERY, NEWS, SERVICES, VIEW_NIGERIA } from '../../routes';

import ListItemLink from './ListItemLink';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const useStyles = makeStyles(theme => ({
    drawer: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: theme.spacing(5),
        width: '60%',
    },

    link: {
        alignSelf: 'center',
        color: 'inherit',
        cursor: 'pointer',
        textDecoration: 'none'
    },

    activeLink: {
        color: theme.palette.primary.main,
        fontWeight: 600
    },

    drawerLogo: {
        marginBottom: theme.spacing(5),
        width: '10%'
    },

    menuButton: {
        color: theme.palette.primary.main
    },

    copyright: {
        color: COLORS.lightGray,
        display: 'inline-block',
        position: 'absolute',
        bottom: 10,
        textAlign: 'center',
        width: '100%'
    }
}));

const MobileNav = ({ toggleDrawer, drawerOpen }) => {
    const classes = useStyles();
    const location = useLocation();

    const links = [
		{ url: '/', text: 'Home'},
		{ url: SERVICES, text: 'Consuler Services' },
		{ url: VIEW_NIGERIA, text: 'View Nigeria' },
		{ url: NEWS, text: 'News/Updates' },
		{ url: GALLERY, text: 'Gallery' }
	];

    return (
        <section>
            <Drawer PaperProps={{ className: classes.drawer }} anchor="left" open={drawerOpen} onClose={toggleDrawer}>
                {/* <Link to="/" className={classes.link}>
                    <img src={logo} alt="FX Blooms Logo" className={classes.drawerLogo} />
                </Link> */}
                <List>
                    {links.map(({text, url}, index) => {
                        if (location.pathname === '/') {
                            return (
                                <ListItemLink button divider to="#!" key={index}>
                                    {/* <ListItemIcon>
                                        {icon}
                                    </ListItemIcon> */}
                                    <AnimatedLink 
                                        to={url} 
                                        activeClass={classes.activeLink} 
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        className={classes.link}
                                        onClick={toggleDrawer}
                                    >
                                        {text}
                                    </AnimatedLink>
                                </ListItemLink>    
                            );
                        }
                        return (
                            <ListItemLink button divider key={index}>
                                {/* <ListItemIcon>
                                    {icon}
                                </ListItemIcon> */}
                                <Link 
                                    to={url} 
                                    activeClass={classes.activeLink} 
                                    className={classes.link}
                                    onClick={toggleDrawer}
                                >
                                    {text}
                                </Link>
                            </ListItemLink>    
                        );
                    })}
                </List>
                <Typography variant="subtitle2" className={classes.copyright}>Nigerian Embassy Algiers, Algeria. &copy; {new Date().getFullYear()} All rights reserved.</Typography>
            </Drawer>
        </section>
    );
}

export default MobileNav;
import { makeStyles } from '@material-ui/core/styles';
import {
    Drawer,
    List,
    ListItemText,
    Typography
} from '@material-ui/core';

import { COLORS } from '../../utils/constants';

import ListItemLink from './ListItemLink';

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

    return (
        <section>
            <Drawer PaperProps={{ className: classes.drawer }} anchor="left" open={drawerOpen} onClose={toggleDrawer}>
                {/* <Link to="/" className={classes.link}>
                    <img src={logo} alt="FX Blooms Logo" className={classes.drawerLogo} />
                </Link> */}
                <List>
                    <ListItemLink button divider to="/" onClick={toggleDrawer}>
                        {/* <ListItemIcon>
                            <Home />
                        </ListItemIcon> */}
                        <ListItemText primary="Home" />
                    </ListItemLink>
                    <ListItemLink button divider to="/" onClick={toggleDrawer}>
                        {/* <ListItemIcon>
                            <Home />
                        </ListItemIcon> */}
                        <ListItemText primary="Consuler Services" />
                    </ListItemLink>
                    <ListItemLink button divider to="/viewNigeria" onClick={toggleDrawer}>
                        {/* <ListItemIcon>
                            <Home />
                        </ListItemIcon> */}
                        <ListItemText primary="View Nigeria" />
                    </ListItemLink>
                    <ListItemLink button divider to="/" onClick={toggleDrawer}>
                        {/* <ListItemIcon>
                            <Home />
                        </ListItemIcon> */}
                        <ListItemText primary="News/Updates" />
                    </ListItemLink>
                    <ListItemLink button divider to="/" onClick={toggleDrawer}>
                        {/* <ListItemIcon>
                            <Home />
                        </ListItemIcon> */}
                        <ListItemText primary="Gallery" />
                    </ListItemLink>
                    <ListItemLink button divider to="/" onClick={toggleDrawer}>
                        {/* <ListItemIcon>
                            <Home />
                        </ListItemIcon> */}
                        <ListItemText primary="Contact" />
                    </ListItemLink>
                </List>
                <Typography variant="subtitle2" className={classes.copyright}>Nigerian Embassy Algiers, Algeria. &copy; {new Date().getFullYear()} All rights reserved.</Typography>
            </Drawer>
        </section>
    );
}

export default MobileNav;
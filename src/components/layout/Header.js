import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
	AppBar,
	Button,
	Grid,
	IconButton,
	Link,
	Slide,
	Toolbar,
	Typography,
	useScrollTrigger 
} from '@material-ui/core';
import { Menu as MenuIcon } from 'mdi-material-ui';

import { COLORS } from '../../utils/constants';
import logo from '../../images/coat-of-arms.png';

import MobileNav from './MobileNav';

const useStyles = makeStyles((theme) => ({
	root: {
		flexWrap: 1,
	},

	toolbar: {
		display: 'grid',
		gridTemplateColumns: '1fr 4fr 1fr',
		columnGap: theme.spacing(5),

		[theme.breakpoints.down('md')]: {
			display: 'none'
		}
	},

	logo: {
		width: '50%',
		[theme.breakpoints.down('sm')]: {
			width: '100%'
		}
	},

	smallLogo: {
		width: '15%',
		[theme.breakpoints.down('sm')]: {
			width: '15%'
		}
	},

	link: {
		color: COLORS.offWhite,
		fontWeight: 300
	},

	contactButton: {
		backgroundColor: COLORS.offWhite,

		'&:hover': {
			backgroundColor: COLORS.darkGreen,
			color: COLORS.offWhite
		}
	},

	mobileNav: {
		display: 'none',

		'& a': {
			border: '1px solid red',
			display: 'inline-block',
		},

		'& h6': {
			fontSize: theme.spacing(2)
		},

		[theme.breakpoints.down('md')]: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			width: '100%'
		}
	},

	menuButton: {
		// backgroundColor: COLORS.offWhite,
	},

	menuIcon: {
		color: COLORS.offWhite,
		fontSize: theme.spacing(5)
	}
}));

function HideOnScroll (props) {
    const { children } = props;
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired
};

const Header = (props) => {
	const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

	return (
		<HideOnScroll {...props}>
			<AppBar position="fixed" className={classes.root}>
				<Toolbar className={classes.toolbar}>
					<img src={logo} className={classes.logo} alt="Nigerian Coat of Arms" />
					<Grid container direction="row" spacing={1}>
						<Grid item xs={3}>
							<Link component={RouterLink} className={classes.link}>Consuler Services</Link>
						</Grid>
						<Grid item xs={3}>
							<Link to="viewNigeria" component={RouterLink} className={classes.link}>View Nigeria</Link>
						</Grid>
						<Grid item xs={3}>
							<Link component={RouterLink} className={classes.link}>News/Updates</Link>
						</Grid>
						<Grid item xs={3}>
							<Link component={RouterLink} className={classes.link}>Gallery</Link>
						</Grid>
					</Grid>
					<Button component={RouterLink} className={classes.contactButton}>Contact</Button>
				</Toolbar>
				<div className={classes.mobileNav}>
					{/* <Link to="/"> */}
						<img src={logo} alt="FX Blooms Logo" className={classes.smallLogo} />
					{/* </Link> */}
					<Typography variant="h6">Embassy of Nigeria Algiers</Typography>
					<IconButton edge="start" className={classes.menuButton} color="primary" aria-label="menu" onClick={toggleDrawer} >
						<MenuIcon className={classes.menuIcon} />
					</IconButton>
				</div>
				<MobileNav toggleDrawer={toggleDrawer} drawerOpen={drawerOpen} />
			</AppBar>
		</HideOnScroll>
	);
};

export default Header;
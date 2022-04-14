import { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as AnimatedLink } from 'react-scroll';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
	AppBar,
	Box,
	Button,
	IconButton,
	Slide,
	Toolbar,
	Typography,
	useScrollTrigger 
} from '@material-ui/core';
import { Menu as MenuIcon } from 'mdi-material-ui';

import { COLORS } from '../../utils/constants';
import logo from '../../images/coat-of-arms.png';

import MobileNav from './MobileNav';
import { GALLERY, NEWS, SERVICES, VIEW_NIGERIA } from '../../routes';

const useStyles = makeStyles((theme) => ({
	root: {
		flexWrap: 1,
	},

	toolbar: {
		display: 'grid',
		gridTemplateColumns: '0.5fr 4fr 0.5fr',
		columnGap: theme.spacing(5),

		[theme.breakpoints.down('md')]: {
			display: 'none'
		}
	},

	logo: {
		width: '40%',
		[theme.breakpoints.down('sm')]: {
			width: '100%'
		}
	},

	links: {
		display: 'grid',
		gridTemplateColumns: 'repeat(5, 1fr)',
		justifyContent: 'center',
	},

	smallLogo: {
		width: '15%',
		[theme.breakpoints.down('sm')]: {
			width: '15%'
		}
	},

	link: {
		color: COLORS.offWhite,
		cursor: 'pointer',
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
	const location = useLocation();

    const [drawerOpen, setDrawerOpen] = useState(false);

	const links = [
		{ url: '/', text: 'Home'},
		{ url: SERVICES, text: 'Consuler Services' },
		{ url: VIEW_NIGERIA, text: 'View Nigeria' },
		{ url: NEWS, text: 'News/Updates' },
		{ url: GALLERY, text: 'Gallery' }
	];

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

	return (
		<HideOnScroll {...props}>
			<AppBar position="fixed" className={classes.root}>
				<Toolbar className={classes.toolbar}>
					<RouterLink to="/"><img src={logo} className={classes.logo} alt="Nigerian Coat of Arms" /></RouterLink>
					<Box component="div" className={classes.links}>
						{links.map((link, index) => {
							if (location.pathname === '/') {
								return (
									<AnimatedLink 
										key={index}
										to={link.url} 
										// activeClass={classes.activeLink} 
										spy={true}
										smooth={true}
										offset={-70}
										duration={500}
										className={classes.link}
										// className={clsx({ [classes.link]: scrollPosition < 100, [classes.scrollingLink]: scrollPosition > 100 })}
									>
										{link.text}
									</AnimatedLink>
								)
							}
							return (
								<RouterLink 
									key={index}
									to={link.url} 
									className={classes.link}
									// className={clsx({ [classes.link]: scrollPosition < 100, [classes.scrollingLink]: scrollPosition > 100 })}
								>
									{link.text}
								</RouterLink>
							);
						})}
					</Box>
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
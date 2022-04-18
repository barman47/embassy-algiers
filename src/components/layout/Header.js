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
	Link,
	List,
	ListItem,
	Menu,
	Slide,
	Toolbar,
	Typography,
	useScrollTrigger 
} from '@material-ui/core';
import { Menu as MenuIcon } from 'mdi-material-ui';

import { COLORS } from '../../utils/constants';
import logo from '../../images/coat-of-arms.png';

import MobileNav from './MobileNav';
import { 
	ECONOMY,
	GALLERY, 
	GOVERNMENT_AND_POLITICS, 
	NEWS, 
	SERVICES,
	TOURISM,
	TRADE_AND_INVESTMENT,
	VIEW_NIGERIA 
} from '../../routes';

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
		gridTemplateColumns: 'repeat(6, 1fr)',
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
		fontWeight: 300,
		textDecoration: 'none'
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
	const [anchorEl, setAnchorEl] = useState(null);
	const [anchorEl2, setAnchorEl2] = useState(null);

	const links = [
		{ url: '/', text: 'Home'},
		{ url: SERVICES, text: 'Consuler Services' },
		{ url: NEWS, text: 'News/Updates' },
		{ url: GALLERY, text: 'Gallery' }
	];

	const viewNigeriaLinks = [
		{ url: VIEW_NIGERIA, text: 'About Nigeria'},
		{ url: TOURISM, text: 'Tourism' },
		{ url: TRADE_AND_INVESTMENT, text: 'Trade and Investment' },
		{ url: ECONOMY, text: 'Nigerian Economy' },
		{ url: GOVERNMENT_AND_POLITICS, text: 'Governmet & Politics' }
	];

	const nigerianNewspapers = [
		{ url: 'https://punchng.com/', text: 'Punch'},
		{ url: 'https://www.newswatchngr.com/', text: 'Newswatch' },
		{ url: 'https://guardian.ng/', text: 'Guardian' },
		{ url: 'https://www.vanguardngr.com/', text: 'Vanguard' },
		{ url: 'https://www.sunnewsonline.com/', text: 'The Sun' }
	];

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };


	const handleClick = (event) => {
		event.preventDefault();
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClick = (event) => {
		event.preventDefault();
		setAnchorEl2(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleClose2 = () => {
		setAnchorEl2(null);
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
						<Typography 
							className={classes.link}
							variant="body2"
							component="p"
							onClick={handleClick}
						>
							About Nigeria
						</Typography>
						<Typography 
							className={classes.link}
							variant="body2"
							component="p"
							onClick={handleMenuClick}
						>
							Nigerian Newspapers
						</Typography>
					</Box>
					<Button component={RouterLink} className={classes.contactButton}>Contact</Button>
					<Menu
						id="view-nigeria-menu"
						anchorEl={anchorEl2}
						keepMounted
						open={Boolean(anchorEl2)}
						onClose={handleClose2}
					>
						<List>
							{nigerianNewspapers.map((link, index) => (
								<ListItem onClick={handleClose} ><Link component="a" href={link.url} target="_blank">{link.text}</Link></ListItem>
							))}
						</List>
					</Menu>
					<Menu
						id="view-nigeria-menu"
						anchorEl={anchorEl}
						keepMounted
						open={Boolean(anchorEl)}
						onClose={handleClose}
					>
						<List>
							{viewNigeriaLinks.map((link, index) => (
								<ListItem key={index}><Link component={RouterLink} to={link.url}>{link.text}</Link></ListItem>
							))}
							<ListItem onClick={handleClose} ><Link component="a" href="https://portal.immigration.gov.ng/" target="_blank">Immigration</Link></ListItem>
						</List>
					</Menu>
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
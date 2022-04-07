import { makeStyles, Typography } from '@material-ui/core';

import { COLORS } from '../../utils/constants';

const mainSection = makeStyles((theme) => ({
    root: {
      	backgroundColor: theme.palette.primary.main,
		padding: [[theme.spacing(1), 0]]
    },

    text: {
		color: COLORS.offWhite,
		fontWeight: 300,
		textAlign: 'center'
    },
}));

const Footer = () => {
  	const classes = mainSection();

	return (
		<footer className={classes.root} >
			<Typography variant="subtitle2" component="p" className={classes.text}> Nigerian Embassy Algiers, Algeria. &copy; {new Date().getFullYear()} All rights reserved.</Typography>
		</footer>    
	);
}

export default Footer;
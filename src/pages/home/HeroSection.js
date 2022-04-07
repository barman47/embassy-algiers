import { makeStyles, Box, Typography } from '@material-ui/core';

import background from '../../images/building.jpg';
import { COLORS } from '../../utils/constants';

const mainSection = makeStyles((theme) => ({
    bg: {
		height: '100vh',
		width: '100%',
		position: 'relative',
		backgroundImage:`url(${background})`, 
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',

		[theme.breakpoints.down('sm')]: {
			height: '50vh'
		}
    },

	overlay: {
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '100%',

		'& h5': {
			color: COLORS.offWhite,
			fontWeight: 'bold',
			position: 'relative',
			
			[theme.breakpoints.down('sm')]: {
				fontSize: theme.spacing(2)
			}
		}
	}
}));

const HeroSection = () => {
  const classes = mainSection();

	return (
		<Box className={classes.bg} >
			<Box className={classes.overlay}>
				<Typography variant="h5">THE OFFICIAL WEBSITE OF THE EMBASSY OF NIGERIA ALGIERS</Typography>
			</Box>
		</Box>
	);
};

export default HeroSection;

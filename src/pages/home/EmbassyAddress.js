import { Typography, makeStyles } from '@material-ui/core';
// import { makeStyles } from '@mui/styles';

import { COLORS, SHADOW } from '../../utils/constants'
import img from '../../images/ambassador.jpg'

const embassyAddress = makeStyles((theme) => ({
	root: {
		marginTop: theme.spacing(5),
		paddingLeft: theme.spacing(4),
		paddingRight: theme.spacing(4),

		[theme.breakpoints.down('sm')]: {
			paddingLeft: theme.spacing(2),
			paddingRight: theme.spacing(2),
		},
	},

	content: {
		display: 'grid',
		gridTemplateColumns: 'repeat(2, 1fr)',

		[theme.breakpoints.down('sm')]: {
			gridTemplateColumns: '1fr'	
		},

		'& div:first-child': {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',

			'& img': {
				borderRadius: '50%',
				boxShadow: SHADOW,
				width: '50%'
			}
		}
	},

	name: {
		color: COLORS.offBlack,
		fontWeight: 600,
		marginTop: theme.spacing(2)
	},

	title: {
		fontWeight: 300
	},

    text: {
      	backgroundColor: '#228c2210',
		borderRadius: theme.shape.borderRadius,
		padding: [[theme.spacing(2), theme.spacing(4)]],

		'& h5': {
			color: theme.palette.primary.main,
			fontWeight: 600,
			marginBottom: theme.spacing(2),

			[theme.breakpoints.down('sm')]: {
				color: theme.palette.primary.main,
				fontSize: theme.spacing(2.5),
				textAlign: 'center'
			},
		},

		[theme.breakpoints.down('sm')]: {
			marginTop: theme.spacing(2),
			padding: theme.spacing(2)
		}
    },
}));

export default function EmbAddress() {
  const classes = embassyAddress();

	return (
		<section className={classes.root}>
			<div className={classes.content}>
				<div>
					<img src={img} alt="Ambassador" />
					<Typography variant="h6" className={classes.name}>Muhammed Abdullahi Mabdul</Typography>
					<Typography variant="subtitle1" component="p" className={classes.title}>Ambassador/Head of Mission</Typography>
				</div>
				<div className={classes.text}>
					<Typography variant="h5">From the Desk of the Ambassador</Typography>
					<Typography variant="subtitle1" component="p">
						It is my great pleasure to welcome you to the official website of the Embassy of Nigeria, Algiers. The website is intended to provide a more efficient and user friendly service to the general public. It contained a great deal of information to satisfy your enquiries on the services we provide, especially to those planning to visit Nigeria for pleasure or business or in need of any other forms of assistance from the Embassy. We have also set up a portal for Nigerians resident in Algeria to register with us, in order to provide an interactive service between the Embassy and our fellow citizens. It is my hope that you will find the website useful.
					</Typography>
					<Typography variant="subtitle1" component="p">Thank you.</Typography>
				</div>
			</div>
		</section>
	);
};
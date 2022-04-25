import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Link, Typography } from '@material-ui/core';
import { ApplicationCog } from 'mdi-material-ui';

import { COLORS } from '../../utils/constants';
import { 
	SERVICES,
	TRAVEL_REQUIREMENTS,
	VISA_APPLICATION
} from '../../routes';

import ETC from '../../assets/docs/emergency-travel-certificate.pdf';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: [[theme.spacing(2), theme.spacing(5)]],

		'& h4': {
			fontWeight: 500,
			marginBottom: theme.spacing(2),
			textAlign: 'center'
		},

		'& h6': {
			fontWeight: 300,
			textAlign: 'center'
		}
	},

	subtitle: {
		marginBottom: theme.spacing(5)
	},

	services: {
		display: 'grid',
		gridTemplateColumns: 'repeat(4, 1fr)',
		gap: theme.spacing(5),

		[theme.breakpoints.down('md')]: {
			gridTemplateColumns: 'repeat(2, 1fr)'
		},
		[theme.breakpoints.down('sm')]: {
			gridTemplateColumns: '1fr'
		}
	},

	service: {
		border: `1px solid ${COLORS.borderColor}`,
		borderRadius: theme.shape.borderRadius,
		display: 'flex',
		flexDirection: 'column',
		// justifyContent: 'center',
		alignItems: 'center',
		padding: theme.spacing(3),

		[theme.breakpoints.down('sm')]: {
			padding: theme.spacing(2)
		},

		'& h5': {
			marginBottom: theme.spacing(2),
			textAlign: 'center'
		},
	},

	serviceIcon: {
		color: theme.palette.primary.main,
		marginBottom: theme.spacing(2),
		fontSize: theme.spacing(4)
	},
	
	description: {
		color: COLORS.offBlack,
		marginBottom: theme.spacing(2)
	},

	applyButton: {
		// marginBottom: theme.spacing(2)
	},
}));

const Services = () => {
	const classes = useStyles();
	return (
		<section className={classes.root} id={SERVICES}>
			<Typography className={classes.headertext} variant="h4">Consuler Services</Typography>
			<div className={classes.services}>
				<section xs={12} lg={4} className={classes.service}>
					<ApplicationCog className={classes.serviceIcon} />
					<Typography variant="h5" color="primary">Visa Application</Typography>
					<Typography variant="subtitle2" component="p" className={classes.description}>Applicaton for temporary work permit, rourism visa, business visa and STR visa.</Typography>
					<Button to={VISA_APPLICATION} component={RouterLink} className={classes.applyButton} variant="outlined" color="primary">Apply here</Button>
				</section>
				<section xs={12} lg={4} className={classes.service}>
					<ApplicationCog className={classes.serviceIcon} />
					<Typography variant="h5" color="primary">Passport Application</Typography>
					<Typography variant="subtitle2" component="p" className={classes.description}>The Embassy of Nigeria in Algiers does not process passport application. But applicants can visit the <Link component="a" underline="always" href="https://portal.immigration.gov.ng/passport/epassport" target="_blank">Nigeria Immigration Service</Link> website for more information on how to apply.</Typography>
					<Button href="https://portal.immigration.gov.ng/passport/epassport" component="a" target="_blank" className={classes.applyButton} variant="outlined" color="primary">Apply here</Button>
				</section>
				<section xs={12} lg={4} className={classes.service}>
					<ApplicationCog className={classes.serviceIcon} />
					<Typography variant="h5" color="primary">Emergency Travel Certificate(ETC)</Typography>
					<Typography variant="subtitle2" component="p" className={classes.description}>Application for Emergency Travell Certificate.</Typography>
					<Button component="a" href={ETC} target="_blank" className={classes.applyButton} variant="outlined" color="primary">Apply here</Button>
				</section>
				<section xs={12} lg={4} className={classes.service}>
					<ApplicationCog className={classes.serviceIcon} />
					<Typography variant="h5" color="primary">Travelling Requirements</Typography>
					<Typography variant="subtitle2" component="p" className={classes.description}>Information for travellers visiting Nigeria. This includes information about immigration, COVID requirements, etc.</Typography>
					<Button to={TRAVEL_REQUIREMENTS} component={RouterLink} className={classes.applyButton} variant="outlined" color="primary">Apply here</Button>
				</section>
			</div>
		</section>
	);
}

export default Services;
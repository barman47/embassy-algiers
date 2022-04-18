import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import { ApplicationCog } from 'mdi-material-ui';

import { COLORS } from '../../utils/constants';
import { 
	PASSPORT_APPLICATION,
	SERVICES,
	TRAVEL_REQUIREMENTS 
} from '../../routes';

import ETC from '../../assets/docs/emergency-travel-certificate.pdf';
import formulaire from '../../assets/docs/formulaire visa NigÃ©ria.pdf';
import imm22 from '../../assets/docs/Nigeria embassy visa form imm22.pdf';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: [[theme.spacing(2), theme.spacing(4)]],

		'& h4': {
			fontWeight: 500,
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
		gap: theme.spacing(3),

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
		justifyContent: 'center',
		alignItems: 'center',
		padding: theme.spacing(1),

		'& div': {
			// marginLeft: theme.spacing(4)
		},

		'& h5': {
			marginBottom: theme.spacing(2),
			textAlign: 'center'
		},
	},

	serviceIcon: {
		color: theme.palette.primary.main,
		fontSize: theme.spacing(4)
	},
	
	description: {
		color: COLORS.offBlack,
		marginBottom: theme.spacing(2)
	},

	applyButton: {
		marginBottom: theme.spacing(2)
	},
}));

const Services = () => {
	const classes = useStyles();
	return (
		<section className={classes.root} id={SERVICES}>
			<Typography className={classes.headertext} variant="h4">Consuler Services</Typography>
			<Typography variant="h6" className={classes.subtitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ea.</Typography>
			<div className={classes.services}>
				<section item xs={12} lg={4} className={classes.service}>
					<ApplicationCog className={classes.serviceIcon} />
					<Typography variant="h5" color="primary">Visa Application</Typography>
					<Typography variant="subtitle2" component="p" className={classes.description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita esse tempore a dicta iusto illum voluptas possimus animi quam architecto.</Typography>
					<Button to={formulaire} component={RouterLink} className={classes.applyButton} target="_blank" variant="outlined" color="primary">Apply here</Button>
				</section>
				<section item xs={12} lg={4} className={classes.service}>
					<ApplicationCog className={classes.serviceIcon} />
					<Typography variant="h5" color="primary">Temporary work permit</Typography>
					<Typography variant="subtitle2" component="p" className={classes.description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita esse tempore a dicta iusto illum voluptas possimus animi quam architecto.</Typography>
					<Button href={imm22} component="a" className={classes.applyButton} target="_blank"variant="outlined" color="primary">Apply here</Button>
				</section>
				<section item xs={12} lg={4} className={classes.service}>
					<ApplicationCog className={classes.serviceIcon} />
					<Typography variant="h5" color="primary">Passport Application</Typography>
					<Typography variant="subtitle2" component="p" className={classes.description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita esse tempore a dicta iusto illum voluptas possimus animi quam architecto.</Typography>
					<Button to={PASSPORT_APPLICATION} component={RouterLink} className={classes.applyButton} variant="outlined" color="primary">Apply here</Button>
				</section>
				<section item xs={12} lg={4} className={classes.service}>
					<ApplicationCog className={classes.serviceIcon} />
					<Typography variant="h5" color="primary">Emergency Travel Certificate(ETC)</Typography>
					<Typography variant="subtitle2" component="p" className={classes.description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita esse tempore a dicta iusto illum voluptas possimus animi quam architecto.</Typography>
					<Button component="a" href={ETC} target="_blank" className={classes.applyButton} variant="outlined" color="primary">Apply here</Button>
				</section>
				<section item xs={12} lg={4} className={classes.service}>
					<ApplicationCog className={classes.serviceIcon} />
					<Typography variant="h5" color="primary">Travelling Requirements</Typography>
					<Typography variant="subtitle2" component="p" className={classes.description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita esse tempore a dicta iusto illum voluptas possimus animi quam architecto.</Typography>
					<Button to={TRAVEL_REQUIREMENTS} component={RouterLink} className={classes.applyButton} variant="outlined" color="primary">Apply here</Button>
				</section>
			</div>
		</section>
	);
}

export default Services;
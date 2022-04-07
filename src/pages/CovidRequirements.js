import { makeStyles } from '@material-ui/core/styles';
import { 
  Container, 
  Typography
} from '@material-ui/core';

import Layout from '../components/layout';

const useStyles = makeStyles((theme) => ({
    root: {
		display: 'flex',
		flexDirection: 'column',
        paddingBottom: theme.spacing(5),
        paddingTop: theme.spacing(14),

		'& h4': {
			textAlign: 'center'
		}
    }
}));

const CovidRequirements = () => {
  const classes = useStyles();
  return (
    <Layout title="COVID-19 Requirements">
        <Container className={classes.root}>
            <Typography variant="h5">COVID-19 REQUIREMENTS FOR TRAVELLERS RETURNING TO NIGERIA</Typography><br/>
            <Typography variant="body2" component="p">The Presidential Steering Committee on COVID-19 (PSC-COVID-19) has reviewed the protocol for all return travellers to Nigeria.</Typography>
            <Typography variant="body2" component="p">Passengers travelling to Nigeria from any country must carry out a COVID-19 PCR test within 48 hours to the day of travel and test NEGATIVE. Travellers must register and make payment on the Nigeria International Travel Portal (NITP) for a repeat PCR test to be carried out after arrival.</Typography>
            <Typography variant="body2" component="p">Upon arrival in Nigeria,</Typography>
            <ul>
                <li>Fully vaccinated travellers are required to conduct a COVID-19 PCR test on day 2 of arrival</li>
                <li>Unvaccinated and partially vaccinated passengers are required to observe a mandatory 7-day self-isolation in addition to a COVID-19 PCR test on days 2 and 7 post-arrival.</li>
            </ul>
            <Typography variant="body2" component="p">Passengers who do not adhere to the travel protocol will face the penalty as stipulated by the PSC-COVID-19.</Typography>
            <Typography variant="body2" component="p">Visit the ncdc portal for more information: <a href="https://covid19.ncdc.gov.ng/nitpfaq" target="_blank" rel="noreferrer">https://covid19.ncdc.gov.ng/nitpfaq</a></Typography>
        </Container>
    </Layout>
  );
}

export default CovidRequirements;
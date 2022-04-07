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

const FourthWave = () => {
  const classes = useStyles();
  return (
    <Layout title="COVID 4th Wave">
        <Container className={classes.root}>
            <Typography variant="h5">COVID-19: Nigeria inches closer to fourth wave, records 1,424 new cases Wednesday</Typography><br/>
            <Typography variant="body2" component="p">Since the third wave eased, Nigeria for the first time crossed 1,000 new daily infection mark on Wednesday with a total of 1,424 new cases but without fatality.</Typography>
            <Typography variant="body2" component="p">As the festive season approaches and travel restrictions are being resolved between Nigeria and other countries, indications have emerged that the country may be inching closer toa fourth wave of the coronavirus pandemic.</Typography>
            <Typography variant="body2" component="p">Since the third wave eased, Nigeria for the first time crossed 1,000 new daily infection mark on Wednesday with a total of 1,424 new cases.</Typography>
            <Typography variant="body2" component="p">The country, however, recorded no fatality from the pandemic in the latest update.</Typography>
            <Typography variant="body2" component="p">The Nigeria Centre for Disease Control (NCDC), which disclosed this on its Facebook page late Wednesday night, said the new infections were recorded across 14 states of the federation and the Federal Capital Territory (FCT).</Typography>
            <Typography variant="body2" component="p">The new infection figure, which ranks the highest daily tally since the surge in cases began a few days ago, has increased Nigeria’s infection toll to 220,020.</Typography>
            <Typography variant="body2" component="p">The country’s infection toll has been on the rise in the last six days with over 4,500 infections recorded within the period.</Typography>
            <Typography variant="body2" component="p">According to the NCDC, the fatality toll still stands at 2,983 with no fresh fatality recorded while a total of 211,292 have so far been successfully treated and discharged.</Typography>
            <Typography variant="h6">Breakdown</Typography>
            <Typography variant="body2" component="p">The breakdown of the NCDC data shows that Lagos State, with 796 new cases on Wednesday, maintained its position as the country’s epicentre of the pandemic.
Within the last 24 hours, more than 1,000 cases have been recorded in the densely populated city which doubles as Nigeria’s commercial hub.
</Typography>
            <Typography variant="body2" component="p">Delta State in the South-south followed Lagos on the log with a backlog of 152 cases for December 13 and 14, 2021.</Typography>
            <Typography variant="body2" component="p">The FCT came third with 130 cases, and closely followed by Edo State with 129 cases; Oyo State, 82; Ondo and Rivers States recorded 39 cases each.</Typography>
            <Typography variant="body2" component="p">Kaduna State reported 15 cases; Enugu and Anambra States recorded nine and eight cases respectively while Kwara and Ogun states reported seven cases each.</Typography>
            <Typography variant="body2" component="p">While Bayelsa and Kano states reported four cases each, Akwa Ibom recorded only three cases to report the lowest number of cases on Wednesday.</Typography>
            <Typography variant="body2" component="p">The NCDC added that Bauchi, Ekiti, Osun and Zamfara States reported that they recorded no cases on Wednesday.</Typography>
        </Container>
    </Layout>
  );
}

export default FourthWave;
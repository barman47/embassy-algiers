import { 
    Box, 
    Link,
    Typography 
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Layout from '../../components/layout';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(10, 10, 5, 10),

        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(15, 5, 5, 5),
        },

        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(10, 3, 5, 3),
        },

        '& h5': {
            fontWeight: 700,
            marginBottom: theme.spacing(2),

            [theme.breakpoints.down('sm')]: {
                fontSize: theme.spacing(2)
            }
        },

        '& h6': {
            fontWeight: 700,
            marginBottom: theme.spacing(2),

            [theme.breakpoints.down('sm')]: {
                fontSize: theme.spacing(1.8)
            }
        },

        '& p': {
            fontWeight: 300,
            marginBottom: theme.spacing(2),

            [theme.breakpoints.down('sm')]: {
                textAlign: 'justify',
            }
        }
    }
}));

const TravellingRequirements = () => {
    const classes = useStyles();

    return (
        <Layout title="Travelling Requirements">
            <Box component="section" className={classes.root}>
                <Typography variant="h5" align="center">TRAVELLING REQUIREMENTS &amp; APPLICATION FORMS</Typography>
                <Box component="article">
                    <Typography variant="h6">Immigration:</Typography>
                    <Typography variant="body1" component="p">Citizens of the Economic of West African States (ECOWAS) do not require entry permits into Nigeria. However, all visitors not exempted from entry permits are advised to apply and obtain appropriate visas from the nearest Nigerian embassy, High Commission, or consulate before entry into Nigeria, as visas cannot be issued at the port of entry. Early application is advisable to avoid delays.</Typography>
                </Box>
                <Box component="article">
                    <Typography variant="h6">Vaccination:</Typography>
                    <Typography variant="body1" component="p">Health authorities recommend vaccination against cholera and yellow fever from all visitors. Anti-malaria vaccination is also recommended.</Typography>
                </Box>
                <Box component="article">
                    <Typography variant="h6">Covid requirements:</Typography>
                    <Typography variant="body1" component="p">Government Covid Requirement before Travelling:  Visit this link for full information. ncdc </Typography>
                    <Typography variant="body2" component="p">
                        <Link component="a" href="https://ncdc.gov.ng/" target="_blank">https://ncdc.gov.ng/</Link>
                    </Typography>
                </Box>
                <Box component="article">
                    <Typography variant="h6">Export of Antiquities:</Typography>
                    <Typography variant="body1" component="p">No art treasure may be taken out of the country without written approval from the appropriate Nigerian authorities. This approval must come from the Department of Antiquities or National Museum in Lagos or Jos. The law prohibiting the export of all forms of antiquity, including all ritual as well as contemporary art objects is strictly enforced.</Typography>
                    <Typography variant="body1" component="p">
                        For all enquiries on consular matters (visa and immigration issues), please send mail to <Link href="mailto:contact@embassyofalgiers.com" component="a">(contact@embassyofalgiers.com)</Link>  or call <Link component="a" href="tel:0012-8-0000">0012-8-0000</Link> on Mondays, Tuesdays, and Thursdays from 10:00 to 13:00.
                    </Typography>
                    <Typography variant="body1" component="p">Emergency Certificate (40.2 KiB)</Typography>
                    <Typography variant="body1" component="p">Renunciation (1.6 MiB)</Typography>
                </Box>
            </Box>
        </Layout>
    );
};

export default TravellingRequirements;
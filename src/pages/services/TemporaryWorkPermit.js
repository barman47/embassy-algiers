import { 
    Box,
    Link,
    Typography 
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Layout from '../../components/layout';

import visaApplicationForm from '../../assets/docs/visa-application.pdf';

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

        '& article:not(first-child)': {
            marginTop: theme.spacing(5)
        },

        '& h6': {
            fontWeight: 700,
            marginBottom: theme.spacing(2),
            textTransform: 'uppercase',

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
        }, 

        '& ol li': {
            fontWeight: 300,
            marginBottom: theme.spacing(1)
        },

        '& ul li': {
            fontWeight: 300,
            marginBottom: theme.spacing(1)
        }
    }
}));

const TemporaryWorkPermit = () => {
    const classes = useStyles();

    return (
        <Layout title="Temporary Work Permit">
            <Box component="section" className={classes.root}>
                <Typography variant="h5" align="center">APPLICATION PROCEDURE FOR TEMPORARY WORK PERMIT (TWP)</Typography>
                <Box component="article">
                    <Typography variant="body1" component="p"><strong>Eligibility</strong></Typography>
                    <Typography variant="body1" component="p">Experts invited by Corporate Bodies to provide specialized skilled services, such as after sales Installation/commissioning/upgradingl Maintenance/Repairs of equipment and machinery, frâining lcapactty building for Nigerian staff, Audit of machineryl equipment and financial records</Typography>
                    <Typography variant="body1" component="p"><strong>Requirements:</strong></Typography>
                    <ul>
                        <li><strong>For the purpose of Tourism</strong></li>
                        <ul>
                            <li>Visa approval Letter (pre-approved visa letter) valid for 90 days from the date of issuance</li>
                            <li>Passport with 6 months validity and at least 2 blank pages for visa endorsement</li>
                            <li>2 passport sized photographs (35/40mm) on a white background taken within the last 6 months.</li>
                            <li>Duly completed Visa Form IMM22</li>
                            <li>Evidence of payment of Visa fee.</li>
                        </ul>
                    </ul>
                    <Typography variant="body1" component="p"><strong>Validity:</strong></Typography>
                    <Typography variant="body1" component="p">Valid for 90 days</Typography>
                    <Typography variant="body1" component="p"><strong>NB:</strong> <em>Applicants can be invited for interview</em></Typography>
                    <Typography variant="body1" component="p"><strong>How to Apply:</strong></Typography>
                    <Typography variant="body1" component="p"><strong>Step 1:</strong></Typography>
                    <ol>
                        <li>Corporate Body in Nigeria files a formal request to the CGI on your behalf stating the following:</li>
                        <ul>
                            <li>Name of visitor</li>
                            <li>Passport number</li>
                            <li>Nationality</li>
                            <li>Purpose and duration of visit</li>
                            <li>Mission where Visa to be issued</li>
                            <li>Acceptance of immigration</li>
                        </ul>
                        <li>The application shall be attached with the following documents in support of the application:</li>
                        <ul>
                            <li>Company profile*</li>
                            <li>Certificate of Incorporation*</li>
                            <li>CACA &amp; 7*</li>
                            <li>Copy of Data page of the Expatriate's Passport</li>
                            <li>Evidence of existing contract or purchase / importation of machinery or equipment</li>
                            <li>Any other relevant document</li>
                        </ul>
                    </ol>
                    <Typography variant="body1" component="p"><em><strong>Eligibility: </strong>In the case of TWP, approval will be forwarded to the Mission receiving the application</em></Typography>
                    <Typography variant="body1" component="p">*These requirements are for first time applications only.</Typography>
                    <Typography variant="body1" component="p"><strong>Step 2:</strong></Typography>
                    <Typography variant="body1" component="p">Pay online and print the payment receipt</Typography>
                    <Typography variant="body1" component="p"><em>NB: Successfully online payment is NOT AN APPROVAL for TWP</em></Typography>
                    <Typography variant="body1" component="p"><strong>Step 3:</strong></Typography>
                    <Typography variant="body1" component="p">Affix 2 passport sized photographs to completed with the other requirements and submit through Visa Form IMM22, along any of the following:</Typography>
                </Box>
                <Link href={visaApplicationForm} component="a" target="_blank" underline="always">Download TWP Form</Link>
            </Box>
        </Layout>
    );
};

export default TemporaryWorkPermit;
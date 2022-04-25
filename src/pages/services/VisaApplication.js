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

const VisaApplication = () => {
    const classes = useStyles();

    return (
        <Layout title="Visa Application">
            <Box component="section" className={classes.root}>
            <Box component="article">
                    <Typography variant="h6">APPLICATION PROCEDURE FOR TEMPORARY WORK PERMIT (TWP)</Typography>
                    <Typography variant="body1" component="p"><strong>Eligibility</strong></Typography>
                    <Typography variant="body1" component="p">Experts invited by Corporate Bodies to provide specialized skilled services, such as after sales Installation/commissioning/upgrading/maintenance/repairs of equipment and machinery, training/capacity building for Nigerian staff, Audit of machinery/equipment and financial records</Typography>
                    <Typography variant="body1" component="p"><strong>Requirements:</strong></Typography>
                    <ul>
                        <li>Visa approval Letter (pre-approved visa letter) valid for 90 days from the date of issuance</li>
                        <li>Passport with 6 months validity and at least 2 blank pages for visa endorsement</li>
                        <li>2 passport sized photographs (35/40mm) on a white background taken within the last 6 months.</li>
                        <li>Duly completed Visa Form IMM22</li>
                        <li>Evidence of payment of Visa fee.</li>
                    </ul>
                    <Typography variant="body1" component="p"><strong>Validity:</strong></Typography>
                    <Typography variant="body1" component="p">Valid for 90 days</Typography>
                    <Typography variant="body1" component="p"><strong>NB:</strong> <em>Applicant(s) can be invited for interview</em></Typography>
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
                            <li>CAC 2 &amp; 7*</li>
                            <li>Copy of Data page of the Expatriate's Passport</li>
                            <li>Evidence of existing contract or purchase / importation of machinery or equipment</li>
                            <li>Any other relevant document</li>
                        </ul>
                    </ol>
                    <Typography variant="body1" component="p"><em><strong>Eligibility: </strong>In the case of TWP, approval will be forwarded to the Mission receiving the application</em></Typography>
                    <Typography variant="body1" component="p">*These requirements are for first time applications only.</Typography>
                    <Typography variant="body1" component="p"><strong>Step 2:</strong></Typography>
                    <Typography variant="body1" component="p">Pay online and print the payment receipt</Typography>
                    <Typography variant="body1" component="p"><em>NB: Successful online payment is NOT AN APPROVAL for TWP</em></Typography>
                    <Typography variant="body1" component="p"><strong>Step 3:</strong></Typography>
                    <Typography variant="body1" component="p">Affix 2 passport sized photographs to completed with the other requirements and submit through Visa Form IMM22, along any of the following:</Typography>
                </Box>
                <Typography variant="h5" align="center">VISA APPLICATION</Typography>
                <Box component="article">
                    <Typography variant="h6">Application Procedure for Tourist Visa</Typography>
                    <Typography variant="body1" component="p"><strong>Eligibility</strong></Typography>
                    <Typography variant="body1" component="p">Tourist Visa is available to citizens of all countries except ECOWAS Nationals who do not require visa to visit Nigeria and other countries which Nigeria has entered into visa abolition agreements.</Typography>
                    <Typography variant="body1" component="p"><strong>Categories:</strong></Typography>
                    <ol>
                        <li>Foreign Travellers who wish to visit Nigeria for the purpose of Tourism.</li>
                        <li>Foreign Travellers who wish to visit family and friends.</li>
                    </ol>
                    <Typography variant="body1" component="p"><strong>Requirements:</strong></Typography>
                    <ul>
                        <li><strong>For the purpose of Tourism</strong></li>
                        <ol>
                            <li>International Passport valid for at least 6 months with at least 2 blank visa pages for endorsement.</li>
                            <li>4 passport sized photographs (35/40mm) taken within the last 6 months on white background</li>
                            <li>Valid return ticket</li>
                            <li>Evidence of sufficient funds</li>
                            <li>Evidence of Hotel reservation</li>
                        </ol>
                        <li><strong>To visit family and friends</strong></li>
                        <ol>
                            <li>International Passport valid for at least 6 months with at least 2 blank visa pages for endorsement.</li>
                            <li>4 passport sized photographs (35/40mm) taken within the last 6 months on white background</li>
                            <li>Valid return ticket</li>
                            <li>Evidence of sufficient funds</li>
                            <li>Address of host in Nigeria or Evidence of hotel reservation.</li>
                            <li>Invitation letter from host in Nigeria.</li>
                        </ol>
                    </ul>
                    <Typography variant="body1" component="p"><strong>Validity:</strong></Typography>
                    <Typography variant="body1" component="p">Valid for 90 days</Typography>
                    <Typography variant="body1" component="p"><strong>Caution:</strong> <em>Note that this Visa is not valid for employment.</em></Typography>
                </Box>
                <Box component="article">
                    <Typography variant="h6">Application Procedure for Business Visa</Typography>
                    <Typography variant="body1" component="p">Obtainable at Nigerian Missions, except for special cases where <strong>Visa is issued on Arrival</strong> in Nigeria (See <strong>VOA</strong>) Business Visa is available to citizens of all countries except ECOWAS Nationals who do not require visa to visit Nigeria and other countries which Nigeria has entered into visa abolition agreements.</Typography>
                    <Typography variant="body1" component="p"><strong>Eligibility</strong></Typography>
                    <Typography variant="body1" component="p">Foreign Travelers who wish to visit Nigeria for the purpose of Meeting, Conference, Seminar, Contract Negotiation, Marketing, Sales, Purchase distribution of Nigerian Goods, Trade Fairs, Job Interviews, Training of Nigerians (Humanitarian Services), Emergency/Relief work, Crew members, Staff of NGOs, Staff of INGOs, Researchers, Musical Concerts.</Typography>
                    <Typography variant="body1" component="p"><strong>Requirements:</strong></Typography>
                    <ol>
                    <li>International Passport valid for at least 6 months with at least 2 blank visa pages for endorsement.</li>
                        <li>Two (2) recent passport sized (35/40mm) photographs.</li>
                        <li>Return ticket</li>
                        <li>Evidence of sufficient funds</li>
                        <li>Letter of invitation of host address in Nigeria</li>
                        <li>Copy of certificate of incorpration</li>
                    </ol>
                    <Typography variant="body1" component="p"><strong>Validity:</strong></Typography>
                    <Typography variant="body1" component="p">Valid for 90 days (not extendable)</Typography>
                    <Typography variant="body1" component="p"><strong>Caution:</strong> <em>Note that this Visa is not valid for employment.</em></Typography>
                </Box>
                <Box component="article">
                    <Typography variant="h6">Application Procedure for STR Visa</Typography>
                    <Typography variant="body1" component="p"><strong>Eligibility</strong></Typography>
                    <ol>
                        <li>Expatriate employees of companies and their dependants</li>
                        <li>Expatriate Technical officials of Missions</li>
                        <li>Foreign Students</li>
                        <li>Missionaires/Clerics and dependants</li>
                        <li>Research Fellows</li>
                        <li>Expatriate Staff of Non Governmental Organisations (NGOs) and their dependants</li>
                        <li>Expatriate Staff of International Non-Governmental Organisations (INGOs) and their dependants</li>
                        <li>Government Officials (GOs) and their dependants</li>
                        <li>Expatriates employed by companies operating in Free Zones and their dependants</li>
                    </ol>
                    <Typography variant="body1" component="p"><strong>Requirements for Principal</strong></Typography>
                    <ul>
                        <li>Formal application for STR Visa from Eployer/Institution accepting immigration responsiblity</li>
                        <li>Valid passport with a minimum of 6 months validity at least 2 blank pages for visa endorsment</li>
                        <li>4 passport sized photographs (35/40mm) taken within the last 6 months on white background</li>
                        <li>Duly completed Visa From IMM22</li>
                        <li>Expaûiate Quota Approval *</li>
                        <li>Evidence of financial support</li>
                        <li>Letters of offer of Appointment and Acceptance of offer</li>
                        <li>Educational qualifications and Curriculum Vitae</li>
                        <li>Extract of Board Resolution **</li>
                        <p><strong>Note</strong></p>
                        <li><em>Persons exempted from Quota: Expatriates of companies operating in the Free Zones, Foreign Students, Expatriate Technical Officials of Missions, Expatriate of International Non-Governmental Organizations (INGOs) and Government Officials.</em></li>
                        <li><em>** Applicable to CEOs, MDs and GMs of Companies</em></li>
                        <li><em>Important: Application for STR Visa should be made at Country of Residence</em></li>
                    </ul>
                    <Typography variant="body1" component="p"><strong>Requirements for Dependents</strong></Typography>
                    <ul>
                        <li>Evidence of Regularization of principal</li>
                        <li>Marriage Certificate of Spouse</li>
                        <li>Birth certificate for children confirming nexus</li>
                    </ul>
                </Box>
                <Link href={visaApplicationForm} component="a" target="_blank" underline="always">Download Visa Application Form</Link>
            </Box>
        </Layout>
    );
};

export default VisaApplication;
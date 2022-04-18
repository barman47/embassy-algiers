import { 
    Box, 
    Link,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography 
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Layout from '../../components/layout';
import passportFile from '../../assets/docs/passport-application.pdf';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(10, 10, 5, 10),

        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(15, 5, 5, 5),
        },

        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(10, 3, 5, 3),
        },

        '& h4': {
            fontWeight: 700,
            marginBottom: theme.spacing(3),

            [theme.breakpoints.down('sm')]: {
                fontSize: theme.spacing(2.5)
            },
        },

        '& h5': {
            fontWeight: 700,
            marginBottom: theme.spacing(2),

            [theme.breakpoints.down('sm')]: {
                fontSize: theme.spacing(2)
            },
        },

        '& h6': {
            fontWeight: 700,
            marginBottom: theme.spacing(2),

            [theme.breakpoints.down('sm')]: {
                fontSize: theme.spacing(1.8)
            },
        },

        '& p': {
            fontWeight: 700,
            marginBottom: theme.spacing(2),
        },

        '& ol li': {
            marginBottom: theme.spacing(2),
        },

        '& ul li': {
            marginBottom: theme.spacing(2),
        }
    },

    table: {
        margin: '0 auto',
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(2),
        width: '35%',

        [theme.breakpoints.down('md')]: {
            width: '70%'
        },

        [theme.breakpoints.down('md')]: {
            width: '100%'
        }
    }
}));

const PassportApplication = () => {
    const classes = useStyles();

    return (
        <Layout title="Passport Application">
            <Box component="section" className={classes.root}>
                <Typography variant="h4" align="center">How to Apply for a Nigerian Passport</Typography>
                <Link component="a" href={passportFile} target="_blank">Click here to download an adobe pdf format of the instructions below</Link>
                <Typography variant="h6">
                    Applicants are required to visit the&nbsp;
                    <Link component="a" underline="always" href="https://portal.immigration.gov.ng/passport/epassport" target="_blank">Nigeria Immigration Service</Link>
                    &nbsp;Website and fill the form online.
                </Typography>
                <Typography variant="h5">APPLICANTS ARE ADVISED TO APPLY SIX MONTHS BEFORE THE EXPIRATION OF THEIR PASSPORTS</Typography>
                <Typography variant="h5">PLEASE READ THE GUIDELINES FULLY BEFORE BEGINNING THE APPLICATION</Typography>
                <Typography variant="h5">THE SCHEDULE OF FEES FOR THE NIGERIAN E-(ECOWAS) PASSPORT ARE AS FOLLOWS:</Typography>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="left">32 Pages</TableCell>
                        <TableCell align="left">64 Pages</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align="left">Adult (18 to 59 years old)</TableCell>
                            <TableCell align="left">$77.00</TableCell>
                            <TableCell align="left">$137.00</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">Minor(0 to 17 years old)</TableCell>
                            <TableCell align="left">$106.00</TableCell>
                            <TableCell align="left">$137.00</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">Minor(0 to 17 years old)</TableCell>
                            <TableCell align="left">$77.00</TableCell>
                            <TableCell align="left">$137.00</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <Typography variant="h6">PLEASE NOTE THAT THE 10-YEAR PASSPORT BOOKLET WOULD SOON BE AVAILABLE! PLEASE WATCH OUT FOR FURTHER INFORMATION.</Typography>
                <Typography variant="h5">To begin the application</Typography>
                <ul>
                    <li>Have a Credit Card ready or Purchase the amount of Post Office money order required.</li>
                    <li>Go to NIS <Link to="a" href="https://portal.immigration.gov.ng/passport/epassport" target="_blank" underline="always">website</Link> for the electronic application.</li>
                    <li>Select Standard E-PASSPORT - The Official E-Passport is ONLY for Government Officials travelling abroad</li>
                    <li>Select <strong>UNITED STATES</strong> as processing country and <strong>New York</strong> as Office of Application.</li>
                </ul>
                <Typography variant="h5">PLEASE READ IN FULL THE GUIDELINES REGARDING PAYMENT ON THE START APPLICATION PAGE</Typography>
                <ul>
                    <li>Click on “START APPLICATION'. Choose from GOOGLE or YAHOO and create an account or if you have one, SIGN IN.</li>
                    <li>Complete the application online and print out a copy of the completed application before you submit for payment.</li>
                    <li>Complete the application form - PRINT then click submit</li>
                    <li>On successful submission of your application, you will come to a page that will contain your reference ID which will also be emailed to you from the Nigeria Immigration Service (NIS) – Close the screen to proceed to payment or to input further applications (UP to 6 applications)</li>
                    <li>Select method of payment (Money Order, Visa or American Express) and follow relevant steps.</li>
                    <Typography variant="body1" component="p"><strong>Note:</strong> You may choose to exit the application to make payment at a later stage. To return, go to www.innovate1services.com and sign in.</Typography>
                    <li>Upon making your electronic payment or after having entered and submitted your (USPS) money order details, you will first be e-mailed an acknowledgement. Please allow 1-2 business days for receipt of a confirmation payment e-mail from Innovate1.</li>
                    <Typography variant="body1" component="p">For assistance, <strong>contact Innovate1services on telephone number: +1(315)-203-8942</strong></Typography>
                    <li>To print out your receipt/acknowledgement slip, go to <a href="http://portal.immigration.gov.ng/visa/OnlineQueryStatus" target="_blank" rel="noreferrer">http://portal.immigration.gov.ng/visa/OnlineQueryStatus</a> enter your application type, Reference No., Application ID and click SEARCH RECORD</li>
                </ul>
                <Typography variant="h5">TO SET AN APPOINTMENT FOR PASSPORT INTERVIEW.</Typography>
                <Typography variant="body1" component="p">GO TO THE CONSULATE WEBSITE <a href="www.nigeriahouse.com" target="_blank">www.nigeriahouse.com</a> CLICK ON Schedule Passport Interview Appointment</Typography>
                <ul>
                    <li><strong>APPLICANT MUST BRING THIS DOCUMENT <span style={{ textDecoration: 'underline' }}>IN PERSON ON</span> THE GIVEN INTERVIEW DATE BETWEEN 9am - 12pm (Monday-Friday). Please take note that NO APPLICATION WILL BE ACCEPTED AFTER 1PM</strong></li>
                </ul>
                <Typography variant="body1" component="p">Please take note that <strong>NO APPLICATION WILL BE ACCEPTED AFTER 1PM</strong></Typography>
                <Typography variant="body1" component="p"><strong>Note:</strong> ALL APPLICATIONS ARE VALID FOR A PERIOD OF ONE (1) YEAR FROM THE DATE OF SUBMISSION ONCE THE TIME HAS LAPSED, APPLICANTS WILL BE REQUIRED TO RE-APPLY AND MAKE ANOTHER PAYMENT.</Typography>
                <Typography variant="h4">SUBMISSION OF APPLICATION AT THE CONSULATE</Typography>
                <Typography variant="h5">DOCUMENTS REQUIRED TO BE SUBMITTED BY EACH APPLICANT ON INTERVIEW DATE:</Typography>
                <ol>
                    <li>Copy of online application form (signed and dated)</li>
                    <li>Copy of Payment Confirmation Slip</li>
                    <li>Copy of Acknowledgement Slip</li>
                    <li>Expired Nigerian passport (if not presented, will be considered lost passport)</li>
                    <li>Photocopy of the data page (which clearly shows photograph, full name and date of birth)</li>
                    <li>Prepaid, Self-Addressed USPS overnight express mail Envelope with Tracking number</li>
                    <li>Credit or Debit card for $30 administrative fee</li>
                </ol>
                <Typography variant="body1" component="p"><strong style={{ textDecoration: 'underline' }}>Note:</strong></Typography>
                <ul>
                    <li>Photographs are not required as these will be taken at the Consulate on the interview date.</li>
                    <li>Every applicant must appear in person at the Consulate for biometric capture (finger and thumb printing), which are necessary to produce the E-passport.</li>
                </ul>
                <Typography variant="h5">FOR MINORS (FIRST TIME APPLICANTS):</Typography>
                <Typography variant="h6"><strong>Note:</strong> THE E-PASSPORT DOES NOT ALLOW CHILD ENDORSEMENT! PARENTS SHOULD APPLY FOR INDIVIDUAL PASSPORT FOR EACH CHILD, THIS INCLUDES NEWLY BORN INFANTS.</Typography>
                <ol>
                    <li>Copy of online application form (signed and dated)</li>
                    <li>Copy of Payment Confirmation Slip</li>
                    <li>Copy of Acknowledgement Slip</li>
                    <li>Signed letter of authorization from BOTH PARENTS - signatures should match the signatures on their respective passports and names should match those on the child’s birth certificate</li>
                    <li>Copy of parents' passports (Data Page)</li>
                    <li>Copy of the child's birth certificate</li>
                    <li><strong>Note:</strong> In case where only the mother appears on the birth certificate, she will have to present an affidavit from the court that she has full custody of the child/children</li>
                    <li>Prepaid, Self-Addressed USPS overnight express mail Envelope with Tracking number</li>
                    <li>Credit or Debit card for $30 administrative fee</li>
                </ol>
                <Typography variant="body1" component="p">Note: In case both parent's names are on the birth certificate but only one has full custody, a copy of a legal document should be provided to this effect.</Typography>
                <Typography variant="h5">ADULT (FIRST TIME APPLICANT)</Typography>
                <ol>
                    <li>Copy of online application form (signed and dated)</li>
                    <li>Copy of Payment Confirmation Slip</li>
                    <li>Copy of Acknowledgement Slip</li>
                    <li>Non Nigerian born applicants must provide a copy of the Nigerian passport and letter of authorization from a Nigerian parent that appears on his/her birth certificate as right of citizenship.</li>
                    <li>Applicant's birth certificate</li>
                    <li>Prepaid, Self-Addressed USPS overnight express mail Envelope with Tracking number</li>
                    <li>Credit or Debit card for $30 administrative fee</li>
                </ol>
                <Typography variant="h5">PASSPORT AMENDMENTS</Typography>
                <ul>
                    <li>Applicants wishing to amend the details on their Nigerian passport should follow the same application process as when applying for the standard E-Passport for the first time.</li>
                    <li>Depending on the reason(s) for amendment, copies of all legal documents should be submitted in addition to the usual application requirements.</li>
                </ul>
                <Typography variant="h5">LOST PASSPORTS</Typography>
                <Typography variant="body1" component="p">Lost or stolen passports attract a penalty fee and a police report must be obtained.</Typography>
                <Typography variant="body1" component="p">To obtain the letter, applicants should come to the Consulate between 9am-1pm on business days and submit the following:</Typography>
                <ul>
                    <li>2 colored Passport size photographs (on white background)</li>
                    <li>$50.00 US Postal money order or Certified Bank Cheque made payable to - The Consulate General of Nigeria, New York</li>
                    <li>All available evidence of the lost or stolen passport and/or proof of citizenship (i.e. birth certificate)</li>
                    <li>After obtaining the Police Report, applicants may then begin the passport application steps as detailed above (HOW TO APPLY……)</li>
                    <li>Copy of online application form (signed and dated)</li>
                    <li>Copy of Payment Confirmation Slip</li>
                    <li>Copy of Acknowledgement Slip</li>
                    <li>Police Report</li>
                    <li>Penalty fee of $350.00 payable in US Postal money order to the Consulate General of Nigeria, New York.</li>
                    <li>Prepaid, Self-Addressed USPS overnight express mail Envelope with Tracking number</li>
                    <li>Credit or Debit card for $30 administrative fee</li>
                </ul>
                <Typography variant="h5">RESCHEDULING OF PASSPORT INTERVIEW DATE</Typography>
                <Typography variant="body1" component="p">The Consulate General of Nigeria, New York, will strictly adhere to the interview date on the payment confirmation slip. Applicants are advised to come to the Consulate <strong>only</strong> on their interview dates. The Consulate is closed on weekends and public holidays. However, if an interview date falls on a holiday, the applicant may come the next working day.</Typography>
                <Typography variant="h6"><strong>PLEASE FOLLOW INSTRUCTIONS. AFTER MAKING PAYMENT WITH INNOVATE1 PART OF THE INSTRUCTIONS WILL GIVE YOU THE DETAILS OF WHAT TO WRITE ON THE MONEY ORDER BEFORE MAILING IT TO THEM.</strong></Typography>
            </Box>
        </Layout>
    );
};

export default PassportApplication;
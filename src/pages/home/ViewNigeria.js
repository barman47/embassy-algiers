import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import holidayList from '../../utils/holidays.json';
import { HOLIDAYS } from '../../routes';

const useStyles = makeStyles(theme => ({
    root: {
        
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(2),
        },

        '& h4': {
            marginBottom: theme.spacing(2),

            [theme.breakpoints.down('sm')]: {
                fontSize: theme.spacing(2.5)
            }
        }
    },

    table: {
        maxWidth: '100%'
    }
}));

const AboutUs = () => {
    const classes = useStyles();

    return (
        <section className={classes.root} id={HOLIDAYS}>
            <Typography variant="h4" align="center">Holidays in Nigeria and Algeria</Typography>
            <TableContainer component={Paper}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={2}>
                                Nigeria
                            </TableCell>
                            <TableCell align="center" colSpan={2}>
                                Algeria
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">Holiday</TableCell>
                            <TableCell align="center">Date</TableCell>
                            <TableCell align="center">Holiday</TableCell>
                            <TableCell align="center">Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {holidayList.holidays.map(({ nigeria, algeria }, index) => (
                            <TableRow key={index}>
                                <TableCell align="center">{nigeria.name ? nigeria.name : null}</TableCell>
                                <TableCell align="center">{nigeria.date ? nigeria.date : null}</TableCell>
                                <TableCell align="center">{algeria.name ? algeria.name : null}</TableCell>
                                <TableCell align="center">{algeria.date ? algeria.date : null}</TableCell>
                            </TableRow> 
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </section>
    );
};

export default AboutUs;
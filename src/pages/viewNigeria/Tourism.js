import { Box, Typography, makeStyles} from '@material-ui/core';

import Layout from '../../components/layout';

const useStyles = makeStyles((theme) => ({
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
            fontSize: theme.spacing(2),
            fontWeight: 300,
            marginBottom: theme.spacing(2),
        },

        '& ul li': {
            marginBottom: theme.spacing(2),
        }
    },
}));

const Tourism = () => {
  	const classes = useStyles();
	return (
		<Layout title="Tourism">
			<Box component="section" className={classes.root}>
				<Typography variant="h5">TOURISM</Typography>
                <Typography variant="body2" component="p">Nigeria offers a wide variety of tourist attractions such as extended and roomy rivers, beaches ideal for swimming as well as other water sports. The country also has attractions ranging from the unique wildlife, vast tracts of unspoiled nature ranging from tropical forests, magnificent waterfalls, to new rapidly growing cities, and climatic conditions that are particularly conducive for holidaying. Other attractions include traditional ways of life preserved in local customs.</Typography>
                <Typography variant="body2" component="p">Also available are rich and varied handicrafts and other colorful products depictive or illustrative of native arts and lifestyle, as well as the authentic unsophisticated but friendly attitude of many in the Nigerian population. Many of these attractions are however still largely untapped. Visitors in search of fun, exotic, or adventurous experiences are encouraged to visit to enjoy and benefit from these wonderful offers.</Typography>
                <Typography variant="h6">Investment opportunities within Nigeria’s tourism industry</Typography>
                <Typography variant="body2" component="p">A deterrent for many potential Nigeria bound tourists is the lack of required modern infrastructural facilities and acute conditions of underdevelopment as well as poverty in some parts of the country. The new administration, since the assumption of office, has been tackling these impediments to tourism. Local and foreign investors are therefore called upon to come and invest in the abundant tourism potentials in the country. The richness and diversity of Nigeria’s tourism resources coupled with economic liberalization policies will provide investment opportunities in areas such as:</Typography>
                <ul>
                    <li> Development of Heritage and cultural tourism resources, such as the slave trade relics.</li>
                    <li> Establishment of museums and preservation of monuments.</li>
                    <li> Development of eco-tourism, including wildlife tourism resources.</li>
                    <li> Development of hiking trails and Jeep tracks in the national parks.</li>
                    <li> Development of picnic and camping sites at strategic locations within the trail circuit system in the national parks.</li>
                    <li> The building of tourist lodges.</li>
                    <li> The building of reception centres in various touristic sites</li>
                    <li> Provision of cable bus systems for touring the very rugged but scenic terrain of the mountains especially in Kanyang, Obudu, and Mambila Plateau.</li>
                    <li> Construction of lodging cabins for expedition tourists and rangers.</li>
                    <li> Establishment of hotels and resorts near waterfalls, springs, caves, and temperate climate areas such as Obudu, Jos, and Mambila Plateau.</li>
                    <li> Establishment of sports and fishing facilities in and around beaches</li>
                    <li> Development of water transportation and the provision of educational facilities for water skiing and swimming.</li>
                    <li> Establishment of holiday resorts along the coasts.</li>
                    <li> Development of amusement parks, entertainment facilities, and shopping services.</li>
                    <li> Development of arts and crafts which constitute symbols of the people's cultural values and love of nature.</li>
                </ul>
			</Box>
		</Layout>
	);
};

export default Tourism;
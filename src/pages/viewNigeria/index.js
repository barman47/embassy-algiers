import { Box, Paper, Typography, makeStyles, useTheme} from '@material-ui/core';

import { COLORS } from '../../utils/constants';

import Layout from '../../components/layout';

const useStyles = makeStyles((theme) => ({
	root: {
		'& article': {
			margin: '0 auto',
			marginBottom: theme.spacing(5),
			marginTop: theme.spacing(5),
			padding: theme.spacing(2, 4),
			width: '90vw',

			'& p': {
				marginBottom: theme.spacing(2),
				textAlign: 'justify'
			}
		}
	},

	mainTitle: {
		fontWeight: 600,
		marginBottom: theme.spacing(2),
		textTransform: 'uppercase'
	},

	fact: {
		'& h6': {
			marginBottom: theme.spacing(1)
		},

		'& p': {
			color: COLORS.offBlack
		}
	},

	title: {
		fontWeight: 600,
		textTransform: 'uppercase'
	}
}));

const ViewNigeria = () => {
  	const classes = useStyles();
	  const theme = useTheme();
	return (
		<Layout title="View Nigeria">
			<Box component="section" className={classes.root}>
				<Typography variant="h4" align="center" style={{ marginTop: theme.spacing(2) }}>View Nigeria</Typography>
				<Paper component="article">
					<Typography variant="h6" className={classes.mainTitle} color="primary">RELATIONS BETWEEN NIGERIA AND ALGERIA</Typography>
					<Typography variant="body2" component="p">
						Nigeria and Algeria established diplomatic relations immediately after Algeria attained her independence in 1962. Since then, relations between the hvo countries have remained very cordial. Relations got a boost during the government of former President Olusegun Obasanjo and late President Abdulaziz Bouteflika, following democratic elections in the two Countries in 1999, and the personal rapport between the hvo leaders. It would be recalled that the two former Presidents along with other African leaders realised that one of the easiest ways to develop African economy was through effective antra - African trade. A practical step was taken IDY these leaders towards the real,zabon of this objective by way of developing an integrated so., economic development framework for Africa. This gave birth to the New Partnership for Africa's Development fNEPAD, in 200Iwhich has, as one of iLC objectives, the placement of African countries, both singularly and collectively, on a path of sustainable growth and development. It set as Its priorities establishing the conditions for sustainable development as well as policy reform and increased investment in key priority sectors. These include building and improving infrastructure as well as information and communication technology.
					</Typography>
					<Typography variant="body2" component="p">
						Nigeria and Algeria have continued to enjoy cordial understand, at the multilateral fora, consulting and supporting each other on decisions involving our continent. To this end, the Group of Four (G+4) comprising Algeria, Ethiopia, Nigena and South Africa was form. in Addis Ababa, The four countries have continued to forge common understanding on several issues which has helped in no small measure in shaping important decrsions of the OAU and later the African Union (AU). The two countries have also enjoyed a long term reciprocal support for each other's candidates vying for positions in multilateral organisations such as AU, UN, ITC, .0, WIPO, UNCAP, CERD, UNESCO, UNNRC etc,
					</Typography>
					<Typography variant="body2" component="p">
						Algeria has been fighting anthterronsm war against militants since 1992 when nation., election was cancelled by the military because the Islamic Salvation Front was pots. to win. Although the militancy, has subsided, recent even. in Libya have made the Algeria military to be on high alert guarding their boarder. As the influence of ISIS, Al-Qa. in the Isiatme Maghreb IAQIM) and other terrorist groups in Southern Libya a. NOrthern Mali we- gaining gr.., The Algerian government responded by nching total war on terror in its territory, especially the border towns and mountainous areas. The Algerian security operatives have continued to hunt the terrorists and their affiliates. The country has devised several strategies in dealing with terror, including fabrication of local equipment to aid detecbon of explosives. In both cities and villages, the police are found in every nooks and crannies holding the equipment and other devices for detecting bomb and explosives. 'Therefore, the level of attack by terrorists has been brought to the barest minimum by the Algerian security age.. In view of Algena's success In curtailing terrorism, the Nigerian government sought for security collaboration between the two countries and this far, Algeria has provided tremendous support to Nigeria to curtail itr security challenges. Nigeria was assisted with bomb detecting equipment and security services of the two countries share intelligence. Nigeria is currently member of the Algerian - based Fusion and Liaison Unit (UFL), an outfit established by the countries of the Sahel Region to collate and share intelligence on terrorism and terrorist activities. The two countries also signed a Security Cooperation Agreement.
					</Typography>
					<Typography variant="body2" component="p">
						Furthermore, Algeria has the biggest landmass in Africa and most Nigerians migrating to Europe, No. Africa and Middle East pass through the Algeria? territory:, k Initially Algeria was a transit count, for the migrants. However, due:,..,1.‘Ongntic-' development, the country has become a destination to migrants from various Sub-Saharan African countries including Nigeria. Most Nigerians living in Algeria are unskilled, ladUng any vocational training or academic qualification. Some claim to be victims of human trafficking who found themselves in Algeria after paying huge amounts to be trafficked to Europe. It is estimated that about 2,000 Nigerians are living in Algeria and most of them are staying Illegally. Some are engaged in illicit drug trafficking.and fraudulent activities (419. 3It is Important to mention that many Nigerians perished while crossing the desert to reach Algiers. Some died from starvation and thirst, while others lost their lives to robbers and rapists. Regrettably the few Nigerians living in Algeria with genuine businesses find it hard to obtain necessary residence permit and other legal documents to freely carry out their activities. Therefore, they find themselves constantly being harassed by Security Agents. Under the Consular Cooperation Agreement signed between the two countries there was provision which stipuleted sharing cost for repatriation of illegal immigrants.
					</Typography>
					<Typography variant="body2" component="p">
						Fission has continued to appeal to the Algerian authorities to consider the plight of flans wishing to stay legally In Ute count, as migration Is now generally accepted as a universal phenomenon. -Recently;.‘hO'Algerian government had relax.. rules on immigrants. It hardly apprehends any African for lack of papers. They also allow free m..I services to the immigrants at the government hospital. The Algerian government had also come up with a policy of engaging the African in the Agricultural sector and the construction Indust,.
					</Typography>
				</Paper>
				<Paper component="article">
					<Box component="div" className={classes.fact}>
						<Typography variant="h6" className={classes.title}>Area:</Typography>
						<Typography variant="subtitle2" component="p">823,766 sq km</Typography>
					</Box>
					<Box component="div" className={classes.fact}>
						<Typography variant="h6" className={classes.title}>Population:</Typography>
						<Typography variant="subtitle2" component="p">150 million (estimate)</Typography>
					</Box>
					<Box component="div" className={classes.fact}>
						<Typography variant="h6" className={classes.title}>Capital:</Typography>
						<Typography variant="subtitle2" component="p">Abuja</Typography>
					</Box>
					<Box component="div" className={classes.fact}>
						<Typography variant="h6" className={classes.title}>Government:</Typography>
						<Typography variant="subtitle2" component="p">Three-tier structure - A Federal Government, 36 State Governments, 774 Local Government Administrations</Typography>
					</Box>
					<Box component="div" className={classes.fact}>
						<Typography variant="h6" className={classes.title}>Official Language:</Typography>
						<Typography variant="subtitle2" component="p">English</Typography>
					</Box>
					<Box component="div" className={classes.fact}>
						<Typography variant="h6" className={classes.title}>Main Indigenous Languages:</Typography>
						<Typography variant="subtitle2" component="p">Hausa, Igbo, Yoruba</Typography>
					</Box>
					<Box component="div" className={classes.fact}>
						<Typography variant="h6" className={classes.title}>Main Religions:</Typography>
						<Typography variant="subtitle2" component="p">Christianity, Islam, Traditional</Typography>
					</Box>
					<Box component="div" className={classes.fact}>
						<Typography variant="h6" className={classes.title}>Main Commercial/Industrial Cities:</Typography>
						<Typography variant="subtitle2" component="p">Lagos, Onitsha, Kano, lbadan, Port Harcourt, Aba, Maiduguri, Jos, Kaduna, Warn, Benin, Nnewi</Typography>
					</Box>
					<Box component="div" className={classes.fact}>
						<Typography variant="h6" className={classes.title}>Major Industrial Complexes:</Typography>
						<Typography variant="subtitle2" component="p">Refineries and Petrochemicals: Kaduna, Warn, Port Harcourt, Eleme. iron and Steel: Ajaokuta, Warri, Oshogbo, Katsina, Jos. Fertilizer: Orme. Pert Harcourt, Kaduna, Minna, Kano Liquified Natural Gas: Bon, Aluminium Smelter: IkOt Abasi, Port Harcourt</Typography>
					</Box>
					<Box component="div" className={classes.fact}>
						<Typography variant="h6" className={classes.title}>Major Industrial Complexes:</Typography>
						<Typography variant="subtitle2" component="p">Refineries and Petrochemicals: Kaduna, Warn, Port Harcourt, Eleme. iron and Steel: Ajaokuta, Warri, Oshogbo, Katsina, Jos. Fertilizer: Orme. Pert Harcourt, Kaduna, Minna, Kano Liquified Natural Gas: Bon, Aluminium Smelter: IkOt Abasi, Port Harcourt</Typography>
					</Box>
					<Box component="div" className={classes.fact}>
						<Typography variant="h6" className={classes.title}>Main Ports:</Typography>
						<Typography variant="subtitle2" component="p">Lag. (AM, Tin-can Island), Warn, Port Harcourt, Onne Deep Sea and Flub Pon, Calabar (EPZ)</Typography>
					</Box>
					<Box component="div" className={classes.fact}>
						<Typography variant="h6" className={classes.title}>Main Airports:</Typography>
						<Typography variant="subtitle2" component="p">Abuja, Enugu, Kaduna, Malduguri, florin, Jos, Owerri,</Typography>
					</Box>
					<Box component="div" className={classes.fact}>
						<Typography variant="h6" className={classes.title}>Road Network:</Typography>
						<Typography variant="subtitle2" component="p">Over 15,000 km of intercity all-weather paved roads, including dual carnage express trunks.</Typography>
					</Box>
					<Box component="div" className={classes.fact}>
						<Typography variant="h6" className={classes.title}>Railways:</Typography>
						<Typography variant="subtitle2" component="p">2 main lines (South-West to North-East; South•East to North-West) inter-linked and terminator? at Lagos, Port Harcourt, Kaura Nainoda, Maiduguri, and Nguru. Major junctions at Kaduna, Kafanchan, Zane. Gauge: 1067mm; Total length 3505 route km.</Typography>
					</Box>
					<Box component="div" className={classes.fact}>
						<Typography variant="h6" className={classes.title}>Energy:</Typography>
						<Typography variant="subtitle2" component="p">Hydro-electric: Kainji, lebba, Shiro.. Thermal and Gas: Egbin (Lagos), Ughe1L, Afam, Sapele, National grid for electricity distribution; National pipeline network with regional depots for petroleum products distribution; National network (pipeline) for distribution of gas (under construction)</Typography>
					</Box>
					<Box component="div" className={classes.fact}>
						<Typography variant="h6" className={classes.title}>Currency:</Typography>
						<Typography variant="subtitle2" component="p">NAIRA and KOBO NI.00 = 100k (one naira = hundred kobos)</Typography>
					</Box>
					<Box component="div" className={classes.fact}>
						<Typography variant="h6" className={classes.title}>Geography:</Typography>
						<Typography variant="subtitle2" component="p">Nigeria is situated in the West African region and lies behv.n longitudes 3 degrees and 14 degrees and latitudes 4 degrees and 140 degrees. It has a landmass of 923,768 sq. km.. It is bordered to the north by the Republics of Niger and Tchad. It shares borders to the west with the Republic of Benin, while the Republic of Cameroun shares the eastern borders right down to the shores of the Atlantic Ocean which forms the southern limits of Nigerian Temtory. The about¬800km',of coastline .nfers on the country the potentials of maritime power. The-landis: en abundance, Nigeria for agricultural, industrial and commercial activities.</Typography>
						<Typography variant="subtitle2" component="p">Temperatures across the country are relabvely high with a very narrow variation in Seasonal and diurnal ranges (22-361). There are two basic seasons; the wet season which Inas from April to October; and the dry season which lasts from November till March. The dry Season commenCes with Harmattan, a dry chilly spell that lasts bit February and is aSsociated with lower temperatures, a dusty and hary atmosphere brought about by the No.-Easterly winds blowing frorn Me Arabian peninsula acroSS the Sahara; the second half of the dry season, February - March, is the hottest period of the year when temperatures range from 33 to 38 degrees centigrade. The ertremeS of the wet seaSon are felt on the southeastern coast where annual rainfall might reach a high of 330cm; while the extremes of the dry season, in aridity and high temperatures, are felt in the Northern third of the country.</Typography>
					</Box>
					<Box component="div" className={classes.fact}>
						<Typography variant="h6" className={classes.title}>Vegetation:</Typography>
						<Typography variant="subtitle2" component="p">In line with the rainfall distribution, a wetter south and a drier northern half, there are .0 ...ad vegeta,. tYpes: Forests and Savanna. There are three variants of each, running as near parallel bands east to west across the country. Forests Savanna Saline water swamp Guinea Savanna Fresh water swamp Sudan Savanna Tropical (high, evergreen Sahel Savanna.</Typography>
					</Box>
					<Box component="div" className={classes.fact}>
						<Typography variant="h6" className={classes.title}>Rainforest:</Typography>
						<Typography variant="subtitle2" component="p">There is a. the mountain vegetation of Me isolated high plateau regions on the far eastern extremes of the country (Jos, Mantilla, °bud,.</Typography>
						<Typography variant="subtitle2" component="p">The savanna, especially Guinea and Sudan, are the major gra., grasses, tubc-,s. vegetable and cotton growing regions.</Typography>
						<Typography variant="subtitle2" component="p">The Tropical evergreen rain forest belt bears timber production and forest develoPmel, production of cassava; and plantation growing of fruit trees - citrus, oil palm, cocoa, rubber. among others.</Typography>
					</Box>
				</Paper>
			</Box>
		</Layout>
	);
};

export default ViewNigeria;
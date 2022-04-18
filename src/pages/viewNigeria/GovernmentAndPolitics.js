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

        '& article': {
            marginBottom: theme.spacing(4)
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

const GovernmentAndPolitics = () => {
  	const classes = useStyles();
	return (
		<Layout title="Government and Politics">
			<Box component="section" className={classes.root}>
				<Typography variant="h5" align="center">GOVERNMENT AND POLITICS</Typography>
                <Box component="article">
                    <Typography variant="h6">Political System</Typography>
                    <Typography variant="body2" component="p">
                        Nigeria is a federal republic with a presidential system. The constitution provides for the separation of powers among the three branches of government. General elections held in February 1999 marked the end of 15 years of military rule and the beginning of civilian rule based on multiparty democracy.
                    </Typography>            
                </Box>
                <Box component="article">
                    <Typography variant="h6">Constitution</Typography>
                    <Typography variant="body2" component="p">
                        Nigeria’s current constitution, the fourth since independence, went into effect on May 29, 1999. Modeled after the U.S. Constitution, it provides for separation of powers among a strong executive, an elected legislature, and an independent judiciary. Critics of the constitution complain that the federal government retains too much power at the expense of the states. Although the constitution proclaims personal freedom and a secular state, it also permits Muslims to follow sharia or Islamic law.
                    </Typography>            
                </Box>
                <Box component="article">
                    <Typography variant="h6">Branches of Government</Typography>
                    <Typography variant="body2" component="p">
                        Executive power is vested in the president, who is simultaneously chief of state and head of government. The president is eligible for two four-year terms. The president’s Federal Executive Council, or cabinet, includes representatives from all 36 states. The National Assembly, consisting of a 109-member Senate and a 360-member House of Representatives, constitutes the country’s legislative branch. Three senators represent each of Nigeria’s 36 states, and one additional senator represents the capital city of Abuja. Seats in the House of Representatives are allocated according to population. Therefore, the number of House members from each state differs. Members of the National Assembly are elected to a maximum of two four-year terms. The judicial branch comprises the Supreme Court, the Court of Appeal, the Federal High Court, and, on the state level, high courts, sharia courts, and customary courts. The president appoints members of the Supreme Court, subject to confirmation by the Senate.
                    </Typography>            
                </Box>
                <Box component="article">
                    <Typography variant="h6">Administrative Divisions</Typography>
                    <Typography variant="body2" component="p">
                        Nigeria has divided administratively into the Federal Capital Territory (Abuja) and 36 states, which are organized into the following six geo-political zones: South-West Zone—Lagos, Ekiti, Ogun, Ondo, Oshun, and Oyo; South-South Zone—Akwa, Bayelsa, Cross River, Delta, Edo, Ibom, and Rivers; South-East Zone—Abia, Anambra, Ebonyi, Enugu, and Imo; North-West Zone—Kaduna, Kano, Katsina, Jigawa, Kebbi, Sokoto, and Zamfara; North-Central Zone—Benue, Kogi, Kwara, Nassarawa, Niger, and Plateau; and North-East Zone—Adamawa, Bauchi, Bornue, Gombe, Taraba, and Yobe.
                    </Typography>            
                </Box>
                <Box component="article">
                    <Typography variant="h6">Provincial and Local Government</Typography>
                    <Typography variant="body2" component="p">
                        Each of Nigeria’s 36 states has an elected governor and a House of Assembly. The governor is elected to a maximum of two four-year terms. The number of delegates to the House of Assembly is based on population (three to four times the number of delegates each state sends to the Federal House of Representatives) and therefore varies from state to state within the range of 24 to 40. Nigeria’s states are subdivided into 774 local government areas, each of which is governed by a council that is responsible for supplying basic needs. The local government councils, which are regarded as the third tier of government below the federal and state levels, receive monthly subsidies from a national “federation account.” Critics contend that the division of the country into so many districts is a vestige of military rule that is arbitrary, wasteful, and inefficient.
                    </Typography>            
                </Box>
                <Box component="article">
                    <Typography variant="h6">Judicial and Legal System</Typography>
                    <Typography variant="body2" component="p">
                        Nigeria’s legal system is based on a combination of statutory (legislative) law, English common law, customary law, and, in the north, Islamic law (sharia). Nigeria’s federal and state courts apply statutory and English common law, whereas local courts recognize the legitimacy of customary and Islamic law. The deficiencies in the existing legal and Criminal Justice systems partially explain the popularity of Islamic law in the 12 northern states. Sharia is criticized for the imposition of draconian penalties, although no death penalties have so far been carried out on the basis of Sharia law.
                    </Typography>            
                </Box>
                <Box component="article">
                    <Typography variant="h6">Electoral System</Typography>
                    <Typography variant="body2" component="p">
                        The president and members of the bicameral National Assembly, consisting of a 109-member Senate and a 360-member House of Representatives, are elected to a maximum of two four-year terms. Universal suffrage at age 18 applies to all elections. Winning candidates are determined according to the British first-past-the-post system, whereby a plurality of the votes ensures victory. Also under this system, members of the National Assembly represent distinct geographic constituencies. International observers and several Nigerian parties alleged procedural improprieties in the most recent elections in 2007. The Independent National Electoral Commission, which was responsible for administering the elections, was criticized for a lack of transparency.
                    </Typography>            
                </Box>
                <Box component="article">
                    <Typography variant="h6">Mass Media</Typography>
                    <Typography variant="body2" component="p">
                        The government controls and regulates most of Nigeria’s broadcast media through the National Broadcasting Commission. Radio is the most important mass medium for reaching general audiences because it is inexpensive and does not require literacy. The federal government owns stations affiliated with the Federal Radio Corporation of Nigeria, individual states control other stations, and still others are privately owned. The Voice of Nigeria broadcasts in Arabic, English, French, and five indigenous languages. Some Voice of Nigeria broadcasts are aimed at domestic audiences; others, primarily shortwave, are transmitted around the globe. Similar to the market for radio broadcasts, the federal government owns two stations affiliated with the National Television Authority, various states have their own stations, and private operators broadcast by satellite. Nigerians also obtain news via Voice of America, the British Broadcasting Company (BBC), and Deutsche Welle. In contrast to the broadcast media, the print media are dominated by private publications, a situation that is more amenable to criticism of the government. Nigeria has 14 major daily newspapers, but only one—the New Nigerian—is government-owned. The country also has six newsweeklies and various tabloids. The government does not restrict access to the Internet, which is most widely available at cybercafés, and increasingly so in the Workplaces and at Private homes.
                    </Typography>            
                </Box>
                <Box component="article">
                    <Typography variant="h6">Foreign Relations</Typography>
                    <Typography variant="body2" component="p">
                        Nigeria’s foreign policy revolves primarily around African affairs and emphasizes political and economic cooperation, peaceful dispute resolution, and global nonalignment. Regionally, Nigeria pursues tariff harmonization and the long-term goal of a customs union via the Economic Community of the West African States, which was instrumental in founding. Nigeria is also active in the New Partnership for Africa’s Development, which seeks to improve economic conditions in Africa by eliminating trade barriers to exports and attracting investment and development aid. Nigeria maintains excellent relations with its neighbors and has fully complied with the 2002 decision of the International Court of Justice in favor of Cameroon over control of the Bakassi Peninsula. Since mid-1998, Nigeria’s relations with the United States have improved steadily in accordance with Nigeria’s transition from military rule to democracy. Nigeria has also supported the United States-led war on terrorism. In March 2006, Ex Nigerian President Olusegun Obasanjo met with President George W. Bush in Washington, DC, to discuss the U.S.-Nigerian relationship. With a touch of drama immediately before the meeting, Nigeria turned over the exiled former Liberian leader Charles Taylor to a United Nations court in Sierra Leone to face allegations of war crimes. Nigeria is seeking a permanent seat on the United Nations Security Council.
                    </Typography>            
                </Box>
                <Box component="article">
                    <Typography variant="h6">Membership in International Organizations</Typography>
                    <Typography variant="body2" component="p">
                        Nigeria belongs to the following international organizations: African, Caribbean, and Pacific Group of States; African Development Bank; African Union; Commonwealth; Economic Community of West African States; Food and Agriculture Organization; Group of 15; Group of 24; Group of 77; International Atomic Energy Agency; International Bank for Reconstruction and Development (World Bank); International Chamber of Commerce; International Civil Aviation Organization; International Confederation of Free Trade Unions; International Criminal Court; International Criminal Police Organization; International Development Association; International Finance Corporation; International Fund for Agricultural Development; International Hydrographic Organization; International Labor Organization; International Olympic Committee; International Maritime Organization; International Monetary Fund; International Organization for Migration; International Organization for Standardization; International Red Cross and Red Crescent Movement; International Telecommunication Union; Multilateral Investment Geographic Agency; Nonaligned Movement; Organisation for the Prohibition of Chemical Weapons; Organization of the Islamic Conference; Organization of the Petroleum Exporting Countries; Permanent Court of Arbitration; United Nations; Universal Postal Union; World Customs Organization; World Federation of Trade Unions; World Health Organization; World Intellectual Property Organization; World Meteorological Organization; World Tourism Organization; and World Trade Organization.
                    </Typography>            
                </Box>
                <Box component="article">
                    <Typography variant="h6">Major International Treaties</Typography>
                    <Typography variant="body2" component="p">
                        Nigeria is a party to the following nonproliferation agreements: Biological Weapons Convention, Chemical Weapons Convention, Nuclear Non-proliferation Treaty, and Partial Test Ban Treaty. Regarding the environment, Nigeria is a party to the following agreements: Biodiversity, Climate Change, Desertification, Endangered Species, Hazardous Wastes, Kyoto Protocol, Law of the Sea, Marine Dumping, Marine Life Conservation, Ozone Layer Protection, and Wetlands. Shortly after September 11, 2001, Nigeria ratified a Mutual Legal Assistance Treaty with the United States. The treaty, whose ratification had been held up for 12 years, includes provisions for cooperation on anticrime, antidrug, and counter-terrorism initiatives.
                    </Typography>            
                </Box>
			</Box>
		</Layout>
	);
};

export default GovernmentAndPolitics;
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

const NigerianEconomy = () => {
  	const classes = useStyles();
	return (
		<Layout title="Nigerian Economy">
			<Box component="section" className={classes.root}>
				<Typography variant="h5" align="center">NIGERIAN ECONOMY</Typography>
                <Box component="article">
                    <Typography variant="h6">Trade</Typography>
                    <Typography variant="body2" component="p">
                        Nigeria is the United States’ largest trading partner in sub-Saharan Africa. This is largely due to the high level of petroleum imports from Nigeria, which supply 8% of U.S. oil imports nearly half of Nigeria’s daily oil production. Nigeria is also the fifth-largest exporter of oil to the United States. In 2010, Nigeria ranked the 13th largest trading partner of the United States. Two-way trade in that year was valued at more than $34 billion, a 51% increase over 2009, largely due to the recovery in the international price of crude oil. The United States exported goods worth more than $4 billion to Nigeria comprising cereals (wheat and rice), motor vehicles, petroleum products, and machinery. Imports from Nigeria, in that same year were over $30 billion, consisting predominantly of crude oil. Cocoa, bauxite and aluminum, tobacco and waxes, rubber, and grains constituted about $73 million of U.S. imports from the country. The U.S. trade deficit with Nigeria in 2010 was $26 billion.
                    </Typography>            
                    <Typography variant="body2" component="p">
                        The United States is Nigeria’s largest trading partner after the United Kingdom and is also the largest foreign investor in Nigeria. Although the trade balance between these two countries overwhelmingly favors Nigeria, thanks to oil exports, a large portion of U.S. exports to Nigeria is believed to enter the country outside of the Nigerian Government’s official statistics, due to importers seeking to avoid Nigeria’s tariffs and regulations. The stock of U.S. foreign direct investment (FDI) in Nigeria in 2010 was $5.2 billion, down slightly from $5.4 billion in 2009. U.S. FDI in Nigeria is concentrated largely in the petroleum/mining and wholesale trade sectors. ExxonMobil and Chevron are the two largest U.S. corporate players in offshore oil and gas production.
                    </Typography>            
                    <Typography variant="body2" component="p">
                        In March 2009, the United States and Nigeria met under the existing Trade and Investment Framework Agreement (TIFA) to advance the ongoing work program and to discuss improvements in the Nigerian trade policies and market access. Among the topics discussed were cooperation in the World Trade Organization (WTO), market access, export diversification, intellectual property protection and enforcement, commercial issues, trade capacity building and technical assistance, infrastructure, and investment issues.
                    </Typography>            
                </Box>
                <Box component="article">
                    <Typography variant="h6">Dominated by Oil</Typography>
                    <Typography variant="body2" component="p">
                        The oil boom of the 1970s led Nigeria to neglect its strong agricultural and light manufacturing bases in favor of an unhealthy dependence on crude oil. Oil and gas exports account for more than 95% of export earnings and over 80% of federal government revenue. New oil wealth and the concurrent decline of other economic sectors fueled massive migration to the cities and led to increasingly widespread poverty, especially in rural areas. A collapse of basic infrastructure and social services since the early 1980s accompanied this trend. By 2002 Nigeria’s per capita income had plunged to about one-quarter of its mid-1970s high, below the level at independence. Along with the endemic malaise of Nigeria’s non-oil sectors, the economy continues to witness massive growth of “informal sector” economic activities, estimated by some to be as high as 75% of the total economy.
                    </Typography>            
                    <Typography variant="body2" component="p">
                        Nigeria’s proven oil reserves are estimated to be 36 billion barrels; natural gas reserves are well over 100 trillion cubic feet. Nigeria is a member of the Organization of Petroleum Exporting Countries (OPEC), and its current crude oil production averages around 1.6 million barrels per day. Some factors that continuously plague the Nigerian oil sector are poor corporate relations with indigenous communities, vandalism of oil infrastructure, severe ecological damage, and personal security problems throughout the Niger Delta oil-producing region. Multinational oil companies have launched their own community development programs in an attempt to improve their relations with host communities. The Niger Delta Development Commission (NDDC) was created to help catalyze economic and social development in the region. However, it is widely perceived to be ineffective and opaque. Significant exports of liquefied natural gas started in late 1999 and are slated to expand as Nigeria seeks to eliminate gas flaring.
                    </Typography>            
                    <Typography variant="body2" component="p">
                        Nigeria inspects all imports on arrival, rather than at ports of origin. As a result, about 95% of containers are physically examined. This procedure, along with Nigeria’s uneven application of import and labeling regulations and poor infrastructure, complicates the movement of goods through Nigeria’s notoriously congested ports and increases the cost of doing business. The government is promoting foreign investments and encouraging reforms in these and other areas, but the investment climate remains daunting to all but the most determined.
                    </Typography>            
                    <Typography variant="body2" component="p">
                        Agriculture has suffered from years of mismanagement, inconsistent and poorly conceived government policies, and the lack of basic infrastructure. Notwithstanding, the sector accounts for about 40% of GDP and two-thirds of employment. Agriculture provides a significant fraction (approximately 10%) of non-oil growth. Poultry and cocoa are just two areas where production is not keeping pace with domestic or international demand. Fisheries also have great potential but are poorly managed. Nigeria’s land tenure system does not encourage long-term investment in technology or modern production methods and does not inspire the availability of rural credit, however critical for the country’s future.
                    </Typography>            
                    <Typography variant="body2" component="p">
                        Oil dependency, and the allure it generated of great wealth through government contracts, spawned other economic distortions. The country’s high propensity to import means roughly 80% of government expenditures is recycled into foreign exchange. Cheap consumer imports, resulting from an overvalued Naira coupled with excessively high domestic production costs due in part to erratic electricity and fuel supply, have pushed down industrial capacity utilization to less than 30%. Many more Nigerian factories would have closed except for relatively low labor costs (10%-15%). Domestic manufacturers, especially pharmaceuticals and textiles, have lost their ability to compete in traditional regional markets. However, there are signs that some manufacturers have begun to address their competitiveness.
                    </Typography>            
                    <Typography variant="body2" component="p">
                        Arguably Nigeria’s biggest macroeconomic achievement has been the sharp reduction in its external debt, which declined from 36% of GDP in 2004 to less than 4% of GDP in 2007. In October 2005, the International Monetary Fund (IMF) approved its first-ever Policy Support Instrument for Nigeria. In December 2005, the United States and seven other Paris Club nations signed debt reduction agreements with Nigeria for $18 billion in debt reduction, with the proviso that Nigeria paid back its remaining $12 billion in debt by March 2006. The United States was one of the smaller creditors and received about $356 million from Nigeria in return for over $600 million of debt reduction. Merrill Lynch won the right to take on $509 million of Nigeria’s promissory debt (accrued since 1984) to the “London Club” of private creditors. This arrangement saved Nigeria about $34 million over a simple prepayment of the notes. Nigeria faces intense pressure to accept multibillion-dollar loans for railroads, power plants, roads, and other infrastructure. Expanded government spending also has led to upward pressure on consumer prices. However, a drop in world oil prices and the global financial crisis prompted the federal government to tap its foreign exchange reserves, which consequently decreased from $60 billion to $48 billion, in order to meet pressing budget demands from cash-strapped state and local governmental bodies.
                    </Typography>            
                    <Typography variant="body2" component="p">
                        In 2009, Nigeria took significant steps to strengthen the banking sector. After completing financial audits of all 24 national banks, the Central Bank found 10 of the banks to be undercapitalized or suffering from illiquidity. The Central Bank replaced many of the failing banks’ management teams and pumped nearly $6 billion into the sector. In addition, the Central Bank published the names of significant loan defaulters, which included many prominent political and business figures. These reforms came on top of a major banking overhaul in 2006 that reduced the number of banks from 89 to 24, increased a bank’s minimal capital requirement to $190 million, and required banks to hold 40% of their deposits in liquid assets. Retail, corporate, and Internet banking are seen as intensively competitive, and the home loan market is considered moderately competitive. Less than 10% of lending is believed to be made to individuals. About 65% of the economically active population is serviced by the informal financial sector, e.g., microfinance institutions, moneylenders, friends, relatives, and credit unions. Since 1999, the Nigerian Stock Exchange has enjoyed strong performance, although equity as a means to foster corporate growth remains underutilized by Nigeria’s private sector. Credit is largely inaccessible to rural communities, the real estate sector and small businesses receive a low level of lending, and the credit card market remains at an early stage of development.
                    </Typography>            
                    <Typography variant="body2" component="p">
                        Nigeria’s publicly owned transportation infrastructure is a major constraint to economic development. Principal ports are at Lagos (Apapa and Tin Can Island), Port Harcourt, and Calabar. Docking fees for freighters are among the highest in the world. Of the 80,500 kilometers (50,000 mi.) of roads, more than 15,000 kilometers (10,000 mi.) are officially paved, but many remain in poor shape. Extensive road repairs and new construction activities are gradually being implemented as state governments, in particular, spend their portions of enhanced government revenue allocations. The government implementation of 100% destination inspection of all goods entering Nigeria has resulted in long delays in clearing goods for importers and created new sources of corruption since the ports lack adequate facilities to carry out the inspection. Four of Nigeria’s airports-Lagos, Kano, Port Harcourt, and Abuja–currently receive international flights. There are several domestic private Nigerian carriers, and air service among Nigeria’s cities is generally dependable. The maintenance culture of Nigeria’s domestic airlines is not up to international standards.
                    </Typography>
                </Box>
                <Box component="article">
                    <Typography variant="h6">Gradual Reform</Typography>
                    <Typography variant="body2" component="p">
                        A co-member of the International Advisory Group of the Extractive Industries Transparency Initiative (EITI) initiated by the G8, Nigeria’s federal government is playing an important role in having volunteered to pilot the new disclosure and validation methodologies. It has completed a comprehensive audit of oil sector payments and government revenues from 1999-2004. The federal government has passed implementing legislation on public procurement and fiscal transparency, but now it must ensure that Nigeria’s 36 states pass and implement similar bills. There is a perception that government contracting remains rife with corruption and kickbacks, and that many state and local officials continue to steal public monies outright.
                    </Typography>
                    <Typography variant="body2" component="p">
                        Nigeria’s economic team had enjoyed an excellent reputation in the international community. It produced an encouraging body of work, notably budgets described as “prudent and responsible” by the IMF and a detailed economic reform blueprint, the National Economic Empowerment, and Development Strategy (NEEDS). Other positive developments include (1) government efforts to deregulate fuel prices; (2) Nigeria’s participation in the EITI and commitment to the G8 Anticorruption/Transparency Initiative; (3) creation of what had been an effective Economic and Financial Crimes Commission (EFCC), which until 2008 had earned 150 convictions and recovered over $5 billion in mishandled funds; and (4) development of several governmental offices to better monitor official revenues and expenditures.
                    </Typography>
                    <Typography variant="body2" component="p">
                        Nigeria is not on track to meet its Millennium Development Goals because of a lack of policy coordination between the federal, state, and local governments. In addition, this is also a result of a lack of funding commitments at the state and local levels; and a lack of available staff to implement and monitor projects on health, poverty, and education.
                    </Typography>
                    <Typography variant="body2" component="p">
                        <strong>Potential Investors wanting to do business in Nigeria or with Nigerians should clarify from the embassy about the veracity of such deals in order to prevent further occurrences of the incidence of fraud.</strong>
                    </Typography>
                </Box>
			</Box>
		</Layout>
	);
};

export default NigerianEconomy;
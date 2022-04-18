import { Link } from 'react-router-dom';
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

const TradeAndInvestment = () => {
    const classes = useStyles();
	return (
		<Layout title="Trade and Investment">
			<Box component="section" className={classes.root}>
				<Typography variant="h5" align="center">TRADE AND INVESTMENT SECTION</Typography>
                <Box component="article">
                    <Typography variant="body2" component="p">
                        The Trade and Investment Section at the Consulate-General of Nigeria in New York serves as a one-stop centre that provides information on trade and commercial matters in Nigeria and helps investors maximize the benefits of the attractive incentives and indices of investing in Nigeria.
                    </Typography>
                    <Typography variant="body2" component="p">
                        Other functions of the Trade and Investment Section include the followings: promotion of trade missions to, and from Nigeria; response to trade and business related inquiries from the US and Nigeria; liaison with the US and Nigeria Chambers of Commerce and associated organizations; representing the Consulate at conferences and seminars of business nature; verification of contract documents and investors’ profiles; processing of application for Certificate of Free Sale and other products; processing of requests for authentication of commercial documents and assignment of Power of Attorney, etc.
                    </Typography>
                </Box>
                <Box component="article">
                    <Typography variant="h6">Nigerian Economic Outlook</Typography>
                    <Typography variant="body2" component="p">
                        Nigeria is the leading and one of the most profitable investment destinations in the world for potential investors, and the business opportunities are abundant and ever increasing
                    </Typography>
                    <Typography variant="body2" component="p">
                        With a Gross Domestic Product (GDP) of more than 500 billion dollars, Nigeria has the largest and strongest economy in Africa and is adjudged the country with the highest Return on Investment in Africa and globaly.
                    </Typography>
                    <Typography variant="body2" component="p">
                        Nigeria, with an estimated 200 million people, also has a very young and vibrant population with nearly two-thirds of its population under the age of 25, which offers a low-cost labour pool.
                    </Typography>
                    <Typography variant="body2" component="p">
                        Given its abundant natural resources, Nigeria enjoys mostly duty-free trade with other member countries of the Economic Community of west African States (ECOWAS) and continues to represent a large consumer market for investors and traders.
                    </Typography>
                    <Typography variant="body2" component="p">
                        The Nigerian Government has put in place a number of investment incentives for the stimulation of private sector investment from within and outside the country. While some of these incentives cover all sectors, other are limited to some specific sectors. The nature and application of these incentives have been considerably simplified.
                    </Typography>
                    <Typography variant="body2" component="p">
                        Similarly, the Nigerian Investment Promotion Council has revised the list of activities that can benefit from Nigeria’s Pioneer Status Incentive, expanded the tax holiday incentives to deserving companies and grants beneficiary companies a three to five-year tax holiday.
                    </Typography>
                    <Typography variant="body2" component="p">
                        These incentives are part of government’s efforts to open more windows of opportunities in Nigeria to the world amidst the COVID-19 pandemic that has ravaged the global economy. Nigeria continues to pursue vigorous economic reforms and pass new laws that seek to further revolutionize the ease of doing business.
                    </Typography>
                    <Typography variant="body2" component="p">
                        With the strong commitment of the Nigerian Government to diversify the economy, build infrastructure and improve the business environment, there is ever increasing economic opportunities in Nigeria for any potential investor to explore.
                    </Typography>
                    <Typography variant="body2" component="p">
                        <Link component="a" href="www.fmiti.gov.ng" target="_blak">www.fmiti.gov.ng</Link>
                    </Typography>
                    <Typography variant="body2" component="p">
                        <Link component="a" href="www.nipc.gov.ng" target="_blak">www.nipc.gov.ng</Link>
                    </Typography>
                </Box>
                <Box component="article">
                    <Typography variant="h6">Nigeria Macroeconomic Indicators</Typography>
                    <ul>
                        <li>GDP = $514.076 billion (nominal, 2021 est.) $1.116 trillion (PPP, 2021 est.)</li>
                        <li>GDP rank = 26th (nominal, 2021) 24th (PPP, 2021)</li>
                        <li>GDP growth = 2.2% (2019) -3.0% (2020 est.) 1.5% (2021 est.)</li>
                        <li>GDP per capita = $2,432(nominal, 2021 est.) $5,280 (PPP, 2021 est.)</li>
                        <li>Real GDP is estimated to have shrunk by 3% in 2020.</li>
                    </ul>
                    <Typography variant="body2" component="p">
                        Inflation rose to 12.8% in 2020 from 11.4% in 2019, fueled by higher food prices due to constraints on domestic supplies and exchange rate premium
                    </Typography>
                    <Typography variant="body2" component="p">
                        Nigeria’s public debt is relatively sustainable at 25% of GDP. Total public debt stood at $85.9 billion (25% of GDP) on 30 June 2020, 2.4% higher than a year earlier. Domestic debt represented 63% of total debt, and external debt, 37%.
                    </Typography>
                    <Typography variant="body2" component="p">
                        The economy is projected to grow by 1.5% in 2021 and 2.9% in 2022, based on an expected recovery in crude oil prices and production.
                    </Typography>
                    <Typography variant="body2" component="p">
                        During the first half of 2020, Nigeria received $7.1 billion in foreign investment.
                    </Typography>
                    <Typography variant="body2" component="p">
                        Nigeria’s economy entered a recession in 2020, due to fall in crude oil prices on account of falling global demand and containment measures to fight the spread of COVID–19. Sectors affected include aviation, tourism, hospitality, restaurants, manufacturing, and trade.
                    </Typography> 
                </Box>
                <Box component="article">
                    <Typography variant="h6">Nigerian Export Agencies:</Typography>
                    <Typography variant="h6">Nigerian Export Promotion Council (NEPC)</Typography>
                    <Typography variant="body2" component="p">
                        <Link component="a" href="www.nepc.gov.ng" target="_blank">www.nepc.gov.ng</Link>
                    </Typography>
                    <Typography variant="body2" component="p">
                        The Nigerian Export Promotion Council (NEPC) is a Nigeria’s primary agency to promote the development and diversification of Nigeria's export trade. It does so by promoting the development of export-related industries through active support of favorable policies and programmes at the federal level, and training and technical assistance to developing businesses. It was established through the promulgation of the “Nigerian Export Promotion Council Decree No. 26 of 1976”, now an Act.
                    </Typography>
                </Box>
                <Box component="article">
                    <Typography variant="h6">Nigeria Export Processing Zone Authority (NEPZA)</Typography>
                    <Typography variant="body2" component="p">
                        <Link component="a" href="www.nepza.gov.ng" target="_blank">www.nepza.gov.ng</Link>
                    </Typography>
                    <Typography variant="body2" component="p">
                        The Nigeria Export Processing Zones Authority (NEPZA) is the federal agency responsible for promoting and facilitating local and international investments into the 34 licenced Free Export Processing Zones (EPZ) in Nigeria. It administers EPZs, ensuring the establishment of customs, police, immigration, and all necessary legal posts. It works to streamline processes for businesses, and serves as a dispute-resolution mechanism in the case of conflict.
                    </Typography>
                </Box>
                <Box component="article">
                    <Typography variant="h6">Nigerian Export Import Bank (NEXIM)</Typography>
                    <Typography variant="body2" component="p">
                        <Link component="a" href="www.neximbank.com.ng" target="_blank">www.neximbank.com.ng</Link>
                    </Typography>
                    <Typography variant="body2" component="p">
                        The Nigerian Export Import Bank (NEXIM), a federally financed organisation, is dedicated to providing finance for export and import operations in Nigeria. It offers trade advisory services and market information for imports and exporters, as well as credit financing and insurance for exports of Nigerian commodities.
                    </Typography>
                </Box>
                <Box component="article">
                    <Typography variant="h6">Nigerian Ports Authority (NPA)</Typography>
                    <Typography variant="body2" component="p">
                        <Link component="a" href="nigerianports.gov.ng" target="_blank">nigerianports.gov.ng</Link>
                    </Typography>
                    <Typography variant="body2" component="p">
                        The Nigerian Ports Authority (NPA) is Nigeria’s federal organization dedicated to safe, secure, efficient, and innovative use of Nigeria’s ports and harbors. The NPA is responsible for maintenance and security of shared areas, implementation and enforcement of port regulations and byelaws, and day to day management of operations. The NPA manages the leasing of activities such as cargo handling, warehousing, and delivery.
                    </Typography>
                </Box>
                <Box component="article">
                    <Typography variant="h6">Nigeria Shippers Council</Typography>
                    <Typography variant="body2" component="p">
                        <Link component="a" href="shipperscouncil.gov.ng" target="_blank">shipperscouncil.gov.ng</Link>
                    </Typography>
                    <Typography variant="body2" component="p">
                        The Nigeria Shippers’ Council is to protect and further the interests of shippers importing to and exporting from Nigeria. It is a platform for improving shipping services, monitoring and regulating private and public shipping interventions, and resolving disputes when necessary in consultation with the Nigerian Ports Authority.
                    </Typography>
                </Box>
                <Box component="article">
                    <Typography variant="h6">Standards Organisation of Nigeria (SON)</Typography>
                    <Typography variant="body2" component="p">
                        <Link component="a" href="son.gov.ng/" target="_blank">son.gov.ng/</Link>
                    </Typography>
                    <Typography variant="body2" component="p">
                        The Standards Organisation of Nigeria¬ (SON) is the national organisation responsible for establishment and diffusion of standards relating to products, measurements, materials and processes, and their promotion at national, regional and international levels. It certifies products in commerce and industry, and oversees quality control at points of sales, import, and export.
                    </Typography>
                </Box>
                <Box component="article">
                    <Typography variant="h6">Ease of Doing Business</Typography>
                    <Typography variant="body2" component="p">
                        The Ease of Doing Business in Nigeria averaged 143.92 from 2008 until 2019, reaching an all- time high of 170 in 2014. Despite COVID-19 pandemic, Nigeria's ease of doing business ranked 131st worldwide as of 2020, with a general score of 57.
                    </Typography>
                    <Typography variant="body2" component="p">
                        Nigeria's earning a 15-place rise on the World Bank’s 2020 Doing Business Index and a place among the year’s top global improvers, according to the World Bank Group’s Doing Business study, therefore, is reassuring news. And despite COVID-19, the World Bank has forecast that Nigeria’s economy will grow by 1.8 per cent in 2021.
                    </Typography>
                </Box>
                <Box component="article">
                    <Typography variant="h6">Company Registration</Typography>
                    <Typography variant="body2" component="p">
                        According to the Corporate Affairs Commission (CAC), registration of Limited Liability Companies can be processed directly by the first Directors/Subscribers to the Memorandum and Articles of Association similar to what obtains in the case of Business Names and Incorporated Trustees. This is part of the Federal Governments Investment Climate Reform Programme aimed at reducing cost of doing business in Nigeria.
                    </Typography>
                    <Typography variant="body2" component="p">
                        <Link component="a" href="www.cac.gov.ng/" target="_blank">www.cac.gov.ng/</Link>
                    </Typography>
                </Box>
                <Box component="article">
                    <Typography variant="h6">Companies and Allied Matters Act</Typography>
                    <Typography variant="body2" component="p">
                        In carrying out its reforms, Nigeria has passed the new Companies and Allied Matters Act, 2020 (“CAMA 2020”), that seeks to further revolutionize the ease of doing business in the country. On August 7, 2020, President Muhammadu Buhari assented to the Companies and Allied Maters Act, which repeals and replaces the Companies and Allied Matters Act, 1990[1] (the “Repealed Act”). The provisions of this Act have positively impacted on the Nigerian business community.
                    </Typography>
                </Box>
                <Box component="article">
                    <Typography variant="h6">Companies Income Tax</Typography>
                    <Typography variant="body2" component="p">
                        The Companies Income Tax Act has been amended in order to encourage potential and existing investors and entrepreneurs. The current rate in all sectors, except for petroleum, is 30 percent.
                    </Typography>
                </Box>
                <Box component="article">
                    <Typography variant="h6">Pioneer Status</Typography>
                    <Typography variant="body2" component="p">
                        The grant of Pioneer Status to an industry is aimed at enabling the industry concerned to make a reasonable level of profit within its formative years. The profit so made is expected to be ploughed back into the business
                    </Typography>
                    <Typography variant="body2" component="p">
                        Pioneer status is a tax holiday granted to qualified or (eligible) industries anywhere in the Federation and seven-year tax holiday in respect of industries located in economically disadvantaged local government area of the Federation. At the moment, there is a list of 69 approved industries declared pioneer industries, which can benefit from tax holiday
                    </Typography>
                    <Typography variant="body2" component="p">
                        To qualify, a joint venture company or a wholly foreign-owned company must have incurred a capital expenditure of not less than amount specified by the Corporate Affairs Commission (CAC) whilst that of qualified indigenous company should not be less than 	&#8358;150,000.00.
                    </Typography>
                </Box>
                <Box component="article">
                    <Typography variant="h6">Visa on Arrival policy for business visitors and Investors</Typography>
                    <Typography variant="body2" component="p">
                        The Nigeria Visa on Arrival policy provides a class of short visit visa issued at the port of entry, and is available to frequently travelled high net worth investors and intending visitors who may not be able to obtain visa at the Nigerian missions in their countries of residence due to the absence of a Nigerian mission in those countries or exigencies of urgent business travels.
                    </Typography>
                    <Typography variant="body2" component="p">
                        <Link component="a" href="portal.immigration.gov.ng/" target="_blank">portal.immigration.gov.ng/</Link>
                    </Typography>
                </Box>
                <Box component="article">
                    <Typography variant="h6">Nigeria-USA Economic Ties:</Typography>
                    <Typography variant="body2" component="p">
                        For the United States to realize and even deepen its economic ties with West Africa and the larger Africa, Nigeria remains its most strategic partner and gate-way, and the two countries can develop and advance economic and development goals that are beneficial to both countries and the African continent for obvious reasons.
                    </Typography>
                    <Typography variant="body2" component="p">
                        With all these incentives and indices, Nigeria strives to build a genuinely attractive business environment for foreign companies, and the potential for any American investor to succeed in Nigeria, therefore, is very huge.
                    </Typography>
                </Box>
                <Typography variant="h6">Relevant Sites for Doing Business with USA</Typography>
                <Box component="div" className={classes.site}>
                    <Typography variant="body2" component="p" className={classes.title}>
                        Starting a business in USA (US. Small Business Administration)
                    </Typography>
                    <Typography variant="body2" component="p">
                        <Link component="a" href="www.sba.gov/" target="_blank">www.sba.gov/</Link>
                    </Typography>
                </Box>
                <Box component="div" className={classes.site}>
                    <Typography variant="body2" component="p" className={classes.title}>
                        Importing and Exporting
                    </Typography>
                    <Typography variant="body2" component="p">
                        <Link component="a" href="www.cbp.gov/trade/basic-import-export" target="_blank">www.cbp.gov/trade/basic-import-export</Link>
                    </Typography>
                </Box>
                <Box component="div" className={classes.site}>
                    <Typography variant="body2" component="p" className={classes.title}>
                        Business and Investment with USA
                    </Typography>
                    <Typography variant="body2" component="p">
                        <Link component="a" href="www.commerce.gov/" target="_blank">www.commerce.gov/</Link>
                    </Typography>
                </Box>
                <Box component="div" className={classes.site}>
                    <Typography variant="body2" component="p" className={classes.title}>
                        US Tariff Rates
                    </Typography>
                    <Typography variant="body2" component="p">
                        <Link component="a" href="https://usitc.gov/" target="_blank">https://usitc.gov/</Link>
                    </Typography>
                </Box>
                <Box component="div" className={classes.site}>
                    <Typography variant="body2" component="p" className={classes.title}>
                        Trade with USA
                    </Typography>
                    <Typography variant="body2" component="p">
                        <Link component="a" href="www.trade.gov/" target="_blank">www.trade.gov/</Link>
                    </Typography>
                </Box>
                <Box component="div" className={classes.site}>
                    <Typography variant="body2" component="p" className={classes.title}>
                        Trade regulations for food items – FDA
                    </Typography>
                    <Typography variant="body2" component="p">
                        <Link component="a" href="www.fda.gov/industry/fda-basics-industry/imports" target="_blank">www.fda.gov/industry/fda-basics-industry/imports</Link>
                    </Typography>
                </Box>
			</Box>
		</Layout>
	);
};

export default TradeAndInvestment;
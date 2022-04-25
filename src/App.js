import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core';

import Home from './pages/home';
import ViewNigeria from './pages/viewNigeria';
import Gallery from './pages/gallery';
import News from './pages/news';

import { 
	GALLERY, 
	GOVERNMENT_AND_POLITICS,
	NEWS,
	CONTACT,
	VIEW_NIGERIA,
	TRADE_AND_INVESTMENT,
	TRAVEL_REQUIREMENTS,
	TOURISM,
	ECONOMY,
	VISA_APPLICATION
} from './routes';

import TravellingRequirements from './pages/services/TravellingRequirements';
import Tourism from './pages/viewNigeria/Tourism';
import NigerianEconomy from './pages/viewNigeria/NigerianEconomy';
import GovernmentAndPolitics from './pages/viewNigeria/GovernmentAndPolitics';
import TradeAndInvestment from './pages/viewNigeria/TradeAndInvestment';
import VisaApplication from './pages/services/VisaApplication';
import Contact from './pages/contact';

import ScrollToTop from './components/layout/ScrollToTop';

const App = () => {
	
	const theme = createTheme({
		overrides: {
			MuiButton: {
				  root: {
					borderRadius: '5px',
					boxShadow: 'none !important',
					paddingBottom: '14px',
					paddingTop: '14px',
					textTransform: 'capitalize'
				  },
			},
		},
		
		palette: {
			primary: {
				// light: '#df3c3a',
				main: '#228C22',
				// dark: '#990300'
			},
	
			text: {
				// primary: '#f8f8f8',
				// secondary: '#f8f8f8'
			}
		},
	
		breakpoints: {
			values: {
				xs: 0,
				sm: 480,
				md: 768,
				lg: 1024,
				xl: 1920
			}
		},
	
		typography: {
			fontFamily: "'Kumbh Sans', sans-serif",
			fontWeightLight: 300,
			fontWeightRegular: 400,
			fontWeightMedium: 500,
			fontWeightBold: 600
		}
	});

	return (
		<ThemeProvider theme={theme}>
			<Router>
				<ScrollToTop>
					<Route path="/" exact component={Home} />
					<Route path={VIEW_NIGERIA} exact component={ViewNigeria} />
					<Route path={GALLERY} exact component={Gallery} />
					<Route path={NEWS} exact component={News} />
					<Route path={CONTACT} exact component={Contact} />
					<Route path={TRAVEL_REQUIREMENTS} exact component={TravellingRequirements} />
					<Route path={TOURISM} exact component={Tourism} />
					<Route path={ECONOMY} exact component={NigerianEconomy} />
					<Route path={GOVERNMENT_AND_POLITICS} exact component={GovernmentAndPolitics} />
					<Route path={TRADE_AND_INVESTMENT} exact component={TradeAndInvestment} />
					<Route path={VISA_APPLICATION} exact component={VisaApplication} />
				</ScrollToTop>
			</Router>
		</ThemeProvider>
	);
}

export default App;
